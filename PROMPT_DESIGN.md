# CV 자동 생성 서비스 — Claude API 프롬프트 설계서

> 현재 이윤수씨 사이트 구조를 기반으로 설계.
> **어떤 직군, 어떤 분야**의 사용자가 입력해도 동일한 퀄리티로 출력되는 것이 목표.

---

## 📌 핵심 원칙

1. **모든 출력은 JSON** — 템플릿에 바로 주입 가능한 구조
2. **한국어 + 영어 동시 생성** — 사이트의 한/영 토글 지원
3. **사실 기반** — 없는 내용 지어내지 않음. 단, 표현은 전문적으로 다듬음
4. **수치 우선** — 입력에 수치가 있으면 반드시 포함
5. **직군 무관** — 개발자, 디자이너, 마케터, 연구자 등 모든 분야 대응
6. **섹션 자동 구성** — 고정 섹션이 아니라, AI가 입력 내용을 분석하여 최적의 섹션 구성을 자동 결정
7. **디자인 시스템 준수** — 폰트, 컬러 토큰, 레이아웃 규격을 반드시 유지

---

## 🔧 STEP 0: 마스터 System Prompt (모든 API 호출에 공통 적용)

```
You are a professional CV writer and technical editor specializing in personal branding websites.

Your role is to transform raw, unpolished user input into clean, professional content for a personal CV website.

CONTENT RULES:
- Always output valid JSON matching the exact schema provided. No extra text, no markdown fences.
- Generate BOTH Korean (ko) and English (en) versions for every text field.
- **CRITICAL i18n HTML**: When generating HTML or updating Templates, EVERY single text-containing element (nav links, headings, list items, buttons, footer) MUST include `data-ko="..."` and `data-en="..."` attributes. Do not miss a single visible string.
- English: Use active voice, past tense action verbs (Built, Developed, Led, Designed, Implemented, Achieved...)
- Korean: Use formal but readable tone (~했습니다 / ~하였습니다)
- Never fabricate specific facts (numbers, dates, names). If not provided, write impactful qualitative descriptions.
- If numbers ARE provided, always include them in the output.
- Adapt tone and terminology to the user's field — tech, business, design, academia, etc.
- Keep descriptions concise and impactful. Avoid filler words.
- Section names and labels must remain in the language as specified.

SECTION AUTO-CONFIGURATION:
- Do NOT use a fixed section structure. Analyze user input and determine the optimal sections.
- "hero", "about", and "contact" are ALWAYS included.
- Other sections are selected based on user content:
  - Has research + targeting grad school → include "research" section
  - Has work experience + targeting jobs → include "experience" section
  - Has projects → include "projects" section
  - Has publications → include "publications" section
  - Has certifications/awards (2+) → include "certifications" section; if < 2, merge into "about"
  - Has activities (3+) → include "activities" section; if < 3, merge into "about"
- Section ORDER follows user strengths: strongest/most relevant section first.
  - grad_school target: research → experience → projects
  - company target: experience → projects → research
  - freelance target: projects → experience

DESIGN SYSTEM (must be maintained in all outputs):
- Fonts: Display='Playfair Display', Georgia, serif / Body='Source Sans 3', system-ui, sans-serif
- Color tokens (HSL):
  Light: bg=40,20%,97% / fg=220,20%,14% / card=40,20%,99% / accent=18,60%,50% / border=35,15%,88%
  Dark: bg=220,20%,8% / fg=40,15%,92% / card=220,18%,11% / accent=18,60%,55% / border=220,15%,20%
- Layout: max-width 64rem, section padding 80-96px, hero grid 3:2, card radius 12px
- Animations: fade-in (opacity 0→1, translateY 24→0, 0.6s), card hover translateY(-5px)
- User-selected accent color replaces the default accent HSL token. All derived values auto-calculate.
```

---

## 🧩 STEP 0.5: 섹션 자동 구성 (Section Auto-Configuration)

> **핵심**: 섹션을 About / Research / Projects / Activities로 고정하지 않는다.
> AI가 사용자 입력을 분석하여 가장 적합한 섹션 구성을 자동으로 결정한다.

### User Prompt 템플릿
```
Section: SECTION_PLAN
Analyze the following user profile and determine the optimal section layout.

User profile summary:
- Career type: {career_type}  (student | job_seeker | researcher | experienced | freelancer)
- Has research experience: {has_research}
- Has work experience: {has_work}
- Has projects: {has_projects}
- Has certifications/awards: {has_certs}
- Has publications: {has_publications}
- Has activities/extracurricular: {has_activities}
- Target audience: {target}  (grad_school | company_hiring | freelance_client | general)

Generate the section plan JSON:
{
  "sections": [
    {
      "id": "...",
      "titleKo": "...",
      "titleEn": "...",
      "type": "hero | about | experience | research | projects | publications | certifications | activities | skills | contact"
    }
  ]
}

SECTION SELECTION RULES:
- "hero" and "contact" are ALWAYS included (first and last)
- "about" is ALWAYS included (second section)
- For the remaining sections, SELECT and ORDER based on the user's strengths:

Decision matrix:
| Condition | Include Section | Section Title |
|-----------|----------------|---------------|
| has_research && target=grad_school | "research" | 연구 / Research |
| has_work && target=company | "experience" | 경력 / Work Experience |
| has_work && !has_research | "experience" | 경력 / Experience |
| has_research && has_work | both "research" + "experience" | 연구 + 경력 |
| has_projects | "projects" | 프로젝트 / Projects |
| has_publications | "publications" | 논문 / Publications |
| has_certs && count >= 2 | "certifications" | 자격 및 수상 / Certifications & Awards |
| has_certs && count < 2 | merge into "about" | (About 섹션에 포함) |
| has_activities && count >= 3 | "activities" | 활동 / Activities |
| has_activities && count < 3 | merge into "about" | (About 섹션에 포함) |

ORDERING RULES:
- hero → about → [strongest section first] → ... → contact
- "Strongest" = most content / most relevant to target audience
- If target=grad_school: research before experience
- If target=company: experience before research
- projects always comes after experience/research
- activities/certifications come last (before contact)

EXAMPLES:
- 대학원 지망 연구자: hero → about → research → projects → publications → contact
- 신입 개발자: hero → about → projects → certifications → contact
- 경력직 마케터: hero → about → experience → projects → activities → contact
- 프리랜서 디자이너: hero → about → projects → experience → contact
```

---

## 🎨 디자인 시스템 규격 (Design System Specification)

> 생성되는 모든 사이트는 반드시 아래 규격을 따른다.

### 폰트
```
Display (제목): 'Playfair Display', Georgia, serif
Body (본문):   'Source Sans 3', system-ui, sans-serif
```

### 컬러 토큰 (HSL)
```
[Light Mode]
Background:       hsl(40, 20%, 97%)    — 따뜻한 오프화이트
Foreground:        hsl(220, 20%, 14%)   — 딥 네이비
Card:              hsl(40, 20%, 99%)    — 거의 화이트
Secondary:         hsl(35, 20%, 92%)    — 따뜻한 그레이
Muted-foreground:  hsl(220, 10%, 46%)   — 중간 그레이
Accent:            hsl(18, 60%, 50%)    — 테라코타 오렌지 (기본값, 사용자 변경 가능)
Border:            hsl(35, 15%, 88%)    — 밝은 따뜻한 그레이

[Dark Mode]
Background:       hsl(220, 20%, 8%)    — 딥 네이비
Foreground:        hsl(40, 15%, 92%)    — 따뜻한 라이트
Card:              hsl(220, 18%, 11%)   — 다크 카드
Secondary:         hsl(220, 15%, 16%)   — 다크 세컨더리
Muted-foreground:  hsl(220, 10%, 55%)   — 미디엄 그레이
Accent:            hsl(18, 60%, 55%)    — 밝은 테라코타
Border:            hsl(220, 15%, 20%)   — 다크 보더
```

### 레이아웃 규격
```
Max width:          64rem (1024px)
Section padding:    clamp(80px, 10vh, 120px) (상하) / clamp(24px, 5vw, 48px) (좌우)
Hero grid:          3:2 비율 (md 이상)
About grid:         3:2 비율 (md 이상)
Card grid:          1열(mobile) → 2열(sm) → 3열(lg)
Card border-radius: 12px
Card hover:         translateY(-5px) + box-shadow
Fade-in animation:  opacity 0→1, translateY 24px→0, duration 0.6s
Nav:                fixed, backdrop-filter blur(12px)
```

### ⚠️ UI 결함 방지 규칙 (UI Error Prevention)

| 요소 | 필수 기술 규격 |
|------|----------------|
| **내비게이션** | `scroll-margin-top: 100px` 필수. 모바일(640px 이하)에서는 반드시 **햄버거 버튼(☰) 기반의 JS 토글 메뉴(`nav-menu-wrapper.show`)** 구조를 사용하여 겹침을 방지할 것. |
| **다국어(i18n)** | `<nav>` 링크, `<footer>` 카피라이트, 버튼 등 화면에 보이는 **모든 정적 텍스트 요소**에 예외 없이 `data-ko`와 `data-en` 속성을 작성할 것. |
| **토글 버튼** | 다크모드/언어 변환 버튼은 투박한 이모지(🌙) 대신 **깔끔한 SVG(Sun/Moon)**와 보더가 없는 부드러운 배경(`background: hsla(...)`)의 Soft UI로 구축할 것. |
| **타임라인** | **Grid 레이아웃 필수**: `grid-template-columns: auto 1fr` 사용. 아이콘/노드는 별도 열에 배치하여 텍스트와 절대 겹치지 않게 설계 |
| **섹션 패딩** | `clamp(80px, 12vh, 140px)` (상하) / `clamp(20px, 5vw, 48px)` (좌우) 적용하여 유동적 반응성 확보 |
| **스크롤 유도** | Hero 섹션의 `relative` 자식으로 배치. `bottom: 40px` 고정 및 `animation: float` 적용 |
| **불릿(List)** | `list-style: none` 사용 후 `::before`에 화살표(`→` 또는 `✓`)를 넣어 `padding-left: 32px` 이상 확보 |
| **프리미엄 UI** | 모든 카드(`.card`, `.pcard` 등)는 딱딱한 단색 `border` 대신 투명한 선과 부드러운 `box-shadow`를 활용한 **Soft UI** 컨셉으로 작성하여 페이지에 떠 있는 듯한 고급스러운 깊이감을 줄 것. |
| **가시성** | 다크모드 보더(`--border`)는 `hsla(var(--border) / 0.3)` 등으로 투명도를 조절하여 세련된 구분선 유지 |

---

### 사용자 색상 커스터마이즈
```
사용자가 선택하는 색상 1~2개:
- Primary color → --accent 토큰에 적용
- Secondary color → --primary 토큰에 적용 (선택사항)

나머지 토큰(background, card, border 등)은 자동 계산:
- accent 색상의 hue를 기준으로 accent-light (opacity 8~10%) 자동 생성
- dark mode accent는 lightness를 +5% 조정
```

---

## 📋 STEP 1: Hero 섹션 프롬프트

### 입력받을 정보 (폼 필드)
```
- 이름 (한글, 영문)
- 현재 직함 / 직업
- 현재 소속 (회사/학교)
- 전공 또는 전문 분야 (1~3가지)
- 한줄 자기소개 (자유 서술, 날것 OK)
- Hero 카드에 표시할 정보: 현재 소속, 학력, 집중 분야
```

### User Prompt 템플릿
```
Section: HERO
User raw input:
- Name (Korean): {name_ko}
- Name (English): {name_en}
- Current Title: {title}
- Organization: {organization}
- Fields/Specialties: {fields}
- Self-introduction (raw): {intro_raw}
- Card info — Current: {card_current}, Education: {card_education}, Focus: {card_focus}

Generate the HERO section JSON:
{
  "nameKo": "...",
  "nameEn": "...",
  "eyebrow": "...",         // specialty tags separated by · (e.g. "AI · Computer Vision · Robotics")
  "titleKo": "...",         // job title at organization in Korean
  "titleEn": "...",         // job title at organization in English
  "bioKo": "...",           // 2-sentence professional bio in Korean
  "bioEn": "...",           // 2-sentence professional bio in English  
  "card": {
    "currentKo": "...",
    "currentEn": "...",
    "educationKo": "...",
    "educationEn": "...",
    "focusKo": "...",
    "focusEn": "..."
  }
}
```

### 직군별 eyebrow 예시

| 직군 | eyebrow 출력 예시 |
|------|-----------------|
| 드론 엔지니어 | `Autonomous Systems · UAV Software · Robotics` |
| 마케터 | `Consumer Insights · Brand Strategy · Data-Driven Marketing` |
| 프론트엔드 개발자 | `React · UI/UX · Web Performance` |
| 대학원 연구자 | `Computer Vision · Deep Learning · Robotics` |
| 디자이너 | `Product Design · Figma · User Research` |

---

## 📋 STEP 2: About 섹션 프롬프트

### 입력받을 정보 (폼 필드)
```
- 소개 문단 (자유 서술)
- 경력/학력 타임라인 (여러 항목):
  - 종류: 학력 | 직장 | 연구실 | 기타
  - 기간
  - 기관명
  - 직책/역할 (자유 서술)
- 기술/역량 목록 (쉼표로 나열, 자유)
- 핵심 가치 (자유 서술)
```

### User Prompt 템플릿
```
Section: ABOUT
User raw input:
- Bio paragraph (raw): {bio_raw}
- Timeline entries: {timeline_json}
  (each entry: { type: "education|work|lab|other", period, organization, role_raw })
- Skills (raw list): {skills_raw}
- Core values (raw): {values_raw}

Generate the ABOUT section JSON:
{
  "bioKo": "...",
  "bioEn": "...",
  "timeline": [
    {
      "type": "education|work|lab|other",
      "period": "YYYY - YYYY or YYYY.MM - YYYY.MM",
      "organizationKo": "...",
      "organizationEn": "...",
      "descriptionKo": "...",
      "descriptionEn": "..."
    }
  ],
  "skills": ["...", "..."],
  "coreValuesKo": "...",
  "coreValuesEn": "..."
}

RULES:
- Sort chronologically (oldest first)
- "education" → GraduationCap icon
- "work" or "lab" → Building/Briefcase icon
- If current, use "Present" or "현재"
```

---

## 📋 STEP 3: Research / 경력 섹션 프롬프트

> 연구자/대학원 지망생 → "Research", 취업자 → "Experience"로 섹션명 변경

### User Prompt 템플릿
```
Section: RESEARCH/EXPERIENCE CARD
User raw input for ONE entry:
- Title (raw): {title_raw}
- Period: {period}
- Organization/Role (raw): {org_role_raw}
- Description (raw, can be long and messy): {description_raw}
- Tags/Tech (raw): {tags_raw}
- Award/Outcome (raw): {award_raw}

Generate ONE experience card JSON:
{
  "slug": "...",
  "titleKo": "...",
  "titleEn": "...",
  "summaryKo": "...",
  "summaryEn": "...",
  "period": "YYYY.MM - YYYY.MM",
  "periodKo": "YYYY.MM - YYYY.MM",
  "roleKo": "...",
  "roleEn": "...",
  "tags": ["...", "..."],
  "details": ["...", "..."],
  "detailsKo": ["...", "..."],
  "awardKo": null,
  "awardEn": null
}

RULES:
- details: 3~5 bullets, start with action verbs (Built, Designed, Led, Developed, Analyzed...)
- summaryEn: compelling and specific — avoid generic phrases
- If description is vague ("했음", "잘됨"), extract factual parts + professional framing
- If numbers present (accuracy 79%, 3x faster), always include them
```

---

## 📋 STEP 4: Projects 섹션 프롬프트

### User Prompt 템플릿
```
Section: PROJECT CARD
User raw input for ONE project:
- Title (raw): {title_raw}
- Period: {period}
- Role (raw): {role_raw}
- Description (raw): {description_raw}
- Tech/Tools (raw): {tech_raw}
- Outcome/Achievement (raw): {outcome_raw}

Generate ONE project JSON:
{
  "slug": "...",
  "titleKo": "...",
  "titleEn": "...",
  "descriptionKo": "...",
  "descriptionEn": "...",
  "tech": ["...", "..."],
  "period": "YYYY.MM - YYYY.MM",
  "roleKo": "...",
  "roleEn": "...",
  "details": ["...", "..."],
  "detailsKo": ["...", "..."]
}

RULES:
- tech: Use official/standard names (Python not 파이썬, React not 리액트)
- If outcome has numbers, highlight them in description
- slug: kebab-case English from title
```

---

## 📋 STEP 5: Activities 섹션 프롬프트

### User Prompt 템플릿
```
Section: ACTIVITIES
User raw input (list of activities):
{activities_raw_list}

Generate activities JSON array:
[
  {
    "date": "YYYY.MM",
    "titleKo": "...",
    "titleEn": "...",
    "locationKo": "...",
    "locationEn": "...",
    "detailKo": null,
    "detailEn": null
  }
]

RULES:
- Sort by date descending (most recent first)
- detailKo/detailEn: only for awards, certifications, or notable outcomes
- Keep titles concise (under 35 characters)
```

---

## 📋 STEP 6: Contact 섹션 프롬프트

### User Prompt 템플릿
```
Section: CONTACT
User raw input:
- Email: {email}
- GitHub: {github_url}
- LinkedIn: {linkedin_url}
- Other links: {other_links}
- Contact message (raw): {message_raw}
- User's goal: job_search | grad_school | freelance | networking

Generate contact JSON:
{
  "messageKo": "...",
  "messageEn": "...",
  "links": [
    { "type": "email", "label": "Email", "href": "mailto:..." },
    { "type": "github", "label": "GitHub", "href": "..." },
    { "type": "linkedin", "label": "LinkedIn", "href": "..." }
  ]
}

Message tone by goal:
- job_search → "채용 관련 연락을 환영합니다 / open to career opportunities"
- grad_school → "연구 협업, 대학원 문의를 환영합니다 / research collaborations and graduate inquiries"
- freelance → "프로젝트 협업 문의를 환영합니다 / open to freelance and project collaboration"
- networking → "다양한 연결을 환영합니다 / always open to connecting"
```

---

## 🎨 STEP 7: 최종 마스터 JSON 구조

```json
{
  "meta": {
    "accentHSL": "18 60% 50%",
    "primaryHSL": "220 20% 14%",
    "theme": "light",
    "language": "both"
  },
  "sectionPlan": [
    { "id": "hero", "titleKo": "...", "titleEn": "...", "type": "hero" },
    { "id": "about", "titleKo": "소개", "titleEn": "About Me", "type": "about" },
    { "id": "experience", "titleKo": "경력", "titleEn": "Experience", "type": "experience" },
    { "id": "projects", "titleKo": "프로젝트", "titleEn": "Projects", "type": "projects" },
    { "id": "contact", "titleKo": "연락처", "titleEn": "Get in Touch", "type": "contact" }
  ],
  "hero": { ... },
  "about": { ... },
  "experience": [ ... ],
  "projects": [ ... ],
  "contact": { ... }
}
```

> **sectionPlan** 배열이 섹션 순서와 구성을 결정한다.
> 배열에 없는 섹션은 렌더링하지 않는다.
> 섹션 순서는 배열 순서를 따른다.

---

## ⚠️ 엣지 케이스 처리 규칙

| 상황 | 처리 방법 |
|------|----------|
| 입력이 너무 짧음 ("했음", "잘됨") | 사실적인 부분만 추출 + professional framing |
| 숫자 없는 성과 | "effectively", "significantly", "successfully" 등 qualitative 표현 |
| 영어 실력 낮은 사용자 | 한글로 입력받아 Claude가 영어 생성 |
| 비기술 직군 (마케터, 디자이너 등) | tech 대신 tools/methods 태그 사용 |
| 공백 필드 | null 처리 |
| 기밀 프로젝트 | "Details withheld under confidentiality" 처리 |

---

## 💡 직군별 기술 태그 예시

```
개발자:    Python, React, AWS, Docker, Git
디자이너:  Figma, Adobe XD, User Research, Prototyping
마케터:    Google Analytics, SEO, A/B Testing, CRM
연구자:    PyTorch, MATLAB, Statistical Analysis
경영/기획: OKR, Market Research, Stakeholder Management
```

---

## 💰 API 비용 추정

```
Hero 섹션       → ~500 tokens
About 섹션      → ~800 tokens
경험 3개        → ~1,800 tokens
프로젝트 3개    → ~1,500 tokens
Activities      → ~400 tokens
Contact         → ~300 tokens

총 ~5,300 tokens (경험 3개 + 프로젝트 3개 기준)
→ Claude Haiku:  $0.003 (약 4원)
→ Claude Sonnet: $0.016 (약 22원)
```

> 사용자당 비용이 매우 낮아 수익화 구조 설계 용이.

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp, Calendar, User, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const SwimwearSizeRecommendationContent = ({ lang }: { lang: "ko" | "en" }) => {
  const isKo = lang === "ko";
  const relatedWorks = isKo
    ? [
        {
          badge: "Imbalance",
          title: "SMOTE: Synthetic Minority Over-sampling Technique",
          meta: "Chawla et al., 2002 · JAIR",
          desc: "SMOTE 원논문. 소수 클래스 인접 샘플 간 보간으로 합성 샘플을 생성하며, 수영복 사이즈 분포 불균형 해소의 직접 이론적 근거로 활용했다 [1].",
        },
        {
          badge: "Model",
          title: "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
          meta: "Ke et al., 2017 · NeurIPS",
          desc: "Leaf-wise 분할과 히스토그램 기반 연산으로 높은 학습 효율을 보이며, 범주형·연속형 혼합 소비자 데이터에서 안정적 성능을 보여 LGBM 최종 선정의 핵심 근거가 되었다 [2].",
        },
        {
          badge: "Review",
          title: "Mining and Summarizing Customer Reviews",
          meta: "Hu & Liu, 2004 · KDD",
          desc: "소비자 리뷰에서 의미 있는 특성을 추출하는 초기 연구로, 평점-리뷰 텍스트 상관관계 분석과 사이즈 불만 키워드 추출 접근 설계에 참고했다 [3].",
        },
        {
          badge: "Encoding",
          title: "Encoding High-Cardinality String Categorical Variables",
          meta: "Cerda & Varoquaux, 2022 · JMLR",
          desc: "범주형 인코딩 선택 기준을 체계적으로 다룬 연구로, 브랜드 변수 One-Hot Encoding과 타겟 Label Encoding 설계 근거로 활용했다 [4].",
        },
      ]
    : [
        {
          badge: "Imbalance",
          title: "SMOTE: Synthetic Minority Over-sampling Technique",
          meta: "Chawla et al., 2002 · JAIR",
          desc: "The original SMOTE paper, synthesizing minority samples via interpolation between nearest neighbors. It served as the direct theoretical basis for correcting skewed swimwear size distribution [1].",
        },
        {
          badge: "Model",
          title: "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
          meta: "Ke et al., 2017 · NeurIPS",
          desc: "Leaf-wise splitting and histogram-based computation deliver efficient training on mixed categorical and continuous consumer data, providing the core rationale for selecting LGBM as the final model [2].",
        },
        {
          badge: "Review",
          title: "Mining and Summarizing Customer Reviews",
          meta: "Hu & Liu, 2004 · KDD",
          desc: "Foundational work on extracting meaningful signals from customer reviews. It informed the rating-text correlation analysis and the size-complaint keyword extraction strategy [3].",
        },
        {
          badge: "Encoding",
          title: "Encoding High-Cardinality String Categorical Variables",
          meta: "Cerda & Varoquaux, 2022 · JMLR",
          desc: "Analyzes appropriate encoding strategies for categorical variables and was used to justify One-Hot encoding for brand and Label encoding for the target size variable [4].",
        },
      ];

  const lessons = isKo
    ? [
        "브랜드 feature의 효과는 EDA만으로 예측하기 어려웠고, 다양한 가설을 직접 실험으로 검증하는 과정에서 데이터에 대한 입체적 이해가 가능해졌다.",
        "SMOTE 적용 전후 정확도 0.68 → 0.78 변화는 클래스 불균형 처리가 모델 성능을 좌우할 수 있음을 명확히 보여줬다.",
        "정확도만 높이는 것보다 어떤 이유로 해당 사이즈를 추천했는지 설명 가능한 모델 설계가 신뢰 형성에 중요했다.",
        "허리·가슴·엉덩이 둘레나 구매 이력 같은 추가 변수 확보 여부가 모델 성능 상한을 결정한다는 점을 배웠다.",
      ]
    : [
        "The impact of the Brand feature was difficult to predict from EDA alone, and hypothesis-driven experiments produced a more complete understanding of the data.",
        "The 0.68 to 0.78 jump after SMOTE made clear that class-imbalance handling can be as decisive as model choice.",
        "A trustworthy recommendation system needs explainability, not just accuracy, so feature-level reasoning mattered throughout the project.",
        "The variables secured at data collection time set the model's performance ceiling; more detailed body measurements and purchase history would likely improve precision.",
      ];

  const references = [
    "Chawla, N. V., et al. (2002). SMOTE: Synthetic Minority Over-sampling Technique. Journal of Artificial Intelligence Research, 16, 321-357.",
    "Ke, G., et al. (2017). LightGBM: A Highly Efficient Gradient Boosting Decision Tree. NeurIPS 2017.",
    "Hu, M., & Liu, B. (2004). Mining and Summarizing Customer Reviews. ACM KDD 2004.",
    "Cerda, P., & Varoquaux, G. (2022). Encoding High-Cardinality String Categorical Variables. JMLR, 23(236), 1-45.",
  ];

  const metaSummary = isKo
    ? [
        { label: "Data Source", value: "가나스윔 리뷰 (직접 크롤링)" },
        { label: "Task", value: "다중 분류 · 구매 사이즈 예측" },
        { label: "최종 모델", value: "LGBM Classifier (Acc. 0.79)" },
        { label: "Output", value: "Streamlit 사이즈 추천 앱" },
      ]
    : [
        { label: "Data Source", value: "GanaSwim reviews (self-scraped)" },
        { label: "Task", value: "Multiclass classification · size prediction" },
        { label: "Best Model", value: "LGBM Classifier (Acc. 0.79)" },
        { label: "Output", value: "Streamlit size recommendation app" },
      ];

  const wordCloudCards = isKo
    ? [
        {
          label: "1~2점 · 사이즈 불만",
          accent: "text-rose-500 border-rose-200 bg-rose-50/70 dark:bg-rose-500/10 dark:border-rose-500/20",
          words: ["작다", "크다", "교환", "반품", "실망", "오버사이즈", "작게나왔어요", "핏"],
        },
        {
          label: "3점 · 중립",
          accent: "text-amber-500 border-amber-200 bg-amber-50/70 dark:bg-amber-500/10 dark:border-amber-500/20",
          words: ["평소대로", "조금", "괜찮아요", "무난", "배송", "디자인", "소재"],
        },
        {
          label: "4~5점 · 만족",
          accent: "text-emerald-500 border-emerald-200 bg-emerald-50/70 dark:bg-emerald-500/10 dark:border-emerald-500/20",
          words: ["딱", "예뻐요", "정사이즈", "추천", "착용감", "재구매", "만족"],
        },
      ]
    : [
        {
          label: "1-2 Stars · Size Complaints",
          accent: "text-rose-500 border-rose-200 bg-rose-50/70 dark:bg-rose-500/10 dark:border-rose-500/20",
          words: ["too small", "too large", "exchange", "return", "disappointed", "oversized", "tight", "fit"],
        },
        {
          label: "3 Stars · Neutral",
          accent: "text-amber-500 border-amber-200 bg-amber-50/70 dark:bg-amber-500/10 dark:border-amber-500/20",
          words: ["as usual", "a little", "okay", "decent", "shipping", "design", "material"],
        },
        {
          label: "4-5 Stars · Satisfied",
          accent: "text-emerald-500 border-emerald-200 bg-emerald-50/70 dark:bg-emerald-500/10 dark:border-emerald-500/20",
          words: ["perfect fit", "love it", "true to size", "recommend", "comfortable", "repurchase", "satisfied"],
        },
      ];

  const accuracyStages = [
    { labelKo: "Baseline", labelEn: "Baseline", value: 0.5, tone: "bg-slate-500/70 dark:bg-slate-500/40" },
    { labelKo: "Feature Eng.", labelEn: "Feature Eng.", value: 0.685, tone: "bg-sky-600/80 dark:bg-sky-500/55" },
    { labelKo: "SMOTE", labelEn: "SMOTE", value: 0.78, tone: "bg-emerald-700/85 dark:bg-emerald-500/65" },
    { labelKo: "튜닝", labelEn: "Tuning", value: 0.79, tone: "bg-teal-700/90 dark:bg-teal-500/75" },
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      <section>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metaSummary.map((item) => (
            <div key={item.label} className="rounded-xl border bg-card p-4">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "프로젝트 개요" : "Project Overview"}
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            {isKo
              ? "온라인 패션 시장의 전체 반품 사유 중 약 30%가 사이즈 불일치에서 발생하며, 착용감에 민감한 수영복은 이 문제가 더욱 두드러진다. 소비자 리뷰는 구매 결정에 직접 영향을 미치며, 리뷰 기반 추천 시스템의 필요성이 크다."
              : "Approximately 30% of all online fashion returns stem from size mismatches, and the problem is amplified for fit-sensitive items like swimwear. Consumer reviews strongly influence purchase decisions, making review-based size recommendation a practical solution direction."}
          </p>
          <p>
            {isKo
              ? "본 프로젝트는 가나스윔 리뷰 데이터를 Selenium으로 직접 크롤링하여 신체 정보와 브랜드 변수를 결합한 사이즈 분류 모델을 구축했다. Feature Engineering, SMOTE, 8개 모델 비교, GridSearchCV 튜닝을 거쳐 베이스라인 0.50에서 최종 정확도 0.79까지 개선했고, 결과를 Streamlit 앱으로 배포했다."
              : "This project scraped GanaSwim review data directly with Selenium and built a size classification model that combines body measurements with brand features. A sequential pipeline of feature engineering, SMOTE, 8-model comparison, and GridSearchCV tuning improved performance from a 0.50 baseline to 0.79, then shipped the result as a Streamlit app."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "배경 및 문제 정의" : "Background & Problem Definition"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(
            isKo
              ? [
                  {
                    label: "MARKET STAT",
                    title: "반품의 30%는 사이즈",
                    body: "온라인 패션 반품 사유 중 약 30%가 사이즈 불일치에서 발생하며, 수영복처럼 착용감에 민감한 제품에서 특히 심각하다.",
                  },
                  {
                    label: "CONSUMER BEHAVIOR",
                    title: "리뷰 신뢰도 97.2%",
                    body: "대다수 소비자가 구매 전 리뷰를 확인하며, 실제 구매 후 작성된 착용 리뷰는 사이즈 정보 소스로서 가장 높은 신뢰도를 가진다.",
                  },
                  {
                    label: "SOLUTION DIRECTION",
                    title: "개인화 추천으로 해결",
                    body: "키, 몸무게, 성별, 브랜드 정보를 바탕으로 실제 구매 패턴을 학습해 사이즈 반품을 줄이고 구매 전환율을 높이는 방향을 검증했다.",
                  },
                ]
              : [
                  {
                    label: "MARKET STAT",
                    title: "30% of Returns Are Size Issues",
                    body: "Roughly 30% of online fashion returns are caused by size mismatches, and the problem is more severe for fit-sensitive products like swimwear.",
                  },
                  {
                    label: "CONSUMER BEHAVIOR",
                    title: "97.2% Read Reviews Before Buying",
                    body: "Most consumers check reviews before purchase, and post-purchase fit reviews serve as one of the most trusted sources of sizing information.",
                  },
                  {
                    label: "SOLUTION DIRECTION",
                    title: "Personalized Recommendation",
                    body: "The project validated a personalized path: learn actual purchase patterns from height, weight, gender, and brand to reduce return risk and improve conversion.",
                  },
                ]
          ).map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <p className="mb-2 text-[11px] uppercase tracking-wide text-emerald-700 dark:text-emerald-400">{item.label}</p>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "관련 연구" : "Related Work"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedWorks.map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="text-xs text-muted-foreground">{item.meta}</p>
                <span className="rounded-full border border-emerald-700/20 bg-emerald-700/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "분석 파이프라인" : "Analysis Pipeline"}
        </h2>
        <div className="rounded-xl border bg-card p-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
            {[
              ["Step 1", "Scraping", "Selenium"],
              ["Step 2", "EDA", isKo ? "정제·탐색" : "Clean & Explore"],
              ["Step 3", "Feature Eng.", isKo ? "파생변수" : "Derived vars"],
              ["Step 4", "Preprocessing", isKo ? "인코딩·스케일" : "Encode & Scale"],
              ["Step 5", "SMOTE", isKo ? "불균형 해소" : "Rebalance"],
              ["Step 6", "Modeling", isKo ? "8모델 비교" : "8-model compare"],
              ["Step 7", "Streamlit", isKo ? "앱 배포" : "App deploy"],
            ].map(([step, title, subtitle], index) => (
              <div
                key={title}
                className={`rounded-lg border px-3 py-4 text-center ${
                  index === 0 || index === 5
                    ? "border-emerald-700/35 bg-emerald-700/5"
                    : index === 2
                      ? "border-sky-500/40 bg-sky-500/5"
                      : index === 4
                        ? "border-amber-500/40 bg-amber-500/5"
                        : "bg-secondary/35"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{step}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "핵심 내용" : "Core Breakdown"}
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "데이터 수집 및 정제" : "Data Collection & Cleaning"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "Selenium으로 가나스윔 플랫폼 리뷰 데이터를 직접 크롤링하고, 제품명, 평점, 구매날짜, 키·몸무게, 평소 사이즈, 구매 사이즈 등 12개 변수를 수집했다.",
                    "제품명 기준으로 수영복 상품만 필터링했고, 평소 사이즈, 구매 사이즈, 키, 몸무게의 결측값 약 17%를 제거했다.",
                    "평소 사이즈와 구매 사이즈가 2단계 이상 차이 나는 케이스는 리뷰 확인 결과 선물·대리 구매로 판단해 이상치로 제외했다.",
                  ]
                : [
                    "Scraped GanaSwim review data directly with Selenium, collecting 12 variables including product name, rating, purchase date, height, weight, usual size, and purchased size.",
                    "Filtered the dataset to swimwear products and removed roughly 17% missing values across the key size and body-measurement fields.",
                    "Cases with a 2+ size gap between usual and purchased size were manually verified as gift or proxy purchases and excluded as outliers.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-700 dark:bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "EDA 및 Feature Engineering" : "EDA & Feature Engineering"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "낮은 평점 리뷰일수록 '작다', '크다', '교환' 같은 사이즈 불만 키워드가 증가했고, 대다수 구매자는 평소 사이즈 또는 한 사이즈 크게 구매하는 패턴을 보였다.",
                    "성별과 브랜드 파생변수를 생성하고, 데이터 희소성을 줄이기 위해 리뷰 수 기준 상위 6개 브랜드만 유지했다.",
                    "브랜드 feature 추가 시 전 모델에서 약 5~7%p 정확도 향상이 확인되어 브랜드별 사이즈 기준 차이가 중요한 예측 변수임을 검증했다.",
                  ]
                : [
                    "EDA showed that size-complaint keywords such as 'too small', 'too large', and 'exchange' intensify in low-rating reviews, while most buyers choose their usual size or one size up.",
                    "Created derived Gender and Brand features, retaining only the top 6 brands by review count to avoid sparsity.",
                    "Adding the Brand feature lifted accuracy by roughly 5 to 7 percentage points across models, confirming that brand-level size standards are meaningful predictors.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-700 dark:bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "전처리 및 파생변수 시각 요약" : "Preprocessing & Feature Summary"}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {(
                isKo
                  ? [
                      ["Gender", "파생변수", "남성/여성 수영복의 사이즈 체계 차이를 분리해 예측에 반영."],
                      ["Brand Top6", "파생변수", "브랜드별 상이한 사이즈 기준을 반영해 정확도를 5~7%p 끌어올림."],
                      ["One-Hot + Scale", "전처리", "Brand는 One-Hot, 키·몸무게는 MinMax Scaling으로 학습 안정성 확보."],
                      ["SMOTE", "불균형 보정", "M·L 중심 클래스 쏠림을 완화해 소수 사이즈 예측 성능을 개선."],
                    ]
                  : [
                      ["Gender", "Derived", "Separated men's and women's sizing systems so the model could learn different purchase patterns."],
                      ["Brand Top 6", "Derived", "Captured brand-specific sizing standards and lifted accuracy by roughly 5 to 7 percentage points."],
                      ["One-Hot + Scale", "Preprocess", "Applied One-Hot to brand and MinMax scaling to height and weight for stable learning."],
                      ["SMOTE", "Rebalance", "Corrected the M/L-heavy class skew and improved minority-size prediction quality."],
                    ]
              ).map(([title, badge, body], index) => (
                <div key={title} className="rounded-xl border bg-secondary/30 p-4">
                  <p className={`mb-2 text-[10px] uppercase tracking-[0.18em] ${index === 3 ? "text-amber-600 dark:text-amber-400" : "text-emerald-700 dark:text-emerald-400"}`}>{badge}</p>
                  <h4 className="mb-2 font-semibold text-foreground">{title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "평점 구간별 리뷰 워드클라우드 요약" : "Word-Cloud Summary by Rating Segment"}
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {wordCloudCards.map((card) => (
                <div key={card.label} className={`rounded-xl border p-4 ${card.accent}`}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em]">{card.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.words.map((word, index) => (
                      <span
                        key={word}
                        className={`rounded-full border px-3 py-1 ${
                          index < 2
                            ? "text-sm font-semibold"
                            : index < 4
                              ? "text-[13px] font-medium"
                              : "text-xs"
                        }`}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {isKo
                ? "1~2점 리뷰에 '작다', '크다', '교환' 같은 사이즈 불만 키워드가 집중되어, 평점과 사이즈 만족도의 상관관계를 확인했다."
                : "Keywords such as 'too small', 'too large', and 'exchange' concentrate in 1-2 star reviews, confirming a clear relationship between rating and size satisfaction."}
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "전처리, 모델 비교 및 배포" : "Preprocessing, Modeling & Deployment"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed mb-5">
              {(isKo
                ? [
                    "Brand에는 One-Hot Encoding, 키·몸무게에는 MinMax Scaling, 타겟 사이즈에는 Label Encoding을 적용했다.",
                    "SMOTE로 M, L에 집중된 클래스 분포를 보정했고, LGBM 기준 성능이 0.685에서 0.78로 상승했다.",
                    "최종 LGBM 모델은 GridSearchCV 튜닝 후 정확도 0.79를 달성했고, Streamlit 앱에는 평소 사이즈 미입력 사용자를 위한 폴백 분기까지 구현했다.",
                  ]
                : [
                    "Applied One-Hot encoding to Brand, MinMax scaling to height and weight, and Label encoding to the target size.",
                    "SMOTE corrected the size-class skew concentrated in M and L, raising LGBM performance from 0.685 to 0.78.",
                    "After GridSearchCV tuning, the final LGBM model reached 0.79 accuracy and was deployed in a Streamlit app with a fallback branch for users without usual-size history.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-700 dark:bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-3 pr-4">{isKo ? "모델" : "Model"}</th>
                    <th className="py-3 pr-4">{isKo ? "Brand 제외" : "w/o Brand"}</th>
                    <th className="py-3 pr-4">{isKo ? "Brand 포함" : "w/ Brand"}</th>
                    <th className="py-3 pr-4">{isKo ? "SMOTE 후" : "After SMOTE"}</th>
                    <th className="py-3">{isKo ? "최종(튜닝)" : "Final (Tuned)"}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["LGBM Classifier", "0.624", "0.685", "0.78", "0.79"],
                    ["Random Forest", "0.626", "0.679", "-", "-"],
                    ["Decision Tree", "0.627", "0.672", "-", "-"],
                    ["XGBoost", "0.616", "0.662", "-", "-"],
                    ["KNN", "0.610", "0.672", "-", "-"],
                    ["Gradient Boosting", "0.622", "0.677", "-", "-"],
                    ["Logistic Regression", "0.596", "0.629", "-", "-"],
                    ["SVC", "0.583", "0.635", "-", "-"],
                  ].map((row, index) => (
                    <tr key={row[0]} className={index === 0 ? "border-b border-border/60 bg-emerald-700/5 text-foreground" : "border-b border-border/60"}>
                      <td className="py-3 pr-4 font-medium">{row[0]}</td>
                      <td className="py-3 pr-4">{row[1]}</td>
                      <td className="py-3 pr-4">{row[2]}</td>
                      <td className="py-3 pr-4">{row[3]}</td>
                      <td className="py-3">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {isKo
                ? "베이스라인 0.50에서 시작해 Feature Engineering으로 0.685, SMOTE로 0.78, GridSearchCV 튜닝으로 최종 0.79까지 개선했다."
                : "Starting from a 0.50 baseline, performance improved to 0.685 with feature engineering, 0.78 with SMOTE, and 0.79 after GridSearchCV tuning."}
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-4">
              {isKo ? "LGBM 정확도 개선 흐름" : "LGBM Accuracy Progression"}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {accuracyStages.map((stage) => (
                <div key={stage.labelEn} className="rounded-xl border bg-secondary/30 p-4">
                  <div className="flex items-end gap-3">
                    <div className="flex h-36 w-14 items-end rounded-md bg-background/80 p-1">
                      <div
                        className={`w-full rounded-sm ${stage.tone}`}
                        style={{ height: `${stage.value * 100}%` }}
                      />
                    </div>
                    <div className="pb-1">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {isKo ? stage.labelKo : stage.labelEn}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-foreground">{stage.value.toFixed(3).replace(/0$/, "")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {isKo
                ? "Feature Engineering과 SMOTE가 가장 큰 성능 향상을 만들었고, 최종 튜닝은 LGBM의 의사결정 경계를 미세 조정하는 역할을 했다."
                : "Feature engineering and SMOTE delivered the largest gains, while final tuning refined LGBM's decision boundary for the last improvement step."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="rounded-xl border border-sky-500/20 bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-sky-600/10 px-2.5 py-1 text-[11px] font-medium text-sky-700 dark:text-sky-400">LightGBM</span>
                <span className="text-xs text-muted-foreground">{isKo ? "모델 선정 근거" : "Selection Rationale"}</span>
              </div>
              <h3 className="mb-3 font-semibold text-foreground">
                {isKo ? "LGBM Classifier 선정 이유" : "Why LGBM Classifier"}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {(isKo
                  ? [
                      "브랜드 포함/제외, SMOTE 전후 모든 조건에서 가장 높은 정확도를 기록했다.",
                      "Leaf-wise 분할 전략으로 깊이 대비 표현력이 높고 학습 속도도 효율적이었다.",
                      "범주형과 연속형이 섞인 소비자 데이터에서 XGBoost 대비 안정적인 결과를 보였다.",
                      "GridSearchCV에서 n_estimators, max_depth, learning_rate, num_leaves를 조정해 0.79까지 끌어올렸다.",
                    ]
                  : [
                      "It recorded the highest accuracy across every setting, with and without brand features and before and after SMOTE.",
                      "Leaf-wise growth delivered strong expressiveness per depth while keeping training efficient.",
                      "It remained stable on mixed categorical and continuous consumer features, outperforming XGBoost in this workflow.",
                      "GridSearchCV over n_estimators, max_depth, learning_rate, and num_leaves pushed the final score to 0.79.",
                    ]).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-700 dark:bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-500">Streamlit</span>
                <span className="text-xs text-muted-foreground">{isKo ? "배포 결과" : "Deployment Output"}</span>
              </div>
              <h3 className="mb-3 font-semibold text-foreground">
                {isKo ? "사이즈 추천 앱 구성" : "Size Recommendation App"}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {(isKo
                  ? [
                      "사용자는 성별, 키, 몸무게, 평소 사이즈, 브랜드를 입력해 추천 사이즈를 즉시 확인할 수 있다.",
                      "평소 사이즈가 없는 첫 구매자는 폴백 모델로 자동 전환해 입력 누락 상황을 처리했다.",
                      "브랜드별 사이즈 기준 차이를 안내해 결과 해석성을 보완했다.",
                      "최종 결과물은 포트폴리오에서 바로 설명 가능한 형태의 Streamlit 앱으로 정리했다.",
                    ]
                  : [
                      "Users enter gender, height, weight, usual size, and brand to receive a recommended purchase size instantly.",
                      "First-time buyers without a usual-size history are automatically routed to a fallback model.",
                      "The app adds brand-level sizing guidance to improve result interpretability.",
                      "The final deliverable was packaged as a Streamlit app suitable for live portfolio demonstration.",
                    ]).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "한계 및 향후 과제" : "Limitations & Future Work"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(
            isKo
              ? [
                  {
                    title: "첫 구매자 Cold-Start 문제",
                    body: "평소 사이즈 feature가 없는 신규 구매자는 예측 성능이 제한된다. 평소 사이즈를 제외한 폴백 모델을 구현했지만, 신체 치수 기반 규칙과의 앙상블 여지가 남아 있다.",
                  },
                  {
                    title: "신체 변수의 한계",
                    body: "키와 몸무게만으로는 체형 다양성을 충분히 반영하기 어렵다. 허리, 가슴, 엉덩이 둘레 같은 상세 신체 치수가 확보되면 정확도를 더 높일 수 있다.",
                  },
                  {
                    title: "브랜드 커버리지 한계",
                    body: "리뷰 수 상위 6개 브랜드만 포함되어 신규·소규모 브랜드에는 적용이 어렵다. 브랜드 임베딩 기반 접근이 확장 대안이 될 수 있다.",
                  },
                  {
                    title: "리뷰 텍스트 분석 고도화",
                    body: "단순 키워드 기반 텍스트 해석에는 한계가 있다. 향후 고급 LLM을 활용해 리뷰에서 사이즈 적합 여부를 더 정교하게 추출할 수 있다.",
                  },
                ]
              : [
                  {
                    title: "First-Time Buyer Cold-Start",
                    body: "Users without a usual-size history are harder to predict accurately. A fallback model was implemented, but an ensemble with rule-based body-measurement logic remains a clear next step.",
                  },
                  {
                    title: "Limited Body Features",
                    body: "Height and weight alone cannot fully represent body shape diversity. Waist, chest, and hip measurements would likely improve precision.",
                  },
                  {
                    title: "Brand Coverage Gap",
                    body: "The model only covers the top 6 brands by review volume, making it less usable for new or niche brands. Brand embeddings could support expansion.",
                  },
                  {
                    title: "Richer Review Text Analysis",
                    body: "Simple keyword-based review analysis has clear limits. A stronger LLM pipeline could extract fit satisfaction labels from text more reliably.",
                  },
                ]
          ).map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "배운 것들" : "Lessons Learned"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson} className="rounded-xl border bg-card p-5 text-sm text-muted-foreground leading-relaxed">
              {lesson}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "참고 문헌" : "References"}
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {references.map((reference, index) => (
            <p key={reference}>
              <span className="mr-2 text-emerald-700 dark:text-emerald-400">[{index + 1}]</span>
              {reference}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

const AiRecipeRecommendationContent = ({ lang }: { lang: "ko" | "en" }) => {
  const isKo = lang === "ko";
  const relatedWorks = isKo
    ? [
        {
          badge: "Detection",
          title: "YOLOv8: A Novel Object Detection Algorithm with Enhanced Performance",
          meta: "Varghese & Babu, 2024 · arXiv",
          desc: "YOLOv8의 Anchor-free Head와 C2f 모듈이 YOLOv5 대비 불규칙한 형태의 객체 탐지에서 우위임을 분석한 연구로, 식재료 인식 모델로 YOLOv8l을 채택한 핵심 근거가 되었다 [1].",
        },
        {
          badge: "Food AI",
          title: "Grab, Pay, and Eat: Semantic Food Detection for Smart Restaurants",
          meta: "Aguilar et al., 2019 · IEEE Access",
          desc: "음식 도메인 객체 탐지 선행 연구로, 바운딩 박스 라벨링 품질의 중요성과 클래스 수 증가에 따른 성능 특성을 47개 클래스 설계 시 참고하였다 [2].",
        },
        {
          badge: "LLM",
          title: "Textbooks Are All You Need II: phi-1.5 Technical Report",
          meta: "Li et al., 2023 · arXiv",
          desc: "1.3B 파라미터의 Phi-1.5가 제한된 연산 환경에서도 경쟁력 있는 자연어 성능을 보인다는 점을 근거로 레시피 생성용 LLM으로 채택했다 [3].",
        },
        {
          badge: "Augmentation",
          title: "A Survey on Image Data Augmentation for Deep Learning",
          meta: "Shorten & Khoshgoftaar, 2019 · J.BigData",
          desc: "회전, 반전, 조도 변화 증강이 일반화 성능에 주는 영향을 정리한 서베이로, 데이터셋을 2~3배 확장하는 전략의 이론적 근거가 되었다 [4].",
        },
        {
          badge: "Prompt",
          title: "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT",
          meta: "White et al., 2023 · arXiv",
          desc: "식재료 리스트를 정형화된 레시피 포맷으로 바꾸기 위해 Output Format Specification 패턴을 적용할 때 참고한 핵심 문헌이다 [5].",
        },
        {
          badge: "Labeling",
          title: "Microsoft COCO: Common Objects in Context",
          meta: "Lin et al., 2014 · ECCV",
          desc: "34,008장 식재료 이미지 라벨링 기준과 mAP@50, mAP@0.5:0.95 해석 기준을 제공한 표준 참고 문헌으로 활용했다 [6].",
        },
      ]
    : [
        {
          badge: "Detection",
          title: "YOLOv8: A Novel Object Detection Algorithm with Enhanced Performance",
          meta: "Varghese & Babu, 2024 · arXiv",
          desc: "Analyzes how YOLOv8's anchor-free head and C2f module outperform YOLOv5 for irregular object shapes, providing the main rationale for choosing YOLOv8l [1].",
        },
        {
          badge: "Food AI",
          title: "Grab, Pay, and Eat: Semantic Food Detection for Smart Restaurants",
          meta: "Aguilar et al., 2019 · IEEE Access",
          desc: "A food-domain detection study referenced for bounding-box labeling quality and the performance impact of scaling to many ingredient classes [2].",
        },
        {
          badge: "LLM",
          title: "Textbooks Are All You Need II: phi-1.5 Technical Report",
          meta: "Li et al., 2023 · arXiv",
          desc: "Shows that Phi-1.5 delivers competitive natural-language performance at 1.3B parameters, justifying its use under constrained compute [3].",
        },
        {
          badge: "Augmentation",
          title: "A Survey on Image Data Augmentation for Deep Learning",
          meta: "Shorten & Khoshgoftaar, 2019 · J.BigData",
          desc: "Grounded the 2-3x augmentation strategy using brightness, rotation, and flipping to improve generalization [4].",
        },
        {
          badge: "Prompt",
          title: "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT",
          meta: "White et al., 2023 · arXiv",
          desc: "Referenced for using the Output Format Specification pattern to turn ingredient lists into stable recipe outputs [5].",
        },
        {
          badge: "Labeling",
          title: "Microsoft COCO: Common Objects in Context",
          meta: "Lin et al., 2014 · ECCV",
          desc: "Used as the labeling and evaluation reference for the 34,008-image ingredient dataset and for interpreting mAP metrics [6].",
        },
      ];

  const lessons = isKo
    ? [
        "정확도 자체보다 GPU 제약, 실시간성, 데이터 특성에 맞는 모델을 고르는 판단이 더 중요하다는 점을 YOLOv5-YOLOv8l 비교에서 확인했다.",
        "YOLO와 LLM을 하나의 파이프라인으로 연결하자 입출력 형식 변환, 추론 지연, 결과 정합성 같은 통합 문제가 새로 드러났다.",
        "34,008장 직접 라벨링을 통해 라벨링 가이드라인의 선행 정의가 학습 품질을 좌우한다는 점을 체감했다.",
        "같은 Phi-1.5라도 프롬프트 구조에 따라 출력 품질이 크게 달라졌고, 프롬프트 설계가 실제 엔지니어링 업무라는 점을 확인했다.",
      ]
    : [
        "The YOLOv5 vs YOLOv8l comparison confirmed that model choice must fit GPU limits, real-time requirements, and data characteristics rather than chase raw metrics in isolation.",
        "Connecting YOLO and an LLM exposed integration-level problems such as I/O conversion, latency, and result consistency that do not appear in isolated model evaluation.",
        "Manual labeling at 34,008-image scale reinforced that a labeling guide must exist before annotation begins if training quality is expected to remain consistent.",
        "Phi-1.5 output quality changed dramatically with prompt structure, confirming that prompt engineering is a genuine systems-design task rather than a wording exercise.",
      ];

  const references = [
    "Varghese, R., & Babu, S. M. (2024). YOLOv8: A Novel Object Detection Algorithm with Enhanced Performance and Robustness. arXiv:2305.09972.",
    "Aguilar, E., et al. (2019). Grab, Pay, and Eat: Semantic Food Detection for Smart Restaurants. IEEE Access, 7.",
    "Li, Y., et al. (2023). Textbooks Are All You Need II: phi-1.5 Technical Report. arXiv:2309.05463. Microsoft Research.",
    "Shorten, C., & Khoshgoftaar, T. M. (2019). A Survey on Image Data Augmentation for Deep Learning. Journal of Big Data, 6(1), 60.",
    "White, J., et al. (2023). A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT. arXiv:2302.11382.",
    "Lin, T.-Y., et al. (2014). Microsoft COCO: Common Objects in Context. ECCV 2014.",
  ];

  const metaSummary = isKo
    ? [
        { label: "Data", value: "47 class · 34,008장 (크롤링 + 직접 촬영)" },
        { label: "Vision Model", value: "YOLOv8l (mAP@50 ≈ 0.55)" },
        { label: "LLM", value: "microsoft/phi-1.5 (Hugging Face)" },
        { label: "Pipeline", value: "이미지 → 탐지 → 레시피 (E2E)" },
      ]
    : [
        { label: "Dataset", value: "47 classes · 34,008 images (scraping + self-shot)" },
        { label: "Vision Model", value: "YOLOv8l (mAP@50 ≈ 0.55)" },
        { label: "LLM", value: "microsoft/phi-1.5 (Hugging Face)" },
        { label: "Pipeline", value: "Image → Detection → Recipe (E2E)" },
      ];

  const stats = isKo
    ? [
        { num: "47", label: "Class 수" },
        { num: "~11K", label: "원본 이미지" },
        { num: "34,008", label: "증강 후 최종" },
        { num: "×2~3", label: "증강 배율" },
      ]
    : [
        { num: "47", label: "Classes" },
        { num: "~11K", label: "Original Images" },
        { num: "34,008", label: "After Augmentation" },
        { num: "×2~3", label: "Aug. Multiplier" },
      ];

  return (
    <div className="space-y-10 sm:space-y-12">
      <section>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metaSummary.map((item) => (
            <div key={item.label} className="rounded-xl border bg-card p-4">
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "프로젝트 개요" : "Project Overview"}
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            {isKo
              ? "1인 가구 증가와 간편식 소비 확대로 냉장고 속 재료로 무엇을 만들 수 있는지 빠르게 알고 싶어 하는 수요가 커지고 있다. 기존 레시피 앱은 재료를 텍스트로 일일이 입력해야 해 사용 마찰이 크다."
              : "The rise of single-person households and home cooking demand has created a practical need: a fast answer to what can be made from ingredients already on hand. Existing recipe apps still require manual text input, creating unnecessary friction."}
          </p>
          <p>
            {isKo
              ? "본 프로젝트는 YOLOv8l로 식재료를 자동 인식하고, 인식된 재료 목록을 Phi-1.5 프롬프트로 전달해 레시피를 생성하는 End-to-End 파이프라인을 구현했다. 데이터 수집, 바운딩 박스 라벨링, YOLO 학습, 프롬프트 설계까지 전 과정을 직접 수행했고 GTX 1080 Ti 환경에서 mAP@50 ≈ 0.55를 확보했다."
              : "This project implements an end-to-end pipeline that detects ingredients with YOLOv8l and passes the detected list into Phi-1.5 to generate a recipe. Every stage, including data collection, bounding-box annotation, YOLO training, and prompt design, was built directly, reaching mAP@50 ≈ 0.55 on a GTX 1080 Ti."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "관련 연구" : "Related Work"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedWorks.map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="text-xs text-muted-foreground">{item.meta}</p>
                <span className="rounded-full border border-emerald-700/20 bg-emerald-700/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "시스템 설계" : "System Design"}
        </h2>
        <div className="rounded-xl border bg-card p-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              ["Input", isKo ? "이미지" : "Image", "Upload / Cam"],
              ["Vision", "YOLOv8l", isKo ? "47 class" : "47 classes"],
              ["Extract", isKo ? "재료 목록" : "Ingredient List", "class names"],
              ["LLM", "Phi-1.5", "Prompt Eng."],
              ["Output", isKo ? "레시피" : "Recipe", isKo ? "자연어 생성" : "Natural Language"],
            ].map(([layer, title, subtitle], index) => (
              <div
                key={title}
                className={`rounded-lg border px-3 py-4 text-center ${
                  index < 2
                    ? "border-emerald-700/35 bg-emerald-700/5"
                    : index === 2
                      ? "border-sky-500/40 bg-sky-500/5"
                      : index === 3
                        ? "border-violet-500/40 bg-violet-500/5"
                        : "border-amber-500/40 bg-amber-500/5"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{layer}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {isKo
              ? "식재료 인식 → 재료 추출 → 프롬프트 기반 레시피 생성으로 이어지는 비전-LLM 연결형 파이프라인이다."
              : "The system is a vision-to-LLM pipeline: ingredient detection, list extraction, and prompt-based recipe generation."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "핵심 모듈 구현" : "Core Module Implementation"}
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "데이터 수집 및 라벨링" : "Dataset Collection & Labeling"}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              {isKo
                ? "채소, 과일, 생선, 고기, 해산물 등 식재료 키워드로 웹 크롤링을 수행하고 일부는 직접 촬영으로 보완했다. 모든 이미지는 LabelImg로 직접 바운딩 박스 라벨링했다."
                : "Ingredient-related search terms across vegetables, fruits, fish, meat, and seafood were used for web scraping, then supplemented with self-shot images. Every image was manually labeled with LabelImg."}
            </p>
            <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border bg-secondary/30 p-4 text-center">
                  <p className="text-2xl font-semibold text-emerald-700 dark:text-emerald-400">{item.num}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "클립코리아 웹 크롤링과 직접 촬영으로 약 11K 원본 이미지를 확보했다.",
                    "47개 클래스에 대해 LabelImg 바운딩 박스 라벨링을 직접 수행했다.",
                    "조도 변화, 회전, 좌우 반전 증강으로 원본 대비 2~3배 확장해 총 34,008장을 구축했다.",
                  ]
                : [
                    "Collected roughly 11K raw images through web scraping and self-shot photography.",
                    "Manually annotated 47 ingredient classes with bounding boxes in LabelImg.",
                    "Expanded the dataset 2-3x with brightness, rotation, and horizontal flip augmentation to reach 34,008 images.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-700 dark:bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "YOLOv5 vs YOLOv8l 비교 학습" : "YOLOv5 vs YOLOv8l Comparative Training"}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              {isKo
                ? "실시간성과 정확도를 동시에 고려해 GTX 1080 Ti 환경에서 YOLOv5와 YOLOv8l을 비교 학습했고, 최종적으로 YOLOv8l을 선택했다."
                : "YOLOv5 and YOLOv8l were trained side by side on a GTX 1080 Ti to balance real-time performance and detection quality, with YOLOv8l selected as the final model."}
            </p>
            <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-xl border bg-secondary/30 p-5">
                <div className="mb-3 inline-flex rounded-full border border-slate-400/30 bg-slate-400/10 px-2.5 py-1 text-[11px] font-medium text-slate-500">BASELINE</div>
                <h4 className="mb-3 font-semibold text-foreground">YOLOv5</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between gap-3"><span>Architecture</span><span className="font-mono text-xs">Anchor-based</span></div>
                  <div className="flex justify-between gap-3"><span>Precision</span><span className="font-mono text-xs text-sky-500">{isKo ? "일정 수준 안정화" : "Solid stability"}</span></div>
                  <div className="flex justify-between gap-3"><span>mAP@50</span><span className="font-mono text-xs text-sky-500">{isKo ? "양호" : "Good"}</span></div>
                  <div className="flex justify-between gap-3"><span>mAP@0.5:0.95</span><span className="font-mono text-xs">{isKo ? "개선 여지" : "Room to improve"}</span></div>
                  <div className="flex justify-between gap-3"><span>{isKo ? "불규칙 형태" : "Irregular Shapes"}</span><span className="font-mono text-xs">{isKo ? "제한적" : "Limited"}</span></div>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-700/30 bg-emerald-700/5 p-5">
                <div className="mb-3 inline-flex rounded-full border border-emerald-700/30 bg-emerald-700/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">SELECTED</div>
                <h4 className="mb-3 font-semibold text-foreground">YOLOv8l</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between gap-3"><span>Architecture</span><span className="font-mono text-xs text-emerald-700 dark:text-emerald-400">Anchor-free, C2f</span></div>
                  <div className="flex justify-between gap-3"><span>Precision</span><span className="font-mono text-xs text-emerald-700 dark:text-emerald-400">{isKo ? "높은 수준 유지" : "High level maintained"}</span></div>
                  <div className="flex justify-between gap-3"><span>mAP@50</span><span className="font-mono text-xs text-emerald-700 dark:text-emerald-400">≈ 0.55</span></div>
                  <div className="flex justify-between gap-3"><span>mAP@0.5:0.95</span><span className="font-mono text-xs">{isKo ? "GPU 제약" : "GPU-limited"}</span></div>
                  <div className="flex justify-between gap-3"><span>{isKo ? "불규칙 형태" : "Irregular Shapes"}</span><span className="font-mono text-xs text-emerald-700 dark:text-emerald-400">{isKo ? "유연한 대응" : "Flexible response"}</span></div>
                </div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {(isKo
                ? [
                    "YOLOv5는 안정적이지만 Anchor 기반 구조 한계로 불규칙한 식재료 형태 대응에서 제약이 있었다.",
                    "YOLOv8l은 Anchor-free 구조 덕분에 다양한 형태와 배경에 더 유연하게 대응했다.",
                    "최종적으로 mAP@50 ≈ 0.55를 기록한 YOLOv8l을 채택했고, Recall과 mAP@0.5:0.95는 GPU 제약으로 추가 개선 여지가 남았다.",
                  ]
                : [
                    "YOLOv5 remained stable but was constrained by its anchor-based handling of irregular ingredient shapes.",
                    "YOLOv8l responded more flexibly to variation in ingredient shape, lighting, and background thanks to its anchor-free design.",
                    "The final model reached mAP@50 ≈ 0.55, while Recall and mAP@0.5:0.95 still leave room for improvement under GPU constraints.",
                  ]).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-700 dark:bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border bg-secondary/25 p-4">
              <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" className="mx-auto w-full max-w-[700px]">
                <defs>
                  <pattern id="recipe-grid" width="60" height="44" patternUnits="userSpaceOnUse">
                    <path d="M60 0L0 0 0 44" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                  </pattern>
                </defs>
                <rect x="40" y="10" width="630" height="160" fill="url(#recipe-grid)" opacity="0.35" />
                <text x="28" y="175" fontFamily="monospace" fontSize="9" fill="currentColor" className="text-muted-foreground" textAnchor="middle" transform="rotate(-90,28,100)">
                  Loss / mAP
                </text>
                <polyline points="80,140 160,100 240,76 320,64 400,58 480,55 560,53 640,52" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="6,3" />
                <polyline points="80,150 160,98 240,70 320,55 400,47 480,42 560,39 640,38" fill="none" stroke="#0f766e" strokeWidth="2.2" />
                <polyline points="80,170 160,155 240,140 320,130 400,124 480,120 560,118 640,117" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.75" />
                <polyline points="80,170 160,150 240,132 320,118 400,108 480,100 560,95 640,93" fill="none" stroke="#0f766e" strokeWidth="1.5" opacity="0.85" />
                <text x="650" y="52" fontFamily="monospace" fontSize="9" fill="#0f766e">v8l loss</text>
                <text x="650" y="116" fontFamily="monospace" fontSize="9" fill="#64748b">v5 loss</text>
                <text x="650" y="96" fontFamily="monospace" fontSize="9" fill="#0f766e" opacity="0.75">v8l mAP</text>
                <text x="650" y="121" fontFamily="monospace" fontSize="9" fill="#64748b" opacity="0.75">v5 mAP</text>
                <text x="80" y="196" fontFamily="monospace" fontSize="9" fill="#64748b" textAnchor="middle">0</text>
                <text x="240" y="196" fontFamily="monospace" fontSize="9" fill="#64748b" textAnchor="middle">25</text>
                <text x="400" y="196" fontFamily="monospace" fontSize="9" fill="#64748b" textAnchor="middle">50</text>
                <text x="560" y="196" fontFamily="monospace" fontSize="9" fill="#64748b" textAnchor="middle">75</text>
                <text x="640" y="196" fontFamily="monospace" fontSize="9" fill="#64748b" textAnchor="middle">100</text>
                <text x="360" y="210" fontFamily="monospace" fontSize="9" fill="#94a3b8" textAnchor="middle">Epoch</text>
                <line x1="40" y1="180" x2="670" y2="180" stroke="#1e2a3a" strokeWidth="1.2" />
              </svg>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                {isKo
                  ? "Figure. YOLOv8l(초록)이 YOLOv5(회색) 대비 더 낮은 수렴 Loss와 높은 mAP@50을 보인 학습 곡선 개념도."
                  : "Figure. Conceptual training curves showing YOLOv8l (green) converging with lower loss and higher mAP@50 than YOLOv5 (gray)."}
              </p>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "LLM 기반 레시피 생성 · Phi-1.5" : "LLM Recipe Generation · Phi-1.5"}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              {isKo
                ? "YOLOv8l이 탐지한 식재료 클래스명을 구조화된 프롬프트에 삽입해 microsoft/phi-1.5가 레시피명, 재료, 조리 순서, 조리 시간을 포함한 결과를 생성하도록 설계했다."
                : "Detected ingredient class names are inserted into a structured prompt so that microsoft/phi-1.5 generates recipe name, ingredient list, cooking steps, and cooking time."}
            </p>
            <div className="rounded-xl border bg-secondary/30 p-5 font-mono text-[13px] leading-7 text-muted-foreground">
              <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-amber-500">Prompt</p>
              <p><span className="text-teal-700 dark:text-teal-400">You are a recipe assistant.</span></p>
              <p><span className="text-teal-700 dark:text-teal-400">Given the following detected ingredients:</span> <span className="text-violet-600 dark:text-violet-400">[ingredient_list]</span></p>
              <br />
              <p><span className="text-teal-700 dark:text-teal-400">Generate a recipe in the following format:</span></p>
              <p>- Recipe Name:</p>
              <p>- Ingredients: (list with amounts)</p>
              <p>- Steps: (numbered cooking instructions)</p>
              <p>- Cooking Time:</p>
              <br />
              <p><span className="text-teal-700 dark:text-teal-400">Use only the provided ingredients.</span> <span className="text-teal-700 dark:text-teal-400">Keep it simple and practical.</span></p>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
              <div className="rounded-xl border bg-secondary/30 p-5">
                <h4 className="mb-3 font-semibold text-foreground">{isKo ? "프롬프트 설계 원칙" : "Prompt Design Principles"}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(isKo
                    ? [
                        "Output Format Specification으로 출력 구조를 명시했다.",
                        "탐지된 재료만 사용하도록 범위를 제한했다.",
                        "간결하고 실용적인 레시피 생성을 유도했다.",
                        "Fine-tuning 없이 Zero-shot으로 목적을 달성했다.",
                      ]
                    : [
                        "Used the Output Format Specification pattern to define the output structure explicitly.",
                        "Restricted generation to detected ingredients only.",
                        "Guided the model toward simple and practical recipes.",
                        "Achieved the task in zero-shot mode without fine-tuning.",
                      ]).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border bg-secondary/30 p-5">
                <h4 className="mb-3 font-semibold text-foreground">{isKo ? "Phi-1.5 선택 이유" : "Why Phi-1.5"}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(isKo
                    ? [
                        "1.3B 파라미터로 GPU 메모리 제약 환경에 적합했다.",
                        "작은 크기 대비 중소 규모 자연어 태스크에서 경쟁력이 있었다.",
                        "일반 자연어 명령에 안정적으로 반응했다.",
                        "프롬프트만 바꾸면 이메일·챗봇 등 다른 용도로도 확장 가능하다.",
                      ]
                    : [
                        "Its 1.3B parameter size fit the available GPU memory budget.",
                        "It remained competitive on medium-scale natural-language tasks despite its small size.",
                        "It responded stably to general natural-language instructions.",
                        "The same inference setup can be reused for email, chatbot, and other tasks by changing the prompt.",
                      ]).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-3">
              {isKo ? "학습 결과 요약" : "Training Results Summary"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-3 pr-4">{isKo ? "모델" : "Model"}</th>
                    <th className="py-3 pr-4">Precision</th>
                    <th className="py-3 pr-4">Recall</th>
                    <th className="py-3 pr-4">mAP@50</th>
                    <th className="py-3 pr-4">mAP@0.5:0.95</th>
                    <th className="py-3">{isKo ? "학습 안정성" : "Training Stability"}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["YOLOv5", isKo ? "양호" : "Good", isKo ? "개선 여지" : "Room to improve", isKo ? "양호" : "Good", isKo ? "개선 여지" : "Room to improve", isKo ? "매우 우수" : "Excellent"],
                    ["YOLOv8l", isKo ? "높음" : "Higher", isKo ? "개선 여지" : "Room to improve", "≈ 0.55", isKo ? "개선 여지" : "Room to improve", isKo ? "안정적 수렴" : "Stable convergence"],
                  ].map((row, index) => (
                    <tr key={row[0]} className={index === 1 ? "border-b border-border/60 bg-emerald-700/5 text-foreground" : "border-b border-border/60"}>
                      <td className="py-3 pr-4 font-medium">{row[0]}</td>
                      <td className="py-3 pr-4">{row[1]}</td>
                      <td className="py-3 pr-4">{row[2]}</td>
                      <td className="py-3 pr-4">{row[3]}</td>
                      <td className="py-3 pr-4">{row[4]}</td>
                      <td className="py-3">{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {isKo
                ? "YOLOv8l을 최종 모델로 채택했다. GTX 1080 Ti 환경 기준 mAP@50 ≈ 0.55를 확보했고, Recall과 mAP@0.5:0.95는 더 높은 GPU 성능 확보 시 추가 향상이 가능하다."
                : "YOLOv8l was selected as the final model. On a GTX 1080 Ti it reached mAP@50 ≈ 0.55, while Recall and mAP@0.5:0.95 remain improvable with higher-end GPU resources."}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                { label: "Precision", valueKo: "높음", valueEn: "Higher", tone: "bg-emerald-700/80" },
                { label: "Recall", valueKo: "개선 여지", valueEn: "Improve", tone: "bg-amber-500/70" },
                { label: "mAP@50", valueKo: "0.55", valueEn: "0.55", tone: "bg-sky-600/80" },
                { label: "Stability", valueKo: "안정적", valueEn: "Stable", tone: "bg-violet-500/70" },
              ].map((item, index) => (
                <div key={item.label} className="rounded-xl border bg-secondary/30 p-4">
                  <div className="flex items-end gap-3">
                    <div className="flex h-28 w-12 items-end rounded-md bg-background/80 p-1">
                      <div
                        className={`w-full rounded-sm ${item.tone}`}
                        style={{ height: `${[82, 58, 55, 78][index]}%` }}
                      />
                    </div>
                    <div className="pb-1">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">{isKo ? item.valueKo : item.valueEn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "배운 것들" : "Lessons Learned"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson} className="rounded-xl border bg-card p-5 text-sm text-muted-foreground leading-relaxed">
              {lesson}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "참고 문헌" : "References"}
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {references.map((reference, index) => (
            <p key={reference}>
              <span className="mr-2 text-emerald-700 dark:text-emerald-400">[{index + 1}]</span>
              {reference}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
          {isKo ? "한계 및 향후 과제" : "Limitations & Future Work"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(
            isKo
              ? [
                  {
                    title: "GPU 성능 제약으로 인한 성능 한계",
                    body: "GTX 1080 Ti 환경에서 mAP@50 ≈ 0.55가 실질적 상한이었다. 더 높은 GPU 자원 확보 시 배치 사이즈, 에폭 수, 하이퍼파라미터 탐색 폭을 확장할 수 있다.",
                  },
                  {
                    title: "모바일 실시간 인식 · TFLite 변환",
                    body: "이미지 업로드 방식에서 실시간 카메라 인식 UX로 전환하려면 YOLO를 TFLite 등 모바일 친화 포맷으로 변환할 필요가 있다.",
                  },
                  {
                    title: "LLM Fine-tuning · 레시피 특화",
                    body: "현재는 Zero-shot Prompt Engineering 기반이지만, 한국 요리 레시피 데이터셋으로 미세조정하면 더 정교하고 문화적으로 적합한 결과를 만들 수 있다.",
                  },
                  {
                    title: "라벨링 일관성 문제",
                    body: "유사한 채소류처럼 클래스 경계가 애매한 경우 직접 라벨링의 일관성을 유지하기 어려웠다. 사전 라벨링 가이드 정의가 필수라는 점을 확인했다.",
                  },
                ]
              : [
                  {
                    title: "GPU Constraint · Performance Ceiling",
                    body: "mAP@50 ≈ 0.55 was the practical ceiling on a GTX 1080 Ti. Higher-end GPUs would allow larger batches, more epochs, and finer hyperparameter search.",
                  },
                  {
                    title: "Real-Time Mobile Recognition · TFLite Conversion",
                    body: "Moving from upload-based inference to real-time camera UX will require converting YOLO into a mobile-friendly runtime such as TFLite.",
                  },
                  {
                    title: "LLM Fine-Tuning · Recipe Specialization",
                    body: "The current system uses zero-shot prompting, but fine-tuning on a Korean recipe dataset would improve cultural fit, precision, and dish-specific output quality.",
                  },
                  {
                    title: "Labeling Consistency Issues",
                    body: "Ambiguous class boundaries, especially among similar-looking vegetables, made consistency difficult during manual labeling. A predefined guidebook is essential at this scale.",
                  },
                ]
          ).map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.slug === slug);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 480);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            {t("프로젝트를 찾을 수 없습니다", "Project not found")}
          </h1>
          <Link to="/" className="text-accent hover:underline">
            {t("← 홈으로 돌아가기", "← Back to home")}
          </Link>
        </div>
      </div>
    );
  }

  const title = t(project.title, project.titleEn || project.title);
  const description = t(project.descriptionKo || project.description, project.description);
  const details = lang === "ko" ? (project.detailsKo || project.details) : project.details;
  const role = t(project.roleKo || project.role, project.role);
  const isSwimwearProject = project.slug === "swimwear-size-recommendation-model";
  const isAiRecipeProject = project.slug === "ai-recipe-recommendation-system";

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("홈으로", "Back to Home")}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/" className="hover:text-foreground transition-colors">
            {t("홈", "Home")}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{title}</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 sm:mb-6 leading-tight break-words">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              {project.period}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-accent" />
              {role}
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 break-words">{description}</p>

          {isSwimwearProject ? (
            <div className="mb-10 sm:mb-12">
              <SwimwearSizeRecommendationContent lang={lang} />
            </div>
          ) : isAiRecipeProject ? (
            <div className="mb-10 sm:mb-12">
              <AiRecipeRecommendationContent lang={lang} />
            </div>
          ) : (
            <>
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">
                {t("상세 내용", "Details")}
              </h2>
              <ul className="space-y-4 mb-10 sm:mb-12">
                {details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed break-words"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </>
          )}

          <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
            {t("기술 스택", "Tech Stack")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium rounded-md border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-card/95 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-card"
          aria-label={t("맨 위로 이동", "Scroll to top")}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;

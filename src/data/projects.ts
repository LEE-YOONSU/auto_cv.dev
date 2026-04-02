import {
  deepLearningReconnaissanceProjectImage,
  visionAutonomousFlightSystemImage,
} from "@/assets/pages/projects";

export interface Project {
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionKo?: string;
  tech: string[];
  period: string;
  role: string;
  roleKo?: string;
  details: string[];
  detailsKo?: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "swimwear-size-recommendation-model",
    title: "수영복 사이즈 추천 모델",
    titleEn: "Swimwear Size Recommendation Model",
    description:
      "Scraped real review data from a Korean swimwear platform and built a multiclass size prediction pipeline with feature engineering, SMOTE rebalancing, 8-model comparison, and a final LGBM accuracy of 0.79.",
    descriptionKo:
      "온라인 수영복 플랫폼 리뷰 데이터를 직접 크롤링하고, Feature Engineering, SMOTE 불균형 보정, 8개 모델 비교를 거쳐 최종 정확도 0.79를 달성한 수영복 사이즈 추천 모델을 구축했습니다.",
    tech: ["Python", "Scikit-Learn", "Selenium", "Streamlit", "LGBM", "XGBoost", "SMOTE"],
    period: "2025.03 - 2025.04",
    role: "ML Project Lead",
    roleKo: "ML 프로젝트 리드",
    details: [
      "Scraped review data from GanaSwim and built an end-to-end ML pipeline spanning collection, cleaning, EDA, feature engineering, class rebalancing, and deployment.",
      "Modeled purchased size using height, weight, gender, usual size, and top-brand features derived from consumer reviews.",
      "Compared 8 classifiers under matched conditions and selected LGBM as the final model after leading in every evaluation setting.",
      "Raised performance from a 0.50 baseline to 0.79 through brand features, SMOTE, and GridSearchCV tuning.",
      "Deployed a Streamlit prototype that recommends swimwear size in real time, including a fallback flow for first-time buyers without usual-size history.",
    ],
    detailsKo: [
      "가나스윔 리뷰 데이터를 직접 크롤링해 수집, 정제, EDA, Feature Engineering, 클래스 불균형 보정, 모델링, 배포까지 전체 파이프라인을 구축했습니다.",
      "키, 몸무게, 성별, 평소 사이즈, 브랜드 정보를 결합해 구매 사이즈를 예측하는 다중 분류 모델을 설계했습니다.",
      "8개 분류 모델을 동일 조건에서 비교했고, 모든 평가 조건에서 가장 우수한 성능을 기록한 LGBM Classifier를 최종 모델로 선정했습니다.",
      "브랜드 feature, SMOTE, GridSearchCV 튜닝을 통해 정확도를 베이스라인 0.50에서 최종 0.79까지 향상시켰습니다.",
      "평소 사이즈가 없는 첫 구매자 폴백 분기까지 포함한 Streamlit 사이즈 추천 앱을 구현했습니다.",
    ],
    images: [visionAutonomousFlightSystemImage],
  },
  {
    slug: "ai-recipe-recommendation-system",
    title: "AI 레시피 추천 시스템",
    titleEn: "AI Recipe Recommendation System",
    description:
      "A self-built end-to-end AI pipeline that detects ingredients from a single image with YOLOv8l and generates personalized recipes through Phi-1.5 prompt engineering after training on 34,008 labeled images across 47 classes.",
    descriptionKo:
      "47개 클래스 34,008장 데이터셋을 직접 수집·라벨링하고, YOLOv8l과 Phi-1.5를 연결해 식재료 인식부터 레시피 생성까지 수행하는 End-to-End AI 파이프라인을 구축했습니다.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "TensorFlow", "Hugging Face", "Phi-1.5", "Selenium", "LabelImg"],
    period: "2025.05 - 2025.06",
    role: "DL Project Lead",
    roleKo: "DL 프로젝트 리드",
    details: [
      "Built an end-to-end AI system that turns a single ingredient image into a generated recipe by chaining YOLOv8l detection and Phi-1.5 text generation.",
      "Collected, labeled, and augmented a 47-class ingredient dataset from scraping and self-shot photos, expanding it to 34,008 images.",
      "Compared YOLOv5 and YOLOv8l under GTX 1080 Ti constraints and selected YOLOv8l after stronger handling of irregular ingredient shapes and mAP@50 around 0.55.",
      "Structured detected class names into a prompt-engineered Phi-1.5 pipeline to generate recipe name, ingredients, steps, and cooking time.",
      "Used the project to validate not only model quality but also cross-modal pipeline design, annotation discipline, and deployable UX direction.",
    ],
    detailsKo: [
      "이미지 한 장으로 식재료를 인식하고 맞춤형 레시피를 생성하는 End-to-End AI 시스템을 구축했습니다.",
      "웹 크롤링과 직접 촬영으로 식재료 데이터를 수집하고, 증강을 거쳐 47개 클래스 34,008장 규모의 데이터셋을 직접 라벨링했습니다.",
      "GTX 1080 Ti 환경에서 YOLOv5와 YOLOv8l을 비교 학습한 뒤, 불규칙한 식재료 형태에 더 유연하게 대응하는 YOLOv8l을 최종 채택했습니다.",
      "YOLO 탐지 결과를 Phi-1.5 프롬프트 파이프라인에 연결해 레시피명, 재료, 조리 순서, 조리 시간을 포함한 구조화된 출력을 생성했습니다.",
      "모델 성능뿐 아니라 비전-LLM 통합, 라벨링 일관성, 모바일 확장 가능성까지 함께 검증했습니다.",
    ],
    images: [deepLearningReconnaissanceProjectImage],
  },
];

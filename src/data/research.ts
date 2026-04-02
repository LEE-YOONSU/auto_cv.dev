import {
  deepLearningReconnaissanceImage,
  nonGpsSwarmImage,
  visionAutonomousFlightImage,
} from "@/assets/pages/research";

export interface ResearchExperience {
  slug: string;
  title: string;
  titleKo?: string;
  summary: string;
  summaryKo?: string;
  award?: string;
  awardKo?: string;
  image: string;
  tags: string[];
  period: string;
  periodKo?: string;
  role: string;
  roleKo?: string;
  details: string[];
  detailsKo?: string[];
  techStack: string[];
  heroEyebrow?: string;
  heroEyebrowKo?: string;
  metaItems?: ResearchMetaItem[];
  metaItemsKo?: ResearchMetaItem[];
  richContent?: ResearchRichContent;
}

export interface ResearchInterest {
  title: string;
  titleKo?: string;
  description: string;
  descriptionKo?: string;
  iconName: "Eye" | "Route" | "Navigation";
}

export interface ResearchMetaItem {
  label: string;
  labelKo?: string;
  value: string;
  valueKo?: string;
}

export interface ResearchRelatedWork {
  category: string;
  categoryKo?: string;
  year: string;
  title: string;
  titleKo?: string;
  journal: string;
  description: string;
  descriptionKo?: string;
}

export interface ResearchArchitectureNode {
  layer: string;
  layerKo?: string;
  title: string;
  titleKo?: string;
  subtitle: string;
  subtitleKo?: string;
  accent?: "accent" | "blue" | "amber";
}

export interface ResearchEquation {
  expression: string;
  label: string;
  labelKo?: string;
}

export interface ResearchMetric {
  label: string;
  labelKo?: string;
  value: string;
  emphasis?: boolean;
}

export interface ResearchComparisonRow {
  name: string;
  metrics: ResearchMetric[];
}

export interface ResearchBulletColumn {
  title: string;
  titleKo?: string;
  items: string[];
  itemsKo?: string[];
}

export interface ResearchModule {
  emoji: string;
  title: string;
  titleKo?: string;
  badge: string;
  description: string;
  descriptionKo?: string;
  accent: "accent" | "blue" | "amber";
  columns: ResearchBulletColumn[];
}

export interface ResearchScenario {
  name: string;
  nameKo?: string;
  items: string[];
  itemsKo?: string[];
}

export interface ResearchResult {
  title: string;
  titleKo?: string;
  body: string;
  bodyKo?: string;
}

export interface ResearchIssue {
  title: string;
  titleKo?: string;
  problem: string;
  problemKo?: string;
  cause: string;
  causeKo?: string;
  fix: string;
  fixKo?: string;
}

export interface ResearchLesson {
  title: string;
  titleKo?: string;
  body: string;
  bodyKo?: string;
}

export interface ResearchReference {
  citation: string;
  citationKo?: string;
}

export interface ResearchRichContent {
  abstractParagraphs?: string[];
  abstractParagraphsKo?: string[];
  notice?: string;
  noticeKo?: string;
  relatedWorks?: ResearchRelatedWork[];
  methodologyIntro?: string[];
  methodologyIntroKo?: string[];
  architecture?: ResearchArchitectureNode[];
  architectureCaption?: string;
  architectureCaptionKo?: string;
  equations?: ResearchEquation[];
  modelSelectionParagraphs?: string[];
  modelSelectionParagraphsKo?: string[];
  modelComparison?: ResearchComparisonRow[];
  potentialFieldParagraphs?: string[];
  potentialFieldParagraphsKo?: string[];
  modules?: ResearchModule[];
  validationIntro?: string[];
  validationIntroKo?: string[];
  scenarios?: ResearchScenario[];
  algorithmComparison?: ResearchComparisonRow[];
  results?: ResearchResult[];
  issues?: ResearchIssue[];
  lessons?: ResearchLesson[];
  references?: ResearchReference[];
}

export const researchExperiences: ResearchExperience[] = [
  {
    slug: "vision-autonomous-flight",
    title: "Vision + Path Planning Autonomous Flight System Development",
    titleKo: "Vision + Path Planning 자율비행 시스템 개발",
    summary:
      "A ROS2-based offboard control pipeline that connects camera-only road perception, potential-field path planning, and real-time autonomous flight.",
    summaryKo:
      "Camera-only Perception으로 도로를 인식하고 Potential Field 기반 경로를 생성하여 드론의 End-to-End 자율주행이 가능한 ROS2 기반 Offboard Control 시스템 연구.",
    image: visionAutonomousFlightImage,
    tags: ["ROS2", "YOLOv8", "Potential Field", "Offboard Control"],
    period: "2025.10 - Present",
    periodKo: "2025.10 ~",
    role: "Vision · Path Planning · Offboard Control Integration",
    roleKo: "Vision · Path Planning · Offboard Control 통합 개발",
    heroEyebrow: "Research · SEESAW D&U Drone SW Team · Since 2025.10",
    heroEyebrowKo: "Research · (주)시소D&U Drone SW Team · 2025.10 ~",
    metaItems: [
      { label: "Affiliation", value: "Drone SW Team, SEESAW D&U Inc." },
      { label: "Role", value: "Vision, planning, and offboard integration" },
      { label: "Hardware", value: "Gazebo SITL to real-airframe transition validation" },
      { label: "Pipeline", value: "Perception to planning to control" },
    ],
    metaItemsKo: [
      { label: "Affiliation", labelKo: "Affiliation", value: "(주)시소D&U 드론SW팀 연구원" },
      { label: "Role", labelKo: "Role", value: "Vision · Path Planning · Offboard Control 통합 개발" },
      { label: "Hardware", labelKo: "Hardware", value: "Gazebo SITL → 실기체 전환 검증" },
      { label: "Pipeline", labelKo: "Pipeline", value: "Perception → Planning → Control (E2E)" },
    ],
    details: [
      "Designed an end-to-end architecture that links YOLO-based road perception, artificial potential field planning, and ROS2 offboard control.",
      "Built a modular ROS2 pipeline so that perception, planning, and control layers can be modified independently.",
      "Validated straight-road, curved-road, and obstacle-avoidance scenarios in Gazebo SITL before real-airframe transition.",
      "Resolved centerline instability and heading-flip issues through temporal filtering and vector-based control logic.",
    ],
    detailsKo: [
      "YOLO 기반 도로 인식, Artificial Potential Field 경로 계획, ROS2 Offboard Control을 연결한 End-to-End 자율비행 구조를 설계했습니다.",
      "Perception, Planning, Control 레이어를 분리한 ROS2 파이프라인으로 모듈 교체와 디버깅이 쉬운 구조를 구현했습니다.",
      "직선, 곡선, 장애물 회피 시나리오를 Gazebo SITL에서 검증한 뒤 실기체 전환을 고려한 구조로 정리했습니다.",
      "중심선 흔들림과 heading flip 문제를 필터링 및 방향 벡터 기반 제어로 해결했습니다.",
    ],
    techStack: ["Python", "ROS2", "YOLOv8", "OpenCV", "Gazebo SITL", "PX4", "MAVLink", "RViz"],
    richContent: {
      abstractParagraphs: [
        "A large portion of drone-based vision research stops at the object detection stage. Cases where detection results are architecturally connected to flight control remain relatively uncommon. This research aimed to bridge that gap by designing and implementing a real-time autonomous flight system in which YOLO-based road perception, Potential Field path generation, and ROS2 Offboard Control operate as a unified pipeline.",
        "The key contributions are a Perception-Planning interface that treats vision output directly as planning input rather than mere visualization, real-time path decisions via APF attractive and repulsive force vectors, and a modular Offboard Control architecture that requires no modification of internal Autopilot logic. The complete pipeline was validated across three scenarios, straight road tracking, curved road tracking, and obstacle avoidance, in a Gazebo SITL environment.",
      ],
      abstractParagraphsKo: [
        "드론 기반 Vision 연구의 상당수는 객체 인식 단계에서 멈춘다. 인식 결과를 실제 비행 제어로 연결하는 구조적 설계까지 다루는 사례는 많지 않다. 본 연구는 이 간극을 메우는 것을 목표로 하였다.",
        "YOLO 기반 도로 인식, Potential Field 경로 생성, ROS2 Offboard Control 세 단계가 하나의 파이프라인으로 실시간 연동되는 자율비행 시스템을 설계·구현하였다.",
        "Vision 결과를 시각화에 그치지 않고 경로 계획의 직접 입력으로 활용하는 Perception-Planning 인터페이스 설계, Attractive/Repulsive Force 기반 APF 실시간 경로 결정, Autopilot 내부 로직을 수정하지 않는 모듈화 Offboard Control 구조가 핵심 구현 사항이다. Gazebo SITL 환경에서 직선, 곡선, 장애물 회피 세 시나리오에 걸쳐 파이프라인 전체 연동을 검증하였다.",
      ],
      relatedWorks: [
        {
          category: "Perception",
          categoryKo: "Perception",
          year: "Ultralytics, 2025 · arXiv:2510.09653",
          title: "Ultralytics YOLO Evolution: YOLOv5 to YOLOv8",
          journal: "arXiv preprint",
          description:
            "YOLOv8 achieves a 7.7 pp mAP improvement over YOLOv5s on COCO through its anchor-free detection head and C2f module. The shift away from anchor-based structures improves detection precision for irregular shapes like road boundaries, and still enables real-time inference on Jetson-class hardware [1].",
          descriptionKo:
            "YOLOv8은 Anchor-free Detection Head와 C2f 모듈 도입으로 COCO mAP 기준 YOLOv5s 대비 7.7%p 향상을 달성하였다. Anchor 기반 구조에서 벗어나면서 도로 경계처럼 형태가 불규칙한 객체의 탐지 정밀도가 개선되었으며, Jetson 계열 하드웨어에서 TensorRT 변환 시 실시간 추론이 가능한 수준의 속도를 확보한다 [1].",
        },
        {
          category: "Planning",
          categoryKo: "Planning",
          year: "Kratky et al., 2023 · arXiv:2306.16276",
          title: "Path Planning with Potential Field-Based Obstacle Avoidance in a 3D Environment",
          journal: "IEEE ICRA 2023",
          description:
            "Addresses the classic APF local minima problem by adding a rotation-based component, combined with an MPC tracker for smooth trajectory following. The post-avoidance recovery stability design in this work drew directly from their approach [2].",
          descriptionKo:
            "APF의 고질적 약점인 Local Minima 문제를 Rotation-based Component 추가로 완화한 3D UAV 경로 계획 연구이다. MPC Tracker와의 결합을 통해 궤적 추종의 부드러움을 확보하였고, 본 연구의 APF 설계에서 회피 후 복귀 안정성 처리 방향을 이 논문에서 참고하였다 [2].",
        },
        {
          category: "Planning",
          categoryKo: "Planning",
          year: "Li et al., 2023 · MDPI Aerospace",
          title: "UAV Path Planning Based on Improved Artificial Potential Field Method",
          journal: "Aerospace, 10(6), 562",
          description:
            "Integrates a collision-risk assessment mechanism and introduces a virtual sub-target to resolve the goal-unreachable problem. The approach to stable recovery after obstacle avoidance was referenced here [3].",
          descriptionKo:
            "충돌 위험 평가 메커니즘을 APF에 통합하고, 가상 서브 목표 도입으로 목표 미도달 문제를 해결한 개선된 APF 연구이다. 장애물 회피 후 원래 경로 복귀 안정성 처리에서 이 논문의 접근 방식을 참고하였다 [3].",
        },
        {
          category: "Control",
          categoryKo: "Control",
          year: "Al-Batati et al., 2024 · Preprints.org",
          title: "ROS 2 Key Challenges and Advances: A Survey",
          journal: "Preprints 2024, 202410.1204",
          description:
            "A large-scale survey analyzing 431 ROS2 papers, systematically covering DDS-based topic communication patterns and Offboard control architecture examples. Served as the primary basis for determining this system's 3-layer modular architecture [4].",
          descriptionKo:
            "ROS2 관련 논문 431편을 분석한 대규모 서베이로, DDS 기반 Topic 통신 패턴 및 Offboard 제어 구조의 설계 사례를 체계적으로 정리한다. 본 시스템의 3-레이어 모듈화 아키텍처 설계 방향을 결정하는 데 주된 근거로 활용하였다 [4].",
        },
        {
          category: "Perception",
          categoryKo: "Perception",
          year: "Qin et al., 2024 · arXiv:2312.05019",
          title: "Vision-Based Learning for Drones: A Survey",
          journal: "arXiv:2312.05019v2",
          description:
            "Classifies drone vision methods into Indirect, Semi-Direct, and End-to-End categories. It frames the APF plus vision approach as a practical middle ground for small drones operating with camera-driven autonomy [5].",
          descriptionKo:
            "드론 Vision 방법론을 Indirect, Semi-Direct, End-to-End 체계로 분류한 서베이이다. APF와 Vision 결합 방식이 단안 카메라 기반 소형 드론에서 학습 데이터 없이 동작 가능한 현실적 접근임을 분석하며, 본 연구의 방법론 범주를 정의하는 기준 문헌으로 활용하였다 [5].",
        },
        {
          category: "Navigation",
          categoryKo: "Navigation",
          year: "Aggarwal & Kumar, 2020 · Comput. Commun.",
          title: "Path Planning Techniques for UAVs: A Review",
          journal: "Computer Communications, 149, 270-299",
          description:
            "Comprehensive comparison of A*, RRT, APF, and bio-inspired UAV path-planning algorithms. It supports APF as the most suitable choice for real-time responsiveness and computational efficiency on embedded drone platforms [6].",
          descriptionKo:
            "A*, RRT, APF, Bio-inspired 등 UAV 경로 계획 알고리즘을 종합적으로 비교 분석한 서베이이다. 임베디드 드론 플랫폼의 연산 제약 환경에서 APF가 실시간 반응성과 계산 효율 측면에서 가장 적합한 선택임을 도출하였으며, 알고리즘 선정의 핵심 근거 문헌이다 [6].",
        },
      ],
      methodologyIntro: [
        "The full pipeline follows a Perception to Planning to Control 3-layer architecture. Each layer exchanges data via ROS2 topics, minimizing inter-layer dependencies so that replacing any one module does not require changes to the others.",
      ],
      methodologyIntroKo: [
        "전체 파이프라인은 Perception → Planning → Control 3-Layer 구조로 설계하였다. 각 레이어는 ROS2 Topic을 통해 데이터를 주고받으며, 레이어 간 의존성을 최소화하여 어느 한 모듈을 교체하더라도 나머지 모듈의 수정이 발생하지 않도록 구성하였다.",
      ],
      architecture: [
        { layer: "Input", title: "Camera", subtitle: "RGB + Depth" },
        { layer: "Perception", title: "Vision Node", subtitle: "YOLO + Centerline", accent: "accent" },
        { layer: "Planning", title: "APF Planner", subtitle: "F_att + F_rep", accent: "blue" },
        { layer: "Control", title: "Offboard", subtitle: "Velocity and yaw setpoint", accent: "amber" },
        { layer: "Validation", title: "Gazebo SITL", subtitle: "PX4 + RViz" },
      ],
      architectureCaption:
        "End-to-end autonomous flight pipeline. Each block is implemented as an independent ROS2 node.",
      architectureCaptionKo:
        "End-to-End 자율비행 파이프라인. 각 블록은 독립적인 ROS2 노드로 구현된다.",
      equations: [
        { expression: "U(p) = U_att(p) + U_rep(p)", label: "Total potential energy", labelKo: "전체 포텐셜 에너지" },
        { expression: "U_att(p) = 1/2 * k_att * d(p, p_goal)^2", label: "Attractive potential toward road centerline", labelKo: "Attractive Potential (도로 중심선 방향 인력, k_att: 인력 계수)" },
        {
          expression: "U_rep(p) = 1/2 * k_rep * (1 / d(p, p_obs) - 1 / d0)^2, if d < d0, else 0",
          label: "Repulsive potential from obstacles",
          labelKo: "Repulsive Potential (장애물 척력, d0: 유효 반경)",
        },
        { expression: "F(p) = -∇U(p) = F_att(p) + F_rep(p)", label: "Resultant force direction becomes the target heading vector", labelKo: "합력 방향이 드론의 목표 Heading Vector가 됨" },
      ],
      modelSelectionParagraphs: [
        "YOLOv5 and YOLOv8 were compared for road perception. YOLOv5's anchor-based structure showed reduced precision for irregular shapes like road edges, while YOLOv8's anchor-free design addresses this. YOLOv8 was adopted based on COCO benchmark metrics and practical detection quality on road scenes.",
      ],
      modelSelectionParagraphsKo: [
        "도로 인식 모델로 YOLOv5와 YOLOv8을 비교 검토하였다. YOLOv5의 Anchor 기반 구조는 도로처럼 형태가 불규칙한 객체 탐지 시 정밀도 저하가 있었고, YOLOv8은 Anchor-free 구조로 이 문제를 개선하였다.",
        "COCO 벤치마크 수치 확인 및 실제 도로 환경에서의 탐지 품질을 함께 고려하여 YOLOv8을 채택하였다.",
      ],
      modelComparison: [
        {
          name: "YOLOv5n",
          metrics: [
            { label: "mAP", value: "45.7" },
            { label: "FPS", value: "161" },
          ],
        },
        {
          name: "YOLOv5s",
          metrics: [
            { label: "mAP", value: "56.8" },
            { label: "FPS", value: "112" },
          ],
        },
        {
          name: "YOLOv8n",
          metrics: [
            { label: "mAP", value: "52.9" },
            { label: "FPS", value: "143" },
          ],
        },
        {
          name: "YOLOv8s",
          metrics: [
            { label: "mAP", value: "64.5", emphasis: true },
            { label: "FPS", value: "90", emphasis: true },
          ],
        },
      ],
      potentialFieldParagraphs: [
        "As the UAV approaches an obstacle, repulsive force increases; as it deviates from the road centerline, attractive force strengthens. The resultant of these two forces is converted into a target heading vector and passed to Offboard Control.",
      ],
      potentialFieldParagraphsKo: [
        "전방 장애물과의 거리가 가까워질수록 척력이 증가하고, 도로 중심선에서 벗어날수록 인력이 강해진다.",
        "두 힘의 합력 방향이 드론의 목표 Heading Vector로 변환되어 Offboard Control에 전달된다. 합력은 결국 Velocity Setpoint 생성의 기준 벡터로 사용된다.",
      ],
      modules: [
        {
          emoji: "👁️",
          title: "Vision Module",
          titleKo: "Vision Module",
          badge: "YOLO · OpenCV",
          accent: "accent",
          description:
            "YOLO detects road regions from camera frames, Contour analysis extracts the road centerline coordinates, and the result is forwarded as structured planning input rather than visualization-only output.",
          descriptionKo:
            "카메라 프레임에서 YOLO로 도로 영역을 탐지하고 Contour 분석으로 도로 중심선 좌표를 추출하여 APF 입력으로 전달한다. Vision 결과를 시각화에 그치지 않고 경로 계획의 직접 입력 데이터로 활용하는 것이 핵심 설계 원칙이다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "YOLOv8-based road segmentation",
                "Contour analysis for centerline extraction",
                "Depth-based frontal obstacle range estimation",
                "Lightweight real-time inference pipeline",
              ],
              itemsKo: [
                "YOLOv8 기반 도로 영역 segmentation",
                "Contour 분석으로 도로 중심선 (x, y) 추출",
                "Depth camera로 전방 장애물 거리 측정",
                "실시간 처리를 위한 경량 추론 파이프라인",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Publish centerline coordinates through ROS2 topics",
                "Convert image coordinates into drone body coordinates",
                "Apply preprocessing against lighting and noise variation",
              ],
              itemsKo: [
                "중심선 좌표를 ROS2 topic으로 발행",
                "이미지 좌표계에서 드론 body 좌표계로 변환",
                "조명 및 노이즈 변화 대응 전처리 적용",
              ],
            },
          ],
        },
        {
          emoji: "🧭",
          title: "Path Planning Module",
          titleKo: "Path Planning Module",
          badge: "Potential Field",
          accent: "blue",
          description:
            "The planner computes attractive and repulsive forces in real time from centerline coordinates and depth distances, then transforms the resultant vector into a target heading.",
          descriptionKo:
            "Vision 모듈에서 전달받은 중심선 좌표와 Depth 거리값을 기반으로 APF 합력 벡터를 실시간 계산하여 목표 Heading을 결정한다. 임베디드 드론 플랫폼의 연산 제약 환경에서 실시간 반응성과 계산 효율을 동시에 만족시키는 것이 핵심 목표였다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "Attractive force from road centerline geometry",
                "Repulsive force from depth-derived obstacle distance",
                "Resultant vector to target heading conversion",
                "Moving-average smoothing for temporal continuity",
              ],
              itemsKo: [
                "중심선 기반 attractive force 계산",
                "Depth 거리 기반 repulsive force 계산",
                "합력 벡터를 목표 heading angle로 변환",
                "Moving average 필터로 연속성 보장",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Clear separation between perception and control decisions",
                "Obstacle-avoidance sensitivity tuned with d0",
                "Direction-vector control for smoother continuity",
              ],
              itemsKo: [
                "Vision과 Control 사이 의사결정 레이어 명확 분리",
                "d0 파라미터 조정으로 회피 민감도 제어",
                "Scalar angle 대신 direction vector로 연속성 확보",
              ],
            },
          ],
        },
        {
          emoji: "🎮",
          title: "Offboard Control Module",
          titleKo: "Offboard Control Module",
          badge: "ROS2 · MAVLink",
          accent: "amber",
          description:
            "The control layer converts planning outputs into flight-controller compatible velocity and heading setpoints without modifying autopilot internals.",
          descriptionKo:
            "APF 합력 벡터를 Flight Controller가 수신 가능한 속도 및 헤딩 setpoint로 변환한다. Autopilot 내부 EKF 및 비행 로직을 수정하지 않는 순수 Offboard 구조를 채택하여, Vision 또는 Planning 모듈 변경 시 제어 모듈 수정이 발생하지 않도록 설계하였다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "ROS2 topic-based offboard command publishing",
                "Planning output to MAVLink velocity setpoint conversion",
                "Real-time validation in Gazebo SITL",
              ],
              itemsKo: [
                "ROS2 topic 기반 offboard 제어 명령 발행",
                "Planning 결과를 MAVLink velocity setpoint로 변환",
                "Gazebo SITL 환경에서 실시간 검증",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Autopilot internals remain unchanged for portability",
                "ROS2 topic separation simplifies module replacement",
                "The same control structure can carry into real aircraft",
              ],
              itemsKo: [
                "Autopilot 내부 로직 불변으로 이식성 확보",
                "ROS2 topic 분리로 Vision과 Planning 교체 용이",
                "실기체 전환 시 동일 제어 구조 유지 가능",
              ],
            },
          ],
        },
      ],
      validationIntro: [
        "A custom road world was built in Gazebo SITL and three scenarios were used to verify real-time inter-layer integration across the full pipeline.",
      ],
      validationIntroKo: [
        "Gazebo SITL 환경에서 커스텀 도로 월드를 직접 제작하고 세 가지 시나리오를 통해 파이프라인 각 레이어의 실시간 연동 여부를 검증하였다.",
      ],
      scenarios: [
        {
          name: "Scenario 01",
          nameKo: "시나리오 01 · 직선 도로 주행",
          items: [
            "Target direction generation from road centerline",
            "Stability check under vision noise",
            "Stable straight flight verified",
          ],
          itemsKo: [
            "도로 중심선 기반 목표 방향 생성",
            "Vision 노이즈에 대한 주행 안정성 확인",
            "안정적 직진 주행 검증 완료",
          ],
        },
        {
          name: "Scenario 02",
          nameKo: "시나리오 02 · 곡선 도로 주행",
          items: [
            "Continuous heading-vector updates along curved roads",
            "Smooth turning without abrupt steering",
            "Frame-to-frame path continuity verified",
          ],
          itemsKo: [
            "중심선 변화에 따른 목표 벡터 연속 갱신",
            "급격한 조향 없이 곡선 구간 추종 확인",
            "연속 프레임 경로 부드러움 검증 완료",
          ],
        },
        {
          name: "Scenario 03",
          nameKo: "시나리오 03 · 장애물 회피 주행",
          items: [
            "Depth-based obstacle detection and avoidance generation",
            "Continuous lane following with obstacle avoidance",
            "Stable recovery to the original route verified",
          ],
          itemsKo: [
            "Depth 기반 장애물 인식 후 회피 경로 생성",
            "도로 추종과 회피 동작 연속성 확인",
            "회피 후 원래 경로 복귀 안정성 검증 완료",
          ],
        },
      ],
      algorithmComparison: [
        {
          name: "A*",
          metrics: [
            { label: "Computation Speed", labelKo: "연산 속도", value: "82" },
            { label: "Path Smoothness", labelKo: "경로 부드러움", value: "65" },
            { label: "Real-time Reactivity", labelKo: "실시간 반응성", value: "40" },
          ],
        },
        {
          name: "RRT*",
          metrics: [
            { label: "Computation Speed", labelKo: "연산 속도", value: "55" },
            { label: "Path Smoothness", labelKo: "경로 부드러움", value: "80" },
            { label: "Real-time Reactivity", labelKo: "실시간 반응성", value: "30" },
          ],
        },
        {
          name: "PSO",
          metrics: [
            { label: "Computation Speed", labelKo: "연산 속도", value: "42" },
            { label: "Path Smoothness", labelKo: "경로 부드러움", value: "72" },
            { label: "Real-time Reactivity", labelKo: "실시간 반응성", value: "38" },
          ],
        },
        {
          name: "APF (Ours)",
          metrics: [
            { label: "Computation Speed", labelKo: "연산 속도", value: "91", emphasis: true },
            { label: "Path Smoothness", labelKo: "경로 부드러움", value: "70" },
            { label: "Real-time Reactivity", labelKo: "실시간 반응성", value: "88", emphasis: true },
          ],
        },
      ],
      results: [
        {
          title: "Scenario 1 and 2",
          titleKo: "Scenario 1·2",
          body: "Centerline detection was stably delivered as APF input, and continuous flight was confirmed on both straight and curved segments.",
          bodyKo: "Vision 기반 중심선 인식 결과가 APF 입력으로 안정적으로 전달되어 직선·곡선 구간 모두 연속적 주행을 확인했다.",
        },
        {
          title: "Scenario 2",
          titleKo: "Scenario 2",
          body: "The APF resultant was continuously converted into Offboard commands through curved segments without discontinuity.",
          bodyKo: "곡선 구간에서도 APF 합력 결과가 Offboard Control 명령으로 연속 변환되어 끊김 없는 경로 추종을 확인했다.",
        },
        {
          title: "Scenario 3",
          titleKo: "Scenario 3",
          body: "Obstacle avoidance completed without control instability, and stable recovery to road tracking was confirmed post-avoidance.",
          bodyKo: "장애물 회피 상황에서도 급격한 제어 불안정 없이 시나리오 수행을 완료했고, 회피 후 도로 추종으로 안정적으로 복귀하였다.",
        },
      ],
      issues: [
        {
          title: "Centerline jitter caused path instability",
          titleKo: "Centerline 흔들림으로 인한 경로 불안정",
          problem: "Frame-to-frame centerline movement destabilized APF inputs and occasionally pushed the drone away from the lane.",
          problemKo: "YOLO 추출 도로 중심선이 프레임마다 흔들리면서 APF 입력값이 불안정해지고 드론이 도로를 이탈하는 현상이 발생했다.",
          cause: "Raw YOLO coordinates were used directly without temporal filtering or continuity handling.",
          causeKo: "YOLO 추론 결과의 프레임 간 좌표 변동이 필터링 없이 그대로 Planning 입력으로 사용되었고 중심선 연속성 처리 로직이 없었다.",
          fix: "A moving-average filter stabilized centerline coordinates before APF computation.",
          fixKo: "연속 프레임 간 중심선 좌표에 moving average를 적용해 급격한 좌표 변화를 완화하고 APF 입력 안정성을 확보했다.",
        },
        {
          title: "Heading angle flip",
          titleKo: "Heading Angle Flip 현상",
          problem: "Heading occasionally flipped by 180 degrees under specific conditions, which created a control-stability risk.",
          problemKo: "목표 방향 계산 중 heading angle이 특정 조건에서 급격히 180도 반전되어 비행 안정성 측면의 잠재 위험 요소가 되었다.",
          cause: "The scalar atan2 angle calculation did not preserve continuity around discontinuous regions.",
          causeKo: "atan2 기반 스칼라 각도 계산에서 부호 처리와 각도 불연속 구간 연속성 처리가 부족했다.",
          fix: "The control logic was changed to direction-vector based commands with frame-to-frame continuity checks.",
          fixKo: "스칼라 각도 대신 방향 벡터 기반 제어로 전환하고 이전 프레임과의 연속성을 확인해 반전 현상을 제거했다.",
        },
      ],
      lessons: [
        {
          title: "Perception-planning interfaces are harder than the model itself",
          titleKo: "Perception-Planning 인터페이스 설계의 복잡성",
          body: "Connecting YOLO outputs to body-frame planning coordinates required more system work than training the model itself.",
          bodyKo: "YOLO 출력 좌표를 드론 body 좌표계로 변환해 APF 입력으로 연결하는 과정이 모델 자체보다 더 많은 구현 시간을 요구했다. 두 모듈 사이의 데이터 형식과 좌표계 정합이 시스템 통합에서 핵심 난이도 요소였다.",
        },
        {
          title: "Module boundaries reduce debugging cost",
          titleKo: "모듈 분리 구조의 실질적 효과",
          body: "ROS2 topic boundaries allowed the planner to be replaced without touching the control layer when the heading-flip issue appeared, which reduced debugging cost substantially.",
          bodyKo: "Heading Flip 문제 발생 시 ROS2 Topic 기반의 레이어 분리 덕분에 제어 모듈을 수정하지 않고 Planning 로직만 교체하여 해결할 수 있었다. 인터페이스를 명확히 정의하는 설계 원칙이 디버깅 비용을 실질적으로 줄인다는 점을 확인하였다.",
        },
        {
          title: "Coordinate-frame mistakes have wide effects",
          titleKo: "좌표계 정합 오류의 파급 효과",
          body: "An incorrect reference frame in angle computation caused the heading reversal and initially looked like a model issue.",
          bodyKo: "이미지 좌표계에서 atan2로 각도를 계산할 때 기준 좌표 설정 오류로 heading이 180도 반전되는 현상이 발생했고, 초기에는 YOLO 모듈 문제로 오인하였다. 다중 좌표계를 다루는 시스템에서 변환 기준의 사전 문서화가 필수적임을 경험하였다.",
        },
        {
          title: "APF tuning is nonlinear",
          titleKo: "APF 파라미터 튜닝의 비선형성",
          body: "Tuning k_att, k_rep, and d0 exposed a nonlinear tradeoff between road adherence and obstacle-avoidance sensitivity.",
          bodyKo: "k_att, k_rep, d0 파라미터 조합이 드론 동작에 미치는 영향은 이론적 예측보다 복잡했다. 인력 계수 증가 시 장애물 회피 민감도가 저하되고, 척력 계수 증가 시 과도한 회피 반응이 발생하는 트레이드오프를 반복 실험을 통해 조정하였다.",
        },
      ],
      references: [
        {
          citation: "Jocher, G., Chaurasia, A., & Qiu, J. (2025). Ultralytics YOLO Evolution: YOLOv5, YOLOv8, YOLO11, YOLO26. arXiv:2510.09653.",
        },
        {
          citation: "Kratky, V., et al. (2023). Path Planning with Potential Field-Based Obstacle Avoidance in a 3D Environment by an Unmanned Aerial Vehicle. arXiv:2306.16276. IEEE ICRA 2023.",
        },
        {
          citation: "Li, X., et al. (2023). UAV Path Planning Based on Improved Artificial Potential Field Method. Aerospace, 10(6), 562.",
        },
        {
          citation: "Al-Batati, A. S., Koubaa, A., & Abdelkader, M. (2024). ROS 2 Key Challenges and Advances: A Survey. Preprints 2024, 202410.1204.",
        },
        {
          citation: "Qin, Y., et al. (2024). Vision-Based Learning for Drones: A Survey. arXiv:2312.05019v2.",
        },
        {
          citation: "Aggarwal, S., & Kumar, N. (2020). Path Planning Techniques for Unmanned Aerial Vehicles: A Review, Solutions, and Challenges. Computer Communications, 149, 270-299.",
        },
      ],
    },
  },
  {
    slug: "non-gps-swarm",
    title: "UWB-Based Non-GPS Indoor Autonomous Flight System",
    titleKo: "UWB 기반 Non-GPS Indoor 자동비행 시스템",
    summary:
      "An indoor autonomous-flight system that injects UWB-based localization as fake GPS, enabling autopilot-driven flight without modifying PX4 or ArduPilot internals.",
    summaryKo:
      "GPS 수신이 불가능한 실내 환경에서 UWB 위치 추정과 Fake GPS 전략을 결합하여, Autopilot 내부 로직 수정 없이 자동비행을 구현한 Indoor Flight 시스템 연구.",
    image: nonGpsSwarmImage,
    tags: ["Python", "MAVLink", "UWB", "PX4", "ArduPilot", "Fake GPS", "Wi-Fi Mesh", "Multi-UAV"],
    period: "2024.09 - 2025.02",
    periodKo: "2024.09 - 2025.02",
    role: "Fake GPS strategy design and multi-vehicle control implementation",
    roleKo: "Fake GPS 전략 설계 · 다중 기체 제어 구현",
    heroEyebrow: "Research · Da Vinci Labs Drone SW Team · 2024.09 - 2025.02",
    heroEyebrowKo: "Research · (주)다빈치랩스 Drone SW Team · 2024.09 - 2025.02",
    metaItems: [
      { label: "Affiliation", value: "Drone SW Team, Da Vinci Labs Inc." },
      { label: "Role", value: "Fake GPS Strategy Design · Multi-UAV Control" },
      { label: "Validation", value: "Indoor Real-Flight at Incheon Int'l Airport" },
      { label: "Status", value: "Confidential — Code & Video Not Disclosed" },
    ],
    metaItemsKo: [
      { label: "Affiliation", value: "(주)다빈치랩스 드론SW팀 인턴" },
      { label: "Role", value: "Fake GPS 전략 설계 · 다중 기체 제어 구현" },
      { label: "Validation", value: "인천국제공항 실내 실비행 검증" },
      { label: "Status", value: "기밀 보호 - 코드·영상 미공개" },
    ],
    details: [
      "Designed a fake-GPS pipeline that converts UWB local coordinates into MAVLink GPS messages so that the flight controller can use standard auto-flight modes indoors.",
      "Built a companion-computer workflow that injects latitude, longitude, and altitude estimates at controller-compatible timing without touching autopilot internals.",
      "Extended the system from a single vehicle to multiple UAVs over Wi-Fi mesh networking with UDP-based MAVLink communication and vehicle-level identification.",
      "Validated hover, coordinate-tracking, and multi-vehicle control scenarios in a real indoor environment at Incheon International Airport.",
    ],
    detailsKo: [
      "UWB 로컬 좌표를 MAVLink GPS 메시지로 변환하는 Fake GPS 파이프라인을 설계하여, 실내에서도 Flight Controller의 기존 자동비행 모드를 그대로 사용할 수 있도록 구현했습니다.",
      "Autopilot 내부를 수정하지 않고도 위도·경도·고도를 Companion Computer에서 주입할 수 있도록 좌표 변환 및 송신 주기를 설계했습니다.",
      "Wi-Fi Mesh 기반 MAVLink over UDP 구조로 단일 기체 시스템을 다중 기체 제어로 확장하고 Vehicle ID 기반 운용 구조를 구성했습니다.",
      "인천국제공항 실내 환경에서 호버링, 좌표 추종, 다중 기체 제어 시나리오를 실제 비행으로 검증했습니다.",
    ],
    techStack: ["Python", "MAVLink", "UWB", "PX4", "ArduPilot", "Wi-Fi Mesh", "UDP", "GCS"],
    richContent: {
      abstractParagraphs: [
        "The inability to receive GPS signals indoors is a direct limitation of conventional Autopilot-based autonomous flight systems. Autopilot's autonomous modes depend heavily on GPS input, and integrating non-GPS position sensors requires significant configuration overhead — EKF tuning, coordinate frame alignment, and parameter matching.",
        "This research addresses the problem via a Fake GPS strategy: UWB anchor-based indoor position estimates are converted to GPS-format data and injected into the Flight Controller, allowing the Autopilot to operate its existing GPS-based autonomous flight pipeline unchanged. The system was extended to single-vehicle position following and multi-vehicle autonomous flight via Wi-Fi Mesh, and validated through real flights at Incheon International Airport.",
      ],
      abstractParagraphsKo: [
        "실내 환경에서 GPS 신호를 수신할 수 없다는 사실은 기존 Autopilot 기반 자동비행 시스템의 직접적인 한계로 작용한다. Autopilot의 자동비행 기능은 GPS 입력에 강하게 의존하며, 비GPS 위치 센서를 연동하려면 EKF 설정·좌표계 정합·파라미터 튜닝 등 시스템 구성 난이도가 크게 증가한다.",
        "본 연구는 이 문제를 Fake GPS 전략으로 접근하였다. UWB Anchor 기반 실내 위치 추정값을 GPS 형식 데이터로 변환하여 Flight Controller에 주입하면, Autopilot은 내부 로직 수정 없이 기존 GPS 기반 자동비행 파이프라인을 그대로 활용할 수 있다. 단일 기체 위치 추종 및 Wi-Fi Mesh 기반 다중 기체 자동비행까지 확장하여 인천국제공항 실내 환경에서 실비행 검증을 완료하였다.",
      ],
      notice:
        "This work was carried out in an operational environment. Code, GCS screens, and flight videos are withheld under confidentiality constraints, but technical discussion is possible within that boundary.",
      noticeKo:
        "본 연구는 실전 운용 환경에서 수행된 내용으로, 관련 코드·GCS 운영 화면·실험 비행 영상은 기밀 보호 방침에 따라 공개하지 않습니다. 구체적인 기술적 내용은 인터뷰 시 기밀 범위 내에서 답변 가능합니다.",
      relatedWorks: [
        {
          category: "Positioning",
          categoryKo: "Positioning",
          year: "Tiemann et al., 2016 · IEEE IPIN",
          title: "ATLAS — An Open-Source TDOA-Based UWB Localization System",
          journal: "IEEE IPIN 2016",
          description:
            "Open-source TDOA-based UWB localization system analyzing positioning accuracy and latency characteristics in indoor environments. Used as a reference for UWB measurement noise characterization and Fake GPS rate design [1].",
          descriptionKo:
            "TDOA 방식 UWB 측위 시스템의 오픈소스 구현체로, 실내 환경에서 Anchor 기반 Tag 위치 추정의 정확도 및 지연 특성을 분석한다. 본 연구에서 UWB 위치 추정 오차 특성과 Fake GPS 주기 설계의 참고 기준으로 활용하였다[1].",
        },
        {
          category: "Navigation",
          categoryKo: "Navigation",
          year: "Guo et al., 2023 · Drones",
          title: "Indoor Navigation of UAVs Using UWB and Visual Fusion",
          journal: "Drones, 7(3), 197",
          description:
            "Fuses UWB with Visual Odometry for indoor UAV navigation. Quantitatively analyzes positioning error characteristics and limitations when using UWB alone — directly informing the system's noise-handling design [2].",
          descriptionKo:
            "UWB와 Visual Odometry를 융합한 실내 UAV 항법 연구. GPS 비가용 환경에서 위치 추정 안정성을 높이기 위한 센서 융합 전략을 제시하며, 단독 UWB 사용 시의 위치 오차 특성과 한계를 정량적으로 분석하였다[2].",
        },
        {
          category: "Control",
          categoryKo: "Control",
          year: "Meier et al., 2015 · ICRA",
          title: "PX4: A Node-Based Multithreaded Open Source Robotics Middleware for Deeply Embedded Platforms",
          journal: "IEEE ICRA 2015",
          description:
            "Key reference for PX4 Autopilot architecture, EKF-based state estimation, and GPS input pipeline. Used to understand the format and rate requirements for injecting Fake GPS data [3].",
          descriptionKo:
            "PX4 Autopilot의 아키텍처 설계 원리를 다루는 핵심 문헌. EKF 기반 상태 추정 구조와 GPS 입력 파이프라인을 이해하는 데 활용하였으며, Fake GPS 데이터의 포맷·주기 요구사항을 파악하는 데 기반이 되었다[3].",
        },
        {
          category: "Multi-UAV",
          categoryKo: "Multi-UAV",
          year: "Arafat et al., 2023 · IEEE Access",
          title: "Mission-Critical UAV Networks: A Comprehensive Survey",
          journal: "IEEE Access, 11",
          description:
            "Systematically covers multi-UAV communication and mission control structures, including Mesh-based MAVLink, Vehicle ID-based identification, and RF interference mitigation — directly referenced in the Wi-Fi Mesh multi-vehicle control implementation [4].",
          descriptionKo:
            "다중 UAV 통신 및 미션 제어 구조를 체계적으로 정리한 서베이. Mesh 기반 MAVLink 통신 구조, Vehicle ID 기반 다중 기체 식별 방식, 통신 간섭 대응 전략이 상세히 다루어지며, Wi-Fi Mesh 기반 다중 기체 제어 구현에 직접 참고하였다[4].",
        },
        {
          category: "Localization",
          categoryKo: "Localization",
          year: "Zwirello et al., 2012 · EuRAD",
          title: "UWB Localization System for Indoor Applications: Concept, Realization and Analysis",
          journal: "EuRAD 2012",
          description:
            "Analyzes UWB positioning accuracy and multipath interference in indoor environments. Used to understand reliability degradation factors in dense, metal-rich environments such as airports [5].",
          descriptionKo:
            "실내 환경에서 UWB 위치 추정의 정확도와 다중 경로 간섭(Multipath) 특성을 분석한 연구. 공항과 같이 다수 인파 및 금속 구조물이 혼재하는 환경에서의 측위 신뢰도 저하 요인을 파악하는 데 활용하였다[5].",
        },
        {
          category: "Coordinate",
          categoryKo: "Coordinate",
          year: "Fossen, 2011 · Wiley",
          title: "Handbook of Marine Craft Hydrodynamics and Motion Control",
          journal: "Wiley-IEEE Press, 2011",
          description:
            "Systematic treatment of ENU-to-WGS84 coordinate transformation equations. Directly used as the derivation basis for converting UWB local coordinates (x, y, z) to Fake GPS latitude and longitude [6].",
          descriptionKo:
            "로컬 ENU 좌표계에서 위·경도 기반 지구 좌표계로의 변환 수식을 체계적으로 다루는 참고 문헌. UWB 로컬 좌표 (x, y, z)를 Fake GPS 위·경도로 변환하는 수식 설계의 직접적인 근거로 활용하였다[6].",
        },
      ],
      methodologyIntro: [
        "The system's foundation is spoofing the GPS interface expected by the Autopilot using UWB-derived position data. UWB Tag estimates in local coordinates (x, y, z) are converted to latitude and longitude via ENU-to-WGS84 transformation, then transmitted as MAVLink GPS_INPUT messages to the Flight Controller. The Autopilot operates identically to receiving real GPS — no internal changes required.",
      ],
      methodologyIntroKo: [
        "본 시스템의 핵심은 Autopilot이 요구하는 GPS 인터페이스를 UWB 위치 데이터로 모사하는 것이다. UWB Tag가 추정한 로컬 좌표 (x, y, z)를 지구 좌표계 위·경도로 변환한 후, MAVLink GPS 메시지 형식으로 Flight Controller에 주입하면 Autopilot은 GPS가 정상 수신되는 것과 동일하게 동작한다.",
      ],
      architecture: [
        { layer: "Sensor", layerKo: "Sensor", title: "UWB Tag", titleKo: "UWB Tag", subtitle: "x, y, z", subtitleKo: "x, y, z", accent: "accent" },
        { layer: "Convert", layerKo: "Convert", title: "Fake GPS", titleKo: "Fake GPS", subtitle: "lat, lon, alt", subtitleKo: "lat, lon, alt", accent: "blue" },
        { layer: "MAVLink", layerKo: "MAVLink", title: "GPS Inject", titleKo: "GPS Inject", subtitle: "10 Hz", subtitleKo: "10 Hz", accent: "amber" },
        { layer: "Autopilot", layerKo: "Autopilot", title: "PX4 / APM", titleKo: "PX4 / APM", subtitle: "Auto Mode", subtitleKo: "Auto Mode" },
        { layer: "Comm", layerKo: "Comm", title: "Wi-Fi Mesh", titleKo: "Wi-Fi Mesh", subtitle: "GCS / UDP", subtitleKo: "GCS / UDP", accent: "blue" },
      ],
      architectureCaption:
        "Fake GPS-based indoor autonomous flight system pipeline.",
      architectureCaptionKo:
        "Fake GPS 기반 Indoor 자동비행 시스템 파이프라인.",
      equations: [
        { expression: "(x − x_i)^2 + (y − y_i)^2 + (z − z_i)^2 = d_i^2", label: "Anchor i at known position (x_i, y_i, z_i), measured range d_i. i = 1, 2, ..., N (N ≥ 3)", labelKo: "Anchor i의 위치 (x_i, y_i, z_i), Tag까지의 측정 거리 d_i. i = 1, 2, ..., N (N ≥ 3)" },
        { expression: "d_1^2 − d_i^2 = 2(x_i − x_1)x + 2(y_i − y_1)y + 2(z_i − z_1)z + C_i", label: "i = 2, ..., N. Using Anchor 1 as reference to cancel the x^2+y^2+z^2 term, yielding a linear system Ax = b", labelKo: "i = 2, ..., N. Anchor 1을 기준으로 비선형항 x²+y²+z²을 소거하여 선형 연립방정식 Ax = b 형태로 변환" },
        { expression: "x̂ = (A^TA)^−1 A^Tb", label: "When N > 3, the overdetermined system is solved via least squares for noise-robust position estimation", labelKo: "Anchor 수 N > 3일 때 과결정 연립방정식을 최소자승법으로 풀어 측정 잡음에 강인한 위치 추정 달성" },
        { expression: "Δlat = y / R_earth", label: "Latitude displacement (R_earth: Earth radius ≈ 6,378,137 m)", labelKo: "위도 변화량 (R_earth: 지구 반경 ≈ 6,378,137 m)" },
        { expression: "Δlon = x / (R_earth * cos(lat_ref))", label: "Longitude displacement (lat_ref: reference origin latitude)", labelKo: "경도 변화량 (lat_ref: 기준점 위도)" },
        {
          expression: "GPS_lat = lat_ref + Δlat, GPS_lon = lon_ref + Δlon, GPS_alt = alt_ref + z",
          label: "Fake GPS lat/lon/alt output delivered via MAVLink GPS_INPUT",
          labelKo: "Fake GPS 위·경도·고도 출력값 (MAVLink GPS_INPUT 메시지로 전달)",
        },
      ],
      modelSelectionParagraphs: [
        "Instead of integrating non-GPS sensors directly into the EKF, this work adopts an interface-preserving Fake GPS strategy. The reason is operational practicality: existing Autopilot flight modes, mission tools, and GCS workflows remain reusable with minimal onboard change.",
      ],
      modelSelectionParagraphsKo: [
        "본 연구는 비GPS 센서를 EKF에 직접 통합하는 대신, 인터페이스를 유지하는 Fake GPS 전략을 채택하였다. 그 이유는 기존 Autopilot의 자동비행 모드, 미션 도구, GCS 운용 흐름을 그대로 재사용할 수 있기 때문이다.",
      ],
      potentialFieldParagraphs: [
        "UWB Tag output (x, y, z) is interpreted as displacement from a reference origin and converted to WGS84 via ENU-to-WGS84 transformation [6].",
        "For multi-UAV operation, each vehicle independently estimates position via its UWB Tag, generates Fake GPS, and maintains MAVLink communication with the GCS over Wi-Fi Mesh.",
      ],
      potentialFieldParagraphsKo: [
        "UWB Tag 출력 좌표 (x, y, z)를 기준점(Reference Origin) 위·경도에서의 상대 변위로 해석하여 ENU → WGS84 변환을 수행한다[6].",
        "각 UAV는 UWB Tag로 독립 위치 추정 후 Fake GPS를 생성하고, Wi-Fi Mesh를 통해 GCS와 MAVLink 통신을 유지한다.",
      ],
      modules: [
        {
          emoji: "📡",
          title: "Indoor Localization Module",
          titleKo: "삼변 측량 기반 실내 위치 추정",
          badge: "UWB · Trilateration",
          accent: "accent",
          description:
            "Ranging measurements between fixed UWB Anchors and the drone-mounted Tag are used to perform trilateration, estimating the Tag's 3D absolute position (x, y, z). Each vehicle independently estimates its own position, ensuring scalability for multi-vehicle deployments.",
          descriptionKo:
            "위치가 알려진 다수의 UWB Anchor와 드론 탑재 Tag 간의 거리(Ranging) 측정값을 기반으로, 삼변 측량(Trilateration)을 수행하여 Tag의 3차원 절대 위치 (x, y, z)를 추정한다. 각 Anchor-Tag 간 거리 d_i는 TWR(Two-Way Ranging) 방식으로 측정하며, 3개 이상의 Anchor 거리를 연립하면 유일한 Tag 위치를 결정할 수 있다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "Fixed UWB Anchors deployed at known indoor positions",
                "TWR-based ranging followed by trilateration for (x, y, z)",
                "Linearized system plus least-squares solver (N > 3)",
                "Coordinates transmitted to the Companion PC via UART or USB",
              ],
              itemsKo: [
                "고정 UWB Anchor 다수 실내 배치 (알려진 좌표)",
                "TWR 방식 Anchor-Tag 간 거리 d_i 측정",
                "삼변 측량 연립방정식 선형화 + 최소자승 풀이",
                "추정 좌표 (x, y, z) → UART/USB → Companion PC",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "N > 3 Anchor configuration for noise suppression",
                "Least-squares estimation robust to measurement noise",
                "Per-vehicle independent estimation for multi-UAV scalability",
              ],
              itemsKo: [
                "N > 3 Anchor 구성으로 잡음 억제 및 정밀도 향상",
                "측정 잡음에 강인한 최소자승 추정 적용",
                "기체별 독립 추정 구조 → 다중 기체 확장성 확보",
              ],
            },
          ],
        },
        {
          emoji: "🗺️",
          title: "Fake GPS Injection Module",
          titleKo: "Fake GPS 생성 및 Autopilot 연동",
          badge: "MAVLink · Coordinate Transform",
          accent: "blue",
          description:
            "UWB local coordinates are converted to latitude and longitude via ENU-to-WGS84 transformation and transmitted as MAVLink GPS_INPUT messages at 10 Hz. Autopilot's internal EKF and flight logic require no modification, preserving behavioral consistency across indoor and outdoor environments.",
          descriptionKo:
            "UWB 로컬 좌표를 ENU → WGS84 변환 수식으로 위·경도로 변환하고, MAVLink GPS_INPUT 메시지 형식으로 Flight Controller에 10 Hz 주기로 전송한다. Autopilot 내부 EKF 구조 및 비행 로직을 수정하지 않아 실내·실외 환경 전환 시 제어 구조의 일관성이 유지된다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "UWB (x, y, z) to ENU to WGS84 conversion",
                "MAVLink GPS_INPUT message generation and transmission",
                "10 Hz transmission rate matched to FC processing period",
                "Absolute coordinate generation from reference origin",
              ],
              itemsKo: [
                "UWB (x, y, z) → ENU → WGS84 변환",
                "MAVLink GPS_INPUT 메시지 생성 및 주입",
                "FC 수신 처리 주기에 맞춘 10 Hz 송신 주기 설정",
                "기준점 기반 절대 좌표 생성",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "No changes to Autopilot internal EKF structure",
                "Consistent control behavior indoors and outdoors",
                "Rate mismatch causes Loiter instability, so transmission is fixed at 10 Hz",
              ],
              itemsKo: [
                "Autopilot 내부 EKF 수정 없음",
                "실내·실외 비행 제어 구조 일관성 유지",
                "주기 정합 오류 시 Loiter 모드 불안정 발생 → 10 Hz로 고정",
              ],
            },
          ],
        },
        {
          emoji: "🛩️",
          title: "Multi-UAV Mission Control Module",
          titleKo: "다중 기체 자동비행 제어",
          badge: "Wi-Fi Mesh · Multi-UAV",
          accent: "amber",
          description:
            "Each drone maintains MAVLink over UDP communication with the GCS via a Wi-Fi Mesh network. Vehicle ID-based identification enables per-vehicle mission upload, mode control, and status monitoring. The Mesh topology preserves the same control framework as vehicle count scales.",
          descriptionKo:
            "각 드론은 Wi-Fi Mesh Network를 통해 GCS와 MAVLink over UDP 통신을 유지한다. GCS에서 Vehicle ID 기반으로 기체를 구분하여 미션 업로드·모드 제어·상태 모니터링을 수행하며, Mesh 구조를 통해 기체 수 증가 시에도 동일한 제어 프레임워크를 유지한다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "Wi-Fi mesh networking for concurrent vehicle connections",
                "MAVLink over UDP communication channels",
                "Vehicle-ID based separation of commands and monitoring",
                "Mission upload and auto-mode switching per aircraft",
              ],
              itemsKo: [
                "Wi-Fi Mesh 기반 다중 기체 연결",
                "MAVLink over UDP 통신 채널 구성",
                "Vehicle ID 기반 기체 식별 및 제어",
                "다중 기체 Mission 업로드 및 Auto Mode 전환",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Mesh topology maintains the same control framework at scale",
                "2.4 GHz interference mitigation through planned 5 GHz migration",
                "Packet-loss monitoring and retransmission maintained in field operation",
              ],
              itemsKo: [
                "Mesh 구조로 기체 수 증가 시 동일 제어 구조 유지",
                "2.4 GHz 대역 간섭 환경 대응 → 5 GHz 전환 설계",
                "패킷 손실 시 재전송 및 상태 모니터링 유지",
              ],
            },
          ],
        },
      ],
      validationIntro: [
        "UWB Anchors were deployed inside Incheon International Airport and three scenarios were used to validate the full system.",
      ],
      validationIntroKo: [
        "인천국제공항 실내 환경에서 UWB Anchor를 배치하고 세 가지 시나리오에 걸쳐 시스템 전체를 검증하였다.",
      ],
      scenarios: [
        {
          name: "Scenario 01",
          nameKo: "단일 기체 위치 추종 자동비행",
          items: [
            "UWB-based indoor position estimate received",
            "Fake GPS injected after coordinate conversion",
            "Loiter and Guided Mode autonomous flight confirmed",
          ],
          itemsKo: [
            "UWB 기반 실내 위치 추정 결과 수신",
            "로컬 좌표 → 위·경도 변환 후 Fake GPS 입력",
            "Loiter / Guided Mode 자동비행 동작 확인",
          ],
        },
        {
          name: "Scenario 02",
          nameKo: "좌표 변환 기반 이동 검증",
          items: [
            "Lat and lon updates tracked against local coordinate changes",
            "GCS position display and movement direction consistency verified",
            "Continuous position following and control stability confirmed",
          ],
          itemsKo: [
            "로컬 좌표 변화에 따른 위·경도 업데이트 확인",
            "GCS 상 위치 표시 및 이동 방향 일관성 검증",
            "연속적인 위치 추종 및 제어 안정성 확인",
          ],
        },
        {
          name: "Scenario 03",
          nameKo: "다중 기체 자동비행 제어",
          items: [
            "Multiple vehicles connected over Wi-Fi Mesh",
            "Vehicle ID-based individual identification at GCS",
            "Multi-vehicle Auto Mode transition and monitoring validated",
          ],
          itemsKo: [
            "Wi-Fi Mesh 환경에서 다중 기체 연결",
            "GCS에서 Vehicle ID 기반 기체 구분",
            "다중 기체 자동비행 모드 전환 및 모니터링 검증",
          ],
        },
      ],
      results: [
        {
          title: "Scenario 1",
          titleKo: "Scenario 1",
          body: "UWB coordinates converted to Fake GPS were stably recognized by the Autopilot, and consistent Loiter Mode hover was confirmed.",
          bodyKo: "UWB 로컬 좌표가 위·경도 변환 후 Fake GPS 입력으로 Autopilot에 안정적으로 인식되어 Loiter Mode 호버링 유지가 가능함을 확인했다.",
        },
        {
          title: "Scenario 2",
          titleKo: "Scenario 2",
          body: "Local coordinate movements were consistently reflected in GCS position display and flight control.",
          bodyKo: "로컬 좌표 이동에 따른 위·경도 변화가 GCS 위치 표시 및 비행 제어와 일관되게 반영됨을 확인했다.",
        },
        {
          title: "Scenario 3",
          titleKo: "Scenario 3",
          body: "Multi-vehicle mode control and status monitoring over Wi-Fi Mesh UDP were confirmed in the airport indoor environment.",
          bodyKo: "Wi-Fi Mesh 환경에서 UDP 통신을 통한 다중 기체 모드 제어 및 상태 모니터링 가능함을 인천공항 실내 환경에서 확인했다.",
        },
      ],
      issues: [
        {
          title: "MAVLink communication instability in a crowded airport interior",
          titleKo: "공항 실내 다중 인파 환경에서 MAVLink 통신 불안정",
          problem: "Heavy 2.4 GHz interference from mobile devices and surrounding networks caused command delays and occasional reception failures during indoor operation.",
          problemKo: "인천국제공항 실내 환경에서 다중 인파의 모바일 기기와 Wi-Fi 신호로 인한 2.4 GHz 대역 간섭이 발생해 MAVLink 제어 명령 지연과 수신 실패가 나타났다.",
          cause: "The people-dense airport environment increased channel contention and packet collision risk in the original wireless setup.",
          causeKo: "공항 실내에 혼재하는 다수의 2.4 GHz 신호가 Wi-Fi 채널 간섭을 유발. 다중 기체 동시 제어 시 패킷 충돌 가능성 증가",
          fix: "The communication network was moved to 5 GHz Wi-Fi mesh, which stabilized MAVLink-over-UDP traffic and removed the observed control lag.",
          fixKo: "5 GHz 대역 기반 Wi-Fi Mesh 네트워크로 전환. MAVLink over UDP 통신 채널을 5 GHz로 분리·안정화하여 통신 지연 및 명령 손실 현상 제거",
        },
        {
          title: "Loiter instability caused by fake-GPS update timing",
          titleKo: "Fake GPS 송신 주기로 인한 Loiter 모드 불안정",
          problem: "Early versions transmitted fake-GPS data too aggressively, which destabilized hover in loiter-like modes and introduced control jitter.",
          problemKo: "초기 설계에서 Fake GPS 데이터를 과도한 주기로 전송하자 Loiter 모드에서 기체 호버링이 불안정해지고 위치 입력 변동으로 제어가 흔들리는 현상이 발생했다.",
          cause: "The companion computer's transmission frequency did not align with the flight controller's internal processing cadence.",
          causeKo: "Companion Computer의 GPS 데이터 전송 주기가 FC의 수신 처리 주기보다 빠르게 설정됨. Autopilot 내부 필터링 로직과 송신 주기 불일치",
          fix: "The update rate was fixed at 10 Hz to match controller timing, restoring stable hover and predictable auto-mode behavior.",
          fixKo: "FC 수신 처리 주기에 맞춰 Fake GPS 송신 주기를 10 Hz로 조정. 위치 업데이트 주기와 Autopilot 처리 타이밍을 정합하여 Loiter 모드 안정적 호버링 확보",
        },
      ],
      lessons: [
        {
          title: "Preserving interfaces can be more powerful than replacing systems",
          titleKo: "인터페이스를 바꾸지 않는 설계의 힘",
          body: "Emulating the GPS contract allowed us to reuse existing autopilot logic, mission workflows, and operator habits instead of forcing a full control-stack rewrite.",
          bodyKo: "Autopilot 내부 로직을 건드리지 않고 GPS 인터페이스만 모사하는 전략이 시스템 안정성과 이식성 모두에서 유리함을 확인하였다. 블랙박스를 존중하는 설계가 예상치 못한 부작용을 줄인다.",
        },
        {
          title: "Field RF conditions dominate elegant lab assumptions",
          titleKo: "실환경 RF 조건의 우선순위",
          body: "A networking setup that looked acceptable in test environments behaved very differently once deployed in a crowded airport interior.",
          bodyKo: "Gazebo나 테스트 환경에서는 문제가 없던 통신이 인천공항처럼 혼잡한 실환경에서 예상치 못한 방식으로 깨졌다. RF 환경을 설계 초기부터 고려하지 않으면 현장에서 발목이 잡힌다.",
        },
        {
          title: "Timing alignment matters as much as coordinate accuracy",
          titleKo: "주기 정합의 중요성",
          body: "The quality of the fake-GPS stream depended not only on position correctness but also on whether its update rate matched what the flight controller could absorb stably.",
          bodyKo: "Fake GPS 송신 주기 10 Hz와 FC 처리 주기 정합은 수치 자체보다 Autopilot 내부 타이밍 특성을 이해해야 가능했다. 임베디드 시스템에서 타이밍 오류는 미묘하게 나타나며 원인 추적이 까다롭다.",
        },
        {
          title: "Reference-origin errors spread through the whole pipeline",
          titleKo: "기준점 오차의 전파",
          body: "Small mistakes in origin definition or coordinate conversion surfaced everywhere: GCS display, path interpretation, and ultimately flight behavior.",
          bodyKo: "로컬 (x, y, z) → 위·경도 변환 시 기준점 오차가 누적되면 GCS 표시 위치와 실제 위치가 어긋난다. 기준점 설정 정밀도와 변환 수식의 정확성이 전체 시스템 정밀도를 결정함을 확인하였다.",
        },
      ],
      references: [
        {
          citation: "Tiemann, J., et al. (2016). ATLAS: An Open-Source TDOA-Based Ultra-Wideband Localization System. IEEE IPIN 2016.",
          citationKo: "Tiemann, J., et al. (2016). ATLAS: An Open-Source TDOA-Based Ultra-Wideband Localization System. IEEE IPIN 2016.",
        },
        {
          citation: "Guo, Z., et al. (2023). Indoor Navigation of UAVs Using UWB and Visual Fusion. Drones, 7(3), 197.",
          citationKo: "Guo, Z., et al. (2023). Indoor Navigation of UAVs Using UWB and Visual Fusion. Drones, 7(3), 197.",
        },
        {
          citation: "Meier, L., et al. (2015). PX4: A Node-Based Multithreaded Open Source Robotics Middleware for Deeply Embedded Platforms. IEEE ICRA 2015.",
          citationKo: "Meier, L., et al. (2015). PX4: A Node-Based Multithreaded Open Source Robotics Middleware for Deeply Embedded Platforms. IEEE ICRA 2015.",
        },
        {
          citation: "Arafat, M. Y., et al. (2023). Mission-Critical UAV Networks: A Comprehensive Survey. IEEE Access, 11.",
          citationKo: "Arafat, M. Y., et al. (2023). Mission-Critical UAV Networks: A Comprehensive Survey. IEEE Access, 11.",
        },
        {
          citation: "Zwirello, U., et al. (2012). UWB Localization System for Indoor Applications: Concept, Realization and Analysis. EuRAD 2012.",
          citationKo: "Zwirello, U., et al. (2012). UWB Localization System for Indoor Applications: Concept, Realization and Analysis. EuRAD 2012.",
        },
        {
          citation: "Fossen, T. I. (2011). Handbook of Marine Craft Hydrodynamics and Motion Control. Wiley-IEEE Press.",
          citationKo: "Fossen, T. I. (2011). Handbook of Marine Craft Hydrodynamics and Motion Control. Wiley-IEEE Press.",
        },
      ],
    },
  },
  {
    slug: "deep-learning-reconnaissance",
    title: "Real-Time Object Detection Drone System",
    titleKo: "실시간 영상 기반 객체 인식 드론 시스템",
    summary:
      "A remote surveillance drone system that streams live video from a beyond-line-of-sight UAV to a ground station and overlays real-time YOLO detection results on the stream.",
    summaryKo:
      "비가시권 드론에서 수집한 실시간 영상을 지상국으로 전송하고, YOLO 기반 객체 인식 결과를 영상 스트림 위에 실시간으로 오버레이하는 원격 감시 드론 시스템 연구.",
    award: "2nd Operations Command Dronebot Competition · 3rd Place (May 2024)",
    awardKo: "2작전사령관배 드론봇 경연대회 · 3위 수상 (2024.05)",
    image: deepLearningReconnaissanceImage,
    tags: ["Python", "YOLO", "ROS", "OpenCV", "TFLite", "MAVLink", "HM30", "LTE", "Raspberry Pi"],
    period: "2024.03 - 2024.05",
    periodKo: "2024.03 - 2024.05",
    role: "System Architecture · YOLO Training · Inference Pipeline",
    roleKo: "시스템 아키텍처 설계 · YOLO 학습 · 추론 파이프라인 구성",
    heroEyebrow: "Research · Dronebot Competition · Mar 2024 ~ May 2024",
    heroEyebrowKo: "Research · 드론봇 경연대회 · 2024.03 ~ 2024.05",
    metaItems: [
      { label: "Context", value: "Dronebot Competition — Team Project" },
      { label: "Role", value: "System Architecture · YOLO Training · Inference Pipeline" },
      { label: "Hardware", value: "Raspberry Pi · HM30 · LTE Module · USB Cam" },
      { label: "Result", value: "BLOS Outdoor Real-Flight Validated" },
    ],
    metaItemsKo: [
      { label: "Context", value: "드론봇 경연대회 팀 프로젝트" },
      { label: "Role", value: "시스템 아키텍처 설계 · YOLO 학습 · 추론 파이프라인 구성" },
      { label: "Hardware", value: "Raspberry Pi · HM30 · LTE Module · USB Cam" },
      { label: "Result", value: "비가시권 실외 환경 실비행 검증 완료" },
    ],
    details: [
      "Integrated HM30-based beyond-line-of-sight video streaming with a YOLO real-time inference pipeline for a remote surveillance drone system.",
      "Applied TFLite quantization to overcome Raspberry Pi hardware constraints and secure real-time-capable object detection.",
      "Separated IP Camera and USB Camera into a dual-pipeline architecture so streaming latency and inference latency could be managed independently.",
      "Validated the system in outdoor BLOS real-flight conditions and earned 3rd place at the competition.",
    ],
    detailsKo: [
      "HM30 모듈 기반 비가시권 영상 스트리밍과 YOLO 실시간 추론 파이프라인을 통합한 원격 감시 드론 시스템을 설계·구현했습니다.",
      "Raspberry Pi 하드웨어 제약을 극복하기 위해 TFLite 양자화를 적용하여 실시간 객체 인식이 가능한 수준으로 추론 속도를 확보했습니다.",
      "IP Camera와 USB Camera를 이중화한 병렬 구조를 설계하여 스트리밍 지연과 추론 지연을 독립적으로 관리했습니다.",
      "실외 비가시권 환경에서 실비행 검증을 완료하고 대회에서 3위를 수상했습니다.",
    ],
    techStack: ["Python", "YOLO", "ROS", "OpenCV", "TFLite", "MAVLink", "HM30", "LTE", "Raspberry Pi"],
    richContent: {
      abstractParagraphs: [
        "Real-time video-based object detection is essential for drone-based surveillance, yet two structural challenges persist in practice. First, many systems still rely on offline analysis rather than real-time detection. Second, combining live video transmission with simultaneous object detection introduces latency issues and substantially raises system integration complexity.",
        "This research designed and implemented a remote surveillance drone system that integrates HM30-based beyond-line-of-sight video streaming with a YOLO real-time inference pipeline. To overcome Raspberry Pi hardware constraints, TFLite model quantization was applied; IP Camera and USB Camera were separated into a dual-pipeline architecture that manages streaming and inference latency independently. The system was validated in outdoor BLOS conditions and earned 3rd place at the competition.",
      ],
      abstractParagraphsKo: [
        "드론을 활용한 감시·모니터링 시스템에서 실시간 영상 기반 객체 인식은 핵심 요소이나, 실제 운용 환경에서는 두 가지 구조적 문제가 존재한다. 첫째, 드론 촬영 영상이 저장 후 분석 방식에 머무는 경우가 많다. 둘째, 실시간 영상 전송과 객체 인식을 동시에 수행할 경우 지연 문제가 발생하며, 두 파이프라인을 결합할 때 시스템 통합 난이도가 증가한다.",
        "본 연구는 HM30 모듈 기반 비가시권 영상 스트리밍과 YOLO 실시간 추론 파이프라인을 통합한 원격 감시 드론 시스템을 설계·구현하였다. Raspberry Pi의 하드웨어 제약을 극복하기 위해 TFLite 모델 경량화를 적용하고, IP Camera와 USB Camera를 병렬 구조로 분리하여 스트리밍 지연과 추론 지연을 독립적으로 관리하는 방식을 채택하였다. 실외 비가시권 환경에서 실비행 검증을 완료하고 대회에서 3위를 수상하였다.",
      ],
      relatedWorks: [
        {
          category: "Detection",
          categoryKo: "Detection",
          year: "Redmon et al., 2016 · CVPR",
          title: "You Only Look Once: Unified, Real-Time Object Detection",
          journal: "IEEE CVPR 2016",
          description: "The original YOLO paper, enabling real-time object detection via a single neural network pass over the entire image. High inference speed and a simple pipeline structure are the core justification for choosing the YOLO family in embedded drone environments [1].",
          descriptionKo: "단일 신경망으로 전체 이미지를 한 번에 처리하여 실시간 객체 탐지를 가능하게 한 YOLO의 원작 논문. 높은 추론 속도와 단순한 파이프라인 구조가 임베디드 드론 환경에서 YOLO 계열을 선택하는 핵심 근거가 된다 [1].",
        },
        {
          category: "Lightweight",
          categoryKo: "Lightweight",
          year: "Jacob et al., 2018 · CVPR",
          title: "Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference",
          journal: "IEEE CVPR 2018",
          description: "Systematic treatment of quantization for inference speedup and memory reduction. Used as the theoretical basis for INT8 quantization during TFLite conversion and for evaluating real-time inference feasibility on Raspberry Pi [2].",
          descriptionKo: "모델 양자화를 통한 추론 속도 향상 및 메모리 절감 기법을 체계적으로 정리한 논문. TFLite 변환 시 INT8 양자화 적용의 이론적 근거로 활용하였으며, Raspberry Pi 환경에서의 실시간 추론 가능성을 평가하는 기준이 되었다 [2].",
        },
        {
          category: "Streaming",
          categoryKo: "Streaming",
          year: "Schulzrinne et al., 2003 · RFC 3550",
          title: "RTP: A Transport Protocol for Real-Time Applications",
          journal: "IETF RFC 3550",
          description: "The standard defining the RTP protocol for real-time video transmission. Used as the theoretical foundation for analyzing RTSP streaming latency and buffering causes, and for understanding HM30 RTSP stream delay characteristics [3].",
          descriptionKo: "실시간 영상 전송의 표준 프로토콜인 RTP를 정의한 문헌. RTSP 스트리밍 지연 원인 분석 및 버퍼링 해소 방안 검토의 이론적 기반으로 활용하였다. HM30 RTSP 스트림의 지연 특성을 이해하는 데 직접 참고하였다 [3].",
        },
        {
          category: "Edge AI",
          categoryKo: "Edge AI",
          year: "Howard et al., 2019 · arXiv:1905.02244",
          title: "Searching for MobileNetV3",
          journal: "arXiv:1905.02244 / IEEE ICCV 2019",
          description: "Research on lightweight neural network design for edge devices. Used for evaluating the accuracy-speed trade-off in model selection for constrained hardware like Raspberry Pi [4].",
          descriptionKo: "Edge 디바이스를 위한 경량 신경망 설계 원리를 다루는 연구. Raspberry Pi처럼 제한된 하드웨어 환경에서 추론 속도와 정확도 간 트레이드오프를 고려한 모델 선택 기준을 검토하는 데 활용하였다 [4].",
        },
      ],
      methodologyIntro: [
        "Onboard and Ground systems are clearly separated, with video transmission and object detection inference pipelines designed independently so that latency in one path does not impact the other.",
      ],
      methodologyIntroKo: [
        "Onboard 시스템과 Ground 시스템을 명확히 분리하고, 영상 전송과 객체 인식 추론 파이프라인을 독립적으로 구성하여 각 경로의 지연이 서로에게 영향을 주지 않도록 설계하였다.",
      ],
      architecture: [
        { layer: "Onboard", title: "Camera", subtitle: "IP + USB", accent: "accent" },
        { layer: "Onboard", title: "MC (RPi)", subtitle: "YOLO Infer", accent: "accent" },
        { layer: "Comm", title: "HM30 / LTE", subtitle: "Stream", accent: "blue" },
        { layer: "Ground", title: "GCS / PC", subtitle: "Display", accent: "amber" },
        { layer: "Output", title: "Detection", subtitle: "+Auto Shot" },
      ],
      architectureCaption: "Real-time video streaming and object detection drone system architecture. HM30 / LTE communication between Onboard and Ground systems.",
      architectureCaptionKo: "실시간 영상 전송 및 객체 인식 드론 시스템 아키텍처. Onboard와 Ground 시스템 간 HM30 / LTE 통신 구조.",
      modelSelectionParagraphs: [
        "In the initial single-pipeline design, HM30 RTSP streaming latency and inference latency interfered with each other. To resolve this, a dual-camera architecture was introduced: the IP Camera (HM30) is dedicated exclusively to video streaming to the GCS, and the USB Camera is dedicated exclusively to object detection inference. This allows each pipeline's latency to be managed independently.",
      ],
      modelSelectionParagraphsKo: [
        "초기 단일 HM30 RTSP 스트림 기반 구조에서 스트리밍 지연과 추론 지연이 서로 간섭하는 문제가 발생하였다. 이를 해결하기 위해 IP Camera(HM30)와 USB Camera를 병렬로 분리하는 이중화 구조를 도입하였다. HM30은 지상국 영상 전송 전용으로, USB Camera는 객체 인식 추론 전용 입력으로 활용하여 두 파이프라인의 지연을 독립적으로 관리한다.",
      ],
      modules: [
        {
          emoji: "🎯",
          title: "YOLO Object Detection Model Training",
          titleKo: "YOLO 객체 인식 모델 학습",
          badge: "YOLO · TFLite",
          accent: "accent",
          description: "A labeled training dataset was assembled from target object images and a YOLO model was trained on it. To achieve real-time inference on Raspberry Pi, YOLOv5 to TFLite conversion with INT8 quantization was applied to produce a lightweight model.",
          descriptionKo: "프로젝트 대상 객체에 맞게 학습 데이터셋을 직접 구성하고 YOLO 모델을 학습하였다. Raspberry Pi 환경에서의 실시간 추론 가능성을 확보하기 위해 YOLOv5 → TFLite 변환 및 INT8 양자화를 적용하여 모델을 경량화하였다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "Dataset assembly and labeling for target object classes",
                "YOLOv5 training and performance evaluation",
                "TFLite conversion plus INT8 quantization",
                "Input resolution reduction for inference speed optimization",
              ],
              itemsKo: [
                "대상 객체 기반 학습 데이터셋 구성 및 라벨링",
                "YOLOv5 모델 학습 및 성능 평가",
                "TFLite 변환 + INT8 양자화로 경량화",
                "입력 이미지 해상도 조정으로 추론 속도 최적화",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Model size chosen with Raspberry Pi compute limits in mind",
                "Accuracy-speed trade-off tuned experimentally",
                "Model selection criterion: real-time inference viability first",
              ],
              itemsKo: [
                "Raspberry Pi 연산 한계를 고려한 모델 크기 선정",
                "정확도-속도 트레이드오프 실험적 조정",
                "실시간 추론 환경을 우선 기준으로 모델 결정",
              ],
            },
          ],
        },
        {
          emoji: "📹",
          title: "Real-Time Inference–Streaming Pipeline",
          titleKo: "실시간 추론-전송 파이프라인",
          badge: "OpenCV · Frame Sampling",
          accent: "blue",
          description: "To avoid increasing streaming latency, frame sampling-based inference was applied rather than running detection on every frame. The USB Camera input is processed on a separate thread, ensuring HM30 streaming and inference remain independent.",
          descriptionKo: "스트리밍 지연 증가를 방지하기 위해 모든 프레임에 추론을 수행하지 않고 프레임 샘플링 기반 추론을 적용하였다. USB Camera 입력을 별도 스레드로 처리하여 HM30 스트리밍과 추론 파이프라인이 독립적으로 동작하도록 구성하였다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "Frame sampling applied to USB Camera inference",
                "Streaming and inference pipelines on separate threads",
                "Real-time detection result overlay with bounding box and class",
                "Minimal-latency pipeline design",
              ],
              itemsKo: [
                "USB Camera 프레임 샘플링 기반 추론 적용",
                "HM30 스트리밍과 추론 파이프라인 스레드 분리",
                "객체 인식 결과(Bounding Box, Class) 실시간 시각화",
                "추론-전송 파이프라인 지연 최소화 설계",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Every-N-frame sampling instead of per-frame inference",
                "Streaming quality and inference rate adjustable independently",
                "Detection results displayed on the GCS monitor immediately",
              ],
              itemsKo: [
                "전체 프레임 추론 대신 N프레임 단위 샘플링",
                "스트리밍 품질과 추론 주기 독립 조정 가능",
                "추론 결과를 GCS 모니터에 즉시 출력",
              ],
            },
          ],
        },
        {
          emoji: "📸",
          title: "Detection-Triggered Auto-Shot",
          titleKo: "객체 인식 기반 자동 촬영",
          badge: "MAVLink · Event Trigger",
          accent: "amber",
          description: "When a specific target class is detected, an auto-shot trigger fires and saves the corresponding frame. Temporal alignment between detection event and shot timestamp was verified to confirm accurate capture of detection results.",
          descriptionKo: "특정 객체가 인식되면 자동 촬영 트리거가 발생하여 해당 프레임을 저장한다. 인식 이벤트와 촬영 시점 간의 시간 정합성을 검증하여 인식 결과 기반 이미지가 정확하게 저장됨을 확인하였다.",
          columns: [
            {
              title: "Implementation",
              titleKo: "구현 내용",
              items: [
                "Auto-shot trigger on specific class detection",
                "Detection-annotated image auto-save",
                "Temporal alignment between trigger and capture verified",
              ],
              itemsKo: [
                "특정 클래스 인식 시 자동 촬영 트리거 발생",
                "인식 결과 포함 이미지 자동 저장",
                "트리거 발생과 촬영 시점 시간 정합성 검증",
              ],
            },
            {
              title: "Design Points",
              titleKo: "설계 포인트",
              items: [
                "Confidence score threshold controls trigger condition",
                "False-positive triggers minimized",
                "Architecture supports future downstream decision-making",
              ],
              itemsKo: [
                "Confidence Score 임계값 기반 트리거 조건 설정",
                "오탐 시 불필요한 촬영 최소화",
                "추후 자동 의사결정 연계 가능한 구조 유지",
              ],
            },
          ],
        },
      ],
      validationIntro: [
        "Three scenarios were used in an HM30-based BLOS flight environment to validate the end-to-end real-time operability of the system.",
      ],
      validationIntroKo: [
        "HM30 모듈 기반 비가시권 비행 환경에서 세 가지 시나리오를 통해 시스템 전체의 실시간 운용 가능성을 검증하였다.",
      ],
      scenarios: [
        {
          name: "SCENARIO 01",
          nameKo: "실시간 영상 스트리밍 안정성",
          items: [
            "Drone to GCS video stream received in real time",
            "Frame drops and latency spikes checked",
            "Stream stability confirmed over extended flight",
          ],
          itemsKo: [
            "드론 → 지상국 영상 스트림 실시간 수신",
            "프레임 끊김 및 지연 발생 여부 확인",
            "장시간 스트리밍 중 영상 안정성 검증",
          ],
        },
        {
          name: "SCENARIO 02",
          nameKo: "YOLO 실시간 추론",
          items: [
            "Object detection on streaming video frames",
            "Bounding box and class results visualized in real time",
            "Inference latency impact on streaming measured",
          ],
          itemsKo: [
            "스트리밍 영상 프레임 기반 객체 인식 수행",
            "Bounding Box·Class 결과 실시간 시각화",
            "추론 지연이 스트리밍에 미치는 영향 측정",
          ],
        },
        {
          name: "SCENARIO 03",
          nameKo: "객체 인식 기반 자동 촬영",
          items: [
            "Auto-shot trigger fires on target object detection",
            "Temporal alignment between detection and capture verified",
            "Saved images confirmed correct",
          ],
          itemsKo: [
            "특정 객체 인식 시 자동 촬영 트리거 발생",
            "인식 결과와 촬영 시점 시간 정합성 검증",
            "자동 촬영 이미지 저장 및 결과 확인",
          ],
        },
      ],
      results: [
        {
          title: "Scenarios 1 & 2",
          titleKo: "Scenario 1·2",
          body: "Drone-to-GCS live stream maintained stably during extended operation without frame drops. YOLO inference results displayed continuously with no latency spikes.",
          bodyKo: "드론-지상국 간 실시간 영상 스트리밍이 장시간 운용 중에도 프레임 끊김 없이 안정적으로 유지되었고, YOLO 추론 결과가 지연 없이 연속 출력됨을 확인했다.",
        },
        {
          title: "Scenario 3",
          titleKo: "Scenario 3",
          body: "Auto-shot trigger operated correctly on detection events; detection-annotated images were accurately saved.",
          bodyKo: "객체 인식 이벤트 발생 시 자동 촬영 트리거가 정상 동작하여 인식 결과 기반 이미지가 정확하게 저장됨을 확인했다.",
        },
        {
          title: "Competition Result",
          titleKo: "대회 결과",
          body: "Full system validated in outdoor BLOS real-flight conditions. 3rd Place — 2nd Operations Command Dronebot Competition.",
          bodyKo: "2작전사령관배 드론봇 경연대회 비가시권 실외 환경 실비행 운용 검증을 완료했고 3위를 수상했다.",
        },
      ],
      issues: [
        {
          title: "YOLOv5 real-time inference not feasible on Raspberry Pi",
          titleKo: "Raspberry Pi 성능 한계로 인한 YOLOv5 실시간 처리 불가",
          problem: "Raspberry Pi hardware limits made real-time YOLOv5 PyTorch inference impossible. Inference delay exceeded several seconds per frame in the live streaming environment.",
          problemKo: "Raspberry Pi 하드웨어 성능 한계로 YOLOv5 PyTorch 모델의 실시간 추론이 불가능하였다. 실시간 영상 스트리밍 환경에서 추론 지연이 수초 이상 발생했다.",
          cause: "YOLOv5 PyTorch compute load exceeded Raspberry Pi CPU capacity. Without GPU acceleration, per-frame processing time surpassed the real-time threshold.",
          causeKo: "YOLOv5 PyTorch 모델의 연산량이 Raspberry Pi CPU 처리 성능을 초과했다. GPU 가속 없는 환경에서 Full 모델 추론 시 프레임당 처리 시간이 실시간 임계값을 초과했다.",
          fix: "Converted YOLOv5 to TensorFlow Lite and adjusted input resolution, achieving real-time-capable inference speed on Raspberry Pi.",
          fixKo: "YOLOv5 모델을 TensorFlow Lite 기반 경량 모델로 변환하고 입력 이미지 해상도를 조정하여 Raspberry Pi 환경에서도 실시간 객체 인식 가능한 수준의 추론 속도를 확보했다.",
        },
        {
          title: "Object detection failure due to HM30 RTSP latency",
          titleKo: "HM30 RTSP 영상 지연으로 객체 탐지 실패",
          problem: "Running object detection on the HM30 RTSP stream caused buffering and latency, preventing real-time detection from working correctly.",
          problemKo: "HM30 RTSP 기반 영상 스트리밍 환경에서 객체 탐지 수행 시 버퍼링 및 지연이 발생하여 실시간 객체 인식이 정상적으로 동작하지 않았다.",
          cause: "RTSP streams inherently carry network and decoding latency. In a single-pipeline design where streaming and inference share the same flow, these delays accumulate.",
          causeKo: "RTSP 스트림 특성상 네트워크 및 디코딩 지연이 존재하며, 영상 전송과 객체 인식 추론이 단일 파이프라인으로 결합된 구조에서 지연이 상호 누적되었다.",
          fix: "Added a USB Camera as a dedicated inference input. The IP Camera and USB Camera were parallelized into separate pipelines, allowing each path's latency to be managed independently.",
          fixKo: "USB Camera를 추가 장착하여 객체 인식 전용 영상 입력으로 분리했다. IP Camera(HM30)와 USB Camera를 병렬 구조로 이중화하여 각 파이프라인의 지연을 독립적으로 관리했다.",
        },
      ],
      lessons: [
        {
          title: "Matching model to context, not just accuracy",
          titleKo: "정확도보다 상황에 적합한 모델 선정",
          body: "YOLOv5 Full excels in accuracy but cannot guarantee real-time behavior on Raspberry Pi. Defining hardware constraints explicitly at design time and choosing models accordingly was the key insight.",
          bodyKo: "YOLOv5 Full 모델은 정확도 측면에서 우수하나 Raspberry Pi 환경에서는 실시간성을 보장할 수 없었다. 하드웨어 제약을 설계 초기에 명시하고, 이에 맞는 모델 선택 기준을 설정하는 것이 핵심임을 확인하였다.",
        },
        {
          title: "Pipeline separation determines system stability",
          titleKo: "파이프라인 분리가 시스템 안정성을 결정한다",
          body: "Processing streaming and inference in a single pipeline means latency in one path ripples through the whole system. Physically separating the two into a dual-pipeline architecture tangibly improved overall stability.",
          bodyKo: "단일 파이프라인에서 스트리밍과 추론을 함께 처리하면 한쪽의 지연이 전체에 영향을 미친다. 두 파이프라인을 물리적으로 분리한 이중화 구조가 시스템 전체 안정성을 실질적으로 향상시켰다.",
        },
        {
          title: "The real difficulty of BLOS operations",
          titleKo: "비가시권 운용의 실제 어려움",
          body: "Systems that worked in simulation or line-of-sight tests behaved differently in BLOS real environments due to communication delays, signal attenuation, and unexpected RF interference.",
          bodyKo: "시뮬레이션이나 가시권 테스트에서 정상 동작하던 시스템이 비가시권 실환경에서는 통신 지연·신호 감쇄·예상치 못한 RF 간섭으로 다르게 동작하였다. 실환경 테스트를 개발 사이클에 일찍 포함하는 것이 중요하다.",
        },
        {
          title: "End-to-end integration experience",
          titleKo: "End-to-End 통합 경험",
          body: "Modules that work individually can still produce new failure modes when integrated. A dedicated integration testing phase, separate from unit-level validation, is indispensable.",
          bodyKo: "이미지 인식과 영상 전송을 결합하는 복합적인 시스템을 구현하면서, 개별 모듈이 잘 동작하더라도 통합 시 새로운 문제가 발생할 수 있음을 경험하였다. 통합 테스트를 별도 단계로 설계하는 것이 필수적임을 확인하였다.",
        },
      ],
      references: [
        { citation: "Redmon, J., et al. (2016). You Only Look Once: Unified, Real-Time Object Detection. IEEE CVPR 2016.", citationKo: "Redmon, J., et al. (2016). You Only Look Once: Unified, Real-Time Object Detection. IEEE CVPR 2016." },
        { citation: "Jacob, B., et al. (2018). Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference. IEEE CVPR 2018.", citationKo: "Jacob, B., et al. (2018). Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference. IEEE CVPR 2018." },
        { citation: "Schulzrinne, H., et al. (2003). RTP: A Transport Protocol for Real-Time Applications. IETF RFC 3550.", citationKo: "Schulzrinne, H., et al. (2003). RTP: A Transport Protocol for Real-Time Applications. IETF RFC 3550." },
        { citation: "Howard, A., et al. (2019). Searching for MobileNetV3. arXiv:1905.02244. IEEE ICCV 2019.", citationKo: "Howard, A., et al. (2019). Searching for MobileNetV3. arXiv:1905.02244. IEEE ICCV 2019." },
      ],
    },
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    iconName: "Eye",
    title: "Vision-Based Perception",
    titleKo: "비전 기반 인식",
    description:
      "Perception pipelines that connect object understanding, scene interpretation, and robot action in complex environments.",
    descriptionKo:
      "복잡한 환경에서 객체 이해, 장면 해석, 로봇 행동을 연결하는 인식 파이프라인.",
  },
  {
    iconName: "Route",
    title: "Motion Planning",
    titleKo: "경로 계획",
    description:
      "Trajectory generation and decision logic for safe movement through constrained and changing spaces.",
    descriptionKo:
      "제약된 변화하는 공간에서 안전한 이동을 위한 궤적 생성 및 의사결정 로직.",
  },
  {
    iconName: "Navigation",
    title: "Autonomous Navigation & Guidance",
    titleKo: "자율 항법 및 유도",
    description:
      "Navigation strategies that fuse path reasoning, guidance, and robust execution for mobile robotic systems.",
    descriptionKo:
      "경로 추론, 유도, 강건한 실행을 융합하는 이동 로봇 시스템을 위한 항법 전략.",
  },
];

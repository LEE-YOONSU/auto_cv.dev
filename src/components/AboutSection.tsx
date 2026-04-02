import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const renderPeriod = (period: string) => {
  const parts = period.split(" - ");

  if (parts.length !== 2) {
    return period;
  }

  return (
    <>
      <span>{parts[0]}</span>
      <span aria-hidden="true" className="px-1">
        -
      </span>
      <span>{parts[1]}</span>
    </>
  );
};

const AboutSection = () => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      icon: GraduationCap,
      period: "2020 - 2025",
      title: t("경운대학교", "Kyungwoon University"),
      description: t("무인항공기공학과 학사", "B.S. in Unmanned Aerial Vehicle Engineering"),
    },
    {
      icon: Briefcase,
      period: "2023 - 2025",
      title: t("제어시스템 연구실", "Control Systems Laboratory"),
      description: t(
        "학부 연구원 — UAV 제어, 항법, 자율비행 시스템",
        "Undergraduate Researcher — UAV control, navigation, and autonomous flight systems"
      ),
    },
    {
      icon: Building2,
      period: "2025",
      title: "Dabinchi LABs Inc.",
      description: t(
        "드론 소프트웨어 인턴 — 소프트웨어 구현 및 자율비행 기술",
        "Drone Software Intern — Software implementation and autonomous flight technology"
      ),
    },
    {
      icon: Building2,
      period: "2025 - Present",
      title: "SEESAW D&U Inc.",
      description: t(
        "자율비행 드론 엔지니어 — AI 기반 UAV 시스템 및 실전 자율비행 파이프라인",
        "Autonomous Drone Engineer — AI-based UAV systems and real-world autonomy pipelines"
      ),
    },
  ];

  const skills = [
    "Python", "Deep Learning", "Computer Vision", "PyTorch",
    "ROS", "Path Planning", "Object Detection", "UAV Control",
    "Docker", "Git", "C/C++",
  ];

  return (
    <section id="about" className="py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("소개", "About Me")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-10 md:mb-12 leading-relaxed text-balance">
            {t(
              "경운대학교 무인항공기공학과에서 학사 학위를 받았습니다. 제어 시스템 연구와 자율비행 드론 플랫폼 소프트웨어 개발 경험을 갖추고 있습니다.",
              "I received my B.S. in Unmanned Aerial Vehicle Engineering from Kyungwoon University. My background combines research in control systems with hands-on software development for autonomous drone platforms."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
              {t("경력 타임라인", "Experience Timeline")}
            </h3>
            <div className="relative">
              <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6 md:space-y-8">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-3 sm:gap-4 relative"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center z-10">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="pb-2 min-w-0">
                      <p className="text-xs font-medium text-accent tracking-wide uppercase mb-1">
                        {renderPeriod(item.period)}
                      </p>
                      <h4 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1 break-words">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
              {t("기술 스택", "Tech Stack")}
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mt-10 md:mt-12 mb-4">
              {t("핵심 가치", "Core Values")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed break-words">
              {t(
                "혁신적인 엔지니어링과 지속적인 학습을 통해 자율 시스템을 발전시키는 데 열정을 가진 엔지니어입니다.",
                "I am a passionate, skilled, and self-motivated engineer committed to advancing autonomous systems through innovative engineering and continuous learning."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

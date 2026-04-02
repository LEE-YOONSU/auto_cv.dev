import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { profileImage } from "@/assets/pages/home/hero";
import { useLanguage } from "@/contexts/LanguageContext";

const cvPdfUrl = "/documents/yoon-su-lee-cv.pdf";

const HeroSection = () => {
  const { t } = useLanguage();
  const profileCardAnimation = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  const profileCard = (
    <div className="bg-card border rounded-xl p-5 sm:p-6 md:p-8 space-y-5 md:space-y-6 shadow-sm max-w-sm mx-auto w-full">
      <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-secondary overflow-hidden border-2 border-accent/20">
        <img
          src={profileImage}
          alt={t("이윤수", "Yoon-su Lee")}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = 'none';
          }}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 text-center">
        <div className="break-words">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">
            {t("현재", "Current")}
          </p>
          <p className="text-xs md:text-sm font-semibold text-foreground">SEESAW D&U Inc.</p>
        </div>
        <div className="break-words">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">
            {t("학력", "Education")}
          </p>
          <p className="text-xs md:text-sm font-semibold text-foreground">
            {t("경운대학교, 2025", "Kyungwoon University, 2025")}
          </p>
        </div>
        <div className="break-words">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-1">
            {t("연구 분야", "Focus")}
          </p>
          <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">
            {t("자율비행, 비전, 경로계획", "Autonomous Flight, Vision, Planning")}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-start md:items-center justify-start md:justify-center px-4 sm:px-6 pt-[4.5rem] sm:pt-[4.75rem] md:pt-0 pb-16 md:pb-0 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/3 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-8 md:gap-12 items-center relative z-10">
        <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-accent mb-4 md:mb-5 leading-relaxed"
          >
            Autonomous Systems · UAV Software · Robotics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] sm:leading-[1.1] mb-5 md:mb-6"
          >
            {t("이윤수", "Yoon-su Lee")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0 mb-3 md:mb-4"
          >
            {t("SEESAW D&U 자율비행 드론 엔지니어", "Autonomous Drone Engineer at SEESAW D&U")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 md:mb-10 text-balance"
          >
            {t(
              "AI 기반 UAV 시스템을 개발하며, 자율비행·비전 기반 인식·경로 계획에 집중하고 있습니다. 제어 시스템 연구와 드론 플랫폼 소프트웨어 개발 경험을 갖추고 있습니다.",
              "I build AI-based UAV systems with a focus on autonomous flight, vision-based perception, and navigation. My background combines research in control systems with hands-on software development for drone platforms."
            )}
          </motion.p>
          <motion.div
            initial={profileCardAnimation.initial}
            animate={profileCardAnimation.animate}
            transition={profileCardAnimation.transition}
            className="md:hidden mb-6"
          >
            {profileCard}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-stretch justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 flex-nowrap"
          >
            <a
              href="#about"
              className="inline-flex min-w-0 flex-1 justify-center items-center px-3 sm:px-4 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground font-medium text-[11px] sm:text-xs md:text-sm rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              {t("소개", "About Me")}
            </a>
            <a
              href="#research"
              className="inline-flex min-w-0 flex-1 justify-center items-center px-3 sm:px-4 md:px-6 py-2.5 md:py-3 border text-foreground font-medium text-[11px] sm:text-xs md:text-sm rounded-md hover:bg-secondary transition-colors whitespace-nowrap"
            >
              {t("연구 경험", "Research Experience")}
            </a>
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 flex-1 justify-center items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2.5 md:py-3 bg-accent text-accent-foreground font-medium text-[11px] sm:text-xs md:text-sm rounded-md hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" />
              CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={profileCardAnimation.initial}
          animate={profileCardAnimation.animate}
          transition={profileCardAnimation.transition}
          className="hidden md:block md:col-span-2 order-1 md:order-2"
        >
          {profileCard}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

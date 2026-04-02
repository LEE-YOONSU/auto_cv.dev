import { Mail, Github, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const links = [
  { icon: Mail, label: "Email", href: "mailto:peter119105@naver.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/lee-yoonsu", external: true },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", external: true },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@YoonsuLee1", external: true },
];

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("연락처", "Get in Touch")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-10 leading-relaxed text-balance">
            {t(
              "연구 협업, 대학원 문의, 채용 관련 연락을 환영합니다.",
              "Feel free to reach out for research collaborations, graduate school inquiries, or career opportunities."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex min-w-[140px] items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-card border rounded-lg text-sm font-medium text-foreground hover:border-accent/50 hover:shadow-md transition-all duration-200"
            >
              <link.icon className="w-4 h-4 text-accent" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 md:mt-20 pt-8 border-t text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Yoon-su Lee. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

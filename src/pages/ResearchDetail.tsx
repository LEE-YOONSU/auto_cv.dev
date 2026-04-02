import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp, Calendar, User, ChevronRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "next-themes";
import { researchExperiences } from "@/data/research";
import { useLanguage } from "@/contexts/LanguageContext";

const pickLocalized = <T,>(lang: "ko" | "en", koValue?: T, enValue?: T) =>
  lang === "ko" ? (koValue ?? enValue) : (enValue ?? koValue);

const accentStyles = {
  accent: {
    border: "border-accent/30",
    bg: "bg-accent/5",
    text: "text-accent",
    badge: "bg-accent/10 text-accent border-accent/20",
  },
  blue: {
    border: "border-blue-400/30",
    bg: "bg-blue-500/5",
    text: "text-blue-300",
    badge: "bg-blue-500/10 text-blue-300 border-blue-400/20",
  },
  amber: {
    border: "border-amber-400/30",
    bg: "bg-amber-500/5",
    text: "text-amber-300",
    badge: "bg-amber-500/10 text-amber-300 border-amber-400/20",
  },
} as const;

const FigureCard = ({
  children,
  caption,
  compactTop = false,
}: {
  children: ReactNode;
  caption: ReactNode;
  compactTop?: boolean;
}) => (
  <div className="rounded-xl border bg-card p-3 sm:p-5 md:p-6 my-6">
    <div className={compactTop ? "overflow-x-auto -mt-3 sm:-mt-4" : "overflow-x-auto"}>{children}</div>
    <div className="mt-3 sm:mt-4 text-center text-[11px] sm:text-xs text-muted-foreground leading-6">{caption}</div>
  </div>
);

const VisionModelComparisonFigure = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[640px] sm:min-w-[720px] max-w-[760px] mx-auto">
    <defs>
      <pattern id="vision-grid-yolo" width="76" height="60" patternUnits="userSpaceOnUse">
        <path d="M76 0L0 0 0 60" fill="none" stroke="#1e2a3a" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect x="60" y="20" width="660" height="220" fill="url(#vision-grid-yolo)" opacity="0.5" />
    <text x="52" y="244" fontFamily="monospace" fontSize="10" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">0</text>
    <text x="52" y="194" fontFamily="monospace" fontSize="10" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">20</text>
    <text x="52" y="144" fontFamily="monospace" fontSize="10" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">40</text>
    <text x="52" y="94" fontFamily="monospace" fontSize="10" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">60</text>
    <text x="52" y="44" fontFamily="monospace" fontSize="10" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">80</text>
    <text x="14" y="160" fontFamily="monospace" fontSize="10" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle" transform="rotate(-90,14,160)">mAP / FPS</text>
    <text x="170" y="265" fontFamily="monospace" fontSize="11" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle">YOLOv5n</text>
    <text x="310" y="265" fontFamily="monospace" fontSize="11" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle">YOLOv5s</text>
    <text x="450" y="265" fontFamily="monospace" fontSize="11" fill={isDark ? "#f8fafc" : "#0f172a"} textAnchor="middle">YOLOv8n</text>
    <text x="590" y="265" fontFamily="monospace" fontSize="11" fill={isDark ? "#f8fafc" : "#0f172a"} textAnchor="middle">YOLOv8s</text>
    <line x1="60" y1="240" x2="720" y2="240" stroke="#1e2a3a" strokeWidth="1.5" />
    <line x1="60" y1="20" x2="60" y2="240" stroke="#1e2a3a" strokeWidth="1.5" />
    <rect x="110" y="114" width="50" height="126" fill="rgba(59,130,246,0.35)" stroke="#3b82f6" strokeWidth="1.2" rx="2" />
    <text x="135" y="108" fontFamily="monospace" fontSize="9" fill={isDark ? "#e5e7eb" : "#111827"} textAnchor="middle">45.7</text>
    <rect x="250" y="84" width="50" height="156" fill="rgba(59,130,246,0.35)" stroke="#3b82f6" strokeWidth="1.2" rx="2" />
    <text x="275" y="78" fontFamily="monospace" fontSize="9" fill={isDark ? "#e5e7eb" : "#111827"} textAnchor="middle">56.8</text>
    <rect x="390" y="95" width="50" height="145" fill="rgba(79,255,207,0.28)" stroke="#4fffcf" strokeWidth="1.5" rx="2" />
    <text x="415" y="89" fontFamily="monospace" fontSize="9" fill={isDark ? "#f8fafc" : "#111827"} textAnchor="middle">52.9</text>
    <rect x="530" y="63" width="50" height="177" fill="rgba(79,255,207,0.28)" stroke="#4fffcf" strokeWidth="1.5" rx="2" />
    <text x="555" y="57" fontFamily="monospace" fontSize="9" fill={isDark ? "#f8fafc" : "#111827"} textAnchor="middle">64.5</text>
    <polyline points="135,63 275,117 415,83 555,141" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3" />
    <circle cx="135" cy="63" r="4.5" fill="#f59e0b" />
    <circle cx="275" cy="117" r="4.5" fill="#f59e0b" />
    <circle cx="415" cy="83" r="4.5" fill="#f59e0b" />
    <circle cx="555" cy="141" r="4.5" fill="#f59e0b" />
    <text x="140" y="58" fontFamily="monospace" fontSize="9" fill={isDark ? "#fde68a" : "#78350f"}>161 fps</text>
    <text x="280" y="112" fontFamily="monospace" fontSize="9" fill={isDark ? "#fde68a" : "#78350f"}>112 fps</text>
    <text x="420" y="78" fontFamily="monospace" fontSize="9" fill={isDark ? "#fde68a" : "#78350f"}>143 fps</text>
    <text x="560" y="136" fontFamily="monospace" fontSize="9" fill={isDark ? "#fde68a" : "#78350f"}>90 fps</text>
    <rect x="376" y="16" width="238" height="232" fill="rgba(79,255,207,0.04)" stroke="rgba(79,255,207,0.15)" strokeWidth="1" strokeDasharray="4,3" rx="3" />
    <text x="495" y="29" fontFamily="monospace" fontSize="9" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle">YOLOv8 selected</text>
  </svg>
);

const VisionApfFigure = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 150 700 130" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[560px] sm:min-w-[680px] max-w-[700px] mx-auto">
    <defs>
      <radialGradient id="vision-ag" cx="50%" cy="80%" r="75%">
        <stop offset="0%" stopColor="rgba(79,255,207,0.2)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="vision-rg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(239,68,68,0.32)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="vision-rg2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(239,68,68,0.26)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <marker id="vision-mg" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="rgba(79,255,207,0.9)" />
      </marker>
      <marker id="vision-mr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="rgba(239,68,68,0.9)" />
      </marker>
      <marker id="vision-my" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <polygon points="0 0,8 4,0 8" fill="#f59e0b" />
      </marker>
    </defs>
    <rect x="0" y="170" width="700" height="110" fill="rgba(30,42,58,0.5)" />
    <line x1="0" y1="168" x2="700" y2="168" stroke="#253040" strokeWidth="1.5" />
    <line x1="0" y1="278" x2="700" y2="278" stroke="#253040" strokeWidth="1.5" />
    <line x1="0" y1="223" x2="700" y2="223" stroke="#fbbf24" strokeWidth="2.2" strokeDasharray="18,7" />
    <ellipse cx="350" cy="223" rx="340" ry="50" fill="url(#vision-ag)" opacity="0.8" />
    <circle cx="280" cy="223" r="44" fill="url(#vision-rg1)" />
    <circle cx="280" cy="223" r="18" fill="#150808" stroke="#ef4444" strokeWidth="1.5" />
    <text
      x="280"
      y="227"
      fontFamily="monospace"
      fontSize="10"
      fill={isDark ? "#fff7f7" : "#ffffff"}
      fontWeight="700"
      stroke={isDark ? "#450a0a" : "#7f1d1d"}
      strokeWidth="0.9"
      paintOrder="stroke"
      textAnchor="middle"
    >
      OBS
    </text>
    <circle cx="280" cy="223" r="44" fill="none" stroke="rgba(239,68,68,0.28)" strokeWidth="1" strokeDasharray="4,3" />
    <circle cx="460" cy="195" r="36" fill="url(#vision-rg2)" />
    <circle cx="460" cy="195" r="16" fill="#150808" stroke="#ef4444" strokeWidth="1.5" />
    <text
      x="460"
      y="199"
      fontFamily="monospace"
      fontSize="10"
      fill={isDark ? "#fff7f7" : "#ffffff"}
      fontWeight="700"
      stroke={isDark ? "#450a0a" : "#7f1d1d"}
      strokeWidth="0.9"
      paintOrder="stroke"
      textAnchor="middle"
    >
      OBS
    </text>
    <circle cx="460" cy="195" r="36" fill="none" stroke="rgba(239,68,68,0.28)" strokeWidth="1" strokeDasharray="4,3" />
    <polygon points="130,223 142,215 154,223 142,231" fill="#4fffcf" opacity="0.92" />
    <text x="142" y="247" fontFamily="monospace" fontSize="9" fill={isDark ? "#ccfbf1" : "#134e4a"} fontWeight="600" textAnchor="middle">UAV</text>
    <line x1="154" y1="223" x2="222" y2="223" stroke="rgba(79,255,207,0.85)" strokeWidth="2" markerEnd="url(#vision-mg)" />
    <text x="188" y="214" fontFamily="monospace" fontSize="9" fill={isDark ? "#ccfbf1" : "#134e4a"} fontWeight="600" textAnchor="middle">F_att</text>
    <line x1="142" y1="223" x2="108" y2="196" stroke="rgba(239,68,68,0.85)" strokeWidth="2" markerEnd="url(#vision-mr)" />
    <text x="88" y="190" fontFamily="monospace" fontSize="9" fill={isDark ? "#fee2e2" : "#7f1d1d"} fontWeight="600">F_rep1</text>
    <line x1="142" y1="223" x2="122" y2="240" stroke="rgba(239,68,68,0.65)" strokeWidth="1.5" markerEnd="url(#vision-mr)" />
    <text x="96" y="254" fontFamily="monospace" fontSize="9" fill={isDark ? "#fee2e2" : "#7f1d1d"} fontWeight="600">F_rep2</text>
    <line x1="142" y1="223" x2="204" y2="201" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#vision-my)" />
    <text x="212" y="196" fontFamily="monospace" fontSize="9.5" fill={isDark ? "#fde68a" : "#78350f"} fontWeight="700">F(p) = ΣF → Heading</text>
    <path d="M154,223 Q220,185 320,176 Q410,170 490,223 Q555,255 610,223" fill="none" stroke="rgba(79,255,207,0.45)" strokeWidth="1.8" strokeDasharray="6,4" />
    <text x="370" y="166" fontFamily="monospace" fontSize="9" fill={isDark ? "#ccfbf1" : "#134e4a"} fontWeight="600">Planned Path</text>
    <text x="8" y="187" fontFamily="monospace" fontSize="10" fill={isDark ? "#fcd34d" : "#92400e"} fontWeight="600">Road</text>
    <text x="8" y="230" fontFamily="monospace" fontSize="9" fill={isDark ? "#fde68a" : "#78350f"} fontWeight="600">Center</text>
  </svg>
);

const VisionAlgorithmComparisonFigure = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[560px] sm:min-w-[680px] max-w-[700px] mx-auto">
    <defs>
      <pattern id="vision-grid-algo" width="70" height="52" patternUnits="userSpaceOnUse">
        <path d="M70 0L0 0 0 52" fill="none" stroke="#1e2a3a" strokeWidth="0.7" />
      </pattern>
    </defs>
    <rect x="50" y="15" width="620" height="208" fill="url(#vision-grid-algo)" opacity="0.4" />
    <text x="42" y="223" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">0</text>
    <text x="42" y="171" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">25</text>
    <text x="42" y="119" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">50</text>
    <text x="42" y="67" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">75</text>
    <text x="42" y="23" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="end">100</text>
    <text x="14" y="130" fontFamily="monospace" fontSize="9" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle" transform="rotate(-90,14,130)">Metric Score (%)</text>
    <text x="135" y="236" fontFamily="monospace" fontSize="10" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle">A*</text>
    <text x="275" y="236" fontFamily="monospace" fontSize="10" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle">RRT*</text>
    <text x="415" y="236" fontFamily="monospace" fontSize="10" fill={isDark ? "#e2e8f0" : "#0f172a"} textAnchor="middle">PSO</text>
    <text x="555" y="236" fontFamily="monospace" fontSize="10" fill={isDark ? "#f8fafc" : "#0f172a"} textAnchor="middle">APF</text>
    <line x1="50" y1="223" x2="630" y2="223" stroke="#1e2a3a" strokeWidth="1.5" />
    <line x1="50" y1="15" x2="50" y2="223" stroke="#1e2a3a" strokeWidth="1.5" />
    <rect x="80" y="53" width="24" height="170" fill="rgba(96,165,250,0.45)" stroke="#3b82f6" strokeWidth="1" rx="1" />
    <rect x="108" y="88" width="24" height="135" fill="rgba(167,139,250,0.38)" stroke="#a78bfa" strokeWidth="1" rx="1" />
    <rect x="136" y="140" width="24" height="83" fill="rgba(245,158,11,0.38)" stroke="#f59e0b" strokeWidth="1" rx="1" />
    <rect x="220" y="108" width="24" height="115" fill="rgba(96,165,250,0.45)" stroke="#3b82f6" strokeWidth="1" rx="1" />
    <rect x="248" y="57" width="24" height="166" fill="rgba(167,139,250,0.38)" stroke="#a78bfa" strokeWidth="1" rx="1" />
    <rect x="276" y="161" width="24" height="62" fill="rgba(245,158,11,0.38)" stroke="#f59e0b" strokeWidth="1" rx="1" />
    <rect x="360" y="136" width="24" height="87" fill="rgba(96,165,250,0.45)" stroke="#3b82f6" strokeWidth="1" rx="1" />
    <rect x="388" y="73" width="24" height="150" fill="rgba(167,139,250,0.38)" stroke="#a78bfa" strokeWidth="1" rx="1" />
    <rect x="416" y="144" width="24" height="79" fill="rgba(245,158,11,0.38)" stroke="#f59e0b" strokeWidth="1" rx="1" />
    <rect x="496" y="34" width="24" height="189" fill="rgba(79,255,207,0.3)" stroke="#4fffcf" strokeWidth="1.5" rx="1" />
    <rect x="524" y="77" width="24" height="146" fill="rgba(167,139,250,0.38)" stroke="#a78bfa" strokeWidth="1" rx="1" />
    <rect x="552" y="40" width="24" height="183" fill="rgba(245,158,11,0.45)" stroke="#f59e0b" strokeWidth="1.5" rx="1" />
    <text x="508" y="29" fontFamily="monospace" fontSize="9" fill={isDark ? "#f8fafc" : "#111827"} textAnchor="middle">91</text>
    <text x="536" y="72" fontFamily="monospace" fontSize="9" fill={isDark ? "#f8fafc" : "#111827"} textAnchor="middle">70</text>
    <text x="564" y="35" fontFamily="monospace" fontSize="9" fill={isDark ? "#f8fafc" : "#111827"} textAnchor="middle">88</text>
  </svg>
);

const UwbPipelineFigure = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[640px] sm:min-w-[720px] max-w-[760px] mx-auto">
    <defs>
      <linearGradient id="uwb-pipe-bg" x1="0%" x2="100%">
        <stop offset="0%" stopColor={isDark ? "rgba(79,255,207,0.08)" : "rgba(16,185,129,0.08)"} />
        <stop offset="100%" stopColor={isDark ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.08)"} />
      </linearGradient>
    </defs>
    <rect x="30" y="30" width="700" height="150" rx="16" fill="url(#uwb-pipe-bg)" stroke={isDark ? "#1e2a3a" : "#cbd5e1"} strokeWidth="1.2" />
    {[
      { x: 60, color: isDark ? "#f8fafc" : "#0f172a", layer: "Sensor", title: "UWB Tag", sub: "x, y, z" },
      { x: 195, color: isDark ? "#93c5fd" : "#1d4ed8", layer: "Convert", title: "Fake GPS", sub: "lat, lon, alt" },
      { x: 330, color: isDark ? "#fcd34d" : "#b45309", layer: "Inject", title: "MAVLink", sub: "GPS_INPUT @ 10 Hz" },
      { x: 465, color: isDark ? "#e2e8f0" : "#334155", layer: "Control", title: "PX4 / APM", sub: "Auto Mode" },
      { x: 600, color: isDark ? "#c4b5fd" : "#6d28d9", layer: "Comm", title: "Wi-Fi Mesh", sub: "GCS / UDP" },
    ].map((node, index) => (
      <g key={node.title}>
        <rect x={node.x} y="65" width="100" height="78" rx="10" fill={isDark ? "#0f172a" : "#ffffff"} stroke={node.color} strokeWidth="1.5" />
        <text x={node.x + 50} y="86" fontFamily="monospace" fontSize="10" fill={isDark ? "#94a3b8" : "#64748b"} textAnchor="middle">{node.layer}</text>
        <text x={node.x + 50} y="108" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill={isDark ? "#f8fafc" : "#0f172a"} textAnchor="middle">{node.title}</text>
        <text x={node.x + 50} y="126" fontFamily="monospace" fontSize="10" fill={node.color} fontWeight="700" textAnchor="middle">{node.sub}</text>
        {index < 4 && (
          <>
            <line x1={node.x + 100} y1="104" x2={node.x + 125} y2="104" stroke={isDark ? "#cbd5e1" : "#64748b"} strokeWidth="1.8" />
            <polygon points={`${node.x + 125},104 ${node.x + 117},100 ${node.x + 117},108`} fill={isDark ? "#cbd5e1" : "#64748b"} />
          </>
        )}
      </g>
    ))}
  </svg>
);

const UwbIndoorMeshFigure = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[640px] sm:min-w-[720px] max-w-[760px] mx-auto">
    <defs>
      <pattern id="uwb-grid" width="52" height="52" patternUnits="userSpaceOnUse">
        <path d="M52 0L0 0 0 52" fill="none" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="0.8" />
      </pattern>
      <radialGradient id="uwb-zone" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={isDark ? "rgba(148,163,184,0.18)" : "rgba(148,163,184,0.12)"} />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <rect x="40" y="26" width="680" height="250" fill="url(#uwb-grid)" opacity="0.8" />
    <rect x="40" y="26" width="680" height="250" rx="18" fill="none" stroke={isDark ? "#1e2a3a" : "#cbd5e1"} strokeWidth="1.2" />
    <ellipse cx="380" cy="150" rx="300" ry="95" fill="url(#uwb-zone)" />
    {[
      { x: 76, y: 54, name: "A1" },
      { x: 646, y: 54, name: "A2" },
      { x: 76, y: 230, name: "A3" },
      { x: 646, y: 230, name: "A4" },
    ].map((anchor) => (
      <g key={anchor.name}>
        <rect x={anchor.x} y={anchor.y} width="18" height="18" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke={isDark ? "#f8fafc" : "#0f172a"} strokeWidth="1.6" />
        <text x={anchor.x + 9} y={anchor.y + 32} fontFamily="monospace" fontSize="10" fill={isDark ? "#f8fafc" : "#0f172a"} textAnchor="middle">{anchor.name}</text>
      </g>
    ))}
    <g>
      <polygon points="282,148 292,140 302,148 292,156" fill={isDark ? "#f8fafc" : "#0f172a"} />
      <text x="292" y="176" fontFamily="monospace" fontSize="10" fill={isDark ? "#f8fafc" : "#0f172a"} textAnchor="middle">UAV #1</text>
      <line x1="85" y1="63" x2="292" y2="148" stroke={isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.35)"} strokeWidth="1.3" strokeDasharray="4,4" />
      <line x1="655" y1="63" x2="292" y2="148" stroke={isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.35)"} strokeWidth="1.3" strokeDasharray="4,4" />
      <line x1="85" y1="239" x2="292" y2="148" stroke={isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.35)"} strokeWidth="1.3" strokeDasharray="4,4" />
      <line x1="655" y1="239" x2="292" y2="148" stroke={isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.35)"} strokeWidth="1.3" strokeDasharray="4,4" />
    </g>
    <g>
      <polygon points="492,118 502,110 512,118 502,126" fill={isDark ? "#cbd5e1" : "#475569"} />
      <text x="502" y="145" fontFamily="monospace" fontSize="10" fill={isDark ? "#cbd5e1" : "#475569"} textAnchor="middle">UAV #2</text>
      <line x1="655" y1="63" x2="502" y2="118" stroke={isDark ? "rgba(203,213,225,0.45)" : "rgba(71,85,105,0.35)"} strokeWidth="1.2" strokeDasharray="4,4" />
      <line x1="655" y1="239" x2="502" y2="118" stroke={isDark ? "rgba(203,213,225,0.45)" : "rgba(71,85,105,0.35)"} strokeWidth="1.2" strokeDasharray="4,4" />
      <line x1="85" y1="63" x2="502" y2="118" stroke={isDark ? "rgba(203,213,225,0.3)" : "rgba(71,85,105,0.26)"} strokeWidth="1.1" strokeDasharray="4,4" />
    </g>
    <g>
      <rect x="338" y="238" width="84" height="34" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#60a5fa" strokeWidth="1.4" />
      <text x="380" y="256" fontFamily="monospace" fontSize="10" fontWeight="700" fill={isDark ? "#bfdbfe" : "#1d4ed8"} textAnchor="middle">GCS</text>
      <text x="380" y="268" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#475569"} textAnchor="middle">UDP / Mesh</text>
      <line x1="292" y1="156" x2="352" y2="238" stroke={isDark ? "rgba(147,197,253,0.75)" : "rgba(29,78,216,0.55)"} strokeWidth="1.6" strokeDasharray="5,4" />
      <line x1="502" y1="126" x2="408" y2="238" stroke={isDark ? "rgba(147,197,253,0.75)" : "rgba(29,78,216,0.55)"} strokeWidth="1.6" strokeDasharray="5,4" />
    </g>
    <text x="380" y="46" fontFamily="monospace" fontSize="11" fontWeight="700" fill={isDark ? "#e2e8f0" : "#334155"} textAnchor="middle">UWB indoor positioning + multi-UAV mesh communication</text>
    <text x="380" y="96" fontFamily="monospace" fontSize="9" fontWeight="700" fill={isDark ? "rgba(79,255,207,0.72)" : "#047857"} textAnchor="middle">UWB Mesh</text>
    <text x="380" y="110" fontFamily="monospace" fontSize="9" fill={isDark ? "rgba(79,255,207,0.62)" : "#059669"} textAnchor="middle">Indoor</text>
    <text x="566" y="214" fontFamily="monospace" fontSize="10" fontWeight="700" fill={isDark ? "#bfdbfe" : "#1d4ed8"}>Wi-Fi Mesh</text>
    <text x="566" y="228" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#475569"}>(MAVLink/UDP)</text>
  </svg>
);

const ReconDualPipelineFigure = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[560px] sm:min-w-[680px] max-w-[700px] mx-auto">
    <defs>
      <marker id="recon-mb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0,6 3,0 6" fill="#3b82f6" />
      </marker>
      <marker id="recon-mg" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0,6 3,0 6" fill="#4fffcf" />
      </marker>
      <marker id="recon-mw" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0,6 3,0 6" fill="#8a9bb5" />
      </marker>
    </defs>
    <text x="20" y="55" fontFamily="monospace" fontSize="10" fill={isDark ? "#94a3b8" : "#64748b"}>Pipeline A</text>
    <rect x="20" y="62" width="90" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke={isDark ? "#1e2a3a" : "#cbd5e1"} strokeWidth="1" />
    <text x="65" y="78" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="middle">HM30</text>
    <text x="65" y="90" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">IP Camera</text>
    <line x1="110" y1="80" x2="170" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#recon-mb)" />
    <rect x="170" y="62" width="100" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke="#3b82f6" strokeWidth="1.2" />
    <text x="220" y="78" fontFamily="monospace" fontSize="9" fill="#60a5fa" textAnchor="middle">RTSP Stream</text>
    <text x="220" y="90" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">Video Only</text>
    <line x1="270" y1="80" x2="340" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#recon-mb)" />
    <rect x="340" y="62" width="100" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke="#3b82f6" strokeWidth="1.2" />
    <text x="390" y="78" fontFamily="monospace" fontSize="9" fill="#60a5fa" textAnchor="middle">GCS Display</text>
    <text x="390" y="90" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">Live Monitoring</text>
    <text x="20" y="145" fontFamily="monospace" fontSize="10" fill={isDark ? "#94a3b8" : "#64748b"}>Pipeline B</text>
    <rect x="20" y="152" width="90" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke={isDark ? "#1e2a3a" : "#cbd5e1"} strokeWidth="1" />
    <text x="65" y="168" fontFamily="monospace" fontSize="9" fill={isDark ? "#cbd5e1" : "#334155"} textAnchor="middle">USB Cam</text>
    <text x="65" y="180" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">Inference Only</text>
    <line x1="110" y1="170" x2="170" y2="170" stroke="#4fffcf" strokeWidth="1.5" markerEnd="url(#recon-mg)" />
    <rect x="170" y="152" width="100" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke="#4fffcf" strokeWidth="1.2" />
    <text x="220" y="168" fontFamily="monospace" fontSize="9" fill="#4fffcf" textAnchor="middle">YOLO (TFLite)</text>
    <text x="220" y="180" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">Frame Sampling</text>
    <line x1="270" y1="170" x2="340" y2="170" stroke="#4fffcf" strokeWidth="1.5" markerEnd="url(#recon-mg)" />
    <rect x="340" y="152" width="100" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke="#4fffcf" strokeWidth="1.2" />
    <text x="390" y="168" fontFamily="monospace" fontSize="9" fill="#4fffcf" textAnchor="middle">Detection Result</text>
    <text x="390" y="180" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">Auto-Shot Trigger</text>
    <line x1="440" y1="80" x2="520" y2="80" stroke={isDark ? "rgba(100,100,100,0.4)" : "rgba(148,163,184,0.6)"} strokeWidth="1" />
    <line x1="440" y1="170" x2="520" y2="170" stroke={isDark ? "rgba(100,100,100,0.4)" : "rgba(148,163,184,0.6)"} strokeWidth="1" />
    <line x1="520" y1="80" x2="520" y2="170" stroke={isDark ? "rgba(100,100,100,0.4)" : "rgba(148,163,184,0.6)"} strokeWidth="1" />
    <line x1="520" y1="125" x2="570" y2="125" stroke={isDark ? "rgba(150,150,150,0.6)" : "rgba(100,116,139,0.8)"} strokeWidth="1.5" markerEnd="url(#recon-mw)" />
    <rect x="570" y="107" width="100" height="36" rx="3" fill={isDark ? "#131920" : "#f8fafc"} stroke="#f59e0b" strokeWidth="1.2" />
    <text x="620" y="123" fontFamily="monospace" fontSize="9" fill="#fbbf24" textAnchor="middle">Overlay</text>
    <text x="620" y="135" fontFamily="monospace" fontSize="8" fill={isDark ? "#64748b" : "#94a3b8"} textAnchor="middle">Merged Output</text>
  </svg>
);

const ResearchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const { resolvedTheme } = useTheme();
  const research = researchExperiences.find((r) => r.slug === slug);
  const isDark = resolvedTheme === "dark";
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

  if (!research) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            {t("연구를 찾을 수 없습니다", "Research not found")}
          </h1>
          <Link to="/" className="text-accent hover:underline">
            {t("← 홈으로 돌아가기", "← Back to home")}
          </Link>
        </div>
      </div>
    );
  }

  const title = t(research.titleKo || research.title, research.title);
  const details = pickLocalized(lang, research.detailsKo, research.details) || [];
  const summary = t(research.summaryKo || research.summary, research.summary);
  const period = pickLocalized(lang, research.periodKo, research.period);
  const role = t(research.roleKo || research.role, research.role);
  const award = t(research.awardKo || research.award || "", research.award || research.awardKo || "");
  const heroEyebrow = pickLocalized(lang, research.heroEyebrowKo, research.heroEyebrow);
  const metaItems = pickLocalized(lang, research.metaItemsKo, research.metaItems) || [];
  const rich = research.richContent;
  const abstractParagraphs = pickLocalized(lang, rich?.abstractParagraphsKo, rich?.abstractParagraphs) || [];
  const methodologyIntro = pickLocalized(lang, rich?.methodologyIntroKo, rich?.methodologyIntro) || [];
  const architectureCaption = pickLocalized(lang, rich?.architectureCaptionKo, rich?.architectureCaption);
  const modelSelectionParagraphs = pickLocalized(lang, rich?.modelSelectionParagraphsKo, rich?.modelSelectionParagraphs) || [];
  const potentialFieldParagraphs = pickLocalized(lang, rich?.potentialFieldParagraphsKo, rich?.potentialFieldParagraphs) || [];
  const validationIntro = pickLocalized(lang, rich?.validationIntroKo, rich?.validationIntro) || [];
  const notice = pickLocalized(lang, rich?.noticeKo, rich?.notice);
  const isVisionResearch = research.slug === "vision-autonomous-flight";
  const isUwbResearch = research.slug === "non-gps-swarm";
  const isReconResearch = research.slug === "deep-learning-reconnaissance";

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/#research"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8"
      >
        <div className="aspect-[4/3] sm:aspect-[21/9] rounded-xl overflow-hidden bg-secondary border">
          <img src={research.image} alt={title} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {research.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {award && (
            <div className="inline-flex items-center gap-2 rounded-md border border-amber-400/30 bg-amber-500/10 px-3 py-2 mb-6">
              <span aria-hidden="true">🏆</span>
              <span className="font-mono text-[11px] text-amber-700 dark:text-amber-300 tracking-[0.04em]">
                {award}
              </span>
            </div>
          )}

          {heroEyebrow && (
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4 break-words">
              {heroEyebrow}
            </p>
          )}

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 sm:mb-6 leading-tight break-words">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              {period}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-accent" />
              {role}
            </div>
          </div>

          {metaItems.length > 0 && (
            <div className="grid gap-px rounded-lg border bg-border mb-8 sm:mb-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
              {metaItems.map((item) => (
                <div key={`${item.label}-${item.value}`} className="bg-card px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
                    {pickLocalized(lang, item.labelKo, item.label)}
                  </p>
                  <p className="text-sm text-foreground/85 leading-relaxed break-words">
                    {pickLocalized(lang, item.valueKo, item.value)}
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 break-words">{summary}</p>

          <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">
            {t("핵심 요약", "Key Highlights")}
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

          {rich && (
            <>
              {abstractParagraphs.length > 0 && (
                <section className="py-10 border-t">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t("Abstract", "Abstract")}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t("연구 개요", "Overview")}
                  </h2>
                  <div className="space-y-4">
                    {abstractParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-8 break-words">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {notice && (
                    <div className="mt-6 rounded-xl border border-amber-400/25 bg-amber-500/5 px-4 py-4 sm:px-5">
                      <p className={`text-sm leading-7 ${isDark ? "text-amber-200/90" : "text-amber-900"}`}>{notice}</p>
                    </div>
                  )}
                </section>
              )}

              {rich.relatedWorks && rich.relatedWorks.length > 0 && (
                <section className="py-10 border-t">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t("Related Work", "Related Work")}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t("관련 연구", "Related Studies")}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {rich.relatedWorks.map((work, index) => (
                      <div key={index} className="rounded-xl border bg-card p-5">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent/10 text-accent">
                            {pickLocalized(lang, work.categoryKo, work.category)}
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground text-right">
                            {work.year}
                          </span>
                        </div>
                        <h3 className="font-display text-lg text-foreground mb-2 leading-snug">
                          {pickLocalized(lang, work.titleKo, work.title)}
                        </h3>
                        <p className="font-mono text-[11px] text-muted-foreground mb-3">{work.journal}</p>
                        <p className="text-sm text-muted-foreground leading-7 break-words">
                          {pickLocalized(lang, work.descriptionKo, work.description)}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="py-10 border-t">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                  {t("Methodology", "Methodology")}
                </p>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t("시스템 설계", "System Design")}
                </h2>

                {methodologyIntro.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {methodologyIntro.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-8 break-words">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {rich.architecture && rich.architecture.length > 0 && (
                  <>
                    <div className="rounded-xl border bg-card p-5 sm:p-6 mb-8">
                      <div className="overflow-x-auto">
                        <div className="flex min-w-max items-stretch gap-3">
                          {rich.architecture.map((node, index) => {
                            const accent = accentStyles[node.accent || "accent"];
                            return (
                              <div key={`${node.title}-${index}`} className="flex items-center gap-3">
                                <div className={`min-w-40 rounded-lg border ${accent.border} ${accent.bg} px-4 py-4 text-center`}>
                                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-1">
                                    {pickLocalized(lang, node.layerKo, node.layer)}
                                  </p>
                                  <p className="font-display text-base text-foreground">
                                    {pickLocalized(lang, node.titleKo, node.title)}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {pickLocalized(lang, node.subtitleKo, node.subtitle)}
                                  </p>
                                </div>
                                {index < rich.architecture!.length - 1 && (
                                  <span className="text-muted-foreground text-lg">→</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {architectureCaption && (
                        <p className="text-xs text-muted-foreground text-center mt-4">{architectureCaption}</p>
                      )}
                    </div>
                    {isUwbResearch && (
                      <FigureCard
                        caption={
                          lang === "ko"
                            ? <>Figure 1. Fake GPS 기반 Indoor 자동비행 시스템 파이프라인. UWB 위치 추정값을 GPS 형식으로 변환해 기존 Autopilot 자동비행 경로를 유지한다.</>
                            : <>Figure 1. Fake-GPS indoor autonomy pipeline. UWB localization is converted into GPS-compatible telemetry so the existing autopilot flight path remains unchanged.</>
                        }
                      >
                        <UwbPipelineFigure isDark={isDark} />
                      </FigureCard>
                    )}
                  </>
                )}

                {rich.equations && rich.equations.length > 0 && (
                  <div className="space-y-3 mb-8">
                    {rich.equations.map((equation, index) => (
                      <div key={index} className="rounded-r-lg rounded-l-sm border-l-2 border-violet-300 bg-secondary/70 px-3 py-3 sm:px-4 sm:py-4 overflow-x-auto">
                        <p className={`font-mono text-sm whitespace-nowrap ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                          {equation.expression}
                        </p>
                        <p className={`font-mono text-[11px] mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {pickLocalized(lang, equation.labelKo, equation.label)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {modelSelectionParagraphs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-display text-lg text-foreground mb-4">
                      {isUwbResearch
                        ? t("핵심 전략 — Fake GPS", "Core Strategy — Fake GPS")
                        : isReconResearch
                          ? t("카메라 이중화 구조", "Dual-Camera Architecture")
                        : t("모델 선택 근거", "Model Selection")}
                    </h3>
                    <div className="space-y-4">
                      {modelSelectionParagraphs.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-8 break-words">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {rich.modelComparison && rich.modelComparison.length > 0 && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
                      {rich.modelComparison.map((row) => (
                        <div key={row.name} className={`rounded-xl border p-5 ${row.name.includes("v8") ? "border-accent/30 bg-accent/5" : "bg-card"}`}>
                          <p className="font-display text-lg text-foreground mb-4">{row.name}</p>
                          <div className="space-y-3">
                            {row.metrics.map((metric) => (
                              <div key={metric.label} className="flex items-center justify-between gap-4">
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                                  {pickLocalized(lang, metric.labelKo, metric.label)}
                                </span>
                                <span className={metric.emphasis ? "text-accent font-semibold" : "text-foreground"}>
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {isVisionResearch && (
                      <FigureCard
                        caption={
                          lang === "ko"
                            ? <>Figure 2. COCO 기준 YOLOv5 vs YOLOv8 비교. YOLOv8s는 mAP 64.5%로 YOLOv5s 대비 7.7%p 향상.</>
                            : <>Figure 2. COCO-based YOLOv5 vs YOLOv8 comparison. YOLOv8s improves mAP to 64.5, up 7.7 points over YOLOv5s.</>
                        }
                      >
                        <VisionModelComparisonFigure isDark={isDark} />
                      </FigureCard>
                    )}
                    {isReconResearch && (
                      <FigureCard
                        caption={
                          lang === "ko"
                            ? <>Figure 2. 카메라 이중화 구조. Pipeline A(HM30)는 영상 전송 전용, Pipeline B(USB Cam)는 YOLO 추론 전용으로 분리하여 지연 간섭을 줄였다.</>
                            : <>Figure 2. Dual-camera architecture. Pipeline A (HM30) is video-only, while Pipeline B (USB Cam) is dedicated to YOLO inference to reduce cross-pipeline latency interference.</>
                        }
                      >
                        <ReconDualPipelineFigure isDark={isDark} />
                      </FigureCard>
                    )}
                  </>
                )}

                {potentialFieldParagraphs.length > 0 && (
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4">
                      {isUwbResearch
                        ? t("좌표 변환 및 다중 기체 구조", "Coordinate Transformation & Multi-UAV Layout")
                        : t("Potential Field 시각화", "Potential Field Interpretation")}
                    </h3>
                    <div className="space-y-4">
                      {potentialFieldParagraphs.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-8 break-words">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {isVisionResearch && (
                      <FigureCard
                        compactTop
                        caption={
                          lang === "ko"
                            ? <>Figure 3. APF 개념도. 녹색은 인력, 빨강은 척력, 주황은 합력이며 합력 방향이 목표 heading vector가 된다.</>
                            : <>Figure 3. APF concept diagram. Green denotes attraction, red repulsion, and orange the resultant heading vector.</>
                        }
                      >
                        <VisionApfFigure isDark={isDark} />
                      </FigureCard>
                    )}
                    {isUwbResearch && (
                      <FigureCard
                        caption={
                          lang === "ko"
                            ? <>Figure 2. UWB Anchor 4기 기반 실내 다중 기체 위치 추정 및 GCS 연동 구조. 각 UAV는 독립적으로 Fake GPS를 생성한다.</>
                            : <>Figure 2. Indoor multi-UAV layout with four UWB anchors and a mesh-linked ground station. Each aircraft runs its own fake-GPS path independently.</>
                        }
                      >
                        <UwbIndoorMeshFigure isDark={isDark} />
                      </FigureCard>
                    )}
                  </div>
                )}
              </section>

              {rich.modules && rich.modules.length > 0 && (
                <section className="py-10 border-t">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t("Implementation", "Implementation")}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t("핵심 모듈 구현", "Core Modules")}
                  </h2>
                  <div className="space-y-5">
                    {rich.modules.map((module, index) => {
                      const accent = accentStyles[module.accent];
                      return (
                        <div key={index} className={`rounded-xl border bg-card p-6 ${accent.border}`}>
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="text-xl" aria-hidden="true">{module.emoji}</span>
                            <h3 className="font-display text-xl text-foreground">
                              {pickLocalized(lang, module.titleKo, module.title)}
                            </h3>
                            <span className={`px-2.5 py-1 rounded-full text-[11px] border ${accent.badge}`}>
                              {module.badge}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-8 break-words mb-5">
                            {pickLocalized(lang, module.descriptionKo, module.description)}
                          </p>
                          <div className="grid gap-5 md:grid-cols-2">
                            {module.columns.map((column, columnIndex) => (
                              <div key={columnIndex}>
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-3">
                                  {pickLocalized(lang, column.titleKo, column.title)}
                                </p>
                                <ul className="space-y-2">
                                  {(pickLocalized(lang, column.itemsKo, column.items) || []).map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex gap-3 text-sm text-muted-foreground leading-7">
                                      <span className={`mt-2 h-1.5 w-1.5 rounded-full ${module.accent === "accent" ? "bg-accent" : module.accent === "blue" ? "bg-blue-300" : "bg-amber-300"}`} />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              <section className="py-10 border-t">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                  {t("Experiments & Validation", "Experiments & Validation")}
                </p>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t("검증 시나리오 및 결과", "Validation Scenarios and Results")}
                </h2>

                {validationIntro.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {validationIntro.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-8 break-words">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {rich.scenarios && rich.scenarios.length > 0 && (
                  <div className="grid gap-4 md:grid-cols-3 mb-8">
                    {rich.scenarios.map((scenario, index) => (
                      <div key={index} className="rounded-xl border bg-card p-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent mb-2">
                          {lang === "ko" ? `SCENARIO 0${index + 1}` : scenario.name}
                        </p>
                        <h3 className="font-display text-lg text-foreground mb-3">
                          {pickLocalized(lang, scenario.nameKo, scenario.name)}
                        </h3>
                        <ul className="space-y-2">
                          {(pickLocalized(lang, scenario.itemsKo, scenario.items) || []).map((item, itemIndex) => (
                            <li key={itemIndex} className="flex gap-3 text-sm text-muted-foreground leading-7">
                              <span className="mt-2 text-muted-foreground">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {rich.algorithmComparison && rich.algorithmComparison.length > 0 && (
                  <>
                    <div className="rounded-xl border bg-card p-5 sm:p-6 mb-8 overflow-x-auto">
                      <h3 className="font-display text-lg text-foreground mb-4">
                        {t("경로 계획 알고리즘 비교", "Planning Algorithm Comparison")}
                      </h3>
                      <table className="w-full min-w-[640px] text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                              {t("알고리즘", "Algorithm")}
                            </th>
                            {rich.algorithmComparison[0].metrics.map((metric) => (
                              <th key={metric.label} className="text-left py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                                {pickLocalized(lang, metric.labelKo, metric.label)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rich.algorithmComparison.map((row) => (
                            <tr key={row.name} className="border-b last:border-b-0">
                              <td className={`py-3 ${row.name.includes("APF") ? "text-accent font-semibold" : "text-foreground"}`}>
                                {row.name}
                              </td>
                              {row.metrics.map((metric) => (
                                <td key={metric.label} className={metric.emphasis ? "py-3 text-accent font-semibold" : "py-3 text-muted-foreground"}>
                                  {metric.value}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {isVisionResearch && (
                      <FigureCard
                        caption={
                          lang === "ko"
                            ? <>Figure 4. 경로 계획 알고리즘 3축 비교. APF는 연산 속도와 실시간 반응성에서 우위를 보였다.</>
                            : <>Figure 4. Three-axis comparison of planning algorithms. APF shows advantages in computation speed and real-time reactivity.</>
                        }
                      >
                        <VisionAlgorithmComparisonFigure isDark={isDark} />
                      </FigureCard>
                    )}
                  </>
                )}

                {rich.results && rich.results.length > 0 && (
                  <div className="space-y-3">
                    {rich.results.map((result, index) => (
                      <div key={index} className="rounded-xl border bg-secondary/40 px-4 py-4 flex gap-3">
                        <span className="mt-0.5 text-base">✅</span>
                        <p className="text-sm text-muted-foreground leading-7">
                          <span className="text-foreground font-medium">
                            {pickLocalized(lang, result.titleKo, result.title)}:
                          </span>{" "}
                          {pickLocalized(lang, result.bodyKo, result.body)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {rich.issues && rich.issues.length > 0 && (
                <section className="py-10 border-t">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t("Troubleshooting", "Troubleshooting")}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t("문제 해결 과정", "Problem Solving")}
                  </h2>
                  <div className="space-y-5">
                    {rich.issues.map((issue, index) => (
                      <div key={index} className="rounded-xl border bg-card p-5">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-red-500/10 text-red-300 border border-red-400/20">
                            ISSUE 0{index + 1}
                          </span>
                          <h3 className="font-display text-lg text-foreground">
                            {pickLocalized(lang, issue.titleKo, issue.title)}
                          </h3>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-red-300 mb-2">
                              {t("문제", "Problem")}
                            </p>
                            <p className="text-sm text-muted-foreground leading-7">
                              {pickLocalized(lang, issue.problemKo, issue.problem)}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-300 mb-2">
                              {t("원인", "Cause")}
                            </p>
                            <p className="text-sm text-muted-foreground leading-7">
                              {pickLocalized(lang, issue.causeKo, issue.cause)}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-2">
                              {t("해결", "Fix")}
                            </p>
                            <p className="text-sm text-muted-foreground leading-7">
                              {pickLocalized(lang, issue.fixKo, issue.fix)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {rich.lessons && rich.lessons.length > 0 && (
                <section className="py-10 border-t">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t("Lessons Learned", "Lessons Learned")}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t("배운 것들", "Lessons")}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {rich.lessons.map((lesson, index) => (
                      <div key={index} className="rounded-xl border bg-secondary/40 p-5">
                        <h3 className="font-display text-lg text-foreground mb-3">
                          {pickLocalized(lang, lesson.titleKo, lesson.title)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-7 break-words">
                          {pickLocalized(lang, lesson.bodyKo, lesson.body)}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {rich.references && rich.references.length > 0 && (
                <section className="py-10 border-t">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t("References", "References")}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {t("참고 문헌", "References")}
                  </h2>
                  <div className="space-y-4">
                    {rich.references.map((reference, index) => (
                      <div key={index} className="flex gap-4 text-sm leading-7 text-muted-foreground">
                        <span className="font-mono text-accent shrink-0">[{index + 1}]</span>
                        <p>{pickLocalized(lang, reference.citationKo, reference.citation)}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

          <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
            {t("기술 스택", "Tech Stack")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {research.techStack.map((tech) => (
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

export default ResearchDetail;

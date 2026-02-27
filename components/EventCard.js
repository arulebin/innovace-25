"use client"

import { motion } from "framer-motion"
import SpotlightCard from "./blocks/SpotlightCard"
import { Clock, Users } from "lucide-react"

export default function EventCard({ title, description, participants, duration, type, delay = 0 }) {
  const colors = {
    technical: {
      badge: "bg-cyan-50 text-cyan-600 border border-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.3)]",
      title: "text-slate-800",
      description: "text-slate-600",
      icon: "text-cyan-500",
      spotlight: "rgba(34, 211, 238, 0.2)",
      border: "border-cyan-200"
    },
    nonTechnical: {
      badge: "bg-indigo-50 text-indigo-600 border border-indigo-200 shadow-[0_0_10px_rgba(129,140,248,0.3)]",
      title: "text-slate-800",
      description: "text-slate-600",
      icon: "text-indigo-500",
      spotlight: "rgba(129, 140, 248, 0.2)",
      border: "border-indigo-200"
    },
  }

  const currentColors = type === "technical" ? colors.technical : colors.nonTechnical

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="rounded-xl overflow-hidden glass-panel h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-300 group"
    >
      <SpotlightCard
        className={`h-full bg-white/50 border ${currentColors.border} transition-all duration-300 relative`}
        spotlightColor={currentColors.spotlight}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none rounded-xl" />
        <div className="p-6 flex flex-col h-full relative z-10">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm w-fit ${currentColors.badge}`}
          >
            {type === "technical" ? "SYS.TECH" : "SYS.NON_TECH"}
          </span>

          <h3 className={`text-xl font-bold mt-4 mb-2 ${currentColors.title} tracking-tight group-hover:text-cyan-600 transition-colors`}>
            {title}
          </h3>

          <p className={`text-sm leading-relaxed mb-6 flex-grow ${currentColors.description}`}>{description}</p>

          <div className={`border-t border-slate-200 pt-4 mt-auto grid grid-cols-2 gap-2`}>
            <div className={`flex items-center text-xs font-medium text-slate-500`}>
              <Users className={`w-3.5 h-3.5 mr-1.5 ${currentColors.icon}`} />
              <span className="truncate">{participants}</span>
            </div>

            {duration && (
              <div className={`flex items-center text-xs font-medium text-slate-500`}>
                <Clock className={`w-3.5 h-3.5 mr-1.5 ${currentColors.icon}`} />
                <span className="truncate">{duration}</span>
              </div>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}
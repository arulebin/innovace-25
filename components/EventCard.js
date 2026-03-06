"use client"

import { motion } from "framer-motion"
import SpotlightCard from "./blocks/SpotlightCard"
import { Clock, Users } from "lucide-react"

export default function EventCard({ title, description, participants, duration, type, delay = 0 }) {
  const isTech = type === "technical"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden group"
    >
      <SpotlightCard
        className="h-full bg-gray-950 border border-gray-800/60 hover:border-blue-800/40 transition-all duration-500"
        spotlightColor={isTech ? "rgba(0, 102, 204, 0.15)" : "rgba(0, 102, 204, 0.1)"}
      >
        <div className="p-6 flex flex-col h-full">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full w-fit ${
              isTech
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "bg-blue-500/5 text-blue-300 border border-blue-400/15"
            }`}
          >
            {isTech ? "Technical" : "Non-Technical"}
          </span>

          <h3 className="text-xl font-bold mt-4 mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
            {title}
          </h3>

          <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">{description}</p>

          <div className="border-t border-gray-800/60 pt-4 mt-auto space-y-2">
            <div className="flex items-center text-gray-400">
              <Users className="w-3.5 h-3.5 mr-2 text-blue-500/70" />
              <span className="text-xs">{participants}</span>
            </div>
            {duration && (
              <div className="flex items-center text-gray-400">
                <Clock className="w-3.5 h-3.5 mr-2 text-blue-500/70" />
                <span className="text-xs">{duration}</span>
              </div>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}
"use client"

import { motion } from "framer-motion"
import SpotlightCard from "./blocks/SpotlightCard"
import { Clock, Users } from "lucide-react"

export default function EventCard({ title, description, participants, duration, type, delay = 0 }) {
  const colors = {
    technical: {
      badge: "bg-blue-900/80 text-blue-100 border border-blue-500/50",
      title: "text-blue-500",
      spotlight: "rgba(0, 102, 204, 0.15)",
    },
    nonTechnical: {
      badge: "bg-black text-blue-400 border border-blue-500/50",
      title: "text-blue-400",
      spotlight: "rgba(0, 102, 204, 0.1)",
    },
  }

  const currentColors = type === "technical" ? colors.technical : colors.nonTechnical

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden"
    >
      <SpotlightCard
        className="h-full bg-gradient-to-br from-black to-gray-900 border border-gray-800 hover:border-blue-900/50 transition-all duration-300"
        spotlightColor={currentColors.spotlight}
      >
        <div className="p-6 flex flex-col h-full">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit ${currentColors.badge}`}
          >
            {type === "technical" ? "Technical" : "Non-Technical"}
          </span>

          <h3 className={`text-2xl font-extrabold mt-4 mb-3 ${currentColors.title} tracking-tight`}>{title}</h3>

          <p className="text-gray-300 mb-6 flex-grow">{description}</p>

          <div className="border-t border-gray-800 pt-4 mt-auto">
            <div className="flex items-center mb-3 text-gray-300">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm">{participants}</span>
            </div>

            {duration && (
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-sm">{duration}</span>
              </div>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}
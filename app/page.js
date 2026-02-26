"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import EventCard from "@/components/EventCard";
import Waves from "@/components/blocks/Waves";
import { ChevronDown, MapPin, PhoneCall } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen font-sans bg-black text-white">
      <Waves
        lineColor="#0066cc"
        backgroundColor="rgba(0, 102, 204, 0.15)"
        waveSpeedX={0.025}
        waveSpeedY={0.015}
        waveAmpX={50}
        waveAmpY={25}
        friction={0.9}
        tension={0.01}
        maxCursorMove={150}
        xGap={10}
        yGap={30}
      />

      {/* Cinematic Movie-Style Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-4xl"
          >
            {/* Cinematic Presents Text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mb-6 overflow-hidden"
            >
              <motion.p
                className="text-xl text-gray-400 tracking-[0.2em] mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                St. Xavier&apos;s Catholic College of Engineering
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-blue-500 font-medium mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Department of Computer Science and Engineering
                <br/>
                Association of Computer Engineers
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.3 }}
                className="h-0.5 w-48 md:w-80 bg-blue-600 mx-auto mb-6"
              />

              <motion.p
                className="text-lg md:text-xl text-gray-200 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                presents
              </motion.p>
            </motion.div>

            {/* Main Title with Cinematic Reveal */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 mb-2 tracking-tighter"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 2.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                InnovSPACE&apos;26
              </motion.h1>

              <motion.div
                className="h-1 w-32 md:w-48 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 3 }}
              />
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.3 }}
            >
              Technical Symposium
            </motion.p>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              <p className="text-xl text-gray-300 font-medium">
                <span className="text-blue-500">March 13, 2026</span>{" "}
                <span className="flex items-center justify-center gap-1.5">
                  <MapPin /> Conference Hall (8:30A.M)
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Cinematic Lens Flare Effect */}
        <motion.div
          className="absolute w-[150%] h-[150%] rounded-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "100%" }}
          transition={{
            duration: 2.5,
            delay: 1.5,
            ease: "easeInOut",
          }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <span className="flex flex-col text-sm items-center justify-center">
            {" "}
            Scroll Down
            <ChevronDown className="w-10 h-10 text-blue-500" />
          </span>
        </motion.div>
      </section>

      {/* About Section with enhanced styling */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-tight">
              About InnovSPACE&apos;26
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join us for an exciting technical symposium featuring a variety of
              <span className="text-blue-400 font-medium">
                {" "}
                technical and non-technical events
              </span>
              . Showcase your skills, connect with peers, and win
              <span className="text-blue-400 font-medium">
                {" "}
                exciting prizes!
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Events Section with enhanced cards */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-tight">
              Technical Events
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Challenge your technical knowledge and skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Tech Con"
              description="Present your research papers in this competitive paper presentation event."
              participants="2 participants per team"
              duration="7 minutes presentation + 3 minutes Q&A"
              type="technical"
              delay={0.1}
            />
            {/* <EventCard
              title="Byte the Quiz"
              description="Test your technical knowledge in this fast-paced solo technical quiz."
              participants="Individual participation"
              duration="45 minutes"
              type="technical"
              delay={0.2}
            /> */}
            <EventCard
              title="Web Matrix"
              description="Design and develop a website with HTML and CSS based on a spot topic."
              participants="Individual participation"
              duration="45 minutes"
              type="technical"
              delay={0.3}
            />
            <EventCard
              title="Compile & Conquer"
              description="A thrilling coding challenge that tests your problem-solving skills under pressure."
              participants="Individual participation"
              duration="45 minutes"
              type="technical"
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Non-Technical Events Section with enhanced styling */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 tracking-tight">
              Non-Technical Events
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Showcase your creativity and have fun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Snapshot"
              description="Capture amazing photographs based on a spot topic in this photography contest."
              participants="Individual participation"
              duration="30 minutes"
              type="non-technical"
              delay={0.2}
            />
            <EventCard
              title="Memory Clash"
              description="Test your memory skills in this exciting challenge."
              participants="Individual participation"
              duration="Multiple rounds"
              type="non-technical"
              delay={0.3}
            />
            <EventCard
              title="Connectivus"
              description="Find connections between seemingly unrelated items in this brain-teasing game."
              participants="Individual participation"
              duration="Multiple rounds"
              type="non-technical"
              delay={0.4}
            />
            <EventCard
              title="AuraBeats"
              description="Identify songs from their background music in this musical challenge."
              participants="Individual participation"
              duration="Multiple rounds"
              type="non-technical"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Registration Section with enhanced CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Ready to Participate?
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Register now to participate in InnovSPACE&apos;26. Participation
              certificates will be provided for all events except AuraBeats.
            </p>
            <motion.a
              href="https://forms.gle/uaEGNdwzi3tKqGJ59"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-blue-500 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 border-2 border-blue-500 shadow-lg shadow-blue-900/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer with enhanced styling */}
      <footer className="py-12 px-4 bg-black text-white border-t border-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">
                InnovSPACE&apos;26
              </h3>
              <p className="text-gray-400">
                St. Xavier&apos;s Catholic College of Engineering
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2 text-gray-300 font-semibold">
                Staff Coordinators:
              </p>
              <ul className="space-y-1 text-gray-300">
                       <li>Dr. A. Bamila Virgin Louis (HoD )</li>
                        <li>Dr. R. Barona (Faculty Advisor)</li>
                        <li>Mrs. M. C. Sheeba (Assistant Faculty Advisor)</li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2 text-gray-300 font-semibold">
                Student Coordinators:
              </p>
              <ul className="space-y-1 text-gray-300">
                <li>Miss S.P. Kethzia (Secretary)</li>
                <li className="flex items-center justify-center md:justify-end gap-2">
                  <PhoneCall className="w-4 h-4 text-blue-500" />
                  9626144221
                </li>
                <li>Mr. A. Ebin (Joint Secretary)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2025 InnovSPACE&apos;26 - All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

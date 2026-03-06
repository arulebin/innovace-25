"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import EventCard from "@/components/EventCard";
import Waves from "@/components/blocks/Waves";
import { ChevronDown, MapPin, PhoneCall, Calendar, Clock, Trophy, Users, Code, Sparkles } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-black text-white">
      {/* Sticky Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-blue-900/10"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            InnoSPACE&apos;26
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#technical" className="hover:text-blue-400 transition-colors">Technical</a>
            <a href="#non-technical" className="hover:text-blue-400 transition-colors">Non-Technical</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <motion.a
            href="https://forms.gle/pjUZNBFR7ovdafQz9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.a>
        </div>
      </motion.nav>

      <Waves
        lineColor="#0066cc"
        backgroundColor="rgba(0, 102, 204, 0.12)"
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

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 overflow-hidden"
            >
              <motion.p
                className="text-sm md:text-base uppercase text-white tracking-[0.3em] mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                St. Xavier&apos;s Catholic College of Engineering
              </motion.p>

              <motion.p
                className="text-sm md:text-base text-blue-400/80 font-medium mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Department of Computer Science and Engineering
                <br />
                Association of Computer Engineers
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-5"
              />

              <motion.p
                className="text-base md:text-lg text-white italic font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                presents
              </motion.p>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-blue-500 mb-3 tracking-tighter leading-none"
                initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                InnoSPACE&apos;26
              </motion.h1>

              <motion.div
                className="h-0.5 w-24 md:w-36 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white mb-8 font-light tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              Technical Symposium
            </motion.p>

            {/* Date / Venue Badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-300 text-sm backdrop-blur-sm">
                <Calendar className="w-4 h-4" /> March 13, 2026
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-300 text-sm backdrop-blur-sm">
                <Clock className="w-4 h-4" /> 8:30 AM
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-300 text-sm backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Conference Hall
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-blue-500/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-4 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,204,0.06),transparent_70%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-3">Welcome</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
              About InnoSPACE&apos;26
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join us for an exciting technical symposium featuring a variety of
              <span className="text-blue-400 font-medium"> technical and non-technical events</span>.
              Showcase your skills, connect with peers, and win
              <span className="text-blue-400 font-medium"> exciting prizes!</span>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Code, label: "Technical Events", value: "3" },
              { icon: Sparkles, label: "Non-Technical Events", value: "3" },
              { icon: Trophy, label: "Prizes to Win", value: "6+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
              >
                <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Events */}
      <section id="technical" className="py-28 px-4 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,204,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-3">Compete</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
              Technical Events
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-400">
              Challenge your technical knowledge and skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Tech Con"
              description="Present your research papers in this competitive paper presentation event."
              participants="4 participants per team"
              duration="5 min presentation + 2 min Q&A"
              type="technical"
              delay={0.1}
            />
            <EventCard
              title="Web Matrix"
              description="Design and develop a website with HTML and CSS based on a spot topic."
              participants="Individual participation"
              duration="45 minutes"
              type="technical"
              delay={0.2}
            />
            <EventCard
              title="Compile & Conquer"
              description="A thrilling coding challenge that tests your problem-solving skills under pressure."
              participants="Individual participation"
              duration="45 minutes"
              type="technical"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Non-Technical Events */}
      <section id="non-technical" className="py-28 px-4 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,102,204,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-3">Have Fun</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
              Non-Technical Events
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-400">
              Showcase your creativity and have fun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Intelliquest"
              description="A thrilling quiz competition that tests your knowledge and quick thinking."
              participants="2 participants"
              duration="30 minutes"
              type="non-technical"
              delay={0.1}
            />
            <EventCard
              title="Prompt2Pixel"
              description="Unleash your creativity by generating images from text prompts."
              participants="Individual participation"
              duration="30 minutes"
              type="non-technical"
              delay={0.2}
            />
            <EventCard
              title="Imagexplore"
              description="Find connections between seemingly unrelated items in this brain-teasing game."
              participants="Individual participation"
              duration="30 minutes"
              type="non-technical"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/60 mb-4">Don&apos;t Miss Out</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
              Ready to Participate?
            </h2>
            <p className="text-lg mb-10 text-blue-200/70 max-w-xl mx-auto leading-relaxed">
              Register now for InnovSPACE&apos;26. Participation certificates provided for all events.
            </p>
            <motion.a
              href="https://forms.gle/pjUZNBFR7ovdafQz9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-950 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-blue-900/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">InnoSPACE&apos;26</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Technical Symposium
                <br />
                St. Xavier&apos;s Catholic College of Engineering
              </p>
            </div>

            {/* Staff Coordinators */}
            <div>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Staff Coordinators
              </p>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>Dr. A. Bamila Virgin Louis (HoD)</li>
                <li>Mrs. M. C. Sheeba (Faculty Advisor)</li>
                <li>Dr. M. Antony Sheela (Asst. Faculty Advisor)</li>
              </ul>
            </div>

            {/* Student Coordinators */}
            <div>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Student Coordinators
              </p>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>Miss S.P. Kethzia (Secretary)</li>
                <li className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
                  7845525142
                </li>
                <li className="mt-2">Mr. A. Ebin (Joint Secretary)</li>
                <li className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
                  9381476134
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-900 text-center text-gray-600 text-xs tracking-wider">
            &copy; 2026 InnoSPACE&apos;26 &mdash; All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

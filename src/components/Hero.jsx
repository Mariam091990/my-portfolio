

import { motion } from "framer-motion";

import {
    Mail,
    Download,
    ArrowUpRight,
    Code2,
    CheckCircle2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


const technologies = [
    "React.js / Next.js",
    "Node.js / Express",
    "MongoDB / PostgreSQL",
    "JavaScript / TypeScript",
];

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden px-5 pb-20 pt-16 md:pb-28 md:pt-24"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 space-y-6 lg:order-1"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-accent"></span>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                            Hello, I'm
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold leading-tight tracking-tight text-primary md:text-6xl xl:text-7xl">
                            Mariam
                            <br />
                            <span className="font-normal text-accent">
                                Farzana.
                            </span>
                        </h1>

                        <h2 className="text-xl font-semibold text-[#555148] md:text-2xl">
                            Full-Stack Web Developer
                        </h2>
                    </div>

                    <p className="max-w-xl text-base leading-8 text-secondary md:text-lg">
                        I build modern, responsive, and user-friendly web applications
                        using React, Next.js, Node.js, and modern web technologies.
                        I enjoy turning ideas into real, scalable products.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                        >
                            <Code2 size={18} />
                            View My Projects
                            <ArrowUpRight size={16} />
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-surface"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-4">
                        <span className="mr-2 text-sm text-secondary">
                            Find me on
                        </span>

                        <a
                            href="https://github.com/Mariam091990"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="rounded-full border border-border p-3 text-primary transition-all hover:border-accent hover:bg-surface"
                        >
                            <FaGithub size={19} />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-full border border-border p-3 text-primary transition-all hover:border-accent hover:bg-surface"
                        >
                            <FaLinkedin size={19} />
                        </a>

                        <a
                            href="mailto:your-email@example.com"
                            aria-label="Email"
                            className="rounded-full border border-border p-3 text-primary transition-all hover:border-accent hover:bg-surface"
                        >
                            <Mail size={19} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative order-1 mx-auto w-full max-w-md lg:order-2"
                >
                    {/* Decorative Background */}
                    <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#e9dfd2] blur-2xl opacity-70"></div>

                    <div className="relative rounded-[48%_48%_20%_20%] bg-surface p-5">
                        <img
                            src="/mariam.jpeg"
                            alt="Mariam Farzana - Full Stack Web Developer"
                            className="h-95 w-full rounded-[48%_48%_20%_20%] object-cover object-top md:h-117.5"
                        />
                    </div>

                    {/* Floating Technology Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-7 -left-3 rounded-2xl border border-border bg-white p-5 shadow-xl md:-left-12"
                    >
                        <p className="mb-3 text-sm font-bold text-primary">
                            Technologies I work with
                        </p>

                        <div className="space-y-2">
                            {technologies.map((technology) => (
                                <div
                                    key={technology}
                                    className="flex items-center gap-2 text-sm text-secondary"
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="text-accent"
                                    />
                                    {technology}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating Code Icon */}
                    <div className="absolute -right-3 top-10 rounded-2xl border border-border bg-white p-4 shadow-lg md:-right-8">
                        <Code2 size={28} className="text-accent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

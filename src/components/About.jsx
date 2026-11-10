
import { motion } from "framer-motion";

import {
    GraduationCap,
    Code2,
    Lightbulb,
    Target,
    ArrowUpRight,
    BookOpen,
} from "lucide-react";

// About section highlights
const highlights = [
    {
        icon: GraduationCap,
        title: "Academic Background",
        description: "Applied Physics & Materials Science",
    },
    {
        icon: Code2,
        title: "Development Focus",
        description: "Frontend & Full-Stack Development",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Turning ideas into practical solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Exploring modern technologies and tools",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="bg-surface px-5 py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                        Get to know me
                    </p>

                    <h2 className="text-3xl font-bold text-primary md:text-5xl">
                        About{" "}
                        <span className="font-normal text-accent">
                            Me
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />
                </motion.div>

                {/* Main Content */}
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left: Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold leading-snug text-primary md:text-3xl">
                            Curiosity drives me.
                            <br />

                            <span className="text-accent">
                                Technology inspires me.
                            </span>
                        </h3>

                        <p className="text-base leading-8 text-secondary">
                            Hello! I'm Mariam Farzana, a developer with an
                            academic foundation in Applied Physics and
                            Materials Science. My educational journey has
                            strengthened my analytical thinking, research
                            mindset, and problem-solving abilities.
                        </p>

                        <p className="text-base leading-8 text-secondary">
                            My professional and technical journey has also
                            involved working on a government Digital
                            Terrestrial Broadcast project. This experience
                            helped me appreciate the role of technology
                            in solving real-world challenges.
                        </p>

                        <p className="text-base leading-8 text-secondary">
                            Currently, I focus on modern web development,
                            building responsive and user-friendly
                            applications using React, Next.js, JavaScript,
                            TypeScript, Node.js, and database technologies.
                        </p>

                        <p className="text-base leading-8 text-secondary">
                            I enjoy learning new technologies, exploring
                            backend development, and transforming ideas
                            into meaningful digital experiences. My goal
                            is to keep growing as a developer and build
                            solutions that make a difference.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
                            >
                                Explore My Work
                                <ArrowUpRight size={17} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="grid gap-5 sm:grid-cols-2"
                    >
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.12,
                                    }}
                                    whileHover={{ y: -6 }}
                                    className="rounded-2xl border border-border bg-background p-7 transition-shadow duration-300 hover:shadow-lg"
                                >
                                    {/* Card Icon */}
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-accent">
                                        <Icon size={25} />
                                    </div>

                                    {/* Card Title */}
                                    <h4 className="mb-2 text-lg font-bold text-primary">
                                        {item.title}
                                    </h4>

                                    {/* Card Description */}
                                    <p className="text-sm leading-7 text-secondary">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 rounded-2xl border border-border bg-background p-8 text-center md:p-12"
                >
                    <Target
                        size={32}
                        className="mx-auto mb-4 text-accent"
                    />

                    <h3 className="mb-3 text-xl font-bold text-primary md:text-2xl">
                        Always Learning, Always Building
                    </h3>

                    <p className="mx-auto max-w-2xl text-sm leading-7 text-secondary md:text-base">
                        I believe that curiosity, consistency, and a
                        passion for problem-solving are essential to
                        creating meaningful technology. Every project
                        is an opportunity to learn, improve, and build
                        something better.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default About;

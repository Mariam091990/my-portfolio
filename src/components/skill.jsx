
import { motion } from "framer-motion";

import {
    Code2,
    Server,
    Database,
    Wrench,
    Globe,
} from "lucide-react";

import {
    SiHtml5,
   
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiDaisyui,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGit,
    SiGithub,
  
    SiPostman,
    SiDocker,
    SiVite,
    SiVercel,
    SiFirebase,
   
} from "react-icons/si";

import { FaJava, FaCss3Alt,  FaCode  } from "react-icons/fa";

// Technical skills data
const skillCategories = [
    {
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
        icon: Code2,
        skills: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: SiJavascript },
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "DaisyUI", icon: SiDaisyui },
        ],
    },
    {
        title: "Backend Development",
        description: "Developing server-side applications and APIs.",
        icon: Server,
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Java", icon: FaJava },
        ],
    },
    {
        title: "Database & ORM",
        description: "Managing data and working with database technologies.",
        icon: Database,
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma ORM", icon: SiPrisma },
            { name: "Firebase", icon: SiFirebase },
        ],
    },
    {
        title: "Tools & Platforms",
        description: "Tools that support development and deployment workflows.",
        icon: Wrench,
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "VS Code", icon: FaCode },
            { name: "Postman", icon: SiPostman },
            { name: "Docker", icon: SiDocker },
            { name: "Vite", icon: SiVite },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-background px-5 py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                        My Technical Expertise
                    </p>

                    <h2 className="text-3xl font-bold text-primary md:text-5xl">
                        Technical{" "}
                        <span className="font-normal text-accent">
                            Skills
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary">
                        Technologies and tools I use to design, develop,
                        and build modern web applications.
                    </p>
                </motion.div>

                {/* Skill Categories */}
                <div className="grid gap-7 md:grid-cols-2">

                    {skillCategories.map((category, index) => {
                        const CategoryIcon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-border bg-surface p-7 transition-shadow duration-300 hover:shadow-lg md:p-8"
                            >
                                {/* Category Heading */}
                                <div className="mb-7 flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-accent">
                                        <CategoryIcon size={25} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-primary">
                                            {category.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-secondary">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Technology Cards */}
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {category.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.04 }}
                                                className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-4 transition-colors duration-300 hover:border-accent"
                                            >
                                                <SkillIcon
                                                    size={21}
                                                    className="shrink-0 text-accent"
                                                />

                                                <span className="text-xs font-semibold text-primary sm:text-sm">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}

                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center md:p-10"
                >
                    <Globe
                        size={30}
                        className="mx-auto mb-4 text-accent"
                    />

                    <h3 className="text-xl font-bold text-primary md:text-2xl">
                        Growing Through Technology
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-secondary md:text-base">
                        I continuously explore new tools, technologies,
                        and development practices to improve my skills
                        and build better digital experiences.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;

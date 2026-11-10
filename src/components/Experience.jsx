
import { motion } from "framer-motion";

import {
    Radio,
    Code2,
    BookOpen,
    CalendarDays,
    ArrowUpRight,
    BriefcaseBusiness,
} from "lucide-react";

const journeyData = [
    {
        id: 1,
        period: "Academic Project",
        type: "Government Project",
        title: "Digital Terrestrial Broadcast",
        organization: "Government Project",
        description:
            "Contributed to a government project focused on Digital Terrestrial Broadcasting. This experience provided exposure to broadcast technology and strengthened my understanding of applied physics, electronics, and communication systems.",
        icon: Radio,
        highlights: [
            "Digital Broadcasting",
            "Communication Technology",
            "Applied Physics",
        ],
    },
    {
        id: 2,
        period: "Development Journey",
        type: "Full-Stack Development",
        title: "Web Application Development",
        organization: "Personal & Practical Projects",
        description:
            "Developing modern web applications through hands-on projects. Working with React, Next.js, TypeScript, Node.js, Express, and databases to build responsive user interfaces and functional backend systems.",
        icon: Code2,
        highlights: [
            "React & Next.js",
            "Node.js & Express",
            "MongoDB & PostgreSQL",
        ],
    },
    {
        id: 3,
        period: "Ongoing",
        type: "Professional Development",
        title: "Continuous Learning & Exploration",
        organization: "Independent Learning",
        description:
            "Continuously strengthening software development skills, exploring backend architecture, improving problem-solving abilities, and learning modern tools and development practices.",
        icon: BookOpen,
        highlights: [
            "Backend Development",
            "Software Engineering",
            "New Technologies",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-surface px-5 py-20 md:py-28"
        >
            <div className="mx-auto max-w-5xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                        My Professional Journey
                    </p>

                    <h2 className="text-3xl font-bold text-primary md:text-5xl">
                        Experience{" "}
                        <span className="font-normal text-accent">
                            & Journey
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary">
                        A journey shaped by academic projects, hands-on
                        development, continuous learning, and an interest
                        in solving real-world problems through technology.
                    </p>
                </motion.div>

                {/* Journey Timeline */}
                <div className="relative">

                    {/* Timeline Line */}
                    <div className="absolute bottom-10 left-5 top-10 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-10">

                        {journeyData.map((item, index) => {
                            const Icon = item.icon;
                            const isRight = index % 2 !== 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{
                                        opacity: 0,
                                        x: isRight ? 35 : -35,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                    }}
                                    className={`relative flex md:w-1/2 ${isRight
                                            ? "md:ml-auto md:pl-12"
                                            : "md:pr-12"
                                        }`}
                                >

                                    {/* Timeline Marker */}
                                    <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-surface bg-accent text-white md:left-auto md:right-0 md:translate-x-1/2">
                                        <Icon size={18} />
                                    </div>

                                    {/* Journey Card */}
                                    <motion.article
                                        whileHover={{ y: -5 }}
                                        className="ml-12 w-full rounded-2xl border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-xl md:ml-0 md:p-8"
                                    >

                                        {/* Period & Type */}
                                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                                            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-semibold text-accent">
                                                <CalendarDays size={15} />
                                                {item.period}
                                            </span>

                                            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                                                {item.type}
                                            </span>
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-surface text-accent">
                                            <Icon size={29} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold leading-snug text-primary md:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-accent">
                                            <BriefcaseBusiness size={16} />
                                            {item.organization}
                                        </p>

                                        {/* Description */}
                                        <p className="mt-5 text-sm leading-7 text-secondary">
                                            {item.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="mt-6 border-t border-border pt-5">

                                            <h4 className="mb-3 text-sm font-bold text-primary">
                                                Key Focus Areas
                                            </h4>

                                            <div className="flex flex-wrap gap-2">
                                                {item.highlights.map((highlight) => (
                                                    <span
                                                        key={highlight}
                                                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-secondary"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </motion.article>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 rounded-2xl border border-border bg-background p-8 text-center md:p-10"
                >
                    <ArrowUpRight
                        size={30}
                        className="mx-auto mb-4 text-accent"
                    />

                    <h3 className="text-xl font-bold text-primary md:text-2xl">
                        Every Experience Builds Something New
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-secondary md:text-base">
                        I believe professional growth comes from curiosity,
                        practical experience, and a willingness to embrace
                        new challenges. I look forward to creating meaningful
                        solutions through technology.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;

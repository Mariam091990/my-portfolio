
import { motion } from "framer-motion";

import {
    GraduationCap,
    BookOpen,
    CalendarDays,
    Atom,
    Award,
} from "lucide-react";

const educationData = [
    {
        id: 1,
        degree: "Master of Science (MSc)",
        field: "Applied Physics — Materials Science",
        institution: "Your University Name",
        year: "2017",
        description:
            "Specialized in Materials Science, developing a deeper understanding of material properties, scientific principles, and advanced physical concepts.",
        icon: GraduationCap,
        highlights: [
            "Major in Materials Science",
            "Advanced Applied Physics",
            "Scientific Research",
        ],
    },
    {
        id: 2,
        degree: "Bachelor of Science (Honours)",
        field: "Applied Physics, Electronics & Communication Engineering",
        institution: "Your University Name",
        year: "2014",
        description:
            "Built a strong academic foundation in applied physics, electronics, communication engineering, and analytical problem-solving.",
        icon: Atom,
        highlights: [
            "Applied Physics",
            "Electronics",
            "Communication Engineering",
        ],
    },
];

const Education = () => {
    return (
        <section
            id="education"
            className="bg-background px-5 py-20 md:py-28"
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
                        My Academic Journey
                    </p>

                    <h2 className="text-3xl font-bold text-primary md:text-5xl">
                        Education{" "}
                        <span className="font-normal text-accent">
                            & Background
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary">
                        My academic journey has shaped my analytical thinking,
                        research mindset, and passion for understanding
                        technology and scientific innovation.
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="relative">

                    {/* Timeline Line */}
                    <div className="absolute bottom-12 left-4.75 top-12 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {educationData.map((education, index) => {
                            const Icon = education.icon;
                            const isRight = index % 2 !== 0;

                            return (
                                <motion.div
                                    key={education.id}
                                    initial={{
                                        opacity: 0,
                                        x: isRight ? 35 : -35,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                    }}
                                    className={`relative flex items-start gap-6 md:w-1/2 md:gap-0 ${isRight
                                            ? "md:ml-auto md:pl-12"
                                            : "md:pr-12"
                                        }`}
                                >

                                    {/* Timeline Marker */}
                                    <div className="absolute left-4.75 top-7 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-accent text-white md:left-auto md:right-0 md:translate-x-1/2">
                                        <GraduationCap size={18} />
                                    </div>

                                    {/* Education Card */}
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="ml-12 w-full rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-xl md:ml-0 md:p-8"
                                    >

                                        {/* Year */}
                                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                                            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold text-accent">
                                                <CalendarDays size={15} />
                                                {education.year}
                                            </span>

                                            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                                                Academic Degree
                                            </span>
                                        </div>

                                        {/* Degree Icon */}
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-background text-accent">
                                            <Icon size={30} />
                                        </div>

                                        {/* Degree Information */}
                                        <h3 className="text-xl font-bold leading-snug text-primary md:text-2xl">
                                            {education.degree}
                                        </h3>

                                        <h4 className="mt-2 text-base font-semibold leading-7 text-accent">
                                            {education.field}
                                        </h4>

                                        <p className="mt-3 text-sm font-medium text-primary">
                                            {education.institution}
                                        </p>

                                        <p className="mt-4 text-sm leading-7 text-secondary">
                                            {education.description}
                                        </p>

                                        {/* Academic Highlights */}
                                        <div className="mt-6 border-t border-border pt-5">
                                            <p className="mb-3 flex items-center gap-2 text-sm font-bold text-primary">
                                                <Award size={17} className="text-accent" />
                                                Academic Focus
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {education.highlights.map((highlight) => (
                                                    <span
                                                        key={highlight}
                                                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-secondary"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </motion.div>
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
                    className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center md:p-10"
                >
                    <BookOpen
                        size={30}
                        className="mx-auto mb-4 text-accent"
                    />

                    <h3 className="text-xl font-bold text-primary md:text-2xl">
                        Knowledge Beyond Boundaries
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-secondary md:text-base">
                        My academic foundation continues to influence
                        how I approach technology, research, analytical
                        thinking, and solving complex problems.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;

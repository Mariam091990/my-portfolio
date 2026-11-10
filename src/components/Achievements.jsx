
import { motion } from "framer-motion";
import {
    Award,
    Radio,
    Zap,
    Monitor,
    ShieldCheck,
    GraduationCap,
    ArrowUpRight,
} from "lucide-react";

const achievements = [
    {
        icon: Radio,
        number: "01",
        title: "Digital Terrestrial Broadcasting",
        description:
            "Contributed to the nationwide Digital Terrestrial Television Broadcasting project, supporting transmitter installation, commissioning, and technical supervision.",
        category: "Broadcast Engineering",
    },
    {
        icon: Zap,
        number: "02",
        title: "Electrical Power Infrastructure",
        description:
            "Supervised the installation of a 2500 kVA electrical substation at BTV Dhaka Centre and participated in commissioning two 500 kVA generators.",
        category: "Electrical Engineering",
    },
    {
        icon: Monitor,
        number: "03",
        title: "Digital Service Quality Assurance",
        description:
            "Worked with the QA team for BTV mobile television and digital services, including testing, identifying issues, and coordinating improvements.",
        category: "Quality Assurance",
    },
];

const certifications = [
    {
        title: "Next Level Web Development",
        organization: "Programming Hero",
        period: "December 2025 – June 2026",
        type: "Professional Training",
    },
    {
        title: "Complete Web Development Course",
        organization: "Programming Hero",
        period: "December 2024 – June 2025",
        type: "Professional Training",
    },
];

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="bg-background px-5 py-20 sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                        Achievements & Learning
                    </span>

                    <h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                        Milestones That Shape My Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-secondary">
                        A combination of engineering experience, technical contributions,
                        and continuous learning that drives my professional growth.
                    </p>
                </motion.div>

                {/* Professional Achievements */}
                <div className="mb-16">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="rounded-xl bg-surface p-3 text-accent">
                            <Award size={23} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-primary">
                                Professional Milestones
                            </h3>
                            <p className="mt-1 text-sm text-secondary">
                                Engineering contributions and practical experience
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {achievements.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.12 }}
                                    className="group rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-lg"
                                >
                                    <div className="mb-7 flex items-center justify-between">
                                        <div className="rounded-xl bg-background p-3 text-accent">
                                            <Icon size={25} />
                                        </div>

                                        <span className="text-3xl font-bold text-border">
                                            {item.number}
                                        </span>
                                    </div>

                                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                                        {item.category}
                                    </span>

                                    <h4 className="mt-3 text-xl font-bold text-primary">
                                        {item.title}
                                    </h4>

                                    <p className="mt-4 text-sm leading-7 text-secondary">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Training and Certifications */}
                <div>
                    <div className="mb-8 flex items-center gap-3">
                        <div className="rounded-xl bg-surface p-3 text-accent">
                            <GraduationCap size={23} />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-primary">
                                Training & Professional Development
                            </h3>
                            <p className="mt-1 text-sm text-secondary">
                                Structured learning and technical skill development
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {certifications.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:gap-5"
                            >
                                <div>
                                    <div className="mb-4 flex items-center gap-2 text-accent">
                                        <ShieldCheck size={19} />
                                        <span className="text-xs font-semibold uppercase tracking-wider">
                                            {item.type}
                                        </span>
                                    </div>

                                    <h4 className="text-xl font-bold text-primary">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-secondary">
                                        {item.organization}
                                    </p>

                                    <p className="mt-2 text-sm text-secondary">
                                        {item.period}
                                    </p>
                                </div>

                                <div className="mt-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent transition-colors group-hover:bg-accent group-hover:text-white sm:mt-0">
                                    <ArrowUpRight size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import {
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

const Services = () => {

    
    return (
        <section
            id="services"
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
                        What I Can Do
                    </p>

                    <h2 className="text-3xl font-bold text-primary md:text-5xl">
                        My{" "}
                        <span className="font-normal text-accent">
                            Services
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary">
                        I focus on building functional, responsive, and
                        user-friendly web solutions using modern
                        development technologies.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="flex flex-wrap justify-center gap-6">

                    {servicesData.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.id}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                whileHover={{ y: -8 }}
                                className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:shadow-xl w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]"
                            >

                                {/* Number and Icon */}
                                <div className="mb-8 flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <Icon size={27} />
                                    </div>

                                    <span className="text-3xl font-bold text-border">
                                        {service.number}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-4 text-xl font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6 flex-1 text-sm leading-7 text-secondary">
                                    {service.description}
                                </p>

                                {/* Technologies */}
                                <div className="border-t border-border pt-5">
                                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-secondary"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Indicator */}
                                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-accent">
                                    <span>Development Service</span>
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </div>

                            </motion.article>
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
                    <CheckCircle2
                        size={30}
                        className="mx-auto mb-4 text-accent"
                    />

                    <h3 className="text-xl font-bold text-primary md:text-2xl">
                        Turning Ideas into Digital Solutions
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-secondary md:text-base">
                        From designing interactive interfaces to developing
                        backend functionality, I enjoy creating web solutions
                        that combine usability, performance, and functionality.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;

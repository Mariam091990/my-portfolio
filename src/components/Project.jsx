
import { motion } from "framer-motion";

import {
   
    ExternalLink,
    ArrowUpRight,
    FolderGit2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-surface px-5 py-20 md:py-28"
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
                        My Recent Work
                    </p>

                    <h2 className="text-3xl font-bold text-primary md:text-5xl">
                        Featured{" "}
                        <span className="font-normal text-accent">
                            Projects
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary">
                        A collection of projects that demonstrate my
                        skills in frontend development, backend
                        development, and building full-stack applications.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            whileHover={{ y: -7 }}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow duration-300 hover:shadow-xl"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden bg-surface">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project screenshot`}
                                    loading="lazy"
                                    className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />

                                {project.featured && (
                                    <span className="absolute left-4 top-4 rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-accent shadow-sm">
                                        Featured Project
                                    </span>
                                )}
                            </div>

                            {/* Project Information */}
                            <div className="flex flex-1 flex-col p-6">

                                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                                    <FolderGit2 size={15} />
                                    {project.category}
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                                    {project.title}
                                </h3>

                                <p className="mb-5 text-sm leading-7 text-secondary">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-secondary"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border pt-5">

                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent"
                                        >
                                            Live Demo
                                            <ExternalLink size={14} />
                                        </a>
                                    ) : (
                                        <span className="rounded-full bg-surface px-4 py-2.5 text-xs font-medium text-secondary">
                                            Demo unavailable
                                        </span>
                                    )}

                                    {project.githubUrl ? (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-primary transition-colors hover:border-accent hover:bg-surface"
                                        >
                                            <FaGithub size={15} />
                                            FaGitHub
                                            <ArrowUpRight size={14} />
                                        </a>
                                    ) : (
                                        <span className="rounded-full border border-border px-4 py-2.5 text-xs font-medium text-secondary">
                                            Repository unavailable
                                        </span>
                                    )}

                                </div>
                            </div>
                        </motion.article>
                    ))}

                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 text-center"
                >
                    <p className="mb-5 text-sm text-secondary">
                        Interested in exploring more of my code?
                    </p>

                    <a
                        href="https://github.com/Mariam091990"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                    >
                        <FaGithub size={18} />
                        Explore My GitHub
                        <ArrowUpRight size={16} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;

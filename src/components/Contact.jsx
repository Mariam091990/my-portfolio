
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    Mail,
    Phone,
    MapPin,
    Send,

} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "taskiamariam09@gmail.com",
        href: "mailto:taskiamariam09@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+880 1686 239936",
        href: "tel:+8801686239936",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: null,
    },
];

export default function Contact() {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("EmailJS configuration:", {
            serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            publicKeyExists: Boolean(
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ),
        });

        if (
            !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ) {
            setStatus({
                type: "error",
                message: "EmailJS configuration is missing. Check your .env file.",
            });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            console.log("EmailJS response:", response);

            setStatus({
                type: "success",
                message: "Your message has been sent successfully!",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);

            setStatus({
                type: "error",
                message: error?.text || error?.message ||
                    "Failed to send your message. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };



    return (
        <section
            id="contact"
            className="bg-surface px-5 py-20 sm:px-8 lg:px-12"
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
                        Get In Touch
                    </span>

                    <h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                        Let's Start a Conversation
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-secondary">
                        Have a project, collaboration, or opportunity in mind?
                        I'd be happy to hear from you. Let's connect and explore
                        how we can work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="rounded-2xl border border-border bg-background p-7 sm:p-9">
                            <h3 className="text-2xl font-bold text-primary">
                                Contact Information
                            </h3>

                            <p className="mt-3 leading-7 text-secondary">
                                Feel free to reach out through any of the following
                                channels. I'm open to professional opportunities,
                                technical discussions, and collaborations.
                            </p>

                            <div className="mt-9 space-y-7">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.label} className="flex items-center gap-4">
                                            <div className="rounded-xl bg-surface p-3 text-accent">
                                                <Icon size={22} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm text-secondary">
                                                    {item.label}
                                                </p>

                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="break-all font-medium text-primary transition-colors hover:text-accent"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="font-medium text-primary">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-10 border-t border-border pt-7">
                                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                                    Find Me Online
                                </p>

                                <a
                                    href="https://github.com/Mariam091990"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit GitHub profile"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                                >
                                    <FaGithub size={21} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-border bg-background p-7 sm:p-9"
                        >
                            <h3 className="text-2xl font-bold text-primary">
                                Send Me a Message
                            </h3>

                            <p className="mt-3 leading-7 text-secondary">
                                Fill out the form below to start a conversation.
                            </p>

                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-primary"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-primary outline-none transition focus:border-accent"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-primary"
                                    >
                                        Your Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-primary outline-none transition focus:border-accent"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium text-primary"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this regarding?"
                                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-primary outline-none transition focus:border-accent"
                                />
                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-primary"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-primary outline-none transition focus:border-accent"
                                />
                            </div>

                            {status.message && (
                                <p
                                    role="status"
                                    className={`mt-5 text-sm font-medium ${status.type === "success"
                                        ? "text-green-700"
                                        : "text-red-600"
                                        }`}
                                >
                                    {status.message}
                                </p>
                            )}


                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-medium text-white transition-all duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Send Message"}
                                {!loading && <Send size={17} />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-xl font-bold tracking-tight text-primary"
                >
                    Mariam<span className="text-accent">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary transition-colors duration-300 hover:text-accent"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    download
                    className="hidden items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:inline-flex"
                >
                    Download CV
                    <ArrowUpRight size={16} />
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-primary hover:bg-surface lg:hidden"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-sm font-medium text-secondary transition-colors hover:text-accent"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="/resume.pdf"
                            download
                            onClick={closeMenu}
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                        >
                            Download CV
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

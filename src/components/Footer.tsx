import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" className="flex items-center gap-2">
                           <div className="p-1 bg-primary/10 rounded">
                              <Image
                                src="./Fitness_logo.svg"
                                width={40}
                                height={40}
                                alt="light Logo"
                                className="w-6 h-6 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                />
                           </div>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                           © {new Date().getFullYear()} codeflex.ai - All rights reserved
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
                        <Link
                         href="/about"
                         className="text-muted-foreground hover:text-primary transition-colors"
                        >
                           About
                        </Link>
                        <Link
                         href="/teams"
                         className="text-muted-foreground hover:text-primary transition-colors"
                        >
                           Teams
                        </Link>
                        <Link
                         href="/privacy"
                         className="text-muted-foreground hover:text-primary transition-colors"
                        >
                           privacy
                        </Link>
                        <Link
                         href="/contact"
                         className="text-muted-foreground hover:text-primary transition-colors"
                        >
                           Contact
                        </Link>
                        <Link
                         href="/blog"
                         className="text-muted-foreground hover:text-primary transition-colors"
                        >
                           Blog
                        </Link>
                        <Link
                         href="/help"
                         className="text-muted-foreground hover:text-primary transition-colors"
                        >
                           Help
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
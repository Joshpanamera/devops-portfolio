export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                <h1 className="text-xl font-bold text-white">
                    Joshua Kpejoh Tam
                </h1>

                <div className="flex gap-8 text-gray-300">
                    <a href="#about" className="transition hover:text-blue-400">
                        About
                    </a>

                    <a href="#skills" className="transition hover:text-blue-400">
                        Skills
                    </a>

                    <a href="#projects" className="transition hover:text-blue-400">
                        Projects
                    </a>

                    <a href="#contact" className="transition hover:text-blue-400">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
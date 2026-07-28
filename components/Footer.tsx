export default function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-gray-950 py-8">

            <div className="text-center text-gray-400">

                <p>
                    © {new Date().getFullYear()} Joshua Kpejoh Tam
                </p>

                <p className="mt-2">
                    Built with Next.js • Tailwind CSS • Vercel
                </p>

            </div>

        </footer>
    );
}
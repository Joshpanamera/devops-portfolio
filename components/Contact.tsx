export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-gray-950 py-24 px-6"
        >
            <div className="mx-auto max-w-5xl text-center">

                <h2 className="mb-10 text-4xl font-bold">
                    Contact
                </h2>


                <p className="mb-8 text-lg text-gray-300">
                    Interested in DevOps, Cloud Infrastructure,
                    automation or collaboration? Feel free to reach out.
                </p>


                <div className="flex flex-col items-center gap-4 text-lg">


                    <a
                        href="mailto:joshua.kpejoh@yahoo.com"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        📧 joshua.kpejoh@yahoo.com
                    </a>


                    <a
                        href="https://github.com/Joshpanamera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        🐙 github.com/Joshpanamera
                    </a>


                    <a
                        href="https://x.com/tamjosh_longest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        𝕏 @tamjosh_longest
                    </a>


                </div>

            </div>
        </section>
    );
}
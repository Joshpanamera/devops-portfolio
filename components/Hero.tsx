export default function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

            <h1 className="text-6xl font-bold">
                Joshua Kpejoh Tam
            </h1>

            <h2 className="mt-4 text-2xl text-blue-400">
                DevOps Engineer
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-gray-300">
                DevOps and Cloud Engineer with hands-on experience designing,
                deploying, and automating cloud infrastructure using AWS,
                Terraform, Docker, Kubernetes, Jenkins, GitHub Actions,
                and Linux. Skilled in Infrastructure as Code (IaC), CI/CD automation,
                container orchestration, and cloud-native deployments.
                Passionate about building scalable, secure, and reliable systems while continuously improving
                operational efficiency through automation and modern DevOps practices.
            </p>

            <div className="mt-10 flex gap-4">

                <a
                    href="#projects"
                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
                >
                    View Projects
                </a>

                <a
                    href="/resume/Joshua_Kpejoh_Tam_DevOps_Resume.pdf"
                    download
                    className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black"
                >
                    Download Resume
                </a>

            </div>

        </section>
    );
}
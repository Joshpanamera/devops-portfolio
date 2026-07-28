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
                I build cloud infrastructure, automate deployments, and design
                reliable CI/CD pipelines using AWS, Docker, Jenkins, GitHub Actions,
                Kubernetes, Terraform and Ansible.
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
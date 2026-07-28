export default function About() {
    return (
        <section
            id="about"
            className="bg-gray-900 py-24 px-6 text-white"
        >
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-10 text-center text-4xl font-bold">
                    About Me
                </h2>

                <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-gray-300">
                    I am a DevOps & Cloud Engineer passionate about building scalable,
                    secure, and automated cloud infrastructure. My experience includes
                    AWS, Linux, Docker, Kubernetes, Jenkins, GitHub Actions,
                    Terraform, and Ansible. I enjoy designing CI/CD pipelines,
                    automating deployments, and solving real-world infrastructure
                    challenges through Infrastructure as Code.
                </p>
            </div>
        </section>
    );
}
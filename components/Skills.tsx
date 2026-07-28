export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-gray-950 py-24 px-6"
        >
            <div className="mx-auto max-w-6xl">

                <h2 className="mb-12 text-center text-4xl font-bold">
                    Technical Skills
                </h2>


                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {[
                        "AWS",
                        "Docker",
                        "Kubernetes",
                        "Terraform",
                        "Jenkins",
                        "GitHub Actions",
                        "Ansible",
                        "Linux",
                        "Git",
                        "Bash",
                        "Nginx",
                    ].map((skill) => (

                        <div
                            key={skill}
                            className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                        >

                            <h3 className="text-xl font-semibold text-blue-400">
                                {skill}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}
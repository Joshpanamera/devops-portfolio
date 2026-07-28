import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
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
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            View Projects
          </button>

          <button className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">
            Download Resume
          </button>
        </div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
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
      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-900 py-24 px-6 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Project 1 */}
            <div className="rounded-xl border border-gray-800 bg-gray-950 p-8 transition hover:border-blue-500">

              <h3 className="text-2xl font-bold text-blue-400">
                Jenkins CI/CD Pipeline
              </h3>

              <p className="mt-4 text-gray-300">
                Automated Docker image builds using Jenkins pipelines,
                GitHub Webhooks, Docker, and Nginx.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Jenkins
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Docker
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  GitHub
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Webhooks
                </span>

              </div>

              <button className="mt-8 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
                View Project
              </button>

            </div>

            {/* Project 2 */}

            <div className="rounded-xl border border-gray-800 bg-gray-950 p-8 transition hover:border-blue-500">

              <h3 className="text-2xl font-bold text-blue-400">
                Kubernetes Capstone
              </h3>

              <p className="mt-4 text-gray-300">
                Deployed a highly available containerized application
                on Kubernetes using Terraform and AWS.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Kubernetes
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Terraform
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  AWS
                </span>

              </div>

              <button className="mt-8 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
                View Project
              </button>

            </div>

          </div>

        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-900 py-24 px-6 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Project 1 */}
            <div className="rounded-xl border border-gray-800 bg-gray-950 p-8 transition hover:border-blue-500">

              <h3 className="text-2xl font-bold text-blue-400">
                Jenkins CI/CD Pipeline
              </h3>

              <p className="mt-4 text-gray-300">
                Automated Docker image builds using Jenkins pipelines,
                GitHub Webhooks, Docker, and Nginx.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Jenkins
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Docker
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  GitHub
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Webhooks
                </span>

              </div>

              <button className="mt-8 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
                View Project
              </button>

            </div>

            {/* Project 2 */}

            <div className="rounded-xl border border-gray-800 bg-gray-950 p-8 transition hover:border-blue-500">

              <h3 className="text-2xl font-bold text-blue-400">
                Kubernetes Capstone
              </h3>

              <p className="mt-4 text-gray-300">
                Deployed a highly available containerized application
                on Kubernetes using Terraform and AWS.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Kubernetes
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Terraform
                </span>

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  AWS
                </span>

              </div>

              <button className="mt-8 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
                View Project
              </button>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
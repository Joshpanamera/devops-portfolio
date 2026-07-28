import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

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


      {/* About */}
      <section
        id="about"
        className="bg-gray-900 py-24 px-6"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-10 text-center text-4xl font-bold">
            About Me
          </h2>

          <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-gray-300">
            I am a DevOps and Cloud Engineer passionate about building
            scalable, secure and automated cloud infrastructure.

            I specialize in AWS, Docker, Kubernetes, Terraform, Jenkins,
            GitHub Actions, Linux and Infrastructure as Code.

            My focus is creating reliable systems through automation,
            CI/CD pipelines and modern cloud technologies.
          </p>

        </div>
      </section>


      {/* Skills */}
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



      {/* Projects */}
      <section
        id="projects"
        className="bg-gray-900 py-24 px-6"
      >

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Featured Projects
          </h2>


          <div className="grid gap-8 md:grid-cols-2">


            <ProjectCard
              title="Linux Server Performance Monitor"
              description="Built a Linux monitoring solution using Bash scripting to monitor CPU, memory, disk usage and overall server health."
              technologies={[
                "Linux",
                "Bash"
              ]}
              github="https://github.com/Joshpanamera/linux-server-performance-monitor"
            />


            <ProjectCard
              title="GitHub Pages Deployment Workflow"
              description="Automated website deployment using GitHub Actions and GitHub Pages."
              technologies={[
                "GitHub Actions",
                "GitHub Pages"
              ]}
              github="https://github.com/Joshpanamera/gh-deployment-workflow"
            />


            <ProjectCard
              title="Jenkins CI/CD Pipeline"
              description="Built a Jenkins pipeline that automatically builds Docker images using GitHub Webhooks and Jenkins."
              technologies={[
                "Jenkins",
                "Docker",
                "GitHub",
                "Webhooks"
              ]}
              github="https://github.com/Joshpanamera/jenkins-ci-cd-demo"
            />


            <ProjectCard
              title="AWS Kubernetes TaskApp Deployment"
              description="Provisioned AWS infrastructure with Terraform and deployed a highly available application to Kubernetes."
              technologies={[
                "AWS",
                "Terraform",
                "Kubernetes"
              ]}
              github="https://github.com/Joshpanamera/My-tasksapp-capstone"
            />


          </div>

        </div>

      </section>



      {/* Contact */}
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
              className="text-blue-400 hover:text-blue-300"
            >
              🐙 github.com/Joshpanamera
            </a>


            <a
              href="https://x.com/tamjosh_longest"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              𝕏 @tamjosh_longest
            </a>


          </div>


        </div>


      </section>



      {/* Footer */}
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


    </main>
  );
}
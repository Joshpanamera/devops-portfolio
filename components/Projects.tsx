import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
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
    );
}
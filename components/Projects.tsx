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
                        title="AWS Kubernetes TaskApp Deployment"
                        description="Provisioned AWS infrastructure with Terraform and deployed a highly available application to Kubernetes."
                        technologies={[
                            "AWS",
                            "Terraform",
                            "Kubernetes",
                            "Docker",
                            "ArgoCD",
                            "NGINX Ingress",
                            "PostgreSQL",
                        ]}
                        github="https://github.com/Joshpanamera/My-tasksapp-capstone"
                        image="/images/taskapp-dashboard.png"
                    />

                    <ProjectCard
                        title="Linux Server Performance Monitor"
                        description="Built a Linux monitoring solution using Bash scripting to monitor CPU, memory, disk usage and overall server health."
                        technologies={[
                            "Linux",
                            "Bash",
                            "Shell Scripting",
                        ]}
                        github="https://github.com/Joshpanamera/linux-server-performance-monitor"
                        image="/images/linux-monitor.png"
                    />

                    <ProjectCard
                        title="GitHub Pages Deployment Workflow"
                        description="Automated website deployment using GitHub Actions and GitHub Pages."
                        technologies={[
                            "GitHub Actions",
                            "GitHub Pages",
                            "YAML",
                            "CI/CD",
                        ]}
                        github="https://github.com/Joshpanamera/gh-deployment-workflow"
                        image="/images/github-actions-deployment.png"
                    />

                    <ProjectCard
                        title="Jenkins CI/CD Pipeline"
                        description="Built a Jenkins pipeline that automatically builds Docker images using GitHub Webhooks and Jenkins."
                        technologies={[
                            "Jenkins",
                            "Docker",
                            "GitHub",
                            "GitHub Webhooks",
                            "CI/CD",
                        ]}
                        github="https://github.com/Joshpanamera/jenkins-ci-cd-demo"
                        image="/images/jenkins-pipeline.png"
                    />

                    <ProjectCard
                        title="Azure Cloud Identity & App Registration"
                        description="Registered and configured a Microsoft Entra ID application to explore cloud identity, authentication, and Azure application management. Learned how Client IDs, Tenant IDs, and application registrations are used to securely authenticate cloud applications."
                        technologies={[
                            "Microsoft Azure",
                            "Microsoft Entra ID",
                            "Azure Active Directory",
                            "OAuth 2.0",
                        ]}
                        github="https://github.com/Joshpanamera/azure-entra-app-registration"
                        image="/images/azure-entra-dashboard.png"
                    />

                </div>

            </div>
        </section>
    );
}
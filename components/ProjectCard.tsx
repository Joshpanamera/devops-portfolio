import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    image?: string;
};

export default function ProjectCard({
    title,
    description,
    technologies,
    github,
    image,
}: ProjectCardProps) {
    return (
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

            {/* Project Screenshot */}
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 block overflow-hidden rounded-xl"
            >
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={450}
                        className="h-60 w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                ) : (
                    <div className="flex h-60 items-center justify-center rounded-xl bg-gray-800 text-gray-400">
                        Screenshot Coming Soon
                    </div>
                )}
            </a>

            {/* Featured Badge */}
            {title === "AWS Kubernetes TaskApp Deployment" && (
                <div className="mb-4 inline-flex items-center rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
                    ⭐ Featured Project
                </div>
            )}

            {/* Featured Badge */}
            {title === "AWS Kubernetes TaskApp Deployment" && (
                <div className="mb-3 inline-flex rounded-full border border-yellow-500 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-400">
                    Featured Project
                </div>
            )}

            {/* Project Title */}
            <h3 className="text-2xl font-bold text-blue-400">
                {title}
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-gray-300">
                {description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-blue-600/20 border border-blue-500 px-3 py-1 text-sm font-medium text-blue-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* View Project Button */}
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
            >
                View Project
            </a>

        </div>
    );
}
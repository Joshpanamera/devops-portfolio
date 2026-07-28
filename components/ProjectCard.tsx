type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
};

export default function ProjectCard({
    title,
    description,
    technologies,
    github,
}: ProjectCardProps) {
    return (
        <div className="rounded-xl border border-gray-800 bg-gray-950 p-8 transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">

            {/* Placeholder for project screenshot */}
            <div className="mb-6 h-48 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400">
                Screenshot Coming Soon
            </div>

            <h3 className="text-2xl font-bold text-blue-400">
                {title}
            </h3>

            <p className="mt-4 text-gray-300">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded bg-blue-600 px-3 py-1 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
            >
                View GitHub →
            </a>

        </div>
    );
}
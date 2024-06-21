import Link from "next/link";

interface IProps {
    id: number;
    title: string;
    desc: string;
}

const ProjectCard = ({ id, title, desc }: IProps) => {
    return (
        <Link
            href={`/project/${id}`}
            className="flex items-start justify-center flex-col border border-teal-600 border-opacity-50 hover:border-opacity-100 rounded-md p-4 gap-y-1 transition group"
        >
            <p className="font-bold">{title}</p>
            <p className="text-gray-400">{desc}</p>
            <p className="text-teal-600 opacity-50 group-hover:opacity-100 transition-opacity w-full text-right">
                Build &rarr;
            </p>
        </Link>
    );
};

export default ProjectCard;

import Link from "next/link";
import ProjectCard from "./_components/ProjectCard";

export default function Home() {
    return (
        <main className="w-screen min-h-screen flex items-center justify-start flex-col gap-y-10 md:p-10 p-6">
            <nav className="flex items-center justify-between md:w-4/5 w-full">
                <Link href="/" className="font-bold">
                    hack-a-month
                </Link>
                <Link
                    href="/auth"
                    className="py-1 px-4 border border-teal-600 rounded-md hover:text-teal-600 transition-colors"
                >
                    Login
                </Link>
            </nav>

            <section className="grid grid-cols-2 gap-8 md:w-4/5 w-full">
                {/* // TODO: GET project data */}
                <ProjectCard
                    id={123456}
                    title="Project 123456"
                    desc="this is the desc lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />

                <ProjectCard
                    id={1236}
                    title="Project 1236"
                    desc="this is the desc lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />

                <ProjectCard
                    id={3456}
                    title="Project 3456"
                    desc="this is the desc lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />

                <ProjectCard
                    id={46}
                    title="Project 46"
                    desc="this is the desc lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </section>
        </main>
    );
}

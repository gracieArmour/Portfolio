import dynamic from "next/dynamic";
import Link from "next/link";

import { getProjects } from "@/lib/neonFunctions";

function toTitleCase(input: string) {
    return input[0].toUpperCase() + input.slice(1)
}

export default async function Games({
        params,
    }: {
        params: Promise<{ slug: "games" | "web" }>
    }) {
        const { slug } = await params;
        const data = await getProjects(slug);

    return (
        <main className="flex flex-col items-center sm:w-2/3 px-[2em]">
            <h1>{toTitleCase(slug)} Development</h1>
            <ul className="w-full">
                {data.map((entry) => {
                    const DemoComponent = dynamic(() =>
                        import(`../../../components/${entry.demo}`).then((module) => {
                            return module.default;
                        }),
                    );

                    return (
                        <div key={entry.id} className="my-[1em]">
                            <Link className="hover:underline" href={entry.project_link} target="_blank" rel="noopener noreferrer"><h2>{entry.title}</h2></Link>
                            <p><b>Language/Engine:</b> {entry.project_language}</p>
                            {entry.made_for != "" ? <p><b>Made For:</b> {entry.made_for}</p> : <></>}
                            {entry.collaborators != "" ? <p><b>Collaborators:</b> {entry.collaborators}</p> : <></>}
                            {entry.demo != "" ? <DemoComponent/> : <></>}
                            <p>{entry.description}</p>
                        </div>
                    )
                })}
            </ul>
        </main>
    )
}
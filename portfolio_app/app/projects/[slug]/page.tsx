import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { getProjects } from "@/lib/neonFunctions";
import OpenLinkIcon from "@/public/images/icons/open-link-svgrepo-com.svg";

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
        <main className="flex flex-col items-center sm:w-[640px] px-[2em]">
            <h1 className="mb-[3rem]">{toTitleCase(slug)} Development</h1>
            <ul className="w-full">
                {data.map((entry) => {
                    const DemoComponent = dynamic(() =>
                        import(`../../../components/${entry.demo}`).then((module) => {
                            return module.default;
                        }),
                    );

                    return (
                        <div key={entry.id} className="mb-[5em] w-full">
                            <div className="flex flex-row justify-start items-center mb-[1rem]">
                                <h2 className="mr-[1rem] mb-0">{entry.title}</h2>
                                <Link className="underline hover:no-underline" href={entry.project_link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="object-contain h-[var(--text-3xl)] w-auto"
                                        src={OpenLinkIcon}
                                        alt="open link icon"
                                    />
                                </Link>
                            </div>
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
import dynamic from "next/dynamic";

export default function Games() {
    const data = [
        {id:1,name:"Piece Name",desc:"Description goes here",demo:"gamedemocomponent1"},
        {id:2,name:"Piece Name",desc:"Description goes here",demo:"gamedemocomponent2"}
    ];

    return (
        <main className="px-[2em]">
            <h1>Game Development</h1>
            <ul>
                {data.map((entry) => {
                    const DemoComponent = dynamic(() =>
                        import(`../../components/${entry.demo}`).then((module) => {
                            return module.default;
                        }),
                    );

                    return (
                        <div key={entry.id} className="my-[1em]">
                            <h2>{entry.name}</h2>
                            <DemoComponent/>
                            <p>{entry.desc}</p>
                        </div>
                    )
                })}
            </ul>
        </main>
    )
}
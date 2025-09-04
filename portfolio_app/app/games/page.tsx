import dynamic from "next/dynamic";

export default function Games() {
    const data = [
        {id:1,name:"Piece 1 Name",desc:"Description 1 goes here",demo:"gamedemocomponent1"},
        {id:2,name:"Piece 2 Name",desc:"Description 2 goes here",demo:"gamedemocomponent2"},
        {id:3,name:"Piece 3 Name",desc:"Description 3 goes here",demo:"gamedemocomponent2"},
        {id:4,name:"Piece 4 Name",desc:"Description 4 goes here",demo:"gamedemocomponent2"},
        {id:5,name:"Piece 5 Name",desc:"Description 5 goes here",demo:"gamedemocomponent2"},
        {id:6,name:"Piece 6 Name",desc:"Description 6 goes here",demo:"gamedemocomponent2"},
        {id:7,name:"Piece 7 Name",desc:"Description 7 goes here",demo:"gamedemocomponent2"}
    ];

    return (
        <main className="flex flex-col items-center sm:w-2/3 px-[2em]">
            <h1>Game Development</h1>
            <ul className="w-full">
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
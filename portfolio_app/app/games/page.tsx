export default function Games() {
    const data = [
        {id:1,name:"Piece Name",desc:"Description goes here",demo:"gamedemocomponent"},
        {id:1,name:"Piece Name",desc:"Description goes here",demo:"gamedemocomponent"}
    ];

    return (
        <main className="px-[2em]">
            <h1>Game Development</h1>
            <ul>
                {data.map((entry) => {
                    return (
                        <div key={entry.id} className="my-[1em]">
                            <h2>{entry.name}</h2>
                            <component/>
                            <p>{entry.desc}</p>
                        </div>
                    )
                })}
            </ul>
        </main>
    )
}
export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full min-h-[100vh]">
      <div className="flex justify-center items-center w-full h-[33vh] bg-[url('/images/backgrounds/jamesmarkosborne-code-1076536.jpg')] bg-cover">
        <h1 className="text-[5rem] text-center bg-black text-white px-[2rem] py-[1rem] rounded-4xl border-black">Gracie Armour</h1>
      </div>
      <div className="flex justify-center items-center p-[2rem]">
        <p className="sm:w-2/3 text-[1.5rem]">Web developer and aspiring game developer with a history in QA, Technical Writing, and a long list of programming lanugages of all kinds.</p>
      </div>
    </main>
  );
}

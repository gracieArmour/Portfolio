import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full min-h-[100vh]">
      <div className="flex justify-center items-center w-full h-[33vh] bg-[url('/images/backgrounds/jamesmarkosborne-code-1076536.jpg')] bg-cover">
        <h1 className="text-[5rem] bg-black text-white p-[1rem] rounded-4xl border-black">Gracie Armour</h1>
      </div>
    </main>
  );
}

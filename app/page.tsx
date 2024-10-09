import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen text-white bg-zinc-900 flex flex-col justify-center items-center gap-6 md:gap-14">
      <h1 className=" font-extrabold text-5xl md:text-7xl lg:text-9xl">10xdevs</h1>
      <div className="flex gap-10 md:gap-36 text-sm md:text-xl">
        <Link href="" className="font-bold  hover:text-zinc-400">@Nirmit_Saini</Link>
        <Link href="https://aryanyadav-portfolio.netlify.app" className="font-bold hover:text-zinc-400">@Aryan_Yadav</Link>
        <Link href="https://aayushjoshi-12.vercel.app" className="font-bold hover:text-zinc-400">@Aayush_Joshi</Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen text-white bg-zinc-900 flex flex-col justify-center items-center gap-6 md:gap-14">
      <h1 className=" font-extrabold text-5xl md:text-7xl lg:text-9xl">
        10xdevs
      </h1>
      <div className="flex w-full md:justify-center justify-between px-4  md:gap-36 text-sm md:text-xl">
        <Link
          href="https://nirmitsaini.10xdevs.in"
          className="font-bold  hover:text-zinc-400"
        >
          Nirmit Saini
        </Link>
        <Link
          href="https://aryanyadav.10xdevs.in"
          className="font-bold hover:text-zinc-400"
        >
          Aryan Yadav
        </Link>
        <Link
          href="https://aayushjoshi.10xdevs.in"
          className="font-bold hover:text-zinc-400"
        >
          Aayush Joshi
        </Link>
      </div>
    </div>
  );
}

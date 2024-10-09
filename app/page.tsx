import { CardSpotlightDemo } from "@/components/card";


export default function Home() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-center items-center gap-24">
      <h1 className="text-white font-extrabold text-9xl">10xdevs</h1>
      <div className="flex flex-col md:flex-row gap-10 ">
        <CardSpotlightDemo name="Nirmit Saini" src="/nirmitsaini.png"/>
        <CardSpotlightDemo name="Aryan Yadav" src="/aryanyadav.png"/>
        <CardSpotlightDemo name="Aayush Joshi" src="/aayushjoshi.png"/>
      </div>
    </div>
  );
}

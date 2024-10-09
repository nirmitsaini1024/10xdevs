import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";

interface CardSpotlightProps {
  name: string;
  src: string;
}

export function CardSpotlightDemo({ name, src }: CardSpotlightProps) {
  return (
    <CardSpotlight className="h-96 w-auto md:w-[500px] rounded-3xl ">
      <p className="text-xl font-bold relative z-20 text-white">{name}</p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <Image src={src} alt={name} width={1000} height={1000} className="" />
      </div>
    </CardSpotlight>
  );
};
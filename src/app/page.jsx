import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-24 px-20">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-6xl bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">Better design for your digital products.</h1>
        <p className="font-light text-xl">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="bg-green-400 px-5 py-2 cursor-pointer max-w-fit rounded-sm">See Our Works</button>
      </div>
      <div className="flex-1">
        <Image src="/hero.png" alt="HeroImg" width={500} height={500} />
      </div>
    </div>
  );
}

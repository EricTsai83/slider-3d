import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/images/dragon_1.jpg", alt: "Dragon 1", position: 1 },
    { src: "/images/dragon_2.jpg", alt: "Dragon 2", position: 2 },
    { src: "/images/dragon_3.jpg", alt: "Dragon 3", position: 3 },
    { src: "/images/dragon_4.jpg", alt: "Dragon 4", position: 4 },
    { src: "/images/dragon_5.jpg", alt: "Dragon 5", position: 5 },
    { src: "/images/dragon_6.jpg", alt: "Dragon 6", position: 6 },
    { src: "/images/dragon_7.jpg", alt: "Dragon 7", position: 7 },
    { src: "/images/dragon_8.jpg", alt: "Dragon 8", position: 8 },
    { src: "/images/dragon_9.jpg", alt: "Dragon 9", position: 9 },
    { src: "/images/dragon_10.jpg", alt: "Dragon 10", position: 10 },
  ];

  return (
    <div className="w-full h-screen text-center overflow-hidden relative">
      <div
        className="absolute w-[100px] h-[150px] top-[10%] left-[calc(50%-50px)] z-20 transform-style-3d animate-autoRun sm:w-[200px] sm:h-[250px] sm:left-[calc(50%-100px)]"
        style={{ "--quantity": images.length } as React.CSSProperties}
      >
        {images.map((image) => (
          <div
            key={image.position}
            className="absolute inset-0 custom-transform-z-180 sm:custom-transform-z-550"
            style={{ "--position": image.position } as React.CSSProperties}
          >
            <Image src={image.src} alt={image.alt} width={200} height={250} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-max pb-28 flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <h1
            data-content="CSS ONLY"
            className="relative text-6xl sm:text-9xl text-[#25283b] font-bold text-shadow-lg shadow-[#25283b]/50 after:text-outline after:text-transparent after:z-20 after:content-[attr(data-content)] after:absolute after:inset-0"
          >
            CSS ONLY
          </h1>
          <div className="text-white p-5 text-shadow-sm z-20 max-w-none text-center py-0 px-7">
            <h2 className="text-5xl">Eric Tsai</h2>
            <p>
              <b>Web Design</b>
            </p>
          </div>
        </div>

        <div className="bg-[url('/images/model.png')] absolute bottom-0 left-0 w-full h-[75vh] bg-auto bg-top bg-no-repeat z-10"></div>
      </div>
    </div>
  );
}


// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

export function PartnersCarousel({ partners }) {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="px-4 py-8">
      {/* <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-2">
          {partners.map((partner, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="p-2">
                <div className="shadow-sm hover:shadow-md border-0 transition-shadow">
                  <div className="flex flex-col justify-center items-center p-6 aspect-square">
                    <div className="mb-3 text-blue-600 text-3xl">
                      {partner.icon}
                    </div>
                    <h3 className="font-medium text-gray-700 text-sm text-center">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel> */}
    </div>
  );
}
import { Card } from "@/components/ui/card"
import { properties } from "@/constant/data"
import Image from "next/image"


export function PropertyCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
      {properties.map((property, index) => {
        const isLastCard = index === properties.length - 1
        return (
          <Card key={index} className={`relative group cursor-pointer py-0 ${isLastCard ? '' : 'overflow-hidden'}`}>
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-8 left-3 sm:left-4 text-white">
                <div className="text-[10px] sm:text-xs font-semibold mb-1 tracking-wider">{property.label}</div>
                <div className="text-base sm:text-lg lg:text-xl font-bold">{property.title}</div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex gap-1 justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/50"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/50"></div>
              </div>
            </div>
            {/* Message icon - only on last card, positioned to extend outside */}
            {isLastCard && (
              <div
                className="absolute top-4 -right-4 cursor-pointer hover:scale-105 transition-transform"
                style={{
                  width: '50.6px',
                  height: '50.6px',
                  borderRadius: '1400px',
                  border: '1px solid transparent',

                  opacity: 1,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/olubebe/image/upload/v1769989019/Footer_zhum76.png"
                  alt="Message"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </Card>
        )
      })}
    </div>
  )
}

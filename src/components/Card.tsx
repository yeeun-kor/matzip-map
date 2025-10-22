import { BASE_URL } from '@/api/api';
import type { Place } from '@/store/allFoodStore';

interface CardProps {
  data: Place[];
}

export default function Card({ data }: CardProps) {
  return (
    <div className="card-component">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">places</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((place) => (
            <a key={place.id} className="group">
              <img
                alt={place.image.alt}
                src={`${BASE_URL}/${place.image.src}`}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-50 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700 ">{place.title}</h3>
              <p className="mt-1 text-lg  text-gray-900">{place.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Food } from '../App';

interface ListProps {
  allFood: Food[];
}

export default function List({ allFood }: ListProps) {
  return (
    <section className="my-3 border rounded-2xl border-blue-400 items-center gap-3 flex flex-col p-3 justify-center">
      <h2 className="text-4xl font-bold ">맛집 리스트</h2>
      <ul className="flex gap-3 flex-wrap justify-center">
        {allFood.map((elm) => {
          return (
            <li key={elm.id} className="w-[150px] h-[150px] overflow-hidden my-2">
              {elm.title}
              <img
                src={`http://localhost:3000/${elm.image.src}`}
                alt={elm.image.alt}
                className="object-cover"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

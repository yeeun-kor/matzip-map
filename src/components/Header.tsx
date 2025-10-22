import Taco from '../assets/taco.svg?react';
export default function Header() {
  return (
    <header className="flex flex-col justify-center gap-3 items-center">
      <Taco></Taco>
      <h1 className="text-5xl font-bold">맛집 뿌셔뿌셔</h1>
    </header>
  );
}

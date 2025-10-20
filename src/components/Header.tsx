import Taco from '../assets/taco.svg?react';
export default function Header() {
  return (
    <header className="flex flex-col justify-center gap-3">
      <Taco></Taco>
      <h1>오늘 뭐먹지?</h1>
    </header>
  );
}

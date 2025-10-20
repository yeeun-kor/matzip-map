import Taco from '../assets/taco.svg';

export default function Header() {
  return (
    <header className="flex flex-col justify-center gap-3">
      <img src={Taco} alt="오늘뭐먹지아이콘" /> <h1>오늘 뭐먹지?</h1>
    </header>
  );
}

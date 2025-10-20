import Favorite from './components/Favorite';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <div className="border-4  mx-auto my-0">
      <main className="border-amber-300 border-2 justify-center flex w-300px items-center flex-col py-3 px-5 w-[1080px]">
        <Header></Header>
        <Favorite></Favorite>
        <List></List>
      </main>
    </div>
  );
}

export default App;

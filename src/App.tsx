import { useEffect } from 'react';
import { getFoodList } from './api/api';
import Favorite from './components/Favorite';
import Header from './components/Header';
import List from './components/List';
import { usePlaceState } from './store/allFoodStore';

function App() {
  //맛집목록 전체 조회
  const { places, setPlaces } = usePlaceState();
  useEffect(() => {
    //비동기로 불러오기
    const fetchData = async () => {
      const data = await getFoodList();
      setPlaces(data.places);
    };
    fetchData();
  }, []);
  console.log('fetchData:', places);
  return (
    <div className="border-4  mx-auto my-0 ">
      <main className="border-amber-300 border-2 justify-center flex items-center flex-col py-3 px-5 ">
        <Header></Header>
        <Favorite></Favorite>
        <List></List>
      </main>
    </div>
  );
}

export default App;

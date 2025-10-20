import { useEffect, useState } from 'react';
import { getFoodList } from './api/api';
import Favorite from './components/Favorite';
import Header from './components/Header';
import List from './components/List';

export interface Food {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  description: string;
}

export interface FetchFoodData {
  places: Food[];
}
function App() {
  //맛집목록 전체 조회
  const [allFood, setAllFood] = useState<Food[]>([]);
  useEffect(() => {
    //비동기로 불러오기
    const fetchData = async () => {
      const data = await getFoodList();
      setAllFood(data.places);
    };
    fetchData();
  }, []);
  console.log('fetchData:', allFood);
  return (
    <div className="border-4  mx-auto my-0 ">
      <main className="border-amber-300 border-2 justify-center flex items-center flex-col py-3 px-5 ">
        <Header></Header>
        <Favorite></Favorite>
        <List allFood={allFood}></List>
      </main>
    </div>
  );
}

export default App;

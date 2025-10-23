import React, { Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import { usePlaceState, type Place } from './store/allFoodStore.ts';
import { sortPlacesByDistance } from './utils/loc.ts';
const List = React.lazy(() => import('./components/List'));

type Position = {
  latitude: number;
  longitude: number;
};

function App() {
  //zustand로 places객체 상태 데이터 가져오기
  const { places } = usePlaceState();
  //상태관리

  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sortedPlaces, setSortedPlaces] = useState<Place[]>([]); //! 계산 때려서 새롭게 정렬된 전체맛집리스트들

  //- 사용자의 위치를 가져오고 userLocation()함수 호출하는 로직
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null); //정상이니깐 에러는 null
      },
      (error) => {
        setError('위치 정보를 가져올 수 없습니다. ');
        console.log(error.message);
      }
    );
  };

  //useEffect() 로 딱 한번만 실행
  useEffect(() => {
    getUserLocation();
  }, []);

  //! useEffect() 로 위치 정보 알아보고 한번만! 즉시 정렬하기
  useEffect(() => {
    if (position && places.length > 0) {
      const sorted = sortPlacesByDistance(places, position.latitude, position.longitude);
      setSortedPlaces(sorted); // ✅ 로컬 상태만 업데이트
      console.log('✅ 정렬 결과:', sorted);
    } else {
      setSortedPlaces(places);
    }
  }, [position, places]);

  return (
    <div className=" flex flex-col justify-center items-center mx-auto  gap-5">
      <main className="py-3 px-5 ">
        <Suspense fallback={<Loading></Loading>}>
          {/* error가 null이면 성공 아니면 실패 메세지 */}
          {error ? (
            <p>{error}</p>
          ) : position ? (
            <p>현재 위치 : {position.latitude}</p>
          ) : (
            <p>위치 정보 불러오는 중 </p>
          )}
          <Header></Header>
          <List title={'찜한 맛집'} type="FAVORITE" props={sortedPlaces}></List>
          <List title={'맛집 리스트'} type="ALL" props={sortedPlaces}></List>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

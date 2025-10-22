import React, { Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';

//로딩창 구현 lazy,suspense fallback
const List = React.lazy(() => import('./components/List'));

type Position = {
  latitude: number;
  longitude: number;
};

function App() {
  //상태관리
  // position은 객체 처음 로딩 null
  // 에러상태 타입은 null이거나 텍스트값
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);
  //navigator 네비게이터 내장 객체 사용
  //브라우저에서 navigator.geolocation.getCurrentPosition 메서드를 사용해 현재 위치를 가져오는 함수 생성

  //- 사용자의 위치를 가져오고 userLocation()함수 호출하는 로직
  //getCurrentPosition (성공콜백함수, 에러콜백함수)
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
          <List title={'찜한 맛집'} type="FAVORITE"></List>
          <List title={'맛집 리스트'} type="ALL"></List>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

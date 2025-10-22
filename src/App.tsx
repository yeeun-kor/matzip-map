import React, { Suspense } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';

//로딩창 구현 lazy,suspense fallback
const List = React.lazy(() => import('./components/List'));

function App() {
  //navigator 네비게이터 내장 객체 사용
  //브라우저에서 navigator.geolocation.getCurrentPosition 메서드를 사용해 현재 위치를 가져오는 함수 생성
  //coords값만 따로 분리

  //- userLocation 호출하면, 전달받은 position값을 객체타입으로 따로 저장해주는 로직
  const userLocation = (position) => {
    const positionObj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    console.log(positionObj);
  };

  //- 사용자의 위치를 가져오고 userLocation()함수 호출하는 로직
  //getCurrentPosition (성공콜백함수, 에러콜백함수)
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(userLocation);
  };

  getUserLocation();
  return (
    <div className=" flex flex-col justify-center items-center mx-auto  gap-5">
      <main className="py-3 px-5 ">
        <Suspense fallback={<Loading></Loading>}>
          <Header></Header>
          <List title={'찜한 맛집'} type="FAVORITE"></List>
          <List title={'맛집 리스트'} type="ALL"></List>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

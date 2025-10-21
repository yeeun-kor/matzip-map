import React, { Suspense } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';

//로딩창 구현 lazy,suspense fallback
const List = React.lazy(() => import('./components/List'));

function App() {
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

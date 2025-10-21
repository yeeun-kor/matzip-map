import { usePlaceState } from '@/store/allFoodStore';
import { useEffect } from 'react';
import Card from './Card';
import NotFound from './NotFound';
//props로 title에 들어갈 내용 전달받음
//또한 title과 함께 어떤 데이터배열 넣을지
type ListProps = {
  title: string;
  type: 'ALL' | 'FAVORITE';
};

export default function List({ title, type }: ListProps) {
  //Zustand 상태관리
  //전체 맛집 리스트
  const { places, loading, error, fetchPlaces } = usePlaceState();

  //데이터 호출
  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  //전달받은 데이터의 타입에 따라 보여줄 데이터 결정
  const data = type === 'ALL' ? places : undefined;
  
  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center">맛집 불러오는 중...</h2>
      </div>
    );
  }
  if (error!) {
    return <NotFound></NotFound>;
  }
  return (
    <section className="my-3 border-4 rounded-2xl border-orange-400 items-center gap-3 flex flex-col p-3 justify-center ">
      <h2 className="text-4xl font-bold">{title}</h2>

      {/* data 찜한 맛집과 전체맛집 컴포넌트 분리 */}
      {data ? (
        <Card data={data}></Card>
      ) : (
        <div className="p-10 text-center text-gray-500 text-xl">찜한 맛집이 아직 없어요 😢</div>
      )}
    </section>
  );
}

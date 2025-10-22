import { usePlaceState } from '@/store/allFoodStore';
import Card from './Card';
import NotFound from './NotFound';

type ListProps = {
  title: string;
  type: 'ALL' | 'FAVORITE';
};

export default function List({ title, type }: ListProps) {
  //Zustand 상태관리
  const { places, loading, error } = usePlaceState();

  //전달받은 데이터의 타입에 따라 보여줄 데이터 결정
  const data = type === 'ALL' ? places : undefined;

  //상태관리에서 넘어온 로딩화면
  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center">맛집 불러오는 중...</h2>
      </div>
    );
  }
  // 404 에러 발생하면?
  if (error!) {
    return <NotFound></NotFound>;
  }
  return (
    <section className="my-3 border-4 rounded-2xl border-orange-400 items-center gap-3 flex flex-col p-3 justify-center ">
      <h2 className="text-3xl font-Esamanru-Bold">{title}</h2>

      {/* data 찜한 맛집과 전체맛집 컴포넌트 분리 */}
      {data ? (
        <Card data={data}></Card>
      ) : (
        <div className="p-10 text-center text-gray-500 text-xl font-Esamanru-Light">
          찜한 맛집이 아직 없어요 😢
        </div>
      )}
    </section>
  );
}

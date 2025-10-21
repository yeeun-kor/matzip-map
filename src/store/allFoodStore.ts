import { getFoodList } from '@/api/api';
import { create } from 'zustand';
//1. 타입 정의
interface Image {
  src: string;
  alt: string;
}
export interface Place {
  id: string;
  title: string;
  image: Image;
  lat: number;
  lon: number;
  description: string;
}

//2. 상태관리의 타입정의
interface PlaceState {
  places: Place[]; // 처음 초기 상태
  loading: boolean;
  error: string | null;
  fetchPlaces: () => Promise<void>;
  setPlaces: (places: Place[]) => void; // 상태 업데이트 함수
}

//3. create 로 zustand 저장소 만들기
export const usePlaceState = create<PlaceState>((set) => ({
  places: [],
  loading: false,
  error: null,
  setPlaces(places) {
    set({ places });
  },

  //에러와 로딩까지 포함한 비동기처리
  fetchPlaces: async () => {
    //데이터 성공
    set({ loading: true, error: null });
    try {
      const res = await getFoodList();
      set({ places: res.places, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) set({ loading: false, error: error.message });
    }
  },
}));

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
//! 로딩과 에러처리 진행
interface PlaceState {
  places: Place[]; // 처음 초기 상태
  loading: boolean;
  error: string | null;
  fetchPlaces: () => Promise<void>;
  setPlaces: (places: Place[]) => void; // 상태 업데이트 함수
}

//3. create 로 zustand 저장소 만들기
//- store네이밍컨벤션 : use로 시작함
//- 리턴함수 반환값 타입은 PlaceState 인터페이스 사용
//- export const usePlaceState = create<PlaceState>(()=>({}));
export const usePlaceState = create<PlaceState>((set) => ({
  //객체타입으로 배열에 끼워넣을 거니깐
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

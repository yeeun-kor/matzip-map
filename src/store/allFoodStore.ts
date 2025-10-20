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
  setPlaces: (places: Place[]) => void; // 상태 업데이트 함수
}

//3. create 로 zustand 저장소 만들기
//- store네이밍컨벤션 : use로 시작함
//- 리턴함수 반환값 타입은 PlaceState 인터페이스 사용
//- export const usePlaceState = create<PlaceState>(()=>({}));
export const usePlaceState = create<PlaceState>((set) => ({
  //객체타입으로 배열에 끼워넣을 거니깐
  places: [],
  setPlaces(places) {
    set({ places });
  },
}));

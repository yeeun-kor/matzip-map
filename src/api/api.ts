import axios, { AxiosError } from 'axios';
import type { Place } from '../store/allFoodStore';

export const BASE_URL = 'http://localhost:3000';
export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 요청 타임아웃 (5초뒤에 요청 중단해주세요.)
  headers: {
    'Content-Type': 'application/json',
  },
});

interface FetchData {
  places: Place[];
}

export async function getFoodList(): Promise<FetchData> {
  try {
    const response = await instance.get('/places');
    console.log('✅ 전체 맛집 조회 성공:', response.data);
    return response.data; // 응답 데이터를 리턴해야 함
  } catch (error: unknown) {
    //상태 코드별 에러 처리
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      if (status === 404) {
        throw new Error('요청하신 데이터를 찾을 수 없습니다. (404)');
      } else if (status === 500) {
        throw new Error('서버 내부 오류가 발생했습니다. (500)');
      } else {
        throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
      }
    }
    throw error;
  }
}

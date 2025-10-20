import axios from 'axios';
import type { FetchFoodData } from '../App';

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000, // 요청 타임아웃 (5초뒤에 요청 중단해주세요.)
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getFoodList(): Promise<FetchFoodData> {
  try {
    const response = await instance.get('/places');
    console.log('✅ 전체 맛집 조회 성공:', response.data);
    return response.data; // 응답 데이터를 리턴해야 함
  } catch (error) {
    console.error('❌ 전체 맛집 조회 실패:', error);
    throw error;
  }
}

export default function NotFound() {
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          페이지 에러가 발생했습니다.
        </p>
      </div>
    </div>
  );
}

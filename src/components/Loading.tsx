import { ScaleLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="loading my-5 mx-auto flex justify-center flex-col gap-5 items-center">
      <h3 className="text-3xl font-bold">Loading.....</h3>
      <ScaleLoader color="#ffb63b" height={50} margin={3} radius={4} width={10} />
    </div>
  );
}

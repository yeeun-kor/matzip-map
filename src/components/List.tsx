export default function List() {
  return (
    <section className="my-3 border rounded-2xl border-blue-400 w-full max-h-[300px] h-[200px] items-center gap-3 flex flex-col p-3">
      <h2 className="text-4xl font-bold">맛집 리스트</h2>
      <ul className="flex gap-3">
        <li className="bg-amber-300 w-30 h-30">div1</li>
        <li className="bg-amber-300 w-30 h-30">div1</li>
        <li className="bg-amber-300 w-30 h-30">div1</li>
        <li className="bg-amber-300 w-30 h-30">div1</li>
      </ul>{' '}
    </section>
  );
}

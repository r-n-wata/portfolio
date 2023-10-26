function Line({ style }: { style?: string }) {
  return (
    <div className={` w-full h-10 flex justify-center ${style}`}>
      <div className="w-8 h-1 bg-gray-200"></div>
    </div>
  );
}

export default Line;

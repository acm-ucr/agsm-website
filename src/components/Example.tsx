const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-4 rounded-sm bg-gray-300 p-10">
      <div className="w-3/5 bg-blue-700 p-4 text-center text-xs text-white">
        {props.text1}
      </div>
      <div className="flex w-3/5 flex-row gap-4 text-xs">
        <div className="w-full rounded bg-gray-400 p-4 text-center font-bold">
          {props.text2}
        </div>
        <div className="w-full rounded bg-gray-400 p-4 text-center">
          {props.text2}
        </div>
      </div>
      <div className="w-3/5 bg-yellow-500 p-3 text-center text-2xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;

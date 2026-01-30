const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-agsm-blue-100 flex w-2/3 flex-col items-center gap-4 p-10">
      <div className="bg-agsm-blue-200 text-agsm-blue-100 w-1/2 p-5 text-center">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-4">
        <div className="bg-agsm-blue-300 w-full rounded-md p-5 text-center font-extrabold">
          {props.text3}
        </div>
        <div className="bg-agsm-blue-300 w-full rounded-md p-5 text-center">
          {props.text3}
        </div>
      </div>
      <div className="bg-agsm-yellow-200 w-1/2 p-5 text-center text-2xl font-extrabold">
        {props.text2}
      </div>
    </div>
  );
};

export default Example;

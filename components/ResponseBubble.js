import { PulseLoader } from 'react-spinners';

const ResponseBubble = ({ response }) => {
  return (
    <div className="flex justify-center items-center rounded-lg p-2 my-2 w-max max-w-[80%]  bg-gray-200 w-full self-start text-left break-words">
      {response ? response : <PulseLoader color="lightblue" />}
    </div>
  );
};

export default ResponseBubble;

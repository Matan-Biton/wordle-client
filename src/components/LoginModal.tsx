import { useRef } from "react";

interface IProps {
  passNewName: (ref: React.MutableRefObject<HTMLInputElement | null>) => void;
}

export function LoginModal(props: IProps) {
  const { passNewName } = props;

  const inputRef = useRef(null);

  return (
    <div className="p-10 w-screen h-screen absolute flex flex-col justify-center items-center gap-16 z-10 bg-gray-500/90">
      <input type="text" ref={inputRef} placeholder='pass a new name:' />
      <button
        className="p-2 h-fit bg-gray-500 rounded-md border-2 border-black hover:bg-gray-600"
        onClick={() => {
          passNewName(inputRef);
        }}
      >
        SEND
      </button>
    </div>
  );
}

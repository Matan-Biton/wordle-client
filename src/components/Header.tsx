import React from "react";

interface IProps {
  handleHelpModal: (setTo: boolean) => void;
  handleLoginModal: (setTo: boolean) => void;
  userName: string;
  logout: () => void;
}

export function Header(props: IProps): React.ReactElement {
  const { userName, handleHelpModal, handleLoginModal, logout } = props;

  return (
    <header className="bg-teal-500 w-screen min-h-[10vh] flex items-center justify-between px-6 py-2">
      <div className="font-bold">Hello, {userName}</div>
      <div className="font-bold absolute translate-x-[45vw]">Wordle</div>
      <div>
        <button
          className="bg-gray-400 border-2 border-gray-900 rounded-md px-4 hover:bg-gray-500"
          onClick={() => (userName === "Guest" ? handleLoginModal(true) : logout())}
        >
          {userName === "Guest" ? "Login" : "Logout"}
        </button>
        <button
          className="ml-4 bg-gray-400 border-2 border-gray-900 rounded-md px-4 hover:bg-gray-500"
          onClick={() => handleHelpModal(true)}
        >
          Help
        </button>
      </div>
    </header>
  );
}

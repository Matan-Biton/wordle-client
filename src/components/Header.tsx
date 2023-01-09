export function Header() {
    return (
        <header className="bg-teal-500 min-h-[10vh] flex items-center justify-between px-6 py-2">
            <div className="font-bold">Wordle</div>
            <button className=" bg-gray-400 border-2 border-gray-900 rounded-md px-4">Help</button>
        </header>
    )
}
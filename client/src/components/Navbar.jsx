import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


function Navbar({ search, onSearchChange }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-2 flex items-center justify-center">
                <div className="text-4xl mt-4 text-blue-700">Photo Gallery Web App</div>
            </div>

            <div className="relative mx-auto mt-6 flex max-w-6xl items-center justify-center gap-3 px-6">
                <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 ">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search photos"
                        className="w-full bg-transparent outline-none placeholder:text-gray-400"
                    />
                    <CiSearch size={22} className="shrink-0 text-gray-500" />
                </div>

                <button
                    onClick={() => navigate("/favourites")}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm transition hover:bg-red-50  md:absolute md:right-6  cursor-pointer "
                >
                    <FaHeart className="text-red-500" size={17} />
                    <span className="hidden sm:inline">Favourites</span>
                </button>
            </div>
        </>
    )
}

export default Navbar;

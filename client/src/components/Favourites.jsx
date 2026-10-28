import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../configs/store";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { useMemo } from "react";

function Favourites({ search }) {

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const query = search.trim().toLowerCase();

  const searchFavourites = useMemo(() => {
    return favourites.filter((photo) =>
      (photo.author || '').toLowerCase().includes(query)
    )
  }, [favourites, query]) 
  

  if (favourites.length === 0)
    return <p className="mt-20 text-center text-xl font-semibold" >
      No favourites yet.
    </p>;

  return (
    <>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6">
        {searchFavourites.map((photo) => (
          <div
            key={photo?.id}
            className="bg-gray-200 rounded-xl shadow-md overflow-hidden "
          >
            <img
              src={photo?.download_url}
              alt={photo?.author}
              className="w-full h-48  cursor-pointer object-cover"
            />

            <div className="flex items-center justify-between gap-2 p-3">
              <p className="text-xl font-medium text-blue-950">{photo?.author}</p>
              <button
                onClick={() => { dispatch(toggleFavourite(photo)) }}
                className="cursor-pointer"   >
                <FaHeartCircleMinus />
              </button>
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default Favourites;

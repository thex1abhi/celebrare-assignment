
import { FaHeart } from "react-icons/fa";
import useFetchPhotos from "../configs/useFetchPhotos";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../configs/store";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { useMemo } from "react";

function PhotoGallery({ search }) {

    const { photos, loading, error } = useFetchPhotos(
        "https://picsum.photos/v2/list?limit=30"
    );
    
    const query = search.trim().toLowerCase() 

    const filteredPhotos = useMemo(() => {

        return photos.filter((photo) =>
            (photo.author || '').toLowerCase().includes(query)
        )
    }, [photos, query])


    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);

    return (
        <>

            {loading && (
                <p className="mt-20 text-center text-3xl font-semibold">Loading...</p>
            )} 

            {error && (
                <div className="mt-20 text-center">
                    <p className="text-3xl font-semibold text-red-600">Something went wrong.</p>
                    <p className="mt-2 text-lg text-gray-600">Please try again after some time.</p>
                </div>
            )}


            {!loading && !error && filteredPhotos.length === 0 && (
                <p className="mt-20 text-center text-lg text-gray-600" role="status">
                    No photos found{query ? ` for "${search.trim()}"` : ''}.
                </p>
            )}

            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6">
                {filteredPhotos.map((photo) => {
                    const isFav = favourites.some((p) => p.id === photo.id);
                    return (
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
                                    onClick={() => dispatch(toggleFavourite(photo))}
                                    className="cursor-pointer"   >
                                    {isFav ? <FaHeartCircleMinus className="text-black" size={17} /> : <FaHeart
                                        className="text-red-500"
                                        size={17}
                                    />}
                                </button>
                            </div>
                        </div>
                    )
                }
                )}
            </div >

        </>
    )

}

export default PhotoGallery;

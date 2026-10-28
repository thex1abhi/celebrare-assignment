import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function useFetchPhotos(picsumurl) {
    const [photos, setPhotos] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchPhotos() {
            try {
                setloading(true);
                setError(null);
                const response = await axios.get(picsumurl)
                // console.log(response?.data);
                setPhotos(response?.data)
            } catch (error) {
                console.log(error);
                setloading(false)
                setError(error)
            }
            finally { 
                 setloading(false)
            }
        }
        fetchPhotos()

    }, [picsumurl]);

    return { photos, loading, error }

}

export default useFetchPhotos;
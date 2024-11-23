import { useState, useEffect } from "react";
import GetAllStarships from "../services/sw-api";



export default function useStarships(){
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() =>{
        const fetchStarships = async () => {
            setLoading(true); //start loading before fetching
            try {
                const starshipsData = await GetAllStarships();
                setStarships(starshipsData);
            } catch (err) {
                setError(err.message);
                
            } finally{

                setTimeout(() => {
                    setLoading(false); //set loading to false after fetch
                }, 2000); // set time to simulate 2000-second delay
                
            }
        };

        fetchStarships();
    }, []);

    return {starships, loading, error}
}
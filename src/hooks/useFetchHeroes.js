import { useEffect, useState } from "react";

export const useFetchHeroes = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect (()=>{

        

    },[])

    return state;
}

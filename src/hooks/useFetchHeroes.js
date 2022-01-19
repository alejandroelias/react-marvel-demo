import { useEffect, useState } from "react";
import { getCharateres } from "../helpers/getHeroes";

export const useFetchHeroes = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getCharateres()
            .then(heroes => {
                setState({
                    data: heroes,
                    loading: false
                });
            })

    }, []);

    return state;
}

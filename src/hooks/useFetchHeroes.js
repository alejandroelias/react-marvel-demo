import { useState } from "react";

export const useFetchHeroes = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    return state;
}

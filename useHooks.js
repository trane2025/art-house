import { useRef, useEffect } from "react";

export const useUpdateEffect = (fn, deps) => {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            fn()
        }
        else ref.current = true;
    }, deps)
}
import { useEffect, useState } from "react";
import useSSR from "./useSsr";

export const getId = () => {
    return Math.random().toString(32).slice(2, 10);
};

const createElement = (id: string): HTMLElement => {
    const el = document.createElement("div");
    el.setAttribute("id", id);
    return el;
};

const usePortal = (selectId: string = getId()): HTMLElement | null => {
    const id = `mccree-ui-${selectId}`;
    const { isBrowser } = useSSR();
    const [elSnapshot, setElSnapshot] = useState<HTMLElement | null>(
        isBrowser ? createElement(id) : null
    );

    useEffect(() => {
        const hasElement = document.querySelector<HTMLElement>(`#${id}`);
        const el = hasElement || createElement(id);

        if (!hasElement) {
            document.body.appendChild(el);
        }
        setElSnapshot(el);
    }, [id]);

    return elSnapshot;
};

export default usePortal;

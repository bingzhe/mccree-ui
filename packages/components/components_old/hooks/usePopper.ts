/**
 * Create popper, based on `popper.js`
 *
 * const [referenceRef, popperRef] = usePopper({ placement = 'bottom' })
 *
 * <button ref={referenceRef}></button>
 * <div ref={popperRef}>I am popper</div>
 */

import * as React from "react";
import PopperJS from "popper.js";

type REf<R, P> = [React.RefObject<R>, React.RefObject<P>];

function usePopper<Reference, Popper>({
    placement = "bottom",
    positionFixed = true,
    eventsEnabled = true,
    ...otherOptions
}: PopperJS.PopperOptions): REf<Reference, Popper> {
    const popperInstance = React.useRef<PopperJS>(null);
    const referenceRef = React.useRef<Reference>(null);
    const popperRef = React.useRef<Popper>(null);

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    React.useEffect((): (() => void) | void => {
        if (popperInstance.current !== null) {
            popperInstance.current.destroy();
        }

        if (referenceRef.current === null || popperRef.current === null) return;

        // @ts-ignore
        popperInstance.current = new PopperJS(referenceRef.current, popperRef.current, {
            placement,
            positionFixed,
            eventsEnabled,
            ...otherOptions
        });

        return (): void => {
            if (popperInstance.current !== null) {
                popperInstance.current.destroy();
            }
        };
    }, [placement, positionFixed, eventsEnabled, otherOptions]);

    React.useEffect((): void => {
        if (popperInstance.current === null) return;

        if (eventsEnabled) {
            popperInstance.current.enableEventListeners();
        } else {
            popperInstance.current.disableEventListeners();
        }
    }, [popperInstance, eventsEnabled]);

    React.useEffect((): void => {
        if (popperInstance.current !== null) {
            popperInstance.current.scheduleUpdate();
        }
    }, [popperInstance]);

    return [referenceRef, popperRef];
}

export default usePopper;

import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from 'react-dom';

type ReactPortalProps = {
    children: ReactNode,
    wrapperId?: string, // Making wrapperId optional
}

const ReactPortal = ({ children, wrapperId }: ReactPortalProps) => {
    const [wrapper, setWrapper] = useState<Element | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId || 'react-portal'); // Use provided wrapperId or default to 'react-portal'
        let created = false;

        if (!element) {
            created = true;
            const wrapper = document.createElement('div');
            wrapper.setAttribute('id', wrapperId || 'react-portal'); // Use provided wrapperId or default to 'react-portal'
            document.body.appendChild(wrapper);
            element = wrapper;
        }

        setWrapper(element);

        return () => {
            if (created && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (wrapper === null) return null;

    return createPortal(
        children,
        wrapper // Use the dynamically created wrapper
    );
}

export default ReactPortal;

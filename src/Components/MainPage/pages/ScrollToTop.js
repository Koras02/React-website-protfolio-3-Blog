import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation(true);

    useEffect(
        () => {
            window.ScrollToTop(100, 10);
        },
        [pathname]
    );
    return null;
}
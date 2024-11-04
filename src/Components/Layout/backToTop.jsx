'use client'
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-3 rounded-full bg-[#fc7344] text-white shadow-md transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            ↑ Back to Top
        </button>
    );
}

export default BackToTopButton;

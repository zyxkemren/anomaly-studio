import { useEffect, useRef, useState, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export default function useInView(options: UseInViewOptions = {}): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // observer.unobserve(current); // optional: supaya cuma 1x trigger
      }
    }, options);

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}

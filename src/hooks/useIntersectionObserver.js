import { useEffect, useState } from 'react';

const useIntersectionObserver = targetRef => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = targetRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0,
    };
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [targetRef]);
  return isVisible;
};

export default useIntersectionObserver;

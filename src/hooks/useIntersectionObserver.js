import { useEffect, useState } from 'react';

const useIntersectionObserver = targetRef => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0,
    };
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef]);
  return isVisible;
};

export default useIntersectionObserver;

import { useEffect } from 'react';

const useDeslizar = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll('.deslizar');  
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');  
        } else {
          entry.target.classList.remove('visible');  
        }
      });
    }, {
      threshold: 0.1 
    });

    elementos.forEach(elemento => observer.observe(elemento));

    return () => observer.disconnect();
  }, []);  
};

export default useDeslizar

import { useEffect } from "react";
import contactos     from "@/data/pages/contactos"; // Ajusta la ruta según tu estructura de archivos.

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const logo = document.createElement('img');
    logo.src = contactos.logo;
    logo.alt = 'Logo';
    cursor.appendChild(logo);

    let isMouseMoving = false;
    let stopAnimationTimeout;

    const startRotation = () => {
      cursor.classList.add('rotating');
    };

    const stopRotation = () => {
      cursor.classList.remove('rotating');
    };

    const moveCursor = (e) => {
      isMouseMoving = true;
      clearTimeout(stopAnimationTimeout);

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;

      if (!cursor.classList.contains('rotating')) {
        startRotation();
      }

      stopAnimationTimeout = setTimeout(() => {
        isMouseMoving = false;
        stopRotation();
      }, 100); // Detén la rotación 100ms después de que el mouse deje de moverse
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
};

export default Cursor;

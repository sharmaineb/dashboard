// components/MatrixRainfall.js
import { useEffect, useRef } from 'react';

const MatrixRainfall = () => {
  const canvasRef = useRef(null);
  const cardWidth = 400; // Adjust as needed
  const cardHeight = 200; // Adjust as needed
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const columnSize = 20;
  const columnSpeed = 0.5; // Adjust to make the rainfall slower
  let columns = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to match the card dimensions
    canvas.width = cardWidth;
    canvas.height = cardHeight;

    // Calculate number of columns based on card width
    const numColumns = Math.floor(cardWidth / columnSize);

    // Initialize columns
    columns = Array.from({ length: numColumns }, (_, i) => ({
      x: i * columnSize,
      y: Math.random() * -cardHeight,
      length: Math.floor(Math.random() * cardHeight / 20) + 5,
      speed: columnSpeed + Math.random() * 0.5 // Add randomness to the speed
    }));

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw columns
      ctx.fillStyle = '#0F0'; // Green color
      ctx.font = '16px monospace';
      columns.forEach(column => {
        const randChar = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(randChar, column.x, column.y);

        // Move the column down
        column.y += column.speed;

        // Reset column if it reaches the bottom
        if (column.y > cardHeight && Math.random() > 0.95) {
          column.y = 0;
          column.length = Math.floor(Math.random() * cardHeight / 20) + 5;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Cleanup
    return () => cancelAnimationFrame(draw);
  }, []);

  return <canvas ref={canvasRef} style={{ width: cardWidth, height: cardHeight }} />;
};

export default MatrixRainfall;

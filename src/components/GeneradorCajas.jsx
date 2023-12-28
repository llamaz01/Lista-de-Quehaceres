import React, { useState } from 'react';
import styles from "./GeneradorCaja.module.css";


const GeneradorCajas= () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que se haya ingresado un color
    if (!color.trim()) {
      return;
    }

    // Crear un nuevo cuadro con color y tamaño 
    const newBox = {
      color,
      size: size || '80px', 
        };

    // Agregar una nueva caja a las otras cajas
    setBoxes([...boxes, newBox]);

    // Restablecer las entradas de color y tamaño
    setColor('');
    setSize('');
  };

  return (
    <div className={styles.general}>
          <h2>Generador de Caja</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Tamaño:
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <div>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: box.size,
              height: box.size,
              display: 'inline-block',
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GeneradorCajas;

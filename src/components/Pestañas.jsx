import React, { useState } from 'react';
import styles from './Pestañas.module.css';

const Pestañas = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


return (
    <div className={styles.pestañas}>
      <div className={styles.botones}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? styles.active : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.contenido}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
  
};

export default Pestañas;

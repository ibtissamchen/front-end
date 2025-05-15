// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur le Dashboard</h1>
      <div className={styles.cards}>
        <div className={styles.card}>Espace 1</div>
        <div className={styles.card}>Espace 2</div>
        <button
          className={`${styles.card} ${styles.buttonCard}`}
          onClick={() => navigate('/signin')}
        >
          Espace 3 - Se connecter
        </button>
      </div>
    </div>
  );
}

export default Dashboard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/safeshare-logo.png'; // mets le vrai chemin ici
import img1 from '../assets/image1.png';  // image 1
import img2 from '../assets/image2.png';  // image 2

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logoBlock}>
          <img src={logo} alt="SafeShare logo" style={styles.logo} />
        </div>
        <div style={styles.headerButtons}>
          <button style={styles.primaryBtn} onClick={() => navigate('/signup')}>S'INSCRIRE</button>
          <button style={styles.secondaryBtn} onClick={() => navigate('/signin')}>SE CONNECTER</button>
        </div>
      </header>

      {/* TRAIT */}
      <hr style={styles.divider} />

      {/* CONTENU PRINCIPAL */}
      <div style={styles.content}>
        <div style={styles.left}>
          <p style={styles.slogan}>Partager en toute confiance : sécurité maximale, simplicité absolue.</p>
        </div>

        <div style={styles.right}>
          <img src={img1} alt="sécurité" style={styles.image1} />
          <div style={styles.welcomeBlock}>
            <h2 style={styles.welcome}>BIENVENUE</h2>
            <img src={img2} alt="partage" style={styles.image2} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#fff',
    color: '#000',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    alignItems: 'center',
  },
  logoBlock: {
    flex: '0 0 auto',
  },
  logo: {
    height: '80px',
  },
  headerButtons: {
    display: 'flex',
    gap: '1rem',
  },
  primaryBtn: {
    backgroundColor: '#2c66c3',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: '#2c66c3',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  divider: {
    borderTop: '4px solid #000',
    margin: '0 2rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 4rem',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    fontSize: '1.5rem',
    lineHeight: '2.2rem',
  },
  slogan: {
    marginRight: '2rem',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image1: {
    width: '250px',
    height: 'auto',
    marginBottom: '1rem',
    borderRadius: '6px',
  },
  welcomeBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  welcome: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  image2: {
    width: '140px',
    height: 'auto',
    borderRadius: '6px',
  },
};

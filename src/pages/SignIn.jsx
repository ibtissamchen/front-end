import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: appeler le backend pour vérifier
    // Simule connexion réussie
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h2 style={styles.title}>Se connecter</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Connexion</button>
        </form>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#2c2c2c',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(100,108,255,0.5)',
    color: 'white',
  },
  title: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#646cff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '6px',
    backgroundColor: '#646cff',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s',
  },
};

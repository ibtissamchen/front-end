import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, confirmEmail, password, firstName, lastName } = formData;

    if (email !== confirmEmail) {
      return setError("Les emails ne correspondent pas.");
    }

    if (!firstName || !lastName || !email || !password) {
      return setError("Tous les champs sont obligatoires.");
    }

    // TODO: Envoyer les données au backend Flask
    setSuccess("Inscription réussie ! 🎉 (À connecter au backend)");
    setFormData({ firstName: '', lastName: '', email: '', confirmEmail: '', password: '' });
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h2 style={styles.title}>Créer un compte</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirmer l'email"
            value={formData.confirmEmail}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <button type="submit" style={styles.button}>S'inscrire</button>
        </form>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: '450px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#2c2c2c',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(100,108,255,0.5)',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#646cff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#646cff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  error: {
    color: '#ff4d4f',
    fontSize: '0.9rem',
  },
  success: {
    color: '#4caf50',
    fontSize: '0.9rem',
  },
};

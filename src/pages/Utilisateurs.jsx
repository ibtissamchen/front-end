import React from 'react';
import Layout from '../components/Layout';

export default function Utilisateurs() {
  // Données simulées pour l'instant
  const membres = [
    { id: 1, prenom: 'Alice', nom: 'Dupont', role: 'Admin', espace: 'Marketing' },
    { id: 2, prenom: 'Karim', nom: 'Benali', role: 'Membre', espace: 'Développement' },
    { id: 3, prenom: 'Laura', nom: 'Martin', role: 'Invité', espace: 'Finance' },
  ];

  return (
    <Layout>
      <div style={styles.container}>
        <h2 style={styles.title}>Utilisateurs</h2>
        <p style={styles.subtitle}>Gestion des membres et de leurs droits d'accès.</p>

        <div style={styles.actions}>
          <button style={styles.addButton}>+ Ajouter un utilisateur</button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Prénom</th>
              <th style={styles.th}>Nom</th>
              <th style={styles.th}>Rôle</th>
              <th style={styles.th}>Espace</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {membres.map((membre) => (
              <tr key={membre.id}>
                <td style={styles.td}>{membre.prenom}</td>
                <td style={styles.td}>{membre.nom}</td>
                <td style={styles.td}>{membre.role}</td>
                <td style={styles.td}>{membre.espace}</td>
                <td style={styles.td}>
                  <button style={styles.actionBtn}>Modifier</button>
                  <button style={{ ...styles.actionBtn, backgroundColor: '#ff4d4f' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    color: 'white',
    maxWidth: '1000px',
    margin: '2rem auto',
  },
  title: {
    color: '#646cff',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#ccc',
    marginBottom: '1.5rem',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
  },
  addButton: {
    backgroundColor: '#646cff',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#2c2c2c',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    padding: '1rem',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    textAlign: 'left',
    borderBottom: '1px solid #444',
  },
  td: {
    padding: '1rem',
    borderBottom: '1px solid #444',
  },
  actionBtn: {
    marginRight: '0.5rem',
    padding: '0.4rem 0.8rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

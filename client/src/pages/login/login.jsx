import React from 'react';
import styles from './login.module.scss';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className={styles.login}>
      <h2>Login</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="username">Brugernavn: *</label>
        <input type="text" autoComplete="current-username" />
        <label htmlFor="password">Password: *</label>
        <input type="password" autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;

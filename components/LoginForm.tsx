"use client"
// LoginForm.js

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Correct import statement
import React, { useState } from 'react';
import styles from './login.module.css'; // Importing CSS module

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (res?.error) {
        setError("Invalid Credentials!");
        return;
      }
      router.replace("/dashboard"); // Correct route definition
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Enter the Information</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className={styles.input}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
          {error && (
            <div className={styles.error}>{error}</div>
          )}
          <Link href={"/register"}>
            <a className={styles.link}>Don't have an account <span className={styles.underline}>Register</span></a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

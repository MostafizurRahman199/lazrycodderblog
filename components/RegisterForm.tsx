"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './register.module.css';


export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All Fields are necessary");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      });
      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists!!");
        return;
      }

      const res = await fetch('api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      });

      if (res.ok) {
        (e.target).reset();
        router.push("/");
      } else {
        console.log("User registration Failed!")
      }
    } catch (error) {
      console.log("Error during registration", error)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Register</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className={styles.input}
          />
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
          <button className={styles.button}>Register</button>
          {error && (
            <div className={styles.error}>{error}</div>
          )}
          <Link href={"/"} className={styles.link}>
           Already have an account? <span className={styles.underline}>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
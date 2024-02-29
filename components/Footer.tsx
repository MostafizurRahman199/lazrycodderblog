// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container mx-auto px-4 py-8 flex justify-center items-center">
//         <p>© {new Date().getFullYear()} | Made with ❤️ by Lazy Coder</p>
//       </div>

//     </footer>
//   )
// }

import React from "react";
import styles from "./footer.module.css"; // Import CSS module
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMiddle}>
        <div className={styles.infoSection}>
          <h5>Serivces</h5>
          <p>A brief description of your company, its mission, and values.</p>
        </div>
        <div className={styles.infoSection}>
          <h5>Contact Us</h5>
          <ul>
            <li>
              <a href="tel:+1234567890">+8801791604420</a>
            </li>
            <li>
              <a href="mailto:support@example.com">support@example.com</a>
            </li>
          </ul>
        </div>
        <div className={styles.infoSection}>
          <form className="newsletter-form">
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="input-group">
              
              <div className="input-group-text">
              <input id="newsletter1" type="text" placeholder="Email address" />
              <button type="button">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} | Made with ❤️ by Lazy Coder</p>
      </div>
    </footer>
  );
}

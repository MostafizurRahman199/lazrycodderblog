import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <p>© {new Date().getFullYear()} | Made with ❤️ by Lazy Coder</p>
      </div>

    </footer>
  )
}

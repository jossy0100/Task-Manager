// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-dark text-white text-center py-4">
//       <p>&copy; 2025 Task Manager. All Rights Reserved.</p>
//       <a href="/contact" className="text-white me-3">Contact</a>
//       <a href="/privacy" className="text-white me-3">Privacy</a>
//       <a href="/terms" className="text-white">Terms of Service</a>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => (
  <footer className="custom-footer">
    <p>&copy; {new Date().getFullYear()} Task Manager App. Built with ❤️ and Money.</p>
  </footer>
);

export default Footer;
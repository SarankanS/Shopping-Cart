import React from 'react';
import '../styles/footer.css';  // Assuming you want to style it with a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

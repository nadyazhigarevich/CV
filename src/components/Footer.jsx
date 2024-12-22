import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="https://github.com/nadyazhigarevich">GitHub</a>
        <a href="mailto:zhigarevichnadya@gmail.com">zhigarevichnadya@gmail.com</a>
      </div>
      <div className="footer-bottom">
        <p>© Created by Nadezhda Zhigarevich</p>
        <p>2024, BSU</p>
      </div>
      <a className="download" href="./cv_zhigarevich.pdf" download>
        Download
      </a>
    </div>
  );
};

export default Footer;

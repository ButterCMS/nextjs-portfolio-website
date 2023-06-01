// components/Footer.js

const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            (c) {new Date().getFullYear()} David Adeneye
          </p>
          <div className="social_icons">
            <a
              href="https://twitter.com/davidadeneye"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://github.com/daacode"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/david-adeneye-490027188/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
   export default Footer;
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a leading company in providing the best services to our
            customers. Our team is dedicated to ensuring customer satisfaction
            through innovative solutions and exceptional support.
          </p>
        </div> */}
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 GraysLab | All Rights Reserved
      </div>
    </footer>
  );
}

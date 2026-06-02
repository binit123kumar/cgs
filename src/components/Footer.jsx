/**
 * Footer.jsx  –  CGS (Centre for Geographical Studies)
 *
 * STRUCTURE: Identical to akuastrono Footer.jsx
 *   Section 1: AKU logo + contact details
 *   Section 2: Programme list + Social media links
 *   Section 3: Google Maps embed (CGS/AKU campus)
 *
 * DATA CHANGED: CGS contact info, programme names from about.html
 */

import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer-par">

      {/* ── Section 1: Logo + Contact ── */}
      <div className="Footer-first-section">
        <div className="footer-logo-section">
          <img
            src="https://akucgs.vercel.app/images/logo.png"
            alt="Aryabhatta Knowledge University Logo"
          />
          <h1>
            आर्यभट्ट ज्ञान विश्वविद्यालय
            <br />
            Aryabhatta Knowledge University
          </h1>
        </div>
        <div className="footer-contact-section">
          <h1>Centre for Geographical Studies</h1>
          <h1>Info line – 0612-2952752</h1>
          <h1>EMAIL: support@cgspatna.ac.in</h1>
          <h1>
            Address: Ground Floor, Centres of Excellence Building,
            AKU Campus, Mithapur, Patna-800001, Bihar (India)
          </h1>
        </div>
      </div>

      {/* ── Section 2: Programmes + Social ── */}
      <div className="Footer-Second-section">
        <div className="Footer-Program-section">
          <h1>PROGRAMMES</h1>
          <ul>
            <li>
              <Link to="/academic-program/ma-msc-geography">
                M.A./M.Sc. in Geography
              </Link>
            </li>
            <li>
              <Link to="/academic-program/msc-gis-remote-sensing">
                M.Sc. in GIS &amp; Remote Sensing
              </Link>
            </li>
            <li>
              <Link to="/academic-program/pg-diploma-gis">
                PG Diploma – GIS &amp; Remote Sensing
              </Link>
            </li>
            <li>
              <Link to="/academic-program/certificate-gis">
                Certificate – GIS &amp; Remote Sensing
              </Link>
            </li>
            <li>
              <Link to="/academic-program/phd-geography">
                Ph.D. in Geography
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer-Social-section">
          <h1>Follow Us</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Section 3: Google Maps – AKU / CGS Campus ── */}
      <div style={{ width: '100%' }}>
        <iframe
          title="CGS Patna – AKU Campus Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7369481.266118341!2d85.134929!3d25.592302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1716946990588!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}

export default Footer;

/**
 * HeroSection.jsx  –  CGS (Centre for Geographical Studies)
 *
 * STRUCTURE: Identical to akuastrono HeroSection.jsx
 *   - AKU logo + university name (left)
 *   - Azadi@75 / branding image (right)
 *   - Full-width coloured band: "Centre for Geographical Studies"
 *
 * DATA CHANGED: heading text updated to CGS identity
 */

import React from 'react';
import '../Styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero flex alignCenter justifyCenter width100">
      <div className="heroContainer width100 flex alignCenter justifyStart flexColumn">

        {/* ── Top bar: logo + university name + flag badge ── */}
        <div className="heroNav width95 maxWidth flex alignCenter spaceBtw">
          <div className="heroLogo flex alignCenter justifyCenter gap1">
            {/* AKU official logo – hosted on shared CDN */}
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

          {/* Azadi@75 / branding badge (right side) */}
          <div className="heroImage">
            <img
              src="https://akucgs.vercel.app/images/aajaditwo.png"
              alt="Azadi Ka Amrit Mahotsav"
            />
          </div>
        </div>

        {/* ── Centre name banner ── */}
        <div className="heading width100 flex alignCenter justifyCenter">
          <div className="headContainer width95 maxWidth flex alignCenter justifyCenter">
            <h1>Centre for Geographical Studies</h1>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

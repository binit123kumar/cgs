/**
 * Faculty.jsx  –  CGS (Centre for Geographical Studies)
 *
 * STRUCTURE: Identical to akuastrono Faculty.jsx
 *   Each person rendered in a .Faculty-box card with image,
 *   name, designation, email, and contact number.
 *
 * DATA CHANGED: CGS faculty & staff from cgs-main/founder.html
 *   and known CGS personnel records.
 */

import React from 'react';
import '../Styles/Faculty.css';

// ── Faculty images (hosted on shared CDN / public folder) ──
// Replace these paths with your actual image locations.
const directorImg = 'https://akucgs.vercel.app/images/director_img_150.png';
const facultyImg  = 'https://akucgs.vercel.app/images/faculty.jpg';

function Faculty() {
  return (
    <>
      {/* ── Director ── */}
      <div className="Faculty-box">
        <h1>Director</h1>
        <img src={directorImg} alt="Dr. Poornima Sekhar Singh – Director, CGS" />
        <h3>Dr. Poornima Sekhar Singh</h3>
        <h3>Founding Director, Centre for Geographical Studies</h3>
        <h3>Aryabhatta Knowledge University Campus, Mithapur, Patna-800001</h3>
        <h3>Email – director@cgspatna.ac.in</h3>
        <h3>Contact No. – 9471007084</h3>
      </div>

      {/* ── Faculty ── */}
      <div className="Faculty-box">
        <h1>Faculty</h1>
        <img src={facultyImg} alt="Faculty – CGS" />
        <h3>Faculty positions are being filled as per Bihar Government recruitment norms.</h3>
        <h3>
          For faculty-related enquiries, please contact:{' '}
          <a href="mailto:support@cgspatna.ac.in">support@cgspatna.ac.in</a>
        </h3>
      </div>

      {/* ── Administrative Staff ── */}
      <div className="Faculty-box">
        <h1>Administrative Staff</h1>
        <h3>Office – Centre for Geographical Studies</h3>
        <h3>
          Ground Floor, Centres of Excellence Building,
          AKU Campus, Mithapur, Patna-800001
        </h3>
        <h3>Phone – 0612-2952752</h3>
        <h3>Email – support@cgspatna.ac.in</h3>
      </div>
    </>
  );
}

export default Faculty;

/**
 * About.jsx  –  CGS (Centre for Geographical Studies)
 *
 * STRUCTURE: Identical to akuastrono About.jsx
 * DATA CHANGED: CGS about text from cgs-main/about.html
 */

import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <div className="About-par">
      <h1 className="About-heading">About Us</h1>
      <p className="About-detail">
        The Centre For Geographical Studies (CGS) came into existence vide Bihar
        Government notification 15/P 5-09/2016 va'k-193, Date 09.02.2018 as an autonomous
        institute affiliated to Aryabhatta Knowledge University. However, vide Bihar
        Government notification 15/M 1-69/2021 – 1997, dated September 20th, 2021, the
        Centre for Geographical Studies is now a constituent unit of the Aryabhatta
        Knowledge University.
      </p>
      <br />
      <p className="About-detail">
        The Centre for Geographical Studies was established as a centre of excellence by
        the Bihar Government with the basic objectives of teaching, training, and
        undertaking research in the areas of Geographical Studies. The first enrollment in
        Ph.D. was taken in the session 2020-21 and the second enrollment for Ph.D. was
        taken in the session 2021-22. Presently, total 08 Research Scholars are doing
        research in the Centre.
      </p>
      <br />
      <p className="About-detail">
        The first batch of M.A./M.Sc. in Geography was launched in 2022. M.Sc. in GIS and
        Remote Sensing, PG Diploma, and Certificate courses in GIS and Remote Sensing will
        be started in the near future once regular teaching positions are filled.
      </p>
      <br />
      <p className="About-detail">
        The Centre aims to become a premier and prestigious institute of Geographical
        Studies in the Bihar region. The growing need for quality education in the field
        of Geographical Studies and research led the Government of Bihar to establish the
        Centre for Geographical Studies as an institution of higher learning.
      </p>
    </div>
  );
}

export default About;

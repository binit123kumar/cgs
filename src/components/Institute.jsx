/**
 * Institute.jsx  –  CGS (Centre for Geographical Studies)
 *
 * STRUCTURE: Identical to akuastrono Institute.jsx
 *   ┌─────────────────────────────────────┐
 *   │  Row 1: [Carousel]  [News & Ann.]   │
 *   │  Row 2: [Imp.Links] [About text]    │
 *   └─────────────────────────────────────┘
 *
 * DATA CHANGED:
 *   - News & Announcements → CGS admissions, prospectus, reports
 *   - Important Links      → CGS ordinances and admission procedure
 *   - About text           → CGS history and objectives
 */

import React from 'react';
import '../Styles/Institute.css';
import Carousels from './Carousels';
import ImportantBox from './ImportantBox';

// ── Box headings ────────────────────────────────────────
const BoxHeading       = 'News & Announcements';
const BoxHeadingSecond = 'Important Links';

// Animated "NEW" gif badge (shared CDN)
const NewBadgeImage = 'https://akucgs.vercel.app/assets/new.gif';

// ── News & Announcements data (CGS) ─────────────────────
const NewsAndAnnouncement = [
  {
    id: 0,
    NewsName: 'Admission 2024-25 – CGS Patna',
    href: 'http://cgspatna.ac.in/administration/',
  },
  {
    id: 1,
    NewsName: 'CGS Prospectus 2024 (PDF)',
    href: '/CGS_Prospectus.pdf',
  },
  {
    id: 2,
    NewsName: 'Annual Report 2023 (PDF)',
    href: '/Annual_Report_2023.pdf',
  },
  {
    id: 3,
    NewsName: 'Annual Report 2022 (PDF)',
    href: '/ANNUAL_REPORT_2022.pdf',
  },
  {
    id: 4,
    NewsName: 'M.A./M.Sc. Geography – Batch 2022 Launched',
    href: '/academic-program/ma-msc-geography',
  },
  {
    id: 5,
    NewsName: 'Ph.D. Enrollment 2021-22 Open',
    href: '/academic-program/phd-geography',
  },
];

// ── Important Links data (CGS) ───────────────────────────
const ImportantLinks = [
  {
    id: 0,
    NewsName: 'Ordinance – M.A./M.Sc. Geography',
    href: '/ordinance_ma_msc.pdf',
  },
  {
    id: 1,
    NewsName: 'Ordinance – M.Sc. GIS & Remote Sensing',
    href: '/Ordinance_MSc_GIS.pdf',
  },
  {
    id: 2,
    NewsName: 'Ordinance – PG Diploma GIS & RS',
    href: '/Ordinance_PG_Diploma_GIS.pdf',
  },
  {
    id: 3,
    NewsName: 'Ordinance – Certificate GIS & RS',
    href: '/Ordinance_Certificate_GIS.pdf',
  },
  {
    id: 4,
    NewsName: 'Ph.D. Coursework Syllabus (PDF)',
    href: '/coursework_syllabus.pdf',
  },
];

// ────────────────────────────────────────────────────────
function Institute() {
  return (
    <>
      <div className="Institute-tab">

        {/* ── Row 1: Carousel + News Box ── */}
        <div className="Institute-tab-one">
          <Carousels />
          <ImportantBox
            NewsAndAnnouncement={NewsAndAnnouncement}
            Image={NewBadgeImage}
            BoxHeading={BoxHeading}
          />
        </div>

        {/* ── Row 2: Important Links Box + About Text ── */}
        <div className="Institute-tab-two">
          <ImportantBox
            NewsAndAnnouncement={ImportantLinks}
            Image={NewBadgeImage}
            BoxHeading={BoxHeadingSecond}
          />

          <div className="Institute-tab-content" style={{ marginLeft: '10px' }}>
            {/* CGS About Text – mapped from cgs-main/about.html */}
            <h3 style={{ textAlign: 'justify' }}>
              The Centre For Geographical Studies (CGS) came into existence vide
              Bihar Government notification 15/P 5-09/2016 va'k-193, Date 09.02.2018
              as an autonomous institute affiliated to Aryabhatta Knowledge University.
              Vide Bihar Government notification 15/M 1-69/2021 – 1997, dated September
              20th, 2021, CGS is now a constituent unit of the Aryabhatta Knowledge
              University.
            </h3>
            <br />
            <h3 style={{ textAlign: 'justify' }}>
              The Centre was established as a centre of excellence by the Bihar Government
              with the basic objectives of teaching, training, and undertaking research in
              the areas of Geographical Studies. The first Ph.D. enrollment was in session
              2020-21 and the second in 2021-22. Presently, eight research scholars are
              conducting research at the Centre.
            </h3>
            <br />
            <h3 style={{ textAlign: 'justify' }}>
              The first batch of M.A./M.Sc. in Geography was launched in 2022. M.Sc.
              in GIS and Remote Sensing, PG Diploma, and Certificate courses in GIS and
              Remote Sensing will be started in the near future once regular teaching
              positions are filled. The Centre aims to become a premier institute of
              Geographical Studies in the Bihar region.
            </h3>
          </div>
        </div>

      </div>
    </>
  );
}

export default Institute;

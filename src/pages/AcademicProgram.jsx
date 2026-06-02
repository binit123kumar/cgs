/**
 * AcademicProgram.jsx  –  CGS (NEW page – replaces separate course HTML files)
 *
 * Uses useParams() to serve all 5 CGS academic programmes from a single
 * dynamic route: /academic-program/:programId
 *
 * Content is mapped directly from:
 *   coursePages/ma-msc-geography.html
 *   coursePages/msc-remote-sensing.html
 *   coursePages/pg-remote-sensing.html
 *   coursePages/certificate-remote-sensing.html
 *   coursePages/phd-geography.html
 *
 * STRUCTURE: Uses .About-par / .AimdBox styling pattern from akuastrono.
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/About.css';
import '../Styles/Aim.css';

// ── Programme data map (content from coursePages/*.html) ─────────────────────
const programs = {
  'ma-msc-geography': {
    title: 'M.A./M.Sc. in Geography',
    pdfLink: '/images/ma-msc.pdf',
    content: (
      <>
        <p>
          The 2-year (Four Semester) Post Graduate Degree course M.A./M.Sc. in
          Geography and Environmental Studies under the{' '}
          <strong>Choice Based Credit System (CBCS)</strong>.
        </p>
        <br />
        <h3>Ordinance Reference</h3>
        <p>
          The ordinance and regulations of M.A./M.Sc. are adopted from the common
          ordinance of Universities of Bihar from the Governor's Secretariat, Bihar,
          via Memo No. Estb. PREAMBLE: 40/2017-1457/GS(I), Dated 29-05-2018.
        </p>
        <br />
        <p>
          The CBCS provides an opportunity for students to choose courses from
          prescribed lists comprising core, elective, and ability enhancement courses.
          The grading system followed is considered better than the conventional marks
          system. This enables uniformity across Bihar universities, cross-institutional
          mobility, and easier assessment by potential employers using the Cumulative
          Grade Point Average (CGPA).
        </p>
      </>
    ),
  },

  'msc-gis-remote-sensing': {
    title: 'M.Sc. in GIS & Remote Sensing',
    pdfLink: '/assets/Ordinance_MSc_GIS.pdf',
    content: (
      <>
        <h3>Nomenclature</h3>
        <p>
          This ordinance may be called the "Ordinance for Admission to M.Sc.
          (Geographic Information System &amp; Remote Sensing) programme in the Centre
          for Geographical Studies of Aryabhatta Knowledge University, Patna."
        </p>
        <br />
        <ol>
          <li>
            Eligibility for admission, admission policy and procedure shall be decided
            from time to time by the Court of Aryabhatta Knowledge University, Patna
            (AKU Patna).
          </li>
          <li>
            The normal duration of the M.Sc. (GIS &amp; Remote Sensing) programme,
            including project work, shall be four semesters (two years), extendable to
            a maximum of six semesters (three years) on case-to-case approval.
          </li>
          <li>
            Award of M.Sc. (GIS &amp; Remote Sensing) shall be in accordance with
            University regulations.
          </li>
          <li>
            The University will conduct this course at its headquarters and in viable
            affiliated institutions from Session 2021-22.
          </li>
          <li>The Court of the University has the right to modify any regulations.</li>
        </ol>
      </>
    ),
  },

  'pg-diploma-gis': {
    title: 'Post Graduate Diploma in GIS & Remote Sensing',
    pdfLink: '/assets/Ordinance_PG_Diploma_GIS.pdf',
    content: (
      <>
        <h3>Nomenclature</h3>
        <p>
          This ordinance may be called the "Ordinance for Admission to Post Graduate
          Diploma (Geographic Information System &amp; Remote Sensing) programme in the
          Centre for Geographical Studies of Aryabhatta Knowledge University, Patna."
        </p>
        <br />
        <ul>
          <li>
            Eligibility, admission policy, and procedure shall be decided from time to
            time by the Court of AKU Patna.
          </li>
          <li>
            Duration: two semesters (one year), extendable up to three semesters (one
            year and six months). Project work may be done in industry/approved
            organisations.
          </li>
          <li>Award shall be in accordance with University regulations.</li>
          <li>Course conducted at AKU headquarters from Session 2022-23.</li>
          <li>The Court of the University has the right to modify regulations.</li>
        </ul>
      </>
    ),
  },

  'certificate-gis': {
    title: 'Certificate Programme in GIS & Remote Sensing',
    pdfLink: '/assets/Ordinance_Certificate_GIS.pdf',
    content: (
      <>
        <h3>Nomenclature</h3>
        <p>
          This ordinance may be called the "Ordinance for Admission to Certificate
          (Geographic Information System &amp; Remote Sensing) programme in the Centre
          for Geographical Studies of Aryabhatta Knowledge University, Patna."
        </p>
        <br />
        <ol>
          <li>
            Eligibility for admission shall be decided from time to time by the Court
            of AKU Patna.
          </li>
          <li>
            Duration: one semester (six months), extendable to a maximum of one
            additional semester.
          </li>
          <li>Award shall be in accordance with University regulations.</li>
          <li>Course conducted from Session 2022-23.</li>
          <li>The Court of the University has the right to modify regulations.</li>
        </ol>
      </>
    ),
  },

  'phd-geography': {
    title: 'Ph.D. in Geography',
    pdfLink: '/assets/coursework-syllabus7.pdf',
    content: (
      <>
        <h3>Centre for Geographical Studies – Ph.D. Programme</h3>
        <p>
          Common Ordinance and Regulations for the award of Ph.D. degree as per the
          University Grants Commission (Minimum Standards and Procedure for Award of
          Ph.D. Degree) Regulations 2016 for all Universities of Bihar (except BAU,
          Sabour).
        </p>
        <p style={{ fontSize: '0.9em', color: '#888', marginTop: '6px' }}>
          Source: Governor's Secretariat, Bihar, letter No.
          BSU-05/2010-2684/GS(I) dated 21.09.2017 and amendments via Memo No.
          BSU(Regulation)-05/2010-323O/GS(I), dated 18-12-2018.
        </p>
        <br />
        <h3>Mode of Admission</h3>
        <p>
          The subject-wise merit list will be prepared on a scale of 100 including:
        </p>
        <ul>
          <li>Marks in Master's Degree: maximum weightage of 70 marks</li>
          <li>PAT/NET/BET/JRF: maximum weightage of 10 marks</li>
          <li>Interview: 20 marks</li>
        </ul>
        <p>
          Candidates will be selected following the prescribed reservation rules of
          the Bihar Government.
        </p>
      </>
    ),
  },
};

// ── Component ────────────────────────────────────────────────────────────────
function AcademicProgram() {
  const { programId } = useParams();
  const program = programs[programId];

  // Graceful 404 fallback
  if (!program) {
    return (
      <div className="About-par" style={{ textAlign: 'center' }}>
        <h2>Programme Not Found</h2>
        <p>
          The programme you are looking for does not exist.{' '}
          <Link to="/">Go Home</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="AimdBox" style={{ padding: '30px' }}>
      <h1 className="main-heading">{program.title}</h1>
      <hr className="heading-underline" />

      <div className="AimContent">
        {program.content}
      </div>

      {/* PDF Download Button */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a
          href={program.pdfLink}
          download
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#2e6b3e',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '1rem',
          }}
        >
          📄 View / Download Ordinance (PDF)
        </a>
      </div>
    </div>
  );
}

export default AcademicProgram;

import React from "react";
import "../Styles/Staff.css";

import {
  FaUserGraduate,
  FaUniversity,
  FaAward,
  FaMedal,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const facultyData = [
  {
    name: "Dr. Dayanand Kumar",
    image: "../images/dayanand.png", // Replace with actual image
    designation: "Social Scientist, IERARD, Patna",
    email: "dayanand@akubihar.ac.in",

    qualifications: [
      {
        icon: <FaUserGraduate />,
        text: "B.A. (Hons.) Geography, B.H.U. Varanasi",
      },
      {
        icon: <FaUniversity />,
        text: "M.A. Geography, B.H.U. Varanasi",
      },
      {
        icon: <FaAward />,
        text: "JRF / SRF (UGC)",
      },
      {
        icon: <FaMedal />,
        text: "Ph.D. Veer Kunwar Singh University, Ara",
      },
    ],
  },

  {
    name: "Dr. Angad Yadav",
    image: "../images/angad.png",
    designation: "Assistant Faculty",
    email: "angad@akubihar.ac.in",

    qualifications: [
      {
        icon: <FaUserGraduate />,
        text: "B.A. (Hons.) Geography, Patna College, Patna",
      },
      {
        icon: <FaUniversity />,
        text: "M.A. Geography, Patna University",
      },
      {
        icon: <FaAward />,
        text: "NET (UGC)",
      },
      {
        icon: <FaMedal />,
        text: "Ph.D. Veer Kunwar Singh University, Ara",
      },
    ],
  },

  {
    name: "Dr. Rabindra Paswan",
    image: "../images/rabindra.png",
    designation: "Assistant Faculty",
    email: "rabindra@akubihar.ac.in",

    qualifications: [
      {
        icon: <FaUserGraduate />,
        text: "B.A. (Hons.) Geography, B.V.U. Hazaribag",
      },
      {
        icon: <FaUniversity />,
        text: "M.A. Geography, M.G.U. Meghalaya",
      },
      {
        icon: <FaAward />,
        text: "JRF (UGC)",
      },
      {
        icon: <FaMedal />,
        text: "Ph.D. Geography, Magadh University",
      },
    ],
  },
];

function Staff() {
  return (
    <section className="faculty-section">
      <h2 className="section-title">Our Faculty Staff</h2>

      <div className="faculty-wrapper">
        {facultyData.map((member, index) => (
          <div className="faculty-card" key={index}>
            {/* Header */}
            <div className="card-header">
              <img src={member.image} alt={member.name} />
            </div>

            {/* Body */}
            <div className="card-body">
              <h3>{member.name}</h3>

              <p className="designation">
                <FaBriefcase className="title-icon" />
                {member.designation}
              </p>

              <table className="info-table">
                <tbody>
                  {member.qualifications.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <span className="icon">{item.icon}</span>
                        <span>{item.text}</span>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td>
                      <FaEnvelope className="icon" />

                      <a href={`mailto:${member.email}`}>
                        {member.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Staff;
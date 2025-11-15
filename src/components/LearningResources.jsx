import React from "react";

const LearningResources = () => {
  const sections = [
    {
      title: "PW Books",
      links: [
        "NEET Books",
        "IIT JEE Books",
        "School Prep Books",
        "PW Stationery",
        "UPSC CSE Books",
        "PW Merchandise",
        "NDA/Defence Books",
        "GATE Books",
        "Device Courses",
        "CUET Books",
        "CA/Finance Books",
        "UPPSC Books",
        "RRB Books",
        "BPSC Books",
        "SSC Books",
        "MPSC Books",
        "MPPSC Books",
        "Banking Books",
      ],
    },
    {
      title: "Notes (Class 10–12)",
      links: [
        "Class 10 Maths Notes",
        "Class 10 Chemistry Notes",
        "Class 10 Physics Notes",
        "Class 10 Biology Notes",
        "Aptitude & Reasoning",
        "Class 10 Geography",
        "Physics Class 11 Notes",
        "Chemistry Class 11 Notes",
        "Maths Class 11 Notes",
        "Zoology Class 11",
        "Botany Class 11",
        "Physics Class 12 Notes",
        "Chemistry Class 12 Notes",
        "Maths Class 12 Notes",
        "Zoology Class 12",
        "Botany Class 12",
      ],
    },
    {
      title: "Notes (Class 6–9)",
      links: [
        "Class 6 Theory & Notes",
        "Maths Notes for Class 7",
        "Science Notes for Class 7",
        "Class 8 Maths Notes",
        "Class 8 Chemistry Notes",
        "Class 8 Physics Notes",
        "Class 8 Biology Notes",
        "Class 8 SST Notes",
        "Class 9 Chemistry Notes",
        "Class 9 Biology Notes",
      ],
    },
    {
      title: "Govt Exams",
      links: [
        "SSC Exam",
        "Banking Exam",
        "Teaching Exams",
        "JAIIB CAIIB Exams",
        "Railway Exams",
        "Judiciary Exams",
        "State PSC Exams",
        "Agriculture Exams",
      ],
    },
    {
      title: "NCERT Solutions",
      links: [
        "NCERT Solutions for Class 6",
        "NCERT Solutions for Class 7",
        "NCERT Solutions for Class 8",
        "NCERT Solutions for Class 9",
        "NCERT Solutions for Class 10",
        "NCERT Solutions for Class 11",
        "NCERT Solutions for Class 12",
      ],
    },
    {
      title: "Entrance Exams",
      links: [
        "GATE Exam",
        "IIT JEE Exam",
        "NEET Exam",
        "CUET Exam",
        "CSIR-NET Exam",
        "MBA Exam",
        "Nursing Exam",
      ],
    },
    {
      title: "Other Websites",
      links: [
        "PW Store",
        "PW Skills",
        "PWOnlyIAS",
        "MedEd",
        "PW Gulf",
        "PW IOI",
        "CuriousJr",
      ],
    },
    {
      title: "Govt Job Exams Coaching",
      links: [
        "SSC Online Coaching",
        "Bank Exam Coaching",
        "TET Coaching",
        "JAIIB & CAIIB Coaching",
        "Bihar Exam Coaching",
        "Agriculture Exam Coaching",
      ],
    },
    {
      title: "Class 6th–12th Online Coaching",
      links: [
        "Class 12 Online Coaching",
        "Class 11 Online Coaching",
        "Class 10 Online Coaching",
        "Class 9 Online Coaching",
        "Class 8 Online Coaching",
      ],
    },
    {
      title: "UPSC Coaching",
      links: [
        "UPSC Online Coaching",
        "UPSC Hybrid Coaching",
        "State PSC Coaching",
        "UPPSC Coaching",
        "BPSC Coaching",
      ],
    },
    {
      title: "Defence Exam Coaching",
      links: [
        "NDA Coaching",
        "CDS Coaching",
        "SSB Coaching",
        "Agniveer Coaching",
        "CDS Offline Coaching",
      ],
    },
    {
      title: "GATE Exam Coaching",
      links: [
        "Civil Engineering Coaching",
        "Mechanical Engineering Coaching",
        "CS Coaching",
        "ECE Coaching",
        "EE Coaching",
      ],
    },
    {
      title: "Other Exams",
      links: [
        "CA Exam",
        "Company Secretary Exam",
        "Olympiad Exam",
        "Online Degree",
        "ACCA Exam",
      ],
    },
    {
      title: "Offline Centres",
      links: [
        "Vidyapeeth",
        "OnlyIAS UPSC Centres",
        "Superclass",
        "Govt Coaching Centres",
        "Defence Coaching Centres",
      ],
    },
    {
      title: "Formulas",
      links: [
        "Science Formulas",
        "Chemistry Formulas",
        "Physics Formulas",
        "Maths Formulas",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
      <h2 className="text-2xl font-bold text-center mb-2">
        Learning Resources
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Explore our collection of study materials, notes, solutions, and
        coaching resources.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-indigo-600 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningResources;

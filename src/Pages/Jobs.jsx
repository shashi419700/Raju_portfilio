// pages/Jobs.jsx
import React from "react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      location: "Bangalore, India",
      type: "Full Time",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "React Developer",
      location: "Hyderabad, India",
      type: "Remote",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Software Engineer",
      location: "Pune, India",
      type: "Hybrid",
    },
    {
      id: 4,
      company: "Meta",
      role: "UI Engineer",
      location: "Mumbai, India",
      type: "Full Time",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Recommended Jobs 💼</h1>
      <p style={styles.subHeading}>
        Find your dream job and apply instantly
      </p>

      <div style={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <h2 style={styles.role}>{job.role}</h2>

            <h3 style={styles.company}>{job.company}</h3>

            <p style={styles.info}>
              <FaMapMarkerAlt /> {job.location}
            </p>

            <p style={styles.info}>
              <FaBriefcase /> {job.type}
            </p>

            <button style={styles.button}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#F3F2EF",
    minHeight: "100vh",
  },

  heading: {
    color: "#0A66C2",
    fontSize: "36px",
    marginBottom: "10px",
    textAlign: "center",
  },

  subHeading: {
    textAlign: "center",
    color: "#555",
    marginBottom: "30px",
    fontSize: "18px",
  },

  jobList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  role: {
    color: "#0A66C2",
    marginBottom: "8px",
  },

  company: {
    color: "#222",
    marginBottom: "15px",
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#666",
    marginBottom: "10px",
  },

  button: {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0A66C2",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Jobs;
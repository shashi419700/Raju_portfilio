
// pages/Network.jsx
import React from "react";
import { FaUserPlus } from "react-icons/fa";

const Network = () => {
  const connections = [
    {
      id: 1,
      name: "Aman Verma",
      role: "Frontend Developer",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "UI/UX Designer",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      role: "Backend Engineer",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Mobile App Developer",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Network</h1>
      <p style={styles.subHeading}>Connect with professionals and grow your network 🚀</p>

      <div style={styles.grid}>
        {connections.map((user) => (
          <div key={user.id} style={styles.card}>
            <img src={user.image} alt={user.name} style={styles.image} />
            <h3>{user.name}</h3>
            <p style={styles.role}>{user.role}</p>

            <button style={styles.button}>
              <FaUserPlus />
              Connect
            </button>
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
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    color: "#0A66C2",
    marginBottom: "10px",
  },

  subHeading: {
    color: "#555",
    marginBottom: "30px",
    fontSize: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  image: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "15px",
  },

  role: {
    color: "gray",
    marginBottom: "20px",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0A66C2",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Network;
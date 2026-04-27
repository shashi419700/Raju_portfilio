// pages/Messages.jsx
import React from "react";

const Messages = () => {
  const chats = [
    {
      id: 1,
      name: "Aman Verma",
      message: "Hey, let's connect for React project!",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: 2,
      name: "Priya Sharma",
      message: "UI design discussion tomorrow 🎨",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      message: "Backend API is ready 🚀",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Messages</h1>

      {chats.map((chat) => (
        <div key={chat.id} style={styles.chatCard}>
          <img src={chat.image} alt={chat.name} style={styles.image} />

          <div>
            <h3>{chat.name}</h3>
            <p style={styles.message}>{chat.message}</p>
          </div>
        </div>
      ))}
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
    marginBottom: "20px",
  },
  chatCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "white",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  message: {
    color: "gray",
  },
};

export default Messages;
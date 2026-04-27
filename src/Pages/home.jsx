import React, { useState } from "react";
import {
  FaSearch,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaComments,
  FaBell,
  FaThumbsUp,
  FaCommentDots,
  FaShare,
  FaImage,
  FaVideo,
} from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/navbar"; 
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Shashi Kumar",
      role: "React Developer | Android Enthusiast",
      profile:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      content:
        "Excited to build my new LinkedIn Clone project using React JS 🚀",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      likes: 120,
      comments: 24,
    },
    {
      id: 2,
      name: "Tech Innovator",
      role: "Software Engineer",
      profile:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      content:
        "Networking and learning new technologies is the key to growth 💼",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      likes: 89,
      comments: 15,
    },
  ]);

  return (
    <div style={styles.app} bax>
      {/* Navbar */}
     <Header />

      {/* Main Layout */}
      <div style={styles.main}>
        {/* Left Sidebar */}
        <div style={styles.sidebar}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            style={styles.profilePic}
          />
          <h3>Shashi Kumar</h3>
          <p>Full Stack Developer</p>
          <hr />
          <p>Connections: 500+</p>
          <p style={{ color: "#0A66C2", cursor: "pointer" }}>
            Grow your network
          </p>
        </div>

        {/* Feed */}
        <div style={styles.feed}>
          {/* Post Creator */}
          <div style={styles.postBox}>
            <input
              type="text"
              placeholder="Start a post..."
              style={styles.postInput}
            />
            <div style={styles.postOptions}>
              <PostOption icon={<FaImage color="blue" />} text="Photo" />
              <PostOption icon={<FaVideo color="green" />} text="Video" />
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} style={styles.postCard}>
              <div style={styles.postHeader}>
                <img
                  src={post.profile}
                  alt="profile"
                  style={styles.postProfile}
                />
                <div>
                  <h4>{post.name}</h4>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    {post.role}
                  </p>
                </div>
              </div>

              <p style={{ margin: "15px 0" }}>{post.content}</p>

              <img
                src={post.image}
                alt="post"
                style={styles.postImage}
              />

              <div style={styles.postStats}>
                <span>{post.likes} Likes</span>
                <span>{post.comments} Comments</span>
              </div>

              <div style={styles.actions}>
                <ActionBtn icon={<FaThumbsUp />} text="Like" />
                <ActionBtn icon={<FaCommentDots />} text="Comment" />
                <ActionBtn icon={<FaShare />} text="Share" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div style={styles.rightSidebar}>
          <h3>LinkedIn News</h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>React Developers in demand 🚀</li>
            <li>AI transforming jobs 🤖</li>
            <li>Top startups hiring now 💼</li>
            <li>Remote jobs growing 🌍</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <div style={styles.navItem}>
    {icon}
    <span>{text}</span>
  </div>
);

const PostOption = ({ icon, text }) => (
  <div style={styles.postOption}>
    {icon}
    <span>{text}</span>
  </div>
);

const ActionBtn = ({ icon, text }) => (
  <button style={styles.actionBtn}>
    {icon}
    <span>{text}</span>
  </button>
);

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F3F2EF",
    minHeight: "100vh",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 100,
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#EEF3F8",
    padding: "8px 12px",
    borderRadius: "5px",
  },
  searchInput: {
    border: "none",
    background: "transparent",
    outline: "none",
    marginLeft: "8px",
  },
  navRight: {
    display: "flex",
    gap: "25px",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "gray",
    cursor: "pointer",
    fontSize: "14px",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    height: "fit-content",
  },
  profilePic: {
    width: "80px",
    borderRadius: "50%",
  },
  feed: {
    width: "550px",
  },
  postBox: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  postInput: {
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    border: "1px solid gray",
    outline: "none",
  },
  postOptions: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  },
  postOption: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
  postCard: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  postHeader: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  postProfile: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  postImage: {
    width: "100%",
    borderRadius: "10px",
    marginTop: "10px",
  },
  postStats: {
    display: "flex",
    justifyContent: "space-between",
    color: "gray",
    marginTop: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
  actionBtn: {
    border: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    color: "gray",
    fontSize: "16px",
  },
  rightSidebar: {
    width: "250px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    height: "fit-content",
  },
};

export default App;
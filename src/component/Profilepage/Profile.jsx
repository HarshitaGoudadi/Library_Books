import React, { useState } from "react";
import "./profile.css";
import Nav from "../Navbar/Nav";

const Profile = () => {
  const currentUser = {
    name: "",
    language: "English",
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    currentUser.language
  );

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
  };

  //Getting data from local storage
  function getAllLocalStorageData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      data[key] = value;
    }
    return data;
  }

  // Usage
  const allData = getAllLocalStorageData();
  const formDataObject = JSON.parse(allData.formData);

  //sign out
  const handleSignOut = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "100px",
          left: "42%",
          position: "absolute",
        }}
      >
        {" "}
        <h1>Profile Page</h1>
      </div>
      <div className="profile-page">
        <h2>Welcome, {formDataObject.username} </h2>
        <h3>Personal Information</h3>
        <p>Name: {formDataObject.username}</p>
        <p>Email: {formDataObject.email}</p>

        <p>Language Preference: {selectedLanguage}</p>
        <label htmlFor="language-select">
          Change Language:
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>

        <br></br>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </>
  );
};

export default Profile;

import React, { useState } from "react";
import { BooksData } from "./BooksData";
import "./home.css";
import Nav from "./../Navbar/Nav";

const Homepage = () => {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");

  //Light and dark theme
  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //For search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //filter the books based on title and author
  const filteredBooks = BooksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav />

      <div className={`theme-toggle ${theme}`}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <div className="theme-block">
            <span>Light</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />
              <span className="slider round"></span>
            </label>
            <span>Dark</span>
          </div>
        </div>
        <br></br>

        <div className="main">
          <div className="table-data">
            <table
              border={"2px solid black"}
              cellPadding={"5px"}
              cellSpacing={"1px"}
            >
              <tr style={{ border: "2px solid gray" }}>
                <th style={{ border: "2px solid gray" }}>Id</th>
                <th style={{ border: "2px solid gray" }}>Title</th>
                <th style={{ border: "2px solid gray" }}>Author</th>
                <th style={{ border: "2px solid gray" }}>Description</th>
                <th style={{ border: "2px solid gray" }}>Available</th>
              </tr>
              {filteredBooks.map((x) => (
                <tr style={{ border: "2px solid gray" }}>
                  <td style={{ width: "5%", border: "2px solid gray" }}>
                    {x.id}
                  </td>
                  <td style={{ width: "10%", border: "2px solid gray" }}>
                    {x.title}
                  </td>
                  <td style={{ width: "10%", border: "2px solid gray" }}>
                    {x.author}
                  </td>
                  <td style={{ width: "50%", border: "2px solid gray" }}>
                    {x.discription}
                  </td>
                  <td style={{ width: "10%", border: "2px solid gray" }}>
                    {x.available} {x.available ? "Available" : "Not available"}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

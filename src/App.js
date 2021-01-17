import React, { useState } from "react";
import "./index.css";
import data from "./data.js";
import userImage from "./images/user-image.png";

function App() {
  const [people, setPeople] = useState(data);

  const removeOne = (id) => {
    setPeople((old) => {
      let newP = old.filter((person) => person.id !== id);
      return newP;
    });
  };

  const Item = () => {
    return people.map((person) => {
      return (
        <section key={person.id}>
          <div className="side-part">
            <img src={userImage} alt="user image" />
          </div>
          <div className="wider-part">
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
          <button className="single-btn" onClick={() => removeOne(person.id)}>
            remove
          </button>
        </section>
      );
    });
  };

  return (
    <div className="card">
      <h1>{people.length} birthdays today</h1>
      <Item />
      <button className="all-btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}

export default App;

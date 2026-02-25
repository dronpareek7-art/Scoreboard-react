import React, { useState } from "react";
import "./scoreboard.css";
const Scoreboard = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [score, setScore] = useState("");
  const [player, setPlayer] = useState([]);
  const [country, setCountry] = useState("");

  function Addscore() {
    const obj = {
      id: Date.now(),
      Country: country,
      FullName: first + " " + last, 
      Score: Number(score),
    };
    setPlayer([...player, obj]);
    console.log(obj);
    setFirst("")
    setLast("")
    setCountry("")
    setScore("")
  }

  function DeletePlayer(PlayerToDelete) {
    setPlayer(
      player.filter((obj) => {
        return obj.id !== PlayerToDelete;
      }),
    );
  }
  function PlusFive(id) {
    setPlayer(
      player.map((obj) =>
        obj.id === id ? { ...obj, Score: obj.Score + 5 } : obj,
      ),
    );
  }

  function MinusFive(id) {
  setPlayer(
    player.map((obj) =>
      obj.id === id ? { ...obj, Score: obj.Score > 0 ? obj.Score -5 :0 } : obj
    )
  );
}

const sortedPlayer = [...player].sort((a,b)=> b.Score - a.Score)    

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter first name"
          onChange={(e) => setFirst(e.target.value)}
          value={first}
        />
        <input
          type="text"
          placeholder="Enter last name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <select
          name=""
          id=""
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Pakistan">Pakistan</option>
          <option value="South Africa">South Africa</option>
          <option value="New Zealand">New Zealand</option>
        </select>
        <input
          type="number"
          placeholder="Enter your score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={Addscore}> Add score</button>
      </div>
      <ul>
        {sortedPlayer.map((obj) => {
          return (
            <li key={obj.id}>
              <span>{obj.FullName}</span>
              <span>{obj.Country}</span>
              <span>{obj.Score}</span>
              <button onClick={(e) => DeletePlayer(obj.id)}>Delete</button>
              <button onClick={() => PlusFive(obj.id)}>+5</button>
              <button onClick={() => MinusFive(obj.id)}>-5</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Scoreboard;

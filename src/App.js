// 1) Function ile yazilmis versiya

// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [data, setData] = useState(0);

//   function artirmaq() {
//     setData(data + 1);
//   }
//   function azaltmaq() {
// if (data > 0)
//     setData(data - 1);
//   }

//   return (
//     <>
//       <h1>Datalar:{data}</h1>

//       <button onClick={artirmaq}>+</button>
//       <button onClick={azaltmaq}>-</button>
//     </>
//   );
// }

// export default App;

//2) Arrow Function ile yazilmis versiya
// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [data, setData] = useState(0);

//   const artirmaq = () => {
//     setData((prev) => prev + 1);
//   };

//   const azaltmaq = () => {
//     if (data > 0) setData((prev) => prev - 1);
//   };

//   return (
//     <>
//       <h1>Datalar:{data}</h1>

//       <button onClick={artirmaq}>+</button>
//       <button onClick={azaltmaq}>-</button>
//     </>
//   );
// }

// export default App;

// 3) To do list app

// import React, { useState } from "react";

// const App = () => {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editTask, setEditTask] = useState("");

//   const addTodo = () => {
//     if (task.trim() !== "") {
//       setTodos([...todos, task]);
//       setTask("");
//     }
//   };

//   const DeleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   const startEdit = (index) => {
//     setEditIndex(index);
//     setEditTask(todos[index]);
//   };

//   const saveEdit = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[editIndex] = editTask;
//     setTodos(updatedTodos);
//     setEditIndex(null);
//     setEditTask("");
//   };

//   return (
//     <>
//       <div>To do list</div>

//       <input
//         placeholder="Enter the name"
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {editIndex === index ? (
//               <>
//                 <input
//                   type="text"
//                   value={editTask}
//                   onChange={(e) => setEditTask(e.target.value)}
//                 />
//                 <button onClick={() => saveEdit(index)}>Save</button>
//               </>
//             ) : (
//               <>
//                 {todo}
//                 <button onClick={() => startEdit(index)}>Edit</button>
//                 <button onClick={() => DeleteTodo(index)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// 4) Simple Calculator App` (Eval istifade edilerek)

// import React, { useState } from "react";

// const App = () => {
//   const [display, setDisplay] = useState("");

//   const handleClick = (value) => {
//     setDisplay(display + value);
//   };
//   const clearDisplay = () => {
//     setDisplay("");
//   };
//   const calculate = () => {
//     try {
//       setDisplay(eval(display).toString());
//     } catch (error) {
//       setDisplay("Error");
//     }
//   };

//   return <>
//   <h1>Calculator</h1>
//   <div className="screen">{display || "0"}</div>
//   <div className="buttons">

//     <button onClick={() => {handleClick("1")}}>1</button>
//     <button onClick={() => {handleClick("2")}}>2</button>
//     <button onClick={() => {handleClick("3")}}>3</button>
//     <button onClick={() => {handleClick("+")}}>+</button>
//     <br />
//     <button onClick={() => {handleClick("4")}}>4</button>
//     <button onClick={() => {handleClick("5")}}>5</button>
//     <button onClick={() => {handleClick("6")}}>6</button>
//     <button onClick={() => {handleClick("-")}}>-</button>
//     <br />
//     <button onClick={() => {handleClick("7")}}>7</button>
//     <button onClick={() => {handleClick("8")}}>8</button>
//     <button onClick={() => {handleClick("9")}}>9</button>
//     <button onClick={() => {handleClick("*")}}>*</button>
//     <br />
//     <button onClick={clearDisplay}>C</button>
//     <button onClick={() => {handleClick("0")}}>0</button>
//     <button onClick={calculate}>=</button>
//     <button onClick={() => {handleClick("/")}}>/</button>
//   </div>

//   </>;
// };

// export default App;

//5) Notes App with Local Storage

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const saveNotes = JSON.parse(localStorage.getItem("notes"));
//     if (saveNotes) {
//       setNotes(saveNotes);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const addNote = () => {
//     if (note.trim() !== "") {
//       setNotes([...notes, note]);
//       setNote("");
//     }
//   };

//   const deleteNote = (index) => {
//     setNotes(notes.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       App
//       <h1>Notes App</h1>
//       <textarea
//         placeholder="Write your note..."
//         value={note}
//         onChange={(e) => setNote(e.target.value)}
//         rows="3"
//         style={{ width: "100%", padding: "10px" }}
//       ></textarea>
//       <button onClick={addNote}>Add Note</button>
//       <ul>
//         {notes.map((n, index) => (
//           <li key={index}>
//             {n}
//             <button onClick={() => deleteNote(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import bubbleSort from "../src/Bubble";

// ======================= WEATHER APP =======================
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      // 1) City → Coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found");
        setWeather(null);
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      // 2) Coordinates → Weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode,
      });

      setError("");
    } catch {
      setError("Network Error");
      setWeather(null);
    }
  };

  return (
    <div className="card glass tilt">
      <h2>🌤 Weather App</h2>

      <input
        type="text"
        className="input"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn neon" onClick={getWeather}>
        Search
      </button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-box">
          <h3>{weather.city}</h3>
          <p>🌡 Temp: {weather.temp}°C</p>
          <p>🌬 Wind: {weather.wind} m/s</p>
        </div>
      )}
    </div>
  );
};

// ========================== MAIN APP ==========================
const App = () => {
  // 1) COUNTER (Function version)
  const [data1, setData1] = useState(0);

  const artirmaq1 = () => setData1(data1 + 1);
  const azaltmaq1 = () => data1 > 0 && setData1(data1 - 1);

  // 2) TODO LIST
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (i) => setTodos(todos.filter((_, idx) => idx !== i));
  const startEdit = (i) => {
    setEditIndex(i);
    setEditTask(todos[i]);
  };
  const saveEdit = () => {
    const updated = [...todos];
    updated[editIndex] = editTask;
    setTodos(updated);
    setEditIndex(null);
    setEditTask("");
  };

  // 3) CALCULATOR
  const [display, setDisplay] = useState("");

  const handleClick = (v) => setDisplay(display + v);
  const clearDisplay = () => setDisplay("");
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  // 4) NOTES APP (LocalStorage)
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  const deleteNoteLS = (i) => setNotes(notes.filter((_, idx) => idx !== i));

  return (
    <>
      <bubbleSort />

      <div className="container">
        <h1 className="main-title">React Projects — Modern Glass UI</h1>

        <div className="grid">
          {/* WEATHER */}
          <WeatherApp />

          {/* COUNTER */}
          <div className="card glass tilt">
            <h2>🔥 Counter</h2>
            <h1 className="counter-value">{data1}</h1>

            <button className="btn success" onClick={artirmaq1}>
              +
            </button>
            <button className="btn danger" onClick={azaltmaq1}>
              -
            </button>
          </div>

          {/* TODO LIST */}
          <div className="card glass tilt wide">
            <h2>📝 Todo List</h2>

            <input
              className="input"
              placeholder="Add task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button className="btn primary" onClick={addTodo}>
              Add
            </button>

            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="todo-item">
                  {editIndex === index ? (
                    <>
                      <input
                        className="input small"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                      />
                      <button className="btn success small" onClick={saveEdit}>
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{todo}</span>
                      <button
                        className="btn warning small"
                        onClick={() => startEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn danger small"
                        onClick={() => deleteTodo(index)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CALCULATOR */}
          <div className="card glass tilt">
            <h2>🧮 Calculator</h2>
            <div className="screen">{display || "0"}</div>

            <div className="calc-grid">
              {[
                "1",
                "2",
                "3",
                "+",
                "4",
                "5",
                "6",
                "-",
                "7",
                "8",
                "9",
                "*",
                "C",
                "0",
                "=",
                "/",
              ].map((btn, i) => (
                <button
                  key={i}
                  className="btn calc"
                  onClick={() => {
                    if (btn === "C") return clearDisplay();
                    if (btn === "=") return calculate();
                    handleClick(btn);
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* NOTES */}
          <div className="card glass tilt wide">
            <h2>🗒 Notes</h2>

            <textarea
              className="textarea"
              placeholder="Write note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button className="btn primary" onClick={addNote}>
              Add Note
            </button>

            <ul className="note-list">
              {notes.map((n, index) => (
                <li key={index} className="note-item">
                  {n}
                  <button
                    className="btn danger small"
                    onClick={() => deleteNoteLS(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

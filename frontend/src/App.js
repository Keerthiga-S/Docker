import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://backend:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "25px" }}>
      <h1>Frontend is Running 🚀</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

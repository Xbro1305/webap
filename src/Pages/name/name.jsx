import React, { useState } from "react";
import "./name.css";
import { useNavigate } from "react-router-dom";

export const Name = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(false);
  return (
    <div className="name">
      <h1>How do we address you?</h1>
      <p>This name will be seen by other users</p>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="name"
        placeholder="So what's your name..."
      />
      <button onClick={() => navigate("/choosing")} disabled={value ? false : true}>
        Next
      </button>
    </div>
  );
};

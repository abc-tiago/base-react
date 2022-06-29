import React from "react";
import { useNavigate } from "react-router-dom";

function Qrcode() {
  let navigate = useNavigate();
  return (
    <div>
      Not found{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Volvar
      </button>
    </div>
  );
}

export default Qrcode;

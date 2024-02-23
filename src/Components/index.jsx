import { useEffect, useState } from "react";
import "./styles.css";

const index = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorNumber = (length) => {
    return Math.floor(Math.random() * length);
  };
  const createRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorNumber(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  };

  const createRandomRgbColor = () => {
    const r = randomColorNumber(256);
    const g = randomColorNumber(256);
    const b = randomColorNumber(256);

    setColor(`rgb(${r},${g},${b})`);

    console.log(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") createRandomHexColor();
    else createRandomRgbColor();
  }, [typeOfColor]);
  return (
    <div style={{ background: color }} className="container">
      <div className="buttons">
        <button className='hex_button' onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button className="rgb_button" onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button className="randomColor_button"
          onClick={
            typeOfColor === "hex" ? createRandomHexColor  : createRandomRgbColor
          }
        >
          Create Random Color
        </button>
      </div>

      <div className="colorNames">
        <h1>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default index;

import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordion() {
  const [selected, setSelected] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  const handleSelection = (id) => {
    let newSelection = [...selected];
    if (newSelection.includes(id)) {
      console.log(newSelection);
      let index = newSelection.indexOf(id);
      newSelection.splice(index, 1);
    } else {
      if (multiSelect === true) {
        newSelection.push(id);
      } else {
        newSelection = [id];
      }
    }
    setSelected(newSelection);
  };

  return (
    <div className="wrapper">
      <h1 className="header">1. ACCORDION</h1>
      <h3>
        This is how an Accordion works. When the button is selected, multiple
        accordions can be viewed at once. If its disabled, only one can be
        viewed at a time.
      </h3>
      <div className="accordion">
        <button
          className="button"
          onClick={() => {
            setMultiSelect(!multiSelect);
          }}
        >
          {multiSelect === true ? "Disable " : "Enable "}Multi Select
        </button>
        {data.map((data) => (
          <div className="item">
            <div onClick={() => handleSelection(data.id)} className="title">
              <h3>{data.question}</h3>
              <span>+</span>
              {selected.length > 0 && selected.indexOf(data.id) != -1 ? (
                <div>{data.answer}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

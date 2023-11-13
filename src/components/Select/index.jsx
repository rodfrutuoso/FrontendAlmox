import { Container } from "./styles";
import React, { useState } from "react";

export function Select({ title, lista }) {
  const [selectedValue, setSelectedValue] = useState(title);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container selectedValue={selectedValue}>
      <div className="select">
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="default" selected>
            {title}
          </option>
          {lista.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}

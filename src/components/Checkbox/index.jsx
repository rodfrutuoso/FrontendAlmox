import { CheckboxInput, CheckboxLabel, CheckboxContainer } from "./styles";
import React, { useState } from 'react';


export function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <CheckboxContainer>
            <CheckboxLabel>
                Selecionar tudo
                <CheckboxInput
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />

            </CheckboxLabel>
        </CheckboxContainer>
    );
};
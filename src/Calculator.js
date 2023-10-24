import { useState, useEffect } from "react";
import CalculatorInputs from "./CalculatorInputs";
import Result from "./Result";

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");
    const [operatorValue, setOperatorValue] = useState("");
    const [resultInput, setResultInput] = useState("");

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                inputToPush();
            }
        };
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [inputValue]);

    const handleInput = (input) => {
        setInputValue(input);
    }

    const handleOperator = (operator) => {
        setOperatorValue(operator);
    }

    const inputToPush = () => {
        setResultInput(inputValue);
        setInputValue("");
    }

    return(
        <>
            <div className="main">
                <div className="top"></div>
                <div className="section-item">
                    <CalculatorInputs input={inputValue} onInput={handleInput} onOperator={handleOperator} />
                </div>
                <div className="section-item">
                    <Result pushOperator={operatorValue} pushInput={resultInput}/>
                </div>
            </div>
            <div className="instructions">
                <h3>Instructions</h3>
                <ul>
                    <li>1. Enter the first value in the input and press enter to validate</li>
                    <li>2. Click on one of the operators</li>
                    <li>3. Enter the second value in the input and press enter to validate</li>
                </ul>
            </div>
        </>
    );
}

export default Calculator
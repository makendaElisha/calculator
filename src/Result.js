import { useEffect, useState } from "react";

function Result({ pushOperator, pushInput}) {
    const [firstInput, setFirstInput] = useState(null);
    const [secondInput, setSecondInput] = useState(null);
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState("");

    useEffect(() => {
        if (!firstInput || !operation) {
            setFirstInput(pushInput);
        } else if (!secondInput) {
            setSecondInput(pushInput)
            calculateResult(pushInput);
        } else {
            setFirstInput(pushInput);
            setSecondInput(null);
            setOperation(null);
        }
        
    }, [pushInput]);

    useEffect(() => {
        if (firstInput && secondInput && result) {
            setFirstInput(result);
            setSecondInput(null);
            setResult(null);

        } else if (firstInput && !secondInput) {
            setOperation(pushOperator);
        }
        
    }, [pushOperator]);

    function calculateResult(newSecondInput) {
        let result;

        switch (operation) {
            case '+':
                result = parseInt(firstInput) + parseInt(newSecondInput);
                break;
            case '-':
                result = parseInt(firstInput) - parseInt(newSecondInput);
                break;
            case '*':
                result = parseInt(firstInput) * parseInt(newSecondInput);
                break;
            case '/':
                result = parseInt(firstInput) / parseInt(newSecondInput);
                break;
        
            default:
                result = null;
                break;
        }

        setResult(result);
    }
    

    return (
        <div className="input-container">
            <div>
                {firstInput || operation || secondInput ? (
                    <>
                        {firstInput && <span>{firstInput}</span>} 
                        {operation && <span>{operation}</span>} 
                        {secondInput && <span>{secondInput}</span>}
                    </>
                ) : (
                    <span>0</span>
                )}
            </div>
            <div className="result">
                <span>Result: {result ?? 0}</span>
            </div>
        </div>
    )
}

export default Result;
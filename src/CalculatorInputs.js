const CalculatorInputs = ({input, onInput, onOperator}) => {

    const operations = ['+', '-', '*', '/'];

    const handleChange = (e) => {
        const newValue = e.target.value;
        onInput(newValue);
    }

    const handleClick = (op) => {
        onOperator(op);
    }

    return (
        <div className="input-container">
            <input 
                className="inputValue" 
                onChange={handleChange} 
                type="number" 
                name="number" 
                value={input ?? ''} 
            />
            <div className="operation-container">
                {operations.map(op => (
                    <button key={op} onClick={() => handleClick(op)} className="operation-item">
                        { op }
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CalculatorInputs;
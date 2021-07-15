const inputsAreValid = (...input) => input.every(n => typeof n === 'number' && !isNaN(n));

export default inputsAreValid;
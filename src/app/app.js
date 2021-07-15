import inputsAreValid from './utils/input-are-valid';
import parseInput from './utils/parse-inputs';

const run = (alertService, componentService) => {
    alertService.hideError();

    componentService.onClick(() => {
        alertService.hideError();
        const inputs = componentService.getInputs();
        const parsedInput = parseInput(...inputs);

        if (inputsAreValid(...parsedInput)) {
            const [a, b] = parsedInput;
            componentService.setResult(a + b);
        } else {
            componentService.setResult('');
            alertService.handleAdditionError(inputs, parsedInput);
        }
    });
};

export default run;
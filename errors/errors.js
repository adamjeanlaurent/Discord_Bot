exports.invalidArg = (argumentName, expectedArgumentType) => {
    let errorMessage = `Invalid Argument: {${argumentName}}\n`;
    errorMessage += `Expected ${expectedArgumentType}`;
    return errorMessage;
}

exports.invalidNumOfArgs = (numOfExpectedArgs, listOfArgs) => {
    let errorMessage = '';
    errorMessage += `Error! Expected ${numOfExpectedArgs} Arguments\n`;
    errorMessage += `Arguments: {${listOfArgs}}`;
    return errorMessage;
}

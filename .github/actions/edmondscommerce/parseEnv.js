const fs = require('fs');
const dotenv = require('dotenv');
const core = require('@actions/core');

module.exports = ({github, context, envFile}) => {
    dotenv.config({ path: envFile });
    const returnedMap = {};
    for (const key in dotenv.parsed) {
        const value = dotenv.parsed[key];
        const lowercase_key = key.toLocaleLowerCase()
        returnedMap[lowercase_key] = value;
    }
    for (const key in returnedMap) {
        const value = returnedMap[key];
        core.setOutput(key, value);
    }
}
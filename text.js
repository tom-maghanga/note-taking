import fs from 'node:fs/promises';

const readPJson = async () => {
    const pjsonPath = new URL('./package.json', import.meta.url).pathname;
    // Remove the leading '/' from the pathname
    const correctedPath = pjsonPath.substring(1);
    console.log(JSON.parse(await fs.readFile(correctedPath, 'utf-8')));
}

const writePJson = async () => {
    const demoPath = new URL('./demo.js', import.meta.url).pathname;
    // Remove the leading '/' from the pathname
    const demoCorrected = demoPath.substring(1);
    console.log(await fs.writeFile(demoCorrected, `console.log("Hi from demo.js")`));
}
// readPJson();
writePJson();

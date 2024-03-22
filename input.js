const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("¿Cuál es tu nombre? ", nombre => {
    console.log(`Hola, ${nombre}!`);
    readline.close();
});
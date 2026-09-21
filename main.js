const fs = require('fs');

function ladeFahrraeder(pfad) {
    const rohdaten = fs.readFileSync(pfad, 'utf-8');
    return JSON.parse(rohdaten);
}

const fahrraeder = ladeFahrraeder('fahrraeder.json');
console.log(fahrraeder);
//Ich habe Schuhgröße 43

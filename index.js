const objet = require ('./information'); 
const cowsay = require ('cowsay');

const message = `Bonjour, je m'appelle ${objet.name} et je suis au campus ${objet.campus}`;
const cowMessage = cowsay.say({ text: message });

console.log(cowMessage);

let rabbits = {};
rabbits.speak = function(line){
    console.log(`The rabbit says "${line}" `);
}
function speak(line){
    consoke.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type:white, speak};
let hungryRabbit = {type:hungry, speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
"how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
    }
    normalize.call({coords: [0, 2, 3], length: 5});
    
class Rabbit{
    constructor(type){
        type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit(killer);
let blackRabbit = new Rabbit(killer);
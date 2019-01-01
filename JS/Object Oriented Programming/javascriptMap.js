let ages = new Map();
ages.set("Borris",29);
ages.set("Liang",22);
ages.set("Julia",62);

function listAges(newAges){
    newAges.map(a=>{
        console.log(a);
    });
}
listAges(ages);
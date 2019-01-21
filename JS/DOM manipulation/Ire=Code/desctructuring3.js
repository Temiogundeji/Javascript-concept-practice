const settings = {
    speed: 150
}
const { speed, width } = settings; 
console.log(width);

//width undefined

const settings = {
    speed: 150
}
const { speed = 750, width = 500 } = settings;
console.log(speed); // 150 - comes from settings object
console.log(width); // 500 - fallback to default

// Careful: null and undefined
// One thing to note here is that this isn’t 100% the same as this old trick used to fallback when settings.speed is not set:

const mySpeed = 0;
const speed = mySpeed || 760; 
console.log(speed); // 760!

//Why? Because ES6 destructuring default values only kick in if the value is undefined. null, false and 0 are all still values!

const { dogName = 'snickers' } = { dogName: undefined }
console.log(dogName) // what will it be? 'snickers'!

const { dogName = 'snickers' } = { dogName: null }
console.log(dogName) // what will it be? null!

const { dogName = 'snickers' } = { dogName: false }
console.log(dogName) // what will it be? false!

const { dogName = 'snickers' } = { dogName: 0 }
console.log(dogName) // what will it be? 0!


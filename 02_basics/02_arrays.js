const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Himanshu"))
console.log(Array.from({name: "himanshu"})) // not returning an array, need to specify what to convert in array weather it is key or pair



const student = {
    name: "badol",
    id:121,
    address:"saver",
    friends:["badol","khan","rana"],
    car:{
        brand:"tesla",
        prices:4000,
        made:2025,
       menufa: {
        bang:"bangladesh"
       }
    }
}
console.log(student.car.menufa)

// for of loop

const numbers = [45,11,22,33,5,85,44]
for(const number of numbers){
    console.log(number)
}
const products = [
    {id:1,name:"redmi",price:1400},
    {id:2,name:"samsung",price:1500},
    {id:3,name:"iphone",price:1600},
    {id:4,name:"nokea",price:1700},
    {id:5,name:"realme",price:1800},
    {id:6,name:"itel",price:1900},
]
// for(const product of products){
//     console.log(product)
// }

// find a array of object in function

function matchedProducts (product , search){
    const matched = []
    for(const product of products){
       if(product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        matched.push(product)
       }
    }
    return matched
}

const result = matchedProducts(products,"Itel")
console.log(result)

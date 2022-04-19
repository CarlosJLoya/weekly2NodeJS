//Crenado objeto con propiedades

const myObject = {
    name: "Carlos",
    edad: 29,
    blog: {
        url: "https://github.com/CarlosJLoya/apuntes",
        posts: 5,
    }

}

console.log(myObject)
console.log(myObject.name)
console.log(myObject["name"])

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function () {
        console.log("Soy el ajolonauta")
    },
    tellMeMore: function () {
        console.log(`Ajolonauta: ${this.name}`)
    },
}

console.log("Ajolonauta")
ajolonauta.sayHelloToExplorers()
ajolonauta.tellMeMore()

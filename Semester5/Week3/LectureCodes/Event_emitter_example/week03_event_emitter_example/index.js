let events = require('events')


var em = new events.EventEmitter()

var callme = function(){
    console.log("Hello, I am from event handler")
}

//Way - 1
em.on("hello", callme)

//With Parameter
em.on("hug", (data)=> {
    console.log(`Sending ${data} hug`)
})


em.emit("hello")

//Call with Parameter
em.emit("hug", "BIG")

em.emit("hello")

//Nothing will happen as no event name exist
em.emit("helo")

//Way - 2
em.addListener("bye", ()=>{
    console.log("Byee.......")
})

em.emit("bye")

em.once("hi", ()=>{
    console.log("I am one time")
})

em.emit("hi")
em.emit("hi")


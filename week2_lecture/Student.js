class Student{
  constructor(sid, name){
      this.sid = sid
      this.name = name
  }

  print(){
      console.log(this.sid)
      console.log(this.name)
  }

  printMe = () => {
      console.log(`printMe : ${this.sid}`)
      console.log(`printMe : ${this.name}`)
  }
}

var s1 = new Student(1, 'Pritesh')
s1.print()
s1.printMe()
// Definition of the Student class
export class Student{
  studID : number
  firstName : string = "NA" // default value
  lastName : string = "NA" // default value
  percentage: number = 0.0 // default value

// Class attributes must be initialized
// either with default values or in the constructor

constructor(studID: number, firstName: string, lastName: string, percentage: number) {
    this.studID = studID
    this.firstName = firstName
    this.lastName = lastName
    this.percentage = percentage
}


showDetails() {
    console.log(`Student ID: ${this.studID}, Name: ${this.firstName} ${this.lastName}, Percentage: ${this.percentage}`)
  }
}


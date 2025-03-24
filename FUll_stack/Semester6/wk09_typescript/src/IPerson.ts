// IPerson.ts

// Interface for Person - blueprint for a class

export default interface IPerson {
  firstName: string
  lastName: string

  showDetails(): void

  // interface methods cannot have implementation
  // showinfo() {
  //   console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`)

}
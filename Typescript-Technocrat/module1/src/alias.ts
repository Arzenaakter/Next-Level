type Student = {
    name: string,
    age : number,
    contactNo?: number,
    gender: string

}

const std1: Student = {
    name: "ar",
    age : 24,
    contactNo: 129,
    gender: 'female'
}
const std2:Student = {
    name: "arze",
    age : 24,
   
    gender: 'female'
}


type Add = ( num1:number, num2: number) => number
const add:Add  = (num1,num2) => num1 + num2
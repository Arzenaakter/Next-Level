function addNumbers(num1:number, num2:number):number {
    return num1 + num2
}

addNumbers(2, 5)



const addStrings = (name1: string, name2: string): string => name1 + name2;



const users = {
    name: 'arzena',
    balance: 0,
    addBalance(balance:number):number {
        return this.balance + balance
        
    }
}

const userA = {
    name: 'arzena',
    balance: 0,
    addBalance(balance:number):string {
        return ` the new balance is : ${this.balance + balance}`
        
    }
}


const arrs: number[] = [1, 2, 3, 4]

const newArr:number[] = arrs.map((item:number):number => item*item)
{
    // type alias


    type User1 = {
        name: string,
        age : number
    }


    // const user1: User1 ={
    //     name :  'arzena',
    //     age : 25
    // }


    // interface

    interface User2 {
        name: string,
        age : number
    }

    // const user2: User2 = {
    //     name: 'niladri',
    //     age: 24
    // }


    // if I want to increase any property
    // type alias
    
    type UserWithRole1 = User1 & { role: string }
    
    const user1: UserWithRole1 = {
        name: 'arze',
        age: 22,
        role: ' dev'
        
    }


    // interface

    interface UserWithRole2 extends User2 { 
        role: string
    }

     const user2: UserWithRole2 = {
        name: 'niladri',
        age: 24,
        role: 'frontend dev'
    }


    // js --> object  array --> object   function --->object


    type Roll1 = number[]
    const rollNumber1: Roll1 = [1, 2, 4];


    interface Roll2 {
        [index: number] : number
    }
    

    const rollNumber2: Roll2 = [1,3,4]



    // function

    type Add1 = (num1: number, num2: number) => number;
    const add1: Add1 = (num1, num2) => num1 + num2


    interface Add2{
        (num1:number, num2:number ) : number
    }

    const add2: Add2 = ( num1,num2) => num1 - num2










}
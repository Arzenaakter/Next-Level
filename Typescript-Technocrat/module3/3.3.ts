{
    // guard


    // typeof

    type Alphaneumeric = number | string
    const add = (param1:Alphaneumeric , param2: Alphaneumeric) : Alphaneumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }


    const result1 = add(2, '4')
    
    console.log(result1)


    // in

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`my name is ${user.name} and the role is ${user.role}`)
        } else {
            console.log(`name is ${name}`)
        }
    }



    const normalUser:NormalUser = {
        name :'arzena'
    }
   
    const adminUser:AdminUser = {
        name: 'arzena',
        role: 'admin'
    }
   

getUser(adminUser)








}
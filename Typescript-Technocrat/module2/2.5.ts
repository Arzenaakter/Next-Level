{
    // generic function


    // normal
    const funcArr = (param : string): string[] => {
        return [param]
    }


    // generic

    const genericFunc =<T> (param: T): T[] => {
        return [param];
    }


    type GenObject = {
        name: string;
        roll: number;
    }

 const result1 =  genericFunc <string>('hola')
 const result2 =  genericFunc <number>(1)
 const result3 =  genericFunc <GenObject>({name:'arzena', roll: 2})



    // 
    const createGenericFunction = <T>(param: T): T[] => {
        return [param]
        
    }
    createGenericFunction<boolean>(true)
    

    // touple


    type User = {
        country: string;
        city: string;
    }
    const genericFunctionWithTouple = <T,H> (param1:T,param2:H):[T,H] => {
        return [param1,param2]
    }
   
    
    const res1 = genericFunctionWithTouple<string, number>('arzena', 25)
    const res2 = genericFunctionWithTouple <User,string>({country:'bangladesh', city:'bogura'},'arzena')


    //

    type Student = {
        name: string;
        email: string;
    }
    const addCourseToStudent = <T>(student : T ) => {
        const course = ' Next Level Web Development';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<Student>({name:'arzena', email:"arzenaakter@gmail.com"})














}
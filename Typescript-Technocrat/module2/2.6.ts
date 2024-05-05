{
    // constraints   that means fixed some property which is mandatory

    // use extends to constraints the id,name,email 

    const addStudent = <T extends { id: number; name: string; email:string} >(student: T ) => {
        return {
            student
        }
    }


    type Student = {
        id: number;
        name: string;
        email: string;
        devType?: string 
    }
    
    const res1 = addStudent<Student>({ id:1, name: 'ar', email:'ar@mail.com', devType: 'frontend'})
    const res2 = addStudent <Student> ({ id:1, name: 'ar', email:'ar@mail.com'})



}
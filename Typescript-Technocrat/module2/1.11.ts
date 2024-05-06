{
    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo : number
    }


    type NameAge = Pick<Person, 'name' | 'age'>

    // omit
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // required
    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>

    // readOnly
    type PersonReadOnly = Readonly<Person>

    const person1:PersonReadOnly = {
        name: 'mr. x',
        age: 24,
        contactNo: 90
    }

//  that means you can't change the value if you use read only type
//    person1.name = 'y'






}
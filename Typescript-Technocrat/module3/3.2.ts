{

    class Parent{
        name: string;
        age: number;
        address: string;


        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberHour:number) {
            console.log(`${this.name} will sleep for ${numberHour}`)
        }
    }


    class Student extends Parent {
        constructor(name:string,age:number,address:string) {
            super(name, age, address);
        }
    }



    const std1 = new Student('mr x', 20, 'asdsfsf')
    

    class Teacher extends Parent {
        designation: string;
        constructor(name:string,age:number,address:string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
    }



    const teacher = new Teacher('mr t', 50, 'uganda', 'professor')














}
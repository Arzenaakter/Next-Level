{
    // polymorphism


    class Person {
        getSleep() {
            console.log('sleep 1 hours')
        }
    }
    class Student extends Person {
        getSleep() {
            console.log('sleep 2 hours')
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log('sleep 3 hours')
        }
    }



    const getSleeping = (param: Person) => {
        param.getSleep()
    }


    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleeping(person1)
    getSleeping(person2)
    getSleeping(person3)



    //  another example
    
    class Shape{
        getArea():number {
            return 0;
        }
    }


    class Circle extends Shape{
        radius: number;

        constructor(radius: number) {
            super()
            this.radius = radius;
        }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    }
    
    class Rectangle extends Shape{
        hight: number;
        width: number

        constructor(hight: number,width:number) {
            super()
            this.width = width;
            this.hight = hight;
        }
    getArea(): number {
        return this.width * this.hight;
    }
}



    const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
}

    
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(2,3);


    getShapeArea(shape3)

    

}

// ts-node-dev --respawn --transpile-only './module3/3.8.ts'
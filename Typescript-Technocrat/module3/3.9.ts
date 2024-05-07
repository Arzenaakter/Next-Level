{

    // abstraction


    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }


    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`Start the car engine`)
        }
        stopEngine(): void {
            console.log(`Stop the car engine`)
        }
        move(): void {
            console.log(`Move the car engine`)
        }
        test(): void{
            console.log(`test `)
        }
    }


    const car1 = new Car1();
    car1.startEngine()


    // abstract 
    abstract class Car2 {
       abstract startEngine(): void 
       abstract stopEngine(): void 
       abstract move(): void 
        test(): void{
            console.log(`test `)
        }
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log(`Start the toyota engine`)
        }
        stopEngine(): void {
            console.log(`Stop the toyota engine`)
        }
        move(): void {
            console.log(`Move the toyota engine`)
        }
        

    }

//    using abstract then can't crete new
    // const car2 = new Car2()
    // car2.startEngine()

    // ts-node-dev --respawn --transpile-only './module3/3.8.ts'















}
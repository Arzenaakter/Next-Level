{
    // class and object

    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        constructor( public name: string, public species: string,public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        
        }
        
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`)
        }

    }

    const cat = new Animal('hulululu', 'cat', 'mew mew')
    cat.makeSound()
    















}
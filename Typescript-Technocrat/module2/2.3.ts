{


    // generic type

    // const numArry: number[] = [1, 2, 3]               normal way
    const numArry : Array<number> = [1,2,34,5]            // generic
    const stringArry : Array<string> = ['a','b']            // generic
    const boolArry : Array<boolean> = [true, false]            // generic


    type GenericArry = Array<number>

    const genericArr: GenericArry = [1, 2, 3]
    
    //    dynamically pass type
    
    type GenericDynamicType1<param> = Array<param>
    
    const frds : GenericDynamicType<string> =['a','b']
    const rolls: GenericDynamicType<number> = [1, 2, 3, 4]
    


    // for industri level we are use t for typescript

   type GenericDynamicType<T> = Array<T>


    // generic object
    
    const obj:GenericDynamicType1<{name:string, age:number}> = [
        {
            name: 'b',
            age: 12
        },
        {
            name: 'c',
            age: 3
        },
        
    ]


































}
{
    // map type

    type AreaNumber = {
        height: number;
        width: number;
    }


    const areaNumber: number[] = [1, 2, 4, 5]
    const areaString:string[] = areaNumber.map(num => num.toString())
    console.log(areaString)


    type Hight = AreaNumber['height']  // look up type

    // I want to change dynamically the type


    // type AreaString = {
    //     [key in keyof AreaNumber] : string
    // }

    type AreaString<T> = {
        [key in keyof T] : T[key]
    }


    const area1: AreaString<{ hight: string; width:number}> = {
        hight: '1000',
        width: 50
    }




























}
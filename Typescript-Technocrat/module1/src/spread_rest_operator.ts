{
    // spread operator

    const arr1:string[] = ['hola', 'kola', 'mola']
    const arr2:string[] = ['black', 'white', 'blue']
    
    arr1.push(...arr2)



    const frd1 = {
        typeScript: ' Mezba',
        redux: 'Mir',
        dbms : 'Nahid'
    }
    const frd2 = {
        Next: ' Tanmoy',
        Prisma: 'Firoz',
        Cloud : 'Mizan'
    }


    const frdlist = {
        ...frd1, ...frd2
    }
    
    
    const greetFrds = (...frds: string[]) => {
        frds.forEach(frd => console.log(`Hi ${frd}`))
    
    }
    
    greetFrds('hola','kola','mola')


}
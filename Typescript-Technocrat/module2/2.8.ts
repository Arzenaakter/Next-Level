{


    type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

    const getTodo = async ():Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
       const data = await res.json()
        console.log(data)
        return data;
    }

    getTodo()




    // custom

    const createPromise = ():Promise<string> => {
        return new Promise<string>((resolved, reject) => {
            const data: string = 'something';
            if (data) {
                resolved(data);
            } else {
                reject('failed to load data')
            }
        
    })
}


    const showData = async():Promise<string> => {
        const data: string = await createPromise();
        //  console.log(data)
        return data;
       
}

    showData();













}
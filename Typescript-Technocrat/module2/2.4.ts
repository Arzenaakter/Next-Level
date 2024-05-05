{

    // generic interface

    interface Dev<T,X=null>{
        name: string;
        computer: {
            brand: string;
            model: string
        },
        smartWatch: T,
        bike?: X

    }

    interface WatchEle{
        brand: string,
        model: string,
        display?: string,
        heartTrack?:boolean
    }

    const poorDeveloper: Dev<WatchEle> = {
        name: "poor dev",
        computer: {
            brand: 'asus',
            model : '2x'
        },
        smartWatch: {
            brand: ' something',
            model: " ce45",
            display: 'something'
        }
    }


    interface BikeBran{
        brand:string,model:string

    }
    const richDeveloper:Dev<WatchEle,BikeBran> = {
        name: "rich dev",
        computer: {
            brand: 'apple',
            model : '2xyz'
        },
        smartWatch : {
            brand: ' something',
            model: " ce45",
            heartTrack: true,
            
        },
        bike: {
            brand: 'yamaha',
            model: '34fjgng'
        }
    }















}
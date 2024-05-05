{

    // conditional type

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type hasBike = CheckVehicle<'bike'>
    type hasTractor = CheckVehicle<'tractor'>












}
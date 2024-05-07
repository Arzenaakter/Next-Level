{
    // getter and setter

    class BankAccount{
        readonly id: number;
        name: string;
    //    private balance: number;
       protected balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;

        }

        // addDeposit(amount: number) {
        //     this.balance = this.balance + amount;
            
        // }


        // so that we can use the balance from outsite of class
        set deposit(amount: number) {
            this.balance = this.balance + amount;
        }
        

        // getBalance() {
        //     return this.balance;
        // }

        get getbalance() {
            return this.balance;
        }
    }


    const myBalance = new BankAccount(2, 'r', 40)


    // re assign the value of balance
    myBalance.deposit = 20;
    myBalance.getbalance
    



    

































}


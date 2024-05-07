{
    // access modifier

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

        addDeposit(amount: number) {
            this.balance = this.balance + amount;
            
        }

        getBalance() {
            return this.balance;
        }
    }


    const poor = new BankAccount(1, 'a', 20)
    //  poor.id = 111  not possible because this property is read only we can't re assign the value
    // poor.balance = 3000                this property is private only accessble within the class

    poor.addDeposit(300)
    poor.getBalance()
    


    //  if we need any property from parent then we can use protected

    class StudentAccount extends BankAccount{
        test() {
            this.balance
        }
    }

    

































}


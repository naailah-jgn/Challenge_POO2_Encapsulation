import  assert  from  'assert';
class BankCustomer {
    private customerName : string;
    private pinCode : string;

    constructor(customerName : string, pinCode : string) {
        this.customerName = customerName;
        this.pinCode = pinCode;
    }

    
    public getName() : string {
        return this.customerName;
    }

    public verifyPinInput(newPinCode : string): boolean{

        if (this.pinCode == newPinCode) {
            console.log("Le code est correct !");
            return true;
        }else{
            console.log("Le code entré est erroné !");
            return false;
        }
    }
}

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName(), 'string');
assert.equal(typeof customer.verifyPinInput('4020'), 'boolean');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
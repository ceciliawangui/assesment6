class Employee {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  }
  
  class Pharmacist extends Employee {
    writePrescription(patient) {
      // write prescription logic
    }
  }
  
  class Cashier extends Employee {
    collectCash(payment) {
      // collect cash logic
    }
    
    returnCash(change) {
      // return cash logic
    }
  }
  
  class Manager extends Employee {
    constructor(name, id, role) {
      super(name, id);
      this.role = role;
    }
    
    manageEmployees(employeeList) {
      // manage employees logic
    }
    
    collectCash(payment) {
      // collect cash logic
    }
    
    returnCash(change) {
      // return cash logic
    }
    
    writePrescription(patient) {
      // write prescription logic
    }
  }
  const pharmacist = new Pharmacist("cess", 35);
pharmacist.writePrescription("Jane ");

const cashier = new Cashier("jillian", 25);
cashier.collectCash(50);
cashier.returnCash(10);

const manager = new Manager("David", 45, ["John ", "Mary"]);
manager.manageEmployees();
manager.collectCash(100);
manager.writePrescription("Bob");
let allEmp=[];
function employee(employee_ID,full_Name,department,level, image_URL,) {
   this.employee_ID=employee_ID;
   this.full_Name=full_Name;
   this.department=department;
   this.level=level;
   this.image_URL=image_URL;
   this.salary=this.calculate();
       this.calculateNetSalary();
   allEmp.push(this);
    
}
employee.department = ["Administration", "Marketing", "Development", "Finance"];
employee.level = ["Junior", "Mid-Senior", "Senior"];
  employee.prototype.calculate=function () {
   let min;
  let max;

  if (this.level === "Junior") {
    min = 500;
    max = 1000;
  } else if (this.level === "Mid-Senior") {
    min = 1000;
    max = 1500;
  } else if (this.level === "Senior") {
    min = 1500;
    max = 2000;
  }
  this.salary = Math.floor(Math.random() * (max- min + 1)) + min;
  return this.salary;  
    };
    employee.prototype.calculateNetSalary = function () {
      var tax = 7.5;
      var taxAmount = (this.salary * tax) / 100;
      this.netSalary = this.salary - taxAmount;
      return this.netSalary;
    }; 
   

    let employee1=  new employee(1000, "Ghazi Samer", "Administration", "Senior","./asset/emplogo.png");
    let employee2=new employee(1001, "Lana Ali", "Finance", "Senior");
    let employee3=   new employee(1002, "Tamara Ayoub", "Marketing", "Senior",);
    let employee4=  new employee(1003, "Safi Walid", "Administration", "Mid-Senior",);
    let employee5=  new employee(1004, "Omar Zaid", "Development", "Senior",);
    let employee6=   new employee(1005, "Rana Saleh", "Development", "Junior",);
    let employee7= new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior",);
 console.log(allEmp);
/*for (let i = 0; i < allEmp.length; i++) {
  console.log(allEmp[i].calculate()); 
   
}*/
employee.prototype.render = function () {
       
       document.write(`<h1> ${this.full_Name} : ${this.calculate()} </h1>`);
}

for (let i = 0; i < allEmp.length; i++) {
allEmp[i].calculate(); 
allEmp[i].render();
   
 }

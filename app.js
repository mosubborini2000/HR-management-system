let allEmp=[];

let secEle=document.getElementById("sec1");
let form=document.getElementById("form");
console.log(form);
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
    var generatID = (function(num) {
      return function() {
        var str = String(num++);
        while (str.length < 4) str = "0" + str;
        return str;
      }
    })(1);

    // let employee1=  new employee(1000, "Ghazi Samer", "Administration", "Senior","./asset/emplogo.png");
    // let employee2=new employee(1001, "Lana Ali", "Finance", "Senior","./asset/emplogo.png");
    // let employee3=   new employee(1002, "Tamara Ayoub", "Marketing", "Senior","./asset/emplogo.png");
    // let employee4=  new employee(1003, "Safi Walid", "Administration", "Mid-Senior","./asset/emplogo.png");
    // let employee5=  new employee(1004, "Omar Zaid", "Development", "Senior","./asset/emplogo.png");
    // let employee6=   new employee(1005, "Rana Saleh", "Development", "Junior","./asset/emplogo.png");
    // let employee7= new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./asset/emplogo.png");
 console.log(allEmp);
/*for (let i = 0; i < allEmp.length; i++) {
  console.log(allEmp[i].calculate()); 
   
}*/

employee.prototype.render = function () {
  let card = document.createElement("div");
  card.classList.add("card");

  let imgEle = document.createElement("img");
  imgEle.src = this.image_URL;
  card.appendChild(imgEle);

  let h3Name = document.createElement("h3");
  h3Name.textContent = `Name: ${this.full_Name}`;
  card.appendChild(h3Name);

  let h3ID = document.createElement("h3");
  h3ID.textContent = `ID: ${this.employee_ID}`;
  card.appendChild(h3ID);

  let h3Dep = document.createElement("h3");
  h3Dep.textContent = `Department: ${this.department}`;
  card.appendChild(h3Dep);

  let h3Level = document.createElement("h3");
  h3Level.textContent = `Level: ${this.level}`;
  card.appendChild(h3Level);

  let h3Salary = document.createElement("h3");
  h3Salary.textContent = `Salary: ${this.salary}`;
  card.appendChild(h3Salary);

  let h3NetSalary = document.createElement("h3");
  h3NetSalary.textContent = `Net Salary: ${this.netSalary}`;
  card.appendChild(h3NetSalary);

  secEle.appendChild(card);
};

form.addEventListener("submit",SubmitEventHandler);
function SubmitEventHandler(event) {
  event.preventDefault();
  //console.log(event.target.fname.value);
  //alert("fffffffffff")
  let imgg=event.target.imageurl.value;
  let firstname=event.target.fname.value;
  let departmentt=event.target.department.value;
  let levell=event.target.level.value;
  //console.log(firstname);
  let newEmpp=new employee(generatID(), firstname , departmentt, levell,imgg);
  newEmpp.render();
  form.reset()

}

for (let i = 0; i < allEmp.length; i++) {
allEmp[i].calculate(); 
allEmp[i].render();
   
 }

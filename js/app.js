let form = document.getElementById("empForm");
let cardEle = document.getElementById("cardEmp");
let currentId = 1;

let allEmployee = [];
function Employee( fullName , department , level , imageUrl ) {
    this.employeeID = this.generateUniqueId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculatSalary();
    this.netSalary = this.netSalary ;
    allEmployee.push(this);
    saveDataLocal(allEmployee);
    // getDataLocal();
  }

  Employee.prototype.calculatSalary = function(){
    if(this.level == "Junior"){
        this.salary = randomSalary(500 , 1000); 
    }
    else if(this.level=="Mid-Senior"){
        this.salary = randomSalary(1000 , 1500);
    }
    else if(this.level=="Senior"){
        this.salary = randomSalary(1500 , 2000);
    }

    return this.netSalary =this.salary - (this.salary*7.5/100);
  }



   Employee.prototype.generateUniqueId = function () {
    return (currentId++).toString().padStart(4, '0');
  }
  


function randomSalary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Employee.prototype.render = function(){
    let divEle = document.createElement("div");
    cardEle.appendChild(divEle);

    let imgEle = document.createElement("img");
    imgEle.src = this.imageUrl;
    divEle.appendChild(imgEle);

    let h3Ele = document.createElement("h3");
    h3Ele.textContent = `Name : ${this.fullName} - ID : ${this.employeeID}`;
    divEle.appendChild(h3Ele);

    let h3Ele1 = document.createElement("h3");
    h3Ele1.textContent = `Department : ${this.department} - Level : ${this.level}`;
    divEle.appendChild(h3Ele1);

    let h3Ele2 = document.createElement("h3");
    h3Ele2.textContent = `Salary : ${this.salary} JD`
    divEle.appendChild(h3Ele2);
}

// Function to save data in local storage

function saveDataLocal(empArr) {
    let stringArr = JSON.stringify(empArr);
    localStorage.setItem("employee", stringArr);
  //  console.log(stringArr);
  }

// // Function to get Object in Local Storage

 function getDataLocal(){
     let retArr = localStorage.getItem("employee");
     let objArr = JSON.parse(retArr);
    // console.log(objArr);
    for (let i = 0; i < objArr.length; i++) {
        new Employee (objArr[i].fullName , objArr[i].department , objArr[i].level , objArr[i].imageUrl);
    } 
}
    if(localStorage.getItem("employee")){
        getDataLocal();
    }

form.addEventListener("submit", submitHandler);
function submitHandler(event){
    event.preventDefault();
    let empName = event.target.fullName.value;
    let empDept = event.target.department.value;
    let empLvl = event.target.level.value;
    let empUrl = event.target.img.value;
    let newEmp = new Employee(empName,empDept,empLvl,empUrl);
    newEmp.calculatSalary();
    newEmp.render();
    console.log(allEmployee);
}

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}
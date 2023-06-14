let myData = localStorage.getItem("employee");
let objArr = JSON.parse(myData);

let table = document.getElementById("table");
let trAdm = document.getElementById("administration");
let trMark = document.getElementById("marketing");
let trDev = document.getElementById("development");
let trFina = document.getElementById("finance");
let trAllDept = document.getElementById("allDept");


// Function to print info
console.log(objArr);
function info() {
    let numOfEmpAdm = 0 ;
    let totalSalaryEmpAdm = 0 ;

    let numOfEmpMark = 0 ;
    let totalSalaryMark = 0 ;
    
    let numOfEmpDev = 0 ;
    let totalSalaryDev = 0 ;

    
    let numOfEmpFina = 0 ;
    let totalSalaryFina = 0 ;

    let avgSalaryAdm = 0;
    let avgSalaryMark = 0;
    let avgSalaryDev = 0;
    let avgSalaryFina = 0;

    let totalForAllDept = 0
    let avgForAllDept = 0;

    let totalEmp = 0 ;
    
    for (let i = 0; i < objArr.length; i++) {
        if(objArr[i].department == "Administration" )
        {
            numOfEmpAdm++;
            totalSalaryEmpAdm = totalSalaryEmpAdm + objArr[i].salary;
            avgSalaryAdm = totalSalaryEmpAdm / numOfEmpAdm ;
        }
        else if(objArr[i].department == "Marketing" )
        {
            numOfEmpMark++;
            totalSalaryMark = totalSalaryMark + objArr[i].salary;
            avgSalaryMark = totalSalaryMark / numOfEmpMark ;
        }
        else if(objArr[i].department == "Development" )
        {
            numOfEmpDev++;
            totalSalaryDev = totalSalaryDev + objArr[i].salary;
            avgSalaryDev = totalSalaryDev / numOfEmpDev ;
        }
        else if(objArr[i].department == "Finance" )
        {
            numOfEmpFina++;
            totalSalaryFina = totalSalaryFina + objArr[i].salary;
            avgSalaryFina = totalSalaryFina / numOfEmpFina ;
        }

        totalForAllDept = totalSalaryDev + totalSalaryEmpAdm + totalSalaryFina + totalSalaryMark;
        avgForAllDept = totalForAllDept / (numOfEmpAdm + numOfEmpDev + numOfEmpFina + numOfEmpMark)
        totalEmp = umOfEmpAdm + numOfEmpDev + numOfEmpFina + numOfEmpMark ;
    }
    let tdEle = document.createElement("td");
    tdEle.textContent = numOfEmpAdm;
    trAdm.appendChild(tdEle);

    let tdEle2 = document.createElement("td");
    tdEle2.textContent = totalSalaryEmpAdm;
    trAdm.appendChild(tdEle2);

    let tdEle3 = document.createElement("td");
    tdEle3.textContent = avgSalaryAdm;
    trAdm.appendChild(tdEle3);

//  
    let tdElemark = document.createElement("td");
    tdElemark.textContent = numOfEmpMark;
    trMark.appendChild(tdElemark);

    
    let tdElemark1 = document.createElement("td");
    tdElemark1.textContent = totalSalaryMark;
    trMark.appendChild(tdElemark1);

    let tdElemark2 = document.createElement("td");
    tdElemark2.textContent = avgSalaryMark;
    trMark.appendChild(tdElemark2);

//
    
    let tdEleDev = document.createElement("td");
    tdEleDev.textContent = numOfEmpDev;
    trDev.appendChild(tdEleDev);

    let tdEleDev1 = document.createElement("td");
    tdEleDev1.textContent = totalSalaryDev;
    trDev.appendChild(tdEleDev1);

    let tdEleDev2 = document.createElement("td");
    tdEleDev2.textContent = avgSalaryDev;
    trDev.appendChild(tdEleDev2);
//

    let tdEleFinac = document.createElement("td");
    tdEleFinac.textContent = numOfEmpFina;
    trFina.appendChild(tdEleFinac);

    let tdEleFinac2 = document.createElement("td");
    tdEleFinac2.textContent = totalSalaryFina;
    trFina.appendChild(tdEleFinac2);

    let tdEleFinac3 = document.createElement("td");
    tdEleFinac3.textContent = avgSalaryFina;
    trFina.appendChild(tdEleFinac3);
   //
   let tdEleFooter = document.createElement("td");
    tdEleFooter.textContent = totalEmp;
    trAllDept.appendChild(tdEleFooter);

    let tdEleFooter1 = document.createElement("td");
    tdEleFooter1.textContent = totalForAllDept;
    trAllDept.appendChild(tdEleFooter1);

    let tdEleFooter2 = document.createElement("td");
    tdEleFooter2.textContent = avgForAllDept;
    trAllDept.appendChild(tdEleFooter2);
    
}
info();
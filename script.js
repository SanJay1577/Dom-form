var list1 =[];
var list2 =[];
var list3 =[];
var list4 =[];
var list5 =[];
var list6 =[];
var list7 =[];
var list8 =[];
let arr =[];
var n = -1;
var x = 1;
var checkedValue=0;

button = document.querySelector("#btn");
button.addEventListener("click",function(){
    //console.log("button is working");
    var tableBody = document.querySelector("#table-body");
    var newRow= tableBody.insertRow(n);
    list1[x] = document.getElementById("first-name").value;
    list2[x] = document.querySelector("#last-name").value;
    list3[x] = document.querySelector("#address").value;
    list4[x] = document.querySelector("#inputState").value;
    list5[x] = document.querySelector("#inpuCountry").value;
    list6[x] = document.querySelector("#pincode").value;
    list7[x] = document.querySelector("input[name='gender']:checked").value;
   // console.log(list7[x]);
 
    let list = document.querySelectorAll("li");
    for(let i=0; i<list.length; i++){
        let selectedValue= list[i].firstChild;
        if(selectedValue.checked){
            checkedValue++;
           list8 = selectedValue.value;
           arr.push(list8);
           //console.log(arr);
        }
    }

    if(checkedValue<2){
        alert("Please select atleast Two choice of food");
        arr=[];
        !important;
     }
   
    if(list1[x]=="" || 
       list2[x]=="" ||
       list3[x]=="" ||
       list4[x]=="" ||
       list5[x]=="" ||
       list6[x]=="" ||
       list7[x]=="" || 
       checkedValue<2){
      alert("PLease fill all the form field as required");
      arr=[];
      checkedValue=0;
      !important;
   }
   
  
   var cell1 = newRow.insertCell(n);
   cell1.innerText = list1[x];
   var cell2 = newRow.insertCell(n);
   cell2.innerText = list2[x];
   var cell3 = newRow.insertCell(n);
   cell3.innerText = list3[x];
   var cell4 = newRow.insertCell(n);
   cell4.innerText = list4[x];
   var cell5 = newRow.insertCell(n);
   cell5.innerText = list5[x];
   var cell6 = newRow.insertCell(n);
   cell6.innerText = list6[x];
   var cell7 = newRow.insertCell(n);
   cell7.innerText = list7[x];
   var cell8 = newRow.insertCell(n);
   cell8.innerText= arr;
   let form = document.getElementById("form")
   form.reset();
   arr=[];
   checkedValue=0;
   list7[x]=[];
  
});





var addbtn = document.getElementById("addbtn");
var content = document.querySelector(".content");
var content2 = document.querySelector(".content2");
var inone = document.querySelector(".inone");
var table = document.querySelector("table tbody"); // points to <tbody>
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var tableboxcontainer = document.querySelector(".tableboxcontainer");
var notifi=document.querySelector(".notifi")
var box=document.querySelector(".box")
var title=document.querySelector(".title")
var fill=document.querySelector(".fill")
var previousbut1=document.querySelector(".previousbut1")
var previousbut2=document.querySelector(".previousbut2")



addbtn.addEventListener("click", function () {
    content.style.display = "none";
    content2.style.display = "block";
    fill.style.width="50%"
});

btn1.addEventListener("click", function (e) {
    e.preventDefault(); // prevent page reload on submit

    content2.style.display = "none";
     btn2.style.display = "block";
    tableboxcontainer.style.display = "block";
     fill.style.width="100%";
    //  previousbut1.style.display="block"
     previousbut2.style.display="block"
    // notifi.style.display="block"


    // Get values from inputs
    var name = document.getElementById("stuname").value;
    var age = document.getElementById("stuage").value;
    var email = document.getElementById("stuemail").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    var course = document.getElementById("op").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    // Create table row and cells
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${course}</td>
      <td>${dob}</td>
      <td>${phone}</td>
      <td>${address}</td>
      <td><button class="btn3" onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;

    // Append row to table
    table.appendChild(row);
});
btn2.addEventListener("click",function(){
     notifi.style.display="block";
     box.style.display="none";
     tableboxcontainer.style.display="none";
      title.style.display="none";
      btn2.style.display="none";
      previousbut2.style.display="none";
});
 previousbut1.addEventListener("click" , function(){
    fill.style.width="0%";
    content2.style.display="none";
    content.style.display="block";
});

previousbut2.addEventListener("click",function(){
     tableboxcontainer.style.display="none";
     content2.style.display="block";
    previousbut2.style.display="none";
     btn2.style.display="none";
     fill.style.width="50%";
});






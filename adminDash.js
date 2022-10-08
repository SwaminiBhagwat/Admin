$(document).ready
(function(){
  $("#display1").click(function(){
const tb1=document.querySelector("#myTable1");
$.get("http://localhost:3000/test",function(data,status){
for(var i=0;i<data.length;i++){
var obj=data[i];
tb1.innerHTML+=
`<tr>

<td>${obj.testName}</td>
<td>${obj.aboutTest}</td>
<td>${obj.cost}</td>
<td><button type="button" class="btn btn-warning" onclick=updateTest(${obj.id})> UPDATE</button></td>
<td><button type="button" class="btn btn-danger"  onclick=deleteTest(${obj.id}) >DELETE</button></td>
</tr>`;
}

})
  });
});

function deleteTest(id){
var key=id;
$.ajax({
  url: " http://localhost:3000/Test/" + key,
  type: "delete",
  dataType: 'JSON',
  success: function() {
      console.log(" deletion done")
  },
  error: function() {
      console.log("error in deletion")
  }
});
}

function logOut(){
  location.replace("/Home/home_page.html");
}

$(document).ready
(function(){
  $("#displayappt").click(function(){
const tb1=document.querySelector("#myTableapt");
$.get("http://localhost:3000/appointments",function(data,status){
for(var i=0;i<data.length;i++){
var obj=data[i];
tb1.innerHTML+=
`<tr>

<td>${obj.name}</td>
<td>${obj.email}</td>
<td>${obj.phone}</td>
<td>${obj.test}</td>
<td>${obj.date}</td>
<td>${obj.time}</td>

<td><button type="button" class="btn btn-success" onclick=acceptAppointment(${obj.id})>APPROVE</button></td>
<td><button type="button" class="btn btn-danger"onclick=rejectAppointment(${obj.id})>REJECT</button></td>
</tr>`;
}

})
  });
});

function acceptAppointment(id){
console.log(id);
  $.ajax({
    url: " http://localhost:3000/bookappointment/" +id,
    
    type: "put",
    dataType: 'JSON',
    data:'data',
    success: function(data) {
     
    data.status="Approved";
        alert("update done !!!! ")
    },
    error: function() {
        console.log("updation failed")
    }
  });
  }

function rejectAppointment(id)
{
   
     var uid = id;
     $.get("http://localhost:3000/Appointments", function (data, status) 
     {
 
         var len = 0;
         for (var i = 0; i < data.length; i++)
          {
             var obj = data[i];
             if (obj.id == uid) 
             {
                 console.log("entered post");
                 $.post("http://localhost:3000/acceptappointment",
                     {
                         acceptance: 0
                     }
                     , function (data, status)
                      {
                         alert("Data: " + data + "\nStatus: " + status + "\n Request rejected");
                     }
                    )
             }

         }
     }
                     
                
 )
 }

  $(document).ready(function(){
    $("#register").click(function(){
        $.post("http://localhost:3000/Test",{
            testName:$("#testName").val(),
            aboutTest:$("#details").val(),
            cost:$("#fee").val(),

        });
    });
  });

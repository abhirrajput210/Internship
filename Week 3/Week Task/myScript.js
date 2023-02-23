fetch('https://dummyjson.com/users')
.then((data) =>{
    return data.json();
}).then((objectData) =>{
    console.log(objectData);
    const objectArray = objectData.users;
    console.log(Array.isArray(objectArray));
    let userData = "";
    // Object.keys(objectArray);
    objectArray.map((values, index) =>{
        console.log(values);
        console.log(index);
        userData += `<tr>
        <td hidden>${values.id}</td>
        <td id="fn[${index}]">${values.firstName}</td>
        <td id="ln[${index}]">${values.lastName}</td>
        <td>${values.email}</td>
        <td>${values.age}</td>
        <td><img width="50" height="50" src="${values.image}"/></td>
        <td>${values.username}</td>
        <td>${values.password}</td>
        <td><button type='button' style="background-color:green" onclick="productUpdate(this)" class='btn btn-default'>Update</td>
        <td><button type='button' style="background-color:red" onclick="productDelete(this)" class='btn btn-default'>Delete</td>
    </tr>` 
    });
    document.getElementById("userData").innerHTML=userData;    
})  


function productDelete(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


function productUpdate(btn) {
        var x = document.getElementById("updatePop");
        if (x.style.display === "none") {
          x.style.display = "block";
        } 
        else {
          x.style.display = "none";
        }
        let row = btn.parentNode.parentNode;
        var id = row.cells[0].innerHTML;
        var firstname = row.cells[1].innerHTML;
        var lastname = row.cells[2].innerHTML;
        // console.log(ans);
        document.getElementById('fname').value=firstname;        
        document.getElementById('lname').value=lastname;
        document.getElementById('id').value=id; 

        let sb = document.getElementById("submitbtn");
        sb.onclick = function(){

            const fm = document.getElementById("formData");
            let uid = fm.elements[0].value;
            // alert(uid);

            let updatedFirstName = document.getElementById('fname').value;
            let updatedLastName = document.getElementById('lname').value;
            console.log(updatedFirstName);

            fetch('https://dummyjson.com/users/'+fm.elements[0].value, {
                method: 'PUT', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                firstName: updatedFirstName,
                lastName: updatedLastName
            })
            })
            .then(res => res.json())
            // .then(console.log);
            console.log(document.getElementById(`fn[${uid}]`));
            document.getElementById(`fn[${uid-1}]`).innerText = updatedFirstName;
            document.getElementById(`ln[${uid-1}]`).innerText = updatedLastName;
            // .then(console.log);  
            var x = document.getElementById("updatePop");
            if (x.style.display !== "none") {
                x.style.display = "none";
            }
        }
}


let fb = document.getElementById("searchbtn");
fb.onclick = function(){

    var input, filter, table, tr, td, i;
    input = document.getElementById("text");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    var cn = document.getElementById("sfield").value;
    var ci = document.getElementById("sfield").selectedIndex;
    for (var i = 0; i < tr.length; i++) {
    var tds = tr[i].getElementsByTagName("td");
    var flag = false;
    for(var j = 0; j < tds.length; j++){
      var td = tds[ci];
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        flag = true;
      } 
    }
    if(flag){
        tr[i].style.display = "";
    }
    else {
        tr[i].style.display = "none";
    }
  }
}



      



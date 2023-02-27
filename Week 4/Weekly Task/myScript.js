fetch('https://inshortsapi.vercel.app/news?category=sports')
.then((data) =>{
    return data.json();
}).then((objectData) =>{
    console.log(objectData);
    const objectArray = objectData.data;
    console.log(Array.isArray(objectArray));
    let userData = "";
    // Object.keys(objectArray);
    objectArray.map((values, index) =>{
        console.log(values);
        console.log(index);
        userData += `<tr>
        <td hidden>${values.id}</td>
        <td id="fn[${index}]">${values.author}</td>
        <td id="ln[${index}]">${values.content}</td>
        <td>${values.date}</td>
        <td><img width="50" height="50" src="${values.imageUrl}"/></td>
        <td>${values.title}</td>
    </tr>` 
    });
    document.getElementById("userData").innerHTML=userData;    
})  


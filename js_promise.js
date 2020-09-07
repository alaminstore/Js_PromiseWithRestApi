//------------Basic concept of promise in javascript(How to works and implements)
let myFirstPromise = new Promise((resolve, reject) => {
  let name = "Sm Al-Amin";
  resolve(name, dept, dream);
});
myFirstPromise // it's called promise
  .then((name, dept, dream) => {
    console.log("My name is " + name);
  });
//Output:
//My name is Sm Al-Amin


//---------------Start from here


fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => Response.json())
  .then((body) => {
    var i = 0;
    const lis = body.map((data) => {
      var li = document.createElement("li");
      var text = `${(i += 1)}. Name: ${data.name} , Email: ${data.email}`;
      var textNode = document.createTextNode(text);
      li.appendChild(textNode);
      return li;
    });
    lis.forEach((li) => {
      document.getElementById("mylist").appendChild(li);
    });
  })
  .catch((error) => {
     console.log(error);
});

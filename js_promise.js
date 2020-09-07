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
  .catch((error) => {});

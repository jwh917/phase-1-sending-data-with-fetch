// Add your code here

const formData = {
  name: "Steve",
  email: "steve@steve.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

function submitData(name, email){
    const dataSubmit = fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        const display = document.querySelector('body')
        display.innerHTML = object.id
    })
    .catch(function (error) {
        const display = document.querySelector('body')
        alert("Error!");
        display.innerHTML = error.message;
    });
    return dataSubmit;
}
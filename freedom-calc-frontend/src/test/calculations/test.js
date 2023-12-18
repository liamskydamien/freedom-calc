// Get user input from form fields
let indices = document.getElementById("indices").value.split(" ");
let target_std_dev = document.getElementById("target_std_dev").value;

const data = {
  indices: indices,
  target_std_dev: target_std_dev,
};

fetch("/optimize", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });

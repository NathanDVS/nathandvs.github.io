const button = document.createElement('button');
let count = 0;

button.onclick = () => {
  count += 1;
  button.value = "Count: " + count;
}

document.body.appendChild(button);

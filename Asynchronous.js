fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Using async/await
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

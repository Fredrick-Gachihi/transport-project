// let typed = newTyped('.text', {
// String:["Where to", "Safe journey"],
// typeSpeed: 100,
// backSpeed: 100,
// loop: true,
// backDelay: 100
// })


function fetchStopData(searchTerm) {
    const url = `https://v6.vbb.transport.rest/locations?query=${searchTerm}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          displayError('No stops found for this search term.');
        } else {
          displayStops(data);
        }
      })
      .catch(error => {
        console.error(error);
        displayError('An error fetching data.');
      });
  }
  
  function displayStops(stopData) {
    const locationsList = document.getElementById('locations');
    locationsList.innerHTML = '';
  
    stopData.forEach(stop => {
      const listItem = document.createElement('li');
      listItem.textContent = stop.name;  // Access stop name from API response
      locationsList.appendChild(listItem);
    });
  }
  
  const submitButton = document.querySelector('.submit');
  submitButton.addEventListener('click', () => {
    const searchTerm = document.querySelector('.input').value.trim();
    if (!searchTerm) {
      displayError('Please enter a search term.');
      return;
    }
  
    fetchStopData(searchTerm);
  });
  
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
        console.log(data)
      if (data.length === 0) {
        displayError('No stops found for this search term.');
      } else {
        displayStops(data);
      }
    })
    .catch(error => {
      console.error(error);
      displayError('An error fetching data.');
    });// Initial data fetch (optional)
    // You can uncomment this to display some initial stops on page load
    // fetchStopData('berlin');
}

// Update the displayStops function to display fetched data
function displayStops(stopData) {
  const locationsList = document.getElementById('locations');
  locationsList.innerHTML = ''; 

  stopData.forEach(stop => {
    const listItem = document.createElement('li');
    listItem.textContent = stop.name;
    locationsList.appendChild(listItem);
  });
}

function displayStops(stopData) {
    locationsList.innerHTML = ''; // Clear previous list
    stopData.forEach(stop => {
      const listItem = document.createElement('li');
      const transportTypes = stop.products.join(',');
      listItem.textContent =`${stop.name} -${transportTypes}`;
      locationsList.appendChild(listItem);
  
      // Assuming "products" is a property within the stop object
      for (const product in stop.products) {
        if (stop.products[product]) {
          transportTypes.push(product);
        }
      }
  
      listItem.textContent = `${stop.name} - ${transportTypes.join(', ')}`;
      locationsList.appendChild(listItem);
    });
  }

// Add event listener to the submit button
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', () => {
  const searchTerm = document.querySelector('.input').value.trim();
  if (!searchTerm) {
    displayError('Please enter a search term.');
    return;
  }

  fetchStopData(searchTerm);
});



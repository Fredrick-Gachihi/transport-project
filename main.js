// let typed = newTyped('.text', {
// String:["Where to", "Safe journey"],
// typeSpeed: 100,
// backSpeed: 100,
// loop: true,
// backDelay: 100
// })


// const searchInput = document.querySelector('.input');
// const submitButton = document.querySelector('.submit');
// const locationsList = document.getElementById('locations');

// function displayError(message) {
//   const errorElement = document.createElement('p');
//   errorElement.textContent = message;
//   errorElement.classList.add('error');
//   locationsList.appendChild(errorElement);
// }

// function displayStops(stopData) {
//   locationsList.innerHTML = ''; 
//   stopData.forEach(stop => {
//     const listItem = document.createElement('li');
//     listItem.textContent = stop.name;
//     locationsList.appendChild(listItem);
//   });
// }

// function fetchStopData(searchTerm) {
//   const url = `https://v6.vbb.transport.rest/locations?query=${searchTerm}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data.length === 0) {
//         displayError('No stops found for this search term.');
//       } else {
//         displayStops(data);
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       displayError('An error fetching data.');
//     });
// }

// submitButton.addEventListener('click', () => {
//   const searchTerm = searchInput.value.trim();
//   if (!searchTerm) {
//     displayError('Please enter a search term.');
//     return;
//   }

//   fetchStopData(searchTerm);
// });

// Initial data fetch (optional)
// You can uncomment this to display some initial stops on page load
// fetchStopData('berlin');
// Update the fetchStopData function to fetch data from the API
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
    });
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

// Function to display error message
function displayError(message) {
  const errorElement = document.createElement('p');
  errorElement.textContent = message;
  errorElement.classList.add('error');
  locationsList.appendChild(errorElement);
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

// Initial data fetch (optional)
// You can uncomment this to display some initial stops on page load
// fetchStopData('berlin');

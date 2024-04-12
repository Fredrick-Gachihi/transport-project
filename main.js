
// function fetchStopData(searchTerm) {
//     const url = `https://v6.vbb.transport.rest/locations?query=${searchTerm}`;
  
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         if (data.length === 0) {
//           displayError('No stops found for this search term.');
//         } else {
//           displayStops(data);
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         displayError('An error fetching data. Please check your network connection or API endpoint.');
//       });
//   }
  
//   function displayStops(stopData) {
//     const locationsList = document.getElementById('locations');
//     locationsList.innerHTML = ''; // Clear existing content
  
//     stopData.forEach(stop => {
//         const listItem = document.createElement('li');
//         listItem.textContent =`Stop Name: ${stop.name}  (Products: ${stop.products.join(', ')})`;
//         locationsList.appendChild(listItem);
//       });
//     }

//   const submitButton = document.querySelector('.submit');//
//   submitButton.addEventListener('click', () => {
//     const searchTerm = document.querySelector('.input').value.trim();
//     if (!searchTerm) {
//       displayError('Please enter a search term.');
//       return;
//     }
  
//     fetchStopData(searchTerm);
//   });

//   function displayError(message) {
//     const errorMessageElement = document.getElementById('error-message');
//     errorMessageElement.textContent = message; 
//     console.log(error-message);
// }


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
      displayError('An error fetching data. Please check your network connection or API endpoint.');
    });
}

function displayStops(stopData) {
  const locationsList = document.getElementById('locations');
  locationsList.innerHTML = ''; // Clear existing content

  stopData.forEach(stop => {
    const listItem = document.createElement('li');
    if (stop.hasOwnProperty('products')) {
      
      if (Array.isArray(stop.products)) {
        listItem.textContent = `Stop Name: ${stop.name}  (Stop Products: ${stop.products.join(', ')})`;
      } else {
        listItem.textContent = `Stop Name: ${stop.name} (Products: Not Available)`;
      }
    } else {

      listItem.textContent = `Stop Name: ${stop.name} (Products: Not Available)`;
    }

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

function displayError(message) {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;
  console.error(message);
}

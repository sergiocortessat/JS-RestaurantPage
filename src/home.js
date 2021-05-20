// HOME

const indexHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('d-flex', 'justify-content-evenly', 'mt-5', "menu");
  const hoursDiv = document.createElement('div');
  const mainHoursHeader = document.createElement('h3');
  mainHoursHeader.innerHTML = 'Hours';
  hoursDiv.appendChild(mainHoursHeader);
  const mainHoursContent = document.createElement('p');
  mainHoursContent.innerHTML = `
  Sunday: 8am - 8pm</br>
  Monday: 6am - 6pm</br>
  Tuesday: 6am - 6pm</br>
  Wednesday: 6am - 6pm</br>
  Thursday: 6am - 10pm</br>
  Friday: 6am - 10pm</br>
  Saturday: 8am - 10pm</br>`;
  hoursDiv.appendChild(mainHoursContent);
  const locationDiv = document.createElement('div');
  const mainLocationHeader = document.createElement('h3');
  mainLocationHeader.innerHTML = 'Location';
  locationDiv.appendChild(mainLocationHeader);
  const mainLocation = document.createElement('p');
  mainLocation.innerHTML = 'Just Somewhere Nice.';
  locationDiv.appendChild(mainLocation);
  infoDiv.append(hoursDiv, locationDiv);
  home.appendChild(infoDiv);

  return home;
};

export default indexHome;

import './style.css';
import './images/background.jpg';
import navBar from './header';
import footerFun from './footer';
import wrapper from './menu';
import aboutMe from './about';
import indexHome from './home';

// APPEND CHILDS
const footer = footerFun();
const content = document.querySelector('.content');
const cardWrapper = wrapper();
const about = aboutMe();
const home = indexHome();

content.classList.add('background-image');
content.appendChild(navBar());
content.appendChild(home);
content.appendChild(footer);

const btn = () => {
  document.contactme.reset();
};

// NAVBAR TOOGLE PAGES

const toogle = document.querySelectorAll('.nav-link');
toogle.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'MENU') {
      cardWrapper.classList.remove('d-none');
      about.classList.add('d-none');
      home.classList.add('d-none');
      content.appendChild(cardWrapper);
      content.appendChild(footer);
    } else if (e.target.textContent === 'HOME') {
      home.classList.remove('d-none');
      about.classList.add('d-none');
      cardWrapper.classList.add('d-none');
      content.appendChild(home);
      content.appendChild(footer);
    } else if (e.target.textContent === 'CONTACT') {
      cardWrapper.classList.add('d-none');
      home.classList.add('d-none');
      about.classList.remove('d-none');
      content.appendChild(about);
      document.querySelector('#btn').addEventListener('click', btn);
      content.appendChild(footer);
    }
  });
});

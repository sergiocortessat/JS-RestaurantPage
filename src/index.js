import './style.css';
import backGround from './images/background.jpg';
import navBar from './header';
import footerFun from './footer';
import wrapper from './menu';
import aboutMe from './about';
import indexHome from './home';

// NAVBAR
// const navBar = document.createElement('nav');
// navBar.classList.add('navbar-light', 'navbar-style', 'd-flex', 'justify-content-center');
// navBar.innerHTML = `
// <ul class="navbar-nav flex-row">
// <li class="nav-item mx-2"> <a class='nav-link' href="#">HOME</a> </li>
// <li class="nav-item mx-2"> <a class='nav-link' href="#">MENU</a> </li>
// <li class="nav-item mx-2"> <a class='nav-link' href="#">CONTACT</a> </li>
// </ul>
// `;

// // MENU
// const cardWrapper = document.createElement('div');
// const card1 = document.createElement('div');
// const card2 = document.createElement('div');

// cardWrapper.classList.add('card-wrapper');
// card1.classList.add('card', 'card1');
// card2.classList.add('card', 'card2');

// card1.innerHTML = `
// <div class="card-group">
// <div class="card">
//   <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//   </div>
// </div>
// <div class="card">
//   <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//   </div>
// </div>
// </div>`;

// card2.innerHTML = `
// <div class="card-group">
//             <div class="card">
//               <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//               </div>
//             </div>
//             <div class="card">
//               <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//               </div>
//             </div>
//           </div>`;

// // HOME

// const home = document.createElement('div');
// home.classList.add('home');

// // ABOUT
// const about = document.createElement('div');
// about.classList.add('about');

// FOOTER

// const footer = document.createElement('footer');
// footer.classList.add('footer');
// footer.innerHTML = `
// <div class="text-center">
//   <span class="">&copy; Sergio Cortes 2021</span>
// </div>`;

// APPEND CHILDS
const footer = footerFun();
const content = document.querySelector('.content');
const cardWrapper = wrapper();
const about = aboutMe();
const home = indexHome();

content.classList.add('background-image');
content.appendChild(navBar());
content.appendChild(home);
// cardWrapper.appendChild(card1);
// cardWrapper.appendChild(card2);
content.appendChild(footer);

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
      content.appendChild(footer);
    }
  });
});

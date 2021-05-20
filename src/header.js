// NAVBAR
const navBar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar-light', 'navbar-style', 'd-flex', 'justify-content-center');
  nav.innerHTML = `
<ul class="navbar-nav flex-row">
<li class="nav-item mx-2"> <a class='nav-link' href="#">HOME</a> </li>
<li class="nav-item mx-2"> <a class='nav-link' href="#">MENU</a> </li>
<li class="nav-item mx-2"> <a class='nav-link' href="#">CONTACT</a> </li>
</ul>
`;
  return nav;
};

export default navBar;
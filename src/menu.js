// MENU
const wrapper = () => {
  const cardWrapper = document.createElement('div');
  const card1 = document.createElement('div');
  const card2 = document.createElement('div');

  cardWrapper.classList.add('card-wrapper');
  card1.classList.add('card', 'card1');
  card2.classList.add('card', 'card2');

  card1.innerHTML = `
<div class="card-group">
<div class="card">
  <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>`;

  card2.innerHTML = `
<div class="card-group">
            <div class="card">
              <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src='./a39f68d10b7d324dc079.jpg' alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>`;
  cardWrapper.appendChild(card1);
  cardWrapper.appendChild(card2);
  return cardWrapper;
};

export default wrapper;

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
  <img class="card-img-top img-fluid" src='https://i.redd.it/nvxvg5a1jec51.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Rick Schezuan Nuggets</h5>
    <p class="card-text">The Rick Szechuan nuggets are a delightful creation inspired by the rick and Morty show Szechuan McNuggets. This delightful flavor with immerse your senses.</p>
    <p class="card-text"><small class="text-muted">May containt traces of meat</small></p>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src='https://amazingribs.com/wp-content/uploads/2020/10/chateaubriand-570.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Morty Mignon with some meat</h5>
    <p class="card-text">The Morty Filet Mignon is a special, delightful, and tender cut, seasoned with the finest herbs and cook slowly with a demiglace sauce to enrich your flavors.</p>
    <p class="card-text"><small class="text-muted">May contains traces of meat</small></p>
  </div>
</div>
</div>`;

  card2.innerHTML = `
<div class="card-group">
            <div class="card">
              <img class="card-img-top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHQemRTiJs637POrGOxfkRD4JgbzEEp69WQ&usqp=CAU' alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Jerry Picanha Gostosa</h5>
                <p class="card-text">The Jerry Picanha Gostosa is a special, delightful, and tender Brazilian meat cut, seasoned with the finest herbs and Mango sauce.</p>
                <p class="card-text"><small class="text-muted">May contains traces of meat</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src='https://www.tipsyvariedades.xyz/wp-content/uploads/2019/09/Cocina-unos-ricos-tacos-mexicanos.jpg' alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Summer Tacos Calientes</h5>
                <p class="card-text">The Summer Tacos Calientes is our special and renoun Mexican dish. Even Mexican love them. Tender tortillas stuff with taco stuff.</p>
                <p class="card-text"><small class="text-muted">It may contain traces of meat and Mexican prayers</small></p>
              </div>
            </div>
          </div>`;
  cardWrapper.appendChild(card1);
  cardWrapper.appendChild(card2);
  return cardWrapper;
};

export default wrapper;

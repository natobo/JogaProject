export const getCardTemplate = (game) => `
<div class="card game" style="width: 18rem;">
    <img src="${game.linkPortada}" class="card-img-top" alt="...">
    <div class="card-body game-description">
      <h5 class="card-title">${game.name}</h5>
      <p class="card-text">${game.description}</p>
      <a href="#" class="btn btn-primary ">Encontrar grupo</a>
    </div>
</div>`;

export class Player {
  constructor(name) {
    this.name = name;
    // Their score is defaulted to start at 0
    this.score = 0;
  }

  get PlayerTemplateCard() {
    return `
    <div class="card col-4">
    <div class="card-body">
    ${this.name} - ${this.score}
    </div>
    <button onclick="app.PlayersController.scorePoint('${this.name}')" class="btn btn-info fw-bold p-1">
        +
      </button>
      <button onclick="app.PlayersController.minusPoint('${this.name}')" class="btn btn-info fw-bold p-1">
        -
      </button>
    </div>`

  }
}


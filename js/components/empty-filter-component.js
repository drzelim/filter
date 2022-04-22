import Abstract from "./abstarct.js";

const createEmptyFilterTemplate = (filterName) => {
  return (
    `<div class="new-filter__block new-filter__open-field">
        <div class="new-filter__header">
          <div class="new-filter__toggle">
            <h3>${filterName}</h3>
            <span class="new-filter__block-btn"></span>
          </div>
        </div>
      </div>`
  );
};


export default class EmptyFilterComponent extends Abstract {
  constructor(filterName) {
    super();

    this._filterName = filterName;

    this._toggleHandler = this._toggleHandler.bind(this);
    this._setAllHandlers();
  }

  getTemplate() {
    return createEmptyFilterTemplate(this._filterName);
  }

  _toggleHandler = () => {
    if (this._toggle.classList.contains("new-filter__block-btn--opened")) {
      this._toggle.classList.remove("new-filter__block-btn--opened");
    } else {
      this._toggle.classList.add("new-filter__block-btn--opened");
    }
  }


  _setAllHandlers() {
    this._toggle = this.getElement().querySelector(`.new-filter__toggle`);
    this._list = this.getElement().querySelector('.new-filter__list-container');
    this._checkboxInput = this.getElement().querySelector('input[type="checkbox"]');

    this._toggle.addEventListener('click', this._toggleHandler);
  }
}

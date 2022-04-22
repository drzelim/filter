import Abstract from "./abstarct.js";

const createFilterTemplate = (filterName) => {
  return (
    `<div class="new-filter__block new-filter__open-field">
      <div class="new-filter__header">
        <div class="new-filter__toggle new-filter__block-btn--opened">
          <h3>${filterName}</h3>
          <span class="new-filter__block-btn"></span>
        </div>
      </div>
      <div class="new-filter__list-container">
        <ul class="new-filter__list">
          <li class="new-filter__list-item new-filter__list-item--all">
            <label class="new-filter__checkbox">
              <input class="visually-hidden" type="checkbox" name="all" />
              <span class="new-filter__checkbox-indicator"></span>
              <span>Выбрать все</span>
            </label>
          </li>
        </ul>
        <div class="new-filter__buttons-container">
        <div class="new-filter__show-more-container">

        </div>
        <div class="new-filter__reset-btn-container">
          <button class="new-filter__reset-btn" type="button">
            Сбросить
          </button>
        </div>
      </div>
      </div>
    </div>`
  );
}

export default class FilterComponent extends Abstract {
  constructor(filterName) {
    super();

    this._filterName = filterName;

    this._toggle = null;
    this._list = null;
    this._checkboxInput = null;

    this._toggleHandler = this._toggleHandler.bind(this);

    this._checkboxResetHandler = this._checkboxResetHandler.bind(this);
    this._selectAllCheckboxHandler = this._selectAllCheckboxHandler.bind(this);
    this._renderTooltipHandler = this._renderTooltipHandler.bind(this);

    this._setAllHandlers();
  }

  getTemplate() {
    return createFilterTemplate(this._filterName);
  }

  _checkboxResetHandler() {
    this._checkboxInput.checked = false;
    this._callbacks.resetHandler();
    this._callbacks.tooltipHandler();
  }

  setCheckboxResetHandler(callback) {
    this._callbacks.resetHandler = callback;
    this.getElement().querySelector(`.new-filter__reset-btn`)
      .addEventListener('click', this._checkboxResetHandler);
  }

  _selectAllCheckboxHandler(evt) {
    this._callbacks.allCheckboxHandler(evt)
  }

  setSelectAllCheckboxHandler(callback) {
    this._callbacks.allCheckboxHandler = callback;
    this._checkboxInput.addEventListener('change', this._selectAllCheckboxHandler);
  }

  _toggleHandler = () => {
    if (this._toggle.classList.contains("new-filter__block-btn--opened")) {
      this._toggle.classList.remove("new-filter__block-btn--opened");
      this._list.style.display = "none";
    } else {
      this._toggle.classList.add("new-filter__block-btn--opened");
      this._list.style.display = "block";
    }
  }

  _renderTooltipHandler() {
    this._callbacks.tooltipHandler();
  }

  setRenderTooltipHandler(callback) {
    this._callbacks.tooltipHandler = callback;
    this._checkboxInput.addEventListener('change', this._renderTooltipHandler);
  }

  _setAllHandlers() {
    this._toggle = this.getElement().querySelector(`.new-filter__toggle`);
    this._list = this.getElement().querySelector('.new-filter__list-container');
    this._checkboxInput = this.getElement().querySelector('input[type="checkbox"]');

    this._toggle.addEventListener('click', this._toggleHandler);
  }
}

import Smart from "./smart.js";

const createButtonsTemplate = (filterJSON) => {
  return (
    `<button class="new-filter__show-more ${filterJSON.length < 10 ? 'hidden' : ''}" type="button">Показать еще</button>`
  );
}

export default class ButtonComponent extends Smart {
  constructor(filterJSON) {
    super();

    this._filterJSON = filterJSON;

    this._showMoreFiltersHandler = this._showMoreFiltersHandler.bind(this);
  }

  getTemplate() {
    return createButtonsTemplate(this._filterJSON);
  }

  _showMoreFiltersHandler() {
    this._callbacks.showMoreHadler();
  }

  setShowMoreFiltersHandler(callback) {
    this._callbacks.showMoreHadler = callback;
    this.getElement().addEventListener('click', this._showMoreFiltersHandler)
  }
}

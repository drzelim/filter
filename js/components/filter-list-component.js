import Abstract from "./abstarct.js";

const createtFilterTemplate = (filter) => {
  return (
    `<li class="new-filter__list-item">
      <label class="new-filter__checkbox">
        <input class="visually-hidden" type="checkbox" name="${filter.name}" ${filter.flag ? 'checked' : ''}/>
        <span class="new-filter__checkbox-indicator"></span>
        <span class="new-filter__checkbox-value">${filter.value}</span>
      </label>
    </li>`
  )
}

export default class FilterListComponent extends Abstract {
  constructor(filter) {
    super();

    this._filter = filter;

    this._checkbox = this.getElement().querySelector('input[type="checkbox"]');
    this._renderTooltipHandler = this._renderTooltipHandler.bind(this);
  }

  getTemplate() {
    return createtFilterTemplate(this._filter);
  }

  reset() {
    this._checkbox.checked = false;
  }

  selected() {
    this._checkbox.checked = true;
  }

  _renderTooltipHandler() {
    this._callbacks.tooltipHandler();
  }

  setRenderTooltipHandler(callback) {
    this._callbacks.tooltipHandler = callback;
    this._checkbox.addEventListener('change', this._renderTooltipHandler);
  }

  getCheckboxStatus() {
    return this._checkbox.checked;
  }
}

import FilterComponent from "../components/filter-component.js";
import FilterListComponent from "../components/filter-list-component.js";
import ButtonComponent from "../components/button.js";
import { render, remove } from "../utils/render.js";


const SHOWED_FILTER_COUNT = 10;
// const SHOWED_FILTER_BY_BUTTON = 10;

export default class FilterPresenter {
  constructor(filterContainer, filterArray, filterName, renderTooltip) {
    this._filterContainer = filterContainer;
    this._filterArray = filterArray;
    this._filterName = filterName;
    this._renderTooltip = renderTooltip;

    this._showingFilters = [];
    // this._filterAmount = SHOWED_FILTER_COUNT;

    this._filterList = null;
    this._showMoreButtonContainer = null;

    this._renderedFilters = [];

    this._filterComponent = null;
    this._buttonsComponent = null;
    this._tooltip = null;

    this._setButtonResetHandler = this._setButtonResetHandler.bind(this);
    this._setAllCheckedHandler = this._setAllCheckedHandler.bind(this);
    this._setMoreFiltersHandler = this._setMoreFiltersHandler.bind(this);
  }

  init() {
    this._renderFilterComponent();

    this._filterArray.length > SHOWED_FILTER_COUNT ? this._showingFilters = this._filterArray.slice(0,  SHOWED_FILTER_COUNT) : this._showingFilters = this._filterArray;

    this._renderFilters();

    this._renderShowMoreButton();
  }

  _renderFilterComponent() {
    this._filterComponent = new FilterComponent(this._filterName);
    this._filterList = this._filterComponent.getElement().querySelector('.new-filter__list');

    render(this._filterContainer, this._filterComponent);
    this._filterComponent.setCheckboxResetHandler(this._setButtonResetHandler);
    this._filterComponent.setSelectAllCheckboxHandler(this._setAllCheckedHandler);
    this._filterComponent.setRenderTooltipHandler(this._renderTooltip(this._filterComponent.getElement().querySelector('.new-filter__list-item--all')));
  }

  _renderFilters() {
    this._showingFilters.forEach((item) => {
      const filterListComponent = new FilterListComponent(item);
      filterListComponent.setRenderTooltipHandler(this._renderTooltip(filterListComponent.getElement()));
      this._renderedFilters.push(filterListComponent);
      render(this._filterList, filterListComponent);
    });
  }

  _renderShowMoreButton() {
    this._showMoreButtonContainer = this._filterComponent.getElement().querySelector('.new-filter__show-more-container');
    this._buttonsComponent = new ButtonComponent(this._filterArray);
    this._buttonsComponent.setShowMoreFiltersHandler(this._setMoreFiltersHandler);
    render(this._showMoreButtonContainer, this._buttonsComponent);
  }

  _setMoreFiltersHandler() {
    // let prevFilterCount = this._filterAmount;
    // this._filterAmount += SHOWED_FILTER_BY_BUTTON;

    this._showingFilters = this._filterArray.slice(SHOWED_FILTER_COUNT);
    this._renderFilters();

    // this._filterAmount >= this._filterArray.length &&
    remove(this._buttonsComponent);
  }

  _setButtonResetHandler() {
    this._renderedFilters.forEach((item) => item.reset());
  }

  _setAllCheckedHandler(evt) {
    if (!evt.target.checked) {
      this._renderedFilters.forEach((item) => item.reset());
      return;
    }
    this._renderedFilters.forEach((item) => item.selected());
  }
}

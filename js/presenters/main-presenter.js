import EmptyFilterComponent from "../components/empty-filter-component.js";
import Slider from "../components/slider-component.js";
import Tooltip from "../components/tooltip.js";
import { remove, render } from "../utils/render.js";
import FilterPresenter from "./filter-presenter.js";

const filterContainer = document.querySelector('#new-filter');

export default class MainPresenter {
  constructor(filterModel) {
    this._filterModel = filterModel;

    this._filterPresenters = [];

    this._tooltip = null;

    this._renderTooltip = this._renderTooltip.bind(this);

    this._filterJSON = null;
  }

  async init() {
    this._filterJSON = await this._filterModel.getFilterJSON();
    Object.keys(this._filterJSON.sliders).forEach((key) => {
      const slider = this._filterJSON.sliders[key];
      const sliderComponent = new Slider(slider);
      sliderComponent.setRenderTooltipHandler(this._renderTooltip(sliderComponent.getElement()));
      render(filterContainer, sliderComponent);
      sliderComponent.create();
    })

    Object.keys(this._filterJSON.filters).forEach((key) => {
      if (this._filterJSON.filters[key].length === 0) {
        const emptyFilterComponent = new EmptyFilterComponent(key);
        render(filterContainer, emptyFilterComponent);
      } else {
        const filterPresenter = new FilterPresenter(filterContainer, this._filterJSON.filters[key], key, this. _renderTooltip);
        filterPresenter.init();
      }
    });
  }

  _renderTooltip(container) {
    return async () => {
      remove(this._tooltip);
      const tooltipCount = await this._filterModel.getFilterCount();
      this._tooltip = new Tooltip(tooltipCount);
      render(container, this._tooltip);
    }
  }
}

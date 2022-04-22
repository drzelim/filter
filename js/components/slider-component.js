import Abstract from "./abstarct.js";
import noUiSlider from "../nouislider/nouislider.mjs";

const createSliderTemplate = (name, step, value) => {
  return (
    `<div class="new-filter__block new-filter__slider-container">
      <h3>${value}</h3>
      <div class="new-filter__price-fields">
        <input class="new-filter__number-fields" type="nubmer" name="min-${name}" step="${step}" />
        <input class="new-filter__number-fields" type="nubmer" name="max-${name}" step="${step}" />
      </div>
      <div class="new-filter__slider" id="new-filter-price-slider">
      </div>
    </div>`
  );
};

export default class Slider extends Abstract{

  constructor(slider) {
    super();

    this._name = slider.name;
    this._min = slider.min;
    this._max = slider.max;
    this._step = slider.step;
    this._value = slider.value;

    this._container = null;
    this._inputFormatMin = null;
    this._inputFormatMax = null;

    this._setInputsUpdateHandlers = this._setInputsUpdateHandlers.bind(this);
    this._setSliderUpdateHandler = this._setSliderUpdateHandler.bind(this);
  }

  getTemplate() {
    return createSliderTemplate(this._name, this._step, this._value);
  }

  create() {
    this._container = this.getElement().querySelector('#new-filter-price-slider');
    this._inputFormatMin = this.getElement().querySelector(`.new-filter__number-fields[name="min-${this._name}"]`);
    this._inputFormatMax =  this.getElement().querySelector( `.new-filter__number-fields[name="max-${this._name}"]`);

    noUiSlider.create(this._container, {
      start: [this._min, this._max],
      connect: true,
      range: {
        min: this._min,
        max: this._max,
      },
      step: parseFloat(this._step),
      format: {
        to: (value) => {
          return this._step > 1 ? Math.round(value) : +value.toFixed(1);
        },
        from: (value) => {
          return Number(value);
        },
      },
    });

    this._setSliderHandlers();
  }

  _setSliderUpdateHandler() {
    this._container.noUiSlider.on("update", (values) => {
      this._inputFormatMin.value = values[0];
      this._inputFormatMax.value = values[1];
    });
    this._container.noUiSlider.on("change", this._callbacks.tooltipHandler);
  }

  _setInputsUpdateHandlers() {
    this._inputFormatMin.addEventListener("change", () => {
      this._container.noUiSlider.set([this._inputFormatMin.value, null]);
      this._callbacks.tooltipHandler();
    });

    this._inputFormatMax.addEventListener("change", () => {
      this._container.noUiSlider.set([null, this._inputFormatMax.value]);
      this._callbacks.tooltipHandler();
    });
  }

  _setSliderHandlers() {
    this._setInputsUpdateHandlers();
    this._setSliderUpdateHandler();
  }

  setRenderTooltipHandler(callback) {
    this._callbacks.tooltipHandler = callback;
  }
}




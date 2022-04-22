import Abstract from "./abstarct.js";

const createTooltipTemplate = count => {
  return (
    `<div class="new-filter__tooltip">Показать ${count}</div>`
  );
};

export default class Tooltip extends Abstract {
  constructor(count) {
    super();

    this._count = count;
  }

  getTemplate() {
    return createTooltipTemplate(this._count);
  }
}

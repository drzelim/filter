import { filterJSON, getRandomInt } from "../mock/mock.js";

export default class FilterModel {

  getFilterJSON() {
    return filterJSON;
  }

  getFilterCount() {
    return getRandomInt(0, 250);
  }

}

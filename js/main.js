import './presenters/filter-presenter.js';
import MainPresenter from './presenters/main-presenter.js';
import FilterModel from './model/filter-model.js';

const filterModel = new FilterModel();

const mainPresenter = new MainPresenter(filterModel);
mainPresenter.init();

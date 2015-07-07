import {serviceLocator} from 'dash-core'
import {gitStyle} from 'dash-github/styles/gitStyle.css!css'
import * as dashGithub from 'dash-github'

export class GitDashboard{

  components = [];
  layout = {};

  constructor () {

    var componentsForCompose = [
      {id: 1, viewModel:'dash-github/components/singleValueComponent/gitSingleValueComponent'},
      {id: 1, viewModel:'dash-github/components/imageGrid/imageGrid'}
    ];

    this.layout.path = 'dash-component/layouts/floatLayout/floatLayout';
    this.layout.model = {componentsForCompose : componentsForCompose};

  }

  activate(params) {
  }

  attached() {
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}

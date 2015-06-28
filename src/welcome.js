import {serviceLocator} from 'dash-core'

export class welcome{

  components = [];
  layout = {};

  constructor () {

    var componentsForCompose = [
      //{id: 1, viewModel:'dash-component/components/baseComponent/baseComponent'}
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'}
    ];

    this.layout.path = 'dash-component/layouts/floatLayout/floatLayout';
    this.layout.model = {componentsForCompose : componentsForCompose};

  }

  activate(params) {
    //this.params = params;
    //this.clientId = params.clientId;
    var that = this;
  }

  attached() {
  }



  buildScreen(screenInfo) {
    for(let activeComponent of screenInfo.ActiveComponents)
    {
      var componentPath = activeComponent.Component.ComponentPath;

      var propertyValueObj = {};

      for(let pv of activeComponent.PropertyValues)
      {
        propertyValueObj[pv.Property.Name] = pv.Value;
      }

      this.components.push({component: activeComponent.Component, propertyValues : propertyValueObj,type:'components/'+componentPath+'/'+componentPath+'-component'});

    }

  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}

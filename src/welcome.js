import {serviceLocator} from 'dash-core'

export class welcome{

  components = [];


  constructor () {
    var modelLoader =  serviceLocator.services.componentLoader;

    var componentPromise = modelLoader
                            .loadComponentsForCompose([{id: 1, viewModel:'components/testComponent/testComponent'}])
                            .then((c)=>{
                                c.forEach((com)=> {
                                  this.components.push(com);
                                });
                            });
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

import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {ServiceLocator} from 'dash-core'
import * as dashComponent from 'dash-component'

export class App {

  constructor()
  {
    this.insertComponentModels();
    ServiceLocator.services.chromeComponentInfo.path = 'dash-component' + ServiceLocator.services.chromeComponentInfo.path;
  }

  insertComponentModels()
  {
    ServiceLocator.services.componentModelLoader.models[1] = { id:1, configurationProperties : {}, layoutInfo : {} };
  }

  configureRouter(config, router){
    config.title = 'Aurelia';
    //config.addPipelineStep('modelbind',modelbind);
    config.map([
      { route: [''],  moduleId: './dashboards/basic/basicDashboard',      nav: true, title:'Basic Dashboard' },
      { route: ['git'],  moduleId: './dashboards/git/gitDashboard',      nav: true, title:'Git Dashboard' }
    ]);

    this.router = router;
  }
}

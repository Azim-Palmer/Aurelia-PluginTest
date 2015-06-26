import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {serviceLocator} from 'dash-core'
import {componentLoader,componentModelLoader} from 'dash-component'

export class App {

  constructor()
  {
    serviceLocator.services.componentLoader = new componentLoader();
    serviceLocator.services.componentModelLoader = new componentModelLoader();

    this.insertComponentModels();
  }

  insertComponentModels()
  {
    serviceLocator.services.componentModelLoader.models[1] = { id:1, ConfigurationProperties : {}, LayoutInfo : {} };
  }

  configureRouter(config, router){
    config.title = 'Aurelia';
    //config.addPipelineStep('modelbind',modelbind);
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',        moduleId: './flickr',       nav: true },
      { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}

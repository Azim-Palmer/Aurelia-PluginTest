import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {ServiceLocator} from 'dash-core'
import * as dashComponent from 'dash-component'

export class App {

  constructor()
  {
    this.insertComponentModels();
    this.insertAreaModels();
    ServiceLocator.services.chromeComponentInfo.path = 'dash-component' + ServiceLocator.services.chromeComponentInfo.path;
  }

  insertAreaModels()
  {

    // ToDo: Update this as it's been pulled straight out of the baseAreaLoader

    //var mockAreaResponse = new AreaConfiguration();
    //
    //mockAreaResponse.areaLayout = new AreaLayout();
    //mockAreaResponse.areaLayout.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
    //
    //var layoutConfig = new LayoutConfiguration();
    //layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
    //layoutConfig.componentsForCompose = [
    //  {id: 1, viewModel:'dash-github/components/singleValueComponent/gitSingleValueComponent'},
    //  {id: 1, viewModel:'dash-github/components/imageGrid/imageGrid'}
    //];
    //
    //mockAreaResponse.layouts.push(layoutConfig);
    //
    //
    //layoutConfig = new LayoutConfiguration();
    //layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
    //layoutConfig.componentsForCompose = [
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'},
    //  {id: 1, viewModel:'components/testComponent/testComponent'}
    //];
    //
    //mockAreaResponse.layouts.push(layoutConfig);
  }

  insertComponentModels()
  {
    ServiceLocator.services.componentModelLoader.getModels()[1] = { id:1, configurationProperties : {}, layoutInfo : {} };
  }

  configureRouter(config, router){
    config.title = 'Aurelia';
    //config.addPipelineStep('modelbind',modelbind);
    config.map([
      { route: ['','b/:areaId'],  moduleId: './dashboards/dash/Dashboard',      nav: true, title:'Dash Dashboard' },
      { route: ['basicDashboard'],  moduleId: './dashboards/basic/basicDashboard',      nav: true, title:'Basic Dashboard' },
      { route: ['git'],  moduleId: './dashboards/git/gitDashboard',      nav: true, title:'Git Dashboard' }
    ]);

    this.router = router;
  }
}

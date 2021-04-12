import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  // from add-ons:
  sassOptions = {
    includePaths: ['node_modules/bootstrap/scss'],
  };
}

loadInitializers(App, config.modulePrefix);

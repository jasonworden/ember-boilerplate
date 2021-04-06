import Route from '@ember/routing/route';

export default class PlaygroundRoute extends Route {
  beforeModel(transition) {
    console.log('Playground route -- beforeModel hook -- model and transition:', transition);
  }

  async model(params, transition) {
    console.log('Playground route -- afterModel hook -- params:', params);
    return {
      firstName: 'Jason',
      lastName: 'FromModel',
    };
  }

  afterModel(model, transition) {
    console.log('Playground route -- afterModel hook -- model:', model);
  }

  redirect(model, transition) {
    console.log('Playground route -- redirect hook -- model:', model);
  }
}

import Bluebird from 'bluebird';

import Controller from '@ember/controller';
import { reads } from '@ember/object/computed';
import { dropTask } from 'ember-concurrency';

export default class PlaygroundController extends Controller {
  @reads('model.firstName') firstName;
  @reads('model.lastName') lastName;

  // ember-concurrency decorators: http://ember-concurrency.com/docs/task-decorators#task
  // ember-concurrency-async: https://github.com/chancancode/ember-concurrency-async
  @dropTask async log(...args) {
    await Bluebird.delay(250);
    console.log('Playground controller log task:', ...args);
  }
}

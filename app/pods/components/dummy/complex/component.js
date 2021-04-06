import Component from '@ember/component';
import { task } from 'ember-concurrency';
import Bluebird from "bluebird";

// Ember Component API reference: https://api.emberjs.com/ember/3.12/classes/Component
// Lifecycle hooks guide: https://guides.emberjs.com/v3.12.0/components/the-component-lifecycle/

export default Component.extend({
  init(...args) {
    this._super(...args);
  },

  didReceiveAttrs(...args) {
    this._super(...args);
  },

  didUpdateAttrs(...args) {
    this._super(...args);
  },

  willDestroyElement(...args) {
    this._super(...args);
  },

  log: task(function * (...args) {
    yield Bluebird.delay(250);
    console.log('<Dummy::Complex /> log task:', ...args);
  }).drop(),

  actions: {
    log(...args) {
      console.log('<Dummy::Complex /> log action:', ...args);
    },
  },
});

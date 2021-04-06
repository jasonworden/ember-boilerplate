import Component from '@ember/component';
import { computed } from '@ember/object';
import Bluebird from "bluebird";

export default Component.extend({
  firstName: 'DefaultFirst',
  lastName: 'DefaultLast',

  fullName: computed('firstName', 'lastName', function () {
    return `${this.firstName} ${this.lastName}`;
  }),
});

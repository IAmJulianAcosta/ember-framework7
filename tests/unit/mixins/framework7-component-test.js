import Ember from 'ember';
import Framework7ComponentMixin from 'ember-framework7/mixins/framework7-component';
import { module, test } from 'qunit';

module('Unit | Mixin | framework7 component');

// Replace this with your real tests.
test('it works', function(assert) {
  let Framework7ComponentObject = Ember.Object.extend(Framework7ComponentMixin);
  let subject = Framework7ComponentObject.create();
  assert.ok(subject);
});

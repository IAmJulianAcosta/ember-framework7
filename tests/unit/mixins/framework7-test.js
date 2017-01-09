import Ember from 'ember';
import Framework7Mixin from 'ember-framework7/mixins/framework7';
import { module, test } from 'qunit';

module('Unit | Mixin | framework7');

// Replace this with your real tests.
test('it works', function(assert) {
  let Framework7Object = Ember.Object.extend(Framework7Mixin);
  let subject = Framework7Object.create();
  assert.ok(subject);
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('side-panels/panel-overlay', 'Integration | Component | side panels/panel overlay', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{side-panels/panel-overlay}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#side-panels/panel-overlay}}
      template block text
    {{/side-panels/panel-overlay}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('f7-toolbar-tab', 'Integration | Component | f7 toolbar tab', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{f7-toolbar-tab}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#f7-toolbar-tab}}
      template block text
    {{/f7-toolbar-tab}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

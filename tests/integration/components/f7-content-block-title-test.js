import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('f7-content-block-title', 'Integration | Component | f7 content block title', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{f7-content-block-title}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#f7-content-block-title}}
      template block text
    {{/f7-content-block-title}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

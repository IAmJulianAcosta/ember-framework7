import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('f7-statusbar-overlay', 'Integration | Component | f7 statusbar overlay', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{f7-statusbar-overlay}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#f7-statusbar-overlay}}
      template block text
    {{/f7-statusbar-overlay}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

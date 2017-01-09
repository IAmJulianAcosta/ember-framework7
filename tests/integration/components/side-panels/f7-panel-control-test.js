import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('side-panels/f7-panel-control', 'Integration | Component | side panels/f7 panel control', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{side-panels/f7-panel-control}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#side-panels/f7-panel-control}}
      template block text
    {{/side-panels/f7-panel-control}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

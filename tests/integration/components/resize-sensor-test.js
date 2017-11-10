import { htmlSafe } from "@ember/string";
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resize-sensor', 'Integration | Component | resize sensor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  assert.expect(2);

  this.render(hbs`{{resize-sensor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resize-sensor}}
      template block text
    {{/resize-sensor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('when the target changes sizes it will trigger the action', function(assert){
  
    assert.expect(1);
  
    this.set('style', htmlSafe('width: 500px; height: 500px;'));
  
    this.on('resized', function(element){
      const updated = {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
      assert.deepEqual(updated, { width: 250, height: 250 }, 'received updated size');
    });
  
    this.render(hbs`
    <div style={{style}}>
      {{#resize-sensor onResize='resized'}}
      {{/resize-sensor}}
    </div>
    `);
  
    this.set('style', htmlSafe('width: 250px; height: 250px;'));
  });
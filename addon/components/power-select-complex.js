import Ember from 'ember';
import layout from '../templates/components/power-select-complex';

export default Ember.Component.extend({
  tagName: '',
  layout: layout,
  triggerComponent: 'power-select-complex/trigger',
  complexParams: [{}]
});

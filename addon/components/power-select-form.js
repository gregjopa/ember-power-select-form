import Ember from 'ember';
import layout from '../templates/components/power-select-form';

export default Ember.Component.extend({
  tagName: '',
  layout: layout,
  triggerComponent: 'power-select-form/trigger',
  options: [{}]
});

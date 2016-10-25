import Ember from 'ember';
import layout from '../../templates/components/power-select-form/trigger';

export default Ember.Component.extend({
  layout,
  actions: {
    clear(opt, i, e) {
      e.stopPropagation();

      const select = this.get('select');
      const selected = Ember.copy(select.selected);

      selected.splice(i, 1);
      select.actions.select(selected);
    }
  }
});

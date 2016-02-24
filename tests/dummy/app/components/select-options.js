import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  submit: 'select',

  allRegions: Ember.A([
    { name: 'Unknown', value: -1 },
    { name: 'West', value: 1 },
    { name: 'East', value: 2 },
    { name: 'Central', value: 3 }
  ]),

  formFields: Ember.computed('selected', function () {

    // convert the "selected" array into a map where id is the key
    let selectedMap = this.get('selected').reduce(function (map, obj) {
      map[obj.id] = obj;
      return map;
    }, {});

    return Ember.copy(selectedMap);

  }),

  selectedRegions: Ember.computed('formFields', function () {

    let regions = this.get('formFields.regions.values') || [];
    return regions.map(region => this.get('allRegions').findBy('name', region.name));

  }),

  getLabel(arr) {

    // create a comma separated list of names
    return arr.reduce((prev, curr) => {
      prev = prev.length ? prev + ', ' : prev;
      return prev + curr.name;
    }, '');

  },

  actions: {

    submitForm() {

      // transform selected form values

      let startDate = moment(this.get('formFields.startDate.value')).format('MMM D, YYYY');
      let endDate = moment(this.get('formFields.endDate.value')).format('MMM D, YYYY');

      this.set('formFields.startDate.name', startDate);
      this.set('formFields.endDate.name', endDate);

      this.set('formFields.regions.values', this.get('selectedRegions'));
      this.set('formFields.regions.name', this.getLabel(this.get('selectedRegions')));


      let formFields = this.get('formFields');
      let params = [formFields.startDate, formFields.endDate, formFields.regions];

      // send the updated params along by triggering the "onchange" ember-power-select event
      this.get('select').actions.choose(params);

    },

    closeDropdown() {
      this.get('select').actions.close();
    }

  }

});

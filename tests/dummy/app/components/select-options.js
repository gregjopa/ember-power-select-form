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

  // form field values
  formFields: Ember.computed(function () {

    const selected = Ember.copy(this.get('select.selected'));

    // if endDate is missing add an empty value for it (isDismissible)
    if (selected.length === 2) {
      selected.splice(1, 0, {});
    }

    return {
      startDate: {
        label: 'Start Date',
        name: selected[0].name,
        value: selected[0].value
      },
      endDate: {
        label: 'End Date',
        name: selected[1].name,
        value: selected[1].value
      },
      regions: {
        label: 'Regions',
        name: selected[2].name,
        values: selected[2].values
      }
    };

  }),

  selectedRegions: Ember.computed('formFields', function () {

    const regions = this.get('formFields.regions.values') || [];
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

    submit(e) {

      e.preventDefault();

      // transform selected form values
      const formFields = this.get('formFields');
      const dateFormat = 'MMM D, YYYY';

      const startDate = moment(formFields.startDate.value).format(dateFormat);

      this.set('formFields.startDate.name', startDate);
      this.set('formFields.regions.values', this.get('selectedRegions'));
      this.set('formFields.regions.name', this.getLabel(this.get('selectedRegions')));

      const params = [formFields.startDate, formFields.regions];


      if (formFields.endDate.value) {
        const endDate = moment(formFields.endDate.value).format(dateFormat);
        this.set('formFields.endDate.name', endDate);
        this.set('formFields.endDate.isDismissible', true);

        params.splice(1, 0, formFields.endDate);
      }

      // send the updated params along by triggering the "onchange" ember-power-select event
      this.get('select').actions.select(params);
      this.get('select').actions.close();

    },

    closeDropdown() {
      this.get('select').actions.close();
    }

  }

});

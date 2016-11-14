import Ember from 'ember';

export default Ember.Controller.extend({

  // default values for multi-select
  selected: [
    {
      label: 'Start Date',
      name: 'Jan 1, 2016',
      value: '2016-01-01'
    },
    {
      label: 'End Date',
      isDismissible: true,
      name: 'Jan 31, 2016',
      value: '2016-01-31'
    },
    {
      label: 'Regions',
      name: 'East, Central',
      values: [
        { name: 'East', value: 2 },
        { name: 'Central', value: 3 }
      ]
    }
  ],

  actions: {
    updateSelected(params) {
      console.log('updateSelected', params);
      this.set('selected', params);
    }
  }

});

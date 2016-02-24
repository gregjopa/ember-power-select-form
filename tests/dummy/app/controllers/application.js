import Ember from 'ember';

export default Ember.Controller.extend({

  selected: [
    {
      id: 'startDate',
      label: 'Start Date',
      name: 'Jan 1, 2016',
      value: '2016-01-01'
    },
    {
      id: 'endDate',
      label: 'End Date',
      name: 'Jan 31, 2016',
      value: '2016-01-31'
    },
    {
      id: 'regions',
      label: 'Regions',
      // isDismissible: true,
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

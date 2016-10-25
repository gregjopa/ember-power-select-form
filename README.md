# Ember-Power-Select-Form

This addon provides the ability to embed a form into a multi-select component. This design provides a unified way to list all of the selected values for different datasets in a single multi-select component. This same multi-select component UI design is used on the Twitter Analytics website on the Audiences report page.

![power select form screenshot](https://github.com/gregjopa/ember-power-select-form/raw/master/power_select_form_screenshot.png)

## Addon Architecture

* Overrides `triggerComponent` to be read-only (no filtering)
* Only uses the `selected` option for managing items (`options` is not used at all)
* Create your own `optionsComponent` for embedding a form
* Uses the `onchange` event to update the `selected` options after form submission
* Only works for `power-select-multiple` not a single select

## Example

Checkout the example ember app in the tests/dummy to see how to use this component.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-power-select-form`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

import Ember from 'ember';

/* global Dom7 */

export default Ember.Service.extend (
	Ember.Evented,
	{
		Dom7 : Dom7,
		subscribe () {
			return this.on.apply(this, arguments);
		},
		unsubscribe () {
			return this.off.apply(this, arguments);
		},
		publish () {
			return this.trigger.apply(this, arguments);
		}
	}
);
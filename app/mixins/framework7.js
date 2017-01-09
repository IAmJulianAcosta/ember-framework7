import Ember from 'ember';

export default Ember.Mixin.create (
	{
		subscribe (eventName, method) {
			this.get ("f7").subscribe(eventName, this, method);
		},
		unsubscribe (eventName) {
			this.get ("f7").unsubscribe(eventName);
		},
		publish (eventName) {
			this.get ("f7").publish(eventName);
		},
		$$ (selector) {
			const Dom7 = this.get ("f7.Dom7");
			//No argument passed, return selector for this element.
			if (Ember.isNone(selector)) {
				return Dom7 (this.get ("element"));
			}
			else {
				return Dom7 (this.get ("element")).children (selector);
			}
		},
		framework7  : Ember.computed.alias ("f7.f7"),
	}
);

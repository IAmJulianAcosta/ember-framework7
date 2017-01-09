import Ember from 'ember';

export default Ember.Component.extend (
	{
		allowedEffects    : [
			"cover",
			"reveal"
		],
		allowedLocations  : [
			"left",
			"right"
		],
		classNames        : ["panel"],
		classNameBindings : ['getClassNames'],
		getClassNames     : Ember.computed (
			'location',
			'effect',
			function () {
				let classNames = [];
				let location   = this.get ("location");
				let effect     = this.get ("effect");
				
				Ember.assert ("Effect invalid, must be one of two defined on allowedEffects property",
				              this.get ("allowedEffects").includes (effect));
				Ember.assert ("Location invalid, must be one of two defined on allowedLocations property",
				              this.get ("allowedLocations").includes (location));
				
				classNames.push (`panel-${location}`);
				classNames.push (`panel-${effect}`);
				
				return classNames.join (' ');
			}
		),
	}
);

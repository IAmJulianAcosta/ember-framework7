import Ember from 'ember';

export default Ember.Component.extend (
	{
		tagName: 'a',
		allowedActions   : [
			"open",
			"close"
		],
		allowedLocations : [
			"left",
			"right"
		],
		classNameBindings : ['getClassNames'],
		attributeBindings : ['panel:data-panel'],
		getClassNames     : Ember.computed (
			'action',
			function () {
				let classNames = [];
				let action     = this.get ("action");
				
				Ember.assert ("Effect invalid, must be one of two defined on allowedActions property",
				              this.get ("allowedActions").includes (action));
				
				classNames.push (`${action}-panel`);
				
				return classNames.join (' ');
			}
		),
		
	}
);

import Ember from 'ember';

export default Ember.Component.extend (
	{
		tagName : "i",
		classNames: [
			"icon",
		],
		classNameBindings: ['getClassNames'],
		getClassNames: Ember.computed(
			'iconName',
			function() {
				return ["icon-" + this.get ("iconName")];
			}
		)
	}
);

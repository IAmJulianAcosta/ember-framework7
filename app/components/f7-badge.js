import Ember from 'ember';

export default Ember.Component.extend(
	{
		tagName : "span",
		classNames: [
			"badge",
		],
		classNameBindings: ['getClassNames'],
		getClassNames: Ember.computed(
			'background',
			function() {
				return ["bg-" + this.get ("background")];
			}
		),
	}
);

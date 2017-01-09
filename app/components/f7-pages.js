import Ember from 'ember';

export default Ember.Component.extend (
	{
		classNames: ['pages'],
		classNameBindings: [
			'fixedLayout:navbar-fixed',
			'fixedLayout:toolbar-fixed',
			'throughLayout:navbar-through',
			'throughLayout:toolbar-through',
			'navbarFixed',
			'toolbarFixed',
			'navbarThrough',
			'toolbarThrough',
			'tabbarLabelsThrough',
			'tabbarLabelsFixed'
		],
		fixedLayout: Ember.computed.equal ("layout", "fixed"),
		throughLayout: Ember.computed.equal ("layout", "through")
	}
);
import Ember from 'ember';

export default Ember.Component.extend (
	{
		tagName: 'form',
		classNames: ['searchbar'],
		placeHolder: 'Search',
		cancel: 'Cancel'
	}
);

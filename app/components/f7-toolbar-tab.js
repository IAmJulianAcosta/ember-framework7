import Ember from 'ember';

export default Ember.Component.extend (
	{
		tagName    : 'a',
		classNames : ['tab-link'],
		attributeBindings: ['href']
	}
);

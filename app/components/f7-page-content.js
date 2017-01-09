import Ember from 'ember';
import framework7 from '../mixins/framework7';
import framework7Component from '../mixins/framework7-component';

export default Ember.Component.extend (
	framework7,
	framework7Component,
	{
		classNames        : ["page-content"],
		classNameBindings : [
			"hideBarsOnScroll",
			"hideNavbarOnScroll",
			"hideToolbarOnScroll",
			"hideTabbarOnScroll",
			"keepBarsOnScroll",
			"keepNavbarOnScroll",
			"keepToolbarOnScroll",
			"keepTabbarOnScroll"
		]
	}
);

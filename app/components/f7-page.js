import Ember from 'ember';
import framework7 from '../mixins/framework7';
import framework7Component from '../mixins/framework7-component';

export default Ember.Component.extend (
	framework7,
	framework7Component,
	{
		classNames        : [
			'page',
			'no-navbar'
		],
		classNameBindings : [
			'fixedLayout:navbar-fixed',
			'fixedLayout:toolbar-fixed',
			'withSubnavbar',
			'noNavbar',
			'noToolbar',
			'tabbarLabelsFixed'
		],
		fixedLayout       : Ember.computed.equal ("layout", "fixed"),
		attributeBindings : ['pageName:data-page'],
		didRender () {
//			this.hideNavbar ();
//			this.hideToolbar ();
		},
		hideNavbar () {
			if (this.$$ ().hasClass ("no-navbar")) {
				this.publish ("hideNavbar");
			}
			else {
				this.publish ("showNavbar");
			}
		},
		hideToolbar () {
			if (this.$$ ().hasClass ("no-toolbar")) {
				this.publish ("hideToolbar");
			}
			else {
				this.publish ("showToolbar");
			}
		}
	}
);

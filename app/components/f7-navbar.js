import Ember from 'ember';
import framework7 from '../mixins/framework7';
import framework7Component from '../mixins/framework7-component';

export default Ember.Component.extend (
	framework7,
	framework7Component,
	{
		classNames : ["navbar"],
		init () {
			this.subscribe("hideNavbar", "hide");
			this.subscribe("showNavbar", "show");
			this.subscribe("toggleNavbar", "toggle");
			this._super ();
		},
		
		willDestroyElement () {
			this.unsubscribe("hideNavbar");
			this.unsubscribe("showNavbar");
			this.unsubscribe("toggleNavbar");
		},
		hide () {
			this.set ("visible", false);
			this.get ("framework7").hideNavbar (this.get ("element"));
		},
		show () {
			this.set ("visible", true);
			this.get ("framework7").showNavbar (this.get ("element"));
		},
		toggle () {
			if (this.get ("visible")) {
				this.hide();
			}
			else {
				this.show();
			}
		}
	}
);

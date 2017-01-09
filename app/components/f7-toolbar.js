import Ember from 'ember';
import framework7 from '../mixins/framework7';
import framework7Component from '../mixins/framework7-component';

export default Ember.Component.extend (
	framework7,
	framework7Component,
	{
		classNames: ["toolbar"],
		classNameBindings: [
			"toolbarBottom",
			"tabbar",
		    "tabbarLabels",
		    "tabbarScrollable"
		],
		init () {
			this.subscribe("hideToolbar", "hide");
			this.subscribe("showToolbar", "show");
			this.subscribe("toggleToolbar", "toggle");
			this._super ();
		},
		willDestroyElement () {
			this.unsubscribe("hideToolbar");
			this.unsubscribe("showToolbar");
			this.unsubscribe("toggleToolbar");
		},
		hide () {
			this.set ("visible", false);
			this.get ("framework7").hideToolbar (this.get ("element"));
		},
		show () {
			this.set ("visible", true);
			this.get ("framework7").showToolbar (this.get ("element"));
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

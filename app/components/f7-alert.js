import Ember from 'ember';
import framework7 from '../mixins/framework7';
import framework7Component from '../mixins/framework7-component';

export default Ember.Component.extend (
	framework7,
	framework7Component,
	{
		tagName  : 'a',
		click () {
			if (this.get ("title")) {
				if (this.get ("callback")) {
					this.get ("framework7").alert (this.get ("content"), this.get ("title"), this.get ("callback"));
				}
				else {
					this.get ("framework7").alert (this.get ("content"), this.get ("title"));
				}
			}
			else {
				if (this.get ("callback")) {
					this.get ("framework7").alert (this.get ("content"), this.get ("callback"));
				}
				else {
					this.get ("framework7").alert (this.get ("content"));
				}
			}
		}
	}
);

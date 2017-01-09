import Ember from 'ember';
import framework7 from '../mixins/framework7';

/* global Framework7 */

export default Ember.Component.extend(
	framework7,
	{
		allowedParameters: [
			//Material
			'material',
		    'materialPageLoadDelay',
		    'materialRipple',
		    'materialRippleElements',
		    'materialPreloaderHtml',
		    //Cache
		    'cache',
		    'cacheDuration',
		    'cacheIgnore',
		    'cacheIgnoreGetParameters',
		    //Fastclicks
		    'fastClicks',
		    'fastClicksDelayBetweenClicks',
		    'fastClicksDistanceThreshold',
		    'activeState',
		    'activeStateElements',
		    'tapHold',
		    'tapHoldDelay',
		    'tapHoldPreventClicks',
		    //Router (skip)
		    //Push state (skip)
		    //Swipe back
		    'swipeBackPage',
		    'swipeBackPageThreshold',
		    'swipeBackPageActiveArea',
		    'swipeBackPageAnimateShadow',
		    'swipeBackPageAnimateOpacity',
		    //Sortable
		    'sortable',
		    //Swipe out
		    'swipeout',
		    'swipeoutNoFollow',
		    //Side Panels
		    'swipePanel',
		    'swipePanelCloseOpposite',
		    'swipePanelOnlyClose',
		    'swipePanelActiveArea',
		    'swipePanelNoFollow',
		    'swipePanelThreshold',
		    'panelsCloseByOutside',
		    //Modals
		    'modalTitle',
		    'modalButtonOk',
		    'modalButtonCancel',
		    'modalPreloaderTitle',
		    'modalCloseByOutside',
		    'actionsCloseByOutside',
		    'popupCloseByOutside',
		    'modalTemplate',
		    'modalActionsTemplate',
		    'modalActionsToPopoverTemplate',
		    'modalUsernamePlaceholder',
		    'modalPasswordPlaceholder',
		    'modalStack',
		    //Smart select
		    'smartSelectOpenIn',
		    'smartSelectBackTemplate',
		    'smartSelectPopupCloseTemplate',
		    'smartSelectBackText',
		    'smartSelectPopupCloseText',
		    'smartSelectPickerCloseText',
		    'smartSelectSearchbar',
		    'smartSelectBackOnSelect',
		    'smartSelectFormTheme',
		    'smartSelectNavbarTheme',
		    //Navbars / Toolbars
		    'hideNavbarOnPageScroll',
		    'hideToolbarOnPageScroll',
		    'hideTabbarOnPageScroll',
		    'showBarsOnPageScrollEnd',
		    'showBarsOnPageScrollTop',
		    'scrollTopOnNavbarClick',
		    //Images Lazy Load
		    'imagesLazyLoadThreshold',
		    'imagesLazyLoadSequential',
		    'imagesLazyLoadPlaceholder',
		    //Notifications
		    'notificationTitle',
		    'notificationSubtitle',
		    'notificationMedia',
		    'notificationHold',
		    'notificationCloseOnClick',
		    'notificationCloseIcon',
		    'notificationCloseButtonText',
		    //Status Bar (iOS theme only)
		    'statusbarOverlay',
		    'scrollTopOnStatusbarClick',
			//Template7
		    'template7Pages',
		    'template7Data',
		    'precompileTemplates',
		    'templates',
		    //Page Callbacks
		    'onPageBeforeInit',
		    'onPageInit',
		    'onPageBeforeAnimation',
		    'onPageAfterAnimation',
		    'onPageBeforeRemove',
		    'onPageBack',
		    'onPageAfterBack',
		    //Ajax Callbacks (skip)
		    //Namespace
		    'viewClass',
		    'viewMainClass',
		    'viewsClass',
		    //Init
		    'init'
		],
		/**
		 * Init the framework7 application and store it in service
		 */
		didInsertElement () {
			let framework7 = new Framework7 (
				{
					router: false,
					hideNavbarOnPageScroll: true,
					hideToolbarOnPageScroll: true,
					hideTabbarOnPageScroll: true
				}
			);
			//framework7 is a computed property that references the service f7 property.
			this.set ("framework7", framework7);
			framework7.addView(".view-main", {
				dynamicNavbar: true
			});
			this._super ();
		},
		elementId: "f7-application",
	}
);

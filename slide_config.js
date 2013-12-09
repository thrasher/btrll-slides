var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Title Goes Here<br>Up To Two Lines',
    subtitle: 'Subtitle Goes Here',
    //eventInfo: {
    //  title: 'Google I/O',
    //  date: '6/x/2013'
    //},
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/btrll_circle_red_24x24.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Firstname Lastname',
    company: 'Job Title<br>BrightRoll',
    gplus: 'https://plus.google.com/+JasonBrooksThrasher',
    twitter: '@thrasher',
    www: 'http://kyr.brightroll.com/users/138',
    github: 'http://github.com/thrasher'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, BrightRoll',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};


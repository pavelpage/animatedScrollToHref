# animatedScrollToHref

This is small, but useful plugin. It allows you to animate the scroll from the link to the directed element on this page

## The usage

The easiest way to use it:

```
$(".link-with-href").animatedScrollToHref(".link-with-href",{});

<a href="#id-of-element">click</a>

```
**Important note:** dont't forget to repeat the selector of the link in the first argument of the plugin.

Also plugin has 3 options: 

```
delay: 1300,// the duration of the scroll or of the animation affect
addedHeight: 0,// sometimes your page includes the fixed header, so when you scroll you ahould remember about it and add some padding
afterScroll : function(){},// you cann pass function callback, which will be called after scrolling to element.
            

```
You can see demo page [here](https://demo.pavelpage.ru/animatedScrollToHref/)

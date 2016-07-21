
![about] | By [Federico Levis]
---------|-----------

**Try JSU:** [All Samples]

# JSU CORE Features (Pure JS code, No Requirement)
**JSU** is a Lightweight JavaScript Utility library with the main goal of simplifing developer design. JSU provides following flexible and powerful API in PURE JS code (No other plugin are required):
  - [Validate]:  [Try Validate Sample]  
  - [Tip]:  [Try Validate Sample]  
  - [SortTable]:  [Try SortTable Sample]  
  - [JSLog]:  [Try JSLog Sample]  
  - [LoadingDiv]:  [Try LoadingDiv Sample]  
  - [Blocking Popup]:  [Try Blocking Popup Sample]  
  
<b>JSU</b> features are configured and loaded using **require.js**.  
Previous samples loads all JSU CORE features together with following code that uses **jsu-jq.js** as data-main file for require.js:

```javascript
<!--  JSU css -->
<link rel="stylesheet" href="../../core/core.css" type="text/css">
<link rel="stylesheet" href="../../core/Popup/Popup.css" type="text/css">
<!--  JSU js -->
<script  data-main="../../plugin/jsu.js" src="../../core/require.js"></script>
```
*Code used in the samples to include all the CORE JSU features, with BLocking Popup*

# JSU JQUERY Features: JS Popup (required: jquery, jquery-ui)

  - [JS Popup]:  [Try JS Popup Sample]  

Previous samples loads JSU CORE Files without BlockingPopup, JSPopup and the External jquery plugin (jquery and jquery-ui.js) with following code (**jsu-jq.js** is used as data-main file for require.js):
  
  
```javascript
<!--  JSU css -->
<link rel="stylesheet" href="../../core/core.css" type="text/css">
<link rel="stylesheet" href="../../core/Popup/Popup.css" type="text/css">
<!--  JSU js -->
<script  data-main="../../plugin/jsu-jq.js" src="../../core/require.js"></script>
```
*Code used in the sample to include all the JSU CORE Feature with JS Popup and Jquery instead of Blocking Popup*

  

### JSU Feature DESCRIPTION
  - **Very Easy to Install**: [Download JSU Obscured ZIP]
  - ** Very Simple to include in your project** with only one JS file: as displayed in the various JSU samples, the desired JSU modules are loaded with **require.js** using the proper plugin/jsu.js file 
  - **No dependencies** for most of the JSU Features (Pure JS features): only if you include JS Popup, it is required jquery and jquery-ui
  - **All modern browsers are supported**: IE9+, Firefox 3+, Chrome,... 
  - **Examples provided for each JSU feature**, with all the JSU calls explained and Hightlighted Code Tips
  - **Very Powerful and Simple to use**: only 1 or 2 JS instructions to get all the power and flexibilty of the JSU feature 
  - **Localization support**: all the displayed messages are isolated in local/LAN/locale-core.js. So you can easily select the desired language simply including the proper locale file. JSU provides locale/EN/locale-core.js (English=default) and locale/ITA/locale-core.js (Italian)You can also add and include your personal local/LAN/locale-core.js 
  - **CSS support** (core.css, Popup.css ): if required you can easily customize presentation


### Installation
You can choose between 2 options:
  - [Download JSU Obscured ZIP] JSU code *Obscured*, Sample code Clear with comment
  - ***[Download Complete JSU ZIP]*** JSU Code and Sample: **All Clear with comment**   **[UNDER WORK, CURRENTLY NOT AVAILABLE]**


### Version
3.3


### License
MIT

![JSUDancing]  | Try JSU Samples: [All Samples]
---------------|-----------

 
   [rainbow]: <https://craig.is/making/rainbows>
   [Download JSU Obscured ZIP]: <https://github.com/FedericoLevis/JSU/archive/master.zip>
   [Tip documentation]: <https://rawgit.com/FedericoLevis/JSU/master/JSDoc/tooltip.js/index.html> 
   [about]: <https://rawgit.com/FedericoLevis/images/master/jsuAbout/jsuAboutTitle.png>
   [Federico Levis]: <https://www.linkedin.com/in/federicolevis> 
   [JSUDancing]: <https://rawgit.com/FedericoLevis/images/master/jsuAbout/JSUDancing.gif>
   [All Samples]: <https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html>
   [Try Validate Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/Validate/ValidateSample.html>
   [Try Tip Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/Tip/TipSample.html>  
   [Try SortTable Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html>  
   [Try LoadingDiv Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/Loading/LoadingSample.html>  
   [Try JSLog Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/jslog/jslogSample.html>  
   [Try Blocking Popup Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/BlockPopup/PopupSample.html>  
   [Try JS Popup Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/JSPopup/PopupSample.html>  
   [Validate]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cValidate.js/index.html>
   [SortTable]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cSortTable.js/index.html>
   [Tip]: <https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html>
   [LoadingDiv]: <https://rawgit.com/FedericoLevis/JSUDoc/master/util.js/index.html>
   [JSLog]: <https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html>
   [Blocking Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/BlockPopup.js/index.html>
   [JS Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html>  
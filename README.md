![about] | By [Federico Levis]
---------|-----------

**Try JSU:** [All Samples]

JSU 
========

``JSU`` **JS Utility Plugin**: Tooltip, Validate, Popup, SortTable, JSLog, Loading, ..

Table of Contents
-----------------

  *  <a href="#1-jsu-features">1) JSU Features</a> 
    *  <a href="#1.1-jsu-core-features">1.1) JSU Core Features</a> 
    *  <a href="#1.2-jsu-jquery-features">1.1) JSU jquery Features</a> 
  *  <a href="#2-jsu-configuration">2) JSU CONFIGURATION</a> 
    
    

<span id="par1"></span>
# 1) JSU Features
----

## 1.1) JSU CORE Features 
``Pure JS Plugins, No Requirement``
**JSU** is a Lightweight JavaScript Utility library with the main goal of simplifing developer design. JSU provides following flexible and powerful API in PURE JS code (No other plugin are required):
  - [Validate]: **Validate Items** with many constraints/options. Show Validate Errors in Red Items or Section, Popup ...  [Try Validate Sample]  
  - [Tooltip]: Many **HTML Tooltips** options: Floating/Fixed Tips with HTML, GIF, Video, JS Code, ... [Try Validate Sample]  
  - [SortTable]:  **Sort HTML Table** by clicking column header [Try SortTable Sample]  
  - [LoadingDiv]:  **Loading Div** to be displayed during Long Operation. Many Options provided: Loading Gif, Title, Message, ElapsedSec... [Try LoadingDiv Sample]  
  - [JSLog]: **Log** from JS Code into an optional Window: log Text, Object, JSON, Time Elapsed ... [Try JSLog Sample]  
  - [Blocking Popup]: **HTML Modal Blocking Popup** designed specially for **IE** : based on *ShowModalDialog API* that is fully supported only by IE. **Blocking Code implementation** (like alert). For Browser not supporting *ShowModalDialog* **Popup API**  will simply display an Alert instead of an HTML Popup  [Try Blocking Popup Sample]  
  
## 1.2) JSU jquery Features
``JS Popup (required: jquery, jquery-ui)``
JSU JQUERY Features are not *Pure JS plugin* like previous one, but they require **jquery and jquery-ui** (provided in the JSU.ZIP):
  - [JS Popup]: **HTML Modal Popup API working in all Browser** - Popup Buttons (YES, NO,..) use **callback implementation**  [Try JS Popup Sample]  

  
## 1.3) JSU Popup: choice between Blocking Popup (PURE JS) or JS Popup (required: jquery, jquery-ui)
If you need Popup API the generic solution of [JS Popup] is recommended for Cross Browser compatibility. 
However in some cases you could prefer the simpliest solution  of [Blocking Popup]:
  - If only IE Browser is required or if your JS code is based on CODE Blocking and you want to replace your existing alert with Popup
  - If you do not want to load jquery   
In Both cases we underline that you can easily switch between the 2 options simply changing one line in JSU configuration (see next par.). In fact you do not need to change your  **API Popup** calls because they have exactly the same interface   
(See [Blocking Popup API] and [JS Popup API] )
  
<span id="par2"></span>
# 2) JSU CONFIGURATION
----

You a choose  2 options:

## 2.1) JSU CONFIGURATION: OPTION A) require.js
Previous samples loads all JSU CORE features together with require.js using following 2 pre-defined data-main files:
  - **pluging/jsu.js**  for only JSU CORE  Features (no Plugin required)
  - **pluging/jsu-jq.js**  for ALL JSU Features (jquery.js and jquery-ui.js are loaded) 

```javascript
<!--  JSU css -->
<link rel="stylesheet" href="../../core/core.css" type="text/css">
<link rel="stylesheet" href="../../core/Popup/Popup.css" type="text/css">
<!--  JSU js -->
<script  data-main="../../plugin/jsu.js" src="../../core/require.js"></script>
``` 
*Example of the Code used in the JSU CORE Samples to include ONLY the JSU CORE Features*

You can **easily modify jsu.js or jsu-jq.js** to automatically modify the language and the jsuVersion (**minified or commented**) of all JSU files loaded

```javascript
...
// decomment only jsuVersion the version that you want to use
// var jsuVersion ="";       // JSU with Comment (or Obfuscated in the Free version)
var jsuVersion = "/Minify"      // JSU Minified
requirejs.config({
    baseUrl: JSU_PATH_BASE,
	// Path relative to baseUrl
    paths: {
        'core': 'core' + jsuVersion,
        'lan': 'locale/EN',
//      'lan': 'locale/ITA',     // For Italian Language
...
``` 
*jsu.jq with English language*

For example see [JSU Tooltip Loading with require.js jsu.js - TipSample.html]

## 2.1) JSU CONFIGURATION: OPTION B) Manually list the file to load
If you prefer you can manually load the required JSU css and js. 

```javascript
  <!--  JSU -->
  <link rel="stylesheet" href="../../core/core.css" type="text/css">
  <link rel="stylesheet" href="../../core/core.css" type="text/css">
  <script type="text/javascript" src="../../core/tooltip.js" ></script>
  <script type="text/javascript" src="../../locale/EN/locale-core.js" ></script>
``` 

For example see [JSU Tooltip Loading with file List - TipSimple.html]


# 3) Download and Installation
----

You can choose between 2 options:
  - [Download JSU Obfuscated ZIP] JSU code *Obfuscated*, available only following JSU Feature: [Tooltip], [SortTable], [Blocking Popup]
  - ***[Download FULL JSU ZIP]*** JSU Code and Sample: **Everything availble, All JS Clear with comment and also in the Minified version**   **[UNDER WORK, CURRENTLY NOT AVAILABLE]**
Then unzip it and everything is ready to be used: you can immediately try the JSU sample in your unzipped *jsu/samples* directory
  

# 4) JSU Feature DESCRIPTION
  - **All modern browsers are supported**: IE9+, Firefox 3+, Chrome,... 
  - **Examples provided for each JSU feature**, showing in Fixed Tips the JS code required to implement the JSU features. From [All Samples] you can reach all the other samples and JSU Feature documentation
  - **Very Powerful and Simple to use**: only 1 or 2 JS instructions to get all the power and flexibilty of the JSU feature 
  - **Very Simple and flexible JSU configuration** with require.js or including manually the required JSU Files (see par 2 )
  - **Flexible switch between Comment/Minified JSU** with a single code line modification in jsu.js (see par 2 ) 
  - **Localization support**: all the displayed messages are isolated in local/LAN/locale-core.js. So you can easily select the desired language simply including the proper locale file (see par 2 ) . JSU provides locale/EN/locale-core.js (English=default) and locale/ITA/locale-core.js (Italian)You can also add and include your personal local/LAN/locale-core.js 
  - **CSS support** : if required you can easily customize presentation modifying JSU CSS files (core.css, Popup.css)

# 5) JSU Samples
----

  
# 6) JSU Documentation
----


  
# 7) Version
----

3.3  July 2016


# 8) License
----

MIT

![JSUDancing]  | Try JSU Samples: [All Samples]
---------------|-----------

   [1) JSU Features]: <https://github.com/FedericoLevis/JSU/blob/master/README.html#1) JSU Features>
   [Download JSU Obfuscated ZIP]: <https://github.com/FedericoLevis/JSU/archive/master.zip>
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
   [JS Popup Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/JSPopup/PopupSample.html>  
   [Validate]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cValidate.js/index.html>
   [SortTable]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cSortTable.js/index.html>
   [Tooltip]: <https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html>
   [LoadingDiv]: <https://rawgit.com/FedericoLevis/JSUDoc/master/util.js/index.html>
   [JSLog]: <https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html>
   [Blocking Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/BlockPopup.js/index.html>
   [JS Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html>  
   [Blocking Popup API]: 	<https://rawgit.com/FedericoLevis/JSUDoc/master/BlockPopup.js/index.html>
   [JS Popup API]:	<https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html>
   [JSU Tooltip Loading with require.js jsu.js - TipSample.html]: <https://github.com/FedericoLevis/JSU/blob/master/samples/Tip/TipSample.html>
   [JSU Tooltip Loading with file List - TipSimple.html]: <https://github.com/FedericoLevis/JSU/blob/master/samples/Tip/TipSimple.html>
   
   

![about] | By [Federico Levis]
---------|-----------
----

JSU 
========

``JSU`` **JS Utility Plugin**: Tooltip, Validate, Popup, SortTable, JSLog, Loading, ..  
All JSU Features can be tried with following sample: [Try JSU Samples]


Table of Contents
-----------------

  *  <a href="#1-jsu-features">1) JSU Features</a> 
    *  <a href="#11-jsu-core-features">1.1) JSU Core Features</a> 
    *  <a href="#12-jsu-jquery-features">1.2) JSU jquery Features</a> 
    *  <a href="#13-jsu-popup-plugin-choice">1.3) JSU Popup Plugin Choice</a> 
  *  <a href="#2-jsu-samples-videos-documentation">2) JSU Samples, Videos, Documentation</a> 
  *  <a href="#3-download-and-installation">3) Download and Installation</a> 
  *  <a href="#4-jsu-configuration">4) JSU CONFIGURATION</a> 
    *  <a href="#41-jsu-configuration-requirejs">4.1) JSU CONFIGURATION: require.js</a> 
    *  <a href="#42-jsu-configuration-include-each-js-file">4.2) JSU CONFIGURATION: include each JS FILE</a> 
  *  <a href="#5-jsu-version">5) JSU Version</a> 
  *  <a href="#6-license">6) License</a> 

  
<span id="1-jsu-features"></span>
# 1) JSU Features
**JSU** is a Lightweight JavaScript Utility library with the main goal of simplifing developer design. 
  - Most of the JSU Features API are in PURE JS code: for <a href="#11-jsu-core-features">JSU Core Features</a> **No other plugin is required**
  - **All modern browsers are supported**: IE9+, Firefox 3+, Chrome,... (NOTE: for Popup you should use [JS Popup] for Cross Browser compatibility) 
  - **Examples, documentation and Video provided for each JSU feature** (see <a href="#2-jsu-samples-videos-documentation">2) JSU Samples, Videos, Documentation</a>.  From  the [Main JSU Samples] you can reach all the other samples and JSU Feature documentation
  - **Very Powerful and Simple to use**: maximum 1 or 2 JS instructions are required to get all the power and flexibilty of the JSU feature 
  - **Very Simple and flexible JSU configuration** with require.js or including manually the required JSU Files (see <a href="#4-jsu-configuration">4) JSU CONFIGURATION</a> ; you can also easily **switch between Comment/Minified JSU** with a single code line modification in jsu.js.  
  - **Localization support**: all the displayed messages are isolated in local/LAN/locale-core.js. You can easily select the desired language simply including the proper locale file (see par 2 ). Default JSU locale is English (local/EN/locale-core.js)  
  - **CSS support** : if required you can easily customize presentation modifying JSU CSS files (core.css, Popup.css)

  
  
<span id="11-jsu-core-features"></span>
## 1.1) JSU CORE Features 
``Pure JS Plugins, No Requirement``  
  - [Tooltip]: Many **HTML Tooltips** options: Floating/Fixed Tips with HTML, GIF, Video, JS Code, ... <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [Validate]: **Validate Items** with many constraints/options. Show Validate Errors in Red Items or Section, Popup ... <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [SortTable]:  **Sort HTML Table** by clicking column header <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [LoadingDiv]:  **Loading Div** to be displayed during Long Operation. Many Options provided: Loading Gif, Title, Message, ElapsedSec... <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [JSLog]: **Log** from JS Code into an optional Window: log Text, Object, JSON, Time Elapsed ... <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [Blocking Popup]: **HTML Modal Blocking Popup** designed specially for **IE** : based on *ShowModalDialog API* that is fully supported only by IE. **Blocking Code implementation** (like alert). For Browser not supporting *ShowModalDialog* (e.g. Chrome), **Popup API** simply display an Alert instead of an HTML Popup  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  
## 1.2) JSU jquery Features
``JS Popup (required: jquery, jquery-ui)``  
JSU JQUERY Features are not *Pure JS plugin* like previous one, but they require **jquery and jquery-ui** (provided in the JSU.ZIP):
  - [JS Popup]: **HTML Modal Popup API working in all Browser** - Popup Buttons (YES, NO,..) use **callback implementation**  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  

  
## 1.3) JSU Popup Plugin Choice
``Choice between [Blocking Popup] (PURE JS) or [JS Popup] (required: jquery, jquery-ui)``  
Id you want to use **JSU Popup API**, the generic solution of [JS Popup] is recommended for Cross Browser compatibility. 
However in some cases you could prefer the simplier solution  of [Blocking Popup]:
  - If only IE Browser is required or if your JS code is based on CODE Blocking and you want to replace your existing alert with Popup
  - If you do not want to load jquery   
Whatever is your choice (Blocking Popup or JS Popup), we underline that you can easily switch from one choice to the other: you simply have to  change one line in JSU configuration (see <a href="#4-jsu-configuration">4) JSU CONFIGURATION</a>). You do not need changing your  **API Popup** calls because they have exactly the same interface   
(See [Blocking Popup API] and [JS Popup API] )
  


# 2) JSU Samples, Videos, Documentation
----

JSU CONTENT        | LINK
---------------|-----------
**SAMPLES**    | [Main JSU Samples]
**DOC**        | [JSU Documentation]
**API DOC**    | [JSU API Documentation]
**CSS DOC**    | [JSU CSS Documentation]

  - All previous links are connected each other: from one link you can reach the others.
  - Each Feature has its specific sample with the detailed explanation of the JS API calls; in the FREE Version some samples can be reached only by by the [Main JSU Samples]
  - Each Feature has also its specific Documentation, API Documentation and Demo Video:
  
Sample              |Feature Documentation |   API Documentation    | VIDEO of the FEATURE
--------------------|---------------|-------------------------------|---------------------
[JSU Tip Sample]    | [Tooltip]    |  [Tooltip API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[Main JSU Samples]  | [LoadingDiv]    |  [LoadingDiv API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[Main JSU Samples]  | [Validate]    |  [Validate API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[JSU SortTable Sample] |  [JSU SortTable]  | [SortTable API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[Main JSU Samples]  |[JSlog]    |  [JSlog API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[JSU Blocking Popup Sample] | [Blocking Popup] | [Blocking Popup API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[Main JSU Samples]  | [JS Popup]    |  [JS Popup API] |  <a href="https://youtu.be/wpo2oM_L3ds" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  

Each of the previous link can be reached by the [Main JSU Samples] or by the specific samples 

  
# 3) Download and Installation
----

You can choose between 2 options:
  - [Download JSU Obfuscated ZIP] JSU code *Obfuscated*, available only following JSU Feature: [Tooltip], [SortTable], [Blocking Popup]
  - ***[Download FULL JSU ZIP]*** JSU Code and Sample: **Everything availble, All JS Clear with comment and also in the Minified version**   **[UNDER WORK, CURRENTLY NOT AVAILABLE]**
Then unzip it and everything is ready to be used: you can immediately try the JSU sample in your unzipped *jsu/samples* directory


 
# 4) JSU CONFIGURATION
----

You can choose between 2 options:

## 4.1) JSU CONFIGURATION: require.js
``OPTION A) LOAD ALL JSU JS with require.js``
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

## 4.2) JSU CONFIGURATION: include each JS FILE
``OPTION B) Manually list the js to load``
If you prefer you can manually load the required JSU css and js. 

```javascript
  <!--  JSU -->
  <link rel="stylesheet" href="../../core/core.css" type="text/css">
  <link rel="stylesheet" href="../../core/core.css" type="text/css">
  <script type="text/javascript" src="../../core/tooltip.js" ></script>
  <script type="text/javascript" src="../../locale/EN/locale-core.js" ></script>
``` 

For example see [JSU Tooltip Loading with file List - TipSimple.html]

  
# 5) JSU Version
----

3.3  July 2016


# 6) License
----

MIT


----

![JSUDancing]  | [Try JSU Samples]
---------------|-----------

   [Download JSU Obfuscated ZIP]: <https://github.com/FedericoLevis/JSU/archive/master.zip>
   [JSU Documentation]: <https://rawgit.com/FedericoLevis/JSU/master/README.html>
   [JSU API Documentation]: <https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html>
   [JSU CSS Documentation]: <https://rawgit.com/FedericoLevis/JSUDoc/master/CSSDoc/index.html>
   
   [Tip documentation]: <https://rawgit.com/FedericoLevis/JSU/master/JSDoc/tooltip.js/index.html> 
   [about]: <https://rawgit.com/FedericoLevis/images/master/jsuAbout/jsuAboutTitle.png>
   [Federico Levis]: <https://www.linkedin.com/in/federicolevis> 
   [JSUDancing]: <https://rawgit.com/FedericoLevis/images/master/jsuAbout/JSUDancing.gif>
   [Try JSU Samples]: <https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html>
   [Main JSU Samples]: <https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html>
   [JS Popup Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/JSPopup/PopupSample.html>  
   [Tooltip]: <https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html>
   [Tooltip API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/tooltip.doc>
   [Validate]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/Validate.html>
   [Validate API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cValidate.js/index.html>
   [SortTable]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/SortTable.html>
   [SortTable API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cSortTable.js/index.html>
   [LoadingDiv]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/LoadingDiv.html>
   [LoadingDiv API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/loadingDiv.js/index.html>
   [JSLog]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/jslog.html>
   [JSLog API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html>
   [Blocking Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/BlockPopup.html>
   [Blocking Popup API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/BlockPopup.js/index.html>
   [JS Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/JSPopup.html>  
   [JS Popup API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html>  
   [JSU Tooltip Loading with require.js jsu.js - TipSample.html]: <https://github.com/FedericoLevis/JSU/blob/master/samples/Tip/TipSample.html>
   [JSU Tooltip Loading with file List - TipSimple.html]: <https://github.com/FedericoLevis/JSU/blob/master/samples/Tip/TipSimple.html>
   
   [JSU Tip Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/Tip/TipSample.html>  
   [JSU SortTable Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html>  
   [JSU Blocking Popup Sample]: <https://rawgit.com/FedericoLevis/JSU/master/samples/BlockPopup/PopupSample.html>  
   
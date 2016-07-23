<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-i71b{font-weight:bold;background-color:#00009b;color:#ffffff;text-align:center}
.tg .tg-odnr{font-weight:bold;color:#009901;vertical-align:top}
.tg .tg-7cve{font-weight:bold;background-color:#e0e0e0;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}

table.tip {	text-align: center;	font-family: Verdana;	font-weight: normal;	font-size: 11px;	color: black; 	background-color: #fafafa;	/* White Gray: default backgound, used for Td */	border: 3px solid #858585; /* Dark Gray */	border-spacing: 0px;  border-collapse: separate;  border-spacing: 0px; 	}
table.tipNoBorder {	text-align: center;	font-family: Verdana;	font-weight: normal;	font-size: 11px;	color: black; /* Black */	background-color: #fafafa;	/* White Gray: default backgound, used for Td */	border: 0px; /* Dark Gray */  border-collapse: separate;  border-spacing: 1px; 	}
tr.tiptitle,th.tiptitle, tr.tiptitleBig,th.tiptitleBig {  background-color: #0033FF; /* Blue */  color: #FFFFFF; /* White */  text-align: center;  border: 0px;  font-family: Verdana;  font-weight: bold;}
tr.tiptitle,th.tiptitle{  font-size: 9pt;  padding: 2px;}
tr.tiptitleBig,th.tiptitleBig{  font-size: 13pt;}
label.tiptitle {  font-family: Verdana;  font-weight: bold;		font-size: 10pt;}
label.tiptitleBig {  font-family: Verdana;  font-weight: bold;		font-size: 16pt;}
tr.tiptitle2,th.tiptitle2, tr.tiptitleBig2,th.tiptitleBig2 {  background-color: #66B2FF;   color: black;   text-align: center;  padding: 2px;  border: 1px solid black;  font-family: Verdana;  font-weight: bold;  font-size: 9pt;}
td.tipr, td.tipl, td.tipc, td.tipcBold, td.tiprBold,   td.tipalr, td.tipok, , td.tipGood, , td.tipErr{	padding-right: 5px;	border: 1px solid #404040; /* Black */}
td.tipc,td.tipcBold {  text-align: center!important;}
td.tipcBold,td.tiprBold {  font-weight: bold!important;}
td.tipr,td.tiprBold {	text-align: right !important;}
td.tipl {	text-align: left !important;}

</style>

<!-- JSU HEADER -->
<table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="850px">
    <tr>
      <td width="250px" align="center"> <img width="290px" src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/jsuAboutTitle.png"/></td> 
      <td ><table class="tipNoBorder" width="100%">
        <tr><td ><table class="tipNoBorder" width="100%">
          <tr>
            <td class="tipl"><label class="tiptitle">JSU Samples: </label></td>
            <td class="tipl"><a class="tipLink" href="https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html" target="_blank">Try JSU Samples</a> </td>
          <tr/>
          <tr>
            <td class="tipl"><label class="tiptitle">JSU Doc: </label></td>
            <td class="tipl"><a class="tipLink" href="https://rawgit.com/FedericoLevis/JSU/master/README.md.html" target="_blank">https://rawgit.com/FedericoLevis/JSU/master/README.md.html</a> </td>
          <tr/>
          <tr>
            <td class="tipl" width="180px"><label class="tiptitle">JSU GitHub: </label></td>
            <td class="tipl"><a class="tipLink" href="https://github.com/FedericoLevis/JSU" target="_blank">https://github.com/FedericoLevis/JSU</a> </td>
          <tr/>
          <tr>
            <td  class="tipl"><label class="tiptitle">Author: </label></td>
            <td class="tipl"><a class="tipLink" href="https://www.linkedin.com/in/federicolevis" target="_blank">Federico Levis</a> </td>
          <tr/>
          <tr>
            <td class="tipl"><label class="tiptitle">Email:</label></td>
            <td class="tipl"><a class="tipLink" href="mailto:federico.levis@virgilio.it" target="_blank">federico.levis@virgilio.it</a> </td>
          <tr/>
        </table></td></tr>
      </table></td> 
    </tr>
</table> 

**Try JSU:** [All Samples]

# JSU CORE Features (Pure JS Plugin, No Requirement)
**JSU** is a Lightweight JavaScript Utility library with the main goal of simplifing developer design. JSU provides following flexible and powerful API in PURE JS code (No other plugin are required):
  - [Validate]: **Validate Items** with many constraints/options. Show Validate Errors in Red Items or Section, Popup ...  [Try Validate Sample]  
  - [Tip]: Many **HTML Tooltips** options: Floating/Fixed Tips with HTML, GIF, Video, JS Hightlighted Code, ... [Try Validate Sample]  
  - [SortTable]:  **Sort HTML Table** by clicking column header [Try SortTable Sample]  
  - [LoadingDiv]:  <b>Loading Div</b> to be displayed during Long Operation. Many Options provided: Loading Gif, Title, Message, ElapsedSec... [Try LoadingDiv Sample]  
  - [JSLog]: **Log** from JS Code into an optional Window: log Text, Object, JSON, Time Elapsed ... [Try JSLog Sample]  
  - [Blocking Popup]: **HTML Modal Blocking Popup** designed specially for **IE** : based on *ShowModalDialog API* that is fully supported only by IE. For Browser not supporting *ShowModalDialog* Popup will siply display an Alert instead of an HTML Popup  [Try Blocking Popup Sample]  
  
**JSU CONFIGURATION:** JSU features are configured and loaded using **require.js**. Previous samples loads all JSU CORE features together with following code that uses **jsu-jq.js** as data-main file for require.js:

```javascript
<!--  JSU css -->
<link rel="stylesheet" href="../../core/core.css" type="text/css">
<link rel="stylesheet" href="../../core/Popup/Popup.css" type="text/css">
<!--  JSU js -->
<script  data-main="../../plugin/jsu.js" src="../../core/require.js"></script>
``` 
*Code used in the JSU CORE Samples to include all the JSU CORE Feature (with Blocking Popup)*


# JSU JQUERY Features: JS Popup (required: jquery, jquery-ui)
JSU JQUERY Features are not *Pure JS plugin* like previous one, but they require **jquery and jquery-ui** (provided in the JSU.ZIP):
  - [JS Popup]: **HTML Modal Popup API working in all Browser**, to be used instead of JSU [Blocking Popup]  [Try JS Popup Sample]  

**JSU CONFIGURATION**: use **jsu-jq.js** that loads All JSU CORE Files **without BlockingPopup**, and with additional **JSPopup** and the External required plugin (**jquery and jquery-ui.js**):
  
```javascript
<!--  JSU css -->
<link rel="stylesheet" href="../../core/core.css" type="text/css">
<link rel="stylesheet" href="../../core/Popup/Popup.css" type="text/css">
<!--  JSU js -->
<script  data-main="../../plugin/jsu-jq.js" src="../../core/require.js"></script>
```
*Code used in the [JS Popup Sample] to include all the JSU CORE Feature with JS Popup and Jquery instead of Blocking Popup*

# Installation
You can choose between 2 options:
  - [Download JSU Obfuscated ZIP] JSU code *Obfuscated*, Sample code Clear with comment
  - ***[Download Complete JSU ZIP]*** JSU Code and Sample: **All Clear with comment**   **[UNDER WORK, CURRENTLY NOT AVAILABLE]**
Then unzip it and everything is ready to be used: you can immediately try the JSU sample in your unzipped *jsu/samples* directory
  

# JSU Feature DESCRIPTION
  - **All modern browsers are supported**: IE9+, Firefox 3+, Chrome,... 
  - **Examples provided for each JSU feature**, with all the JSU calls explained and Hightlighted Code Tips. From [All Samples] you can reach all the other samples and JSU Feature documentation
  - **Very Powerful and Simple to use**: only 1 or 2 JS instructions to get all the power and flexibilty of the JSU feature 
  - **Very Simple and flexible JSU configuration**. You can choose 3 options to include JSU in your project:
     1) Like in JSU samples, you can use require.js with **plugin/jsu.js** for JSU CORE Features, **plugin/jsu-jq.js** for JSU JQUERY Features:
  	```javascript	
	<link rel="stylesheet" href="../../core/core.css" type="text/css">
	<link rel="stylesheet" href="../../core/Popup/Popup.css" type="text/css">
	<!--  JSU js -->
	<script  data-main="../../plugin/jsu.js" src="../../core/require.js"></script>
	
	<script>
    // Called when jsu is loaded 
    function jsu_loaded(){     
	   //.. you can call here program initialization 
	}	
	</script>
	``` 	
     2) You can customize jsu.js to include only the JSU features required by your program. For example follow the jsu.js customized file to include only jslog and SortTable features:
	 
  	```javascript	
       require([ 
         'lan/locale-core', 
         'core/jslog',            
         'core/util',							
         // 'core/tooltip',
         'core/cSortTable',       /* require date */
         // 'popup/Popup',
         // 'core/cValidate'        /* require date, Popup */
		   ],
	    ....
	``` 	
     
	 3) You can also **include directly the required JSU js files** instead of using require.js. For example to *manually* include only JSU Tip feature:
     
  	```javascript	
	<link rel="stylesheet" href="../../core/core.css" type="text/css">
	<!--  JSU tip features-->
    <script type="text/javascript" src="../../core/tooltip.js" ></script>
	``` 
    
	
  - **Flexible switch between Comment/Minified JSU** with a single code line modification in jsu.js:
    
    ```javascript	
    var jsuVersion ="";       // JSU with Comment (or Obfuscated in the Free version)
    // var jsuVersion = "/Minify"      // JSU Minified
 
	``` 
    *decommment in jsu.js only the JSU version to include, to automatically select all the relative .js*
    
  - **Localization support**: all the displayed messages are isolated in local/LAN/locale-core.js. So you can easily select the desired language simply including the proper locale file. JSU provides locale/EN/locale-core.js (English=default) and locale/ITA/locale-core.js (Italian)You can also add and include your personal local/LAN/locale-core.js 
   	```javascript	
     paths: {
        'core': 'core' + jsuVersion,
     //   'lan': 'locale/EN',
          'lan': 'locale/ITA',     // For Italian Language
	``` 
    *Example of jsu.js modification to use Italian Languag instead of default English language*

  - **CSS support** : if required you can easily customize presentation modifying JSU CSS files (core.css, Popup.css)


# Version
3.3  July 2016


# License
MIT

![JSUDancing]  | Try JSU Samples: [All Samples]
---------------|-----------

 
   [rainbow]: <https://craig.is/making/rainbows>
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
   [Tip]: <https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html>
   [LoadingDiv]: <https://rawgit.com/FedericoLevis/JSUDoc/master/util.js/index.html>
   [JSLog]: <https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html>
   [Blocking Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/BlockPopup.js/index.html>
   [JS Popup]: <https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html>  
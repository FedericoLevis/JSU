/* =========================================================================================
File:     					about.js
Author:   					Federico Levis
Last Modification:  June 2016   
Description:        API for JSU about   
REQUIRE:            JSU

DISCLAIMER
Copyright by Federico Levis - JSU https://github.com/FedericoLevis/JSU 
This file may be freely distributed under the MIT license.
========================================================================================= */


/* =============================================================================================
   						CONSTANT
============================================================================================= */



var JSU_LINKEDIN = "https://www.linkedin.com/in/federicolevis";  
var JSU_EMAIL = "federico.levis@virgilio.it";  
var JSU_COGNOS = "http://federicolevis.wix.com/cognos";
var JSU_GITHUB = "https://github.com/FedericoLevis/JSU";
var JSU_PLSQL = "https://github.com/FedericoLevis/PLSQLUtility";


var JSU_SORT_CODE_H = 220;

var JSU_DISABLED = 'javascript:function() { return false; }';

var JSU_GITHUB_DOWNLOAD = "https://github.com/FedericoLevis/JSU/archive/master.zip";
var JSU_BUY = JSU_DISABLED; // DAFARE

var JSU_SITE = JSU_DISABLED; // DAFARE

//DAFARE
var JSU_VIDEO_VALIDATE  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
var JSU_VIDEO_SORT  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
var JSU_VIDEO_TIP  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
var JSU_VIDEO_LOADING  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
var JSU_VIDEO_JSLOG  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
var JSU_VIDEO_BLOCKPOPUP  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
var JSU_VIDEO_JSPOPUP  =	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 

// Samples
var JSU_URL_SAMPLE_ALL  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html";
var JSU_URL_SAMPLE_SORT  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html";
var JSU_URL_SAMPLE_VALIDATE =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Validate/ValidateSample.html";
var JSU_URL_SAMPLE_TIP  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Tip/TipSample.html";
var JSU_URL_SAMPLE_LOADING  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Loading/LoadingSample.html";
var JSU_URL_SAMPLE_JSLOG  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/jslog/jslogSample.html";
var JSU_URL_SAMPLE_BLOCKPOPUP  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/BlockPopup/PopupSample.html";
var JSU_URL_SAMPLE_JSPOPUP  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/JSPopup/PopupSample.html";

//DOC
var JSU_URL_DOC  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/REAME.md.html";
var JSU_URL_DOC_SORT  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/cSortTable.js/index.html";
var JSU_URL_DOC_VALIDATE  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/cValidate.js/index.html";
var JSU_URL_DOC_TIP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html";
var JSU_URL_DOC_LOADING  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/util.js/index.html";
var JSU_URL_DOC_JSLOG  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html";
var JSU_URL_DOC_BLOCKPOPUP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/BlockPopup.js/index.html";
var JSU_URL_DOC_JSPOPUP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html";

	
var JSU_AR_VALIDATE_SAMPLE_URL = [ {title:"Validate Sample", href:JSU_URL_SAMPLE_VALIDATE}];
var JSU_AR_TIP_SAMPLE_URL = [ {title:"Tooltip Sample", href:JSU_URL_SAMPLE_TIP}];
var JSU_AR_SORT_SAMPLE_URL = [ {title:"Sort Sample", href:JSU_URL_SAMPLE_SORT}];
var JSU_AR_LOADING_SAMPLE_URL = [ {title:"LoadingDiv Sample", href:JSU_URL_SAMPLE_LOADING}];
var JSU_AR_JSLOG_SAMPLE_URL = [ {title:"jslog Sample", href:JSU_URL_SAMPLE_JSLOG}];
var JSU_AR_BLOCKPOPUP_SAMPLE_URL = [ {title:"Blocking Popup Sample", href:JSU_URL_SAMPLE_BLOCKPOPUP}];
var JSU_AR_JSPOPUP_SAMPLE_URL = [ {title:"JS Popup Sample", href:JSU_URL_SAMPLE_JSPOPUP}];
	
var JSU_TIP_CUR_FEATURE="Click to Show a new Window with the <b>JSDoc HTML</b> of this feature";


/* =============================================================================================
    			MAIN JSU TIP:  JSU_TIP_SECT2 
 ============================================================================================= */
//Not allowed:  Reference to other Sub-Tip
//allowed:   Popup call
 
var JSU_TIP_SECT2_FEAT =  '<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="700">' +
'	  <tr class="tiptitle">' +
'		  <th class="tiptitle" colspan="5">JSU FEATURES</th>' +
'	  </tr>' +
'	  <tr class="tiptitle2">' +
'		  <td width="90px" class="tipc">Feature Documentation</td>' +
'		  <td width="370px" class="tipc">Description</td>' +
'		  <td width="60px" class="tipc">Required</td>' +
'		  <td width="60px" class="tipc">Video Sample</td>' +
'		  <td width="70px" class="tipc">Try an Example</td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_VALIDATE +'" target="_blank">Validate</a> </td>' +
'		  <td class="tipl"><b>Validate Items</b> with many constraints/options</BR>Show Validate Errors in Red Items or Section, Popup ...</td>' + 
'		  <td class="tipc"><b>-</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideoValidate()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_VALIDATE + '" target="_blank">Validate Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_TIP +'" target="_blank">Tooltip</a> </td>' +
'		  <td class="tipl">Various <b>Text or HTML Tooltips</b>: Floating, Fixed, GIF, Video, JS Hightlighted Code, ...  </td>' + 
'		  <td class="tipc"><b>-</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideoTip()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_TIP + '" target="_blank">Tip Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_SORT +'" target="_blank">Table Sort</a> </td>' +
'		  <td class="tipl"><b>Sort HTML Table</b> by clicking column header</td>' + 
'		  <td class="tipc"><b>-</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideoSort()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_SORT + '" target="_blank">Sort Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_LOADING +'" target="_blank">LoadingDiv</a> </td>' +
'		  <td class="tipl"><b>Loading Div</b> for Long Operation with Many Options: <b>Loading Gif, Title, Message, ElapsedSec...</b></td>' + 
'		  <td class="tipc"><b>-</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideoLoading()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_LOADING + '" target="_blank">LoadingDiv Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_JSLOG +'" target="_blank">jslog</a> </td>' +
'		  <td class="tipl"><b>Log from JS Code into an optional Window: log Object, JSON, ...</b></td>' + 
'		  <td class="tipc"><b>-</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideojslog()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_JSLOG + '" target="_blank">jslog Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_BLOCKPOPUP +'" target="_blank">Blocking Popup</a> </td>' +
'		  <td class="tipl"><b>Modal Blocking Popup</b> designed specially for <b>IE</b><BR/><b>Blocking Code</b>, based on <i>ShowModalDialog</i> (fully supported only by IE) </td>' + 
'		  <td class="tipc"><b>-</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideoBlockPopup()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_BLOCKPOPUP + '" target="_blank">Blocking Popup Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="'+ JSU_URL_DOC_JSPOPUP +'" target="_blank">JS Popup</a> </td>' +
'		  <td class="tipl"><b>Modal Popup for whatever Browser</b><BR/><b>Not Blocking code</b> with callback function</td>' + 
'		  <td class="tipc"><b>jquery, jquery-ui</b></td>' + 
'		  <td class="tipc"><input type="button" disabled  value="Video" onclick="aboutPopupVideoJSPopup()" /> </td>' + 
'		  <td class="tipc"><a class="tipLink" href="' + JSU_URL_SAMPLE_JSPOPUP + '" target="_blank">JS Popup Sample</a></td>' +
'	  </tr>' +
'</table>';

//Message on the right of the Table of Features
var JSU_TIP_SECT2_MSG = '<a class="tipLinkDisabled" href="'+ JSU_SITE +'" target="_blank">JSU</a> is a <b>JavaScript Utility</b>  library very Lightweight, powerful and simply to use:' +
'<ul type="square">' +
'<li><b>Very Easy to Install and try</b>: download JSU ZIP and try jsu/samples/AllSamples.html (that points to all the other samples)</li>'+ 
'<li><b>Very Simple to include in your project</b> with only one JS file: as displayed in the various JSU samples, the desired JSU modules are loaded with require.js using the proper plugin/jsu.js file </li>'+ 
'<li><b>No dependencies for most of the JSU Features (Pure JS features):</b> only if you include JS Popup, it is required jquery and jquery-ui</li>'+ 
'<li><b>All modern browsers are supported</b>: IE9+, Firefox 3+, Chrome,... </li>'+ 
'<li><b>Examples provided</b> for each JSU feature, with all the <b>JSU calls explained and Hightlighted Code Tips</b></li>'+ 
'<li><b>Very Powerful and Simple to use</b>: only 1 or 2 JS instructions to get all the power and flexibilty of the JSU feature </li>'+ 
'<li><b>Localization support</b>: all the displayed messages are isolated in local/<b><i>LAN</i></b>/locale-core.js</BR>So you can easily select the desired language simply including the proper locale file.<BR/>JSU provides <b>locale/<i>EN</i>/locale-core.js</b> (English=default) and <b>locale/<i>ITA</i>/locale-core.js</b> (Italian)</BR>You can also add and include your personal <b>local/<i>LAN</i>/locale-core.js</b>   </li>'+
'<li><b>CSS support</b> (<i>core.css, Popup.css </i>): if required you can easily customize presentation</li>' +
'</ul>';


// All the Section with Table of Features and Message
var JSU_TIP_SECT2 = '<table class="jsuAboutMsg" width="100%" style="margin-top:15px;margin-bottom:15px;">' +
'<tr>' +
'  <td width="50%">' + JSU_TIP_SECT2_FEAT + '</td>' +
'  <td width="50%" style="padding-left:5px;padding-right:5px;">' + JSU_TIP_SECT2_MSG + '</td>' +
'</tr>' +
'</table>';



/* =============================================================================================
   						GLOBAL VAR
============================================================================================= */


/**
 * JSU About Popup Example
 */
function showJsuPopupAbout(){
	var szMsg = '<table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="700px">' +
  '  <tr class="jsuAbout jsuAboutHea">' +
  '      <td  align="center" class="jsuAboutTitle"> <img class="jsuAboutTitle" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutTitle.png"/></td> ' +
  '     </tr>' +
  '  <tr class="jsuAboutMsg"><td class="tipl" >' + JSU_TIP_SECT2_MSG + '</td></tr> ' +
  '  <tr class="jsuAbout jsuAboutFooter" >' +
  '    <td ><table class="tipNoBorder" width="100%"><tr>' +
  '      <td align="right" width="40%"><img class="jsuAboutJust" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutJust.gif"/></td>' +
  '      <td align="center" width="20%"><img class="jsuAboutSimple" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutSimple.gif"/></td>' +
  '      <td align="left" width="40%"><img class="jsuAboutUse" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutUse.gif"/></td>' +
  '   </tr></table>' +
  '  </td> ' +
  ' </tr></table>';
  Popup(POPUP_TYPE.INFO, szMsg,	{ bShowImg: false, szTitle: "JSU ABOUT", iWidth: 750, position: {at: "top"}});
}



/**
 * Show Tip for JSU 
 * @param event
 * @param [bShowAllSample] {Boolean} def true
 */
function aboutTipJSU(event,bShowAllSample){
	var Fn = "[about.js aboutTipJSU] ";
	if (bShowAllSample == undefined){
		bShowAllSample = true;
	}
	var szMsg = '<table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="1300px">' +
  '  <tr class="jsuAbout jsuAboutHea">' +
  '    <td >' +
  '      <table class="tipNoBorder" width="100%">' +
  '        <tr>' +
  '          <td  align="left" class="jsuAboutTitle" width="40%"> <img class="jsuAboutTitle" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutTitle.png"/></td> ' +
  '          <td  align="left" class="jsuAboutTitle" width="27%">' +
  '            <table class="tipNoBorder" width="100%">' +
  '		           <tr><td class="tipl"><a class="tipLink" href="'+ JSU_URL_DOC +'" target="_blank">JSU documentation</a> </td></tr>';
  '		           <tr><td class="tipl"><a class="tipLink" href="'+ JSU_GITHUB +'" target="_blank">JSU GitHub project</a> </td></tr>';
	if (bShowAllSample){
		szMsg = szMsg +	
	   '		       <tr><td class="tipl"><a class="tipLink" href="'+ JSU_URL_SAMPLE_ALL +'" target="_blank">JSU: All Samples</a> </td></tr>';
	}
	szMsg = szMsg +  '        </table>' +
  '         </td>' +
  '          <td align="right" class="jsuAboutTitle" width="33%">' + 
  '            <table class="tipNoBorder" width="100%">' +
  '             <tr>' +
  '              <td align="right" width="42%"><img class="jsuAboutJust" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutJust.gif"/></td>' +
  '              <td align="center" width="16%"><img class="jsuAboutSimple" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutSimple.gif"/></td>' +
  '              <td align="left" width="42%"><img class="jsuAboutUse" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutUse.gif"/></td>' +
  '             </tr>' +
  '            </table>' +
  '          </td> ' +
  '       </tr>' +
  '      </table>' +
  '    </td>' +
  '  </tr>' +
  '  <tr class="jsuAboutMsg"><td class="tipl">' + JSU_TIP_SECT2 + '</td></tr> ' +
  '  <tr class="jsuAbout jsuAboutFooter" >' +
  ' </tr></table>';
	TipFixedClicked (szMsg,event,{bCloseBtn:true, szTitle: "JSU: JS Utility FEATURES"});	
}

/**
 * Tip for Author(title)
 */
function aboutTipAuthor(event){
	var szTip = '<table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="850px">' +
  '  <tr>' +
  '    <td width="250px" align="left"> <img width="290px" src="'  + JSU_PATH_ABOUT_IMG + 'FedericoLevis.jpg"/></td> ' +
  '    <td ><table class="tipNoBorder" width="100%">' +
  '      <tr><td align="left"><label class="tiptitleBig">Federico Levis</label></td><tr/>' +
  '      <tr><td align="left">SW Engineer - Developer, Architect & Team Leader specialist in:<BR/>' +
  '              Java, JS, DB, SQL, PL/SQL, Cognos, C++, Perl & Unix Script</td><tr/>' +
  '      <tr><td ><table class="tipNoBorder" width="100%">' +
  '        <tr>' +
  '          <td width="180px" class="tipl"><label class="tiptitle">Linkedin CV: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="' +  JSU_LINKEDIN  + '" target="_blank">' + JSU_LINKEDIN +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tiptitle">Email: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="mailto:' +  JSU_EMAIL  + '" target="_blank">' + JSU_EMAIL +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tiptitle">JSU GitHub: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="' +  JSU_GITHUB  + '" target="_blank">' + JSU_GITHUB +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tiptitle">Cognos CEL Plugin: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="' +  JSU_COGNOS  + '" target="_blank">' + JSU_COGNOS +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tiptitle">PL/SQL LOG Package: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href=" 	' +  JSU_PLSQL  + '" target="_blank">' + JSU_PLSQL +  '</a> </td>'+
  '        <tr/>' +
  '      </table></td></tr>' +
  '    </table></td> ' +
  '  </tr>' +
  '  </table> ';
	
	
	TipFixedClicked (szTip,event,{szTitle:'JSU AUTHOR'});	
}


/**
 * Tip Info for SortTable
 */
function aboutTipSortInfo(){
	// DAFARE
	var szTip ="<b>OK DAFARE</b>";
	Tip (szTip);
}

function aboutPopupVideoSort(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_SORT,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU Sort Table Sample"});
}


/* ================================================================================== 
                                      TIP for Validate
================================================================================== */ 

var JSU_TABLE_VALIDATE_OPT = '	 <table class="tip" BORDER="2" cellpadding="2" width="900px">'+
'				  <tr class="tiptitle"><td colspan="4">cValidate OPTION</td></tr>'+
'				  <tr class="tiptitle2">'+
'				  <td width ="10%">OPTION</td>'+
'				  <td width ="10%">DEFAULT</td>'+
'				  <td width ="80%">DESCRIPTION</td>'+
'     </tr>  '+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowLabel</b></td>'+
'				  <td><i>true</i></td>'+
'				  <td class="tipl"><b>if true</b>: if <label class="jsuAPI">validateApply</label> generates Validate Errors, it shows an error label on the right of the Item</td>'+
'     </tr>'+
'	    <tr class="tip">'+
'				  <td><b>bInstantFieldValidation</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>If true</b>: Each Item is Instantly validated on the relative onChange Event</td>'+
'				</tr>'+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowSect</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>if true</b>: if <label class="jsuAPI">validateApply</label> generates Validate Errors, it shows a Section in The Top will All the Errors</td>'+
'     </tr>'+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowPopup</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>If true</b>: if <label class="jsuAPI">validateApply</label> generates Validate Errors, it shows a Popup with the Error Description</td>'+
'     </tr>'+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowAlarm</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>If true</b>: On Single Item Validate Error, it shows an AlarmGif in the Item</td>'+
'	      </tr>'+
'				<tr class="tip">'+
'						  <td><b>bEnphasizeItemBorder</b></td>'+
'						  <td><i>true</i></b></td>'+
'						  <td class="tipl"><b>If true</b>: Mandatory or Error item are Enphasized with bigger border (Red for Validation Error cases)</td>'+
'				</tr>'+
'		</table>';

/**
 * Tip Info for Validate
 * 
 */
function onclickValidateFeature(event, bShowTrySample){
	if (bShowTrySample == undefined){
		bShowTrySample = true;
	}
	var szMsg = '<ul type="square">' +
    '<li><label class="jsuAPI">JSU cValidate (cValidate.js)</label> is based on <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> constraints Validator, encoded with <b>compact JSON constraints</b>: all the <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> features are supported and well documentated. '+
    'Example of <b>cValidate.js JSON constraints</b>: Date, Email, Equality, Exclusion, Format, Inclusion, Length, Numerically, URL, .. (see  documentaion: <a class="tipLink" href="https://validatejs.org/#validators" target="_blank">validate.js Validators</a>)</li>'+
    '<li><label class="jsuAPI">cValidate</label> has a <b>Very Simple Interface</b> allowing many flexible and powerful options with only 2 calls:</li>' +
    '  <ul type="none">' +
    '    <li><b>1) Init cValidate with Item constraints and options:</b> <i>cValidateObj1 = new <label class="jsuAPI">cValidate(contraints,objOpt);</label></i><BR/>' +
    '    &nbsp;&nbsp;&nbsp;&nbsp;After point 1) the item Validation and Options (e.g. Instant Validation, Tips,..) are automatically managed by cValidate.js</li>' +
    '    <li><b>2) Apply All Validate Items,</b> for example in the onclick event of Submit/Apply button: <i> var retCode = cValidateObj1.<label class="jsuAPI">validateApply();</label></i></li>' +
    '  </ul>' +
    '<li><b>Many Validation Options</b> are available and can be selected alone or together in whatever combination: ' +
    JSU_TABLE_VALIDATE_OPT + '<BR/></li>' + 
    '<li><b>Many Presentation Options</b> are available (if required they can be easily customized in CSS):' +
    '  <ul type="none">' +
    '    <li><b>1) Enphasize Mandatory Item</b> with a different border (CSS default: double border)</b></li>' +
    '    <li><b>2) Enphasize Error Item</b> with a different border (CSS default: Red border)</b></li>' +
    '    <li><b>3) Display HTML Tip (JSU Tooltip)</b> on the right of the Item to validate</li>' +
    '    <li><b>...</b></li>' +
    '  </ul>' +
    '<li><b>cValidate.js take care of everything:</b> Not only Validation but also all previous options are available <b>without any additional code</b> required: you simply have to set the desired options.</b></li>' +
    '<li><b>Different Validate Groups</b> can be managed separatly in the same page: each cValidate instance in independent, also in the same page</li>'+ 
    '<li><b>Multi language support</b> (<i>jsu/locale/...</i>)</li>' +
    '<li><b>CSS support</b> (<i>jsu/core/core.css</i>): if required you can easily customize presentation</li>' +
    '<li><b>All modern browsers are supported</b>(IE9+, Firefox 3+, Chrome, ...)</li>'+ 
	  '<li><b>No external dependencies</b> at all (pure JS code)</b></li>'+ 
	'</ul>';
	if (bShowTrySample){
	   szMsg += 	'&nbsp;&nbsp;<a class="tipLink" href="' + JSU_URL_SAMPLE_VALIDATE + '" target="_blank">Try JSU cValidate Sample</a><BR/>&nbsp; ';
	}
	
	TipFixedClicked (szMsg,event,{szTitle:"JSU cValidate", iMaxWidth: 1000,bCloseBtn: true});
}

function aboutPopupVideoValidate(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_VALIDATE,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU Validate Table Sample"});
}


/* ================================================================================== 
			TIP for Loading
================================================================================== */ 


/**
* Tip Info for Loading
* 
*/
function onclickLoadingFeature(event, bShowTrySample){
	if (bShowTrySample == undefined){
			bShowTrySample = true;
	}
	var szMsg = '<ul type="square">' +
	'<li><label class="jsuAPI">JSU cLoading (cLoading.js)</label> is based on <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> constraints Validator, encoded with <b>compact JSON constraints</b>: all the <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> features are supported and well documentated. '+
	'Example of <b>cLoading.js JSON constraints</b>: Date, Email, Equality, Exclusion, Format, Inclusion, Length, Numerically, URL, .. (see  documentaion: <a class="tipLink" href="https://validatejs.org/#validators" target="_blank">validate.js Validators</a>)</li>'+
	'<li><label class="jsuAPI">cLoading</label> has a <b>Very Simple Interface</b> allowing many flexible and powerful options with only 2 calls:</li>' +
	'  <ul type="none">' +
	'    <li><b>1) Init cLoading with Item constraints and options:</b> <i>cLoadingObj1 = new <label class="jsuAPI">cLoading(contraints,objOpt);</label></i><BR/>' +
	'    &nbsp;&nbsp;&nbsp;&nbsp;After point 1) the item Validation and Options (e.g. Instant Validation, Tips,..) are automatically managed by cLoading.js</li>' +
	'    <li><b>2) Apply All Loading Items,</b> for example in the onclick event of Submit/Apply button: <i> var retCode = cLoadingObj1.<label class="jsuAPI">validateApply();</label></i></li>' +
	'  </ul>' +
	'<li><b>Many Validation Options</b> are available and can be selected alone or together in whatever combination: ' +
	JSU_TABLE_LOADING_OPT + '<BR/></li>' + 
	'<li><b>Many Presentation Options</b> are available (if required they can be easily customized in CSS):' +
	'  <ul type="none">' +
	'    <li><b>1) Enphasize Mandatory Item</b> with a different border (CSS default: double border)</b></li>' +
	'    <li><b>2) Enphasize Error Item</b> with a different border (CSS default: Red border)</b></li>' +
	'    <li><b>3) Display HTML Tip (JSU Tooltip)</b> on the right of the Item to validate</li>' +
	'    <li><b>...</b></li>' +
	'  </ul>' +
	'<li><b>cLoading.js take care of everything:</b> Not only Validation but also all previous options are available <b>without any additional code</b> required: you simply have to set the desired options.</b></li>' +
	'<li><b>Different Loading Groups</b> can be managed separatly in the same page: each cLoading instance in independent, also in the same page</li>'+ 
	'<li><b>Multi language support</b> (<i>jsu/locale/...</i>)</li>' +
	'<li><b>CSS support</b> (<i>jsu/core/core.css</i>): if required you can easily customize presentation</li>' +
	'<li><b>All modern browsers are supported</b>(IE9+, Firefox 3+, Chrome, ...)</li>'+ 
	'<li><b>No external dependencies</b> at all (pure JS code)</b></li>'+ 
	'</ul>';
	if (bShowTrySample){
		szMsg += 	'&nbsp;&nbsp;<a class="tipLink" href="' + JSU_URL_SAMPLE_LOADING + '" target="_blank">Try JSU cLoading Sample</a><BR/>&nbsp; ';
	}

	TipFixedClicked (szMsg,event,{szTitle:"JSU cLoading", iMaxWidth: 1000,bCloseBtn: true});
}

function aboutPopupVideoLoading(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_LOADING,
    {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU Loading Table Sample"});
}



/**
 * Tip Info for SortTable
 */
function aboutTipSortInfo(){
	// DAFARE
	var szTip ="<b>OK DAFARE</b>";
	Tip (szTip);
}

function aboutPopupVideoSort(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_SORT,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU Sort Table Sample"});
}


function aboutPopupVideoTip(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_TIP,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU Tip Table Sample"});
}

/**
 * Tip Info for jslog
 */
function aboutTipjslogInfo(){
	// DAFARE
	var szTip ="<b>OK DAFARE</b>";
	Tip (szTip);
}

function aboutPopupVideojslog(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_JSLOG,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU jslog Sample"});
}



function aboutPopupVideoJSPopup(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_JSPOPUP,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU JSPopup Sample"});
}

function aboutPopupVideoBlockPopup(){
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_BLOCKPOPUP,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSU Blocking Popup Sample"});
}


/* ========================================================================= 
 						JS CODE SAMPLES DAFARE penso tutto da rimuovere
 ========================================================================= */

var JS_CODE_SORT= "//SORT SAMPLE_1: One JSU call is enough to set the Sort: \n" +
"// 1) create cSortTable related to Table with id='tbl1' \n" +
"var cSortTbl1 = new cSortTable('tbl1', \n" +
" //Describe how to Sort the Table Columns \n" +
"  [{col: 'Country'},  // Default type: SORT_TYPE.DATETIME \n"+  	
"   {col: 'Name'},  // Default type: SORT_TYPE.DATETIME \n"+
"   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \n"+
"   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\n"+
"   // For NUMBER  we use default separator (used creating the table)\n"+
"   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\n"+  		
"   // OPTION \n" +
"     {szSortCol:'Name',   // Current SortCol \n"+
"     szSortDir:SORT_DIR.ASC, // Current SortDir 	\n"+
"     bSortApply:false   // Table is already sorted\n"+
"});\n" +
"//Now you can Sort the Table by clicking on Colum Header ";

var JS_CODE_VALIDATE= '// 1) Init cValidate with Item constraints, tips and options \n' +
'function initValidate1(){ \n' + 
'  cValidateObj1 = new cValidate ({  \n' + 
'      // Mandatory email   \n' + 
'      email: {  presence: true,  email: true }, \n' + 
'      duration: { // Mandatory Integer in range [1..10] with a tip explaining it \n' + 
'        presence: true, tip: TIP_DURATION,  \n' + 
'        numericality: { onlyInteger: true,  greaterThanOrEqualTo: 1,  lessThanOrEqualTo: 10 } \n' + 
'      }, \n' + 
'      // Optional Birthday in date default format (YYYY-MM-DD) \n' + 
'      birthdate: { date: {} } \n' + 
'    }, \n' + 
'    // OPTION: Id of div to use in case of bOnErrShowSect:true \n' + 
'    {szErrSectId: "errSect1"} \n' + 
'  ); \n' + 
'  // Now the item Validation is managed by cValidate.js \n' + 
'} \n' + 
' \n' + 
' //  2)  At Submit Button Click: we Validate all the items  \n' + 
'function onclickSubmit1() { \n' + 
'  var retCode = cValidateObj1.validateApply(); \n' + 
'} \n';  

var JS_CODE_TIP= '//Define in JS the HTML Tip Msg: \n'+
'var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>\');" \n\n' + 
'//Add onmouseover="Tip()" and onmouseout="UnTip()" \n'+	
'<input type="text" value="HTML Tip" style="width:60px;" \n' +
'onmouseover="Tip(JSU_TIP_HTML);" onmouseout="UnTip(event)" />'; 


/**
 * Show JS Code and Video Sample
 * 
 * @param event
 */
function codeSampleValidate(event){
  TipFixedCodeSample (event,JS_CODE_VALIDATE,JSU_VIDEO_VALIDATE,
  		      {szTitle:"JSU Validate", arObjUrl: JSU_AR_VALIDATE_SAMPLE_URL});
}

/**
 * Show JS Code and Video Sample
 * 
 * @param event
 */
function codeSampleTip(event){
  TipFixedCodeSample (event,JS_CODE_TIP,JSU_VIDEO_TIP,
  		      {szTitle:"JSU Tooltip", arObjUrl: JSU_AR_TIP_SAMPLE_URL});
}


/**
 * Show JS Code and Video Sample
 * 
 * @param event
 */
function codeSampleSort(event){
  TipFixedCodeSample (event,JS_CODE_SORT,JSU_VIDEO_SORT,
  		      {szTitle:"JSU Table Sort", arObjUrl: JSU_AR_SORT_SAMPLE_URL});
}




/**
 * dwonload All JSU
 * 
 */
function downloadPay(){
	UnTip();
  Popup (POPUP_TYPE.INFO,'This Feature is still UNDER WORK: it will be available in few weeks');
}

function downloadFree(){
	UnTip();
  location.href=JSU_GITHUB_DOWNLOAD;
}



/**
* Tip for Downloading Options
* 
* @param event
* @param [bFloating] true 
*/
function downloadTip(event,bFloating){
	
	if (bFloating == undefined){
		bFloating = false;
	}
	var szMsg = '<div style="padding:5px 5px 5px 5px">There are 2 DOWLOAD Options: <ul>' +
	'<li><b>JSU.ZIP Complete:</b> Full access to source code, documentation, samples. Required if you want yo modify/customize/investigate JSU code</li>' +
	'<li><b>JSU.ZIP Obfuscated:</b> Full access only to samples. JSU code and document code reference are obfuscated. You can only use JSU as it is, as a <b><i>CLOSE BLACK BOX</i></b> </li>' +
	'</ul></div>' +
	'<table style="padding:5px 5px 5px 5px" class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="100%">' +
	'	  <tr class="tiptitle">' +
	'		  <th class="tiptitle" colspan="5">JSU.ZIP DOWLOAD OPTIONS</th>' +
	'	  </tr>' +
	'	  <tr class="tiptitle2">' +
	'		  <td width="20%" class="tipc">DOWNLOAD OPTION</td>' +
	'		  <td width="20%" class="tipc">JSU Source Code</td>' +
	'		  <td width="20%" class="tipc">JSU Documentation</td>' +
	'		  <td width="20%" class="tipc">Samples</td>' +
	'		  <td width="20%" class="tipc">Price</td>' +
	'	  </tr>' +
	'	  <tr>' +
	'		  <td class="tiptitle"><input type="button" class="downloadPay"   onclick="downloadPay()" /></td>' +
	'		  <td class="tipGood">Full access: Code visible with all comments</td>' +
	'		  <td class="tipGood">Full access: JSDoc HTML with reference to code</td>' +
	'		  <td class="tipGood">Full access</td>' +
	'		  <td class="tipwarn">FUTURE (Not still available)</td>' +
	'	  </tr>' +
	'	  <tr>' +
	'		  <td class="tiptitle"><input type="button" class="downloadFree"  ' +
	'         onclick="location.href=\'https://github.com/FedericoLevis/JSU/archive/master.zip\';" /></td>' +
	'		  <td class="tipErr">JS Obfuscated, with no comments</td>' +
	'		  <td>JSDoc HTML available, but <label class="tipErr">NO reference to code</label></td>' +
	'		  <td class="tipGood">Full access</td>' +
	'		  <td style="background-color:#008B45; color:white; font-weight:bold;font-size:16">FREE</td>' +
	'	  </tr>' +
	'</table>';

  if (bFloating){
  	Tip (szMsg);  	
  }else {
  	TipFixedClicked (szMsg,event,{szTitle:"DOWLOAD OPTIONS", bCloseBtn: true});
  }
}


/*=======================================================================================
 *   URl for DOC
=======================================================================================*/

/**
 * Open window with Validate Documentation
 */
function jsuDocValidate(){
	window.open(JSU_URL_DOC_VALIDATE, '_blank');
}

/**
 * Open window with Tip Documentation
 */
function jsuDocTip(){
	window.open(JSU_URL_DOC_TIP, '_blank');
}
/**
 * Open window with SortTable Documentation
 */
function jsuDocSort(){
	window.open(JSU_URL_DOC_SORT, '_blank');
}
/**
 * Open window with Loading Documentation
 */
function jsuDocLoading(){
	window.open(JSU_URL_DOC_LOADING, '_blank');
}

/**
 * Open window with JSLOG Documentation
 */
function jsuDocJSLog(){
	window.open(JSU_URL_DOC_JSLOG, '_blank');
}
/**
 * Open window with BlockPopup Documentation
 */
function jsuDocBlockPopup(){
	window.open(JSU_URL_DOC_BLOCKPOPUP, '_blank');
}
/**
 * Open window with JSPopup Documentation
 */
function jsuDocJSPopup(){
	window.open(JSU_URL_DOC_JSPOPUP, '_blank');
}

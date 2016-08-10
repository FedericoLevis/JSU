// ==================================================================== CONSTANT
//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;


var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)" ;

var JSU_TIP_README='<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="550">' +
   '<tr class="tiptitleBig"><td>README EXAMPLE</td></tr>' +
   '<tr><td class="tipl">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>' +
   '<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>' +
   '<li><b>Fixed</b> Tips, with URL, GIF, ...</li>' +
   '<li>Tips with <b>Video</b></li>' +
   '<li>Tips with <b>JS code</b></li>' +
   '<li>...</li>' +
   '</ul></td></tr></table>';

var JSU_TIP_INFO=JSU_TIP_HTML;




var TIP_VIDEO_SAMPLE=	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 

var TIP_JS_CODE_SAMPLE_1='//This is an example of JS Code \n' +
'function showMsg(msg){ \n' +
'  alert (msg); \n' +
'}\n' +
'var msg="Hello!"; \n' +
'showMsg (msg);';


/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
	manage_par_opt(); // manage optional PAR show_opt, only for developer
		
}






function sample2Fixed(event, iMaxHeight,bCloseBtn){
	var szTip='<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="450">' +
	'<tr><td class="tipl">Open/Close <b>Fixed Tip</b>:<ul>' +
	' <li><b>Open</b> Tip by clicking the <b>Down Arrow</b></li>' +
	' <li><b>Close</b> Tip with <b>ESC</b>, or by clicking the <b>Up Arrow</b>, or the <b>X</b> in the TopRight of the Tip, or the Optional <b>Close</b> Button if present</li>' +
	'</ul>' +
	'You can <b>Interact with Fixed Tip using the mouse</b>. For example:<ul>' +
	'<li>Click on a URL: <a class="tipLink" href="https://www.google.it" target="_blank">Google</a></li>' +
	'<li>Select Tip Text (Copy/paste)</li>' +
	'<li>Click on Buttons <input type="button" value="Click Me" onclick="showInfo(\'Hello\');">  </li>' +
	'</ul>' + 
	'In the Tip you can display whatever HTML object, also <b>GIF</b> <BR/>' +
	'<div align="center"><img height="200px" src="' + JSU_PATH_ABOUT_IMG + 'JSUDancing.gif" /></div>' +
	'</td></tr></table>';	
	TipFixedClicked(szTip,event,{szTitle:'Fixed Tip Sample',iMaxHeight:iMaxHeight,bCloseBtn:bCloseBtn});
}

//===================================================================================================
//  BELOW CODE is not strictly related to the Sort feature, but it is ONLY Related to JS Code Highlight
//===========================================================================================

var JS_CODE_TEXT_TIP= '//Add onmouseover="Tip()" and onmouseout="UnTip()" \n'+
'<input type="button" value="Text Tip" \n' + 
'onmouseover="Tip(\'Simple Tooltip without HTML tags.\\nNewline is working\')" \n' +
'onmouseout="UnTip(event)"/>';

var JS_CODE_HTML_TIP= '//Define in JS the HTML Tip Msg: \n'+
'var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>"; \n\n' + 
'//Add onmouseover="Tip()" and onmouseout="UnTip()" \n'+	
'<input type="text" value="HTML Tip" style="width:60px;" \n' +
'onmouseover="Tip(JSU_TIP_HTML);" onmouseout="UnTip(event)" />'; 

var JS_CODE_README_TIP= '//Define in JS the HTML Tip Msg:  \n'+
'var JSU_TIP_README=\'<table class="tip" ........</table>\'; \n\n'+
'//Add onmouseover="Tip()" and onmouseout="UnTip()" \n'+	
'<img type="image" src="../../images/Readme.jpg" align="bottom" \n' +
'onmouseover="Tip(JSU_TIP_README)"    onmouseout="UnTip(event)"/> '; 

var JS_CODE_INFO_TIP= '//Define in JS the HTML Tip Msg: \n'+
'var JSU_TIP_INFO="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>\');" \n\n' + 
'//Add onmouseover="Tip()" and onmouseout="UnTip()" \n'+	
'<img type="image" class="jsuInfo"  \n' +
'onmouseover="Tip(JSU_TIP_INFO);" onmouseout="UnTip(event)" />'; 


var JS_CODE_IMG_TIP_FIXED= '//Define in JS the HTML Tip Msg: \n'+
'var TIP_FIXED_SAMPLE=...; \n\n' +
'//<input> object with: \n' +
'//  - class="tipFixed"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixedClicked()" \n'+	
'//  - objOpt = {szTitle:..} for Optional Title \n' +
'<input type="button" class="tipFixed"  id="tipFixedSample" onclick="TipFixedClicked(TIP_FIXED_SAMPLE,event,{szTitle:\'Fixed Tip Sample\'});" /> '; 

var JS_CODE_INPUT_TIP_FIXED= '//Define in JS the HTML Tip Msg: \n'+
'var TIP_FIXED_SAMPLE=...; \n\n' +
'//<input> object with: \n' +
'//  - class="tipFixed" type="button" \n' + 
'//  - value=Text to display in the button \n'+	
'//  - whatever unique id \n' + 
'//  - onclick="TipJSFixedClicked(msg,event,objOpt)" \n'+	
'//  - objOpt = {iMaxHeight:300,bCloseBtn:false, szTitle:..} for Optional MaxHeight (VerticalScrollbar), NO CloseButton, Title \n' +
' <input type="button" class="tipFixed" value="Try Me" id="tipFixedBtnSample"  onclick="TipFixedClicked(TIP_FIXED_SAMPLE,event,{iMaxHeight:300,bCloseBtn:false,szTitle:\'Fixed Tip Sample\'});" /> '; 

var JS_CODE_IMG_JS_FIXED= '//Define in JS the Msg with the JS Code to higthlight: \n'+
'var TIP_JS_CODE_SAMPLE_1=...; \n\n' +
'//<img> object with: \n' +
'//  - class="tipFixed" \n' + 
'//  - Set whatever unique id \n' + 
'//  - onclick="TipJSFixedClicked()" \n'+	
'<img class="tipJSFixed" id="tipInputJSFixedSample"  onclick="TipJSFixedClicked(TIP_JS_CODE_SAMPLE_1,event);" />'; 

var JS_CODE_INPUT_JS_FIXED= '//Define in JS the Msg with the JS Code to higthlight:: \n'+
'var JS_CODE_SORT_SAMPLE=...; \n\n' +
'//<input> object with: \n' +
'//  - class="tipFixed" type="button" \n' + 
'//  - value=Text to display in the button \n'+	
'//  - set whatever unique id \n' + 
'//  - onclick="TipJSFixedClicked(msg,event,objOpt)" \n'+	
'//  - objOpt = {iMaxHeight:300} for Optional MaxHeight (Vertical Scrollbar)\n' +
' <input type="button" class="tipFixed" style="color:blue;" value="JS Source Code" id="tipBtnJSFixedSample"  onclick="TipJSFixedClicked(JS_CODE_SORT_SAMPLE,event,{iMaxHeight:300});" /> '; 

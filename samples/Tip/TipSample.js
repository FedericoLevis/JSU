/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_8302=["<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550\">","<tr class=\"tiptitleBig\"><td>README EXAMPLE</td></tr>","<tr><td class=\"tipl\">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>","<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>","<li><b>Fixed</b> Tips, with URL, GIF, ...</li>","<li>Tips with <b>Video</b></li>","<li>Tips with <b>JS/HTML syntax highlighted</b> (based on rainbow.js)</li>","<li>...</li>","</ul></td></tr></table>","<iframe width=\"600\" height=\"500\" src=\"https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>","//This is an example of JS Code \x0A","function showMsg(msg){ \x0A","  alert (msg); \x0A","}\x0A","var msg=\"Hello!\"; \x0A","showMsg (msg);","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"450\">","<tr><td class=\"tipl\">Open/Close <b>Fixed Tip</b>:<ul>"," <li><b>Open</b> Tip by clicking the <b>Down Arrow</b></li>"," <li><b>Close</b> Tip with <b>ESC</b>, or by clicking the <b>Up Arrow</b>, or the <b>X</b> in the TopRight of the Tip, or the Optional <b>Close</b> Button if present</li>","</ul>","You can <b>Interact with Fixed Tip using the mouse</b>. For example:<ul>","<li>Click on a URL: <a class=\"tipLink\" href=\"https://www.google.it\" target=\"_blank\">Google</a></li>","<li>Select Tip Text (Copy/paste)</li>","<li>Click on Buttons <input type=\"button\" value=\"Click Me\" onclick=\"showInfo('Hello');\">  </li>","In the Tip you can display whatever HTML object, also <b>GIF</b> <BR/>","<div align=\"center\"><img height=\"200px\" src=\"","JSUDancing.gif\" /></div>","</td></tr></table>","Fixed Tip Sample","//Add onmouseover=\"Tip()\" and onmouseout=\"UnTip()\" \x0A","<input type=\"button\" value=\"Text Tip\" \x0A","onmouseover=\"Tip('Simple Tooltip without HTML tags.\\nNewline is working')\" \x0A","onmouseout=\"UnTip(event)\"/>","//Define in JS the HTML Tip Msg: \x0A","var JSU_TIP_HTML=\"<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>');\" \x0A\x0A","<input type=\"text\" value=\"HTML Tip\" style=\"width:60px;\" \x0A","onmouseover=\"Tip(JSU_TIP_HTML);\" onmouseout=\"UnTip(event)\" />","//Define in JS the HTML Tip Msg:  \x0A","var JSU_TIP_README=...; \x0A\x0A","<img type=\"image\" src=\"../../images/Readme.jpg\" align=\"bottom\" \x0A","onmouseover=\"Tip(JSU_TIP_README)\"    onmouseout=\"UnTip(event)\"/> ","var JSU_TIP_INFO=\"<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>');\" \x0A\x0A","<img type=\"image\" class=\"jsuInfo\"  \x0A","onmouseover=\"Tip(JSU_TIP_INFO);\" onmouseout=\"UnTip(event)\" />","var TIP_FIXED_SAMPLE=...; \x0A\x0A","//<input> object with: \x0A","//  - class=\"tipFixed\"  type=\"button\" \x0A","//  - whatever unique id \x0A","//  - onclick=\"TipFixedClicked()\" \x0A","//  - objOpt = {szTitle:..} for Optional Title \x0A","<input type=\"button\" class=\"tipFixed\"  id=\"tipFixedSample\" onclick=\"TipFixedClicked(TIP_FIXED_SAMPLE,event,{szTitle:'Fixed Tip Sample'});\" /> ","//  - class=\"tipFixed\" type=\"button\" \x0A","//  - value=Text to display in the button \x0A","//  - onclick=\"TipJSFixedClicked(msg,event,objOpt)\" \x0A","//  - objOpt = {iMaxHeight:300,bCloseBtn:false, szTitle:..} for Optional MaxHeight (VerticalScrollbar), NO CloseButton, Title \x0A"," <input type=\"button\" class=\"tipFixed\" value=\"Try Me\" id=\"tipFixedBtnSample\"  onclick=\"TipFixedClicked(TIP_FIXED_SAMPLE,event,{iMaxHeight:300,bCloseBtn:false,szTitle:'Fixed Tip Sample'});\" /> ","//Define in JS the Msg with the JS Code to higthlight: \x0A","var TIP_JS_CODE_SAMPLE_1=...; \x0A\x0A","//<img> object with: \x0A","//  - class=\"tipFixed\" \x0A","//  - Set whatever unique id \x0A","//  - onclick=\"TipJSFixedClicked()\" \x0A","<img class=\"tipJSFixed\" id=\"tipInputJSFixedSample\"  onclick=\"TipJSFixedClicked(TIP_JS_CODE_SAMPLE_1,event);\" />","//Define in JS the Msg with the JS Code to higthlight:: \x0A","var JS_CODE_SORT_SAMPLE=...; \x0A\x0A","//  - set whatever unique id \x0A","//  - objOpt = {iMaxHeight:300} for Optional MaxHeight (Vertical Scrollbar)\x0A"," <input type=\"button\" class=\"tipFixed\" style=\"color:blue;\" value=\"JS Source Code\" id=\"tipBtnJSFixedSample\"  onclick=\"TipJSFixedClicked(JS_CODE_SORT_SAMPLE,event,{iMaxHeight:300});\" /> "];var JSLOG_LEV=0;var JSU_TIP_HTML=_$_8302[0];var JSU_TIP_README=_$_8302[1]+ _$_8302[2]+ _$_8302[3]+ _$_8302[4]+ _$_8302[5]+ _$_8302[6]+ _$_8302[7]+ _$_8302[8]+ _$_8302[9];var JSU_TIP_INFO=JSU_TIP_HTML;var TIP_VIDEO_SAMPLE=_$_8302[10];var TIP_JS_CODE_SAMPLE_1=_$_8302[11]+ _$_8302[12]+ _$_8302[13]+ _$_8302[14]+ _$_8302[15]+ _$_8302[16];function jsu_loaded(){}function sample2Fixed(H,bk,bj){var bb=_$_8302[17]+ _$_8302[18]+ _$_8302[19]+ _$_8302[20]+ _$_8302[21]+ _$_8302[22]+ _$_8302[23]+ _$_8302[24]+ _$_8302[25]+ _$_8302[21]+ _$_8302[26]+ _$_8302[27]+ JSU_PATH_ABOUT_IMG+ _$_8302[28]+ _$_8302[29];TipFixedClicked(bb,H,{szTitle:_$_8302[30],iMaxHeight:bk,bCloseBtn:bj})}var JS_CODE_TEXT_TIP=_$_8302[31]+ _$_8302[32]+ _$_8302[33]+ _$_8302[34];var JS_CODE_HTML_TIP=_$_8302[35]+ _$_8302[36]+ _$_8302[31]+ _$_8302[37]+ _$_8302[38];var JS_CODE_README_TIP=_$_8302[39]+ _$_8302[40]+ _$_8302[31]+ _$_8302[41]+ _$_8302[42];var JS_CODE_INFO_TIP=_$_8302[35]+ _$_8302[43]+ _$_8302[31]+ _$_8302[44]+ _$_8302[45];var JS_CODE_IMG_TIP_FIXED=_$_8302[35]+ _$_8302[46]+ _$_8302[47]+ _$_8302[48]+ _$_8302[49]+ _$_8302[50]+ _$_8302[51]+ _$_8302[52];var JS_CODE_INPUT_TIP_FIXED=_$_8302[35]+ _$_8302[46]+ _$_8302[47]+ _$_8302[53]+ _$_8302[54]+ _$_8302[49]+ _$_8302[55]+ _$_8302[56]+ _$_8302[57];var JS_CODE_IMG_JS_FIXED=_$_8302[58]+ _$_8302[59]+ _$_8302[60]+ _$_8302[61]+ _$_8302[62]+ _$_8302[63]+ _$_8302[64];var JS_CODE_INPUT_JS_FIXED=_$_8302[65]+ _$_8302[66]+ _$_8302[47]+ _$_8302[53]+ _$_8302[54]+ _$_8302[67]+ _$_8302[55]+ _$_8302[68]+ _$_8302[69]
/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_a93a=["<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550\">","<tr class=\"tiptitleBig\"><td>README EXAMPLE</td></tr>","<tr><td class=\"tipl\">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>","<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>","<li><b>Fixed</b> Tips, with URL, GIF, ...</li>","<li>Tips with <b>Video</b></li>","<li>Tips with <b>JS code</b></li>","<li>...</li>","</ul></td></tr></table>","<iframe width=\"600\" height=\"500\" src=\"https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>","//This is an example of JS Code \x0A","function showMsg(msg){ \x0A","  alert (msg); \x0A","}\x0A","var msg=\"Hello!\"; \x0A","showMsg (msg);","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"450\">","<tr><td class=\"tipl\">Open/Close <b>Fixed Tip</b>:<ul>"," <li><b>Open</b> Tip by clicking the <b>Down Arrow</b></li>"," <li><b>Close</b> Tip with <b>ESC</b>, or by clicking the <b>Up Arrow</b>, or the <b>X</b> in the TopRight of the Tip, or the Optional <b>Close</b> Button if present</li>","</ul>","You can <b>Interact with Fixed Tip using the mouse</b>. For example:<ul>","<li>Click on a URL: <a class=\"tipLink\" href=\"https://www.google.it\" target=\"_blank\">Google</a></li>","<li>Select Tip Text (Copy/paste)</li>","<li>Click on Buttons <input type=\"button\" value=\"Click Me\" onclick=\"showInfo('Hello');\">  </li>","In the Tip you can display whatever HTML object, also <b>GIF</b> <BR/>","<div align=\"center\"><img height=\"200px\" src=\"","JSUDancing.gif\" /></div>","</td></tr></table>","Fixed Tip Sample","//Add onmouseover=\"Tip()\" and onmouseout=\"UnTip()\" \x0A","<input type=\"button\" value=\"Text Tip\" \x0A","onmouseover=\"Tip('Simple Tooltip without HTML tags.\\nNewline is working')\" \x0A","onmouseout=\"UnTip(event)\"/>","//Define in JS the HTML Tip Msg: \x0A","var JSU_TIP_HTML=\"<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>\"; \x0A\x0A","<input type=\"text\" value=\"HTML Tip\" style=\"width:60px;\" \x0A","onmouseover=\"Tip(JSU_TIP_HTML);\" onmouseout=\"UnTip(event)\" />","//Define in JS the HTML Tip Msg:  \x0A","var JSU_TIP_README=...; \x0A\x0A","<img type=\"image\" src=\"../../images/Readme.jpg\" align=\"bottom\" \x0A","onmouseover=\"Tip(JSU_TIP_README)\"    onmouseout=\"UnTip(event)\"/> ","var JSU_TIP_INFO=\"<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>');\" \x0A\x0A","<img type=\"image\" class=\"jsuInfo\"  \x0A","onmouseover=\"Tip(JSU_TIP_INFO);\" onmouseout=\"UnTip(event)\" />","var TIP_FIXED_SAMPLE=...; \x0A\x0A","//<input> object with: \x0A","//  - class=\"tipFixed\"  type=\"button\" \x0A","//  - whatever unique id \x0A","//  - onclick=\"TipFixedClicked()\" \x0A","//  - objOpt = {szTitle:..} for Optional Title \x0A","<input type=\"button\" class=\"tipFixed\"  id=\"tipFixedSample\" onclick=\"TipFixedClicked(TIP_FIXED_SAMPLE,event,{szTitle:'Fixed Tip Sample'});\" /> ","//  - class=\"tipFixed\" type=\"button\" \x0A","//  - value=Text to display in the button \x0A","//  - onclick=\"TipJSFixedClicked(msg,event,objOpt)\" \x0A","//  - objOpt = {iMaxHeight:300,bCloseBtn:false, szTitle:..} for Optional MaxHeight (VerticalScrollbar), NO CloseButton, Title \x0A"," <input type=\"button\" class=\"tipFixed\" value=\"Try Me\" id=\"tipFixedBtnSample\"  onclick=\"TipFixedClicked(TIP_FIXED_SAMPLE,event,{iMaxHeight:300,bCloseBtn:false,szTitle:'Fixed Tip Sample'});\" /> ","//Define in JS the Msg with the JS Code to higthlight: \x0A","var TIP_JS_CODE_SAMPLE_1=...; \x0A\x0A","//<img> object with: \x0A","//  - class=\"tipFixed\" \x0A","//  - Set whatever unique id \x0A","//  - onclick=\"TipJSFixedClicked()\" \x0A","<img class=\"tipJSFixed\" id=\"tipInputJSFixedSample\"  onclick=\"TipJSFixedClicked(TIP_JS_CODE_SAMPLE_1,event);\" />","//Define in JS the Msg with the JS Code to higthlight:: \x0A","var JS_CODE_SORT_SAMPLE=...; \x0A\x0A","//  - set whatever unique id \x0A","//  - objOpt = {iMaxHeight:300} for Optional MaxHeight (Vertical Scrollbar)\x0A"," <input type=\"button\" class=\"tipFixed\" style=\"color:blue;\" value=\"JS Source Code\" id=\"tipBtnJSFixedSample\"  onclick=\"TipJSFixedClicked(JS_CODE_SORT_SAMPLE,event,{iMaxHeight:300});\" /> "];var JSLOG_LEV=0;var JSU_TIP_HTML=_$_a93a[0];var JSU_TIP_README=_$_a93a[1]+ _$_a93a[2]+ _$_a93a[3]+ _$_a93a[4]+ _$_a93a[5]+ _$_a93a[6]+ _$_a93a[7]+ _$_a93a[8]+ _$_a93a[9];var JSU_TIP_INFO=JSU_TIP_HTML;var TIP_VIDEO_SAMPLE=_$_a93a[10];var TIP_JS_CODE_SAMPLE_1=_$_a93a[11]+ _$_a93a[12]+ _$_a93a[13]+ _$_a93a[14]+ _$_a93a[15]+ _$_a93a[16];function jsu_loaded(){manage_par_opt()}function sample2Fixed(H,bk,bj){var bb=_$_a93a[17]+ _$_a93a[18]+ _$_a93a[19]+ _$_a93a[20]+ _$_a93a[21]+ _$_a93a[22]+ _$_a93a[23]+ _$_a93a[24]+ _$_a93a[25]+ _$_a93a[21]+ _$_a93a[26]+ _$_a93a[27]+ JSU_PATH_ABOUT_IMG+ _$_a93a[28]+ _$_a93a[29];TipFixedClicked(bb,H,{szTitle:_$_a93a[30],iMaxHeight:bk,bCloseBtn:bj})}var JS_CODE_TEXT_TIP=_$_a93a[31]+ _$_a93a[32]+ _$_a93a[33]+ _$_a93a[34];var JS_CODE_HTML_TIP=_$_a93a[35]+ _$_a93a[36]+ _$_a93a[31]+ _$_a93a[37]+ _$_a93a[38];var JS_CODE_README_TIP=_$_a93a[39]+ _$_a93a[40]+ _$_a93a[31]+ _$_a93a[41]+ _$_a93a[42];var JS_CODE_INFO_TIP=_$_a93a[35]+ _$_a93a[43]+ _$_a93a[31]+ _$_a93a[44]+ _$_a93a[45];var JS_CODE_IMG_TIP_FIXED=_$_a93a[35]+ _$_a93a[46]+ _$_a93a[47]+ _$_a93a[48]+ _$_a93a[49]+ _$_a93a[50]+ _$_a93a[51]+ _$_a93a[52];var JS_CODE_INPUT_TIP_FIXED=_$_a93a[35]+ _$_a93a[46]+ _$_a93a[47]+ _$_a93a[53]+ _$_a93a[54]+ _$_a93a[49]+ _$_a93a[55]+ _$_a93a[56]+ _$_a93a[57];var JS_CODE_IMG_JS_FIXED=_$_a93a[58]+ _$_a93a[59]+ _$_a93a[60]+ _$_a93a[61]+ _$_a93a[62]+ _$_a93a[63]+ _$_a93a[64];var JS_CODE_INPUT_JS_FIXED=_$_a93a[65]+ _$_a93a[66]+ _$_a93a[47]+ _$_a93a[53]+ _$_a93a[54]+ _$_a93a[67]+ _$_a93a[55]+ _$_a93a[68]+ _$_a93a[69]
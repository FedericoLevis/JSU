/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_3afc=["-------------------------------------------------------------------------------------------","<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550px\">","<tr class=\"tipTitleBig\"><td>README EXAMPLE</td></tr>","<tr><td class=\"tipl\">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>","<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>","<li><b>Fixed</b> Tips, with URL, GIF, ...</li>","<li>Tips with <b>Video</b></li>","<li>Tips with <b>Embedded HTML Page</b></li>","<li>Tips with <b>Code Prettified</b></li>","<li>...</li>","</ul></td></tr></table>","<div>","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550px\" align=\"center\">"," <tr><td><img height=\"100px\" src=\"","JSUDancing.gif\" /></td></tr></table>","</div>","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"450\">","<tr><td class=\"tipl\">Open/Close <b>Fixed Tip</b>:<ul>"," <li><b>Open</b> Tip by clicking the <b>Down Arrow</b></li>"," <li><b>Close</b> Tip with <b>ESC</b>, or by clicking the <b>Up Arrow</b>, or the <b>X</b> in the TopRight of the Tip, or the Optional <b>Close</b> Button if present</li>","</ul>","You can <b>Interact with Fixed Tip using the mouse</b>. For example:<ul>","<li>Click on a URL: <a class=\"tipLink\" href=\"https://www.google.it\" target=\"_blank\">Google</a></li>","<li>Select Tip Text (Copy/paste)</li>","<li>Click on Buttons <input type=\"button\" value=\"Click Me\" onclick=\"showInfo('Hello');\">  </li>","In the Tip you can display whatever HTML object, also <b>GIF</b> <BR/>","<div align=\"center\"><img height=\"200px\" src=\"","JSUDancing.gif\" /></div>","</td></tr></table>","Fixed Tip Sample","<iframe width=\"600\" height=\"500\" src=\"https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>","Fixed Tip with a Video","<iframe width=\"1030\" height=\"600\" src=\"","\" ></iframe>","Fixed Tip containing the FREE JSU.zip Download Page","//JS Code to Sort an HTML Table with JSU cSortTable: you need only one JSU API call. \x0A","// 1) create cSortTable related to Table with id='tbl1' \x0A","var cSortTbl1 = new cSortTable('tbl1', \x0A"," //Describe how to Sort the Table Columns \x0A","  [{col: 'Country'},  // Default type: SORT_TYPE.STRING \x0A","   {col: 'Name'},  // Default type: SORT_TYPE.STRING \x0A","   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \x0A","   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\x0A","   // For NUMBER  we use default separator (used creating the table)\x0A","   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\x0A","   // OPTION \x0A","     {szSortCol:'Name',   // Current SortCol (we have already Popolated the Table order by this col)\x0A","     szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)\x09\x0A","     bSortApply:false   //  Table is already sorted\x0A","});\x0A","//Now you can Sort the Table by clicking on Colum Header ","Tip Sample with JS Code Hightlighted","/** \x0A","* Class Factorial \x0A","* print 100 Factorial numbers \x0A","*/ \x0A","public class Factorial   \x0A","{   \x0A","\x09public static void main(String[] args)   \x0A","\x09{\x09final int NUM_FACTS = 100;   \x0A","\x09\x09for(int i = 0; i < NUM_FACTS; i++)   \x0A","\x09\x09\x09System.out.println( i + \"! is \" + factorial(i));   \x0A","\x09}   \x0A","\x09   \x0A","\x09public static int factorial(int n)   \x0A","\x09{\x09int result = 1;   \x0A","\x09\x09for(int i = 2; i <= n; i++)   \x0A","\x09\x09\x09result *= i;   \x0A","\x09\x09return result;   \x0A","\x09} ","Tip Sample with Java Code Hightlighted","//JS and HTML Code to implement SAMPLE_3 - case a) ONLY JS \x0A","// In This case we can use TipFixCode to Hightlight the JS Code:  \x0A\x0A","// ---------------------------------------------------------------------------------  \x0A","// 1 JS) Define in JS the jsMsgCode to show in the Tip:  \x0A","var JSU_TIP_3A=...; \x0A\x0A","// 2 HTML) Add an <input> with following attributes:\" \x0A","//<input> object with: \x0A","//  - class=\"tipFixCode\"  type=\"button\" \x0A","//  - whatever unique id \x0A","//  - onclick=\"TipFixCode()\" \x0A","//  - objOpt = {..} Set Option \x0A","<input type=\"button\" class=\"tipFixCode\"  id=\"sample3a\" \x0A","   onclick=\"TipFixCode(TIP_TIP_3A,event,{ \x0A","      iTipWidth:1000,  \\ preferred MaxWidth  \x0A","      iTipMaxHeight:600, \\ preferred MaxHeight \x0A","      szTitle:'Tip Sample with ONLY JS Code'});\" /> ","//JS and HTML Code to implement SAMPLE_3 - case b) JS and HTML \x0A","// In This case we cannot use TipFixCode to Hightlight the JS Code, because there is already HTML Code in Msg \x0A","// Instead we use TipFixMultiCode to Show the message as Plain Text, and see the HTML TAGs  \x0A\x0A","// 1 JS) Define in JS the szTxt to show in the Tip (with also HTML TAGs):  \x0A","var JSU_TIP_3B=...; \x0A\x0A","<input type=\"button\" class=\"tipFixArrow\" style=\"color:blue;\" value=\"Source Code\" id=\"sample3b\" \x0A","   onclick=\"TipFixMultiCode(TIP_TIP_3B,event,{ \x0A","      iMaxRow:20,  \\ preferred Row Num  \x0A","      iMaxCol:120, \\ preferred Col Num \x0A","      szTitle:'Text Box with ONLY also HTML TAGs'});\" /> ","// To add the Text FloatingTip to whatever HTML Item: \x0A","// - onmouseover=\"Tip(TextMsg)\" \x0A","// - onmouseout=\"UnTip() \" \x0A","// In This example: \x0A","<input type=\"button\" value=\"Text Tip\" \x0A","   onmouseover=\"Tip('Simple Tooltip without HTML tags.\\nNewline is working');\" \x0A","   onmouseout=\"UnTip(event);\"/>","HTML: TipSample.html","SAMPLE_1 Text tip - Source Code","//Define in JS a constant (e.g. JSU_TIP_HTML) with the MsgHtml to show in the Tip:  \x0A","var JSU_TIP_HTML=\"<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>\";","// To add whatever HTML FloatingTip to whatever HTML Item: \x0A","// - onmouseover=\"Tip(HtmlMsg);\" \x0A","// - onmouseout=\"UnTip();\" \x0A","<input type=\"text\" value=\"HTML Tip\" style=\"width:60px;\" \x0A","  onmouseover=\"Tip(JSU_TIP_HTML);\"  \x0A","  onmouseout=\"UnTip(event);\"/>","JS: TipSample.js","SAMPLE_1 HTML Tip - Source Code","//Define in JS a constant (e.g. JSU_TIP_README) with the MsgHtml to show in the Tip:  \x0A","//In this example we built an HTML Table that will be shown in the Floating Tip: '  \x0A","var JSU_TIP_README='<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550\">'  \x0A","  '  <tr class=\"tipTitleBig\"><td>README EXAMPLE</td></tr>'  \x0A","  '  <tr><td class=\"tipl\">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>'  \x0A","  '     <BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:'  \x0A","  '     <ul>'  \x0A","  '       <li><b>Fixed</b> Tips, with URL, GIF, ...</li>'  \x0A","  '       <li>Tips with <b>Video</b></li>'  \x0A","  '       <li>Tips with <b>JS code</b></li>'  \x0A","  '       <li>...</li>'  \x0A","  '     </ul>'  \x0A","  '  </td></tr>'  \x0A","  '</table>","<img type=\"image\" src=\"https://rawgit.com/FedericoLevis/JSU/master/images/Readme.jpg\" align=\"bottom\" \x0A","  onmouseover=\"Tip(JSU_TIP_README);\"  \x0A","SAMPLE_1 README Tip - Source Code","var JSU_TIP_HTML=\"...\";","// In This example we use the JSU class=\"jsuInfo\": \x0A","<input type=\"button\" class=\"jsuInfo\" \x0A","/*------------------------------------------------------------- \x0A","Tip button for FloatingTip: <input class=\"jsuInfo\" type=\"button\" /> \x0A","Used with JSU Tooltip API Tip() UnTip() - See <a href=\"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html\">JSU Tooltip API Doc</a> \x0A","-------------------------------------------------------------*/ \x0A","input.jsuInfo{ /* Info img  */ \x0A","  background:url('https://raw.github.com/FedericoLevis/JSU/master/images/info.png') no-repeat center center; \x0A","  background-color: #19E4DD; \x0A","  height: 14px; \x0A","  width: 5px; \x0A","  margin-left: 2px;  \x0A","  cursor: pointer; \x0A","  border: 1px solid #000; \x0A","} \x0A ","CSS: jsu/core/jsu.css","SAMPLE_4 HTML Tip - Tip image jsuInfo","//Define in JS a constant (e.g. TIP_FIXED_SAMPLE) with the MsgHtml (with GIF, button, link,...) to show in the Tip.  \x0A","var TIP_FIXED_SAMPLE=...; ","// In This example we add the FixedTip to an <input> \"button\" with the JSU class \"tipFix\":  \x0A","//  - class=\"tipFix\"  type=\"button\" \x0A","//  - onclick=\"TipFix(szHtml,event,objOpt)\" \x0A","//  - objOpt = {..} Optional Option \x0A","<input type=\"button\" class=\"tipFix\"  id=\"tipFixSample\" \x0A","   onclick=\"TipFix(TIP_FIXED_SAMPLE,event,{ \x0A","      iTipMaxHeight:1000, \x0A","      szTitle:'Fixed Tip Sample'});\" /> ","/*","\x0A","Tip button for FixedTip - ","see JSU Tooltip API TipFix()  <a href=\"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html\">JSU Tooltip API Doc</a> \x0A","input.tipFix <input class=\"tipFix\" type=\"button\" style=\"margin-left:5px;margin-right:50px\" /> ","input.tipFixUp <input style=\"margin-left:5px\" class=\"tipFixUp\" type=\"button\" />   \x0A","input.tipFix, input.tipFixUp{  /* Fields Common for input.tipFix and input.tipFixUp */  \x0A","    height: 20px; \x0A","    width: 13px; \x0A","    border: 1px solid #000; \x0A","    font-weight: bold; \x0A","    cursor: pointer; \x0A","    margin-left: 4px;  \x0A","} \x0A"," \x0A","input.tipFix{ /* Specific field of input.tipFix. Image= ? with arrow Down */ \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFix.png) no-repeat center center; \x0A","input.tipFixUp{ /* Specific field of input.tipFixUp. Image= ? with arrow Up   */ \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixUp.png) no-repeat center center; \x0A","SAMPLE_2 FixedTip with GIF, button, link - Source Code","//Define in JS a constant (e.g. JSU_TIP_VIDEO) with the MsgHtml containing the <iframe> format  to show the Video in the Tip.  \x0A","// For example to show a youtube video use the relative \"embed src\" available in its YouTube page: \x0A","var JSU_TIP_VIDEO=\x09'<iframe width=\"600\" height=\"500\" \x0A","     src=\"https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1\" \x0A","     frameborder=\"0\" allowfullscreen></iframe>';","// In This example we add the Video FixedTip to an <input> \"button\" with the JSU class \"tipFixArrow\":  \x0A","//  - objOpt = {..} Set the desired Option \x0A"," <input type=\"button\" class=\"tipFixArrow\" value=\"Show Video\" id=\"tipSample2b1\" \x0A","  onclick=\"TipFix(JSU_TIP_VIDEO,event,{ \x0A","     iTipWidth: 650,  \x0A","     szTitle:'Fixed Tip with a Video' \x0A","   });\" /> ","Tip button for FixedTip with an Up/Down Arrow:\x0A","input.tipFixArrow: <input class=\"tipFixArrow\" value=\"Example\" type=\"button\" style=\"margin-left:5px;margin-right:50px\" /> \x0A","input.tipFixArrowUp: <input style=\"margin-left:5px\" value=\"Example\" class=\"tipFixArrowUp\" type=\"button\" />   \x0A","Used with JSU Tooltip API TipFix() - See <a href=\"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html\">JSU Tooltip API Doc</a> \x0A","input.tipFixArrow, input.tipFixArrowUp {  /* Common fields  */ \x0A","    padding-right: 30px; \x0A","input.tipFixArrow { /* specific image for tipFixArrow */  \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrow.png) no-repeat right center; \x0A","input.tipFixArrowUp { /* specific image for tipFixArrowUp */ \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrowUp.png) no-repeat right center; \x0A","}","SAMPLE_2 FixedTip with VIDEO - Source Code","//Define in JS the function the call TipFix, passing the MsgHtml with the <iframe> with the Page URL  \x0A","// For example to show the JSU download page https://goo.gl/HnNqnM : \x0A","function sample2b2(event){ \x0A"," var szTipFrame =\x09'<iframe width=\"1030\" height=\"600\" src=\"https://goo.gl/HnNqnM\" ></iframe>';  \x0A","\x09TipFix(szTipFrame,event,{ \x0A","\x09\x09 iTipWidth: 1070, \x0A","\x09\x09 szTitle:'Fixed Tip containing the FREE JSU.zip Download Page', \x0A","\x09  bCloseBtn : false \x0A","\x09 } \x0A","// In This example we add the HTMLPage FixedTip to an <input> \"button\" with the JSU class \"tipFixArrow\":  \x0A","//  - onclick=\"sample2b2(event)\" \x0A"," <input type=\"button\" class=\"tipFixArrow\" value=\"Show HTML Page\" id=\"tipSample2b2\" \x0A","  onclick=\"sample2b2(event)\" /> ","SAMPLE_2 FixedTip with HTMLPage - Source Code","// Prepare szCode Msg with the code to be displayed  Hightlighted \x0A","var szCode = '...'; \x0A","  // show the code Hightlighted \x0A","  TipFixCode(szCode,event, \x0A","\x09\x09 {iTipWidth:1000, \x0A","\x09    iTipMaxHeight:600, \x0A","\x09    szTitle:'Tip Sample with JS Code Hightlighted' \x0A","\x09   });","JS Code of SAMPLE 3a or 3b","// Prepare 3 szCode Msg with the 3 code sections to be disaplayed together\x0A","var JS_CODE_2a_JS = '...'; \x0A","var JS_CODE_2a_HTML = '...'; \x0A","var JS_CODE_2a_CSS = '...'; \x0A","// Show 3 Code Sections: \x0A","//  - Msg1 and Msg3 prettified  \x0A","//  - Msg2 not prettified to see the HTML TAGS as Plain Text  \x0A","\x09TipFixMultiCode([ \x0A"," \x09      {szTitle:\"JS: TipSample.js\", szCode: JS_CODE_2a_JS,  bPrettify:true}, \x0A","\x09      {szTitle:\"HTML: TipSample.html\", szCode: JS_CODE_2a_HTML,  bPrettify:false, iRowNum:6}, \x0A","\x09      {szTitle:\"CSS: jsu/core/jsu.css\", szCode: JS_CODE_2a_CSS,  bPrettify:true, iMaxHeight: 250 } \x0A","\x09    ], \x0A","      event, \x0A","      {szTitle:\"FixedTip with GIF, button, link - Source Code\" , iTipWidth: 1100} );\x09","JS Code of SAMPLE 3c"];var JSLOG_LEV=0;var CSS_SEP=_$_3afc[0];var JSU_TIP_HTML=_$_3afc[1];var JSU_TIP_README=_$_3afc[2]+ _$_3afc[3]+ _$_3afc[4]+ _$_3afc[5]+ _$_3afc[6]+ _$_3afc[7]+ _$_3afc[8]+ _$_3afc[9]+ _$_3afc[10]+ _$_3afc[11];function jsu_loaded(){initSampleCmn()}function sample1d(a){var b=_$_3afc[12]+ _$_3afc[13]+ _$_3afc[14]+ JSU_PATH_ABOUT_IMG+ _$_3afc[15]+ JSU_TIP_README+ _$_3afc[16];Tip(b)}function sample2a(a){var b=_$_3afc[17]+ _$_3afc[18]+ _$_3afc[19]+ _$_3afc[20]+ _$_3afc[21]+ _$_3afc[22]+ _$_3afc[23]+ _$_3afc[24]+ _$_3afc[25]+ _$_3afc[21]+ _$_3afc[26]+ _$_3afc[27]+ JSU_PATH_ABOUT_IMG+ _$_3afc[28]+ _$_3afc[29];TipFix(b,a,{szTitle:_$_3afc[30],iTipMaxHeight:1000})}function sample2b1(a){var ea=_$_3afc[31];TipFix(ea,a,{iTipWidth:620,szTitle:_$_3afc[32]})}function sample2b2(a){var w=_$_3afc[33]+ JSU_SHORT_URL_DOWNLOAD_FREE+ _$_3afc[34];TipFix(w,a,{iTipWidth:1070,szTitle:_$_3afc[35],bCloseBtn:false})}function sample3a(a){var ed=_$_3afc[36]+ _$_3afc[37]+ _$_3afc[38]+ _$_3afc[39]+ _$_3afc[40]+ _$_3afc[41]+ _$_3afc[42]+ _$_3afc[43]+ _$_3afc[44]+ _$_3afc[45]+ _$_3afc[46]+ _$_3afc[47]+ _$_3afc[48]+ _$_3afc[49]+ _$_3afc[50]+ _$_3afc[51];TipFixCode(ed,a,{iTipWidth:1000,iTipMaxHeight:600,szTitle:_$_3afc[52]})}function sample3b(a){var ed=_$_3afc[53]+ _$_3afc[54]+ _$_3afc[55]+ _$_3afc[56]+ _$_3afc[57]+ _$_3afc[58]+ _$_3afc[59]+ _$_3afc[60]+ _$_3afc[61]+ _$_3afc[62]+ _$_3afc[63]+ _$_3afc[64]+ _$_3afc[65]+ _$_3afc[66]+ _$_3afc[67]+ _$_3afc[68]+ _$_3afc[69]+ _$_3afc[70];TipFixCode(ed,a,{iTipWidth:1000,iTipMaxHeight:600,szTitle:_$_3afc[71]})}function sample3c(a){sampleCode2a(a)}var JS_CODE_3A=_$_3afc[72]+ _$_3afc[73]+ _$_3afc[74]+ _$_3afc[75]+ _$_3afc[76]+ _$_3afc[74]+ _$_3afc[77]+ _$_3afc[78]+ _$_3afc[79]+ _$_3afc[80]+ _$_3afc[81]+ _$_3afc[82]+ _$_3afc[83]+ _$_3afc[84]+ _$_3afc[85]+ _$_3afc[86]+ _$_3afc[87];var JS_CODE_3B=_$_3afc[88]+ _$_3afc[89]+ _$_3afc[90]+ _$_3afc[74]+ _$_3afc[91]+ _$_3afc[92]+ _$_3afc[74]+ _$_3afc[77]+ _$_3afc[78]+ _$_3afc[79]+ _$_3afc[80]+ _$_3afc[81]+ _$_3afc[82]+ _$_3afc[93]+ _$_3afc[94]+ _$_3afc[95]+ _$_3afc[96]+ _$_3afc[97];function sampleCode1a(a){var ef=_$_3afc[98]+ _$_3afc[99]+ _$_3afc[100]+ _$_3afc[101]+ _$_3afc[102]+ _$_3afc[103]+ _$_3afc[104];TipFixMultiCode([{szTitle:_$_3afc[105],szCode:ef,bPrettify:false}],a,{szTitle:_$_3afc[106],iTipWidth:700})}function sampleCode1b(a){var eh=_$_3afc[107]+ _$_3afc[108];var eg=_$_3afc[109]+ _$_3afc[110]+ _$_3afc[111]+ _$_3afc[101]+ _$_3afc[112]+ _$_3afc[113]+ _$_3afc[114];TipFixMultiCode([{szTitle:_$_3afc[115],szCode:eh,bPrettify:false},{szTitle:_$_3afc[105],szCode:eg,bPrettify:false}],a,{szTitle:_$_3afc[116],iTipWidth:1000})}function sampleCode1c(a){var ej=_$_3afc[117]+ _$_3afc[118]+ _$_3afc[119]+ _$_3afc[120]+ _$_3afc[121]+ _$_3afc[122]+ _$_3afc[123]+ _$_3afc[124]+ _$_3afc[125]+ _$_3afc[126]+ _$_3afc[127]+ _$_3afc[128]+ _$_3afc[129]+ _$_3afc[130];var ei=_$_3afc[109]+ _$_3afc[110]+ _$_3afc[111]+ _$_3afc[101]+ _$_3afc[131]+ _$_3afc[132]+ _$_3afc[114];TipFixMultiCode([{szTitle:_$_3afc[115],szCode:ej,bPrettify:false},{szTitle:_$_3afc[105],szCode:ei,bPrettify:false}],a,{szTitle:_$_3afc[133],iTipWidth:1000})}function sampleCode1d(a){var en=_$_3afc[107]+ _$_3afc[134];var em=_$_3afc[109]+ _$_3afc[110]+ _$_3afc[111]+ _$_3afc[135]+ _$_3afc[136]+ _$_3afc[113]+ _$_3afc[114];var ek=_$_3afc[137]+ _$_3afc[138]+ _$_3afc[139]+ _$_3afc[140]+ _$_3afc[141]+ _$_3afc[142]+ _$_3afc[143]+ _$_3afc[144]+ _$_3afc[145]+ _$_3afc[146]+ _$_3afc[147]+ _$_3afc[148]+ _$_3afc[149];TipFixMultiCode([{szTitle:_$_3afc[115],szCode:en,bPrettify:true},{szTitle:_$_3afc[105],szCode:em,bPrettify:false},{szTitle:_$_3afc[150],szCode:ek,bPrettify:true}],a,{szTitle:_$_3afc[151],iTipWidth:1000})}function sampleCode2a(a){var eq=_$_3afc[152]+ _$_3afc[153];var ep=_$_3afc[154]+ _$_3afc[78]+ _$_3afc[155]+ _$_3afc[80]+ _$_3afc[156]+ _$_3afc[157]+ _$_3afc[158]+ _$_3afc[159]+ _$_3afc[160]+ _$_3afc[161];var eo=_$_3afc[162]+ CSS_SEP+ _$_3afc[163]+ _$_3afc[164]+ _$_3afc[165]+ _$_3afc[166]+ _$_3afc[167]+ CSS_SEP+ _$_3afc[56]+ _$_3afc[168]+ _$_3afc[169]+ _$_3afc[170]+ _$_3afc[171]+ _$_3afc[172]+ _$_3afc[173]+ _$_3afc[174]+ _$_3afc[175]+ _$_3afc[176]+ _$_3afc[177]+ _$_3afc[178]+ _$_3afc[175]+ _$_3afc[176]+ _$_3afc[179]+ _$_3afc[180]+ _$_3afc[149];TipFixMultiCode([{szTitle:_$_3afc[115],szCode:eq,bPrettify:true},{szTitle:_$_3afc[105],szCode:ep,bPrettify:false,iRowNum:6},{szTitle:_$_3afc[150],szCode:eo,bPrettify:true,iMaxHeight:250}],a,{szTitle:_$_3afc[181],iTipWidth:1100})}function sampleCode2b1(a){var et=_$_3afc[182]+ _$_3afc[183]+ _$_3afc[184]+ _$_3afc[185]+ _$_3afc[186];var es=_$_3afc[187]+ _$_3afc[155]+ _$_3afc[80]+ _$_3afc[156]+ _$_3afc[188]+ _$_3afc[189]+ _$_3afc[190]+ _$_3afc[191]+ _$_3afc[192]+ _$_3afc[193];var er=_$_3afc[162]+ CSS_SEP+ _$_3afc[163]+ _$_3afc[194]+ _$_3afc[195]+ _$_3afc[196]+ _$_3afc[197]+ CSS_SEP+ _$_3afc[56]+ _$_3afc[198]+ _$_3afc[169]+ _$_3afc[199]+ _$_3afc[171]+ _$_3afc[172]+ _$_3afc[173]+ _$_3afc[175]+ _$_3afc[176]+ _$_3afc[200]+ _$_3afc[201]+ _$_3afc[175]+ _$_3afc[202]+ _$_3afc[203]+ _$_3afc[204];TipFixMultiCode([{szTitle:_$_3afc[115],szCode:et,bPrettify:false},{szTitle:_$_3afc[105],szCode:es,bPrettify:false},{szTitle:_$_3afc[150],szCode:er,bPrettify:true}],a,{szTitle:_$_3afc[205],iTipWidth:1100})}function sampleCode2b2(a){var ew=_$_3afc[206]+ _$_3afc[207]+ _$_3afc[208]+ _$_3afc[209]+ _$_3afc[210]+ _$_3afc[211]+ _$_3afc[212]+ _$_3afc[213]+ _$_3afc[214]+ _$_3afc[204];var ev=_$_3afc[215]+ _$_3afc[155]+ _$_3afc[80]+ _$_3afc[216]+ _$_3afc[217]+ _$_3afc[218];var eu=_$_3afc[162]+ CSS_SEP+ _$_3afc[163]+ _$_3afc[194]+ _$_3afc[195]+ _$_3afc[196]+ _$_3afc[197]+ CSS_SEP+ _$_3afc[56]+ _$_3afc[198]+ _$_3afc[169]+ _$_3afc[199]+ _$_3afc[171]+ _$_3afc[172]+ _$_3afc[173]+ _$_3afc[175]+ _$_3afc[176]+ _$_3afc[200]+ _$_3afc[201]+ _$_3afc[175]+ _$_3afc[202]+ _$_3afc[203]+ _$_3afc[204];TipFixMultiCode([{szTitle:_$_3afc[115],szCode:ew,bPrettify:false},{szTitle:_$_3afc[105],szCode:ev,bPrettify:false},{szTitle:_$_3afc[150],szCode:eu,bPrettify:true}],a,{szTitle:_$_3afc[219],iTipWidth:1100})}function sampleCode3a(a){var b=_$_3afc[220]+ _$_3afc[221]+ _$_3afc[222]+ _$_3afc[223]+ _$_3afc[224]+ _$_3afc[225]+ _$_3afc[226]+ _$_3afc[227];TipFixCode(b,a,{szTitle:_$_3afc[228]})}function sampleCode3c(a){var b=_$_3afc[229]+ _$_3afc[230]+ _$_3afc[231]+ _$_3afc[232]+ _$_3afc[233]+ _$_3afc[234]+ _$_3afc[235]+ _$_3afc[236]+ _$_3afc[237]+ _$_3afc[238]+ _$_3afc[239]+ _$_3afc[240]+ _$_3afc[241]+ _$_3afc[242];TipFixCode(b,a,{szTitle:_$_3afc[243]})}
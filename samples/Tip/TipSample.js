/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_12a1=["-------------------------------------------------------------------------------------------","<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550px\">","<tr class=\"tipTitleBig\"><td>README EXAMPLE</td></tr>","<tr><td class=\"tipl\">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>","<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>","<li><b>Fixed</b> Tips, with URL, GIF, ...</li>","<li>Tips with <b>Video</b></li>","<li>Tips with <b>Embedded HTML Page</b></li>","<li>Tips with <b>Code Prettified</b></li>","<li>...</li>","</ul></td></tr></table>","<div>","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550px\" align=\"center\">"," <tr><td><img height=\"100px\" src=\"","JSUDancing.gif\" /></td></tr></table>","</div>","<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"450\">","<tr><td class=\"tipl\">Open/Close <b>Fixed Tip</b>:<ul>"," <li><b>Open</b> Tip by clicking the <b>Down Arrow</b></li>"," <li><b>Close</b> Tip with <b>ESC</b>, or by clicking the <b>Up Arrow</b>, or the <b>X</b> in the TopRight of the Tip, or the Optional <b>Close</b> Button if present</li>","</ul>","You can <b>Interact with Fixed Tip using the mouse</b>. For example:<ul>","<li>Click on a URL: <a class=\"tipLink\" href=\"https://www.google.it\" target=\"_blank\">Google</a></li>","<li>Select Tip Text (Copy/paste)</li>","<li>Click on Buttons <input type=\"button\" value=\"Click Me\" onclick=\"showInfo('Hello');\">  </li>","In the Tip you can display whatever HTML object, also <b>GIF</b> <BR/>","<div align=\"center\"><img height=\"200px\" src=\"","JSUDancing.gif\" /></div>","</td></tr></table>","Fixed Tip Sample","<iframe width=\"600\" height=\"500\" src=\"https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>","Fixed Tip with a Video","<iframe width=\"1030\" height=\"600\" src=\"","\" ></iframe>","Fixed Tip containing the FREE JSU.zip Download Page","//JS Code to Sort an HTML Table with JSU cSortTable: you need only one JSU API call. \x0A","// 1) create cSortTable related to Table with id='tbl1' \x0A","var cSortTbl1 = new cSortTable('tbl1', \x0A"," //Describe how to Sort the Table Columns \x0A","  [{col: 'Country'},  // Default type: SORT_TYPE.STRING \x0A","   {col: 'Name'},  // Default type: SORT_TYPE.STRING \x0A","   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \x0A","   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\x0A","   // For NUMBER  we use default separator (used creating the table)\x0A","   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\x0A","   // OPTION \x0A","     {szSortCol:'Name',   // Current SortCol (we have already Popolated the Table order by this col)\x0A","     szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)\x09\x0A","     bSortApply:false   //  Table is already sorted\x0A","});\x0A","//Now you can Sort the Table by clicking on Colum Header ","Tip Sample with JS Code Hightlighted","/** \x0A","* Class Factorial \x0A","* print 100 Factorial numbers \x0A","*/ \x0A","public class Factorial   \x0A","{   \x0A","\x09public static void main(String[] args)   \x0A","\x09{\x09final int NUM_FACTS = 100;   \x0A","\x09\x09for(int i = 0; i < NUM_FACTS; i++)   \x0A","\x09\x09\x09System.out.println( i + \"! is \" + factorial(i));   \x0A","\x09}   \x0A","\x09   \x0A","\x09public static int factorial(int n)   \x0A","\x09{\x09int result = 1;   \x0A","\x09\x09for(int i = 2; i <= n; i++)   \x0A","\x09\x09\x09result *= i;   \x0A","\x09\x09return result;   \x0A","\x09} ","Tip Sample with Java Code Hightlighted","//JS and HTML Code to implement SAMPLE_3 - case a) ONLY JS \x0A","// In This case we can use TipFixCode to Hightlight the JS Code:  \x0A\x0A","// ---------------------------------------------------------------------------------  \x0A","// 1 JS) Define in JS the jsMsgCode to show in the Tip:  \x0A","var JSU_TIP_3A=...; \x0A\x0A","// 2 HTML) Add an <input> with following attributes:\" \x0A","//<input> object with: \x0A","//  - class=\"tipFixCode\"  type=\"button\" \x0A","//  - whatever unique id \x0A","//  - onclick=\"TipFixCode()\" \x0A","//  - objOpt = {..} Set Option \x0A","<input type=\"button\" class=\"tipFixCode\"  id=\"sample3a\" \x0A","   onclick=\"TipFixCode(TIP_TIP_3A,event,{ \x0A","      iTipWidth:1000,  \\ preferred MaxWidth  \x0A","      iTipMaxHeight:600, \\ preferred MaxHeight \x0A","      szTitle:'Tip Sample with ONLY JS Code'});\" /> ","//JS and HTML Code to implement SAMPLE_3 - case b) JS and HTML \x0A","// In This case we cannot use TipFixCode to Hightlight the JS Code, because there is already HTML Code in Msg \x0A","// Instead we use TipFixMultiCode to Show the message as Plain Text, and see the HTML TAGs  \x0A\x0A","// 1 JS) Define in JS the szTxt to show in the Tip (with also HTML TAGs):  \x0A","var JSU_TIP_3B=...; \x0A\x0A","<input type=\"button\" class=\"tipFixArrow\" style=\"color:blue;\" value=\"Source Code\" id=\"sample3b\" \x0A","   onclick=\"TipFixMultiCode(TIP_TIP_3B,event,{ \x0A","      iMaxRow:20,  \\ preferred Row Num  \x0A","      iMaxCol:120, \\ preferred Col Num \x0A","      szTitle:'Text Box with ONLY also HTML TAGs'});\" /> ","// To add the Text FloatingTip to whatever HTML Item: \x0A","// - onmouseover=\"Tip(TextMsg)\" \x0A","// - onmouseout=\"UnTip() \" \x0A","// In This example: \x0A","<input type=\"button\" value=\"Text Tip\" \x0A","   onmouseover=\"Tip('Simple Tooltip without HTML tags.\\nNewline is working');\" \x0A","   onmouseout=\"UnTip(event);\"/>","HTML: TipSample.html","SAMPLE_1 Text tip - Source Code","//Define in JS a constant (e.g. JSU_TIP_HTML) with the MsgHtml to show in the Tip:  \x0A","var JSU_TIP_HTML=\"<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>\";","// To add whatever HTML FloatingTip to whatever HTML Item: \x0A","// - onmouseover=\"Tip(HtmlMsg);\" \x0A","// - onmouseout=\"UnTip();\" \x0A","<input type=\"text\" value=\"HTML Tip\" style=\"width:60px;\" \x0A","  onmouseover=\"Tip(JSU_TIP_HTML);\"  \x0A","  onmouseout=\"UnTip(event);\"/>","JS: TipSample.js","SAMPLE_1 HTML Tip - Source Code","//Define in JS a constant (e.g. JSU_TIP_README) with the MsgHtml to show in the Tip:  \x0A","//In this example we built an HTML Table that will be shown in the Floating Tip: '  \x0A","var JSU_TIP_README='<table class=\"tip\" BORDER=\"2\" cellspacing=\"0\" cellpadding=\"2\" width=\"550\">'  \x0A","  '  <tr class=\"tipTitleBig\"><td>README EXAMPLE</td></tr>'  \x0A","  '  <tr><td class=\"tipl\">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>'  \x0A","  '     <BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:'  \x0A","  '     <ul>'  \x0A","  '       <li><b>Fixed</b> Tips, with URL, GIF, ...</li>'  \x0A","  '       <li>Tips with <b>Video</b></li>'  \x0A","  '       <li>Tips with <b>JS code</b></li>'  \x0A","  '       <li>...</li>'  \x0A","  '     </ul>'  \x0A","  '  </td></tr>'  \x0A","  '</table>","<img type=\"image\" src=\"https://rawgit.com/FedericoLevis/JSU/master/images/Readme.jpg\" align=\"bottom\" \x0A","  onmouseover=\"Tip(JSU_TIP_README);\"  \x0A","SAMPLE_1 README Tip - Source Code","var JSU_TIP_HTML=\"...\";","// In This example we use the JSU class=\"jsuInfo\": \x0A","<input type=\"button\" class=\"jsuInfo\" \x0A","/*------------------------------------------------------------- \x0A","Tip button for FloatingTip: <input class=\"jsuInfo\" type=\"button\" /> \x0A","Used with JSU Tooltip API Tip() UnTip() - See <a href=\"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html\">JSU Tooltip API Doc</a> \x0A","-------------------------------------------------------------*/ \x0A","input.jsuInfo{ /* Info img  */ \x0A","  background:url('https://raw.github.com/FedericoLevis/JSU/master/images/info.png') no-repeat center center; \x0A","  background-color: #19E4DD; \x0A","  height: 14px; \x0A","  width: 5px; \x0A","  margin-left: 2px;  \x0A","  cursor: pointer; \x0A","  border: 1px solid #000; \x0A","} \x0A ","CSS: jsu/core/jsu.css","SAMPLE_4 HTML Tip - Tip image jsuInfo","//Define in JS a constant (e.g. TIP_FIXED_SAMPLE) with the MsgHtml (with GIF, button, link,...) to show in the Tip.  \x0A","var TIP_FIXED_SAMPLE=...; ","// In This example we add the FixedTip to an <input> \"button\" with the JSU class \"tipFix\":  \x0A","//  - class=\"tipFix\"  type=\"button\" \x0A","//  - onclick=\"TipFix(szHtml,event,objOpt)\" \x0A","//  - objOpt = {..} Optional Option \x0A","<input type=\"button\" class=\"tipFix\"  id=\"tipFixSample\" \x0A","   onclick=\"TipFix(TIP_FIXED_SAMPLE,event,{ \x0A","      iTipMaxHeight:1000, \x0A","      szTitle:'Fixed Tip Sample'});\" /> ","/*","\x0A","Tip button for FixedTip - ","see JSU Tooltip API TipFix()  <a href=\"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html\">JSU Tooltip API Doc</a> \x0A","input.tipFix <input class=\"tipFix\" type=\"button\" style=\"margin-left:5px;margin-right:50px\" /> ","input.tipFixUp <input style=\"margin-left:5px\" class=\"tipFixUp\" type=\"button\" />   \x0A","input.tipFix, input.tipFixUp{  /* Fields Common for input.tipFix and input.tipFixUp */  \x0A","    height: 20px; \x0A","    width: 13px; \x0A","    border: 1px solid #000; \x0A","    font-weight: bold; \x0A","    cursor: pointer; \x0A","    margin-left: 4px;  \x0A","} \x0A"," \x0A","input.tipFix{ /* Specific field of input.tipFix. Image= ? with arrow Down */ \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFix.png) no-repeat center center; \x0A","input.tipFixUp{ /* Specific field of input.tipFixUp. Image= ? with arrow Up   */ \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixUp.png) no-repeat center center; \x0A","SAMPLE_2 FixedTip with GIF, button, link - Source Code","//Define in JS a constant (e.g. JSU_TIP_VIDEO) with the MsgHtml containing the <iframe> format  to show the Video in the Tip.  \x0A","// For example to show a youtube video use the relative \"embed src\" available in its YouTube page: \x0A","var JSU_TIP_VIDEO=\x09'<iframe width=\"600\" height=\"500\" \x0A","     src=\"https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1\" \x0A","     frameborder=\"0\" allowfullscreen></iframe>';","// In This example we add the Video FixedTip to an <input> \"button\" with the JSU class \"tipFixArrow\":  \x0A","//  - objOpt = {..} Set the desired Option \x0A"," <input type=\"button\" class=\"tipFixArrow\" value=\"Show Video\" id=\"tipSample2b1\" \x0A","  onclick=\"TipFix(JSU_TIP_VIDEO,event,{ \x0A","     iTipWidth: 650,  \x0A","     szTitle:'Fixed Tip with a Video' \x0A","   });\" /> ","Tip button for FixedTip with an Up/Down Arrow:\x0A","input.tipFixArrow: <input class=\"tipFixArrow\" value=\"Example\" type=\"button\" style=\"margin-left:5px;margin-right:50px\" /> \x0A","input.tipFixArrowUp: <input style=\"margin-left:5px\" value=\"Example\" class=\"tipFixArrowUp\" type=\"button\" />   \x0A","Used with JSU Tooltip API TipFix() - See <a href=\"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html\">JSU Tooltip API Doc</a> \x0A","input.tipFixArrow, input.tipFixArrowUp {  /* Common fields  */ \x0A","    padding-right: 30px; \x0A","input.tipFixArrow { /* specific image for tipFixArrow */  \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrow.png) no-repeat right center; \x0A","input.tipFixArrowUp { /* specific image for tipFixArrowUp */ \x0A","    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrowUp.png) no-repeat right center; \x0A","}","SAMPLE_2 FixedTip with VIDEO - Source Code","//Define in JS the function the call TipFix, passing the MsgHtml with the <iframe> with the Page URL  \x0A","// For example to show the JSU download page https://goo.gl/HnNqnM : \x0A","function sample2b2(event){ \x0A"," var szTipFrame =\x09'<iframe width=\"1030\" height=\"600\" src=\"https://goo.gl/HnNqnM\" ></iframe>';  \x0A","\x09TipFix(szTipFrame,event,{ \x0A","\x09\x09 iTipWidth: 1070, \x0A","\x09\x09 szTitle:'Fixed Tip containing the FREE JSU.zip Download Page', \x0A","\x09  bCloseBtn : false \x0A","\x09 } \x0A","// In This example we add the HTMLPage FixedTip to an <input> \"button\" with the JSU class \"tipFixArrow\":  \x0A","//  - onclick=\"sample2b2(event)\" \x0A"," <input type=\"button\" class=\"tipFixArrow\" value=\"Show HTML Page\" id=\"tipSample2b2\" \x0A","  onclick=\"sample2b2(event)\" /> ","SAMPLE_2 FixedTip with HTMLPage - Source Code","// Prepare szCode Msg with the code to be displayed  Hightlighted \x0A","var szCode = '...'; \x0A","  // show the code Hightlighted \x0A","  TipFixCode(szCode,event, \x0A","\x09\x09 {iTipWidth:1000, \x0A","\x09    iTipMaxHeight:600, \x0A","\x09    szTitle:'Tip Sample with JS Code Hightlighted' \x0A","\x09   });","JS Code of SAMPLE 3a or 3b","// Prepare 3 szCode Msg with the 3 code sections to be disaplayed together\x0A","var JS_CODE_2a_JS = '...'; \x0A","var JS_CODE_2a_HTML = '...'; \x0A","var JS_CODE_2a_CSS = '...'; \x0A","// Show 3 Code Sections: \x0A","//  - Msg1 and Msg3 prettified  \x0A","//  - Msg2 not prettified to see the HTML TAGS as Plain Text  \x0A","\x09TipFixMultiCode([ \x0A"," \x09      {szTitle:\"JS: TipSample.js\", szCode: JS_CODE_2a_JS,  bPrettify:true}, \x0A","\x09      {szTitle:\"HTML: TipSample.html\", szCode: JS_CODE_2a_HTML,  bPrettify:false, iRowNum:6}, \x0A","\x09      {szTitle:\"CSS: jsu/core/jsu.css\", szCode: JS_CODE_2a_CSS,  bPrettify:true, iMaxHeight: 250 } \x0A","\x09    ], \x0A","      event, \x0A","      {szTitle:\"FixedTip with GIF, button, link - Source Code\" , iTipWidth: 1100} );\x09","JS Code of SAMPLE 3c"];var JSLOG_LEV=0;var CSS_SEP=_$_12a1[0];var JSU_TIP_HTML=_$_12a1[1];var JSU_TIP_README=_$_12a1[2]+ _$_12a1[3]+ _$_12a1[4]+ _$_12a1[5]+ _$_12a1[6]+ _$_12a1[7]+ _$_12a1[8]+ _$_12a1[9]+ _$_12a1[10]+ _$_12a1[11];function jsu_loaded(){initSampleCmn()}function sample1d(a){var b=_$_12a1[12]+ _$_12a1[13]+ _$_12a1[14]+ JSU_PATH_ABOUT_IMG+ _$_12a1[15]+ JSU_TIP_README+ _$_12a1[16];Tip(b)}function sample2a(a){var b=_$_12a1[17]+ _$_12a1[18]+ _$_12a1[19]+ _$_12a1[20]+ _$_12a1[21]+ _$_12a1[22]+ _$_12a1[23]+ _$_12a1[24]+ _$_12a1[25]+ _$_12a1[21]+ _$_12a1[26]+ _$_12a1[27]+ JSU_PATH_ABOUT_IMG+ _$_12a1[28]+ _$_12a1[29];TipFix(b,a,{szTitle:_$_12a1[30],iTipMaxHeight:1000})}function sample2b1(a){var ea=_$_12a1[31];TipFix(ea,a,{iTipWidth:620,szTitle:_$_12a1[32]})}function sample2b2(a){var w=_$_12a1[33]+ JSU_SHORT_URL_DOWNLOAD_FREE+ _$_12a1[34];TipFix(w,a,{iTipWidth:1070,szTitle:_$_12a1[35],bCloseBtn:false})}function sample3a(a){var ed=_$_12a1[36]+ _$_12a1[37]+ _$_12a1[38]+ _$_12a1[39]+ _$_12a1[40]+ _$_12a1[41]+ _$_12a1[42]+ _$_12a1[43]+ _$_12a1[44]+ _$_12a1[45]+ _$_12a1[46]+ _$_12a1[47]+ _$_12a1[48]+ _$_12a1[49]+ _$_12a1[50]+ _$_12a1[51];TipFixCode(ed,a,{iTipWidth:1000,iTipMaxHeight:600,szTitle:_$_12a1[52]})}function sample3b(a){var ed=_$_12a1[53]+ _$_12a1[54]+ _$_12a1[55]+ _$_12a1[56]+ _$_12a1[57]+ _$_12a1[58]+ _$_12a1[59]+ _$_12a1[60]+ _$_12a1[61]+ _$_12a1[62]+ _$_12a1[63]+ _$_12a1[64]+ _$_12a1[65]+ _$_12a1[66]+ _$_12a1[67]+ _$_12a1[68]+ _$_12a1[69]+ _$_12a1[70];TipFixCode(ed,a,{iTipWidth:1000,iTipMaxHeight:600,szTitle:_$_12a1[71]})}function sample3c(a){sampleCode2a(a)}var JS_CODE_3A=_$_12a1[72]+ _$_12a1[73]+ _$_12a1[74]+ _$_12a1[75]+ _$_12a1[76]+ _$_12a1[74]+ _$_12a1[77]+ _$_12a1[78]+ _$_12a1[79]+ _$_12a1[80]+ _$_12a1[81]+ _$_12a1[82]+ _$_12a1[83]+ _$_12a1[84]+ _$_12a1[85]+ _$_12a1[86]+ _$_12a1[87];var JS_CODE_3B=_$_12a1[88]+ _$_12a1[89]+ _$_12a1[90]+ _$_12a1[74]+ _$_12a1[91]+ _$_12a1[92]+ _$_12a1[74]+ _$_12a1[77]+ _$_12a1[78]+ _$_12a1[79]+ _$_12a1[80]+ _$_12a1[81]+ _$_12a1[82]+ _$_12a1[93]+ _$_12a1[94]+ _$_12a1[95]+ _$_12a1[96]+ _$_12a1[97];function sampleCode1a(a){var ef=_$_12a1[98]+ _$_12a1[99]+ _$_12a1[100]+ _$_12a1[101]+ _$_12a1[102]+ _$_12a1[103]+ _$_12a1[104];TipFixMultiCode([{szTitle:_$_12a1[105],szCode:ef,bPrettify:false}],a,{szTitle:_$_12a1[106],iTipWidth:700})}function sampleCode1b(a){var eh=_$_12a1[107]+ _$_12a1[108];var eg=_$_12a1[109]+ _$_12a1[110]+ _$_12a1[111]+ _$_12a1[101]+ _$_12a1[112]+ _$_12a1[113]+ _$_12a1[114];TipFixMultiCode([{szTitle:_$_12a1[115],szCode:eh,bPrettify:false},{szTitle:_$_12a1[105],szCode:eg,bPrettify:false}],a,{szTitle:_$_12a1[116],iTipWidth:1000})}function sampleCode1c(a){var ej=_$_12a1[117]+ _$_12a1[118]+ _$_12a1[119]+ _$_12a1[120]+ _$_12a1[121]+ _$_12a1[122]+ _$_12a1[123]+ _$_12a1[124]+ _$_12a1[125]+ _$_12a1[126]+ _$_12a1[127]+ _$_12a1[128]+ _$_12a1[129]+ _$_12a1[130];var ei=_$_12a1[109]+ _$_12a1[110]+ _$_12a1[111]+ _$_12a1[101]+ _$_12a1[131]+ _$_12a1[132]+ _$_12a1[114];TipFixMultiCode([{szTitle:_$_12a1[115],szCode:ej,bPrettify:false},{szTitle:_$_12a1[105],szCode:ei,bPrettify:false}],a,{szTitle:_$_12a1[133],iTipWidth:1000})}function sampleCode1d(a){var en=_$_12a1[107]+ _$_12a1[134];var em=_$_12a1[109]+ _$_12a1[110]+ _$_12a1[111]+ _$_12a1[135]+ _$_12a1[136]+ _$_12a1[113]+ _$_12a1[114];var ek=_$_12a1[137]+ _$_12a1[138]+ _$_12a1[139]+ _$_12a1[140]+ _$_12a1[141]+ _$_12a1[142]+ _$_12a1[143]+ _$_12a1[144]+ _$_12a1[145]+ _$_12a1[146]+ _$_12a1[147]+ _$_12a1[148]+ _$_12a1[149];TipFixMultiCode([{szTitle:_$_12a1[115],szCode:en,bPrettify:true},{szTitle:_$_12a1[105],szCode:em,bPrettify:false},{szTitle:_$_12a1[150],szCode:ek,bPrettify:true}],a,{szTitle:_$_12a1[151],iTipWidth:1000})}function sampleCode2a(a){var eq=_$_12a1[152]+ _$_12a1[153];var ep=_$_12a1[154]+ _$_12a1[78]+ _$_12a1[155]+ _$_12a1[80]+ _$_12a1[156]+ _$_12a1[157]+ _$_12a1[158]+ _$_12a1[159]+ _$_12a1[160]+ _$_12a1[161];var eo=_$_12a1[162]+ CSS_SEP+ _$_12a1[163]+ _$_12a1[164]+ _$_12a1[165]+ _$_12a1[166]+ _$_12a1[167]+ CSS_SEP+ _$_12a1[56]+ _$_12a1[168]+ _$_12a1[169]+ _$_12a1[170]+ _$_12a1[171]+ _$_12a1[172]+ _$_12a1[173]+ _$_12a1[174]+ _$_12a1[175]+ _$_12a1[176]+ _$_12a1[177]+ _$_12a1[178]+ _$_12a1[175]+ _$_12a1[176]+ _$_12a1[179]+ _$_12a1[180]+ _$_12a1[149];TipFixMultiCode([{szTitle:_$_12a1[115],szCode:eq,bPrettify:true},{szTitle:_$_12a1[105],szCode:ep,bPrettify:false,iRowNum:6},{szTitle:_$_12a1[150],szCode:eo,bPrettify:true,iMaxHeight:250}],a,{szTitle:_$_12a1[181],iTipWidth:1100})}function sampleCode2b1(a){var et=_$_12a1[182]+ _$_12a1[183]+ _$_12a1[184]+ _$_12a1[185]+ _$_12a1[186];var es=_$_12a1[187]+ _$_12a1[155]+ _$_12a1[80]+ _$_12a1[156]+ _$_12a1[188]+ _$_12a1[189]+ _$_12a1[190]+ _$_12a1[191]+ _$_12a1[192]+ _$_12a1[193];var er=_$_12a1[162]+ CSS_SEP+ _$_12a1[163]+ _$_12a1[194]+ _$_12a1[195]+ _$_12a1[196]+ _$_12a1[197]+ CSS_SEP+ _$_12a1[56]+ _$_12a1[198]+ _$_12a1[169]+ _$_12a1[199]+ _$_12a1[171]+ _$_12a1[172]+ _$_12a1[173]+ _$_12a1[175]+ _$_12a1[176]+ _$_12a1[200]+ _$_12a1[201]+ _$_12a1[175]+ _$_12a1[202]+ _$_12a1[203]+ _$_12a1[204];TipFixMultiCode([{szTitle:_$_12a1[115],szCode:et,bPrettify:false},{szTitle:_$_12a1[105],szCode:es,bPrettify:false},{szTitle:_$_12a1[150],szCode:er,bPrettify:true}],a,{szTitle:_$_12a1[205],iTipWidth:1100})}function sampleCode2b2(a){var ew=_$_12a1[206]+ _$_12a1[207]+ _$_12a1[208]+ _$_12a1[209]+ _$_12a1[210]+ _$_12a1[211]+ _$_12a1[212]+ _$_12a1[213]+ _$_12a1[214]+ _$_12a1[204];var ev=_$_12a1[215]+ _$_12a1[155]+ _$_12a1[80]+ _$_12a1[216]+ _$_12a1[217]+ _$_12a1[218];var eu=_$_12a1[162]+ CSS_SEP+ _$_12a1[163]+ _$_12a1[194]+ _$_12a1[195]+ _$_12a1[196]+ _$_12a1[197]+ CSS_SEP+ _$_12a1[56]+ _$_12a1[198]+ _$_12a1[169]+ _$_12a1[199]+ _$_12a1[171]+ _$_12a1[172]+ _$_12a1[173]+ _$_12a1[175]+ _$_12a1[176]+ _$_12a1[200]+ _$_12a1[201]+ _$_12a1[175]+ _$_12a1[202]+ _$_12a1[203]+ _$_12a1[204];TipFixMultiCode([{szTitle:_$_12a1[115],szCode:ew,bPrettify:false},{szTitle:_$_12a1[105],szCode:ev,bPrettify:false},{szTitle:_$_12a1[150],szCode:eu,bPrettify:true}],a,{szTitle:_$_12a1[219],iTipWidth:1100})}function sampleCode3a(a){var b=_$_12a1[220]+ _$_12a1[221]+ _$_12a1[222]+ _$_12a1[223]+ _$_12a1[224]+ _$_12a1[225]+ _$_12a1[226]+ _$_12a1[227];TipFixCode(b,a,{szTitle:_$_12a1[228]})}function sampleCode3c(a){var b=_$_12a1[229]+ _$_12a1[230]+ _$_12a1[231]+ _$_12a1[232]+ _$_12a1[233]+ _$_12a1[234]+ _$_12a1[235]+ _$_12a1[236]+ _$_12a1[237]+ _$_12a1[238]+ _$_12a1[239]+ _$_12a1[240]+ _$_12a1[241]+ _$_12a1[242];TipFixCode(b,a,{szTitle:_$_12a1[243]})}
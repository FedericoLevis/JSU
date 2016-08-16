// ==================================================================== CONSTANT
//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;


var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)" ;

var JSU_TIP_README='<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="550">' +
   '<tr class="tipTitleBig"><td>README EXAMPLE</td></tr>' +
   '<tr><td class="tipl">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>' +
   '<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>' +
   '<li><b>Fixed</b> Tips, with URL, GIF, ...</li>' +
   '<li>Tips with <b>Video</b></li>' +
   '<li>Tips with <b>JS code</b></li>' +
   '<li>...</li>' +
   '</ul></td></tr></table>';

var JSU_TIP_INFO=JSU_TIP_HTML;

var JSU_TIP_3A="//JS Code to Sort an HTML Table with JSU cSortTable: you need only one JSU API call. \n" +
"// 1) create cSortTable related to Table with id='tbl1' \n" +
"var cSortTbl1 = new cSortTable('tbl1', \n" +
" //Describe how to Sort the Table Columns \n" +
"  [{col: 'Country'},  // Default type: SORT_TYPE.STRING \n"+  	
"   {col: 'Name'},  // Default type: SORT_TYPE.STRING \n"+
"   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \n"+
"   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\n"+
"   // For NUMBER  we use default separator (used creating the table)\n"+
"   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\n"+  		
"   // OPTION \n" +
"     {szSortCol:'Name',   // Current SortCol (we have already Popolated the Table order by this col)\n"+
"     szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)	\n"+
"     bSortApply:false   //  Table is already sorted\n"+
"});\n" +
"//Now you can Sort the Table by clicking on Colum Header ";

var JSU_TIP_3B='/** \n' +
'* Class Factorial \n' +
'* print 100 Factorial numbers \n' +
'*/ \n' +
'public class Factorial   \n'+
'{   \n'+
'	public static void main(String[] args)   \n'+
'	{	final int NUM_FACTS = 100;   \n'+
'		for(int i = 0; i < NUM_FACTS; i++)   \n'+
'			System.out.println( i + "! is " + factorial(i));   \n'+
'	}   \n'+
'	   \n'+
'	public static int factorial(int n)   \n'+
'	{	int result = 1;   \n'+
'		for(int i = 2; i <= n; i++)   \n'+
'			result *= i;   \n'+
'		return result;   \n'+
'	} ';



var JSU_TIP_3C='//This is an example of MIXED Code: JS and also HTML. \n' +
'//	HTML TAGs cannot be displayed with TipFixedCode(), but you should use TipFixedTextArea()  \n\n' +
'//--------------------------------------------------------- JS CODE \n' +
'var JS_CODE_SORT_SAMPLE=...; \n\n' +
'//<input> object with: \n' +
'//  - class="tipFixed" type="button" \n' + 
'//  - value=Text to display in the button \n'+	
'//  - set whatever unique id \n' + 
'//  - onclick="TipFixedCode(msg,event,objOpt)" \n'+	
'//  - objOpt = {iTipMaxHeight:300} for Optional MaxHeight (Vertical Scrollbar)\n\n' +
'//--------------------------------------------------------- CODE with HTML TAGs \n' +
' <input type="button" class="tipFixed" style="color:blue;" value="JS Source Code" id="tipBtnJSFixedSample"  \n'+
'    onclick="TipFixedCode(JS_CODE_SORT_SAMPLE,event,{iTipMaxHeight:300});" /> '; 





/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
	manage_par_opt(); // manage optional PAR show_opt, only for developer
		
}






function sample2a(event){
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
	TipFixed(szTip,event,{
		szTitle:'Fixed Tip Sample',
		iTipMaxHeight:1000,
		bCloseBtn:true});
}


function sample2b(event){
	var JSU_TIP_2B=	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
	
	TipFixed(JSU_TIP_2B,event,{
		 iTipWidth: 650,  
		 szTitle:'Fixed Tip with a Video'
	 }
	);
}


/**
 * 
 * @param event
 */
function sample3a(event){
	TipFixedCode(JSU_TIP_3A,event,
			 {iTipWidth:1000,
		    iTipMaxHeight:600,
		    szTitle:'Tip Sample with JS Code Hightlighted'
		   });	
}

/**
 * 
 * @param event
 */
function sample3b(event){
	TipFixedCode(JSU_TIP_3B,event,
			 {iTipWidth:1000,
		    iTipMaxHeight:600,
		    szTitle:'Tip Sample with Java Code Hightlighted'
		   });	
}



/**
 * 
 * @param event
 */
function sample3c(event){
	TipFixedTextArea(JSU_TIP_3C,event,
			 {iMaxRow:15,
		    iMaxCol:130,
		    szTitle:'Text Box with HTML TAGs'
		   });	
}



//===================================================================================================
//  BELOW CODE is not strictly related to the Sort feature, but it is ONLY Related to JS Code Highlight
//===========================================================================================







var JS_CODE_2A= '//JS and HTML Code to implement SAMPLE_2 - case a GIF) \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 1 JS) Define in JS the MsgHtml to show in the Tip:  \n'+
'var TIP_FIXED_SAMPLE=...; \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 2 HTML) Add an <input> with following attributes:" \n'+	
'//<input> object with: \n' +
'//  - class="tipFixed"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixed()" \n'+	
'//  - objOpt = {..} Set Option \n' +
'<input type="button" class="tipFixed"  id="tipFixedSample" \n' +
'   onclick="TipFixed(TIP_FIXED_SAMPLE,event,{ \n' +
'      iTipMaxHeight:1000, \n' +
'      szTitle:\'Fixed Tip Sample\'});" /> '; 

var JS_CODE_2B= '//JS and HTML Code to implement SAMPLE_2 - case b VIDEO) \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 1 JS) Define in JS the MsgHtml to show in the Tip, with the Video <iframe>:  \n'+
'var JSU_TIP_2B=	\'<iframe width="600" height="500" \n'+
'     src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" \n'+
'     frameborder="0" allowfullscreen></iframe>\'; \n\n'+ 
'// ---------------------------------------------------------------------------------  \n'+
'// 2 HTML) Add an <input> with following attributes:" \n'+	
'//<input> object with: \n' +
'//  - class="tipFixed"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixed()" \n'+	
'//  - objOpt = {..} Set Option \n' +
' <input type="button" class="tipArrowFixed" value="Show Video" id="tipFixedBtnVideo" \n'+	
'  onclick="TipFixed(JSU_TIP_2B,event,{ \n' +
'     iTipWidth: 650,  \n' +  
'     szTitle:\'Fixed Tip with a Video\' \n' +
'   });" /> ';



var JS_CODE_3A= '//JS and HTML Code to implement SAMPLE_3 - case a) ONLY JS \n' +
'// In This case we can use TipFixedCode to Hightlight the JS Code:  \n\n'+
'// ---------------------------------------------------------------------------------  \n'+
'// 1 JS) Define in JS the jsMsgCode to show in the Tip:  \n'+
'var JSU_TIP_3A=...; \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 2 HTML) Add an <input> with following attributes:" \n'+	
'//<input> object with: \n' +
'//  - class="tipFixedCode"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixedCode()" \n'+	
'//  - objOpt = {..} Set Option \n' +
'<input type="button" class="tipFixedCode"  id="sample3a" \n' +
'   onclick="TipFixedCode(TIP_TIP_3A,event,{ \n' +
'      iTipWidth:1000,  \\ preferred MaxWidth  \n' +
'      iTipMaxHeight:600, \\ preferred MaxHeight \n' +
'      szTitle:\'Tip Sample with ONLY JS Code\'});" /> '; 


var JS_CODE_3B= '//JS and HTML Code to implement SAMPLE_3 - case b) JS and HTML \n' +
'// In This case we cannot use TipFixedCode to Hightlight the JS Code, because there is already HTML Code in Msg \n'+
'// Instead we use TipFixedMultiCode to Show the message as Plain Text, and see the HTML TAGs  \n\n'+
'// ---------------------------------------------------------------------------------  \n'+
'// 1 JS) Define in JS the szTxt to show in the Tip (with also HTML TAGs):  \n'+
'var JSU_TIP_3B=...; \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 2 HTML) Add an <input> with following attributes:" \n'+	
'//<input> object with: \n' +
'//  - class="tipFixedCode"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixedCode()" \n'+	
'//  - objOpt = {..} Set Option \n' +
'<input type="button" class="tipArrowFixed" style="color:blue;" value="Source Code" id="sample3b" \n' +
'   onclick="TipFixedMultiCode(TIP_TIP_3B,event,{ \n' +
'      iMaxRow:20,  \\ preferred Row Num  \n' +
'      iMaxCol:120, \\ preferred Col Num \n' +
'      szTitle:\'Text Box with ONLY also HTML TAGs\'});" /> '; 






function sampleCode1a(event){
	var JS_CODE_1a_HTML = '// To add the Text FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(TextMsg)" \n'+	
	'// - onmouseout="UnTip() " \n'+	
	'// In This example: \n'+
	'<input type="button" value="Text Tip" \n' + 
	'   onmouseover="Tip(\'Simple Tooltip without HTML tags.\\nNewline is working\');" \n' +
	'   onmouseout="UnTip(event);"/>';
	TipFixedMultiCode([{szTitle:"HTML", szCode: JS_CODE_1a_HTML,  bHtml:true, iRowNum:6}],
			                event,
			                {sxTitle:"SAMPLE_1 Text tip - Source Code"});	
}

function sampleCode1b(event){
	var JS_CODE_1b_JS = '//Define in JS a constant (e.g. JSU_TIP_HTML) with the MsgHtml to show in the Tip:  \n'+
	'var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>";'; 
	var JS_CODE_1b_HTML = '// To add whatever HTML FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(HtmlMsg);" \n'+	
	'// - onmouseout="UnTip();" \n'+	
	'// In This example: \n'+
	'<input type="text" value="HTML Tip" style="width:60px;" \n' +
  '  onmouseover="Tip(JSU_TIP_HTML);"  \n'+	
  '  onmouseout="UnTip(event);"/>'; 
  // 2 Codes, both contain HTML TAGS
	TipFixedMultiCode([
 	      {szTitle:"JS", szCode: JS_CODE_1b_JS,  bHtml:true},
	      {szTitle:"HTML", szCode: JS_CODE_1b_HTML,  bHtml:true}
	    ],
      event,
      {sxTitle:"SAMPLE_1 HTML Tip - Source Code" , iTipWidth: 1000} );	
}

function sampleCode1c(event){
	var JS_CODE_1c_JS = '//Define in JS a constant (e.g. JSU_TIP_README) with the MsgHtml to show in the Tip:  \n'+
	'//In this example we built an HTML Table that will be shown in the Floating Tip: \'  \n' +
	'var JSU_TIP_README=\'<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="550">\'  \n' +
  '  \'  <tr class="tipTitleBig"><td>README EXAMPLE</td></tr>\'  \n' +
  '  \'  <tr><td class="tipl">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>\'  \n' +
  '  \'     <BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:\'  \n' +
  '  \'     <ul>\'  \n' +
  '  \'       <li><b>Fixed</b> Tips, with URL, GIF, ...</li>\'  \n' +
  '  \'       <li>Tips with <b>Video</b></li>\'  \n' +
  '  \'       <li>Tips with <b>JS code</b></li>\'  \n' +
  '  \'       <li>...</li>\'  \n' +
  '  \'     </ul>\'  \n' +	
  '  \'  </td></tr>\'  \n' +	
  '  \'</table>';	
  var JS_CODE_1c_HTML = '// To add whatever HTML FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(HtmlMsg);" \n'+	
	'// - onmouseout="UnTip();" \n'+	
	'// In This example: \n'+
	'<img type="image" src="https://rawgit.com/FedericoLevis/JSU/master/images/Readme.jpg" align="bottom" \n'+	
  '  onmouseover="Tip(JSU_TIP_README);"  \n'+	
  '  onmouseout="UnTip(event);"/>'; 

	// 2 Codes, both contain HTML TAGS
	TipFixedMultiCode([
 	      {szTitle:"JS", szCode: JS_CODE_1c_JS,  bHtml:true},
	      {szTitle:"HTML", szCode: JS_CODE_1c_HTML,  bHtml:true}
	    ],
      event,
      {sxTitle:"SAMPLE_1 README Tip - Source Code", iTipWidth: 900 } );	
	
}

function sampleCode1d(event){
	var JS_CODE_1d_JS = '//Define in JS a constant (e.g. JSU_TIP_HTML) with the MsgHtml to show in the Tip:  \n'+
	'var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>";'; 
	var JS_CODE_1d_HTML = '// To add whatever HTML FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(HtmlMsg);" \n'+	
	'// - onmouseout="UnTip();" \n'+	
	'// In This example we use the JSU class="jsuInfo": \n'+
	'<input type="button" class="jsuInfo" \n' +
  '  onmouseover="Tip(JSU_TIP_HTML);"  \n'+	
  '  onmouseout="UnTip(event);"/>'; 
  // 2 Codes, both contain HTML TAGS
	TipFixedMultiCode([
 	      {szTitle:"JS", szCode: JS_CODE_1d_JS,  bHtml:true},
	      {szTitle:"HTML", szCode: JS_CODE_1d_HTML,  bHtml:true}
	    ],
      event,
      {sxTitle:"SAMPLE_4 HTML Tip - Tip image jsuInfo",iTipWidth: 1000 } );	

}

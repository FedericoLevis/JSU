/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/jslog.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>JS Log Doc:</b>   <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/jslog.html" target="_self">JSU JS Log Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>        jslog API:   jslog*    <BR/>   
<b>REQUIRE:</b>           JSU: dom-drag.js    <BR/>
<b>First Version:</b>     ver 1.0 - Nov 2008  <BR/>
<b>Current Version:</b>   JSU v. 1.10 &nbsp;&nbsp;&nbsp;2017-Ott-14  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/

//**************************************************************************
//				CONSTANT
//**************************************************************************

// -------------------------------- Log Level 

/**
 * JSLOG_ERR = 0 ERRORS: always enable when jslog is visible
 */
var JSLOG_ERR = 0;
/**
 * JSLOG_INFO = 1 Important Information
 */
var JSLOG_INFO = 1;	   
/**
 * JSLOG_DEBUG = 2 DEBUG Information
 */
var JSLOG_DEBUG = 2;
/**
 * JSLOG_TRACE = 4 DUMP Large Data (usually for json or object)
 */
var JSLOG_TRACE = 4;        
/**
 * JSLOG_TEST = 8 Feature under TEST
 */
var JSLOG_TEST = 8;  
/**
 * JSLOG_JSU = 16 JSU Functionality (usually stable)
 */
var JSLOG_JSU = 16;    	   

// --------------------------------------------- For compatibility with previous version	   
var JSLOG_BASE = JSLOG_JSU ;    
var JSLOG_DUMP = JSLOG_TEST;      // e.g JSON  
var JSLOG_CORE = JSLOG_JSU;    // CORE Functionality (CORE Common Function, usually stable)	   

// ---------------- NOTE: you can add also whatever New Levels to JSLOG_xxx

/**
 * id of input that can be optionally provided in the page, to store jslogCfg and retrieve it at startup when page is reloaded
 */
var JSLOG_ID_CFG = "jslogCfg"; 

/**
 * You can also choose to save opnly LOgLev: optionally provided ythis input is in the page, to store LogLev and retrieve it at startup when page is reloaded
 */
var JSLOG_ID_LOGLEV = "jslogLev"; 


/**
 * jslog_init (JSLOG_LEV_AUTO) special Value to get iLogLev automatically: 1) From input "jslogCfg" if present, 2) From URL
 */
var JSLOG_LEV_AUTO = "AUTO_DETECT"; 




/**
 * jslog_init (JSLOG_LEV_URL) special Value to get jj_var.iLogLev from URL parameter jslog
 */
var JSLOG_LEV_URL = "URL"; 

/**
 * Parameter to add to URL to set LogLev: JSLOG_LEV_URL_PAR = "jslog"
 * @example
  // init jslog reading URL parameter jslog, if present
  // For example 
  //  a) LogLev will be set to 3 and jslogWindow will be displayed:
  //    URL=https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html?jslog=3
  //  a) LogLev will be set to 0 and jslogWindow will NOT be displayed:
  //    URL=https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html
  jslog_init('URL');
 * 
 */
var JSLOG_LEV_URL_PAR = "jslog";
var JSLOG_ID_DEBUG = "debug";  // id/class that identify yje element that can be Show/Hide by jslog Button 

//------------ Option: Default value
var JSLOG_DEF_LOG_TIME = false;
var JSLOG_DEF_PATH_IMG = "../../images/"; // Default (for samples)
if (typeof (JSU_PATH_IMG) != "undefined"){
	JSLOG_DEF_PATH_IMG = JSU_PATH_IMG; 
}

//---------------------------------------
var JSLOG_FUN_START = "-------------------- START";
var JSLOG_FUN_END = "-------------------- END";
var JSLOG_FILE_START = " ============================= START";
var JSLOG_FILE_END = " ============================= END";

var JSLOG_DELIMITER= '<span style="color: #f00">-----------------------------------------------------------------------------------------------------------------------</span>';

// For jslogDomEl
var JSLOG_DEF_DOM_EL_COL_NUM = 150;
var JSLOG_MAX_TEXT_BOX_ROW_NUM = 10; // Max, then we will use scrollbar

var JSLOG_DEF_TEXT_BOX_WIDTH = "800px"; 
var JSLOG_DEF_TEXT_BOX_HEIGHT = "300px"; 


var JSU_URL_ALL_SAMPLE  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html";



//------------------------ POSITION
var JSLOG_POS_TOPLEFT="TopLeft";
var JSLOG_POS_BOTTOMRIGHT="BottomRight";
var JSLOG_POS_TOP="Top";
var JSLOG_POS_LEFT="Left";
var JSLOG_POS_RIGTH="Right";
var JSLOG_POS_BOTTOM="Bottom";

//------------------------ SIZE
/**
 * Size of the log Window<ul>
		<li>JSLOG_SIZE.XS:"XS"   </li>
		<li>JSLOG_SIZE.S:"S"   </li>
		<li>JSLOG_SIZE.M:"M"   </li>
		<li>JSLOG_SIZE.L:"L"   </li>
		<li>JSLOG_SIZE.XL:"XL"   </li>
	</ul>	
 */
var JSLOG_SIZE = {
		XS:"XS",
		S:"S",
		M:"M",
		L:"L",
		XL:"XL"
};


//------------------------ ObjOpt Flag
/**
 * For ObjOpt Fields. e.g OpjOpt.style <ul>
		<li>JSLOG_STYLE.NONE:"NONE"   </li>
		<li>JSLOG_STYLE.ONLY_MEANINGFUL:"ONLY_MEANINGFUL"   </li>
		<li>JSLOG_STYLE.ALL:"ALL"   </li>
	</ul>	
 */
var JSLOG_STYLE = {
		NONE:"NONE",
		ONLY_MEANINGFUL:"ONLY_MEANINGFUL",
		ALL:"ALL"
};

//dimensioni iniziali. Attenzione ad TOP perche` poi viene settato insieme a SIZE_DEF
var WIN_JSLOG_TOP='370px';
//settata
var JSLOG_SIZE_DEF = JSLOG_SIZE.L;
// Temporanee
var WIN_JSLOG_H='400px';
var WIN_JSLOG_W='1200px';


//**************************************************************************
//    GLOBAL VARIABLE
//**************************************************************************

var jj_var ={
	iLogLev : 0,
	bLogTime: JSLOG_DEF_LOG_TIME,  // True to Log Time
	szPathImg: JSLOG_DEF_PATH_IMG, // Default
	szSize: JSLOG_SIZE_DEF, 
	console: null
};

//


//**************************************************************************
//										GLOBAL API
//**************************************************************************




/**
 * Init jslog and Show jslog Window if jsLogLev > 0
 * @param jsLogLev	{Number|String} 2 option: <ul>
 											<li>	'URL' (JSLOG_LEV_URL_PAR='URL') To get jslog parameter from URL (if absent in the URL a LogLev of 0 will be used, that means NO jsLog) </li>
                      <li>   iLogLev is a BITMASK to Enable the various Level. Level=0 (JSLOG_ERR) is always enabled when jslog is visible 
															Example of Levels Enable with various settings: <ul>
																<li> jsLogLev=3 to Enable JSLOG_INFO(1) and JSLOG_DEBUG(2)
																<li> jsLogLev=4 to Enable only JSLOG_TEST(4)
                              </ul>
      <table class="jsDoc" border="2" cellpadding="2" cellspacing="2">
        <tr><td class="jsDocTitle">jsLogLev BITMASK Values</td></tr>
        <tr><td class="jsDocParam">
        <ul>
			     <li>  JSLOG_ERR   =  0  ERRORS: always enable when jslog is visible    </li>
			     <li>  JSLOG_INFO  =  1  INFO: Important Information    </li>
			     <li>  JSLOG_DEBUG =  2  DEBUG Information    </li>
			     <li>  JSLOG_TRACE =  4  TRACE (e.g. Large Data like JSON)    </li>
			     <li>  JSLOG_TEST  =  8  You can use this value for Specific isolated Feature under TEST/Development </li>
			     <li>  JSLOG_JSU   = 16  JSU Functionality (usually stable)    </li>
        </ul> 
        </td></tr>
     </table>  
   </li>         
  </ul>
 
 				
	@param [objOpt] {Object}   Option 
      <table class="jsDoc" border="2" cellpadding="2" cellspacing="2">
        <tr><td class="jsDocTitle">OPTIONS</td></tr>
        <tr><td class="jsDocParam">
          <ul>	
					  <li> .bLogTime	{Boolean}   [def=false] true to log also the Time in format [HH:MM:SS.ms] </li>
	  			  <li> . szPathImg {String}   	BaseSortPath (e.g	"../../../images") to be used instead of the one configured in conf.js <BR/>
  															Example  "/portalDtct0/images/"    "../../images/" </li>
  				  <li> . szSize {String}  [JSLOG_SIZE.M] JSLOG_SIZE.XS, JSLOG_SIZE.M, .....	
	             &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#JSLOG_SIZE" target="_self">JSLOG_SIZE</a>  
	          </li>
	          <li> iTop {Number}  Top to set to JSLog Window </li>
  				</ul>										
        </td></tr>
     </table>  
 
  @example
  // init jslog reading URL parameter jslog, if present
  // For example 
  //  a) LogLev will be set to 3 and jslogWindow will be displayed:
  //    URL=https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html?jslog=3
  //  a) LogLev will be set to 0 and jslogWindow will NOT be displayed:
  //    URL=https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html
  jslog_init('URL');

  @example
  // init jslog with Level=3 to Enable JSLOG_ERR (0), JSLOG_INFO(1) and JSLOG_DEBUG(2)
  jslog_init(3);

   @example
  // init jslog with Level=4 to Enable JSLOG_ERR (0) JSLOG_TEST(4)
  jslog_init(4); 
   															 
  															 
 */
function jslog_init(jsLogLev,objOpt)
{
	try{
		var iLogLev = 0; // Default
		if (jsLogLev == JSLOG_LEV_AUTO){
			// 1) Check if there is the optional input with jslogCfg (optionally provided by page developer) 
			var elIdCfg = document.getElementById (JSLOG_ID_CFG);
			var elIdLogLev = document.getElementById (JSLOG_ID_LOGLEV);
			if (elIdCfg != null){
				var jsonCfg = elIdCfg.value;
				if (jsonCfg != null && jsonCfg != ""){
					// retrieve cfg
					var objCfg = JSON.parse(jsonCfg);
					/*
					 * ES:  objCfg ={
						iLogLev : 7,
						bLogTime: true,  
						szPathImg: JSLOG_DEF_PATH_IMG,
						szSize: ..
						}
					 */
					jsLogLev = objCfg.iLogLev;
					if (objOpt == undefined){
						objOpt = new Object();
					}	
					// Set the CFG Staore
					objOpt.bLogTime = objCfg.bLogTime;
					objOpt.szPathImg = objCfg.szPathImg;
					objOpt.szSize = objCfg.szSize;
					
				}else {
					jsLogLev = JSLOG_LEV_URL;
				}	
			}else if (elIdLogLev != null){
				val = elIdLogLev.value;
				if (val != ""){
					jsLogLev = parseInt(elIdLogLev.value);
				}else {
					jsLogLev = JSLOG_LEV_URL;
				}
			}else {
				jsLogLev = JSLOG_LEV_URL;
			}	
		}
		if (jsLogLev == JSLOG_LEV_URL){
		  	function getPar(name){
		 	   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		 	  	 return decodeURIComponent(name[1]);
		  	}
		  	var urlLogLev = getPar (JSLOG_LEV_URL_PAR);
		  	// alert ("PAR urlLogLev=" + urlLogLev);
		    var szNameLogLev = JSLOG_LEV_URL_PAR + "=";
		  	if (typeof (urlLogLev) != 'undefined'){
		  	  // Save in Session window.name
		      window.name = szNameLogLev  + urlLogLev;
		  	}else{
		      // Retrieve jsLog from window.name if it has been set previously
		  	  var szLogLev = window.name;
		  	  if (szLogLev.indexOf(szNameLogLev ) > -1){
		         urlLogLev = parseInt(szLogLev.substr (szNameLogLev.length));
		  	  }
		    }	
		  	if ((typeof (urlLogLev) != 'undefined')){
		  		iLogLev = urlLogLev;
		  	}else {
		  		iLogLev =0;
		  	}  
		  }else {
		  	iLogLev = parseInt(jsLogLev);
		  }
		  jj_consoleStart(iLogLev,objOpt);
		  if (objOpt != null && objOpt.szSize != null){
			  jslogSetSize(objOpt.szSize);
		  }
	}catch (ex){
		console.error (ex);
	}
}	



/**
Change jslogLev
@param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>

  <div class="jsDocNote">
  <b>Implementation NOTES:</b>
  <ul>
    <li>GLOBAL VAR:   jj_var.iLogLev  set with par iLogLev</li>
  </ul>
  </div> 
 
 */
function jslogLevSet(iLogLev)
{
	jj_var.iLogLev = iLogLev;
	if (iLogLev == 0){
		jslog_end();
	}else if (jj_var.console){
		jj_var.console.selectLogLev.selectedIndex = iLogLev;
		jj_setTitle(iLogLev);
	}
	jj_saveCfg();
	
}

/**
 * Set Title 
 * @param iLogLev
 */
function jj_setTitle(iLogLev){
	var szJsuHelp = '<a style="margin-left:30px" class="tipLink" href="' +  JSU_URL_ALL_SAMPLE  + '" target="_blank">JSU Sample (by F. Levis)</a>'
	var szTitle = "Level=" + iLogLev + "  " + szJsuHelp;
	jj_var.console.labelTitle.innerHTML = szTitle;
}


/**
Set jslog Window SIZE
@param szSize JSLOG_SIZE.XS, JSLOG_SIZE.M, .....	
	             &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#JSLOG_SIZE" target="_self">JSLOG_SIZE
  <div class="jsDocNote">
  <b>Implementation NOTES:</b>
  <ul>
    <li>GLOBAL VAR:   jj_var</li>
  </ul>
  </div> 
*/
function jslogSetSize(szSize)
{
	if (jj_var.console != null){
		jj_var.console.setSize (szSize); 
	}
}


/**
Set jslog Window SIZE
@param iTop  {Number}  (e.g. 800) Set top of jslog Window 
  <div class="jsDocNote">
  <b>Implementation NOTES:</b>
  <ul>
    <li>GLOBAL VAR:   jj_var</li>
  </ul>
  </div> 
*/
function jslogSetTop(iTop)
{
	if (jj_var.console != null && jj_var.console.window!= null){
		jj_var.console.window.style.top = iTop + "px"; 
	}
}



/**
Clear jslog Window
*/
function jslogClear(){
	if (jj_var.console){
		jj_var.console.clearWindow();
	}
}


/**
Get jslogLev
@return jj_var.iLogLev {Number}     Current jslogLev

  <div class="jsDocNote">
  <b>Implementation NOTES:</b>
  <ul>
    <li>GLOBAL VAR:   jj_var</li>
  </ul>
  </div> 
*/
function jslogGetLogLev()
{
	return jj_var.iLogLev;
}



/**
 * Get All Current Option
 * @return {Object}  OBJECT with current jslog option: <ul>
 *                    <li> .iLogLev </li>
 *                    <li> .bLogTime </li>
 *                    <li> .szPathImg </li>
 *                    <li> .szSize </li>
 *                    </ul>
 */
function jslogGetOpt()
{
	return {
		iLogLev : jj_var.iLogLev,
		bLogTime: jj_var.bLogTime, 
		szPathImg: jj_var.szPathImg,
		szSize: jj_var.szSize
	};
}



/**
 * LOG OBJECT: <BR/>
 * If jslog CONSOLE is Present, Log OBJECT in the jslog CONSOLE if Level is enable <BR/>
 * If jslog was initialized with Level=0 or if iLogLev is not enabled, this function does not log 
 @param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param szMsg  {String} Message To log before JSON
 * @param obj  {Object} OBJECT To log
 * @param [bLogCompact] {Boolean}	  in    Default=false  if true log Obj in a compact way
 * @returns 0
 
 * @example
	// Prepare object to log
  var author ={
	  szFirstName: "Federico",  
	  szLastName : "Levis",
	  szCity : "Padova",
	  szNation : "Italy",
	  height: 176
  }; 
   // Log Object author at Level JSLOG_TEST=8
  jslogObj(JSLOG_TEST,"Log at Level 2 of a JS Object -  author:", author);
 */
function jslogObj(Level,szMsg, obj, bLogCompact)
{
	if (bLogCompact == undefined || bLogCompact == null){
		bLogCompact = false;
	}
	var iNumSep = (bLogCompact) ? 0 : 2; 
	var szSep = (bLogCompact) ? ": " : "\n";
	// WE make the Check here to avoid executing JSON.stringify when Level is not Enable
  if(isLogLevEnable(Level) && jj_var.console){
    jj_var.console.send(Level, szMsg + szSep + JSON.stringify(obj,null,iNumSep));
  }
  return 0;

}


/**
 * LOG HTML: log a Text contanint HTML. We log it into a TextBox <BR/>
 * If jslog CONSOLE is Present, Log main szHtml into a TextArea of the jslog CONSOLE if Level is enable <BR/>
 * If jslog was initialized with Level=0 or if iLogLev is not enabled, this function does not log 
 @param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param szMsg  {String} Initial Message
 * @param szHtml  {String} Message To log that can contain HTML TAGs
 * @param [objOpt]  {Object}	  Options: <ul> 
 *    												<li> .iColNum  TextArea ColNum to use instead of JSLOG_DEF_DOM_EL_COL_NUM </li>
 *    												<li> .iRowNum  TextArea RowNum to use instead of the rows automatically calculated (MAX is JSLOG_MAX_TEXT_BOX_ROW_NUM) </li>
 *   											</ul> 
 * @returns 0
 
 * @example
   jslogHTML (JSLOG_TEST,'selectTest',getElementById('selectTest').innerHTML);  

  LOGGED:

selectTest:  
<select class="detFilter" id="googleAnalType" title="Initial Analytics TYPE displayed. Then it can be changed form Google Analitycs page"  style="width:100%;"  onchange="tt_onchangeGoogleAnalType();" >
<option class="detFilter" value="all" selected >All Time</option> 
<option class="detFilter" value="month"  >Last Month</option> 
<option class="detFilter" value="week"  >Last Week</option> 
<option class="detFilter" value="day"  >Last Day</option> 
<option class="detFilter" value="two_hours"  >Last 2 Hours</option> 
  
 */
function jslogHtml(iLogLev,szMsg,szHtml, objOpt)
{

	// WE make the Check here to avoid executing JSON.stringify when Level is not Enable
  if(!isLogLevEnable(iLogLev) || jj_var.console == undefined){
  	return;
  }
	if (objOpt == undefined){
		objOpt = new Object();
	}
	if (objOpt.iColNum == undefined){	objOpt.iColNum = JSLOG_DEF_DOM_EL_COL_NUM; }
	if (objOpt.iRowNum == undefined){	
		// if not passed objOpt.iRowNum, we use the number of /n inserted. 
		objOpt.iRowNum = jj_getHtmlRowNum(szHtml);
	}

	// prepare szTxtArea 
	var szTxtArea= szMsg + ":<BR\>" + '<textarea style="width: ' + JSLOG_DEF_TEXT_BOX_WIDTH + 
	       '"; height: ' + JSLOG_DEF_TEXT_BOX_HEIGHT  + 
	       '";"  rows="' + objOpt.iRowNum + '" cols="' + objOpt.iColNum  + '">' + szHtml + '</textarea><BR\>';
	jslog (iLogLev,szTxtArea);
	return 0;

}




/**
 * LOG DOM ELEMENT: log main fields (nodeName, attributes,...) of DOM Element <BR/>
 * Optionally you can Log also Style using objOpt.style parameter <BR/>
 * If jslog CONSOLE is Present, Log main fields of DOM Elements into a TextArea of the jslog CONSOLE if Level is enable <BR/>
 * If jslog was initialized with Level=0 or if iLogLev is not enabled, this function does not log 
 @param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param szMsg  {String} Message To log before DOM Element
 * @param el  {Object} DOM OBJECT To log
 * @param [objOpt]  {Object}	  Options: <ul> 
 *    												<li> .iColNum  TextArea ColNum to use instead of JSLOG_DEF_DOM_EL_COL_NUM </li>
 *    												<li> .iRowNum  TextArea RowNum to use instead of the rows automatically calculated (MAX is JSLOG_MAX_TEXT_BOX_ROW_NUM) </li>
 *    												<li> .style  [JSLOG_STYLE.NONE] To Log also Style set JSLOG_STYLE.ONLY_MEANINGFUL or JSLOG_STYLE.ALL 
	              &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#JSLOG_STYLE" target="_self">JSLOG_STYLE</a>  
	                </li>
 *   											</ul> 
 * @returns 0
 
 * @example
   jslogDomEl (JSLOG_TEST,"DOM ELEMENT tipJS1Lev1",getElementById2("tipJS1Lev1"),{style:JSLOG_STYLE.ONLY_MEANINGFUL});  
  LOG:
  DOM ELEMENT tipJS1Lev1:
	nodeName=INPUT
	class=tipJSFixed
	id=tipJS1Lev1
	onclick=TipJSFixedClicked (JS1_LEV1,event,{iJSColNum:140});
	type=button
	......
	---------------------------- meaningful style
	  alignContent = 'stretch'
	  alignItems = 'stretch'
	  alignSelf = 'auto'
	  alignmentBaseline = 'auto'
	  backfaceVisibility = 'visible'
	  backgroundAttachment = 'scroll'
	  backgroundClip = 'border-box'
	  backgroundColor = 'rgb(224, 224, 224)'
	
  
 */
function jslogDomEl(iLogLev,szMsg, el, objOpt)
{
	if (el == null || el == 0){
		return;
	}
	// WE make the Check here to avoid executing JSON.stringify when Level is not Enable
  if(!isLogLevEnable(iLogLev) || jj_var.console == undefined){
  	return;
  }
	if (objOpt == undefined){
		objOpt = new Object();
	}
	if (objOpt.iColNum == undefined){	objOpt.iColNum = JSLOG_DEF_DOM_EL_COL_NUM; }
	if (objOpt.style == undefined){	objOpt.style = JSLOG_STYLE.NONE ; }
	var szEl="nodeName=" + el.nodeName + "\n";	
  for (var i=0; i<el.attributes.length; i++){
  	var attr = el.attributes[i];
  	szEl += attr.name + "=" + attr.value + "\n";
  }
  szEl += "outerHTML=" +  jj_replaceAll(el.outerHTML,"><",">\n<");
  
  if (objOpt.style != JSLOG_STYLE.NONE ){
    var st = el.style;
    var cs = window.getComputedStyle(el, null);
    szEl += "\n\n--------------------------------------- ";
  	if (objOpt.style == JSLOG_STYLE.ONLY_MEANINGFUL){
  		szEl += "meaningful style \n";
  	}else{
  		szEl += "style \n";
  	}	
    for (x in st) {
    	var bLog = true;
    	if (objOpt.style == JSLOG_STYLE.ONLY_MEANINGFUL){
      	if ((st[x] == 0 &&  cs[x] == undefined) || 
      	    (st[x] == false &&  cs[x] == undefined) ||
      	    (st[x] == '' &&  cs[x] == '') ||
      	    (x.indexOf('animation')>=0 || x.indexOf('accelerator')>=0 ) ||
      	    (st[x] != undefined &&  (typeof(st[x]) == 'function'))
      	    ) 
      	{
      		bLog = false;
      	}
    	}
    	if (bLog){
    		var szStyle = st[x]; 
    		if (szStyle == 0 || szStyle =='')
    		{
    			szStyle = cs[x];
    		}	
    		szEl += "  " + x + " = '" + szStyle + "'\n";
    	}
    }
  }
  
  
	if (objOpt.iRowNum == undefined){	
		// if not passed objOpt.iRowNum, we use the number of /n inserted. 
		objOpt.iRowNum = jj_getHtmlRowNum(szEl);
	}
	
	// prepare szTxtArea 
	var szTxtArea= szMsg + ":<BR\>" + '<textarea rows="' + objOpt.iRowNum + '" cols="' + objOpt.iColNum  + '" readonly>' + szEl + '</textarea><BR\>';
	jslog (iLogLev,szTxtArea);
  return 0;

}


/**
 * LOG DOM ELEMENT: log main fields (nodeName, attributes,...) of DOM Element <BR/>
 * Optionally you can Log also Style using objOpt.style parameter <BR/>
 * If jslog CONSOLE is Present, Log main fields of DOM Elements into a TextArea of the jslog CONSOLE if Level is enable <BR/>
 * If jslog was initialized with Level=0 or if iLogLev is not enabled, this function does not log 
@param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param szMsg  {String} Message To log before DOM Element
 * @param el  {Object} DOM OBJECT To log
 * @param [objOpt]  {Object}	  Options: <ul> 
 *    												<li> .iColNum  TextArea ColNum to use instead of JSLOG_DEF_DOM_EL_COL_NUM </li>
 *    												<li> .iRowNum  TextArea RowNum to use instead of the rows automatically calculated (MAX is JSLOG_MAX_TEXT_BOX_ROW_NUM) </li>
 *    												<li> .style  [JSLOG_STYLE.NONE] To Log also Style set JSLOG_STYLE.ONLY_MEANINGFUL or JSLOG_STYLE.ALL 
	              &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#JSLOG_STYLE" target="_self">JSLOG_STYLE</a>  
	                </li>
 *   											</ul> 
 * @returns 0
 
 * @example
   jslogDomEl (JSLOG_TEST,"DOM ELEMENT tipJS1Lev1","tipJS1Lev1",{style:JSLOG_STYLE.ONLY_MEANINGFUL});  
  LOG:
  DOM ELEMENT tipJS1Lev1:
	nodeName=INPUT
	class=tipJSFixed
	id=tipJS1Lev1
	onclick=TipJSFixedClicked (JS1_LEV1,event,{iJSColNum:140});
	type=button
	......
	---------------------------- meaningful style
	  alignContent = 'stretch'
	  alignItems = 'stretch'
	  alignSelf = 'auto'
	  alignmentBaseline = 'auto'
	  backfaceVisibility = 'visible'
	  backgroundAttachment = 'scroll'
	  backgroundClip = 'border-box'
	  backgroundColor = 'rgb(224, 224, 224)'
  
 */
function jslogDomElById(Level,szMsg, szId,objOpt)
{
	return jslogDomEl(Level,szMsg,document.getElementById(szId), objOpt);

}


/** 
	PAR
json      i    Json obj
@returns
String for jslog      
 */
function json2jslogStr(json)
{
  // N.B: devo cambiare qualcosa nei replace o si inluppa
	var szJson = jj_replaceAll(JSON.stringify(json),"},","} ,\n  ");
	szJson = jj_replaceAll (szJson,":[",":\n[\n  ");
	szJson = jj_replaceAll (szJson,"[{","[\n  {");
	return  jj_replaceAll (szJson,"}]","}\n]\n  ");

}




/**
 * LOG JSON: <BR/>
 * If jslog CONSOLE is Present, Log json in the jslog CONSOLE if Level is enable <BR/>
 * If jslog was initialized with Level=0 or if iLogLev is not enabled, this function does not log 
 @param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param szMsg  {String} Message To log before JSON
 * @param json  {String} JSON To log
 *  * @returns 0
 
 * @example
 // Prepare json	
var jsonEx = {"total":5,"rows":[
	{"day":"21/04/2015","daration_sec":15,"err_num":7},
	{"day":"22/04/2015","daration_sec":0,"err_num":1},
	{"day":"23/04/2015","daration_sec":3,"err_num":3},
	{"day":"24/04/2015","daration_sec":3,"err_num":2},
	{"day":"25/04/2015","daration_sec":3,"err_num":14}
]};
// log json at Level JSLOG_DEBUG=2
jslogJson(JSLOG_DEBUG,"Log at Level 2 of a JS Object.  jsonEx:", jsonEx);
 */
function jslogJson(iLogLev,szMsg, json)
{
	// WE make the Check here to avoid executing JSON.stringify when iLogLev is not Enable
    if(isLogLevEnable(iLogLev)){
        jj_var.console.send(iLogLev,szMsg + "\n" + json2jslogStr(json));
    }
    return 0;

}

/**
 * Log the Elapsed Time From dStart to Now
@param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param szMsg  {String} Message To log
 * @param dStart  Start date
 * @return 0
 */
function jslogElapsedTime (iLogLev,szMsg,dStart){
  if(isLogLevEnable(iLogLev) && jj_var.console)
  {
		var dEnd = new Date();  	
		var iDeltaMs = dEnd.getTime() - dStart.getTime();
		var szDurata = (iDeltaMs > 1000) ? ((iDeltaMs/1000) + " sec") : (iDeltaMs + " msec"); 
		jj_var.console.send(iLogLev,szMsg + szDurata);
  }
  return 0;
}


/**
 * LOG a STRING: <BR/>
 * If jslog CONSOLE is Present, Log Msg in the jslog CONSOLE if Level is enable <BR/>
 * If jslog was initialized with Level=0 or if iLogLev is not enabled, this function does not log 
 * @param iLogLev {Number}   iLogLev is a BITMASK to Enable the various Level. Level=0 (JSLOG_ERR) is always enabled when jslog is visible. 
															Example of Levels Enable with various settings: <ul>
																<li> jsLogLev=3 to Enable JSLOG_INFO(1) and JSLOG_DEBUG(2)
																<li> jsLogLev=4 to Enable only JSLOG_TEST(4)
                              </ul>
      <table class="jsDoc" border="2" cellpadding="2" cellspacing="2">
        <tr><td class="jsDocTitle">jsLogLev BITMASK Values</td></tr>
        <tr><td class="jsDocParam">
        <ul>
			     <li>  JSLOG_ERR   =  0  ERRORS: always enable when jslog is visible    </li>
			     <li>  JSLOG_INFO  =  1  INFO: Important Information    </li>
			     <li>  JSLOG_DEBUG =  2  DEBUG Information    </li>
			     <li>  JSLOG_TRACE =  4  TRACE (e.g. Large Data like JSON)    </li>
			     <li>  JSLOG_TEST  =  8  You can use this value for Specific isolated Feature under TEST/Development </li>
			     <li>  JSLOG_JSU   = 16  JSU Functionality (usually stable)    </li>
        </ul> 
        </td></tr>
     </table>  

  
  
 * @param szMsg  {String} Message To log
 * @returns 0
 
  <div class="jsDocNote">
  <b>Implementation NOTES:</b>
  <ul>
    <li>GLOBAL VAR:   jj_var</li>
  </ul>
  </div> 
 
 * @example
 // Prepare szMsg: 
  var szName = "Federico Levis";
  var iHeight = 177; 
  var now = new Date(); 
  //LOG at Level JSLOG_INFO=1 
  jslog(JSLOG_INFO,"This a Log at Level 1. My name is " + szName + ",  Height=" + iHeight + " cm  - Current Time is: " + now);
 * 
 * 
 */
function jslog(iLogLev,szMsg)
{
  if(isLogLevEnable(iLogLev) && jj_var.console)
  {
    jj_var.console.send(iLogLev,szMsg);
  }
  return 0;
}


/**
 * jslog END: destroy the JSLOG window if present
 */
function jslog_end()
{
	if (jj_var.console){
		jj_var.console.killWindow();
	}
}

/**
 * Check if iLogLev is Enabled
@param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @returns {Boolean}  true if iLogVel is Enabled
 */
function isLogLevEnable(iLogLev)
{
   return ((jj_var.iLogLev & iLogLev || iLogLev == 0)  && jj_var.console != null );
}


/**********************************************************************************************************
 * 																				PRIVATE
 ******************************************************************************************************/



function jj_getHtmlRowNum(szHtml){
	if (typeof(szHtml) != "string"){
		return 0;
	}
	var iRowNum =  1 + (szHtml.match(/\n/g) || []).length;
	if (iRowNum > JSLOG_MAX_TEXT_BOX_ROW_NUM){
		iRowNum	= JSLOG_MAX_TEXT_BOX_ROW_NUM;
  } 
	return iRowNum;
	
}


/*
 * 
 * Replace in str di tutte le occorrenze di strFrom, che vengono sostituite con strTo 
 * @param str			es: "questa frase contiene Pippo 2 volte perche` alla fine ripeto Pippo"
 * @param strFrom		es: "Pippo"
 * @param strTo			es: "Paperino"
 * @returns str 		es: "questa frase contiene Paperino 2 volte perche` alla fine ripeto Paperino"
 */
function jj_replaceAll(str,strFrom,strTo)
{  
  if (typeof(str) == "undefined"){
    return "";
  }	
  while (str.indexOf(strFrom)>-1) {
	 str = str.replace(strFrom,strTo);
  }	
  return str;  
}



/*
 * Save jslogCfg to jhslogCfg input id, if present
 */
function jj_saveCfg(){
	var el = document.getElementById (JSLOG_ID_CFG);
	if (el != null){
		var objCfg = {
			iLogLev: jj_var.iLogLev,
			bLogTime: jj_var.bLogTime,
			szPathImg: jj_var.szPathImg,
			szSize: jj_var.szSize
		}
		var jsonCfg = JSON.stringify(objCfg,null,0);
		el.value = jsonCfg;
	}else {
		// In your page You can choose to save only iLogVel
		var el = document.getElementById (JSLOG_ID_LOGLEV);
		if (el != null){
			el.value = jj_var.iLogLev;
		}	
	}	
	
}





/*
 * 
@param iLogLev {Number}    iLogLev &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/global.html#jslog" target="_self">iLogLev Parameter</a>
 * @param [objOpt] {Object} see jslog_init
 */
function jj_consoleStart(iLogLev,objOpt){		
	var szSize = JSLOG_SIZE_DEF;
	jslog_end(); // End previous jj_var.console if present
	jj_var.iLogLev = iLogLev;
	if (jj_var.iLogLev ==0){
		return;
	}
	
	if (objOpt != undefined){
		if (objOpt.szPathImg != undefined){
			// save in Global
		  jj_var.szPathImg = objOpt.szPathImg;
		}
		if (objOpt.bLogTime != undefined){
			// save in Global
			jj_var.bLogTime = objOpt.bLogTime;
		}
		/* NOT STIL WORKING
		if (objOpt.szSize != undefined){
			// save in Global
			jj_var.szSize = objOpt.szLogSize;
			szSize = jj_var.szSize; 
		}
		*/
	}
	 
  jj_var.console = {
	  /*----------------------------------------------------------------------------
	                                Core Functionality
	  ----------------------------------------------------------------------------*/
	  // vars
	  debugging_on: false,
	  window:       null,
	  viewport:     null,
	  buffer:       '',
	  debugVisible: false, // Status related to showDebug Button  (debugVisible= true after click)
	  arBtnDebug: new Array(),  //Btn for Debug (2 Buttons)
	  // initialization
	  init: function(){
	    if( !document.getElementsByTagName ||
	        !document.getElementById ||
	        !document.createElement ||
	        !document.createTextNode ) return;
	
		var domBody = document.getElementsByTagName( 'body' )[0];
		if (typeof (domBody) == 'undefined'){
		  return;
		}
	    jj_var.console.createWindow();
	    jj_var.console.getCookie();
	    jj_var.console.debugging_on = true;
	    jj_var.console.setSize (szSize); 
	  },
	
	  // jj_var.console window creation
	  createWindow: function(){
	    jj_var.console.window = document.createElement( 'div' );     // the window
	    jj_var.console.window.style.background = '#000';
	    jj_var.console.window.style.font       = '9pt "Lucida Grande", "Lucida Sans Unicode", sans-serif';
	    jj_var.console.window.style.padding    = '2px';
	    jj_var.console.window.style.position   = 'absolute';
	    jj_var.console.window.style.top        = WIN_JSLOG_TOP;
	    jj_var.console.window.style.left       = '0px';
	    jj_var.console.window.style.height     = WIN_JSLOG_H;
	    jj_var.console.window.style.zIndex     = '100';
	    jj_var.console.window.style.minHeight  = '40px';
	    jj_var.console.window.style.width      = WIN_JSLOG_W;
	    jj_var.console.window.style.minWidth   = '150px';
	     
	    var x = document.createElement('span');             // the closer
	        x.style.border     = '1px solid #000';
	        x.style.cursor     = 'pointer';
	        x.style.color      = '#000';
	        x.style.display    = 'block';
	        x.style.lineHeight = '.5em';
	        x.style.padding    = '0 0 3px';
	        x.style.position   = 'absolute';
	        x.style.top        = '4px';
	        x.style.right      = '4px';
	        x.setAttribute( 'title', 'Close jj_var.console Debugger' );
	        x.appendChild( document.createTextNode( 'x' ) );
	        jj_var.console.addEvent( x, 'click', function(){ jj_var.console.killWindow(); } );
	        jj_var.console.window.appendChild( x );
	    var sh = document.createElement('div');             // the stretcher holder
	        sh.style.position = 'absolute';
	        sh.style.bottom   = '3px';
	        sh.style.right    = '3px';
	    var sg = document.createElement('span');            // the stretcher grip
	        sg.style.border   = '5px solid #ccc';
	        sg.style.borderLeftColor = sg.style.borderTopColor = '#000';
	        sg.style.cursor   = 'pointer';
	        sg.style.color    = '#ccc';
	        sg.style.display  = 'block';
	        sg.style.height   = '0';
	        sg.style.width    = '0';
	        sg.style.overflow = 'hidden';
	        sg.setAttribute( 'title', 'Resize the jj_var.console Debugger' );
	
	        if( typeof( Drag ) != 'undefined' ){ // make it draggable
	          sg.xFrom = 0;
	          sg.yFrom = 0;
	          Drag.init( sg, null, null, null, null, null, true, true );
	          sg.onDrag = function( x, y ){
	                        jj_var.console.resizeX( x, this );
	                        jj_var.console.resizeY( y, this );
	                        jj_var.console.adjustViewport();
	                      };
	          sg.onDragEnd = function(){
	                       jj_var.console.setCookie();
	                     };
	          sh.appendChild( sg );
	          jj_var.console.window.appendChild( sh );
	        }
	        
	        var header = document.createElement( 'h3' );
	        header.className = "jslog";
	        header.style.textAlign = "left";
	        jj_var.console.appendAllBtn(header,false); 
	        //--------------------------------------
	        header.appendChild( jj_var.console.getGroupSep("    "));
	        jj_var.console.labelTitle = document.createElement( 'label' );
	        jj_var.console.labelTitle.className = "jslog";
	    		jj_setTitle(jj_var.iLogLev);
	        header.appendChild(jj_var.console.labelTitle);
	        jj_var.console.window.appendChild( header );
	        //------------------------     
	        var footer = document.createElement( 'div' );        // additional footer holder
	        footer.className = "jslogFooter";
	        jj_var.console.appendAllBtn(footer,true); 
	        jj_var.console.window.appendChild( footer);
	
		//	STYLE
	    jj_var.console.viewport = document.createElement( 'pre' );
	    jj_var.console.viewport.style.border   = '1px solid #ccc';
	    jj_var.console.viewport.style.color    = '#ebebeb';
		  jj_var.console.viewport.style.color    = 'white';
		  jj_var.console.viewport.style.backgroundColor = 'black';
	    jj_var.console.viewport.style.textAlign    = 'left';
	    jj_var.console.viewport.style.fontSize = '1.2em';
	    jj_var.console.viewport.style.margin   = '0';
	    jj_var.console.viewport.style.padding  = '0 3px';
	    jj_var.console.viewport.style.position = 'absolute';
	    jj_var.console.viewport.style.top      = '25px';
	    jj_var.console.viewport.style.left     = '2px';
	    jj_var.console.viewport.style.overflow = 'auto';
	    jj_var.console.adjustViewport();
	    jj_var.console.window.appendChild( jj_var.console.viewport );
	    document.getElementsByTagName( 'body' )[0].appendChild( jj_var.console.window );
	
	    if( typeof( Drag ) != 'undefined' ){ // make it draggable
	      Drag.init( header, jj_var.console.window );
	      jj_var.console.window.onDragEnd = function(){
	                                   jj_var.console.setCookie();
	                                 };
	    }
	  },
	
	  // resizing stuff
	
	  resizeX: function( x, grip ){
	
	    var width    = parseInt( jj_var.console.window.style.width );
	
	    var newWidth = Math.abs( width - ( x - grip.xFrom ) ) + 'px';
	
	    if( parseInt( newWidth ) < parseInt( jj_var.console.window.style.minWidth ) )
	
	      newWidth = jj_var.console.window.style.minWidth;
	
	    jj_var.console.window.style.width = newWidth;
	
	    grip.xFrom = x;
	
	  },
	
	  resizeY: function( y, grip ){
	
	    var height    = parseInt( jj_var.console.window.style.height );
	
	    var newHeight = Math.abs( height - ( y - grip.yFrom ) ) + 'px';
	
	    if( parseInt( newHeight ) < parseInt( jj_var.console.window.style.minHeight ) )
	
	      newHeight = jj_var.console.window.style.minHeight;
	
	    jj_var.console.window.style.height = newHeight;
	
	    grip.yFrom = y;
	
	  },
	
	  // adjust viewport
	
	  adjustViewport: function(){
	    jj_var.console.viewport.style.width = ( parseInt( jj_var.console.window.style.width ) - 8 ) + 'px';
	    jj_var.console.viewport.style.height = ( parseInt( jj_var.console.window.style.height ) - 50 ) + 'px';
	  },
	
	  // send data too the window
	
	  send: function(iLevel, text ){
	  	if (iLevel == JSLOG_ERR){
	  		console.error (text);
	  	}
	  
	    // Replace "/n" with <br>
		  // look for "\n" and replace with <BR>	
	    text = text + "<br/>";
	    // if textarea we do not replace \n
	    if (text.indexOf("<textarea rows") < 0){
			  while (text.indexOf("\n")>-1) {
			    text = text.replace("\n","<br/>");
		    }
	    }
	  	var szTime ="";
	  	if (jj_var.bLogTime){
	    	var d = new Date();
	    	szTime = jj_var.console.num2StrPad(d.getHours(),'0',2) + ":" + 
	    				jj_var.console.num2StrPad(d.getMinutes(),'0',2) + ":" + 
	    				jj_var.console.num2StrPad(d.getSeconds(),'0',2) + "." + 
	    				jj_var.console.num2StrPad(d.getMilliseconds(),'0',3) + " ";
	  	}
	  	// for delimiter we pass null
	  	if (iLevel != null){
			  text = szTime + "[" + iLevel + "] " + text;
	  	}
	    if( jj_var.console.viewport == null ){  /* store in the buffer if the 
	                                        viewport has not yet been built */
	      jj_var.console.buffer += text;
	    } else {
	      jj_var.console.viewport.innerHTML += text;
	      jj_var.console.scrollWithIt();
	    }
	  },
	
	  // send the buffer to the window
	
	  sendBuffer: function(){
	
	    if( jj_var.console.viewport == null ){
	
	      jj_var.console.timer = window.setTimeout( 'jj_var.console.sendBuffer()', 500 );
	
	    } else {
	
	      jj_var.console.viewport.innerHTML += jj_var.console.buffer;
	
	      jj_var.console.scrollWithIt();
	
	      jj_var.console.killTimer();
	
	    }
	
	  },
	
	  // adjust the viewport to keep pace with the latest entries
	
	  scrollWithIt: function(){
	
	    jj_var.console.viewport.scrollTop = jj_var.console.viewport.scrollHeight;
	
	  },
	
	  // kill the window
	
	  killWindow: function() {
	    jj_var.console.window.parentNode.removeChild( jj_var.console.window );
	    jj_var.console.debugging_on = false;
	    jj_var.console = null;
	    window.name = JSLOG_LEV_URL_PAR + "=0";
	    
	  },
	
	  // cookie handlers
	
	  setCookie: function(){
	
	    var posn = jj_var.console.window.style.top + ' ' + jj_var.console.window.style.left;
	
	    var size = jj_var.console.window.style.height + ' ' + jj_var.console.window.style.width;
	
	    document.cookie = 'jj_var.console=' + escape( posn + ' ' + size );
	
	  },
	
	  getCookie: function(){
	    if( !document.cookie ) return;
	    var all_cookies = document.cookie;
	    var found_at = all_cookies.indexOf('jj_var.console=');
	    if( found_at != -1 ){
	      var start = found_at + 'jj_var.console='.length;
	      var end   = all_cookies.indexOf( ';', start );
	      var value = ( end != -1 ) ? all_cookies.substring( start, end )
	                                : all_cookies.substring( start );
	      value = unescape( value );
	      var vals = value.split( ' ' );
	      // start with position
	      jj_var.console.window.style.top  = vals[0];
	      jj_var.console.window.style.left = vals[1];
	      // then size
	      jj_var.console.window.style.height = vals[2];
	      jj_var.console.window.style.width  = vals[3];
	      jj_var.console.adjustViewport();
	    }
	  },
	  // generic timer setup (if needed)
	  timer: null,
	  killTimer: function(){
	    clearTimeout( jj_var.console.timer );
	  },
	  // event handlers
	  addEvent: function( obj, type, fn ){
	    if (obj.addEventListener) obj.addEventListener( type, fn, false );
	    else if (obj.attachEvent) {
	      obj["e"+type+fn] = fn;
	      obj[type+fn] = function() {
	        obj["e"+type+fn]( window.event );
	      };
	      obj.attachEvent( "on"+type, obj[type+fn] );
	    }
	  },
	
	  removeEvent: function ( obj, type, fn ) {
	    if (obj.removeEventListener) obj.removeEventListener( type, fn, false );
	    else if (obj.detachEvent) {
	      obj.detachEvent( "on"+type, obj[type+fn] );
	      obj[type+fn] = null;
	      obj["e"+type+fn] = null;
	    }
	  },
	
	  
	  
	  
	  /*================================================================================================
	   * @param parent  {Object} the parent that will be added the Btn
	   * @param bFooter {Boolean} true for Footer
	  ===============================================================================================*/
	  appendAllBtn: function (parent,bFooter) {
		  var listBtn = new Array();
		  parent.appendChild( jj_var.console.getImgPos("arrowTopLeft.jpg","Move JSConsole to TOP LEFT CORNER",JSLOG_POS_TOPLEFT));
		  parent.appendChild( jj_var.console.getImgPos("arrowBottomRight.jpg","Move JSConsole to BOTTOM RIGHT LEFT CORNER",JSLOG_POS_BOTTOMRIGHT));
		  parent.appendChild( jj_var.console.getImgPos("arrowLeft.jpg","Move JSConsole to LEFT SIDE",JSLOG_POS_LEFT));
		  parent.appendChild( jj_var.console.getImgPos("arrowRight.jpg","Move JSConsole to the RIGHT SIDE",JSLOG_POS_RIGTH));
		  // parent.appendChild( jj_var.console.getBtnSep());
		  parent.appendChild( jj_var.console.getImgPos("arrowTop.jpg","Move JSConsole to the TOP",JSLOG_POS_TOP));
		  parent.appendChild( jj_var.console.getImgPos("arrowBottom.jpg","Move JSConsole to the BOTTOM",JSLOG_POS_BOTTOM));
			//-------------------------------------- SIZE
			parent.appendChild( jj_var.console.getGroupSep(""));
			var listBtnSize = new Array();
			var w=30;
			listBtnSize.push( [ 'XS', w,'Size SX',  function(){ jj_var.console.setSize(JSLOG_SIZE.XS); } ] );
			listBtnSize.push( [ 'S', w,'Size S',  function(){ jj_var.console.setSize(JSLOG_SIZE.S); } ] );
			listBtnSize.push( [ 'M', w,'Size M',  function(){ jj_var.console.setSize(JSLOG_SIZE.M); } ] );
			listBtnSize.push( [ 'L', w,'Size L',  function(){ jj_var.console.setSize(JSLOG_SIZE.L); } ] );
			listBtnSize.push( [ 'XL', w,'Size XL',  function(){ jj_var.console.setSize(JSLOG_SIZE.XL); } ] );
			// ========================== Add buttons
			for(var i=0; i < listBtnSize.length; i++ ){
				var btn = jj_var.console.getBtn(listBtnSize[i]);
				parent.appendChild( btn);
				parent.appendChild( jj_var.console.getBtnSep());
			}		
		  // ----------------------------------------- define any Other Add-on Buttons
		  parent.appendChild( jj_var.console.getGroupSep(""));
		  listBtn.push( [ 'Clear', 60, 'Clear the Window',  function(){ jj_var.console.clearWindow(); } ] );
		  listBtn.push( [ 'Delimiter', 70, 'Add a Separator Delimet',  function(){ jj_var.console.sendDelimiter(); }] );
		  if (jj_var.console.isIE()){
		    listBtn.push( [ 'CopyToClipboard',120, 'Copy To Clipboard All the  contain of the  Window',  function(){ jj_var.console.copy2Clipboard(); }  ] );
		  }else{
		    listBtn.push( [ 'SelectAll',70, 'Select ALL', function(){ jj_var.console.selectAll(); } ] );
		  }
		  
		  
			// ========================== Add buttons
			for(var i=0; i < listBtn.length; i++ ){
				var btn = jj_var.console.getBtn(listBtn[i]);
				parent.appendChild( btn);
				parent.appendChild( jj_var.console.getBtnSep());
			}
		  parent.appendChild( jj_var.console.getGroupSep(""));
		  
		  var btnDebug = jj_var.console.getBtn( [ 'Show debug Fields', 150, 'Show hidden fields having class="debug" or id="debug"',  function(){
		  	  var szBtnValue, szBtnTitle;
				  if (jj_var.console.debugVisible){
				  	// Debug are visible. We hide them
					  jj_var.console.debugVisible = false;
					  szBtnValue = 'Show ' + JSLOG_ID_DEBUG + ' Fields';
					  szBtnTitle = 'Show hidden fields having class="' + JSLOG_ID_DEBUG +  '" or id="' + JSLOG_ID_DEBUG + '"';
				  }else{
				  	// Debug are visible. We Show them them
					  jj_var.console.debugVisible = true;
					  szBtnValue = 'Hide ' + JSLOG_ID_DEBUG  + 'Fields';
					  szBtnTitle = 'Hide again Debug fields having class="' + JSLOG_ID_DEBUG + '" or id="' +JSLOG_ID_DEBUG + '"';
				  }
				  // Change value and title of the array (2) of btnDebug
				  for (var i=0; i<jj_var.console.arBtnDebug.length; i++){
				  	var btnDebug = jj_var.console.arBtnDebug[i]; 
					  btnDebug.value = szBtnValue;
					  btnDebug.title = szBtnTitle;
				  }
				  
			  	// Get List of all elements with tag SPAN and id= "debug"
				  var TAG_DEBUG = ["SPAN","DIV","TABLE"];
				  
				  for (var iTag=0; iTag < TAG_DEBUG.length; iTag++){
				  	var ElList = document.getElementsByTagName(TAG_DEBUG[iTag]);
				  	for (var i=0; i < ElList.length; i++){
				  		var El = ElList [i];
				  		if (El.id == "debug" || El.className == "debug"){
				  		  if (jj_var.console.debugVisible){
				  		  	// El.style.visibility="visible";
				  		    El.style.display="block";
				  		  }else {
				  		    // El.style.visibility="hidden";
				  		    El.style.display="none";
				  		  }
				  		}
				  	}
				  }	
		  }] );
			parent.appendChild(btnDebug);
			// add to the list of btnDebug
			jj_var.console.arBtnDebug.push (btnDebug);
			parent.appendChild( jj_var.console.getGroupSep(""));
			parent.appendChild( jj_var.console.getGroupSep(""));
			
		  // CLOSE JSLOG BTN
		  var btnClose = jj_var.console.getBtn( [ 'CLOSE JSLOG', 120, 'Close JSLog Window',  function(){ jslog_end(); } ] );
    		parent.appendChild(btnClose);
			
			
    		
    		
    		
			
			//-------------------------------- Select with logLev
			// We add Only in Footer because they do not work in H3
			if (bFooter ){
				var label = document.createElement( 'label' );
				label.className = "jslogFooter";
				label.innerHTML  =	"SETTINGS: ";
				parent.appendChild(label);
				var selectLogLev = document.createElement( 'select');
				selectLogLev.className ='jslog';
				for (var i=0; i <= 31; i++){
					var szText = "LogLevel=" + i;
					if (i==0){
						szText = "CLOSE JSLOG";
					}
					var elOpt = new Option(szText,i);
					elOpt.dv = szText;
					elOpt.selected = (jj_var.iLogLev == i);
					selectLogLev[selectLogLev.length] = elOpt;
				}
				jj_var.console.addEvent(selectLogLev, 'change', function(){ 
					jslogLevSet (this.selectedIndex);
				}  );
				parent.appendChild(selectLogLev);
				jj_var.console.selectLogLev = selectLogLev;
				//-------------------------------------------------------
				var selectLogTime = document.createElement( 'select');
				selectLogTime.className ='jslog';
				var arOpt =[["0","NO Time"],["1","Log Time"]];
				for (var i=0; i < arOpt.length; i++){
					var szText = arOpt[i][1];
					var elOpt = new Option(szText,arOpt[i][0]);
					elOpt.dv = szText;
					elOpt.selected = ((!jj_var.bLogTime && i==0) || (jj_var.bLogTime && i==1));
					selectLogTime[selectLogTime.length] = elOpt;
				}
				jj_var.console.addEvent(selectLogTime, 'change', function(){ 
					jj_var.bLogTime = (this.selectedIndex ==1);
					jj_saveCfg();
				}  
				);
				parent.appendChild(selectLogTime);
			}
			
	  },
	  
	  /*----------------------------------------------------------------------------
	                              Footer Functions
	  ----------------------------------------------------------------------------*/
	  // send a delimiter to the window
	  sendDelimiter: function(){
	    jj_var.console.send(null, JSLOG_DELIMITER);
	  },
	  selectAll: function() {
	    if (document.selection) {
	        var range = document.body.createTextRange();
	        range.moveToElementText(jj_var.console.window);
	        range.select();
	    } else if (window.getSelection) {
	        var range = document.createRange();
	        range.selectNode(jj_var.console.window);
	        window.getSelection().addRange(range);
	    }
	  },  
	  
	  // copy 2 Clipboard (only IE)
	  copy2Clipboard: function(){
	    var i=0;
	
		  // look for <BR> and <br> and replace with "\n"
	    // Get Current String with trace
		  var NewString = "" + jj_var.console.viewport.innerHTML;
		  while (NewString.indexOf("<BR>")>-1) {
		    NewString = NewString.replace("<BR>","\n");
	      i++;
	    }
		  while (NewString.indexOf("<br>")>-1) {
		    NewString = NewString.replace("<br>","\n");
	      i++;
	    }	  
		  // Now NetString has NewLines
	    // for clipboard
		  var textArea = document.createElement( 'TextArea');
		  // textArea.innerText = Text;
		  textArea.innerText = NewString;
	    if (typeof(textArea.createTextRange) == "undefined"){
	      alert("copy2Clipboard NOT supported for This Browser - Supported Browser for COPY to Clipboard: IE." +
	      		 "To Copy to Clipboard Please use SelectAll or CTRL-C  CTRL-V");
	      return;
	    }
		  Copied = textArea.createTextRange();
		  Copied.execCommand("RemoveFormat");
		  Copied.execCommand("Copy");
	    // alert("ALL Rows Copied to Clipdoard ");
	
	  },
	
	  
	  isIE: function() {
	    try{
	      return ((navigator.appName == 'Microsoft Internet Explorer') || 
	          ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); 		
	    }
	    catch(err){
	      return false;
	    }
	  },  
	
	
	  getBtn: function(arDesc){
	      var btn = document.createElement( 'input');
	      btn.className = 'jslogButton';
	      btn.setAttribute( 'type', 'button' );
	      btn.setAttribute( 'value', arDesc[0] );
		    btn.style.width =  arDesc[1] + 'px';
	      btn.setAttribute( 'title', arDesc[2] );
	      jj_var.console.addEvent( btn, 'click', arDesc[3] );
	      return btn;
	  },
	
	  getTxtSep: function(txt){
		  var sep = document.createElement( 'span' );
		  sep.style.color       = '#ffffff';
	    sep.style.fontWeight=  'bold';
		  sep.style.padding     = '0 2px 0px 10px';
		  sep.style.textAlign = "right";
		  sep.appendChild(document.createTextNode( txt ));
		  return sep;
	  },
	  getBtnSep: function(){
		  var sep = document.createElement( 'span' );
		  sep.style.color       = '#ffffff';
		  sep.style.padding     = '0 3px 0px 0px';
		  return sep;
	  },
	  getGroupSep: function(){
		  var sep = document.createElement( 'span' );
		  sep.style.color       = '#ffffff';
		  sep.style.padding     = '0 10px 0px 0px';
		  return sep;
	  },
	  
	  
	  getImgPos: function(src,tip,Pos){
	    var img = document.createElement( 'img' );
	    img.style.padding     = '0px 2px';
	    img.style.cursor      = 'pointer';
	    img.src = jj_var.szPathImg + src;
	    img.height = 15;
	    img.width = 15;
	    img.align = "top";
	    img.title= tip;
	    img.style.border  = '1px solid black';
	    // Set Border Yellow when mouse is Over Img
	    jj_var.console.addEvent( img, 'mouseenter',	function(){this.style.border  = '1px solid yellow'; });
	    jj_var.console.addEvent( img, 'mouseleave', function(){this.style.border  = '1px solid black';});
	    jj_var.console.addEvent( img, 'click', function(){jj_var.console.setPos(Pos);});
	    //
	    return img;
	  },
	
	  
	  /*
	   * Set Console Position
	   * @param szSize  JSLOG_POS_XS...
	   */
	  setSize: function(szSize){
		  jj_var.szSize = szSize;
		  jj_saveCfg(); 
		  var hMax=0;
		  var wMax=0;
		  var w=0;
		  var h=0;
		  if (typeof(window.innerHeight) != 'undefined'){
			  //Some Space for scrollbar (if present)
			  hMax= window.innerHeight-30;
			  wMax= window.innerWidth-30;
		  }else{
			  // Particular cases
			  hMax= window.screen.height-150;
			  wMax= window.screen.width-30;
		  }
	
		  if (szSize == JSLOG_SIZE.XS){
		      w =1100;
		      h=150;
		  }
		  else if (szSize == JSLOG_SIZE.S){
			  h = parseInt (hMax *0.3);
			  w = parseInt (wMax *0.8);
		  }
		  else if (szSize == JSLOG_SIZE.M){
			  h = parseInt (hMax *0.5);
			  w = parseInt (wMax *1);
		  }
		  else if (szSize == JSLOG_SIZE.L){
			  h = parseInt (hMax *0.6);
			  w = parseInt (wMax *1);
		  }
		  else if (szSize == JSLOG_SIZE.XL){
			  jj_var.console.window.style.top    = '0px';
			  jj_var.console.window.style.left   = '0px';
			  h = parseInt (hMax *1);
			  w = parseInt (wMax *1);
		  }
		  if (w < 1100){
		  	w = 1100;
		  }
		  jj_var.console.window.style.width    = w + 'px';
		  jj_var.console.window.style.height   = h + 'px';
		  jj_var.console.adjustViewport();
	  }, 	
	    
	  /*
	   * Set Console Position
	   * @param pos  JSLOG_POS_TOPLEFT...
	   */
	  setPos: function(pos){
		  var top = 0;
		  var left = 0;
		  if (typeof(window.innerHeight) != 'undefined'){
			  //Some Space for scrollbar (if present)
			  top= window.innerHeight - 50;
			  left= window.innerWidth - 150;
		  }else{
			  // Particular cases
		  	  top= window.screen.height-100;
		  	  left= window.screen.width-200;
		  }
		  if (pos == JSLOG_POS_TOPLEFT){
			  jj_var.console.window.style.top    = '0px';
			  jj_var.console.window.style.left   = '0px';
		  }
		  else if (pos == JSLOG_POS_BOTTOMRIGHT){
			  jj_var.console.window.style.top   =  top + 'px';
			  jj_var.console.window.style.left   = left + 'px';
		  }	
		  else if (pos == JSLOG_POS_TOP){
			  jj_var.console.window.style.top        = '0px';
		  }
		  else if (pos == JSLOG_POS_BOTTOM){
			  // var h = jj_var.console.window.style.height.replace('px','');
			  jj_var.console.window.style.top   =  top + 'px';
		  }	
		  else if (pos == JSLOG_POS_LEFT){
			  jj_var.console.window.style.left   = '0px';
		  }	
		  else if (pos == JSLOG_POS_RIGTH){
			  // var w = jj_var.console.window.style.width.replace('px','');
			  jj_var.console.window.style.left   = left + 'px';
		  }	
	  },
	  clearWindow: function(){
	    jj_var.console.viewport.innerHTML = '';
	  },
	  /**
	   * @param iNum 			e.g    123
	   * @param szPad			"0"
	   * @param iLenWithPad	5 
	   * @returns  "00123
	   */
	  num2StrPad: function (iNum,szPad, iLenWithPad) {
	    var iZeroPad = iLenWithPad - iNum.toString().length + 1;
	    return Array(+(iZeroPad > 0 && iZeroPad)).join("0") + iNum;
	  }	  
	  
	  
  };

  // jj_var.console.addEvent( window, 'load', jj_var.console.init );
  // jj_var.console.addEvent( window, 'load', jj_var.console.sendBuffer );
   jj_var.console.init();
   if (objOpt && objOpt.iTop){
     jslogSetTop (objOpt.iTop);
   }
}






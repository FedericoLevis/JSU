/** @fileOverview 
========================================================================================= <BR/> 
<b>File:</b> 			core/googleAnal.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>Google Analytics Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/GoogleAnalytics.html" target="_self">JSU GoogleAnalytics Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>     JSU Google Analytics API <BR/>   
<b>REQUIRED:</b>        JSU:  jsu.css locale-core.js jsuCmn.js tooltip.js <BR/>
<b>OPTIONAL:</b>        JSU:  jslog.js dom-drag.js if you want to use jslog <BR/> 
<b>First Version:</b>     ver 1.0 - Feb 2014  <BR/>
<b>Current Version:</b>   JSU v. 1.10 &nbsp;&nbsp;&nbsp;2018-Jan-14  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/



/*=========================================================================================
 * 					GLOBAl CONST
 ========================================================================================= */




/**
 *  Parameter szParTime of gai.js API: 
 *         <ul>
 *            <li>GA_PAR_TIME.all_time</li>
 *            <li>GA_PAR_TIME.month</li>
 *            <li>GA_PAR_TIME.week</li>
 *            <li>GA_PAR_TIME.day</li>
 *            <li>GA_PAR_TIME.two_hours</li>
 *       	 </ul>	     
 */
var GA_PAR_TIME={
		all_time:'all_time',
		month: 'month',
		week: 'week',
		day: 'day',
		two_hours: 'two_hours'
};

/**
 * Default Value of googleAnal.js par
 */
var GA_DEF = {
		JSPOPUP: false,
		ALL_LINK: true, // default: Present the Link to display all the pages of Google analytics together
		WIDTH: 700, // Box Width
		TBL_MAX_HEIGHT: 300,  // if more lines there will be scroolbar
		SHOW_CB_SHORT_URL: true,   // Show CB
		SHOW_CB_LONG_URL: true,    // Show CB
		SHORT_URL: false,
		LONG_URL: false,
		PAR_TIME: GA_PAR_TIME.all_time,
		NEW_WINDOW: true
};



/*=========================================================================================
 * 					LOCAL  CONST
 ========================================================================================= */
var TMO_GA_CLICK_SIMUL_MS = 200; 


// Global For GoogleAnal
var ga_var = {
		arObjGaList: null,   // arObjGaList received as PAR
		bShortUrl: false,
		bLongUrl: false,
		iTipWidth: 700,
		iVisibleLink: 0,  //used  by onclickBtnAllGoogle
		arszIdVis: new Array(),
		iSelFilterCat: 0 , // Current FilterCat
		szParTime: GA_PAR_TIME.all_time,  // Current FilterType
		iLinkClickCur:0,  // for Click Simulation in case of OPERA/SAFARI: current index (we have to arrivi till iVisibleLink-1
		tmoClick: null
};


var GA_LINK_SEP="&nbsp;&nbsp;&nbsp;";
var GALOG_FUN_START = " ------------- START";
var GALOG_FUN_END = " ------------- END";


// Div with hidden anchor
var GA_DIV_HIDDEN_ID = "jsuDivHidden";
var GA_HREF_HIDDEN_ID = "jsuHrefHidden";
// init to whatver href, then it will be changed run-time
var GA_HREF_HIDDEN = '<a id="' + GA_HREF_HIDDEN_ID +'" target="_self" style="display:none" href="https://goo.gl/HnNqnM" >HIDDEN</a>'; 



//=====================  PUBLIC  =============================================//


/**
 * Display in a FixedTip/JQPopup an UserFriendly Table with the Link to Google Analytics of Short Url gaa.gl. The Table is UserFriendly (Sort, Filters, Show/Hide Columns,..) 
 * @param arObjGaList  {Array}   Array of Object that identify the Google Analytics. See Exmple Below  
 * @param event
 * @param [objOpt] {Object}   
     <table class="jsDocGood" border="3" cellpadding="2" cellspacing="2">
        <tr ><td class="jsDocTitleGood">OPTION Always Available (FREE and FULL JSU)</td></tr>
        <tr><td class="jsDocParam">
        <ul>
	        <li> bJQPopup {Boolean} [false] 
	        <ul>
		        <li> false: with his default value, the Box will be open in a FixedTip</li> 
		        <li> true: the Box will be open inside a JQPopup  </li>
	        </ul> 
	        <li> iWidth {Number}: [GA_DEF.WIDTH] Width  default GA_DEF.WIDTH (1200) </li> 
	        <li> iTblMaxHeight {Number}:  [GA_DEF.TBL_MAX_HEIGHT] You can set this max-height of the Tbl to limit the Height of the Box, that is automatically.    </li>
	        <li> szTitle{String}  default: 'Google Analytics'  </li> 
	        <li> bShowCbShortUrl {Boolean} [true] CheckBox to Show the column with ShortUrl: if true the CheckBox is visible  
	        <li> bShowCbLongUrl {Boolean} [true] CheckBox to Show Show the colum with LongUrl: if true the CheckBox is visible
	        <li> bShortUrl {Boolean} [false] Initial value of the CheckBox to Show the column with ShortUrl  
	        <li> bLongUrl {Boolean} [false] Initial value of the CheckBox to Show the column with ShortUrl
	        <li> szHeaderTxt {String}: [DEF_GA_LABEL.HEADER] Message to put before the Table of Link to Analytics. You can set "" to remove it 
	        <li> szFooterTxt {String}: [DEF_GA_LABEL.FOOTER] Message to put after the Table of Link to Analytics. You can set "" to remove it 
	        <li> szParTime {String}:  [GA_PAR_TIME.all_time] Default ParTime ar Startup. 
	             &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/googleAnal.js/global.html#GA_PAR_TIME" target="_self">GA_PAR_TIME</a>  
	        </li>
        </ul> 
        </td></tr>
     </table>
     
  	@example
 //--------------------------------------------------------- HTML   
  <input type="button"  class="googleAnalList" id="googleAnalList1"  onclick="jsuGoogleAnalList(event)" />
	  
  // --------------------------------- JS
  function jsuGoogleAnalList(event){	
	var GA_CAT_DOWN = "JSU DOWNLOAD";
	var GA_CAT_SAMPLE_FREE = "JSU FREE - SAMPLES";
	var GA_CAT_DOC_FREE = "JSU FREE - DOC";
	
  // Prepare arObjGaList: only shortUrl is mandatory  
  // In this case we populate all fields
  var arObjGaList = [
       {shortUrl: JSU_SHORT_URL_DOWNLOAD_FREE, longUrl: JSU_LONG_URL_DOWNLOAD_PAGE_FREE , cat:GA_CAT_DOWN,desc:'Download JSU.ZIP FREE'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_ALL, longUrl: JSU_LONG_URL_SAMPLE_ALL,cat:GA_CAT_SAMPLE_FREE, desc:'Main JSU Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_TIP, longUrl: JSU_LONG_URL_SAMPLE_TIP,cat:GA_CAT_SAMPLE_FREE, desc:'Tooltip Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_LOADING, longUrl: JSU_LONG_URL_SAMPLE_LOADING, cat:GA_CAT_SAMPLE_FREE,desc:'LoadingDiv Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_JSLOG, longUrl: JSU_LONG_URL_SAMPLE_JSLOG, cat:GA_CAT_SAMPLE_FREE,desc:'JSLog Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_SORT, longUrl: JSU_LONG_URL_SAMPLE_SORT, cat:GA_CAT_SAMPLE_FREE, desc:'SortTable Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_IEPOPUP, longUrl: JSU_LONG_URL_SAMPLE_IEPOPUP, cat:GA_CAT_SAMPLE_FREE,desc:'IE Popup Sample'},
       // --------------------------
       {shortUrl: JSU_SHORT_URL_DOC, longUrl: JSU_LONG_URL_DOC, cat:GA_CAT_DOC_FREE,desc:'JSU Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_TIP, longUrl: JSU_LONG_URL_DOC_TIP, cat:GA_CAT_DOC_FREE,desc:'JSU Tooltip Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_LOADING, longUrl: JSU_LONG_URL_DOC_LOADING, cat:GA_CAT_DOC_FREE,desc:'JSU LoadingDiv Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_JSLOG, longUrl: JSU_LONG_URL_DOC_JSLOG, cat:GA_CAT_DOC_FREE,desc:'JSU JSLog Doc'},
       {shortUrl: JSU_SHORT_URL_DOC_SORT, longUrl: JSU_LONG_URL_DOC_SORT, cat:GA_CAT_DOC_FREE,desc:'JSU SortTable Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_IEPOPUP, longUrl: JSU_LONG_URL_DOC_IEPOPUP, cat:GA_CAT_DOC_FREE,desc:'JSU IE Popup Doc'}
     ];
  // show the TipFix with the List of Link
  gaShortUrlList(arObjGaList,event,{
        bJQPopup: false,
    	szTitle:'JSU Google Analitycs',
    	iWidth: opt_ga_list.iWidth,  // Width of the Box
    	iTblMaxHeight: opt_ga_list.iTblMaxHeight,  // Max Height	 of the Table with the LIst of Google Analitycs Links
    	szParTime: opt_ga_list.szParTime,   // Initial Par Time
    	bShortUrl: opt_ga_list.bShortUrl,   // ShortUrl true or False
    	bLongUrl: opt_ga_list.bLongUrl  // LongUrl true or False
    });
 }   
													     
 */
function gaShortUrlList(arObjGaList, event, objOpt){
	var fn = "[googleAnal.js gaShortUrlList()] ";

	jsu_log (fn + GALOG_FUN_START);
	jsu_logObj (fn + "IN arObjGaList", arObjGaList);
	jsu_logObj (fn + "IN objOpt", objOpt);
	// -------- FREE/FULL JSU Management -  only some Options are available in FREE Version: iWidth iTblMaxWidth
	// We Setup objOptTmp with default values, useful for FREE JSU case
	var objOptSet = {
		iTipWidth: GA_DEF.WIDTH,
		iWidth: GA_DEF.WIDTH,
		bJQPopup: GA_DEF.JSPOPUP,
		szTitle: GA_LABEL.DEF_TITLE,
		// --- only in FULL
	  bAllBtn : GA_DEF.ALL_LINK,
	  szHeaderTxt : GA_LABEL.DEF_HEADER,
	  szFooterTxt : GA_LABEL.DEF_FOOTER,
	  bShowCbShortUrl: GA_DEF.SHOW_CB_SHORT_URL,
	  bShowCbLongUrl : GA_DEF.SHOW_CB_LONG_URL,
	  bShortUrl: GA_DEF.SHORT_URL,
	  bLongUrl : GA_DEF.LONG_URL,
	  bShortUrl: GA_DEF.SHORT_URL,
	  bLongUrl : GA_DEF.LONG_URL,
	  iTblMaxHeight : GA_DEF.TBL_MAX_HEIGHT,
	  szParTime : GA_DEF.PAR_TIME
	} 
	if (objOpt == undefined){
		objOpt = new Object();
	}
	//----------- Set Fields Available also in FREE JSU
	if (objOpt.iTblMaxHeight != undefined){	objOptSet.iTblMaxHeight = objOpt.iTblMaxHeight; }
	if (objOpt.iWidth != undefined){
		// set the 2 different fields
		objOptSet.iTipWidth= objOpt.iWidth;
		objOptSet.iWidth= objOpt.iWidth;
	}
	if (objOpt.bJQPopup != undefined){objOptSet.bJQPopup = objOpt.bJQPopup; }
	if (objOpt.szTitle != undefined){	objOptSet.szTitle = objOpt.szTitle; }
	if (objOpt.bAllGoogleAnalLink != undefined){	objOptSet.bAllBtn = objOpt.bAllBtn; }
	if (objOpt.szHeaderTxt != undefined){	objOptSet.szHeaderTxt = objOpt.szHeaderTxt; }
	if (objOpt.szFooterTxt != undefined){	objOptSet.szFooterTxt = objOpt.szFooterTxt; }
	if (objOpt.bShortUrl != undefined){	objOptSet.bShortUrl= objOpt.bShortUrl; }
	if (objOpt.bLongUrl != undefined){	objOptSet.bLongUrl = objOpt.bLongUrl; }
	if (objOpt.bShowCbShortUrl != undefined){	objOptSet.bShowCbShortUrl= objOpt.bShowCbShortUrl; }
	if (objOpt.bShowCbLongUrl != undefined){	objOptSet.bShowCbLongUrl = objOpt.bShowCbLongUrl; }
	if (objOpt.szParTime != undefined){	objOptSet.szParTime = objOpt.szParTime; }
	jsu_logObj (fn + "objOptSet", objOptSet);

	
	if (objOptSet.bJQPopup){
		// ------------- Specific options for Popup
		// First of ALL: we check if Popup can be used:
		if (typeof(Popup) == undefined || isIEPopup()){
			return alert ("SW ERROR: gaShortUrlList() with bJQPopup option set,  but JQPopup is not loaded!");
		}
		jsu_log ("JQPopup MODE is required. Popup() will be open");
	}else{
		// ------------- Specific options for TipFix
		objOptSet.bCloseBtn = true; 
    objOptSet.iTipWidth = objOptSet.iWidth; 		
	}
	UnTip(event);  // Untip (if a Tip was currently displayed)	
	jsu_log ("Prepare HTML Msg with the Box Layout that will be displayed...");
	// Set Global var
	ga_var.iTblWidth = objOptSet.iWidth - 20; // -20 for some lateral space
	ga_var.iTblMaxHeight = objOptSet.iTblMaxHeight;
	ga_var.bShortUrl = objOptSet.bShortUrl;
	ga_var.bLongUrl = objOptSet.bLongUrl;
	ga_var.szParTime = objOptSet.szParTime;
	ga_var.arObjGaList = arObjGaList; // Set in Global
	// Get the possible categories, for filter
	var arCat = new Array();
	arCat.push (GA_LABEL.FILTER_CAT_ALL);
	for (var i=0; i< arObjGaList.length; i++){
		var szCat = arObjGaList[i].cat;
		var bPresent = false;
		for (var k=0;k < arCat.length && !bPresent; k++){
			if (arCat[k] == szCat){
				bPresent = true;
			}
		}
		jsu_log (fn + "szCat=" + szCat + "  bPresent=" + bPresent);
		if (!bPresent){
			arCat.push(szCat);
		}
	}
	jsu_logObj (fn + "arCat=", arCat);
	ga_var.bJQPopup = objOptSet.bJQPopup;
	ga_var.arFilterCat = arCat;
	ga_var.iSelFilterCat = 0; // ALL
	var szTbl = '<table class="detNoBorder">';
	// --------------------------- HEADER
	
	var szCbShortUrl = "";
	var szCbLongUrl = "";
	jsu_log ("Prepare CB Short URL - bShowCbShortUrl=" + objOptSet.bShowCbShortUrl);
	if (objOptSet.bShowCbShortUrl){
		var szShortChecked = (ga_var.bShortUrl) ? "checked" : "";  
		szCbShortUrl =    '<input type="checkbox" id="cbShortUrl" ' + szShortChecked + ' onclick="ga_onclickShortUrl();"/>Show ShortUrl ';
	}
	jsu_log ("Prepare CB Short URL - bShowCbLongUrl=" + objOptSet.bShowCbLongUrl);
	if (objOptSet.bShowCbLongUrl){
		var szLongChecked = (ga_var.bLongUrl) ? "checked" : "";  
		szCbLongUrl =  '<input style="margin-left:20px" type="checkbox" id="cbLongUrl" ' + szLongChecked + ' onclick="ga_onclickLongUrl();" />Show LongUrl';
	}	
	szTbl += '<tr style="padding-top:5px;">' +
         '<td class="tiplBold" width="300px" style="padding-bottom:10px">'+ szCbShortUrl + szCbLongUrl +
         '</td>' +
	       '<td class="tipr" style="padding-right:10px;padding-bottom:10px">' + objOptSet.szHeaderTxt + '</td>' +
	   '</tr>';
	// Prepare the div that will contain the GoogleTable
	szTbl += '<tr><td colspan="2"> <div id="divTblGA" style="width:' + ga_var.iTblWidth + 'px;max-height:' 
	   + ga_var.iTblMaxHeight + 'px;overflow:auto;border: 1px solid;"></div></td></tr>' +
	  // Row for All Google Analytics Link  
	  '<tr><td colspan="2"> <div id="divAllGA" align="left" width="100%" style="width:100%;margin-top:10px;"></div></td></tr>'; 
	// Footer if present
	if (objOptSet.szFooterTxt != ""){
		var szTblNote =		  '<table class="note gaFooter"><tr> ' +
        '  <td><input class="note"></td> ' +
        '  <td> ' + objOptSet.szFooterTxt +'</td> ' +
        ' </tr></table> '; 
	  szTbl += '<tr style="padding-top:7px;padding-bottom:7px;"><td colspan="2" class="tipl">' + szTblNote + '</td></tr>';
	}  
 	szTbl += '</table>';
	if (objOptSet.bJQPopup){
		Popup (POPUP_TYPE.INFO,szTbl,{
			  bShowImg:false, // always false
			  szTitle: objOptSet.szTitle, 
			  iWidth: parseInt(objOptSet.iWidth)+30  // +30 for best layout and avoid scroolbar
			  });
	}
	else{
		// Show Tip With Empty Table
		TipFix (szTbl,event,objOptSet);
	}
	ga_varTblShow();
	jsu_log (fn + GALOG_FUN_END);
}


/**
 * Display the Page with Google analytics related to szShortUrl 
 * @param szShortUrl   {String}   Short URL generated with <a class="tipLink" href="https://goo.gl/">https://goo.gl/</a>
 * @param [objOpt] {Object}   
 * @param [objOpt] {Object}   
     <table class="jsDoc" border="2" cellpadding="2" cellspacing="2">
        <tr><td class="jsDocTitle">OPTION</td></tr>
        <tr><td class="jsDocParam">
        <ul>
	        <li> szParTime {String}:  [GA_PAR_TIME.all_time] Default ParTime ar Startup. 
	             &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/googleAnal.js/global.html#GA_PAR_TIME" target="_self">GA_PAR_TIME</a>  
	        </li>
	        <li> bNewWindow {Boolean} [true] if true show Google Analytics in a new Page </li>
        </ul> 
        </td></tr>
     </table>  
     
  	@example
 //--------------------------------------------------------- HTML   
  <input type="button"  class="googleAnal" id="googleAnal"  onclick="jsuGoogleAnalPage(event)" />
	  
  // --------------------------------- JS
													     
 */
function gaShortUrlPage(szShortUrl, objOpt){
	var fn = "[googleAnal.js gaShortUrlPage()] ";

	jsu_log (fn + GALOG_FUN_START);
	jsu_log (fn + "IN szShortUrl", szShortUrl);
	jsu_logObj (fn + "IN objOpt", objOpt);
	if (objOpt == undefined){
		objOpt = new Object();
	}
	//----------- Set Fields Available also in FREE JSU
	if (objOpt.szParTime == undefined){	objOpt.szParTime = GA_DEF.PAR_TIME; }
	if (objOpt.bNewWindow == undefined){	objOpt.bNewWindow = GA_DEF.NEW_WINDOW; }
  var szGaUrl = szShortUrl.replace('goo.gl','goo.gl/#analytics/goo.gl') + '/' + objOpt.szParTime;
	ga_GoToURL (szGaUrl,objOpt.bNewWindow);
	jsu_log (fn + GALOG_FUN_END);
}

/* --------------------------------------------------------------------------------------------------------------------------------------------------
 * 							LOCAL FUNCTION
 --------------------------------------------------------------------------------------------------------------------------------------------------- */


/*
 * Show the Table with the Link to GoogleAnalytics, basing on current Filter
 * GLOBAL ga_var
 */
function ga_varTblShow (){
	var fn = "[googleAnal.js ga_varTblShow()] ";

	jsu_log (fn + GALOG_FUN_START);
	var bSort = typeof (cSortTable) != "undefined"; // can we add cSortTable? Is It Loaded?
	
	var szTbl = '<table id="tblGoogle" class="det" BORDER="2" cellspacing="0" cellpadding="5" width="100%">'; 
	// Table with COLUMN Desc, Long URL, Short URL, Go To Google Analytics
	var szTblHea = '<tr class="detTitle" >';
	if (ga_var.bShortUrl){
		szTblHea += '<td class="tipc detTitle" width="15%">' + GA_LABEL.SHORT_URL + '</td> ';
	}
	if (ga_var.bLongUrl){
		szTblHea += '<td class="tipc detTitle" width="30%">' + GA_LABEL.LONG_URL + '</td> ';
	}	
	szTblHea +=  '<td class="tipc detTitle" width="16%">' + GA_LABEL.CAT + '</td> '+
	  '<td class="tipc detTitle" width="21%">' + GA_LABEL.DESC + '</td> '+
	  '<td class="tipc detTitle" width="14%">' + GA_LABEL.ANAL + '</td> '+
	'</tr>';
	szTbl += szTblHea;
	
	// -------------------------- HEADER_2 with Filter e AnalMode 
	iRowHeader = 2;
	var szSelectFilter = '<select class="detFilter" id="gaCat" title="' + GA_LABEL.FILTER_CAT_TITLE  + '"  style="width:100%;" onchange="ga_onchangeCat();">';
	var arCat = ga_var.arFilterCat;
	for (var i=0;i<arCat.length; i++){
		var szCat = arCat[i];
		var szSelected = (i == ga_var.iSelFilterCat) ? "selected" : "";
		var szOpt = '\n<option class="detFilter"  value="' + szCat +'" ' + szSelected + ' >' + szCat + '</option>';
		szSelectFilter +=szOpt;		
	}
	szSelectFilter += '\n</select>';
	//--- Filter for GoogleAnal Type (day,...)
	var szSelectParTime = '<select class="detFilter" id="gaFilterTime" title="' + GA_LABEL.PAR_TIME_TITLE  + '"  style="width:100%;"  onchange="ga_onchangeTime();" > ';
	var arTypeOpt = [{value: GA_PAR_TIME.all_time, text:GA_LABEL.PAR_TIME_ALL},
	                 {value: GA_PAR_TIME.month, text:GA_LABEL.PAR_TIME_MONTH},
	                 {value: GA_PAR_TIME.week, text:GA_LABEL.PAR_TIME_WEEK},
	                 {value: GA_PAR_TIME.day, text:GA_LABEL.PAR_TIME_DAY},
	                 {value: GA_PAR_TIME.two_hours,  text:GA_LABEL.PAR_TIME_2HOURS}
	                 ]; 
	for (var i=0; i<arTypeOpt.length; i++){
		var objOpt = arTypeOpt[i];
		var szSelected = (objOpt.value == ga_var.szParTime) ? "selected" : "";
		var szOpt = '\n<option class="detFilter" 	value="' + objOpt.value +'" ' + szSelected + ' >' + objOpt.text + '</option> ';
		szSelectParTime +=szOpt;		
	}
	szSelectParTime += '\n</select>';
	// jsu_logHtml (fn + "szSelectParTime",szSelectParTime);
	// ------------------------ add FilterCat
	var iColUrl = 0;
	if (ga_var.bShortUrl){ iColUrl++;}
	if (ga_var.bLongUrl){ iColUrl++;}
	var szTr = '<tr class="detFilter">';
	if (iColUrl > 0){
		szTr += '<td class="detFilter" colSpan="' + iColUrl + '" align="right" style="font-weight:normal;padding-right:5px;">' + 
		//  GA_LABEL.FILTER_CAT_HEADER + 
		'</td>';   
	}
	szTr += '<td class="detFilter">' + szSelectFilter + '</td>' +   
	'<td class="detFilter" align="right"  font-weight:normal;style="padding-right:5px;">' + 
	//  GA_LABEL.PAR_TIME_HEADER + 
	'</td>' +   
	'<td class="detFilter">' + szSelectParTime + '</td>' +   
	'</tr>';
	szTbl += szTr;	
	
  // --------------------------------------------- Insert the Link Rows 
	// Insert only if Filter Match and SET Global .iVisibleLink 	
	ga_var.iVisibleLink = 0; // Global
	jsu_logObj (fn , "iSelFilterCat =" + ga_var.iSelFilterCat);
	var arObj = ga_var.arObjGaList;
	var szCatSel = ga_var.arFilterCat[ga_var.iSelFilterCat];
	jsu_logObj (fn + "szCatSel=" + szCatSel + " arFilterCat=", ga_var.arFilterCat);
	for (var i=0; i< arObj.length; i++){
		var objGoogle = arObj[i];
		var szCat = objGoogle.cat;
		// Check if we haev to show this cat: bFilterCat must be set and the cat must match the Filter (iSelFilterCat=0 means ALL Categories FILTER)  
		var bShow = (ga_var.iSelFilterCat == 0 || szCat == szCatSel); 
		jsu_log (fn + "FilterSel=" + szCatSel + "  Cur cat=" + szCat + " --> bShow=" + bShow);
		if (bShow){
			var szId = "a_ga" + ga_var.iVisibleLink;
			ga_var.arszIdVis[ga_var.iVisibleLink] = szId; 
			// e.g From  https://goo.gl/HnNqnM to   https://goo.gl/#analytics/goo.gl/HnNqnM/week 
	    var szHref = objGoogle.shortUrl.replace('goo.gl','goo.gl/#analytics/goo.gl') + '/' + ga_var.szParTime;
			var szTr = '<tr>';
			if (ga_var.bShortUrl){
				szTr += '<td class="tipc">' + objGoogle.shortUrl + '</td> '; 
			}
			if (ga_var.bLongUrl){
				szTr += '<td class="tipl">' + objGoogle.longUrl + '</td> '; 
			}
			szTr +=	  '<td class="tipcBold">' + objGoogle.cat + '</td> '+
			  '<td class="tiplBold">' + objGoogle.desc + '</td> '+
			  '<td class="tipc"><a id="' + szId + '" class="tipLink" href="'+ szHref + '" target="_blank" >' + GA_LABEL.ANAL + GA_LINK_SEP + ga_var.szParTime + '</a></td> '+
	 	  '</tr>';
		  szTbl += szTr;	
			ga_var.iVisibleLink ++;
		}
	}
	szTbl += '</table></td></tr>';
	var div = document.getElementById('divTblGA');
	div.innerHTML = szTbl;

	jsu_logObj (fn + "ga_var.iVisibleLink=" + ga_var.iVisibleLink + "  ga_var.arszIdVis", ga_var.arszIdVis);
	
	if (ga_var.iVisibleLink > 1){
		// Add Div  with ALL Google Analytics
		var szLabel = GA_LABEL.ALL_TITLE.replace ('GOOGLE_ANAL_NUM',ga_var.iVisibleLink);
		var szLinkAll =  '<label><b>' + szLabel +'</b></label>' +
		  '<a id="a_gaAll" class="tipLink" href="javascript:ga_onclickAll();">' + GA_LABEL.ANAL_ALL + GA_LINK_SEP + ga_var.szParTime + '</a>';
		var div = document.getElementById('divAllGA');
		div.innerHTML = szLinkAll;
  }
	
	// Create Sort only if cSortTable is loaded
	if (bSort){
		jsu_log (fn + "Create SortTable bShortUrl=" + ga_var.bShortUrl + " ga_var.bLongUrl=" + ga_var.bLongUrl);
		var arSortCol = new Array();
		/*
		var arSortCol = [  {col: GA_LABEL.SHORT_URL},   
			         					{col: GA_LABEL.LONG_URL},        
			         					{col: GA_LABEL.CAT}, 
			         	        {col:GA_LABEL.DESC}, 
			         	        {col: GA_LABEL.ANAL}];
		*/
		if (ga_var.bShortUrl){
			arSortCol.push({col: GA_LABEL.SHORT_URL});
		}	
		if (ga_var.bLongUrl){
			arSortCol.push({col: GA_LABEL.LONG_URL});
		}	
		arSortCol.push({col: GA_LABEL.CAT});
		arSortCol.push({col: GA_LABEL.DESC});
		arSortCol.push({col: GA_LABEL.ANAL});
		

		var cSortTbl1 = new cSortTable("tblGoogle",arSortCol,{
			   iRowHeader:2,
			   iRowSortHeader:1,
			   bNoStartupSortIco:true
			   }); 
	}
	
	jsu_log (fn + GALOG_FUN_END);
}




/*
 * onclick in GoogleAnalytics cbShortUrl
 * Re design the Table of Google Analitycs basing on the cbShortUrl selected 
 */
function ga_onclickShortUrl(){
	var fn = "[googleAnal.js ga_onclickShortUrl] ";

	jsu_log (fn + GALOG_FUN_START);
	// Toggle
	ga_var.bShortUrl = (ga_var.bShortUrl) ? false : true;
  // redesign Tbl	
	ga_varTblShow();
	jsu_log (fn + GALOG_FUN_END);
}

/*
 * onclick in GoogleAnalytics cbLongUrl
 * Re design the Table of Google Analitycs basing on the cbShortUrl selected 
 */
function ga_onclickLongUrl(){
	var fn = "[googleAnal.js ga_onclickLongUrl] ";

	jsu_log (fn + GALOG_FUN_START);
	// Toggle
	ga_var.bLongUrl = (ga_var.bLongUrl) ? false : true; 
  // redesign Tbl	
	ga_varTblShow();
	jsu_log (fn + GALOG_FUN_END);
}



/*
 * onchange in GoogleAnalytics FilterCat
 * Re design the Table of Google Analitycs basing on the FilterCat selected 
 */
function ga_onchangeCat(){
	var fn = "[googleAnal.js ga_onchangeCat()] ";

	jsu_log (fn + GALOG_FUN_START);
	var select = document.getElementById ("gaCat");
	ga_var.iSelFilterCat = select.selectedIndex;
	jsu_log (fn + "iSelFilterCat=" + ga_var.iSelFilterCat);
	ga_varTblShow();
	jsu_log (fn + GALOG_FUN_END);
}

/*
 * onchange in GoogleAnalytics FilterType
 * Change global var and align href of the GoogleAnal Links 
 */
function ga_onchangeTime(){
	var fn = "[googleAnal.js ga_onchangeTime()t] ";

	jsu_log (fn + GALOG_FUN_START);
	var select = document.getElementById ("gaFilterTime");
	// e.g week
	ga_var.szParTime = select[select.selectedIndex].value;
	ga_var.szParTimeText = select[select.selectedIndex].text;
	jsu_log (fn + "szParTime=" + ga_var.szParTime + " szParTimeText=" + ga_var.szParTimeText);
  //--------------- align href
	var arObj = ga_var.arObjGaList;
	jsu_log (fn + "SET href for the " + arObj.length + " URLs that are currently displayed");
	for (var i=0; i< arObj.length; i++){
		var objGoogle = arObj[i];
		var szId = "a_ga" + i;
		var aEl = document.getElementById (szId);
		if (aEl != null){
			// e.g From  https://goo.gl/HnNqnM to   https://goo.gl/#analytics/goo.gl/HnNqnM/week 
	    var szHref = objGoogle.shortUrl.replace('goo.gl','goo.gl/#analytics/goo.gl') + '/' + ga_var.szParTime;
	    aEl.href = szHref;
	    aEl.innerHTML = GA_LABEL.ANAL + GA_LINK_SEP + ga_var.szParTimeText;
	  	jsu_log (fn + "szId=" + szId + " -  SET aEl.innerHTML " + aEl.innerHTML);
		}
	}	
	var aEl = document.getElementById ('a_gaAll');
  aEl.innerHTML = GA_LABEL.ANAL_ALL + GA_LINK_SEP + ga_var.szParTimeText;
	jsu_log (fn + "SET a_gaAll aEl.innerHTML=" + aEl.innerHTML);
	
	jsu_log (fn + GALOG_FUN_END);
}


/*
 *  
 * Open all the Google analytics pages
 */
function ga_onclickAll(){
	var fn = "[googleAnal.js ga_onclickAll()] ";

	jsu_log (fn + GALOG_FUN_START);
	ga_var.iLinkClickCur = 0;
	ga_clickSimulate(ga_var.iLinkClickCur);
	if (ga_var.iVisibleLink == 1){
		jsu_log (fn + "Only one anchor. Finish click simulation");
	}else {
		jsu_log (fn + "Create Timer of " + TMO_GA_CLICK_SIMUL_MS +" for Next Click Simulate");
		ga_var.tmoClick = setTimeout (ga_timerClickSimul,TMO_GA_CLICK_SIMUL_MS);
	}
	jsu_log (fn + GALOG_FUN_END);
}


/*
 * Simulate a Click on anchor
 * 
 * @param iLink  0,1...
 */
function ga_clickSimulate(iLink){
	var fn = "[googleAnal.js ga_clickSimulate()] ";

	jsu_log (fn + GALOG_FUN_START);
	
	jsu_logObj (fn + "ga_var.iVisibleLink=" + ga_var.iVisibleLink + "  ga_var.arszIdVis", ga_var.arszIdVis);
	var szId =  ga_var.arszIdVis[iLink];
  var aEl = document.getElementById (szId);
  jsu_log (fn + "simulate Click on anchor["+ iLink + "] with id=" + szId + " - href=" + aEl.href); 
  if (aEl.click != undefined){
  	jsu_log (fn + "a.click is defined. We call it");
  	aEl.click();
  }else {
  	jsu_log (fn + "a.click is NOT defined in this Browser");
  	if(document.createEvent) {
  		// e.g SAFARI or OPERA
  		jsu_log (fn + "el [" + i + "] of " + ga_var.iVisibleLink + " - We create the event to simulate the FIRST click. ");
  		var evt = document.createEvent("MouseEvents"); 
  		evt.initMouseEvent("click", true, true, window, 
  				0, 0, 0, 0, 0, false, false, false, false, 0, null);
  		var allowDefault = aEl.dispatchEvent(evt);
  	}
  }	
	jsu_log (fn + GALOG_FUN_END);
	
}


/*
 * Timer Elapsed
 */
function ga_timerClickSimul(){
	var fn = "[googleAnal.js ga_timerClickSimul()] ";

	jsu_log (fn + GALOG_FUN_START);
	clearTimeout (ga_var.tmoClick ); // for security.
	// e.g SAFARI or OPERA
	ga_clickSimulate(++ga_var.iLinkClickCur);
  if (ga_var.iLinkClickCur >= (ga_var.iVisibleLink- 1)){
		jsu_log (fn + "Click simulation COMPLETED for all " + ga_var.iVisibleLink + " anchors");
  }else {
		jsu_log (fn + "Create Timer of " + TMO_GA_CLICK_SIMUL_MS +" for Next Click Simulate");
    ga_var.tmoClick = setTimeout (ga_timerClickSimul,TMO_GA_CLICK_SIMUL_MS);
  }
	
	jsu_log (fn + GALOG_FUN_END);
}

/**
 * WE use an Hidden a tag, for compatibility with MObile (instead of using window.open)
 * 
 * @param szUrl
 * @param [bNewWindow] {Boolean} default true
 */
function ga_GoToURL(szUrl,bNewWindow){
	var fn = "[googleAnal.js ga_GoToURL()] ";
	try{
		jsu_log (fn + GALOG_FUN_START);
		if (bNewWindow == undefined){
			bNewWindow = true;
		}
		jsu_log (fn + "bNewWindow=" + bNewWindow);
		var aEl = document.getElementById(GA_HREF_HIDDEN_ID);
		if (aEl == undefined){
			jsu_log(fn + "add " + GA_HREF_HIDDEN_ID + " HIDDEN div and anchor to document.body");
			divHidden = document.createElement("div");
			divHidden.id = GA_DIV_HIDDEN_ID;		
			divHidden.innerHTML = GA_HREF_HIDDEN;
			document.body.appendChild(divHidden);
			aEl = document.getElementById(GA_HREF_HIDDEN_ID);
		}
		aEl.href = szUrl;
		jsu_log (fn + "aEl.href=" + aEl.href);
		aEl.target = (bNewWindow)? "_blank" : "_self";
	  if (aEl.click){
			jsu_log(fn + "a.click is defined. We call it");
			aEl.click();
	  } else {
			jsu_log(fn + "aEl.click is NOT defined in this Browser");
	  	if(document.createEvent) {
	  		// e.g SAFARI
				jsu_log(fn + "document.createEvent is defined in this Browser. We create the event to simulate the click");
	      var evt = document.createEvent("MouseEvents"); 
	      evt.initMouseEvent("click", true, true, window, 
	          0, 0, 0, 0, 0, false, false, false, false, 0, null); 
	      var allowDefault = aEl.dispatchEvent(evt);
	      // you can check allowDefault for false to see if
	      // any handler called evt.preventDefault().
	      // Firefox will *not* redirect to anchorObj.href
	      // for you. However every other browser will.
	  	}
	  }
		jsu_log (fn + GALOG_FUN_END);
	}catch (e){
		jsu_err (fn + "EXCEPTION: " + e.message);
	}	
}




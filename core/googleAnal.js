/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/ga.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_blank">Federico Levis</a> <BR/>
<b>Google Analytics Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/GoogleAnalytics.html" target="_blank">JSU GoogleAnalytics Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_blank">JSU API Documentation</a> <BR/>
<b>Description:</b>     JSU Google Analytics API <BR/>   
<b>REQUIRED:</b>        JSU:  tooltip.js locale-core.js jsu.css <BR/>
<b>OPTIONAL:</b>        JSU:  jslog.js dom-drag.js if you want to use jslog <BR/> 
<b>First Version:</b>     ver 1.0 - Feb 2014  <BR/>
<b>Current Version:</b>   ver 3.3 - Jul 2016  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_blank">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>JSDoc NOTES</b>  <BR/>
In "JSU Obfuscated Version"  JS Code is not visible with JSDoc Source Link  <BR/> 
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
 * Default Value of ga.js par
 */
var GA_DEF = {
		JSPOPUP: false,
		ALL_LINK: true, // default: Present the Link to display all the pages of Google analytics together
		WIDTH: 1100, // Box Width
		TBL_MAX_HEIGHT: 300,  // if more lines there will be scroolbar
		SHORT_URL: false,
		LONG_URL: false,
		PAR_TIME: GA_PAR_TIME.all_time
};



/*=========================================================================================
 * 					LOCAL  CONST
 ========================================================================================= */
var TMO_GA_CLICK_SIMUL_MS = 200; 


// Global For GoogleAnal
var ga_ga = {
		arObjGaList: null,   // arObjGaList received as PAR
		iTipWidth: 800,
		iVisibleLink: 0,  //used  by onclickBtnAllGoogle
		iSelFilterCat: 0 , // Current FilterCat
		szParTime: GA_PAR_TIME.all_time,  // Current FilterType
		iLinkClickCur:0,  // for Click Simulation in case of OPERA/SAFARI: current index (we have to arrivi till iVisibleLink-1
		tmoClick: null
};


var GA_LINK_SEP="&nbsp;&nbsp;&nbsp;";

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
	        <li> iWidth {Number}: [GA_DEF.WIDTH] Width  default GA_DEF.WIDTH (1200) </li> 
	        <li> iTblMaxHeight {Number}:  [GA_DEF.TBL_MAX_HEIGHT] You can set this max-height of the Tbl to limit the Height of the Box, that is automatically.    </li>
        </ul> 
        </td></tr>
     </table>
     <table class="jsDocWarn" border="3" cellpadding="2" cellspacing="2">
        <tr ><td class="jsDocTitleWarn">OPTION Available ONLY in FULL JSU</td></tr>
        <tr><td class="jsDocParam">
        <ul>
	        <li> bJQPopup {Boolean} [false] 
	        <ul>
		        <li> false: with his default value, the Box will be open in a FixedTip</li> 
		        <li> true: the Box will be open inside a JQPopup  </li>
	        </ul> 
	        
	        <li> szTitle{String}  default: 'Google Analytics'  </li> 
	        <li> bShortUrl {Boolean} [true] Show the colum with ShortUrl
	        <li> bLongUrl {Boolean} [true] Show the colum with LongUrl
	        <li> szHeaderTxt {String}: [DEF_GA_LABEL.HEADER] Message to put before the Table of Link to Analytics. You can set "" to remove it 
	        <li> szFooterTxt {String}: [DEF_GA_LABEL.FOOTER] Message to put after the Table of Link to Analytics. You can set "" to remove it 
	        <li> szParTime {String}:  [GA_PAR_TIME.all_time] Default ParTime ar Startup. 
	             &nbsp;see  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/ga.js/global.html#GA_PAR_TIME" target="_self">GA_PAR_TIME</a>  
	        </li>
        </ul> 
        </td></tr>
     </table>
     
  	@example
 //--------------------------------------------------------- HTML   
  <input type="button"  class="tipGoogleAnal" id="tipGoogleAnal"  onclick="jsuGoogleAnal(event)" />
	  
  // --------------------------------- JS
  function jsuGoogleAnal(event){	
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
    	bShortUrl: opt_ga_list.bShortUrl,   // ShortUrl visible or not at startup
    	bLongUrl: opt_ga_list.bLongUrl  // LongUrl visible or not at startup
    });
 }   
													     
 */
function gaShortUrlList(arObjGaList, event, objOpt){
	var fn = "[ga.js gaShortUrlList()] ";

	ga_log (fn + TIPLOG_FUN_START);
	ga_logObj (fn + "IN arObjGaList", arObjGaList);
	ga_logObj (fn + "IN objOpt", objOpt);
	// -------- FREE/FULL JSU Management -  only some Options are available in FREE Version: iWidth iTblMaxWidth
	// We Setup objOptTmp with default values, useful for FREE JSU case
	var objOptSet = {
		iTipWidth: GA_DEF.WIDTH,
		iWidth: GA_DEF.WIDTH,
		// --- only in FULL
		bJQPopup: GA_DEF.JSPOPUP,
		szTitle: GA_LABEL.DEF_TITLE,
	  bAllBtn : GA_DEF.ALL_LINK,
	  szHeaderTxt : GA_LABEL.DEF_HEADER,
	  szFooterTxt : GA_LABEL.DEF_FOOTER,
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
	// ---------------- Fields avalialble only in FULL Version (This code will be removed in FREE JSU)
	// ********************** FULL_JSU_START
	if (objOpt.szTitle != undefined){	objOptSet.szTitle = objOpt.szTitle; }
	if (objOpt.bJQPopup != undefined){objOptSet.bJQPopup = objOpt.bJQPopup; }
	if (objOpt.bAllGoogleAnalLink != undefined){	objOptSet.bAllBtn = objOpt.bAllBtn; }
	if (objOpt.szHeaderTxt != undefined){	objOptSet.szHeaderTxt = objOpt.szHeaderTxt; }
	if (objOpt.szFooterTxt != undefined){	objOptSet.szFooterTxt = objOpt.szFooterTxt; }
	if (objOpt.bShortUrl != undefined){	objOptSet.bShortUrl= objOpt.bShortUrl; }
	if (objOpt.bLongUrl != undefined){	objOptSet.bLongUrl = objOpt.bLongUrl; }
	if (objOpt.szParTime != undefined){	objOptSet.szParTime = objOpt.szParTime; }
	// ********************** FULL_JSU_END
	ga_logObj (fn + "objOptSet", objOptSet);

	
	
	if (objOptSet.bJQPopup){
		// ------------- Specific options for Popup
		// First of ALL: we check if Popup can be used:
		if (typeof(Popup) == undefined || isIEPopup()){
			return alert ("SW ERROR: gaShortUrlList() with bJQPopup option set,  but JQPopup is not loaded!");
		}
		ga_log ("JQPopup MODE is required. Popup() will be open");
	}else{
		// ------------- Specific options for TipFix
		objOptSet.bCloseBtn = true; 
    objOptSet.iTipWidth = objOptSet.iWidth; 		
	}
	UnTip(event);  // Untip (if a Tip was currently displayed)	
	ga_log ("Prepare HTML Msg with the Box Layout that will be displayed...");
	// Set Global var
	ga_ga.iTblWidth = objOptSet.iWidth - 20; // -20 for some lateral space
	ga_ga.iTblMaxHeight = objOptSet.iTblMaxHeight;  
	ga_ga.bShortUrl = objOptSet.bShortUrl;
	ga_ga.bLongUrl = objOptSet.bLongUrl;
	ga_ga.szParTime = objOptSet.szParTime;
	ga_ga.arObjGaList = arObjGaList; // Set in Global
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
		ga_log (fn + "szCat=" + szCat + "  bPresent=" + bPresent);
		if (!bPresent){
			arCat.push(szCat);
		}
	}
	ga_logObj (fn + "arCat=", arCat);
	ga_ga.bJQPopup = objOptSet.bJQPopup;
	ga_ga.arFilterCat = arCat;
	ga_ga.iSelFilterCat = 0; // ALL
	var szTbl = '<table class="detNoBorder">';
	// --------------------------- HEADER
	
	var szCbShowUrl = "";
	// ********************** FULL_JSU_START
	var szShortChecked = (ga_ga.bShortUrl) ? "checked" : "";  
	var szLongChecked = (ga_ga.bLongUrl) ? "checked" : "";  
	szCbShowUrl =    '<input type="checkbox" id="cbShortUrl" ' + szShortChecked + ' onclick="ga_onclickShortUrl();"/>Show ShortUrl ' +
       '<input style="margin-left:20px" type="checkbox" id="cbLongUrl" ' + szLongChecked + ' onclick="ga_onclickLongUrl();" />Show LongUrl';
	// ********************** FULL_JSU_START
	
	szTbl += '<tr style="padding-top:5px;">' +
         '<td class="tiplBold" width="300px" style="padding-bottom:10px">'+ szCbShowUrl +
         '</td>' +
	       '<td class="tipr" style="padding-right:10px;padding-bottom:10px">' + objOptSet.szHeaderTxt + '</td>' +
	   '</tr>';
	// Prepare the div that will contain the GoogleTable
	szTbl += '<tr><td colspan="2"> <div id="divTblGA" style="width:' + ga_ga.iTblWidth + 'px;max-height:' 
	   + ga_ga.iTblMaxHeight + 'px;overflow:auto;border: 1px solid;"></div></td></tr>' +
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
		// ********************** FULL_JSU_START
		Popup (POPUP_TYPE.INFO,szTbl,{
			  bShowImg:false, // always false
			  szTitle: objOptSet.szTitle, 
			  iWidth: objOptSet.iWidth+30  // +30 for best layout and avoid scroolbar
			  });
		// ********************** FULL_JSU_END
	}
	else{
		// Show Tip With Empty Table
		TipFix (szTbl,event,objOptSet);
	}
	ga_gaTblShow();
	ga_log (fn + TIPLOG_FUN_END);
}


/* --------------------------------------------------------------------------------------------------------------------------------------------------
 * 							LOCAL FUNCTION
 --------------------------------------------------------------------------------------------------------------------------------------------------- */


/*
 * Show the Table with the Link to GoogleAnalytics, basing on current Filter
 * GLOBAL ga_ga
 */
function ga_gaTblShow (){
	var fn = "[ga.js ga_gaTblShow()] ";

	ga_log (fn + TIPLOG_FUN_START);
	var bSort = typeof (cSortTable) != "undefined"; // can we add cSortTable? Is It Loaded?
	
	var szTbl = '<table id="tblGoogle" class="det" BORDER="2" cellspacing="0" cellpadding="5" width="100%">'; 
	// Table with COLUMN Desc, Long URL, Short URL, Go To Google Analytics
	var szTblHea = '<tr class="detTitle" >';
	if (ga_ga.bShortUrl){
		szTblHea += '<td class="tipc detTitle" width="15%">' + GA_LABEL.SHORT_URL + '</td> ';
	}
	if (ga_ga.bLongUrl){
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
	var arCat = ga_ga.arFilterCat;
	for (var i=0;i<arCat.length; i++){
		var szCat = arCat[i];
		var szSelected = (i == ga_ga.iSelFilterCat) ? "selected" : "";
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
		var szSelected = (objOpt.value == ga_ga.szParTime) ? "selected" : "";
		var szOpt = '\n<option class="detFilter" 	value="' + objOpt.value +'" ' + szSelected + ' >' + objOpt.text + '</option> ';
		szSelectParTime +=szOpt;		
	}
	szSelectParTime += '\n</select>';
	// ga_logHtml (fn + "szSelectParTime",szSelectParTime);
	// ------------------------ add FilterCat
	var iColUrl = 0;
	if (ga_ga.bShortUrl){ iColUrl++;}
	if (ga_ga.bLongUrl){ iColUrl++;}
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
	// Inser only if Filter Match and SET Global .iVisibleLink 	
	ga_ga.iVisibleLink = 0; // Global
	ga_logObj (fn , "iSelFilterCat =" + ga_ga.iSelFilterCat);
	var arObj = ga_ga.arObjGaList;
	var szCatSel = ga_ga.arFilterCat[ga_ga.iSelFilterCat];
	ga_logObj (fn + "szCatSel=" + szCatSel + " arFilterCat=", ga_ga.arFilterCat);
	for (var i=0; i< arObj.length; i++){
		var objGoogle = arObj[i];
		var szCat = objGoogle.cat;
		// Check if we haev to show this cat: bFilterCat must be set and the cat must match the Filter (iSelFilterCat=0 means ALL Categories FILTER)  
		var bShow = (ga_ga.iSelFilterCat == 0 || szCat == szCatSel); 
		ga_log (fn + "FilterSel=" + szCatSel + "  Cur cat=" + szCat + " --> bShow=" + bShow);
		if (bShow){
			var szId = "a_ga" + ga_ga.iVisibleLink;
			// e.g From  https://goo.gl/HnNqnM to   https://goo.gl/#analytics/goo.gl/HnNqnM/week 
	    var szHref = objGoogle.shortUrl.replace('goo.gl','goo.gl/#analytics/goo.gl') + '/' + ga_ga.szParTime;
			var szTr = '<tr>';
			if (ga_ga.bShortUrl){
				szTr += '<td class="tipc">' + objGoogle.shortUrl + '</td> '; 
			}
			if (ga_ga.bLongUrl){
				szTr += '<td class="tipl">' + objGoogle.longUrl + '</td> '; 
			}
			szTr +=	  '<td class="tipcBold">' + objGoogle.cat + '</td> '+
			  '<td class="tiplBold">' + objGoogle.desc + '</td> '+
			  '<td class="tipc"><a id="' + szId + '" class="tipLink" href="'+ szHref + '" target="_blank" >' + GA_LABEL.ANAL + GA_LINK_SEP + ga_ga.szParTime + '</a></td> '+
	 	  '</tr>';
		  szTbl += szTr;	
			ga_ga.iVisibleLink ++;
		}
	}
	szTbl += '</table></td></tr>';
	var div = document.getElementById('divTblGA');
	div.innerHTML = szTbl;

	if (ga_ga.iVisibleLink > 1){
		// Add Div  with ALL Google Analytics
		var szLabel = GA_LABEL.ALL_TITLE.replace ('GOOGLE_ANAL_NUM',ga_ga.iVisibleLink);
		var szLinkAll =  '<label><b>' + szLabel +'</b></label>' +
		  '<a id="a_gaAll" class="tipLink" href="javascript:ga_onclickAll();">' + GA_LABEL.ANAL_ALL + GA_LINK_SEP + ga_ga.szParTime + '</a>';
		var div = document.getElementById('divAllGA');
		div.innerHTML = szLinkAll;
  }
	
	// Create Sort only if cSortTable is loaded
	if (bSort){
		ga_log (fn + "Create SortTable bShortUrl=" + ga_ga.bShortUrl + " ga_ga.bLongUrl=" + ga_ga.bLongUrl);
		var arSortCol = new Array();
		/*
		var arSortCol = [  {col: GA_LABEL.SHORT_URL},   
			         					{col: GA_LABEL.LONG_URL},        
			         					{col: GA_LABEL.CAT}, 
			         	        {col:GA_LABEL.DESC}, 
			         	        {col: GA_LABEL.ANAL}];
		*/
		if (ga_ga.bShortUrl){
			arSortCol.push({col: GA_LABEL.SHORT_URL});
		}	
		if (ga_ga.bLongUrl){
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
	
	ga_log (fn + TIPLOG_FUN_END);
}




/*
 * onclick in GoogleAnalytics cbShortUrl
 * Re design the Table of Google Analitycs basing on the cbShortUrl selected 
 */
function ga_onclickShortUrl(){
	var fn = "[ga.js ga_onclickShortUrl] ";

	ga_log (fn + TIPLOG_FUN_START);
	// Toggle
	ga_ga.bShortUrl = (ga_ga.bShortUrl) ? false : true;
  // redesign Tbl	
	ga_gaTblShow();
	ga_log (fn + TIPLOG_FUN_END);
}

/*
 * onclick in GoogleAnalytics cbLongUrl
 * Re design the Table of Google Analitycs basing on the cbShortUrl selected 
 */
function ga_onclickLongUrl(){
	var fn = "[ga.js ga_onclickLongUrl] ";

	ga_log (fn + TIPLOG_FUN_START);
	// Toggle
	ga_ga.bLongUrl = (ga_ga.bLongUrl) ? false : true; 
  // redesign Tbl	
	ga_gaTblShow();
	ga_log (fn + TIPLOG_FUN_END);
}



/*
 * onchange in GoogleAnalytics FilterCat
 * Re design the Table of Google Analitycs basing on the FilterCat selected 
 */
function ga_onchangeCat(){
	var fn = "[ga.js ga_onchangeCat()] ";

	ga_log (fn + TIPLOG_FUN_START);
	var select = document.getElementById ("gaCat");
	ga_ga.iSelFilterCat = select.selectedIndex;
	ga_log (fn + "iSelFilterCat=" + ga_ga.iSelFilterCat);
	ga_gaTblShow();
	ga_log (fn + TIPLOG_FUN_END);
}

/*
 * onchange in GoogleAnalytics FilterType
 * Change global var and align href of the GoogleAnal Links 
 */
function ga_onchangeTime(){
	var fn = "[ga.js ga_onchangeTime()t] ";

	ga_log (fn + TIPLOG_FUN_START);
	var select = document.getElementById ("gaFilterTime");
	// e.g week
	ga_ga.szParTime = select[select.selectedIndex].value;
	ga_ga.szParTimeText = select[select.selectedIndex].text;
	ga_log (fn + "szParTime=" + ga_ga.szParTime + " szParTimeText=" + ga_ga.szParTimeText);
  //--------------- align href
	var arObj = ga_ga.arObjGaList;
	ga_log (fn + "SET href for the " + arObj.length + " URLs");
	for (var i=0; i< arObj.length; i++){
		var objGoogle = arObj[i];
		var szId = "a_ga" + i;
		var aEl = document.getElementById (szId);
		// e.g From  https://goo.gl/HnNqnM to   https://goo.gl/#analytics/goo.gl/HnNqnM/week 
    var szHref = objGoogle.shortUrl.replace('goo.gl','goo.gl/#analytics/goo.gl') + '/' + ga_ga.szParTime;
    aEl.href = szHref;
    aEl.innerHTML = GA_LABEL.ANAL + GA_LINK_SEP + ga_ga.szParTimeText;
	}	
	var aEl = document.getElementById ('a_gaAll');
  aEl.innerHTML = GA_LABEL.ANAL_ALL + GA_LINK_SEP + ga_ga.szParTimeText;
	
	ga_log (fn + TIPLOG_FUN_END);
}


/*
 *  
 * Open all the Google analytics pages
 */
function ga_onclickAll(){
	var fn = "[ga.js ga_onclickAll()] ";

	ga_log (fn + TIPLOG_FUN_START);
	ga_ga.iLinkClickCur = 0;
	ga_clickSimulate(ga_ga.iLinkClickCur);
	if (ga_ga.iVisibleLink == 1){
		ga_log (fn + "Only one anchor. Finish click simulation");
	}else {
		ga_log (fn + "Create Timer of " + TMO_GA_CLICK_SIMUL_MS +" for Next Click Simulate");
		ga_ga.tmoClick = setTimeout (ga_timerClickSimul,TMO_GA_CLICK_SIMUL_MS);
	}
	ga_log (fn + TIPLOG_FUN_END);
}


/*
 * Simulate a Click on anchor
 * 
 * @param iLink  0,1...
 */
function ga_clickSimulate(iLink){
	var fn = "[ga.js ga_clickSimulate()] ";

	ga_log (fn + TIPLOG_FUN_START);
	var szId = "a_ga" + iLink;
  var aEl = document.getElementById (szId);
  ga_log (fn + "simulate Click on anchor["+ iLink + "] with id=" + szId + " - href=" + aEl.href); 
  if (aEl.click != undefined){
  	ga_log (fn + "a.click is defined. We call it");
  	aEl.click();
  }else {
  	ga_log (fn + "a.click is NOT defined in this Browser");
  	if(document.createEvent) {
  		// e.g SAFARI or OPERA
  		ga_log (fn + "el [" + i + "] of " + ga_ga.iVisibleLink + " - We create the event to simulate the FIRST click. ");
  		var evt = document.createEvent("MouseEvents"); 
  		evt.initMouseEvent("click", true, true, window, 
  				0, 0, 0, 0, 0, false, false, false, false, 0, null);
  		var allowDefault = aEl.dispatchEvent(evt);
  	}
  }	
	ga_log (fn + TIPLOG_FUN_END);
	
}


/*
 * Timer Elapsed
 */
function ga_timerClickSimul(){
	var fn = "[ga.js ga_timerClickSimul()] ";

	ga_log (fn + TIPLOG_FUN_START);
	clearTimeout (ga_ga.tmoClick ); // for security.
	// e.g SAFARI or OPERA
	ga_clickSimulate(++ga_ga.iLinkClickCur);
  if (ga_ga.iLinkClickCur >= (ga_ga.iVisibleLink- 1)){
		ga_log (fn + "Click simulation COMPLETED for all " + ga_ga.iVisibleLink + " anchors");
  }else {
		ga_log (fn + "Create Timer of " + TMO_GA_CLICK_SIMUL_MS +" for Next Click Simulate");
    ga_ga.tmoClick = setTimeout (ga_timerClickSimul,TMO_GA_CLICK_SIMUL_MS);
  }
	
	ga_log (fn + TIPLOG_FUN_END);
}


/*
 * call jslog if it is defined
 * @param msg
 */
function ga_log(msg){
	if (typeof(jslog) == "function"){
		jslog (JSLOG_JSU, msg);
	}
}

/*
 * call jslogObj if it is defined
 * @param msg
 */
function ga_logObj(msg,obj){
	if (typeof(jslogObj) == "function"){
		jslogObj (JSLOG_JSU, msg,obj);
	}
}

/*
 * call jslogHtml if it is defined
 * @param msg
 */
function ga_logHtml(msg,szHtml){
	if (typeof(jslogHtml) == "function"){
		jslogHtml (JSLOG_JSU, msg,szHtml);
	}
}

/*
 * Show an Error because this szFeatNotSupported is not supported
 * @param szFeatNotSupported
 */
function ga_featNotSupported(szFeatNotSupported){
	var szMsg = "Sorry but this feature is NOT PRESENT in JSU Free Version:\n " + szFeatNotSupported + '\n\n\n' +
	  "To use this feature you have to download FULL JSU Version";
	if (typeof (Popup) != "undefined"){
		Popup (POPUP_TYPE.ERR,szMsg);
	}else {
		alert (szMsg);
	}
}


/* 
 * Check if it is Full version 
 * @returns {Boolean}
 */
function ga_isFullVersion(){
	var bFullVersion = false; // default = FreeVersion
	/* FULL_JSU_START */
	bFullVersion = true;   // FULL_JSU
	/* FULL_JSU_END */
	return bFullVersion;
}

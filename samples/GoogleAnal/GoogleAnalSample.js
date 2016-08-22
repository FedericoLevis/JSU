// ==================================================================== CONSTANT



//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;

var CSS_SEP = "-------------------------------------------------------------------------------------------";


/*---------------------------- VAR ------*/

var opt_ga_list_def = {
	bShortUrl : false,     // Only FULL
  bLongUrl : false		 // Only FULL
};


/* Current values */
var opt_ga_list = { 
	bShortUrl : opt_ga_list_def.bShortUrl,
	bLongUrl : opt_ga_list_def.bLongUrl
};




/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
	manage_par_opt(); // manage optional PAR show_opt, only for developer
		
}

/**
 * set different class depending on default/modified value
 */
function onchangeShortUrl(){
	var el = getElementById2("bShortUrl",true);
	opt_ga_list.bShortUrl = (selectGetSelVal (el) == "TRUE");
	el.className = (opt_ga_list.bShortUrl == opt_ga_list_def.bShortUrl) ?  "parDefault" : "parModified";	
}

/**
 * set different class depending on default/modified value
 */
function onchangeLongUrl(){
	var el = getElementById2("bLongUrl",true);
	opt_ga_list.bLongUrl = (selectGetSelVal (el) == "TRUE");
	el.className = (opt_ga_list.bLongUrl == opt_ga_list_def.bLongUrl) ?  "parDefault" : "parModified";	
}


/**
 * Call API googleAnalList()
 * 
 * @param event
 */
function sample1(event){

	var Fn = "[about.js jsuGoogleAnalList()] ";
	var GA_CAT_DOWN = "JSU DOWNLOAD";
	var GA_CAT_SAMPLE_FREE = "JSU FREE - SAMPLES";
	var GA_CAT_SAMPLE_FULL = "JSU FULL - SAMPLES";
	var GA_CAT_DOC_FREE = "JSU FREE - DOC";
	var GA_CAT_DOC_FULL = "JSU FULL - DOC";
	jslog (JSLOG_JSU,Fn + JSLOG_FUN_START);

  
	
	
  // Prepare arObjGoogleAnal: only shortUrl is mandatory  
  // In this case we populate all fields
  var arObjGoogleAnalList = [
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
       {shortUrl: JSU_SHORT_URL_DOC_JSLOG, longUrl: JSU_LONG_URL_DOC_JSLOG, cat:GA_CAT_DOC_FULL,desc:'JSU JSLog Doc'},
       {shortUrl: JSU_SHORT_URL_DOC_SORT, longUrl: JSU_LONG_URL_DOC_SORT, cat:GA_CAT_DOC_FREE,desc:'JSU SortTable Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_IEPOPUP, longUrl: JSU_LONG_URL_DOC_IEPOPUP, cat:GA_CAT_DOC_FULL,desc:'JSU IE Popup Doc'}
     ];
  // Get bPopup Option selected in this sample
  var bJSPopup = (selectGetSelVal (getElementById2("bJSPopup")) == "TRUE");  
  // show the TipFix with the List of Link
  googleAnalList(arObjGoogleAnalList,event,{
    	bShortUrl: false,   // ShortUrl not visible at startup
    	bLongUrl: false,  // LongUrl not visible at startup
    	szTitle:'JSU Google Analitycs',
    	iWidth: 1100,  // Width of the Box
    	iTblMaxHeight: 500,  // Max Height	 of the Table with the LIst of Google Analitycs Links 
      bJSPopup: bJSPopup 
    });

}



function onchangeSelectJSPopup(){
  // Get bPopup Option selected in this sample
  var bJSPopup = (selectGetSelVal (getElementById2("bJSPopup")) == "TRUE");
  if (bJSPopup && (typeof (Popup) == undefined || isIEPopup())){
  	alert ("bJSPopup=true cannot be used beacuse JSPopup feature is not Loaded!")
  	selectSetSelVal (getElementById2("bJSPopup"),"FALSE");
  } 
	
}


/**
 * GoogleAnalList Code Sample		
 * @param event
 */
function sampleCode1(event){
	var szTip = '/** \n' +
	' * Show a FixedTip with the Link to JSU Google Analytics \n' +
	' * @param event \n' +
	' */ \n' +
	'function jsuGoogleAnalList (event){ \n' +
	'   // Categories \n' +
	'	var GA_CAT_DOWN = "JSU DOWNLOAD"; \n' +
	'	var GA_CAT_SAMPLE_FREE = "JSU FREE - SAMPLES"; \n' +
	'	var GA_CAT_SAMPLE_FULL = "JSU FULL - SAMPLES"; \n' +
	'	var GA_CAT_DOC_FREE = "JSU FREE - DOC"; \n' +
	'	var GA_CAT_DOC_FULL = "JSU FULL - DOC"; \n' +
	'   \n' +
	'  // Prepare arObjGoogleAnal: only shortUrl is mandatory. In this case we populate all fields \n' +
	'  var arObjGoogleAnalList = [ \n' +
	'       {shortUrl: JSU_SHORT_URL_DOWNLOAD_FREE, longUrl: JSU_LONG_URL_DOWNLOAD_PAGE_FREE , cat:GA_CAT_DOWN,desc:\'Download JSU.ZIP FREE\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_ALL, longUrl: JSU_LONG_URL_SAMPLE_ALL,cat:GA_CAT_SAMPLE_FREE, desc:\'Main JSU Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_TIP, longUrl: JSU_LONG_URL_SAMPLE_TIP,cat:GA_CAT_SAMPLE_FREE, desc:\'Tooltip Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_SORT, longUrl: JSU_LONG_URL_SAMPLE_SORT, cat:GA_CAT_SAMPLE_FREE, desc:\'SortTable Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_IEPOPUP, longUrl: JSU_LONG_URL_SAMPLE_IEPOPUP, cat:GA_CAT_SAMPLE_FREE,desc:\'IE Popup Sample\'}, \n' +
	'       // -------------------------- \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC, longUrl: JSU_LONG_URL_DOC, cat:GA_CAT_DOC_FREE,desc:\'JSU Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_TIP, longUrl: JSU_LONG_URL_DOC_TIP, cat:GA_CAT_DOC_FREE,desc:\'JSU Tooltip Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_LOADING, longUrl: JSU_LONG_URL_DOC_LOADING, cat:GA_CAT_DOC_FREE,desc:\'JSU LoadingDiv Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_IEPOPUP, longUrl: JSU_LONG_URL_DOC_IEPOPUP, cat:GA_CAT_DOC_FREE,desc:\'JSU IE Popup Documentation\'} \n' +
	'     ]; \n' +
	'  // show the TipFix with the List of Link \n' +
	'  TipFixGoogleAnalList(arObjGoogleAnalList,event,{ \n' +
	'    	bShortUrl: false,   // ShortUrl not visible at startup \n' +
	'    	bLongUrl: false,  // LongUrl not visible at startup \n' +
	'    	szTitle:\'JSU Google Analitycs\', \n' +
	'    	iTipWidth: 1100  // Tip Width    \n' +
	'    }); \n' +
	'   \n' +
	'} \n';
	   TipFixCode(szTip,event,{
  	 szTitle:"JS Code of SAMPLE 3c: Google Analytics List"
  	 });
}


// ==================================================================== CONSTANT



//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;

var CSS_SEP = "-------------------------------------------------------------------------------------------";


/*---------------------------- VAR ------*/

var opt_ga_list_def = {
	// we will define these opt in opt_int, after loading JSU
	iWidth : undefined,   
	iTblMaxHeight : undefined,
	szParTime : undefined,
	//----
	bShortUrl : false,     // Only FULL
	bLongUrl : false		 // Only FULL
};


/* Current values */
var opt_ga_list = {
	iWidth : opt_ga_list_def.iWidth,
	iTblMaxHeight : opt_ga_list_def.iTblMaxHeight,
	szParTime : opt_ga_list_def.szParTime,
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
	sample_init();
}


/**
* Called when jsu is loaded
*/
function sample_init(){
	// init default (only now we can access to JSU var. before they could not still loaded)
	opt_ga_list_def.iWidth = GA_DEF.WIDTH;	opt_ga_list.iWidth = opt_ga_list_def.iWidth;
	opt_ga_list_def.iTblMaxHeight = GA_DEF.TBL_MAX_HEIGHT;	opt_ga_list.iTblMaxHeight = opt_ga_list_def.iTblMaxHeight;
	opt_ga_list_def.szParTime = GA_PAR_TIME.all_time ;	opt_ga_list.szParTime = opt_ga_list_def.szParTime;
	//
	
  var arWidth=	[	
            	 	[GA_DEF.WIDTH-400,GA_DEF.WIDTH-400],   
             	 	[GA_DEF.WIDTH-200,GA_DEF.WIDTH-200],   
             	 	[GA_DEF.WIDTH,GA_DEF.WIDTH], // 1100
             	 	[GA_DEF.WIDTH+200,GA_DEF.WIDTH+200],   
        ];
	selectPopulate (getElementById2 ("width",true),arWidth,GA_DEF.WIDTH);
  var arParTime=	[	
              	 	[GA_PAR_TIME.all_time,GA_PAR_TIME.all_time],   
              	 	[GA_PAR_TIME.month,GA_PAR_TIME.month],   
              	 	[GA_PAR_TIME.week,GA_PAR_TIME.week],   
              	 	[GA_PAR_TIME.day,GA_PAR_TIME.day],   
              	 	[GA_PAR_TIME.two_hours,GA_PAR_TIME.two_hours]   
         ];
 	selectPopulate (getElementById2 ("parTime",true),arParTime, GA_PAR_TIME.all_time);
	
}


/**
 * set different class depending on default/modified value
 */
function onchangeParTime(){
	var Fn = "[GoogleAnalSample.js onchangeParTime()] ";
	var el = getElementById2("parTime",true);
	opt_ga_list.szParTime = selectGetSelVal (el); 
	jslog (JSLOG_DEBUG,Fn + "SET opt_ga_list.szParTime=" + opt_ga_list.szParTime);
	var szClass = (opt_ga_list.szParTime == opt_ga_list_def.szParTime) ?  "parDefault" : "parModified";	
	el.parentNode.className = szClass;
	jslog (JSLOG_DEBUG,Fn + "SET className=" + szClass);
}

/**
 * set different class depending on default/modified value
 */
function onchangeWidth(){
	var Fn = "[GoogleAnalSample.js onchangeWidth()] ";
	var el = getElementById2("width",true);
	opt_ga_list.iWidth = selectGetSelVal (el); 
	var szClass = (opt_ga_list.iWidth == opt_ga_list_def.iWidth) ?  "parDefault" : "parModified";	
	el.parentNode.className = szClass;
	jslog (JSLOG_DEBUG,Fn + "SET className=" + szClass);
}


/**
 * set different class depending on default/modified value
 * NB: NOT allowed in FREE_JSU
 */
function onchangeShortUrl(){
	var Fn = "[GoogleAnalSample.js onchangeShortUrl()] ";
	var el = getElementById2("bShortUrl",true);
	opt_ga_list.bShortUrl = (selectGetSelVal (el) == "TRUE");
	var szClass = (opt_ga_list.bShortUrl == opt_ga_list_def.bShortUrl) 
	    ?	"parDefault" 
			: ((JSU_FREE) ? "parNotAllowed" : "parModified");
	el.parentNode.className = szClass;
	jslog (JSLOG_DEBUG,Fn + "SET className=" + szClass);
}

/**
 * set different class depending on default/modified value
 */
function onchangeLongUrl(){
	var Fn = "[GoogleAnalSample.js onchangeLongUrl()] ";
	var el = getElementById2("bLongUrl",true);
	opt_ga_list.bLongUrl = (selectGetSelVal (el) == "TRUE");
  var szClass = (opt_ga_list.bLongUrl == opt_ga_list_def.bLongUrl) 
	    ?	"parDefault" 
			: ((JSU_FREE) ? "parNotAllowed" : "parModified");
	el.parentNode.className = szClass;
	jslog (JSLOG_DEBUG,Fn + "SET className=" + szClass);
}


/**
 * Call API googleAnalList()
 * 
 * @param event
 * @param bJQPopup
 */
function sample1(event,bJQPopup){

	var Fn = "[GoogleAnalSample.js jsuGoogleAnalList()] ";
	var GA_CAT_DOWN = "JSU DOWNLOAD";
	var GA_CAT_SAMPLE_FREE = "JSU FREE - SAMPLES";
	var GA_CAT_DOC_FREE = "JSU FREE - DOC";
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_START);
	jslog (JSLOG_DEBUG,Fn + "IN: bJQPopup" + bJQPopup);

  
  // DAFARE se bJQPopup e non e` definito mostro dsezione LimitedFeature
	if (!checkFreeJsuSample1()){
		return; /// Validation ERR
	}
	elementShow (getElementById2('divSampleErr1'),false); // Hide Err Sect if visible

	
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
       {shortUrl: JSU_SHORT_URL_DOC_JSLOG, longUrl: JSU_LONG_URL_DOC_JSLOG, cat:GA_CAT_DOC_FREE,desc:'JSU JSLog Doc'},
       {shortUrl: JSU_SHORT_URL_DOC_SORT, longUrl: JSU_LONG_URL_DOC_SORT, cat:GA_CAT_DOC_FREE,desc:'JSU SortTable Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_IEPOPUP, longUrl: JSU_LONG_URL_DOC_IEPOPUP, cat:GA_CAT_DOC_FREE,desc:'JSU IE Popup Doc'}
     ];
  // show the TipFix with the List of Link
  googleAnalList(arObjGoogleAnalList,event,{
    	szTitle:'JSU Google Analitycs',
    	iWidth: opt_ga_list.iWidth,  // Width of the Box
    	iTblMaxHeight: opt_ga_list.iTblMaxHeight,  // Max Height	 of the Table with the LIst of Google Analitycs Links
    	szParTime: opt_ga_list.szParTime,   // Initial Par Time
      bJQPopup: bJQPopup,
    	bShortUrl: opt_ga_list.bShortUrl,   // ShortUrl visible or not at startup
    	bLongUrl: opt_ga_list.bLongUrl  // LongUrl visible or not at startup
    });

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


/**
 * 
 * @returns {Boolean}   true if check OK
 */
function checkFreeJsuSample1(){
	var Fn = "[GoogleAnalSample.js checkFreeJsu()] ";
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_START);
	jslog (JSLOG_DEBUG,Fn + "JSU_FREE=" + JSU_FREE);
	if (JSU_FREE){
		var bErr= false;
		var szErr = "Following Parameters are <b>allowed ONLY in FULL JSU Version</b>:<ul>";
		if (opt_ga_list.bShortUrl != opt_ga_list_def.bShortUrl){
			szErr += '<li class="errBold">bShortUrl</li>';
			bErr= true;
		}
		if (opt_ga_list.bLongUrl != opt_ga_list_def.bLongUrl){
			szErr += '<li class="errBold">bLongUrl</li>';
			bErr= true;
		}
		szErr +="</ul>";
		if (bErr){
			errFreeJsu(1,szErr,JSU_LONG_URL_DOC_GA_ONLYFULL);
      return false;			
		}	
	}
	jslog (JSLOG_DEBUG,Fn + "return true" + JSLOG_FUN_END);
	return true; 
}



/**
 * DAFARE metere in about.js 
 * Show SEc withh Error for apr not present in FREE JSU
 * 
 * @param iSample  1,2,    idex of Sample
 * @param szErr
 * @param szUrlDoc  Url of Document to go to see Feature
 */
function errFreeJsu(iSample,szErr){
	var szSectMsg = '<table width="100%"><tr>' +
  '  <td class="PopupImgWarning" width="80px"></td>' +
  '  <td class="tipl errSample">' + szErr + '</td>' +
  '</tr>' +
  '<tr>' +
  '  For the deatils see<td><label class="allSampleLimit"><a class="tipLink" href="javascript:showJSUVersionParLimit();">Description of the features not available in FREE JSU</a></label>' +  
  '</tr></table>';
	// DAFARE URL
	var elErrSect = getElementById2('divSampleErr' + iSample,true);
	elErrSect.innerHTML = szSectMsg;
	elementShow (elErrSect,true);
}




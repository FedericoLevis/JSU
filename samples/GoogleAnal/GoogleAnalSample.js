// ==================================================================== CONSTANT



//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;

var CSS_SEP = "-------------------------------------------------------------------------------------------";


/*---------------------------- VAR ------*/
var b_enCheckOpt= true;   // used to disable during setup Option TipFix

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
 	
	opt_ga_list_def.iWidth = GA_DEF.WIDTH;
	opt_ga_list.iWidth = opt_ga_list_def.iWidth ;
	opt_ga_list_def.iTblMaxHeight = GA_DEF.TBL_MAX_HEIGHT;
	opt_ga_list.iTblMaxHeight = opt_ga_list_def.iTblMaxHeight ;
	opt_ga_list_def.szParTime = GA_DEF.PAR_TIME;
	opt_ga_list.szParTime = opt_ga_list_def.szParTime ;
  if (JSU_FREE){
  	for (var i=0; i<2; i++){
    	elementShow (getElementById2("sampleLimit" + i, false), true,"inline");
  	}
  	// disable
  	var input = getElementById2("googleAnalListJQPopup", true);
  	input.className = "googleAnalListJQPopupDisabled";
  	input.disabled = true;
  			
  }
  
	
}

//------------------------------ PAR ALLOWED ALWAYS (FREE and FULL)


/**
 * set different class depending on default/modified value
 */
function onchangeWidth(){
	opt_ga_list.iWidth = selectGetSelVal (getElementById2("iWidth",true)); 
}

/**
 */
function onchangeTblMaxHeight(){
	opt_ga_list.iTblMaxHeight = selectGetSelVal (getElementById2("iTblMaxHeight",true)); 
}



// ------------------------------ PAR NOT ALLOWD in FREE

/**
 */
function onchangeParTime(){
	opt_ga_list.szParTime = selectGetSelVal (getElementById2("szParTime",true)); 
}


/**
 */
function onchangeShortUrl(){
	opt_ga_list.bShortUrl = (selectGetSelVal (getElementById2("bShortUrl",true)) == "TRUE");
}

/**
 */
function onchangeLongUrl(){
	opt_ga_list.bLongUrl = (selectGetSelVal (getElementById2("bLongUrl",true)) == "TRUE");
}


/**
 * Call API gaShortUrlList()
 * 
 * @param event
 * @param bJQPopup {Boolean}  true if we have to show the List in JQPopup
 */
function sample1(event,bJQPopup){

	var Fn = "[GoogleAnalSample.js sample1)] ";
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
        bJQPopup: bJQPopup,
    	szTitle:'JSU Google Analitycs',
    	iWidth: opt_ga_list.iWidth,  // Width of the Box
    	iTblMaxHeight: opt_ga_list.iTblMaxHeight,  // Max Height	 of the Table with the LIst of Google Analitycs Links
    	szParTime: opt_ga_list.szParTime,   // Initial Par Time
    	bShortUrl: opt_ga_list.bShortUrl,   // ShortUrl visible or not at startup
    	bLongUrl: opt_ga_list.bLongUrl  // LongUrl visible or not at startup
    });

}



/**
 * gaList Code Sample		
 * @param event
 */
function sampleCode1(event){
	var szTip = '/**\n'+
	'* Call API gaShortUrlList() \n'+
	'* \n'+
	'* @param event \n'+
	'* @param bJQPopup {Boolean}  true if we have to show the List in JQPopup \n'+
	'*/ \n'+
	'	function sample1(event,bJQPopup){ \n'+
	' var GA_CAT_DOWN = "JSU DOWNLOAD"; \n' +
	'	var GA_CAT_SAMPLE_FREE = "JSU FREE - SAMPLES"; \n' +
	'	var GA_CAT_DOC_FREE = "JSU FREE - DOC"; \n' +
	'	 \n' +
	'  // Prepare arObjGaList: only shortUrl is mandatory   \n' +
	'  // In this case we populate all fields \n' +
	'  var arObjGaList = [ \n' +
	'       {shortUrl: JSU_SHORT_URL_DOWNLOAD_FREE, longUrl: JSU_LONG_URL_DOWNLOAD_PAGE_FREE , cat:GA_CAT_DOWN,desc:\'Download JSU.ZIP FREE\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_ALL, longUrl: JSU_LONG_URL_SAMPLE_ALL,cat:GA_CAT_SAMPLE_FREE, desc:\'Main JSU Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_TIP, longUrl: JSU_LONG_URL_SAMPLE_TIP,cat:GA_CAT_SAMPLE_FREE, desc:\'Tooltip Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_LOADING, longUrl: JSU_LONG_URL_SAMPLE_LOADING, cat:GA_CAT_SAMPLE_FREE,desc:\'LoadingDiv Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_JSLOG, longUrl: JSU_LONG_URL_SAMPLE_JSLOG, cat:GA_CAT_SAMPLE_FREE,desc:\'JSLog Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_SORT, longUrl: JSU_LONG_URL_SAMPLE_SORT, cat:GA_CAT_SAMPLE_FREE, desc:\'SortTable Sample\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_SAMPLE_IEPOPUP, longUrl: JSU_LONG_URL_SAMPLE_IEPOPUP, cat:GA_CAT_SAMPLE_FREE,desc:\'IE Popup Sample\'}, \n' +
	'       // -------------------------- \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC, longUrl: JSU_LONG_URL_DOC, cat:GA_CAT_DOC_FREE,desc:\'JSU Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_TIP, longUrl: JSU_LONG_URL_DOC_TIP, cat:GA_CAT_DOC_FREE,desc:\'JSU Tooltip Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_LOADING, longUrl: JSU_LONG_URL_DOC_LOADING, cat:GA_CAT_DOC_FREE,desc:\'JSU LoadingDiv Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_JSLOG, longUrl: JSU_LONG_URL_DOC_JSLOG, cat:GA_CAT_DOC_FREE,desc:\'JSU JSLog Doc\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_SORT, longUrl: JSU_LONG_URL_DOC_SORT, cat:GA_CAT_DOC_FREE,desc:\'JSU SortTable Documentation\'}, \n' +
	'       {shortUrl: JSU_SHORT_URL_DOC_IEPOPUP, longUrl: JSU_LONG_URL_DOC_IEPOPUP, cat:GA_CAT_DOC_FREE,desc:\'JSU IE Popup Doc\'} \n' +
	'     ]; \n' +
	'  // show the TipFix with the List of Link \n' +
	'  gaShortUrlList(arObjGaList,event,{ \n' +
	'        bJQPopup: bJQPopup, \n' +
	'    	szTitle:\'JSU Google Analitycs\', \n' +
	'    	iWidth: opt_ga_list.iWidth,  // Width of the Box \n' +
	'    	iTblMaxHeight: opt_ga_list.iTblMaxHeight,  // Max Height	 of the Table with the LIst of Google Analitycs Links \n' +
	'    	szParTime: opt_ga_list.szParTime,   // Initial Par Time \n' +
	'    	bShortUrl: opt_ga_list.bShortUrl,   // ShortUrl visible or not at startup \n' +
	'    	bLongUrl: opt_ga_list.bLongUrl  // LongUrl visible or not at startup \n' +
	'    });'  ;
	TipFixCode(szTip,event,{
  	 szTitle:"JS Code of SAMPLE 1: Google Analytics List",iTipWidth:1000,iTipMaxHeight:500
  	 });
}



/**
 * Show the Floating Tip
 * @param event
 */
function sample1OptTip (event){
	Tip('Show the Box to Set <b>gaShortUrlList Option</b>');
}


/**
 * Show Option for Sample1
 * @param event
 */
function sample1Opt (event){
	var szFreeLimit = "";
	var szPar = "jsuParPresent";
	if (JSU_FREE){
		szFreeLimit =  '<div align="left" style="margin-top:5px;margin-left:5px;margin-bottom:0px;"> <table class="note"><tr>' +
        '  <td><input class="note"></td> ' +
  			'  <td> <label style="background-color:Yellow;">Yellow Options</label> are NOT avaliable in FREE JSU -  see &nbsp;<a class="tipLink" href="javascript:showJSUVersionParLimit();">JSU Options available only in FULL Version</a></td>' +  
        '</tr></table></div>';			
		szPar = "jsuParAbsent";
	}	

	var szOpt = szFreeLimit +
	'  <table class="tipNoBorder" width ="800px"> ' +
	'               <tr> ' +
	'                 <td class="tipr" > ' +
	'                  <table class="det" BORDER="2" cellpadding="3" cellspacing="3"  width ="100%"> ' +
	'                    <tr class="detTitle"><td colspan="5">Main <a class="tipLinkJsLog" href="https://rawgit.com/FedericoLevis/JSUDoc/master/googleAnal.js/global.html#gaShortUrlList" target="_blank">gaShortUrlList() API Options</a></td></tr> ' +
	'                    <tr class="detTitle2"><td >FULL<BR/>JSU</td><td>FREE<BR/>JSU</td><td width="70px">OPTION</td><td width="120px">VALUE</td><td>DESCRIPTION</td></tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="tipcBold">iWidth</td> ' +
	'                      <td class="jsuParPresent"> ' +
	'                        <select id="iWidth"  style="width:80px;" onchange="onchangeWidth();">   ' +
	'                      </td> ' +
	'                      <td class="tipl">Width (px) of the Box displayed</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="tipcBold">iTblMaxHeight</td> ' +
	'                      <td class="jsuParPresent"> ' +
	'                        <select id="iTblMaxHeight"  style="width:80px;" onchange="onchangeTblMaxHeight();">   ' +
	'                      </td> ' +
	'                      <td class="tipl">Max Height (px) of the Table with Google Analytics Links</td>  ' +
	'                    </tr> ' +
	//-------------------------------------------- ONLY IN FULL JSU
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptAbsent"></td> ' +
	'                      <td class="tipcBold">szParTime</td> ' +
	'                      <td class="' + szPar + '"> ' +
	'                        <select id="szParTime"  style="width:80px;" onchange="onchangeParTime();">   ' +
	'                      </td> ' +
	'                      <td class="tipl">Initial Value of <b>Google Analtycs Time</b> Parameter</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptAbsent"></td> ' +
	'                      <td class="tipcBold">bShortUrl</td> ' +
	'                      <td class="' + szPar + '"> ' +
	'                        <select id="bShortUrl"  style="width:80px;" onchange="onchangeShortUrl();">   ' +
	'                              <option selected value="FALSE" >false</i></option>  ' +
	'                              <option value="TRUE" >true</option>  ' +
	'                         </select>                 ' +
	'                      </td> ' +
	'                      <td class="tipl">Show Column ShortURL</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptAbsent"></td> ' +
	'                      <td class="tipcBold">bLongUrl</td> ' +
	'                      <td class="' + szPar + '"> ' +
	'                        <select id="bLongUrl"  style="width:80px;" onchange="onchangeLongUrl();">   ' +
	'                              <option selected value="FALSE" >false</i></option>  ' +
	'                              <option value="TRUE" >true</option>  ' +
	'                         </select>                 ' +
	'                      </td> ' +
	'                      <td class="tipl">Show Column LongURL</td>  ' +
	'                    </tr> ' +
	'                   </table>	 ' +
	'                 </td> ' +
	'               </tr> ' +
	'            </table> ' ;
	TipFix (szOpt,event,{szTitle:"gaShortUrlList OPTION"});	
// Init
	
  var arWidth=	[	
            	 	[GA_DEF.WIDTH-400,GA_DEF.WIDTH-400],   
             	 	[GA_DEF.WIDTH-200,GA_DEF.WIDTH-200],   
             	 	[GA_DEF.WIDTH,GA_DEF.WIDTH], // 1100
             	 	[GA_DEF.WIDTH+200,GA_DEF.WIDTH+200],   
        ];
	selectPopulate (getElementById2 ("iWidth",true),arWidth,opt_ga_list.iWidth);

  var arTblMaxHeight=	[	
             	 	[undefined,'NO LIMIT'],   
              	 	[150,150],   
              	 	[300,300], 
              	 	[500,500]   
         ];
	selectPopulate (getElementById2 ("iTblMaxHeight",true),arTblMaxHeight,opt_ga_list.iTblMaxHeight);
	
	var arParTime=	[	
              	 	[GA_PAR_TIME.all_time,GA_PAR_TIME.all_time],   
              	 	[GA_PAR_TIME.month,GA_PAR_TIME.month],   
              	 	[GA_PAR_TIME.week,GA_PAR_TIME.week],   
              	 	[GA_PAR_TIME.day,GA_PAR_TIME.day],   
              	 	[GA_PAR_TIME.two_hours,GA_PAR_TIME.two_hours]   
         ];
	var selectParTime = getElementById2 ("szParTime",true);
	var selectShortUrl = getElementById2 ("bShortUrl",true);
	var selectLongUrl = getElementById2 ("bLongUrl",true);
 	selectPopulate (selectParTime,arParTime, opt_ga_list.szParTime);
  // set cur val
 	selectSelValue (selectShortUrl,opt_ga_list.bShortUrl ? "TRUE" : "FALSE");
 	selectSelValue (selectLongUrl,opt_ga_list.bLongUrl ? "TRUE" : "FALSE");
	if (JSU_FREE){
		// disable Opt not availble in FREE JSU
		selectParTime.disabled=true;
		selectShortUrl.disabled=true;
		selectLongUrl.disabled=true;
	}	
	
}


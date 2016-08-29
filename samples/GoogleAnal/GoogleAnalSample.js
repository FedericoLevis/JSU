// ==================================================================== CONSTANT



//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;



/*---------------------------- VAR ------*/



/* Current values */
var opt_ga_list = {
	iWidth : 900,
	iTblMaxHeight : 500,
	szParTime : 'all_time',
	bShortUrl : false,
	bLongUrl : false
};


/* Current values */
var opt_ga_page = {
	szShortUrl : "https://goo.gl/HnNqnM", 
	bNewWindow : true,
	szParTime : 'all_time'
};



/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
	initSampleCmn(); // manage optional PAR show_opt, only for developer
	sample_init();
}


/**
* Called when jsu is loaded
*/
function sample_init(){
 	
	opt_ga_list.iWidth = GA_DEF.WIDTH ;	
	opt_ga_list.iTblMaxHeight = GA_DEF.TBL_MAX_HEIGHT;
	opt_ga_list.szParTime = GA_DEF.PAR_TIME;
	opt_ga_page.szParTime = GA_DEF.PAR_TIME;
	opt_ga_page.szShortUrl = JSU_SHORT_URL_DOWNLOAD_FREE
  if (isJsuFree()){
  	// disable
  	var input = getElementById2("googleAnalListJQPopup", true);
  	input.className = "googleAnalListJQPopupDisabled";
  	input.disabled = true;
  }
	
}



/* ---------------------------------------------------------
 * 				SAMPLE_1
 --------------------------------------------------------- */

//------------------------------ PAR ALLOWED ALWAYS (FREE and FULL)



/**
 * Apply Sample1Opt
 */
function sample1OptApply(){
	opt_ga_list.bLongUrl = (selectGetSelVal (getElementById2("bLongUrl",true)) == "TRUE");
	opt_ga_list.iWidth = selectGetSelVal (getElementById2("iWidth",true)); 
	opt_ga_list.iTblMaxHeight = selectGetSelVal (getElementById2("iTblMaxHeight",true)); 
	opt_ga_list.szParTime = selectGetSelVal (getElementById2("szParTime",true)); 
	opt_ga_list.bShortUrl = (selectGetSelVal (getElementById2("bShortUrl",true)) == "TRUE");
}

/**
 * Apply Sample2Opt
 */
function sample2OptApply(){
	var fn = "[sample2OptApply()] ";
	opt_ga_page.szShortUrl = getElementById2("szShortUrl2",true).value; 
	opt_ga_page.szParTime = selectGetSelVal (getElementById2("szParTime2",true)); 
	opt_ga_page.bNewWindow = (selectGetSelVal (getElementById2("bNewWindow2",true)) == "TRUE");
	jslogObj (JSLOG_DEBUG,fn + "opt_ga_page", opt_ga_page);
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
 * Show Option for Sample1
 * @param event
 */
function sample1Opt (event){
	var szFreeLimit = "";
	var szPar = "jsuParPresent";
	if (isJsuFree()){
		szFreeLimit =  '<div align="left" style="margin-top:5px;margin-left:5px;margin-bottom:0px;"> <table class="note"><tr>' +
        '  <td><input class="note"></td> ' +
  			'  <td> <label style="background-color:Yellow;">Yellow Options</label> are NOT avaliable in FREE JSU -  see &nbsp;<a class="tipLink" href="javascript:showJSUVersionParLimit();">JSU Options available only in FULL Version</a></td>' +  
        '</tr></table></div>';			
		szPar = "jsuParAbsent";
	}	

	var szOpt = szFreeLimit + ' <div align="center" style="width:700px"><table class="tipNoBorder" width="800px"> ' +
	'  <table class="tipNoBorder" width ="100%"> ' +
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
	'                        <select id="iWidth"  style="width:80px;">   ' +
	'                      </td> ' +
	'                      <td class="tipl">Width (px) of the Box displayed</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="tipcBold">iTblMaxHeight</td> ' +
	'                      <td class="jsuParPresent"> ' +
	'                        <select id="iTblMaxHeight"  style="width:80px;" >   ' +
	'                      </td> ' +
	'                      <td class="tipl">Max Height (px) of the Table with Google Analytics Links</td>  ' +
	'                    </tr> ' +
	//-------------------------------------------- ONLY IN FULL JSU
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptAbsent"></td> ' +
	'                      <td class="tipcBold">szParTime</td> ' +
	'                      <td class="' + szPar + '"> ' +
	'                        <select id="szParTime"  style="width:80px;" >   ' +
	'                      </td> ' +
	'                      <td class="tipl">Initial Value of <b>Google Analytics Time</b> Parameter</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="jsuOptPresent"></td> ' +
	'                      <td class="jsuOptAbsent"></td> ' +
	'                      <td class="tipcBold">bShortUrl</td> ' +
	'                      <td class="' + szPar + '"> ' +
	'                        <select id="bShortUrl"  style="width:80px;">   ' +
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
	'                        <select id="bLongUrl"  style="width:80px;" >   ' +
	'                              <option selected value="FALSE" >false</i></option>  ' +
	'                              <option value="TRUE" >true</option>  ' +
	'                         </select>                 ' +
	'                      </td> ' +
	'                      <td class="tipl">Show Column LongURL</td>  ' +
	'                    </tr> ' +
	'                   </table>	 ' +
	'                 </td> ' +
	'               </tr> ' +
	'            </table> ' +
	'      <input type="button" value="Apply Option" onclick="sample1OptApply()"/>' +
	'      </div><BR/>';
  TipFix (szOpt,event,{szTitle:"gaShortUrlList() OPTION", bCloseBtn: false, iWidth: 820});	
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
	if (isJsuFree()){
		// disable Opt not availble in FREE JSU
		selectParTime.disabled=true;
		selectShortUrl.disabled=true;
		selectLongUrl.disabled=true;
	}	
	
}



/**
 * Show the Floating Tip
 * @param event
 */
function sample1aTip (event){
	Tip('Show the TipFix with the List of Links to <b>Google Analytics</b>');
}

/**
 * Show the Floating Tip
 * @param event
 */
function sample1bTip (event){
	Tip('Show the JQPopup with the List of Links to <b>Google Analytics</b>');
}

/**
 * Show the Floating Tip
 * @param event
 */
function sample1OptTip (event){
	Tip('Show the Box to Set <b>gaShortUrlList Option</b>');
}



/* ---------------------------------------------------------
 * 				SAMPLE_2
 --------------------------------------------------------- */


/**
 * Call API gaShortUrlPage()
 * 
 */
function sample2(){
  var fn = "[sample2()] ";
	jslogObj (JSLOG_DEBUG,fn + "opt_ga_page", opt_ga_page);

	gaShortUrlPage (	opt_ga_page.szShortUrl,
			{
		  bNewWindow: opt_ga_page.bNewWindow,
		  szParTime: opt_ga_page.szParTime
		  });
	
}




/**
 * Show Option for Sample2
 * @param event
 */
function sample2Opt (event){
	var szFreeLimit = "";

	var szOpt = ' <div align="center" style="width:700px"><table class="tipNoBorder" width="700px"> ' +
	'               <tr> ' +
	'                 <td class="tipr" > ' +
	'                  <table class="det" BORDER="2" cellpadding="3" cellspacing="3"  width ="100%"> ' +
	'                    <tr class="detTitle"><td colspan="5">Main <a class="tipLinkJsLog" href="https://rawgit.com/FedericoLevis/JSUDoc/master/googleAnal.js/global.html#gaShortUrlPage" target="_blank">gaShortUrlPage() API Options</a></td></tr> ' +
	'                    <tr class="detTitle2"><td width="70px">OPTION</td><td width="150px">VALUE</td><td>DESCRIPTION</td></tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="tipcBold">szShortUrl</td> ' +
	'                      <td class="tipl"> ' +
	'                        <input id="szShortUrl2" style="width:100%;">   ' +
	'                      </td> ' +
	'                      <td class="tipl">Short URL retrieved by goo.gl</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="tipcBold">szParTime</td> ' +
	'                      <td class="tipc"> ' +
	'                        <select id="szParTime2"  style="width:100px;">   ' +
	'                      </td> ' +
	'                      <td class="tipl">Initial Value of <b>Google Analytics Time</b> Parameter</td>  ' +
	'                    </tr> ' +
	'                    <tr class="det"> ' +
	'                      <td class="tipcBold">bNewWindow</td> ' +
	'                      <td class="tipc"> ' +
	'                        <select id="bNewWindow2"  style="width:100px;" >   ' +
	'                              <option selected value="FALSE" >false</i></option>  ' +
	'                              <option value="TRUE" >true</option>  ' +
	'                         </select>                 ' +
	'                      </td> ' +
	'                      <td class="tipl">if true:Show Google Analytic in a New Page</td>  ' +
	'                    </tr> ' +
	'                   </table>	 ' +
	'                 </td> ' +
	'               </tr> ' +
	'            </table> ' +
	'      <input type="button" value="Apply Option" onclick="sample2OptApply()"/>' +
	'      </div><BR/>';
	TipFix (szOpt,event,{szTitle:"gaShortUrlPage() OPTION", bCloseBtn: false, iTipWidth:720});	
// Init
	
	var arParTime=	[	
              	 	[GA_PAR_TIME.all_time,GA_PAR_TIME.all_time],   
              	 	[GA_PAR_TIME.month,GA_PAR_TIME.month],   
              	 	[GA_PAR_TIME.week,GA_PAR_TIME.week],   
              	 	[GA_PAR_TIME.day,GA_PAR_TIME.day],   
              	 	[GA_PAR_TIME.two_hours,GA_PAR_TIME.two_hours]   
         ];
	var selectParTime = getElementById2 ("szParTime2",true);
	var selectNewWindow = getElementById2 ("bNewWindow2",true);
 	selectPopulate (selectParTime,arParTime, opt_ga_page.szParTime);
  // set cur val
 	selectSelValue (selectNewWindow,opt_ga_page.bNewWindow ? "TRUE" : "FALSE");
 	getElementById2("szShortUrl2",true).value = opt_ga_page.szShortUrl;
	
}




/**
 * Show the Floating Tip
 * @param event
 */
function sample2Tip (event){
	Tip('Show the <b>Google Analytics Page</b> ');
}

/**
 * Show the Floating Tip
 * @param event
 */
function sample2OptTip (event){
	Tip('Show the Box to Set the <b>Options</b> of the Google Analytics disaplayed clicking in the Button on this sample');
}



/* ---------------------------------------------------------
 * 				CODE TIP
 --------------------------------------------------------- */



/**
 * sample1 Code Sample		
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
 * sample2 Code Sample		
 * @param event
 */
function sampleCode2(event){
	var szTip = 'gaShortUrlPage(opt_ga_page.szShortUrl,  // e.g.: \'https://goo.gl/HnNqnM\' \n' +
			'   { \n' +
			'     bNewWindow: opt_ga_page.bNewWindow,  // e.g: true \n' +
			'     szParTime: opt_ga_page.szParTime   // e.g: \'day\' \n' +
			'   });';
			
	TipFixCode(szTip,event,{
  	 szTitle:"JS Code of SAMPLE 2: Google Analytics Page",iTipWidth:1000,iTipMaxHeight:500
  	 });
}

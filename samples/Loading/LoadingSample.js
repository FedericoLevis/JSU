/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_ed39=["../../images/loading/","../../images/samples/","value","szTitleHtml","Loading Title <i>Example</i>","szDiffMsgHtml","<b>Loading could require <i>some seconds</i></b><BR/><BR/>Please Wait...","selectDur1","3","selectDur2","5","3 sec","5 sec","10","10 sec","length","1ColorRing.gif","1ColorRing","2ColorRing.gif","2ColorRing","Cat.gif","Cat","3Wheels.gif","3Wheels","Disk.gif","Disk","FillingRing.gif","FillingRing","Ventilator.gif","Ventilator","JSU.gif","JSU","szDiffUrlGif","loadedSample1","bShowElapsedSec","TRUE","bShowCancel","iDivWidth","loadedSample2","className","tipGood","innerHTML","Loaded","inline","CANCELLED","tipErr","loadingType3","CustomLayout","<table class=\"tip\"  cellspacing=\"0\" cellpadding=\"2\" width=\"500px\">","  <tr > ","   <td  align=\"center\" class=\"jsuAboutTitle\" > <img class=\"jsuAboutTitle\" src=\"","jsuAboutTitle.png\"/></td> ","   <td  align=\"left\" class=\"jsuAboutTitle\"> <img class=\"jsuAboutTitle\" src=\"","ComputerVelox.gif\"/></td> ","  </tr>","  <tr><td colspan=\"2\">","    <table style=\"background-color:white;\" ><tr>","      <td id=\"loadingDivTdGif\" align=\"left\" width=\"150px\">","          <img  src=\"","JSU.gif\" />","      </td>","      <td width=\"250px\" class=\"loadingDivMsg\" style=\"font-size: 17px\">","         <b>Loading JSU components</BR>Please wait...","      </td> ","    </tr></table>","  </td></tr>","</table>","gray","loadedSample3","<b>[Action 1/3]</b><BR/>Searching Files...","Search.gif","<b>[Action 2/3]</b><BR/>Printing Files...","Print.gif","<b>[Action 3/3]</b><BR/>Sending Emails...","SendEmail.gif","//Only 2 JSU calls are requires:\x0A","//   - loadingDivShow(objOpt) : Show the LoadingDiv with optional objOpt\x0A","//   - loadingDivHide()       : Hide the LoadingDiv\x0A\x0A","// 1) We Show LoadingDiv (with default Options)\x0A","loadingDivShow();\x0A","// Execute the \"Long Loading Operation\". During this Code execution the User will see only the LoadingDiv \x0A","... \x0A","//Now  we have finished Executing the \"Long Loading Operation\"  \x0A","// 2) Finally we Hide LoadingDiv\x0A","loadingDivHide();","// 1) Show LoadingDiv with the selected Options\x0A","loadingDivShow ( { \x0A","   szTitleHtml: getElementById2(\"szTitleHtml\").value,\x0A","   szDiffMsgHtml: getElementById2(\"szDiffMsgHtml\").value, \x0A","   bShowElapsedSec: selectGetSelVal (getElementById2(\"bShowElapsedSec\")) == \"TRUE\",\x0A","   bShowCancel: selectGetSelVal (getElementById2(\"bShowCancel\")) == \"TRUE\",\x0A","   iDivWidth: selectGetSelVal (getElementById2(\"iDivWidth\")),\x0A","   szDiffUrlGif: selectGetSelVal (getElementById2(\"szDiffUrlGif\")),\x0A","   fnCancelCallback: loading2CancelCallback\x0A"," });\x0A","//================================================================================================================\x0A","//OPTIONAL objOpt  of loadingDiv(objOpt):\x0A","//        szTitleHtml:       {String}: [\"\"] if != \"\" Show Title \x0A","//        bShowGif:          {Boolean}: [true] show the Loading Gif \x0A","//        szDiffUrlGif:      {String Url}: [null] if different form null use this URL instead of CSS default \x0A","//        bShowElapsedSec:   {Boolean} [false] if true show a Footer with Elapsed Time (sec) \x0A","//        bResetElapsedSec:  {Boolean} [false] if true reset timer \x0A","//        szDiffMsgHtml:     {String} if different from null, show this Msg (HTML) instead of Default \x0A","//        iDivWidth:         {Number} if different from null, set this Div Width instead of using DEfault Width (CSS) \x0A","//        iGifWidth:         {Number} if different from null, set this Gif Width instead of using DEfault Width (CSS) \x0A","//        bShowCancel:       {Boolean}: [false] show the Cancel Btn \x0A","//        szBackgroundColor: {String} Div BackgroundColor, if different from null or \"\", \x0A","//        fnCancelCallback:  {function} [null]  called when Cancel button is clicked \x0A","//================================================================================================================","// Prepare the Custom Layout: an HTML Table with Image, Gif, Message\x0A","var szJsuMsg=\"...\" \x0A","// 1) Show LoadingDiv with Options to show a Custom Layout\x0A","loadingDivShow ({\x0A","\x09szTitleHtml: \"JSU\",\x0A","  szDiffMsgHtml: szJsuMsg,  // Custom Msg with the Table with Image, Gif, Message\x0A","  bShowElapsedSec: true,\x0A","  bShowGif: false, // hide default Gif because we have everything in szDiffMsgHtml\x0A","  bShowCancel: true,\x0A","  iDivWidth: 430,\x0A","  szBackgroundColor : \"gray\", // backgound color of the part of the Div different from szDiffMsgHtml\x0A","  fnCancelCallback: loading3CancelCallback \x0A","});  \x0A","// 1) Show LoadingDiv with Options to show First State: Search\x0A","  szDiffMsgHtml: \"<b>[Action 1/3]</b><BR/>Searching Files...\",  \x0A","  szDiffUrlGif: \".../Search.gif\",\x0A","  ...\x0A","// Execute the \"State1 Operation\" \x0A","// 2) State1 is completed - Now we Show LoadingDiv with Options to show State2: Search\x0A","  szDiffMsgHtml: \"<b>[Action 2/3]</b><BR/>Printing Files...\",  \x0A","  szDiffUrlGif: \".../Print.gif\",\x0A","  bResetElapsedSec: false; // DO NOT Reset Elapsed sec (because we continue form previous state)\x0A","// Execute the \"State2 Operation\" \x0A","// 3) State2 is completed - Now we Show LoadingDiv with Options to show State3: SendEmail\x0A","  szDiffMsgHtml: \"<b>[Action 2/3]</b><BR/>Sending Emails...\",  \x0A","  szDiffUrlGif: \".../SendEmail.gif\",\x0A","// Execute the \"State3 Operation\" \x0A","//4) Now  we have finished All the 3 operations. So We Finally Hide LoadingDiv\x0A","","JS Source Code - CUSTOM LoadingDiv Sample: "];var JSLOG_LEV=15;var PATH_LOADING_GIF=_$_ed39[0];var PATH_SAMPLES_GIF=_$_ed39[1];var TMO_LOADING3_JSU_SEC=10000;var TMO_LOADING3_3STATE_SEC=3000;var tmoLoading1=null,tmoLoading2=null,tmoLoading3=null;var state=0;function jsu_loaded(){populateDuration();populateUrlGif();getElementById2(_$_ed39[3])[_$_ed39[2]]= _$_ed39[4];getElementById2(_$_ed39[5])[_$_ed39[2]]= _$_ed39[6];loadingShow(false)}function populateDuration(){var O=[[_$_ed39[7],_$_ed39[8]],[_$_ed39[9],_$_ed39[10]]];var N=[[_$_ed39[8],_$_ed39[11]],[_$_ed39[10],_$_ed39[12]],[_$_ed39[13],_$_ed39[14]]];for(var f=0;f< O[_$_ed39[15]];f++){var P=O[f];selectPopulate(getElementById2(P[0]),N,P[1])}}function populateUrlGif(){var Y=[[PATH_LOADING_GIF+ _$_ed39[16],_$_ed39[17]],[PATH_LOADING_GIF+ _$_ed39[18],_$_ed39[19]],[PATH_LOADING_GIF+ _$_ed39[20],_$_ed39[21]],[PATH_LOADING_GIF+ _$_ed39[22],_$_ed39[23]],[PATH_LOADING_GIF+ _$_ed39[24],_$_ed39[25]],[PATH_LOADING_GIF+ _$_ed39[26],_$_ed39[27]],[PATH_LOADING_GIF+ _$_ed39[28],_$_ed39[29]],[PATH_LOADING_GIF+ _$_ed39[30],_$_ed39[31]]];selectPopulate(getElementById2(_$_ed39[32]),Y,PATH_LOADING_GIF+ _$_ed39[20])}function onclickLoading1(){tmoLoading1= setTimeout(tmoElapsedLoading1,1000* selectGetSelVal(getElementById2(_$_ed39[7])));loadingDivShow()}function tmoElapsedLoading1(){clearTimeout(tmoLoading1);loadingDivHide();elementShow(getElementById2(_$_ed39[33]),true)}function onclickLoading2(){tmoLoading2= setTimeout(tmoElapsedLoading2,1000* selectGetSelVal(getElementById2(_$_ed39[9],true)));loadingDivShow({szTitleHtml:getElementById2(_$_ed39[3])[_$_ed39[2]],szDiffMsgHtml:getElementById2(_$_ed39[5])[_$_ed39[2]],bShowElapsedSec:selectGetSelVal(getElementById2(_$_ed39[34]))== _$_ed39[35],bShowCancel:selectGetSelVal(getElementById2(_$_ed39[36]))== _$_ed39[35],iDivWidth:selectGetSelVal(getElementById2(_$_ed39[37])),szDiffUrlGif:selectGetSelVal(getElementById2(_$_ed39[32])),fnCancelCallback:loading2CancelCallback})}function tmoElapsedLoading2(){clearTimeout(tmoLoading2);loadingDivHide();var u=getElementById2(_$_ed39[38]);u[_$_ed39[39]]= _$_ed39[40];u[_$_ed39[41]]= _$_ed39[42];elementShow(u,true,_$_ed39[43])}function loading2CancelCallback(){clearTimeout(tmoLoading2);var u=getElementById2(_$_ed39[38]);u[_$_ed39[41]]= _$_ed39[44];u[_$_ed39[39]]= _$_ed39[45];elementShow(u,true,_$_ed39[43])}function onclickLoading3(){var B=selectGetSelVal(getElementById2(_$_ed39[46]));if(B== _$_ed39[47]){showCustomLayout()}else {show3States()}}function showCustomLayout(){tmoLoading3= setTimeout(tmoElapsedLoading3,TMO_LOADING3_JSU_SEC);var bv=_$_ed39[48]+ _$_ed39[49]+ _$_ed39[50]+ JSU_PATH_ABOUT_IMG+ _$_ed39[51]+ _$_ed39[52]+ JSU_PATH_ABOUT_IMG+ _$_ed39[53]+ _$_ed39[54]+ _$_ed39[55]+ _$_ed39[56]+ _$_ed39[57]+ _$_ed39[58]+ PATH_LOADING_GIF+ _$_ed39[59]+ _$_ed39[60]+ _$_ed39[61]+ _$_ed39[62]+ _$_ed39[63]+ _$_ed39[64]+ _$_ed39[65]+ _$_ed39[66];loadingDivShow({szTitleHtml:_$_ed39[31],szDiffMsgHtml:bv,bShowElapsedSec:true,bShowGif:false,bShowCancel:true,iDivWidth:500,szBackgroundColor:_$_ed39[67],fnCancelCallback:loading3CancelCallback})}function tmoElapsedLoading3(){clearTimeout(tmoLoading3);loadingDivHide();var v=getElementById2(_$_ed39[68]);v[_$_ed39[39]]= _$_ed39[40];v[_$_ed39[41]]= _$_ed39[42];elementShow(v,true,_$_ed39[43])}function loading3CancelCallback(){clearTimeout(tmoLoading3);var v=getElementById2(_$_ed39[68]);v[_$_ed39[41]]= _$_ed39[44];v[_$_ed39[39]]= _$_ed39[45];elementShow(v,true,_$_ed39[43])}function show3States(){tmoLoading3= setInterval(tmoElapsedLoading3States,TMO_LOADING3_3STATE_SEC);showLoadingDivState(1)}function showLoadingDivState(bx){var bd;var by;var bw=(bx== 1);state= bx;if(bx== 1){bd= _$_ed39[69];by= PATH_SAMPLES_GIF+ _$_ed39[70]}else {if(bx== 2){bd= _$_ed39[71];by= PATH_SAMPLES_GIF+ _$_ed39[72]}else {if(bx== 3){bd= _$_ed39[73];by= PATH_SAMPLES_GIF+ _$_ed39[74]}}};loadingDivShow({szTitleHtml:_$_ed39[31],szDiffMsgHtml:bd,bShowElapsedSec:true,bResetElapsedSec:bw,bShowCancel:true,iGifWidth:160,iDivWidth:350,szDiffUrlGif:by,fnCancelCallback:loading3CancelCallback})}function tmoElapsedLoading3States(){if(state== 1){showLoadingDivState(2)}else {if(state== 2){showLoadingDivState(3)}else {if(state== 3){tmoElapsedLoading3()}}}}var JS_LOADING1=_$_ed39[75]+ _$_ed39[76]+ _$_ed39[77]+ _$_ed39[78]+ _$_ed39[79]+ _$_ed39[80]+ _$_ed39[81]+ _$_ed39[81]+ _$_ed39[82]+ _$_ed39[83]+ _$_ed39[84];var JS_LOADING2=_$_ed39[85]+ _$_ed39[86]+ _$_ed39[87]+ _$_ed39[88]+ _$_ed39[89]+ _$_ed39[90]+ _$_ed39[91]+ _$_ed39[92]+ _$_ed39[93]+ _$_ed39[94]+ _$_ed39[80]+ _$_ed39[81]+ _$_ed39[81]+ _$_ed39[82]+ _$_ed39[83]+ _$_ed39[84];var JS_LOADING_OPT=_$_ed39[95]+ _$_ed39[96]+ _$_ed39[97]+ _$_ed39[98]+ _$_ed39[99]+ _$_ed39[100]+ _$_ed39[101]+ _$_ed39[102]+ _$_ed39[103]+ _$_ed39[104]+ _$_ed39[105]+ _$_ed39[106]+ _$_ed39[107]+ _$_ed39[108];var JS_LOADING3_LAYOUT=_$_ed39[109]+ _$_ed39[110]+ _$_ed39[111]+ _$_ed39[112]+ _$_ed39[113]+ _$_ed39[114]+ _$_ed39[115]+ _$_ed39[116]+ _$_ed39[117]+ _$_ed39[118]+ _$_ed39[119]+ _$_ed39[120]+ _$_ed39[121]+ _$_ed39[80]+ _$_ed39[81]+ _$_ed39[81]+ _$_ed39[82]+ _$_ed39[83]+ _$_ed39[84];var JS_LOADING3_3STATES=_$_ed39[122]+ _$_ed39[112]+ _$_ed39[123]+ _$_ed39[124]+ _$_ed39[125]+ _$_ed39[121]+ _$_ed39[126]+ _$_ed39[81]+ _$_ed39[127]+ _$_ed39[112]+ _$_ed39[128]+ _$_ed39[129]+ _$_ed39[130]+ _$_ed39[125]+ _$_ed39[121]+ _$_ed39[131]+ _$_ed39[81]+ _$_ed39[132]+ _$_ed39[112]+ _$_ed39[133]+ _$_ed39[134]+ _$_ed39[130]+ _$_ed39[125]+ _$_ed39[121]+ _$_ed39[135]+ _$_ed39[81]+ _$_ed39[136]+ _$_ed39[84];function sample3JS(H){var bb=_$_ed39[137];var B=selectGetSelVal(getElementById2(_$_ed39[46]));var bp=selectGetSelText(getElementById2(_$_ed39[46]));if(B== _$_ed39[47]){bb= JS_LOADING3_LAYOUT}else {bb= JS_LOADING3_3STATES};TipJSFixedClicked(bb,H,{iJSMaxHeight:300,szTitle:_$_ed39[138]+ bp})}
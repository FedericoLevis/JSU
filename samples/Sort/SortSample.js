/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_9ba2=["NNN dd, yyyy HH:mm:ss","innerHTML","divTbl1","<div class='jsuLoading' style='height:250px'></div>","tbl1","Country","Name","Date","DATETIME","Amount","NUMBER","ASC","tbl2","Operation","NONE","Request Number","Insert Date","dd/mm/yyyy","State",",",".","myFooter","selectTbl1NumRow","<table id=\"tbl1\" border=\"1\" width=\"99%\" >","<tr class=\"header\"> <th width=\"25%\">Country</th> <th width=\"25%\">Name</th><th width=\"30%\">Date</th><th width=\"20%\">Amount</th></tr>","random","floor","toLocaleString","0","<tr><td>Country ","</td><td>Name ","</td><td>","</td></tr>\x0A","getDate","setDate","<tr class=\"","\"> <td colspan=\"3\">Total</td> <td> ","</table>","selectTblSetSort","selectSortCol","selectSortDir","setSort","length","selectTblGetSort","getSortCol","Current SortCol: <b>","</b>","getSortDir","Ascending (A..Z)","Descending (Z..A)","Current SortDir: <b>","//SORT SAMPLE_1: One JSU call is enough to set the Sort: \x0A","// 1) create cSortTable related to Table with id='tbl1' \x0A","var cSortTbl1 = new cSortTable('tbl1', \x0A"," //Describe how to Sort the Table Columns \x0A","  [{col: 'Country'},  // Default type: SORT_TYPE.DATETIME \x0A","   {col: 'Name'},  // Default type: SORT_TYPE.DATETIME \x0A","   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \x0A","   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\x0A","   // For NUMBER  we use default separator (used creating the table)\x0A","   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\x0A","   // OPTION \x0A","     {szSortCol:'Name',   // Current SortCol (we have already Popolated the Table order by this col)\x0A","     szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)\x09\x0A","     bSortApply:false   //  Table is already sorted\x0A","});\x0A","//Now you can Sort the Table by clicking on Colum Header ","//SORT SAMPLE_2: One JSU call is enough to set the Sort: \x0A","// 1) create cSortTable related to Table with id='tbl2' \x0A","var cSortTbl1 = new cSortTable('tbl2', \x0A","[{col: 'Operation', type: SORT_TYPE.NONE}, // NoSort for This Col \x0A","    {col: 'Request Number', type: SORT_TYPE.NUMBER}, \x0A","    {col: 'Insert Date', type: SORT_TYPE.DATETIME, fmt: 'dd/mm/yyyy'},\x0A","    {col: 'State'},\x0A","    // NUMBER. We set Separator [default = locale settings]\x0A","    {col: 'Amount', type: SORT_TYPE.NUMBER, groupSep:',',decimalSep:'.'} ],\x0A","   { iRowSortHeader:2,  // 2 Header Rows [default=1]\x0A","     szClassFooter: 'myFooter', // class that identify tr footer \x0A","     // Apply SortAsc on 'Insert Date' Column \x0A","     szSortCol:'Insert Date', szSortDir: SORT_DIR.ASC, bSortApply: true\x0A","// Set SortCol and SortDirection  \x0A","// Example szSortCol = 'Name'         iSortDir=SORT_DIR.DESC \x0A","cSort.setSort (szSortCol,iSortDir); ","// Get Current SortColn  \x0A","var szSortCol =  cSort.getSortCol (); ","// Get Current SortDirection:  SORT_DIR.ASC or SORT_DIR.DESC \x0A","var iSortDir =  cSort.getSortDir (); "];var FMT_DATETIME_TBL1=_$_9ba2[0];var cSortTbl1=null;var cSortTbl2=null;function jsu_loaded(){sortTbl1();sortTbl2()}var tmo=null;function sortTbl1(){getElementById2(_$_9ba2[2])[_$_9ba2[1]]= _$_9ba2[3];tmo= setTimeout(sortTbl1Tmo,300)}function sortTbl1Tmo(){clearTimeout(tmo);populateTbl1();cSortTbl1=  new cSortTable(_$_9ba2[4],[{col:_$_9ba2[5]},{col:_$_9ba2[6]},{col:_$_9ba2[7],type:SORT_TYPE[_$_9ba2[8]],fmt:FMT_DATETIME_TBL1},{col:_$_9ba2[9],type:SORT_TYPE[_$_9ba2[10]]}],{szSortCol:_$_9ba2[6],szSortDir:SORT_DIR[_$_9ba2[11]],bSortApply:false})}function sortTbl2(){cSortTbl2=  new cSortTable(_$_9ba2[12],[{col:_$_9ba2[13],type:SORT_TYPE[_$_9ba2[14]]},{col:_$_9ba2[15],type:SORT_TYPE[_$_9ba2[10]]},{col:_$_9ba2[16],type:SORT_TYPE[_$_9ba2[8]],fmt:_$_9ba2[17]},{col:_$_9ba2[18]},{col:_$_9ba2[9],type:SORT_TYPE[_$_9ba2[10]],groupSep:_$_9ba2[19],decimalSep:_$_9ba2[20]}],{iRowSortHeader:2,szClassFooter:_$_9ba2[21],szSortCol:_$_9ba2[16],szSortDir:SORT_DIR[_$_9ba2[11]],bSortApply:true})}function populateTbl1(){var V=parseInt(selectGetSelVal(getElementById2(_$_9ba2[22])));var Z=_$_9ba2[23]+ _$_9ba2[24];var S= new Date();var U=0;for(var f=0;f< V;f++){var T=Math[_$_9ba2[26]]((Math[_$_9ba2[25]]()* 10000000)+ 1)/ 100;var Y=T[_$_9ba2[27]]();var W=formatDate(S,FMT_DATETIME_TBL1);var X=num2StrPad(f+ 1,_$_9ba2[28],5);var m=_$_9ba2[29]+ X+ _$_9ba2[30]+ X+ _$_9ba2[31]+ W+ _$_9ba2[31]+ Y+ _$_9ba2[32];Z+= m;S[_$_9ba2[34]](S[_$_9ba2[33]]()- 1);U+= T};var Y=U[_$_9ba2[27]]();var m=_$_9ba2[35]+ SORT_TR_CLASS_FOOTER+ _$_9ba2[36]+ Y+ _$_9ba2[32];Z+= (m+ _$_9ba2[37]);getElementById2(_$_9ba2[2])[_$_9ba2[1]]= Z}function tbl1SetSort(){var I=selectGetSelVal(getElementById2(_$_9ba2[38]));var bC=(I== _$_9ba2[4])?cSortTbl1:cSortTbl2;var bD=selectGetSelVal(getElementById2(_$_9ba2[39]));var bE=parseInt(selectGetSelVal(getElementById2(_$_9ba2[40])));bC[_$_9ba2[41]](bD,bE)}function onchangeSelectTblSetSort(){var F=[_$_9ba2[5],_$_9ba2[6],_$_9ba2[7],_$_9ba2[9]];var G=[_$_9ba2[15],_$_9ba2[16],_$_9ba2[18],_$_9ba2[9]];var I=selectGetSelVal(getElementById2(_$_9ba2[38]));var E=(I== _$_9ba2[4])?F:G;var H=getElementById2(_$_9ba2[39]);selectRemoveAll(H);for(var f=0;f< E[_$_9ba2[42]];f++){appendOptionLast(H,E[f],E[f])}}function tbl1GetSortCol(){var I=selectGetSelVal(getElementById2(_$_9ba2[43]));var bC=(I== _$_9ba2[4])?cSortTbl1:cSortTbl2;var bD=bC[_$_9ba2[44]]();showInfo(_$_9ba2[45]+ bD+ _$_9ba2[46])}function tbl1GetSortDir(){var I=selectGetSelVal(getElementById2(_$_9ba2[43]));var bC=(I== _$_9ba2[4])?cSortTbl1:cSortTbl2;var bE=bC[_$_9ba2[47]]();var bF=(bE== SORT_DIR[_$_9ba2[11]])?_$_9ba2[48]:_$_9ba2[49];showInfo(_$_9ba2[50]+ bF+ _$_9ba2[46])}var JS_CODE_SORT_TBL1=_$_9ba2[51]+ _$_9ba2[52]+ _$_9ba2[53]+ _$_9ba2[54]+ _$_9ba2[55]+ _$_9ba2[56]+ _$_9ba2[57]+ _$_9ba2[58]+ _$_9ba2[59]+ _$_9ba2[60]+ _$_9ba2[61]+ _$_9ba2[62]+ _$_9ba2[63]+ _$_9ba2[64]+ _$_9ba2[65]+ _$_9ba2[66];var JS_CODE_SORT_TBL2=_$_9ba2[67]+ _$_9ba2[68]+ _$_9ba2[69]+ _$_9ba2[54]+ _$_9ba2[70]+ _$_9ba2[71]+ _$_9ba2[72]+ _$_9ba2[73]+ _$_9ba2[74]+ _$_9ba2[75]+ _$_9ba2[61]+ _$_9ba2[76]+ _$_9ba2[77]+ _$_9ba2[78]+ _$_9ba2[79]+ _$_9ba2[65]+ _$_9ba2[66];var JS_CODE_SET_SORT=_$_9ba2[80]+ _$_9ba2[81]+ _$_9ba2[82];var JS_CODE_GET_SORT_COL=_$_9ba2[83]+ _$_9ba2[84];var JS_CODE_GET_SORT_DIR=_$_9ba2[85]+ _$_9ba2[86]
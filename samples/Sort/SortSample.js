/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_8126=["NNN dd, yyyy HH:mm:ss","[SortSample.js jsu_loaded()] ","Init SortTable Sample","[SortSample.js sortTbl1()] ","innerHTML","divTbl1","<div class='jsuLoading' style='height:250px'></div>","Start Timeout of 300 ms to show Loading Gif","[SortSample.js sortTbl1Tmo()] ","create cSortTable related to Table with id='tbl1'","tbl1","Country","Name","Date","DATETIME","Amount","NUMBER","ASC","[SortSample.js sortTbl2()] ","create cSortTable related to Table with id='tbl2'","tbl2","Operation","NONE","Request Number","Insert Date","dd/mm/yyyy","State",",",".","myFooter","[SortSample.js populateTbl1()] ","selectTbl1NumRow","<table class=\"det\" id=\"tbl1\" border=\"1\" width=\"99%\" >","<tr class=\"header\"> <th width=\"25%\">Country</th> <th width=\"25%\">Name</th><th width=\"30%\">Date</th><th width=\"20%\">Amount</th></tr>","Add "," Rows to Table with id='tbl1'","random","floor","toLocaleString","0","<tr class=\"det\"><td class=\"det\">Country ","</td><td class=\"det\">Name ","</td><td class=\"det\">","</td></tr>\x0A","getDate","setDate","<tr class=\"","\"> <td colspan=\"3\">Total</td> <td> ","</table>","selectTblSetSort","selectSortCol","selectSortDir","setSort","length","selectTblGetSort","getSortCol","Current SortCol: <b>","</b>","getSortDir","Ascending (A..Z)","Descending (Z..A)","Current SortDir: <b>","//SORT SAMPLE_1: One JSU call is enough to set the Sort: \x0A","// 1) create cSortTable related to Table with id='tbl1' \x0A","var cSortTbl1 = new cSortTable('tbl1', \x0A"," //Describe how to Sort the Table Columns \x0A","  [{col: 'Country'},  // Default type: SORT_TYPE.STRING \x0A","   {col: 'Name'},  // Default type: SORT_TYPE.STRING \x0A","   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \x0A","   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\x0A","   // For NUMBER  we use default separator (used creating the table)\x0A","   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\x0A","   // OPTION \x0A","     {szSortCol:'Name',   // Current SortCol (we have already Popolated the Table order by this col)\x0A","     szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)\x09\x0A","     bSortApply:false   //  Table is already sorted\x0A","});\x0A","//Now you can Sort the Table by clicking on Colum Header ","//SORT SAMPLE_2: One JSU call is enough to set the Sort: \x0A","// 1) create cSortTable related to Table with id='tbl2' \x0A","var cSortTbl1 = new cSortTable('tbl2', \x0A","[{col: 'Operation', type: SORT_TYPE.NONE}, // NoSort for This Col \x0A","    {col: 'Request Number', type: SORT_TYPE.NUMBER}, \x0A","    {col: 'Insert Date', type: SORT_TYPE.DATETIME, fmt: 'dd/mm/yyyy'},\x0A","    {col: 'State'},\x0A","    // NUMBER. We set Separator [default = locale settings]\x0A","    {col: 'Amount', type: SORT_TYPE.NUMBER, groupSep:',',decimalSep:'.'} ],\x0A","   { iRowSortHeader:2,  // 2 Header Rows [default=1]\x0A","     szClassFooter: 'myFooter', // class that identify tr footer \x0A","     // Apply SortAsc on 'Insert Date' Column \x0A","     szSortCol:'Insert Date', szSortDir: SORT_DIR.ASC, bSortApply: true\x0A","// Set SortCol and SortDirection  \x0A","// Example szSortCol = 'Name'         iSortDir=SORT_DIR.DESC \x0A","cSort.setSort (szSortCol,iSortDir); ","// Get Current SortColn  \x0A","var szSortCol =  cSort.getSortCol (); ","// Get Current SortDirection:  SORT_DIR.ASC or SORT_DIR.DESC \x0A","var iSortDir =  cSort.getSortDir (); "];var FMT_DATETIME_TBL1=_$_8126[0];var cSortTbl1=null;var cSortTbl2=null;function jsu_loaded(){var v=_$_8126[1];jslog(JSLOG_INFO,v+ JSLOG_FUN_START);jslog(JSLOG_INFO,v+ _$_8126[2]);initSampleCmn();sortTbl1();sortTbl2();jslog(JSLOG_INFO,v+ JSLOG_FUN_END)}var tmo=null;function sortTbl1(){var v=_$_8126[3];jslog(JSLOG_DEBUG,v+ JSLOG_FUN_START);getElementById2(_$_8126[5])[_$_8126[4]]= _$_8126[6];jslog(JSLOG_DEBUG,v+ _$_8126[7]);tmo= setTimeout(sortTbl1Tmo,300);jslog(JSLOG_DEBUG,v+ JSLOG_FUN_END)}function sortTbl1Tmo(){var v=_$_8126[8];jslog(JSLOG_DEBUG,v+ JSLOG_FUN_START);clearTimeout(tmo);populateTbl1();jslog(JSLOG_DEBUG,v+ _$_8126[9]);cSortTbl1=  new cSortTable(_$_8126[10],[{col:_$_8126[11]},{col:_$_8126[12]},{col:_$_8126[13],type:SORT_TYPE[_$_8126[14]],fmt:FMT_DATETIME_TBL1},{col:_$_8126[15],type:SORT_TYPE[_$_8126[16]]}],{szSortCol:_$_8126[12],szSortDir:SORT_DIR[_$_8126[17]],bSortApply:false});jslog(JSLOG_DEBUG,v+ JSLOG_FUN_END)}function sortTbl2(){var v=_$_8126[18];jslog(JSLOG_DEBUG,v+ JSLOG_FUN_START);jslog(JSLOG_DEBUG,v+ _$_8126[19]);cSortTbl2=  new cSortTable(_$_8126[20],[{col:_$_8126[21],type:SORT_TYPE[_$_8126[22]]},{col:_$_8126[23],type:SORT_TYPE[_$_8126[16]]},{col:_$_8126[24],type:SORT_TYPE[_$_8126[14]],fmt:_$_8126[25]},{col:_$_8126[26]},{col:_$_8126[15],type:SORT_TYPE[_$_8126[16]],groupSep:_$_8126[27],decimalSep:_$_8126[28]}],{iRowSortHeader:2,szClassFooter:_$_8126[29],szSortCol:_$_8126[24],szSortDir:SORT_DIR[_$_8126[17]],bSortApply:true});jslog(JSLOG_DEBUG,v+ JSLOG_FUN_END)}function populateTbl1(){var v=_$_8126[30];jslog(JSLOG_DEBUG,v+ JSLOG_FUN_START);var ci=parseInt(selectGetSelVal(getElementById2(_$_8126[31])));var cm=_$_8126[32]+ _$_8126[33];var cf= new Date();var ch=0;jslog(JSLOG_DEBUG,v+ _$_8126[34]+ ci+ _$_8126[35]);for(var o=0;o< ci;o++){var cg=Math[_$_8126[37]]((Math[_$_8126[36]]()* 10000000)+ 1)/ 100;var cl=cg[_$_8126[38]]();var cj=formatDate(cf,FMT_DATETIME_TBL1);var ck=num2StrPad(o+ 1,_$_8126[39],5);var u=_$_8126[40]+ ck+ _$_8126[41]+ ck+ _$_8126[42]+ cj+ _$_8126[42]+ cl+ _$_8126[43];cm+= u;cf[_$_8126[45]](cf[_$_8126[44]]()- 1);ch+= cg};var cl=ch[_$_8126[38]]();var u=_$_8126[46]+ SORT_TR_CLASS_FOOTER+ _$_8126[47]+ cl+ _$_8126[43];cm+= (u+ _$_8126[48]);getElementById2(_$_8126[5])[_$_8126[4]]= cm;jslog(JSLOG_DEBUG,v+ JSLOG_FUN_END)}function tblSetSort(){var bR=selectGetSelVal(getElementById2(_$_8126[49]));var eQ=(bR== _$_8126[10])?cSortTbl1:cSortTbl2;var eR=selectGetSelVal(getElementById2(_$_8126[50]));var eS=parseInt(selectGetSelVal(getElementById2(_$_8126[51])));eQ[_$_8126[52]](eR,eS)}function onchangeSelectTblSetSort(){var bO=[_$_8126[11],_$_8126[12],_$_8126[13],_$_8126[15]];var bP=[_$_8126[23],_$_8126[24],_$_8126[26],_$_8126[15]];var bR=selectGetSelVal(getElementById2(_$_8126[49]));var bN=(bR== _$_8126[10])?bO:bP;var bQ=getElementById2(_$_8126[50]);selectRemoveAll(bQ);for(var o=0;o< bN[_$_8126[53]];o++){appendOptionLast(bQ,bN[o],bN[o])}}function tblGetSortCol(){var bR=selectGetSelVal(getElementById2(_$_8126[54]));var eQ=(bR== _$_8126[10])?cSortTbl1:cSortTbl2;var eR=eQ[_$_8126[55]]();showInfo(_$_8126[56]+ eR+ _$_8126[57])}function tblGetSortDir(){var bR=selectGetSelVal(getElementById2(_$_8126[54]));var eQ=(bR== _$_8126[10])?cSortTbl1:cSortTbl2;var eS=eQ[_$_8126[58]]();var eT=(eS== SORT_DIR[_$_8126[17]])?_$_8126[59]:_$_8126[60];showInfo(_$_8126[61]+ eT+ _$_8126[57])}var JS_CODE_SORT_TBL1=_$_8126[62]+ _$_8126[63]+ _$_8126[64]+ _$_8126[65]+ _$_8126[66]+ _$_8126[67]+ _$_8126[68]+ _$_8126[69]+ _$_8126[70]+ _$_8126[71]+ _$_8126[72]+ _$_8126[73]+ _$_8126[74]+ _$_8126[75]+ _$_8126[76]+ _$_8126[77];var JS_CODE_SORT_TBL2=_$_8126[78]+ _$_8126[79]+ _$_8126[80]+ _$_8126[65]+ _$_8126[81]+ _$_8126[82]+ _$_8126[83]+ _$_8126[84]+ _$_8126[85]+ _$_8126[86]+ _$_8126[72]+ _$_8126[87]+ _$_8126[88]+ _$_8126[89]+ _$_8126[90]+ _$_8126[76]+ _$_8126[77];var JS_CODE_SET_SORT=_$_8126[91]+ _$_8126[92]+ _$_8126[93];var JS_CODE_GET_SORT_COL=_$_8126[94]+ _$_8126[95];var JS_CODE_GET_SORT_DIR=_$_8126[96]+ _$_8126[97]
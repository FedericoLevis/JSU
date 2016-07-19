
/* =============================================================================================
   						CONSTANT
============================================================================================= */

var JSLOG_LEV = 0;


var TIP_SORT_FEATURE="<b>Sort Feature: DAFARE</b>";



/* =============================================================================================
									FUNCTION
============================================================================================= */

/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog
  // jslog_init(JSLOG_LEV);
  loadingShow (false); // Hide Loading Gif
};


function onclickSortFeature(event){
	TipFixedClicked (TIP_SORT_FEATURE,event);
}




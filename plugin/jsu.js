/* =========================================================================================
@File:     				jsu.js
@Author:   				Federico Levis
@Since:  					Apr 2016   
Description: 			require.js Definition for jsu with ModalPopup
Option:					  - JSU_PATH_BASE can be defined in the html that include this file:
									  EXAMPLE:
										  var JSU_BASE_URL = "/ibmcognos/jsu";  // FOR COGNOS
										  var JSU_PATH_BASE = '../..';   // FOR samples
									- If JSU_PATH_BASE is not already  defined, it is defined here
						  - JSU_LOADED_TMO_MS
						    In very rare case we need to wait a little before accessing the DOM in jsu_loaded. 
                In these case you can define JSU_LOADED_TMO_MS to be called after this TMO, instead of be calling immediatly after loading all JS						  
DISCLAIMER
Copyright by Federico Levis - JSUtily https://github.com/FedericoLevis/JSU
This file may be freely distributed/modified under the MIT license. 
========================================================================================= */

/* PATh Fisso e non ci sono i file non FREE: cValidate */


/* the BASE Path: Path of ..../jsu folder. 
 a) Fixed 
 b) relative Path (relative to HTML including this file)
*/  

if (typeof (JSU_PATH_BASE) == "undefined"){
    // GIT
    var JSU_PATH_BASE="https://rawgit.com/FedericoLevis/JSU/master";
}

// ===================================== OPTION: JSU with Comment or Minified   
// decomment only the jsuVersion version that you want to use
var jsuVersion ="";       // JSU with Comment (or Obfuscated in the Free version)
// var jsuVersion = "/Minify"      // JSU Minified
//----- ExternalPlugin (jquery, jquery-ui)
var externalPluginVersion = "/Minify";

// ----------------------------------- FIXED, depending on JSU_PATH_BASE
var JSU_PATH_IMG =   JSU_PATH_BASE + "/images/";
var JSU_PATH_POPUP_HTML = JSU_PATH_BASE +  "/core/IEPopup/";
//----------------------------------- FIXED 
var JSU_PATH_ABOUT_IMG = "https://rawgit.com/FedericoLevis/images/master/jsuAbout/";
var JSU_PATH_DOC = "https://rawgit.com/FedericoLevis/JSUDoc/master/";

//used by samples
// TBD
var JSU_FREE=true;
// var JSU_FREE=false;
var JSU_GA_EN = true; // Enable GoogleAnaltycs


//Only for TEST during development
//var JSU_PATH_ABOUT_IMG = JSU_PATH_IMG +"about/";


//----------------------------------- MODULE CONFIGURATION
requirejs.config({
    baseUrl: JSU_PATH_BASE,
	// Path relative to baseUrl
    paths: {
        'core': 'core' + jsuVersion,
        'lan': 'locale/EN',
//      'lan': 'locale/ITA',     // For Italian Language
        'popup': 'core/IEPopup' + jsuVersion,
    },
    shim: {
      'core/jslog': ['core/dom-drag'],
      'core/cSortTable': ['core/date']
    }    
});



require([ // First 3 always present
         'lan/locale-core', 
         'core/jslog',            
         'core/util',							
         'core/tooltip',
         'core/prettify-jsu',      /* only for code- prettify */
         'core/googleAnal',
         'core/loadingDiv',							
         'core/cSortTable',       /* require date */
         'popup/Popup',
         'core/loadingDiv'							
		   ],
    	   function()	{	
							if (typeof (jslog_init) == "function"){
								jslog_init(JSLOG_LEV_URL);
							}
							jsu_loaded_1();
						} 
   );


var jsuLoadedTmo = null;   

//   ONLY for  GOOGLE ANALYTICS -  this part can be removed 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  if (typeof (JSU_GA_EN) != "undefined" && JSU_GA_EN){
      ga('create', 'UA-83225633-1', 'auto');
      ga('send', 'pageview');
  } 



function jsu_loaded_1(){

  if (typeof (JSU_LOADED_TMO_MS) == "undefined"){
    if (typeof (jsu_loaded) != "undefined"){
     return jsu_loaded();
    }else {
    	return;
    }
  }
  jsuLoadedTmo = setTimeout(jsu_loaded_2, JSU_LOADED_TMO_MS); 
}


function jsu_loaded_2(){
   clearTimeout (jsuLoadedTmo);
   return jsu_loaded();
}



   
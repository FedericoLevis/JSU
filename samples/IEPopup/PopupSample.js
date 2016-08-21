// ==================================================================== CONSTANT
//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;
//var JSLOG_LEV = 3;



/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
  sampleInit();  
	manage_par_opt(); // manage optional PAR show_opt, only for developer
  
}

function sampleInit(){
  // Populate popupType select
  var arSelectId = ["popupType1","popupType1Desc","popupType2","popupType2Desc",];
  var arPopupType = [POPUP_TYPE.INFO , POPUP_TYPE.WARN , POPUP_TYPE.ERR , POPUP_TYPE.ALARM ,POPUP_TYPE.CONFIRM, 
                     POPUP_TYPE.QUESTION , POPUP_TYPE.QUESTION_3 , POPUP_TYPE.CHOICE , POPUP_TYPE.PROMPT ];
  for (var i=0; i< arSelectId.length; i++){
    var id = arSelectId[i];
    var select = getElementById2 (id,true);
    for (var k=0; k< arPopupType.length; k++){
      var popupType = arPopupType[k];
      appendOptionLast (select,popupType,popupType);
    }  
  }
  onchangeSampleType2(); // simulate to init
  onchangeSample3(); // simulate to init
}

/* ============================================================================
 *             SAMPLE_1
 ============================================================================ */


/**
 * Text Popup: Choice
 */
function sample1Choice(){
  // 1) Show Popup 
  var objRet = PopupChoice (
      "Please Choose a Vote for Popup API", 
      "Popup VOTE: ",
      // arChoice: "Very Good" is pre-selected
      [{value:1, szText:"1 - Not Good", bSel:false},
       {value:2, szText:"2 - Good", bSel:false},
       {value:3, szText:"3 - Very Good", bSel:true},
       {value:4, szText:"4 - Excellent", bSel:false},
      ],
      {bChoiceMultiSel: false}
  );
  // 2) Show The answer to choice: item chosen and Button clicked 
  showAnswerChoice (objRet);
}

/**
 * Text Popup: Prompt
 */
function sample1Prompt(){
  // 1) Show Popup 
  var objRet = Popup (POPUP_TYPE.PROMPT,
      "Insert a VOTE [1..10] in the field below\n(You can insert a  Value out of Range [1..10] to see Validation Features)\n\n",
      // objOpt Option: PromptLabel, validate
     { szPromptLabel: "VOTE [1..10]: ",
       // Validate Option: NUMBER must be in range [1..10]
       szPromptType: PROMPT_TYPE.NUMBER,  iPromptMin:1,  iPromptMax: 10,iPromptWidth:50}
      );
  // 2) Show The answer to question (Prompt inserted and Button clicked by the user) 
  showAnswerPrompt(objRet); 
}

/**
 * Text Popup: Question
 * @param PopupType POPUP_TYPE.QUESTION or POPUP_TYPE.QUESTION_3
 */
function sample1Question(PopupType){
  // 1) Show Popup 
  // PopupType = POPUP_TYPE.QUESTION (2 Buttons) or POPUP_TYPE.QUESTION_3 (3 Buttons)
  var objRet = Popup (PopupType,"Do you like this sample?");
  // 2) Show The answer to question (the Button clicked by the user) 
  showAnswerQuestion (objRet); 

}




/**
 * Text Popup: Notify
 * @param PopupType   POPUP_TYPE.INFO POPUP_TYPE.CONFIRM  POPUP_TYPE.ERR  POPUP_TYPE.ALARM  POPUP_TYPE.WARN
 */
function sample1Notify(PopupType){
  // PopupType:   POPUP_TYPE.[INFO, CONFIRM, WARN, ERR, ALARM]
  Popup (PopupType,"This is an example of Message\nThis is the second Line");
}



/**
 * SAMPLE_1: Text Popup
 */
function sample1(){
  var szAlertType =  selectGetSelVal(getElementById2('popupType1'));
  if (szAlertType == POPUP_TYPE.CHOICE){
    return sample1Choice();
  }else if (szAlertType == POPUP_TYPE.PROMPT){
    return sample1Prompt();
  }else if (szAlertType == POPUP_TYPE.QUESTION || szAlertType == POPUP_TYPE.QUESTION_3){
    return sample1Question(szAlertType);
  }else {
    return sample1Notify(szAlertType);
  }  
}

/**
 * Align popupType1Desc to popupType1 selected
 */
function onchangeSampleType1(){
	var Fn = "[onchangeSampleType1()] ";
	
  var szAlertType =  selectGetSelVal(getElementById2('popupType1'));
	jslog (JSLOG_DEBUG,Fn + "szAlertType=" + szAlertType + "  select same AlertType into popupType1");
	selectSelValue(getElementById2('popupType1Desc'), szAlertType);
}

/* ============================================================================
 *             Show answer question (used by SAMPLE_1, SAMPLE_2)
 ============================================================================ */

/**
 * Show the answer to Popup Question
 * @param objRet
 */
function showAnswerQuestion(objRet){
  var retBtn   = objRet.retBtn; 
  if (retBtn   == POPUP_BTN.CONFIRM){
    Popup(POPUP_TYPE.CONFIRM,'<label class="PopupGood">Your answer was YES</label>',  {szTitle: "GOOD ANSWER!"});
  }else if (retBtn   == POPUP_BTN.NO){
    Popup(POPUP_TYPE.ERR,'<label class="PopupErr">Your answer was NO</label>',  {szTitle: "WHY DON'T WOUT LIKE IT?"});
  }else if (retBtn   == POPUP_BTN.CANCEL){
    Popup(POPUP_TYPE.INFO,'<label class="PopupWarn">You have clicked CANCEL Button</label>');
  }else if (retBtn   == POPUP_BTN.CLOSE){
    Popup(POPUP_TYPE.INFO,'You have close the Popup without any Choice');
  }
}


/**
 * Show the answer to Popup Prompt
 * @param objRet
 */
function showAnswerPrompt (objRet){
  var Fn = "[PopupSample.js showAnswerPrompt] ";
  jslogObj (JSLOG_DEBUG,Fn + "objRet",objRet);
  var retBtn   = objRet.retBtn; 
  if (retBtn   == POPUP_BTN.CONFIRM){
    Popup(POPUP_TYPE.CONFIRM,'You have inserted: <b>' + objRet.promptValue + ' </b>'); 
  }else if (retBtn   == POPUP_BTN.CANCEL){
    Popup(POPUP_TYPE.INFO,'You have clicked the <b>Cancel</b> Button');
  }else if (retBtn   == POPUP_BTN.CLOSE){
    Popup(POPUP_TYPE.INFO,'You have close the Window <label class="PopupWarning">without any Choice</label> with one of the following cases:<ul type="square">' + 
      '  <li>Clicking the <b>X</b> on the Top Left Corner of the Window</li>' +
      '  <li>Clicking <b>ESC</b></li>' +
      '</ul><BR/>');
  }
}  

/**
 * Callback for Choice
 * Show the answer to Choice
 * @param objRet
 */
function showAnswerChoice(objRet){
  var Fn = "[PopupSample.js showAnswerChoice] ";
  jslogObj (JSLOG_TEST,Fn + "objRet",objRet);
  jslogObj (JSLOG_DEBUG,"objRet", objRet,true);
  // Example of objRet, if user select 2=Good and click OK
  // objRet: {
  //   "retBtn":1,
  //   "choiceValue":"2",
  //   "choiceText":"2 - Good",
  //   "arChoice":[{"value":"1","szText":"1 - Not Good","bSel":false},
  //               {"value":"2","szText":"2 - Good","bSel":true},
  //               {"value":"3","szText":"3 - Very Good","bSel":false},
  //               {"value":"4","szText":"4 - Excellent","bSel":false}]}  
  var retBtn   = objRet.retBtn; 
  if (retBtn   == POPUP_BTN.CONFIRM){
    var szMsgHtml = 'You have clicked the <b>OK</b> Button and you have selected the following items:<ul type="square">' + 
      '  <li><b>ChoiceValue:</b> ' +  objRet.choiceValue+ '</li>' +
      '  <li><b>ChoiceText:</b> ' +  objRet.choiceText + '</li>' +
      '</ul>';
    // add the table with the detail
    szMsgHtml += '<table class="Popup" width="100%">' +
    '  <th class="PopupTitle" colspan="3">DETAILS OF YOUR SELECTION</th>' +   
    '  <tr class="Popup">' +
    '    <td class="PopupHea" width="20%">VALUE</th>' +
    '    <td class="PopupHea" width="60%">TEXT</th>' +
    '    <td class="PopupHea" width="20%">SELECTED</th>' +
    '  </tr>';
    var arChoice = objRet.arChoice;
    for (var i=0; i<arChoice.length; i++){
      var arItem = arChoice[i];
      var szClassSel = arItem.bSel ? "PopupGood" : ""; 
      var szTdSel = arItem.bSel ?   '<img src="' + JSU_PATH_IMG +  'PopupConfirm.png" width="14" height="14">' : '';
      var szTr =  '  <tr class="Popup">' +
        '    <td class="PopupCenter"><b>' + arItem.value  +  '</b></td>' +
        '    <td class="' + szClassSel + ' PopupCenter">' + arItem.szText  +  '</td>' +
        '    <td class="PopupCenter">' + szTdSel + '</td>' +
        '  </tr>'; 
      szMsgHtml += szTr;
    }
    szMsgHtml += "</table><BR/>";
    Popup(POPUP_TYPE.INFO,szMsgHtml, 
        {szTitle: "CHOICE DETAILS", iWidth:600, iHeight: 600, bShowImg: false});
  }else if (retBtn   == POPUP_BTN.CANCEL){
    Popup(POPUP_TYPE.INFO,'You have clicked the <b>Cancel</b> Button');
  }else if (retBtn   == POPUP_BTN.CLOSE){
    Popup(POPUP_TYPE.INFO,'You have close the Window <label class="PopupWarning">without any Choice</label> with one of the following cases:<ul type="square">' + 
        '  <li>Clicking the <b>X</b> on the Top Left Corner of the Window</li>' +
        '  <li>Clicking <b>ESC</b></li>' +
        '</ul><BR/>');
  }
}



/* ============================================================================
 *             SAMPLE_2
 ============================================================================ */

/**
 * Align popupType2Desc to popupType2 selected
 */
function onchangeSampleType2(){
	var Fn = "[onchangeSampleType2()] ";
	
  var szAlertType =  selectGetSelVal(getElementById2('popupType2'));
	jslog (JSLOG_DEBUG,Fn + "szAlertType=" + szAlertType + "  select same AlertType into popupType2");
	selectSelValue(getElementById2('popupType2Desc'), szAlertType);
  elementShow (getElementById2("optChoice"),szAlertType == POPUP_TYPE.CHOICE,"block"); 
  elementShow (getElementById2("optPrompt"),szAlertType == POPUP_TYPE.PROMPT,"block"); 
}


/**
 * SAMPLE_2: HTML Popup
 */
function sample2(){
  var szAlertType =  selectGetSelVal(getElementById2('popupType2'));
  if (szAlertType == POPUP_TYPE.INFO){
    return sample2Info();
  }else if (szAlertType == POPUP_TYPE.WARN){
    return sample2Warn("");
  }else if (szAlertType == POPUP_TYPE.ERR){
    return sample2Err();
  }else if (szAlertType == POPUP_TYPE.CONFIRM){
    return sample2Confirm();
  }else if (szAlertType == POPUP_TYPE.ALARM){
    return sample2Alarm();
  }else if (szAlertType == POPUP_TYPE.CHOICE){
    return sample2Choice();
  }else if (szAlertType == POPUP_TYPE.PROMPT){
    return sample2Prompt();
  }else if (szAlertType == POPUP_TYPE.QUESTION || szAlertType == POPUP_TYPE.QUESTION_3){
    return sample2Question(szAlertType);
  }
}

function sample2Info(){
	// Prepare the Msg to display, with whatever HTML TAG
  var szMsg = 'This is an Information with <b>some part bold</b>, <i>some part Italic</i>,...<BR/><u>This is the Line 2 that is underlined</u><BR/>' +
    '<label class="PopupGood">This is the  line 3 in bold green (to enphasize <i>Good Msg</i>)</label><BR/>' +
  '<label class="PopupWarning">This is the  line 4 with Yellow Background (to enphasize <i>Warning Msg</i>)</label><BR/>' +
  '<label class="PopupError">This is the  line 5 in Bold Red (to enphasize <i>Error Msg</i>)</label><BR/><BR/>' +
    'You can try different Type of POPUP. The <b><u><i>Standard</i> POPUP</u></b> are:' +
  '<ul type="square">' +
    '<li><b>POPUP_TYPE.INFO</b> for Info</li>' +
    '<li><b>POPUP_TYPE.WARN</b> for Warning</li>' +
    '<li><b>POPUP_TYPE.ERR</b> for Error</li>' +
    '<li><b>POPUP_TYPE.ALARM</b> for Alarm</li>' +
    '<li><b>POPUP_TYPE.CONFIRM</b> for Confirmation</li>' +
    '<li><b>POPUP_TYPE.QUESTION</b> to ask a Question with 2 Buttons</li>' +
    '<li><b>POPUP_TYPE.QUESTION_3</b> to ask a Question with 3 Buttons</li>' +
    '<li><b>POPUP_TYPE.PROMPT</b> to Prompt for a value</li>' +
    '</ul>';
  // Show the Popup 
  Popup(POPUP_TYPE.INFO,szMsg);
}

/*
 *    @param szTitle {String} if it is different from "" or null it is set as Title into Popup, else Default is used (WARNING in this case)
 */
function sample2Warn(szTitle){
   var szMsg = 'There were 2 Warnings and we can enphasize them using Popup.css class <b>PopupWarning</b><BR/><BR/>' +
       '<b>WARNING LIST:</b>' +
       '<ul type="square">' +
        '<li><label class="PopupWarning">WARNING CODE 001234:</label> This an Example of a long phrase that describe this Warning. This phrase will be automatically splitted by Popup into more lines: we do not have to worrie about inserting newline into the description.</li> ' +
        '<li><label class="PopupWarning">WARNING CODE 1234568:</label> This an Example of this Warning Description</li>' +
      '</ul>';
    Popup(POPUP_TYPE.WARN,szMsg,{szTitle:szTitle});
}

function sample2Err(){
  Popup(POPUP_TYPE.ERR,'<label class="PopupError">This is an ERROR!</label><BR/>But dont worrie it is only an example<BR/><label class="PopupGood">Everything is still working properly :o)</label>');
}


function sample2Alarm(){
  var szMsg =  '<label class="PopupError">The CPU temperature is critically hight!!!</label>' +  
        '<img src="' +  JSU_PATH_ABOUT_IMG +  'ComputerFire.gif" width="70" height="70"  />';
  Popup(POPUP_TYPE.ALARM,szMsg );
}



/*
 * Question with 2 or 3 Buttons
 */
function sample2Question(szPopupType){
  //1) Show Popup
  var objRet = Popup(szPopupType,'Do you like <b>Popup API</b>?');
  // 2) show answer to question
  showAnswerQuestion (objRet);
  
}


/**
 * Show a POPUP_TYPE.CONFIRM with a table with various images (The Path of images is relative to Popup.html)
 * 
 */
function sample2Confirm(){
  // NOTE: the image Path are relative to Popup.html Path
  var szMsg = 'Example of Confirmation: <label class="PopupGood">All the Test have been Completed.</label><BR/><BR/>' +
    'Follow an Example of TABLE that can be used to display the Abstract of some TESTS:<BR/><BR/>' +
    '<table class="Popup" width="95%">' +
    '  <th class="PopupTitle" colspan="3">EXAMPLE OF TEST RESULTS</th>' +   
    '  <tr class="Popup">' +
    '    <td class="PopupHea" width="30%">TEST</th>' +
    '    <td class="PopupHea" width="30%">RESULT</th>' +
    '    <td class="PopupHea" width="40%">STATE</th>' +
    '  </tr>' +
    '  <tr class="Popup">' +
    '    <td class="PopupLeft"><b>Test 1</b></td>' +
    '    <td class="PopupGood PopupCenter">OK</td>' +
    '    <td class="PopupCenter"><img src="' + JSU_PATH_IMG + 'PopupOk.jpg" width="20" height="20"></td>' +
    '  </tr>' +
    '  <tr class="Popup">' +
    '    <td class="PopupLeft"><b>Test 2</b></td>' +
    '    <td class="PopupGood PopupCenter">OK</td>' +
    '    <td class="PopupCenter"><img src="' + JSU_PATH_IMG + 'PopupOk.jpg" width="20" height="20"></td>' +
    '  </tr>' +
    '  <tr class="Popup">' +
    '    <td class="PopupLeft"><b>Test 3</b></td>' +
    '    <td class="PopupWarning PopupCenter">WARNING</td>' +
    '    <td class="PopupCenter"><img src="' + JSU_PATH_IMG + 'PopupWarning.png" width="20" height="20"></td>' +
    '  </tr>' +
    '  <tr class="Popup">' +
    '    <td class="PopupLeft"><b>Test 4</b></td>' +
    '    <td class="PopupError PopupCenter">ERROR</td>' +
    '    <td class="PopupCenter"><img src="' + JSU_PATH_IMG + 'PopupError.png" width="20" height="20"></td>' +
    '  </tr>' +
    '<table><BR/>';
  Popup(POPUP_TYPE.CONFIRM,szMsg);
}


/**
 * Show PopupChoice with the option set by User
 */
function sample2Choice(){
  var Fn="[sample2Choice] ";
  var CHOICE_NUM = 20;
  
  // Prepare szMsgHtml
  var szSel =  selectGetSelVal(getElementById2('selectChoiceMultiSel'));
  jslog (JSLOG_DEBUG, Fn + "szSel=" + szSel);
  var bChoiceMultiSel = selectGetSelVal(getElementById2('selectChoiceMultiSel')) == "TRUE";
  var szChoiceLabel = bChoiceMultiSel ? "<b>Select 0..N FIELDS</b><BR/>" :  "<b>Select only One FIELD</b>";
  // Prepare an Example of arChoice
  var arChoice  = new Array();
  for (var i=1;i<=CHOICE_NUM;i++){
    var arItem = { 
           value:i, 
           szText:"This is an Example of the Item " + i, 
           bSel: false
           };
    if (!bChoiceMultiSel && i == 10){
      arItem.bSel = true; // Selected
    }    
    if (bChoiceMultiSel && i <=5){
      arItem.bSel = true; // Selected
    }    
    arChoice.push (arItem);
  }
  var iChoiceMultiSize = null;
  var szMsgHtml = "";
  if (bChoiceMultiSel){
    // Get the optional Size
    var selectChoiceSize = getElementById2('selectChoiceSize');
    var iChoiceMultiSize = parseInt(selectChoiceSize[selectChoiceSize.selectedIndex].value);
    szMsgHtml = 'Example of <b>Multi Selection Choice</b> with:<ul>' + 
        '<li>' + CHOICE_NUM + ' items </li>' + 
        '<li>First 5 Items pre-selected</li>' +
        '<li>Visible Items=' + iChoiceMultiSize +'</li></ul><BR/>';
  }else{
    szMsgHtml = "Example of <b>Single Selection Choice</b> with Item 10 pre-selected.<BR/><BR/>"; 
  }
  // 1) Show Popup
  var objRet = PopupChoice (szMsgHtml,szChoiceLabel,arChoice,
      { bChoiceMultiSel: bChoiceMultiSel,
       iChoiceMultiSize: iChoiceMultiSize
      });
  // 2) Show The answer to choice: item chosen and Button clicked
  showAnswerChoice(objRet);
}


/**
 * Show Hide divChoiceMultiSel depending on selectChoiceType  
 */
function onchangeChoiceMultiSel(){
  // Get the bMultiSize option selected
  var bChoiceMultiSel = selectGetSelVal(getElementById2('selectChoiceMultiSel')) == "TRUE";
  elementShow (getElementById2('divChoiceSize'),bChoiceMultiSel,'inline');
    
}















function showSampleAbout(){
  
  showJsuAbout({szPathAboutImg: JSU_PATH_ABOUT_IMG});
}



/**
 * Show PopupChoice with the option set by User
 */
function showSampleChoice(){
  var CHOICE_NUM = 40;
  
  // Get the bMultiSize option selected
  var selectChoiceType = getElementById2('selectChoiceType');
  var bChoiceMultiSel = (selectChoiceType[selectChoiceType.selectedIndex].value == "SINGLE") ? false : true;
  var szChoiceLabel = bChoiceMultiSel ? "<b>Select 0..N FIELDS</b><BR/>" :  "<b>Select only One FIELD</b>";
  // Prepare an Example of arChoice
  var arChoice  = new Array();
  for (var i=1;i<=CHOICE_NUM;i++){
    var arItem = { 
           value:i, 
           szText:"This is an Example of the Item " + i, 
           bSel: false
           };
    if (!bChoiceMultiSel && i == 10){
      arItem.bSel = true; // Selected
    }    
    if (bChoiceMultiSel && i <=5){
      arItem.bSel = true; // Selected
    }    
    arChoice.push (arItem);
  }
  var iChoiceMultiSize = null;
  if (bChoiceMultiSel){
    // Get the optional Size
    var selectChoiceSize = getElementById2('selectChoiceSize');
    var iChoiceMultiSize = parseInt(selectChoiceSize[selectChoiceSize.selectedIndex].value);
  }
  var szMsgHtml = bChoiceMultiSel ? "Example of <b>Multi Selection Choice</b> with First 5 Items pre-selected." 
                  : "Example of <b>Single Selection Choice</b> with Item 10 pre-selected."; 
  
  var objRet = PopupChoice (szMsgHtml,szChoiceLabel,arChoice,
      {fnCallback:callbackChoice,
       bChoiceMultiSel: bChoiceMultiSel,
       iChoiceMultiSize: iChoiceMultiSize
      });
}



/**
 * Show Popup PROMPT with the option set by User
 */
function sample2Prompt(){
  var Fn = "[sample2Prompt] ";
  var szPromptType = selectGetSelVal(getElementById2("szPromptType"));
  var szMsg = (szPromptType == PROMPT_TYPE.NUMBER) ?
     "Please Insert a <B>Number</b>" :  
    "Please Insert a <B>Text</b>";  
  var objOpt ={
    szPromptType: szPromptType,
    szPromptLabel: getElementById2 ("szPromptLabel").value,
    szPromptValue: getElementById2 ("szPromptValue").value,
    iPromptMin:  parseInt (getElementById2("iPromptMin").value),
    iPromptMax: parseInt (getElementById2 ("iPromptMax").value),
    iPromptWidth: parseInt(getElementById2  ("iPromptWidth").value)
  };  
  jslogObj (JSLOG_DEBUG,Fn + "objOpt", objOpt );
  var objRet = Popup (POPUP_TYPE.PROMPT,szMsg,objOpt);
  showAnswerPrompt (objRet);

}


/* ============================================================================
 *             SAMPLE_3
 ============================================================================ */


function onchangeSample3(){
  var Fn="[onchangeSample3] ";
  var szType =  selectGetSelVal(getElementById2('type3'));
  elementShow (getElementById2("optLayout"),szType == "LAYOUT","block"); 
    
}

/**
 * Show Popup Info with the option set by User
 */
function sample3Layout(){
  // var Fn = "[sample3Layout] ";
  var objOpt ={
      bShowImg: selectGetSelVal (getElementById2("bShowImg")) == "TRUE",
      bResize: selectGetSelVal (getElementById2("bResize")) == "TRUE",
      szTitle: getElementById2("szTitle").value,
      iWidth: selectGetSelVal (getElementById2("iWidth")) 
    };  
  
  var szMsg = 'Popup with a <b>CUSTOM LAYOUT</b>' +
    '  <ul type="square">' +
    '   <li><b>bShowImg: </b>' +  objOpt.bShowImg +  '</li>' +
    '   <li><b>bResize: </b>' +  objOpt.bResize +  '</li>' +
    '   <li><b>iWidth: </b>' +  objOpt.iWidth+  '</li>' +
    '  </ul>';
  Popup(POPUP_TYPE.INFO,szMsg, objOpt);

}



/**
 * SAMPLE_3: HTML Popup
 */
function sample3(){
  var szType =  selectGetSelVal(getElementById2('type3'));
  if (szType == "LAYOUT"){
    return sample3Layout();
  }else if (szType == "1BTN"){
    return sample3CustomBtn1();
  }else if (szType == "2BTN"){
    return sample3CustomBtn2();
  }else if (szType == "3BTN"){
    return sample3CustomBtn3();
  }
}


/*
 * Custom Btn Confirm = "CONTINUE"  
 */
function sample3CustomBtn1(){
  var szMsg = '<b>1 Custom Button</b><BR/><BR/>Popup Option:<ul><li><b>szConfirmLabel</b>: "CONTINUE"</li></ul>';
  Popup(POPUP_TYPE.ERR,szMsg,{szConfirmLabel: "CONTINUE"});
}


/*
 * 2 Custom Btn, change also Btn Width  
 */
function sample3CustomBtn2(){
  var szMsg = '<b>2 Custom Button</b><BR/><BR/>Popup Option:<ul>' +
   '<li><b>szConfirmLabel</b>: "YES I Like it!"</li>' +
   '<li><b>iConfirmWidth</b>: 200</li>' +
   '<li><b>szNoLabel</b>: "NO I don\'t LIKE IT"</li>' +
   '<li><b>iNoWidth</b>: 200</li>' +
   '</ul></BR>' +
   'Do you like <b>Popup API</b>?';
  var objRet = Popup(POPUP_TYPE.QUESTION,szMsg,
      {szConfirmLabel: "YES I Like it!",iConfirmWidth:200,
       szNoLabel: "NO I don't LIKE IT",iNoWidth:200 }
        );
  showAnswerQuestion (objRet);
}

/*
 * 3 Custom Btn, change also Width  
 */
function sample3CustomBtn3(){
  var szMsg = '<b>3 Custom Button</b><BR/><BR/>Popup Option:<ul>' +
  '<li><b>szConfirmLabel</b>: "YES It is Very Interesting"</li>' +
  '<li><b>iConfirmWidth</b>: 200</li>' +
  '<li><b>szNoLabel</b>: "NOT Very Much"</li>' +
  '<li><b>iNoWidth</b>: 130</li>' +
  '<li><b>szCancelLabel</b>: "INDIFFERENT"</li>' +
  '<li><b>iCancelWidth</b>: 130</li>' +
  '</ul></BR>' +
  'Do you like <b>Popup API</b>?';
  var objRet = Popup(POPUP_TYPE.QUESTION_3, szMsg,
      {szConfirmLabel: "YES It is Very Interesting",iConfirmWidth:200,
        szNoLabel: "NOT Very Much",iNoWidth:130, 
        szCancelLabel: "INDIFFERENT",iCancelWidth:130}
  );
  showAnswerQuestion (objRet);
  
}



/* ============================================================================
 *             SAMPLE_4
 ============================================================================ */

/*
 * Popup with a Video  
 */
function sample4Video(){
	var szMsg = '<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
  // Show Popup with Video   
  Popup(POPUP_TYPE.INFO, szMsg,
      // objOpt
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "Video Example"});
  
}




/**
 * SAMPLE_4: HTML Popup
 */
function sample4(){
  var szType =  selectGetSelVal(getElementById2('type4'));
  if (szType == "VIDEO"){
    return sample4Video();
  }else if (szType == "ABOUT"){
    return showJsuPopupAbout();
  }
}

/**
 * Align type4Desc to type4 selected
 */
function onchangeSampleType4(){
	var Fn = "[onchangeSampleType4()] ";
	
  var szType =  selectGetSelVal(getElementById2('type4'));
	jslog (JSLOG_DEBUG,Fn + "szAlertType=" + szType + "  select same AlertType into type4");
	selectSelValue(getElementById2('type4Desc'), szType);
}


//===================================================================================================
//  BELOW CODE is not strictly related to the Sort feature, but it is ONLY Related to JS Code 
//===========================================================================================


var JS1_NOTIFY= '// 1) Show Popup \n' +
'//PopupType:   POPUP_TYPE.INFO, .CONFIRM, .WARN, .ERR, .ALARM] \n' +
'Popup (PopupType,"This is an example of Message\\nThis is the second Line"); ';

var JS1_QUESTION= '// 1) Show Popup \n' +
'// PopupType = POPUP_TYPE.QUESTION (2 Buttons) or POPUP_TYPE.QUESTION_3 (3 Buttons) \n'+
'var objRet = Popup (PopupType,"Do you like this sample?") \n'+
'// 2) manage the Popup answer, returned into objRet - example: objRet= {"retBtn": "NO"}\n' + 
'  var retBtn   = objRet.retBtn; \n' +
'  if (retBtn   == POPUP_BTN.CONFIRM){  // Popup Closed clicking OK \n' + 
'  }else if (retBtn   == POPUP_BTN.NO){ // Popup Closed clicking NO \n' + 
'  }else if (retBtn   == POPUP_BTN.CANCEL){  // Popup Closed clicking CANCEL \n' + 
'  }else if (retBtn   == POPUP_BTN.CLOSE){  // Popup Closed clicking X or ESC \n' +
'  ...';


var JS1_PROMPT= '// 1) Show Popup \n' +
'Popup (POPUP_TYPE.PROMPT, \n' +
'  "Insert a VOTE [1..10] in the field below\\n(You can insert a  Value out of Range [1..10] to see Validation Features)\\n\\n", \n' +
'  // objOpt Option: PromptLabel, validate \n' +
'  { szPromptLabel: "VOTE [1..10]: ", \n' +
'     // Validate Option: NUMBER must be in range [1..10] \n' +
'     szPromptType: PROMPT_TYPE.NUMBER,  iPromptMin:1,  iPromptMax: 10,iPromptWidth:50, \n' +
'   }); \n' +
'  // Example of objRet, if user insert 9 and click OK: objRet= {"retBtn": "CONFIRM", "promptValue": "9"} \n' +
'  var retBtn   = objRet.retBtn; \n' +
'  if (retBtn   == POPUP_BTN.CONFIRM){  // Popup Closed clicking OK \n' + 
'  }else if (retBtn   == POPUP_BTN.CANCEL){  // Popup Closed clicking CANCEL \n' + 
'  }else if (retBtn   == POPUP_BTN.CLOSE){  // Popup Closed clicking X or ESC \n' +
'  ...';


var JS1_CHOICE= '// 1) Show Popup \n' +
'var objRet = PopupChoice ( //Messages \n' +
'  "Please Choose a Vote for Popup API",  "Popup VOTE: ", \n' +
'  // arChoice: "Very Good" is pre-selected  \n' +
'  [{value:1, szText:"1 - Not Good", bSel:false},  \n' +
'     {value:2, szText:"2 - Good", bSel:false}, \n' +
'     {value:3, szText:"3 - Very Good", bSel:true}, \n' +
'     {value:4, szText:"4 - Excellent", bSel:false}, \n' +
'  ]); \n' +
'  // Example of objRet, if user select 2=Good and click OK: \n' +
'  // objRet={\n' +
'  //   "retBtn":"CONFIRM",\n' +
'  //   "choiceValue":"2",\n' +
'  //   "choiceText":"2 - Good",\n' +
'  //   "arChoice":[{"value":"1","szText":"1 - Not Good","bSel":false},\n' +
'  //               {"value":"2","szText":"2 - Good","bSel":true},\n' +
'  //               {"value":"3","szText":"3 - Very Good","bSel":false}\n' +
'  //               {"value":"4","szText":"4 - Excellent","bSel":false}]}\n' +  
'// 2) manage the Popup answer, returned into objRet \n' + 
'  var retBtn   = objRet.retBtn; \n' +
'  if (retBtn   == POPUP_BTN.CONFIRM){  // Popup Closed clicking OK \n' + 
'  }else if (retBtn   == POPUP_BTN.CANCEL){  // Popup Closed clicking CANCEL \n' + 
'  }else if (retBtn   == POPUP_BTN.CLOSE){  // Popup Closed clicking X or ESC \n' +
'  ...';




var JS2_NOTIFY= '// Prepare the Msg to display, with whatever HTML TAG \n' +
'var szMsgHTML = "This is an Information with <b>some part bold</b>, <i>some part Italic</i>,... "; \n' +
'// Show Popup \n' +
'//PopupType:   POPUP_TYPE.INFO, .CONFIRM, .WARN, .ERR, .ALARM] \n' +
'Popup (PopupType,szMsgHTML); ';

var JS2_QUESTION= '// 1) Show Popup, using whatever HTML Tag in szMsg \n' +
'// PopupType = POPUP_TYPE.QUESTION (2 Buttons) or POPUP_TYPE.QUESTION_3 (3 Buttons) \n'+
'var objRet = Popup (PopupType,"Do you like <b>Popup API</b>") \n'+
'// 2) manage the Popup answer, returned into objRet - example: objRet= {"retBtn": "NO"}\n' + 
'  var retBtn   = objRet.retBtn; \n' +
'  if (retBtn   == POPUP_BTN.CONFIRM){  // Popup Closed clicking OK \n' + 
'  }else if (retBtn   == POPUP_BTN.NO){ // Popup Closed clicking NO \n' + 
'  }else if (retBtn   == POPUP_BTN.CANCEL){  // Popup Closed clicking CANCEL \n' + 
'  }else if (retBtn   == POPUP_BTN.CLOSE){  // Popup Closed clicking X or ESC \n' +
'  ...';


var JS2_PROMPT= '// 1) Show Popup, using whatever HTML Tag in szMsg \n' +
'Popup (POPUP_TYPE.PROMPT, \n' +
'  "Please insert a <b>NUMBER</b>", \n' +
'  // objOpt Option: PromptLabel, validate \n' +
'  { szPromptLabel: "VOTE [1..10]: ", \n' +
'     // Validate Option: NUMBER must be in range [1..10] \n' +
'     szPromptType: PROMPT_TYPE.NUMBER,  iPromptMin:1,  iPromptMax: 10,iPromptWidth:50, \n' +
'   }); \n' +
'  // Example of objRet, if user insert 9 and click OK: objRet= {"retBtn": "CONFIRM", "promptValue": "9"} \n' +
'  var retBtn   = objRet.retBtn; \n' +
'  if (retBtn   == POPUP_BTN.CONFIRM){  // Popup Closed clicking OK \n' + 
'  }else if (retBtn   == POPUP_BTN.CANCEL){  // Popup Closed clicking CANCEL \n' + 
'  }else if (retBtn   == POPUP_BTN.CLOSE){  // Popup Closed clicking X or ESC \n' +
'  ...';


var JS2_CHOICE= '// 1) Show Popup, using whatever HTML Tag in szMsg. In this example item10 is pre-selected \n' +
'var objRet = PopupChoice ( //Messages \n' +
'  "Example of <b>Single Selection Choice</b>......",  "<b>Select only one field</b>", \n' +
'  // arChoice: \n' +
'  [{value:1, szText:"This is an example of the Item1", bSel:false},  \n' +
'     {value:2, szText:"This is an example of the Item2",  bSel:false}, \n' +
'     ....... \n' +
'     {value:10, szText:"This is an example of the Item10",  bSel:true}, \n' +
'     ....... \n' +
'  ]); \n' +
'  // Example of objRet, if user select Item2 and click OK: \n' +
'  // objRet={\n' +
'  //   "retBtn":"CONFIRM",\n' +
'  //   "choiceValue":"2",\n' +
'  //   "choiceText":"This is an example of the Item2",\n' +
'  //   "arChoice":[{"value":"1","szText":"This is an example of the Item1","bSel":false},\n' +
'  //               {"value":"2","szText":"This is an example of the Item2","bSel":true},\n' +
'  //               ..........................................'
'  //               .......................................... }]}\n' +  
'// 2) manage the Popup answer, returned into objRet \n' + 
'  var retBtn   = objRet.retBtn; \n' +
'  if (retBtn   == POPUP_BTN.CONFIRM){  // Popup Closed clicking OK \n' + 
'  }else if (retBtn   == POPUP_BTN.CANCEL){  // Popup Closed clicking CANCEL \n' + 
'  }else if (retBtn   == POPUP_BTN.CLOSE){  // Popup Closed clicking X or ESC \n' +
'  ...';





var JS3_OPT =  
'function Popup(szPopupType, szMsgHtml,objOpt){ \n' +
' ........\n' +
'} \n' +
'// objOpt can be used to set OptionalParameter: \n' +
' /* @param objOpt    [Object]}    Optional Object to change default Option:\n' +
' *    szTitle:    {String}      change default Title\n' +
' *    iWidth:  {Number}      Optional PopupWidth: if it passed it is used - Else DEfault is used\n' +
' *    szConfirmLabel:  {String} Label of Confirm Button \n' +
' *    iConfirmWidth:   {Number}  Width of Confirm Button \n' +
' *    szNoLabel:  {String}      Label of No Button \n' +
' *    iNoWidth:   {Number}      Width of No Button \n' +
' *    szNoLabel:  {String}      Label of No Button \n' +
' *    iNoWidth:   {Number}      Width of No Button \n' +
' *    bShowImg:    {Boolean}     true to show Image  (Default=false)\n' +
' *    bResize:    {Boolean}     true to allow Resize Dialog  (Default=true)\n' +
' *    bCloseOnEscape: {Boolean}  Default true   \n' +
' *    ------------------------------------------ ONLY For POPUP_TYPE.CHOICE:\n' + 
' *    bChoiceMultiSel: {Boolean}  true if MultiSelect,else single select. Default false\n' +
' *    iChoiceMultiSize: {Number}  if bChoiceMultiSel=true:  size (Num item) to display without Scrollbar\n' +
' *    ------------------------------------------ ONLY For POPUP_TYPE.PROMPT: \n' +
' *    szPromptType: {String}  PROMPT_TYPE.NUMBER  PROMPT_TYPE.STRING default=PROMPT_TYPE.STRING\n' +       
' *    szPromptLabel: {String}  Label in Front of Prompt  \n' +
' *    szPromptValue: {String}  Default Value to set       \n' +
' *    iPromptWidth: {Number}  Width (px) of the Prompt Item       \n' +
' *    iPromptMin: {Number}   Min (MinValue for PROMPT_TYPE.NUMBER, MinLen for PROMPT_TYPE.STRING)\n' +          
' *    iPromptMax: {Number}   Max (MaxValue for PROMPT_TYPE.NUMBER, MaxLen for PROMPT_TYPE.STRING)';          

var JS4_VIDEO= '// 1) Show Popup with Video \n' +
'Popup(POPUP_TYPE.INFO, \n' +
'   // szMsg = iframe with Video URL \n' + 
'   //    Example: <iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe> \n' + 
'   szMsg,\n' +
'   // objOpt \n' +
'   {bShowImg:false,iWidth:620, szTitle: "Video Example"}); \n';


var JS4_ABOUT= '// 1) Show Popup with About\n' +
'Popup(POPUP_TYPE.INFO, \n' +
'   szMsg, // szMsg = HTML with About (see about.js for details) \n' + 
'   // objOpt \n' +
'   {bShowImg:false,iWidth:1100, szTitle: "JSU ABOUT"}); \n';


/**
 * Show JS Code Hightlighted for Sample1
 * @param event
 * @returns
 */
function sample1Code(event){
  // Get the szAlertType set by User 
  var szAlertType =  selectGetSelVal(getElementById2('popupType1Desc'));
  var szTip="";
  
  if (szAlertType == POPUP_TYPE.CHOICE){
    szTip = JS1_CHOICE;
  }else if (szAlertType == POPUP_TYPE.PROMPT){
    szTip = JS1_PROMPT;
  }else if (szAlertType == POPUP_TYPE.QUESTION || szAlertType == POPUP_TYPE.QUESTION_3){
    szTip = JS1_QUESTION;
  }else {
    szTip = JS1_NOTIFY;
  }  
  TipFixCode(szTip,event,{iWidth:1000, iTipMaxHeight:500,szTitle:"JS Source Code - POPUP_TYPE=" + szAlertType});
  
}


/**
 * Show JS Code for Sample2 (in a TextBox because it has HTML tags)
 * @param event
 * @returns
 */
function sample2Code(event){
  // Get the szAlertType set by User 
  var szAlertType =  selectGetSelVal(getElementById2('popupType2Desc'));
  var szTip="";
  
  if (szAlertType == POPUP_TYPE.CHOICE){
    szTip = JS2_CHOICE;
  }else if (szAlertType == POPUP_TYPE.PROMPT){
    szTip = JS2_PROMPT;
  }else if (szAlertType == POPUP_TYPE.QUESTION || szAlertType == POPUP_TYPE.QUESTION_3){
    szTip = JS2_QUESTION;
  }else {
    szTip = JS2_NOTIFY;
  }  
  TipFixTextArea(szTip,event,{iColNum:130, iRowNum:20,szTitle:"JS Source Code - POPUP_TYPE=" + szAlertType});
  
}



/**
 * Show JS Code Hightlighted for Sample3
 * @param event
 * @returns
 */
function sample3Code(event){
  TipFixCode(JS3_OPT,event,{iWidth:1000, iTipMaxHeight:400,szTitle:"JS Source Code - Popup Option" });
}


/**
 * Show JS Code Hightlighted for Sample4
 * @param event
 * @returns
 */
function sample4Code(event){
  // Get the szAlertType set by User 
  var szType =  selectGetSelVal(getElementById2('type4Desc'));
  var szTypeText =  selectGetSelText(getElementById2('type4Desc'));
  var szTip="";
  
  if (szType == "VIDEO"){
    szTip = JS4_VIDEO;
    TipFixTextArea(szTip,event,{szTitle:"JS Source Code - Advanced Sample=" + szTypeText});
  }else if (szType == "ABOUT"){
    szTip = JS4_ABOUT;
    TipFixTextArea(szTip,event,{szTitle:"JS Source Code - Advanced Sample=" + szTypeText});
  }
  
}
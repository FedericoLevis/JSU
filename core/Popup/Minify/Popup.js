/* =========================================================================================
Status:              To try onresize="PopupDlgOnResize()"  sul body del document  aggiunto al volo se onresize
                     
                     
@File:               Popup.js
@Author:             Federico Levis
@Since:              Mar2016   
Description:         JS API for Alert (Information, Error, ...Question)
Required:            JSUtily: 
                    - conf: etc/conf.js (or Other)  
                    - locale: locale/lan_en.js (or Other)  
                    - common: jslog.js, dom-drag.js, json2.js,  
                    - CSS:      Popup.css
                    - html with base Alert Layout: Popup.html  

DISCLAIMER
Copyright by Federico Levis http://federicolevis.wix.com/jsu JS Utility API
All rights reserved: UNAUTHORIZED COPYING, REPRODUCTION, REPUBLISHING, UPLOADING, POSTING, TRANSMITTING OR DUPLICATING IS PROHIBITED
========================================================================================= */
function PopupShowDlg(e,o,t){var P="[Popup.js PopupShowDlg] "
jslog(JSLOG_TEST,P+JSLOG_FUN_START)
var i=PopupGetBrowser(),l=PopupGetBrowserMode(i)
if(jslog(JSLOG_TEST,P+" szBrowser="+i+"  szBrowserMode="+l),l==POPUP_BROWSER_MODE_ALERT)return PopupShowAlert(e,o)
o=PopupStr2Html(o)
var n=POPUP_DEF_WIDTH,p=POPUP_DEF_HEIGHT,O="scroll=no;",_=POPUP_DEF_RESIZE?"resizable=yes;":"resizable=no;"
jslogGetLogLev()>0&&(_="resizable=yes;"),null!=t&&(void 0!=t.iWidth&&null!=t.iWidth&&t.iWidth&&(n=t.iWidth),void 0!=t.bScroll&&null!=t.bScroll&&t.bScroll&&(O="scroll=yes;"),void 0!=t.bResize&&null!=t.bResize&&t.bResize&&(_="resizable=yes;"))
var u="dialogWidth="+n+"px; dialogHeight="+p+"px; "+O+_+"center=yes;",s=new Object
s.szPopupType=e,s.iHeight=p,s.szMsgHtml=o,s.objOpt=t,s.iWidth=n,s.objJslogOpt=jslogGetOpt()
var T=popupPathHtml+POPUP_HTML
if(jslogObj(JSLOG_TEST,"parIn",s),1!=POPUP_OPACITY){var E=document.getElementsByTagName("BODY")[0],r=E.style.opacity
jslog(JSLOG_TEST,"From iOpacity="+r+" To "+POPUP_OPACITY),E.style.opacity=POPUP_OPACITY}if(l==POPUP_BROWSER_MODE_POPUP){jslog(JSLOG_TEST,P+i+" url="+T+" szFeatures="+u),loadingShow(!0),s.elLoading=loadingGetEl()
var S=window.showModalDialog(T,s,u)
void 0==S&&(S=new Object,S.iRetBtn=POPUP_BTN_CLOSE),loadingShow(!1)}else if(l==POPUP_BROWSER_MODE_POPUP_URL){var a=window.screen.width/2-n/2,d=window.screen.height/2-p/2
u="center=yes;dialogWidth="+n+"px; dialogHeight:"+p+"px; dialogTop:"+d+"px; dialogLeft:"+a+"px;directories:no;titlebar:no;toolbar:no;location:no;status:no;menubar:no;scroll=no;resizable="+_+";",T+=obj2URIQueryString(s),jslog(JSLOG_TEST,P+i+"\nurl="+T+"\nszFeatures="+u)
var S=window.showModalDialog(T,window,u)
void 0==S&&(S=new Object,S.iRetBtn=POPUP_BTN_CLOSE)}return jslogObj(JSLOG_TEST,"retObj",S),1!=POPUP_OPACITY&&void 0!=E&&(jslog(JSLOG_TEST,"Restore iOpacity="+r),E.style.opacity=r),jslog(JSLOG_TEST,P+JSLOG_FUN_END),S}function PopupShowModalDialog(){}function PopupShowAlert(e,o){var t="[Popup.js PopupShowDlg] ",P=new Object
P.iRetBtn=POPUP_BTN_CLOSE,jslog(JSLOG_TEST,t+JSLOG_FUN_START)
var i=msgHtml2Str(o)
return e==POPUP_TYPE.INFO||e==POPUP_TYPE.CONFIRM||e==POPUP_TYPE.ERR||e==POPUP_TYPE.WARN?(alert(i),null):(e==POPUP_TYPE.QUESTION?confirm(i)?P.iRetBtn=POPUP_BTN_CONFIRM:P.iRetBtn=POPUP_BTN_NO:alert("ERROR: PopupType="+e+" is NOT SUPPORTED with this Browser.\n\nMessage was:\n"+i),P)}function PopupGetBrowser(){var e="[Popup.js PopupGetBrowser] ",o=(navigator.appName,POPUP_BROWSER_TYPE_UNKNOWN)
return"undefined"!=typeof InstallTrigger?o=POPUP_BROWSER_TYPE_FIREFOX:(navigator.appName==APP_NAME_IE||navigator.appName==APP_NAME_IE_11&&null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent))&&(o=POPUP_BROWSER_TYPE_IE),jslog(JSLOG_TEST,e+"szBrowser="+o+" -  navigator.appCodeName="+navigator.appCodeName+"  navigator.appName="+navigator.appName),o}function PopupGetBrowserMode(e){var o
return o=e==POPUP_BROWSER_TYPE_IE?POPUP_BROWSER_IE_MODE:e==POPUP_BROWSER_TYPE_FIREFOX?POPUP_BROWSER_FIREFOX_MODE:POPUP_BROWSER_OTHER_MODE}function PopupDlgClassInit(e){var o="[Popup.js PopupDlgClassInit] "
jslog(JSLOG_TEST,o+JSLOG_FUN_START)
var t=e
e==POPUP_TYPE.QUESTION_3&&(t=POPUP_TYPE.QUESTION)
var P=POPUP_TITLE_CLASS_PREFIX+t
jslog(JSLOG_TEST,o+"set PopupTblHea className="+P),document.getElementById("PopupTblHea").className=P
var i=POPUP_IMG_CLASS_PREFIX+t
jslog(JSLOG_TEST,o+"set PopupImg className="+i),document.getElementById("PopupImg").className=i
var l=POPUP_TBLMSG_CLASS_PREFIX+t
jslog(JSLOG_TEST,o+"set PopupTblMsg className="+l),document.getElementById("PopupTblMsg").className=l,jslog(JSLOG_TEST,o+JSLOG_FUN_END)}function PopupIdIsVisible(e){var o="[Popup.js PopupIdIsVisible] ",t=document.getElementById(e)
return null==t?alert(o+"SW ERROR szId="+e+"   NOT FOUND"):"none"!=t.style.display}function PopupElShow(e,o){o?(e.style.display="inline",e.style.visibility="visible"):(e.style.display="none",e.style.visibility="hidden")}function PopupIdShow(e,o){var t="[Popup.js PopupIdShow] "
jslog(JSLOG_TEST,t+"szId="+e+" bShow="+o)
var P=document.getElementById(e)
return null==P?alert(t+"SW ERROR szId="+e+"   NOT FOUND"):void PopupElShow(P,o)}function PopupIdHideIfRequired(e,o){o||PopupIdShow(e,o)}function PopupDlgBtnInit(e){var o="[Popup.js PopupDlgBtnInit] "
jslog(JSLOG_TEST,o+JSLOG_FUN_START)
var t=document.getElementById("PopupConfirm"),P=document.getElementById("PopupNo"),i=document.getElementById("PopupCancel"),l=e.szPopupType,n=l==POPUP_TYPE.QUESTION||l==POPUP_TYPE.QUESTION_3,p=l==POPUP_TYPE.QUESTION_3,O=n?POPUP_BTN_LABEL_QUESTION_CONFIRM:POPUP_BTN_LABEL_CONFIRM,_=POPUP_BTN_LABEL_QUESTION_NO,u=POPUP_BTN_LABEL_QUESTION_CANCEL
jslog(JSLOG_TEST,o+"Default Label: szConfirmLabel="+O+"   szNoLabel="+_+"   szCancelLabel="+u)
var s=e.objOpt
null!=s&&(void 0!=s.szConfirmLabel&&""!=s.szConfirmLabel&&(O=s.szConfirmLabel),void 0!=s.szNoLabel&&""!=s.szNoLabel&&(_=s.szNoLabel),void 0!=s.szCancelLabel&&""!=s.szCancelLabel&&(u=s.szCancelLabel),void 0!=s.iConfirmWidth&&0!=s.iConfirmWidth&&(t.style.width=s.iConfirmWidth+"px"),void 0!=s.iNoWidth&&0!=s.iNoWidth&&(P.style.width=s.iNoWidth+"px"),void 0!=s.iCancelWidth&&0!=s.iCancelWidth&&(i.style.width=s.iCancelWidth+"px")),jslog(JSLOG_TEST,o+"SET BTN  Label: szConfirmLabel="+O+"   szNoLabel="+_+"   szCancelLabel="+u),t.value=O,P.value=_,i.value=u,jslog(JSLOG_TEST,o+"Set Btn Visibility"),PopupElShow(P,n),PopupElShow(i,p),jslog(JSLOG_TEST,o+JSLOG_FUN_END)}function PopupDlgOptChoiceInit(e){var o="[Popup.js PopupDlgOptChoiceInit] "
jslog(JSLOG_TEST,o+JSLOG_FUN_START)
var t=e.objOpt
if(null!=t){jslog(JSLOG_TEST,o+"objOpt.bChoiceMultiSel="+t.bChoiceMultiSel),szId=t.bChoiceMultiSel?"PopupChoiceMulti":"PopupChoiceSingle",PopupIdShow(szId+"Sect",!0),document.getElementById(szId+"Label").innerHTML=t.szChoiceLabel
var P=document.getElementById(szId+"Select")
if(t.bChoiceMultiSel){void 0!=t.iChoiceMultiSize&&null!=t.iChoiceMultiSize&&(iSize=t.iChoiceMultiSize),P.size=iSize
var i=document.getElementById("PopupSelectAll")
i.childNodes[0].textContent=POPUP_SELECT_ALL
var l=document.getElementById("PopupDeselectAll")
l.childNodes[0].textContent=POPUP_DESELECT_ALL}for(var n=0;n<t.arChoice.length;n++){var p=t.arChoice[n],O=new Option(p.szText,p.value)
O.dv=p.szText,O.selected=p.bSel,P[P.length]=O}var _=document.getElementById("PopupChoiceMultiFS"),u=P.clientWidth+15
POPUP_CHOICE_FS_MIN_WIDTH>u&&(u=POPUP_CHOICE_FS_MIN_WIDTH),_.style.width=u+"px",jslog(JSLOG_TEST,o+"We have SET elFS.style.width="+_.style.width)}jslog(JSLOG_TEST,o+JSLOG_FUN_END)}function PopupDlgOptLayoutInit(e){var o="[Popup.js PopupDlgOptChoiceInit] "
jslog(JSLOG_TEST,o+JSLOG_FUN_START)
var t=POPUP_DEF_TITLE_SHOW,P=POPUP_DEF_IMG_SHOW,i=e.objOpt
null!=i&&(jslogObj(JSLOG_TEST,o+"There are Custom Option:",i),void 0!=i.bShowTitle&&null!=i.bShowTitle&&(t=i.bShowTitle),void 0!=i.bShowImg&&null!=i.bShowImg&&(P=i.bShowImg)),PopupIdHideIfRequired("PopupTblHea",t),PopupIdHideIfRequired("PopupImg",P),jslog(JSLOG_TEST,o+JSLOG_FUN_END)}function PopupDlgGetHeight(){var e="[Popup.js PopupDlgGetHeight] ",o=document.getElementById("PopupDivBtn"),t=o.getBoundingClientRect(),P=document.body,i=document.documentElement,l=window.pageYOffset||i.scrollTop||P.scrollTop,n=i.clientTop||P.clientTop||0,p=t.top+l-n,O=Math.round(p)+o.clientHeight
return jslog(JSLOG_TEST,e+"Current iDlgH="+O),O}function getTextWidth(e,o){var t=getTextWidth.canvas||(getTextWidth.canvas=document.createElement("canvas"))
if(void 0==t||void 0==t.getContext)return 0
var P=t.getContext("2d")
P.font=o
var i=P.measureText(e)
return i.width}function PopupStrReplaceAll(e,o,t){for(var P=e;P.indexOf(o)>=0;)P=P.replace(o,t)
return P}function PopupStr2Html(e){return e=PopupStrReplaceAll(e,"\n","<BR/>")}function PopupGetTitle(e){var o=e.objOpt,t=o?o.szTitle:null,P=e.szPopupType
return void 0!=typeof t&&null!=t&&""!=t?t:P==POPUP_TYPE.INFO?POPUP_DEF_TITLE_INFO:P==POPUP_TYPE.WARN?POPUP_DEF_TITLE_WARN:P==POPUP_TYPE.ERR?POPUP_DEF_TITLE_ERR:P==POPUP_TYPE.CONFIRM?POPUP_DEF_TITLE_CONFIRM:P==POPUP_TYPE.CHOICE?POPUP_DEF_TITLE_CHOICE:P==POPUP_TYPE.QUESTION||P==POPUP_TYPE.QUESTION_3?POPUP_DEF_TITLE_QUESTION:void 0}function PopupDlgClose(e){var o="[Popup.js PopupDlgClose] "
jslog(JSLOG_TEST,o+JSLOG_FUN_START)
var t=PopupIdIsVisible("PopupChoiceSingleSect"),P=PopupIdIsVisible("PopupChoiceMultiSect")
if(t||P){for(var i=t?"PopupChoiceSingleSelect":"PopupChoiceMultiSelect",l=document.getElementById(i),n=new Array,p="",O="",_="",u=0;u<l.options.length;u++){var s=l.options[u],T={value:s.value,szText:s.text,bSel:s.selected}
s.selected&&(p+=_+s.value,O+=_+s.text,""==_&&(_=", ")),n.push(T)}e.choiceValue=p,e.choiceText=O,e.arChoice=n}window.returnValue=e,jslogObj(JSLOG_TEST,o+"window.returnValue",window.returnValue),jslog(JSLOG_TEST,o+JSLOG_FUN_END),window.close()}function PopupDlgOnClickConfirm(){PopupDlgClose({iRetBtn:POPUP_BTN_CONFIRM})}function PopupDlgDeselectAll(){for(var e=document.getElementById("PopupChoiceMultiSelect"),o=0;o<e.options.length;o++)e.options[o].selected=!1}function PopupDlgSelectAll(){for(var e=document.getElementById("PopupChoiceMultiSelect"),o=0;o<e.options.length;o++)e.options[o].selected=!0}function PopupDlgOnResize(){var e="[Popup.js PopupDlgOnResize] ",o=window.outerWidth,t=window.outerHeight
if(void 0!=o&&void 0!=t){var P=document.getElementById("PopupDiv")
jslog(JSLOG_TEST,e+"divPopup.width="+P.clientWidth)
var i=o-16
popup_bScroll&&(i-=20),jslog(JSLOG_TEST,e+"Change divPopup width from ="+P.clientWidth+" to ="+i),P.style.width=i+"px"}}function PopupDlgOnClickNo(){PopupDlgClose({iRetBtn:POPUP_BTN_NO})}function PopupDlgOnClickCancel(){PopupDlgClose({iRetBtn:POPUP_BTN_CANCEL})}function PopupDlgOnLoad(){var e="[Popup.js PopupDlgOnLoad] ",o=null,t=PopupGetBrowser(),P=location.search
o=P.length?objFromURIQueryString(P):window.dialogArguments,void 0==o&&(o=new Object,o.szMsgHtml=PopupStr2Html("<b> This is a Test only For Developers</b><br/>We want to Try what is the minimum Height required for a Message"),o.bDefWidth=!0,o.iJslogLev=7,o.iWidth=POPUP_DEF_WIDTH,o.szPopupType=POPUP_TYPE.CHOICE,o.objOpt={szChoiceLabel:"VOTE:",arChoice:[{value:1,szText:"1 - Not Good",bSel:!1},{value:2,szText:"2 - Good",bSel:!1},{value:3,szText:"3 - Very Good",bSel:!0},{value:4,szText:"4 - Excellent",bSel:!1}],bChoiceMultiSel:!0,iChoiceMultiSize:4})
var i=o.objJslogOpt
if(i&&i.iLogLev>0){var l=new Object
l.bLogTime=i.bLogTime
var n=i.szPathImg
0==n.indexOf("../")&&(n=n.substr(3)),l.szPathImg=n,jslog_init(i.iLogLev,l)}jslog(JSLOG_TEST,e+JSLOG_FUN_START),void 0!=o.elLoading&&o.elLoading&&(jslog(JSLOG_TEST,e+"Hide Loading in Parent"),loadingShowByEl(o.elLoading,!1)),o.elLoading=null,jslogObj(JSLOG_TEST,e+"parIn",o),jslog(JSLOG_TEST,e+"set Dlg Layout -------")
var p=PopupGetTitle(o),l=o.objOpt
jslog(JSLOG_TEST,e+"Set Title="+p),document.title=p,document.getElementById("PopupTitle").innerHTML=p
var O=o.szPopupType
PopupDlgClassInit(O),PopupDlgBtnInit(o),O==POPUP_TYPE.CHOICE&&PopupDlgOptChoiceInit(o),PopupDlgOptLayoutInit(o)
var _=document.getElementById("PopupMsg")
_.innerHTML=o.szMsgHtml
var u=(o.szMsgHtml,PopupDlgGetHeight())
if(u>POPUP_MAX_HEIGHT&&(u=POPUP_MAX_HEIGHT),t==POPUP_BROWSER_TYPE_IE)jslog(JSLOG_TEST,e+t+" set iDlgH="+u),window.dialogHeight=u+"px"
else if(u+=8,jslog(JSLOG_TEST,e+"NOT IE set iDlgH="+u),void 0!=window.innerHeight&&(jslog(JSLOG_TEST,e+t+" Firefox set innerHeight="+u),window.innerHeight=u),void 0!=window.screen.height&&void 0!=window.screen.width){var s=window.screen.height,T=window.screen.width,E=parseInt((s-u)/2),r=parseInt((T-o.iWidth)/2)
window.moveTo(r,E)}if(popup_bScroll=null!=l&&void 0!=l.bScroll&&null!=l.bScroll&&l.bScroll){var S=document.getElementById("PopupDiv"),a=S.clientWidth
jslog(JSLOG_TEST,e+"divPopup.clientWidth="+S.clientWidth+"  divPopup.style.width="+S.style.width),a-=20,S.style.width=a+"px",jslog(JSLOG_TEST,e+"SET divPopup.clientWidth="+S.clientWidth+"  divPopup.style.width="+S.style.width),u+=20}jslog(JSLOG_TEST,e+"set iDlgH="+u),window.dialogHeight=u+"px",jslog(JSLOG_TEST,e+JSLOG_FUN_END)}function PopupSetPathHtml(e){popupPathHtml=e}function Popup(e,o,t){return PopupShowDlg(e,o,t)}function PopupChoice(e,o,t,P,i,l){return void 0!=l&&null!=l||(l=new Array),l.szChoiceLabel=o,l.arChoice=t,l.bChoiceMultiSel=P,l.iChoiceMultiSize=i,PopupShowDlg(POPUP_TYPE.CHOICE,e,l)}function cookieSetVar(e,o){document.cookie=e+"="+o,alert("document.cookie="+document.cookie)}function cookieGetVar(e){var o=e+"="
alert("document.cookie="+document.cookie)
for(var t=document.cookie.split(";"),P=0;P<t.length;P++){for(var i=t[P];" "==i.charAt(0);)i=i.substring(1)
if(0==i.indexOf(o))return i.substring(o.length,i.length)}return""}var POPUP_DEF_WIDTH=600,POPUP_OPACITY=.5,POPUP_HTML="Popup.html",POPUP_DEF_MULTICHOICE_SIZE=5,POPUP_MAX_HEIGHT=800,POPUP_BROWSER_MODE_POPUP="POPUP",POPUP_BROWSER_MODE_ALERT="ALERT",POPUP_BROWSER_MODE_POPUP_URL="POPUP_URL",POPUP_BROWSER_IE_MODE=POPUP_BROWSER_MODE_POPUP,POPUP_BROWSER_FIREFOX_MODE=POPUP_BROWSER_MODE_POPUP_URL,POPUP_BROWSER_OTHER_MODE=POPUP_BROWSER_MODE_ALERT,POPUP_DEF_IMG_SHOW=!0,POPUP_DEF_TITLE_SHOW=!0,POPUP_DEF_RESIZE=!1,POPUP_TYPE={INFO:"Info",CONFIRM:"Confirm",ERR:"Err",ALARM:"Alarm",WARN:"Warn",QUESTION:"Question",QUESTION_3:"Question3",PROMPT:"Prompt",CHOICE:"Choice"},POPUP_BTN_CLOSE=0,POPUP_BTN_CONFIRM=1,POPUP_BTN_NO=2,POPUP_BTN_CANCEL=3,POPUP_IMG_CLASS_PREFIX="PopupImg",POPUP_TBLMSG_CLASS_PREFIX="PopupTblMsg",POPUP_TITLE_CLASS_PREFIX="PopupTitle",POPUP_DEF_HEIGHT=200,POPUP_BROWSER_TYPE_IE="IE",POPUP_BROWSER_TYPE_FIREFOX="Firefox",POPUP_BROWSER_TYPE_UNKNOWN="BrowserUnknown",POPUP_CHOICE_FS_MIN_WIDTH=200,APP_NAME_FIREFOX="Netscape",APP_NAME_IE="Microsoft Internet Explorer",APP_NAME_IE_11="Netscape",popupPathHtml=JSU_PATH_POPUP_HTML,popup_bScroll=!1

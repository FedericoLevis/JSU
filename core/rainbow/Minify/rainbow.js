/**
 * Copyright 2012-2014 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Rainbow is a simple code syntax highlighter
 *
 * @see rainbowco.de
 */
!function(e){"use strict"
function n(e){var n=e.getAttribute("data-language")||e.parentNode.getAttribute("data-language")
if(!n){var t=/\blang(?:uage)?-(\w+)/,a=e.className.match(t)||e.parentNode.className.match(t)
a&&(n=a[1])}return n?n.toLowerCase():void 0}function t(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;")}function a(e,n,t,a){return t>=e&&n>t?!0:a>e&&n>a}function r(e,n,t,a){return t==e&&a==n?!1:e>=t&&a>=n}function o(e,n){return'<span class="'+e.replace(/\./g," ")+(T?" "+T:"")+'">'+n+"</span>"}function i(e,n){var t,a=0
for(t=1;n>t;++t)e[t]&&(a+=e[t].length)
return a}function s(e){return H[e]}function c(e){var n=C[e]||[],t=C[x]||[]
return s(e)?n:n.concat(t)}function u(e,n,t,a){var r=a.substr(e)
return a.substr(0,e)+r.replace(n,t)}function f(e){var n=[]
for(var t in e)e.hasOwnProperty(t)&&n.push(t)
return n.sort(function(e,n){return n-e})}function l(){function e(e,n){for(var t in p)if(t=parseInt(t,10),r(t,p[t],e,n)&&(delete p[t],delete v[t]),a(t,p[t],e,n))return!0
return!1}function n(e){for(var n=f(v),t=0;t<n.length;t++){var a=n[t],r=v[a]
e=u(a,r.replace,r["with"],e)}return e}function s(n,t){function a(e){n.name&&(e=o(n.name,e)),v[h]={replace:d[0],"with":e},p[h]=y,s(n,t)}function r(e){var t=d[e]
if(t){var a=n.matches[e],r=a.language,s=a.name&&a.matches?a.matches:a,c=function(n,t,a){g=u(i(d,e),n,a?o(a,t):t,g)}
if("string"==typeof a)return void c(t,t,a)
var f,v=new l
if(r)return f=v.refract(t,r),void c(t,f)
f=v.refract(t,m,s.length?s:[s]),c(t,f,a.matches?a.name:0)}}var c=n.pattern
if(c){var d=c.exec(t)
if(d){n.name||"string"!=typeof n.matches[0]||(n.name=n.matches[0],delete n.matches[0])
var g=d[0],h=d.index,y=d[0].length+h
if(e(h,y))return void s(n,t)
for(var L=f(n.matches),w=0;w<L.length;w++)r(L[w])
a(g)}}}function d(e,n,a){return m=n,a=a||c(n),g(t(e),a)}function g(e,t){for(var a=0;a<t.length;a++)s(t[a],e)
return n(e)}var m,v={},p={}
return{refract:d}}function d(e){C=e.data.languagePatterns,H=e.data.bypassDefaults,T=e.data.globalClass
var n=new l,t=n.refract(e.data.code,e.data.lang),a={id:e.data.id,lang:e.data.lang,result:t}
self.postMessage(a)}function g(e,n){function t(a){a.data.id===e.id&&(n(a.data),N.removeEventListener("message",t))}N.addEventListener("message",t),N.postMessage(e)}function m(e,n,t){return function(a){e.innerHTML=a.result,e.classList.add("rainbow"),e.classList.remove("loading"),e.classList.remove("stop-animation"),E&&E(e,a.lang),0===--n.c&&t()}}function v(e,n){n=k[n]||n
var t={id:String.fromCharCode(65+Math.floor(26*Math.random()))+Date.now(),code:e,lang:n,languagePatterns:C,bypassDefaults:H,globalClass:T}
return t}function p(e,t){for(var a={c:0},r=0;r<e.length;r++){var o=e[r]
o.classList.add("stop-animation")
var i=n(o)
!o.classList.contains("rainbow")&&i&&(o.innerHTML.length>2e4&&o.classList.add("loading"),++a.c,g(v(o.innerHTML,i),m(o,a,t)))}0===a.c&&t()}function h(e,n){n=n||function(){},e=e&&"function"==typeof e.getElementsByTagName?e:document
var t,a=e.getElementsByTagName("pre"),r=e.getElementsByTagName("code"),o=[],i=[]
for(t=0;t<a.length;++t)a[t].getElementsByTagName("code").length?a[t].innerHTML=a[t].innerHTML.trim():o.push(a[t])
for(t=0;t<r.length;++t)i.push(r[t])
p(i.concat(o),n)}function y(e,n,t){D||(1==arguments.length&&(n=e,e=x),H[e]=t,C[e]=n.concat(C[e]||[]))}function L(e){E=e}function w(e){T=e}function b(e,n){k[e]=n}function M(){if("string"==typeof arguments[0]){var e=v(arguments[0],arguments[1])
return void g(e,function(e){return function(n){e&&e(n.result,n.lang)}}(arguments[2]))}return"function"==typeof arguments[0]?h(0,arguments[0]):void h(arguments[0],arguments[1])}var T,E,N,C={},H={},k={},x=0,B="undefined"!=typeof module&&"object"==typeof module.exports,D=!B&&"undefined"==typeof document
B&&(e.Worker=require("webworker-threads").Worker)
var W={extend:y,onHighlight:L,addClass:w,addAlias:b,color:M}
B&&(W.colorSync=function(e,n){var t=new l
return t.refract(e,k[n]||n)}),e.Rainbow=W,B&&(module.exports=W)
var A=!D&&"undefined"!=typeof e.Worker
if(A){var P
if(!B){var O=document.getElementsByTagName("script")
P=O[O.length-1].src}return N=new e.Worker(B?__filename:P),void(B||document.addEventListener("DOMContentLoaded",W.color,!1))}self.addEventListener("message",d)}(this)

/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[22],{430:function(ia){(function(){ia.exports={fV:function(){function ea(e,h){this.scrollLeft=e;this.scrollTop=h}function e(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.");}function ca(e,h){if("Y"===
h)return e.clientHeight+n<e.scrollHeight;if("X"===h)return e.clientWidth+n<e.scrollWidth}function fa(e,h){e=aa.getComputedStyle(e,null)["overflow"+h];return"auto"===e||"scroll"===e}function ha(e){var f=ca(e,"Y")&&fa(e,"Y");e=ca(e,"X")&&fa(e,"X");return f||e}function da(e){var f=(h()-e.startTime)/468;var n=.5*(1-Math.cos(Math.PI*(1<f?1:f)));f=e.ux+(e.x-e.ux)*n;n=e.vx+(e.y-e.vx)*n;e.method.call(e.mD,f,n);f===e.x&&n===e.y||aa.requestAnimationFrame(da.bind(aa,e))}function ba(e,n,x){var f=h();if(e===w.body){var y=
aa;var z=aa.scrollX||aa.pageXOffset;e=aa.scrollY||aa.pageYOffset;var ba=r.scroll}else y=e,z=e.scrollLeft,e=e.scrollTop,ba=ea;da({mD:y,method:ba,startTime:f,ux:z,vx:e,x:n,y:x})}var aa=window,w=document;if(!("scrollBehavior"in w.documentElement.style&&!0!==aa.Oka)){var z=aa.HTMLElement||aa.Element,r={scroll:aa.scroll||aa.scrollTo,scrollBy:aa.scrollBy,OQ:z.prototype.scroll||ea,scrollIntoView:z.prototype.scrollIntoView},h=aa.performance&&aa.performance.now?aa.performance.now.bind(aa.performance):Date.now,
n=/MSIE |Trident\/|Edge\//.test(aa.navigator.userAgent)?1:0;aa.scroll=aa.scrollTo=function(f,h){void 0!==f&&(!0===e(f)?r.scroll.call(aa,void 0!==f.left?f.left:"object"!==typeof f?f:aa.scrollX||aa.pageXOffset,void 0!==f.top?f.top:void 0!==h?h:aa.scrollY||aa.pageYOffset):ba.call(aa,w.body,void 0!==f.left?~~f.left:aa.scrollX||aa.pageXOffset,void 0!==f.top?~~f.top:aa.scrollY||aa.pageYOffset))};aa.scrollBy=function(f,h){void 0!==f&&(e(f)?r.scrollBy.call(aa,void 0!==f.left?f.left:"object"!==typeof f?f:
0,void 0!==f.top?f.top:void 0!==h?h:0):ba.call(aa,w.body,~~f.left+(aa.scrollX||aa.pageXOffset),~~f.top+(aa.scrollY||aa.pageYOffset)))};z.prototype.scroll=z.prototype.scrollTo=function(f,h){if(void 0!==f)if(!0===e(f)){if("number"===typeof f&&void 0===h)throw new SyntaxError("Value could not be converted");r.OQ.call(this,void 0!==f.left?~~f.left:"object"!==typeof f?~~f:this.scrollLeft,void 0!==f.top?~~f.top:void 0!==h?~~h:this.scrollTop)}else h=f.left,f=f.top,ba.call(this,this,"undefined"===typeof h?
this.scrollLeft:~~h,"undefined"===typeof f?this.scrollTop:~~f)};z.prototype.scrollBy=function(f,h){void 0!==f&&(!0===e(f)?r.OQ.call(this,void 0!==f.left?~~f.left+this.scrollLeft:~~f+this.scrollLeft,void 0!==f.top?~~f.top+this.scrollTop:~~h+this.scrollTop):this.scroll({left:~~f.left+this.scrollLeft,top:~~f.top+this.scrollTop,behavior:f.behavior}))};z.prototype.scrollIntoView=function(f){if(!0===e(f))r.scrollIntoView.call(this,void 0===f?!0:f);else{for(f=this;f!==w.body&&!1===ha(f);)f=f.parentNode||
f.host;var h=f.getBoundingClientRect(),n=this.getBoundingClientRect();f!==w.body?(ba.call(this,f,f.scrollLeft+n.left-h.left,f.scrollTop+n.top-h.top),"fixed"!==aa.getComputedStyle(f).position&&aa.scrollBy({left:h.left,top:h.top,behavior:"smooth"})):aa.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}}}}}})()}}]);}).call(this || window)
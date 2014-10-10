<<<<<<< HEAD
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);
/* mousetrap v1.4.6 craig.is/killing/mice */
(function(J,r,f){function s(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(u=!1)}function C(a,b,d,c,e,v){var g,k,f=[],h=d.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!c&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||d.metaKey||d.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==v;(!c&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,d,c){m.stopCallback(b,b.target||b.srcElement,d,c)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?
b.stopPropagation():b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,d,c){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(d,b,a);"keyup"!==c&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(c||E(b[g+1]).action);F(b[g],f,c,a,g)}}function E(a,b){var d,
c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],G[c]&&(c=G[c]),b&&"keypress"!=b&&H[c]&&(c=H[c],f.push("shift")),w(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[d]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function F(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,d):(d=E(a,d),l[d.key]=l[d.key]||[],C(d.key,d.modifiers,{type:d.action},
c,a,e),l[d.key][c?"unshift":"push"]({callback:b,modifiers:d.modifiers,action:d.action,seq:c,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)F(a[c],b,d);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,d){var c=C(a,b,d),e;b={};var f=0,g=!1;for(e=0;e<c.length;++e)c[e].seq&&(f=Math.max(f,c[e].level));for(e=0;e<c.length;++e)c[e].seq?c[e].level==f&&(g=!0,
b[c[e].seq]=1,x(c[e].callback,d,c[e].combo,c[e].seq)):g||x(c[e].callback,d,c[e].combo);c="keypress"==d.type&&I;d.type!=u||w(a)||c||t(b);I=g&&"keydown"==d.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);

Mousetrap=function(a){var d={},e=a.stopCallback;a.stopCallback=function(b,c,a){return d[a]?!1:e(b,c,a)};a.bindGlobal=function(b,c,e){a.bind(b,c,e);if(b instanceof Array)for(c=0;c<b.length;c++)d[b[c]]=!0;else d[b]=!0};return a}(Mousetrap);

/* ToolTips */
(function(c){function b(e,d){return(typeof e=="function")?(e.call(d)):e}function a(e,d){this.$element=c(e);this.options=d;this.enabled=true;this.fixTitle()}a.prototype={show:function(){var g=this.getTitle();if(g&&this.enabled){var f=this.tip();f.find(".tipsy-inner")[this.options.html?"html":"text"](g);f[0].className="tipsy";f.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var j=c.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});
var d=f[0].offsetWidth,i=f[0].offsetHeight,h=b(this.options.gravity,this.$element[0]);var e;switch(h.charAt(0)){case"n":e={top:j.top+j.height+this.options.offset,left:j.left+j.width/2-d/2};break;case"s":e={top:j.top-i-this.options.offset,left:j.left+j.width/2-d/2};break;case"e":e={top:j.top+j.height/2-i/2,left:j.left-d-this.options.offset};break;case"w":e={top:j.top+j.height/2-i/2,left:j.left+j.width+this.options.offset};break}if(h.length==2){if(h.charAt(1)=="w"){e.left=j.left+j.width/2-15}else{e.left=j.left+j.width/2-d+15
}}f.css(e).addClass("tipsy-"+h);f.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+h.charAt(0);if(this.options.className){f.addClass(b(this.options.className,this.$element[0]))}if(this.options.fade){f.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{f.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){c(this).remove()})}else{this.tip().remove()}},fixTitle:function(){var d=this.$element;
if(d.attr("title")||typeof(d.attr("original-title"))!="string"){d.attr("original-title",d.attr("title")||"").removeAttr("title")}},getTitle:function(){var f,d=this.$element,e=this.options;this.fixTitle();var f,e=this.options;if(typeof e.title=="string"){f=d.attr(e.title=="title"?"original-title":e.title)}else{if(typeof e.title=="function"){f=e.title.call(d[0])}}f=(""+f).replace(/(^\s*|\s*$)/,"");return f||e.fallback},tip:function(){if(!this.$tip){this.$tip=c('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')
}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};c.fn.tipsy=function(h){if(h===true){return this.data("tipsy")}else{if(typeof h=="string"){var j=this.data("tipsy");if(j){j[h]()}return this}}h=c.extend({},c.fn.tipsy.defaults,h);function g(l){var m=c.data(l,"tipsy");if(!m){m=new a(l,c.fn.tipsy.elementOptions(l,h));
c.data(l,"tipsy",m)}return m}function k(){var l=g(this);l.hoverState="in";if(h.delayIn==0){l.show()}else{l.fixTitle();setTimeout(function(){if(l.hoverState=="in"){l.show()}},h.delayIn)}}function f(){var l=g(this);l.hoverState="out";if(h.delayOut==0){l.hide()}else{setTimeout(function(){if(l.hoverState=="out"){l.hide()}},h.delayOut)}}if(!h.live){this.each(function(){g(this)})}if(h.trigger!="manual"){var d=h.live?"live":"bind",i=h.trigger=="hover"?"mouseenter":"focus",e=h.trigger=="hover"?"mouseleave":"blur";
this[d](i,k)[d](e,f)}return this};c.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:0.8,title:"title",trigger:"hover"};c.fn.tipsy.elementOptions=function(e,d){return c.metadata?c.extend({},d,c(e).metadata()):d};c.fn.tipsy.autoNS=function(){return c(this).offset().top>(c(document).scrollTop()+c(window).height()/2)?"s":"n"};c.fn.tipsy.autoWE=function(){return c(this).offset().left>(c(document).scrollLeft()+c(window).width()/2)?"e":"w"
};c.fn.tipsy.autoBounds=function(e,d){return function(){var f={ns:d[0],ew:(d.length>1?d[1]:false)},i=c(document).scrollTop()+e,g=c(document).scrollLeft()+e,h=c(this);if(h.offset().top<i){f.ns="n"}if(h.offset().left<g){f.ew="w"}if(c(window).width()+c(document).scrollLeft()-h.offset().left<e){f.ew="e"}if(c(window).height()+c(document).scrollTop()-h.offset().top<e){f.ns="s"}return f.ns+(f.ew?f.ew:"")}}})(jQuery);
/* Browser Detection */
var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(d){for(var a=0;a<d.length;a++){var b=d[a].string;var c=d[a].prop;this.versionSearchString=d[a].versionSearch||d[a].identity;if(b){if(b.indexOf(d[a].subString)!=-1){return d[a].identity}}else{if(c){return d[a].identity}}}},searchVersion:function(b){var a=b.indexOf(this.versionSearchString);if(a==-1){return}return parseFloat(b.substring(a+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();
function mobileBrowser() { if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) return true; else return false; }
/* GET */
function gup(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a="[\\?&]"+b+"=([^&#]*)",d=new RegExp(a),c=d.exec(window.location.href);if(c===null){return""}else{return c[1]}};
/*! jQuery Retina Plugin */
(function(a){a.fn.retina=function(c){var d={"retina-background":false,"retina-suffix":"@2x"};if(c){a.extend(d,c)}var b=function(f,g){var e=new Image();e.onload=function(){g(e)};e.src=f};if(window.devicePixelRatio>1){this.each(function(){var e=a(this);if(this.tagName.toLowerCase()=="img"&&e.attr("src")){var g=e.attr("src").replace(/\.(?!.*\.)/,d["retina-suffix"]+".");b(g,function(h){e.attr("src",h.src);var i=a("<div>").append(e.clone()).remove().html();if(!(/(width|height)=["']\d+["']/.test(i))){e.attr("width",h.width/2)
}})}if(d["retina-background"]){var f=e.css("background-image");if(/^url\(.*\)$/.test(f)){var g=f.substring(4,f.length-1).replace(/\.(?!.*\.)/,d["retina-suffix"]+".");b(g,function(h){e.css("background-image","url("+h.src+")");if(e.css("background-size")=="auto auto"){e.css("background-size",(h.width/2)+"px auto")}})}}})}}})(jQuery);
(function($) {
	var Swipe = function(el) {
		var self = this;

		this.el = $(el);
		this.pos = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		this.startTime;

		el.on('touchstart', function(e) { self.touchStart(e); });
		el.on('touchmove',  function(e) { self.touchMove(e); });
		el.on('touchend',   function(e) { self.swipeEnd(); });
		el.on('mousedown',  function(e) { self.mouseDown(e); });
	};

	Swipe.prototype = {
		touchStart: function(e) {
			var touch = e.originalEvent.touches[0];

			this.swipeStart(e, touch.pageX, touch.pageY);
		},

		touchMove: function(e) {
			var touch = e.originalEvent.touches[0];

			this.swipeMove(e, touch.pageX, touch.pageY);
		},

		mouseDown: function(e) {
			var self = this;

			this.swipeStart(e, e.pageX, e.pageY);

			this.el.on('mousemove', function(e) { self.mouseMove(e); });
			this.el.on('mouseup', function() { self.mouseUp(); });
		},

		mouseMove: function(e) {
			this.swipeMove(e, e.pageX, e.pageY);
		},

		mouseUp: function(e) {
			this.swipeEnd(e);

			this.el.off('mousemove');
			this.el.off('mouseup');
		},

		swipeStart: function(e, x, y) {
			this.pos.start.x = x;
			this.pos.start.y = y;
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.startTime = new Date().getTime();

			this.trigger('swipeStart', e);
		},

		swipeMove: function(e, x, y) {
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.trigger('swipeMove', e);
		},

		swipeEnd: function(e) {
			this.trigger('swipeEnd', e);
		},

		trigger: function(e, originalEvent) {
			var self = this;

			var
				event = $.Event(e),
				x = self.pos.start.x - self.pos.end.x,
				y = self.pos.end.y - self.pos.start.y,
				radians = Math.atan2(y, x),
				direction = 'up',
				distance = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))),
				angle = Math.round(radians * 180 / Math.PI),
				speed = Math.round(distance / ( new Date().getTime() - self.startTime ) * 1000);

			if ( angle < 0 ) {
				angle = 360 - Math.abs(angle);
			}

			if ( ( angle <= 45 && angle >= 0 ) || ( angle <= 360 && angle >= 315 ) ) {
				direction = 'left';
			} else if ( angle >= 135 && angle <= 225 ) {
				direction = 'right';
			} else if ( angle > 45 && angle < 135 ) {
				direction = 'down';
			}

			event.originalEvent = originalEvent;

			event.swipe = { x: x, y: y, direction: direction, distance: distance, angle: angle, speed: speed };

			$(self.el).trigger(event);
		}
	};

	$.fn.swipe = function() {
		var swipe = new Swipe(this);

		return this;
	};
})(jQuery);
/**
 * @name		Album Module
 * @description	Takes care of every action an album can handle and execute.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

album = {

	json: null,

	getID: function() {

		var id;

		if (photo.json) id = photo.json.album;
		else if (album.json) id = album.json.id;
		else id = $(".album:hover, .album.active").attr("data-id");

		// Search
		if (!id) id = $(".album:hover, .album.active").attr("data-id");
		if (!id) id = $(".photo:hover, .photo.active").attr("data-album-id");

		if (id) return id;
		else return false;

	},

	load: function(albumID, refresh) {

		var startTime,
			params,
			durationTime,
			waitTime;

		password.get(albumID, function() {

			if (!refresh) {
				loadingBar.show();
				lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomOut");
				lychee.animate(".divider", "fadeOut");
			}

			startTime = new Date().getTime();

			params = "getAlbum&albumID=" + albumID + "&password=" + password.value;
			lychee.api(params, function(data) {

				if (data==="Warning: Album private!") {
					if (document.location.hash.replace("#", "").split("/")[1]!=undefined) {
						// Display photo only
						lychee.setMode("view");
					} else {
						// Album not public
						lychee.content.show();
						lychee.goto("");
					}
					return false;
				}

				if (data==="Warning: Wrong password!") {
					album.load(albumID, refresh);
					return false;
				}

				album.json = data;

				durationTime = (new Date().getTime() - startTime);
				if (durationTime>300) waitTime = 0; else if (refresh) waitTime = 0; else waitTime = 300 - durationTime;
				if (!visible.albums()&&!visible.photo()&&!visible.album()) waitTime = 0;

				setTimeout(function() {

					view.album.init();

					if (!refresh) {
						lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomIn");
						view.header.mode("album");
					}

				}, waitTime);

			});

		});

	},

	parse: function() {

		if (!album.json.title) album.json.title = "Untitled";

	},

	add: function() {

		var title,
			params,
			buttons,
			isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n) };

		buttons = [
			["Create Album", function() {

				title = $(".message input.text").val();

				if (title.length===0) title = "Untitled";

				modal.close();

				params = "addAlbum&title=" + escape(encodeURI(title));
				lychee.api(params, function(data) {

					if (data===true) data = 1; // Avoid first album to be true

					if (data!==false&&isNumber(data)) {
						albums.refresh();
						lychee.goto(data);
					}
					else lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		modal.show("New Album", "Enter a title for this album: <input class='text' type='text' maxlength='30' placeholder='Title' value='Untitled'>", buttons);

	},

	delete: function(albumIDs) {

		var params,
			buttons,
			albumTitle;

		if (!albumIDs) return false;
		if (albumIDs instanceof Array===false) albumIDs = [albumIDs];

		buttons = [
			["", function() {

				params = "deleteAlbum&albumIDs=" + albumIDs;
				lychee.api(params, function(data) {

					if (visible.albums()) {

						albumIDs.forEach(function(id) {
							albums.json.num--;
							view.albums.content.delete(id);
							delete albums.json.content[id]
						});

					} else lychee.goto("");

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["", function() {}]
		];

		if (albumIDs.toString()==="0") {

			buttons[0][0] = "Clear Unsorted";
			buttons[1][0] = "Keep Unsorted";

			modal.show("Clear Unsorted", "Are you sure you want to delete all photos from 'Unsorted'?<br>This action can't be undone!", buttons);

		} else if (albumIDs.length===1) {

			buttons[0][0] = "Delete Album and Photos";
			buttons[1][0] = "Keep Album";

			// Get title
			if (album.json) albumTitle = album.json.title;
			else if (albums.json) albumTitle = albums.json.content[albumIDs].title;

			modal.show("Delete Album", "Are you sure you want to delete the album '" + albumTitle + "' and all of the photos it contains? This action can't be undone!", buttons);

		} else {

			buttons[0][0] = "Delete Albums and Photos";
			buttons[1][0] = "Keep Albums";

			modal.show("Delete Albums", "Are you sure you want to delete all " + albumIDs.length + " selected albums and all of the photos they contain? This action can't be undone!", buttons);

		}

	},

	setTitle: function(albumIDs) {

		var oldTitle = "",
			newTitle,
			params,
			buttons;

		if (!albumIDs) return false;
		if (albumIDs instanceof Array===false) albumIDs = [albumIDs];

		if (albumIDs.length===1) {
			// Get old title if only one album is selected
			if (album.json) oldTitle = album.json.title;
			else if (albums.json) oldTitle = albums.json.content[albumIDs].title;
			if (!oldTitle) oldTitle = "";
			oldTitle = oldTitle.replace("'", "&apos;");
		}

		buttons = [
			["Set Title", function() {

				// Get input
				newTitle = $(".message input.text").val();

				// Remove html from input
				newTitle = lychee.removeHTML(newTitle);

				// Set to Untitled when empty
				newTitle = (newTitle==="") ? "Untitled" : newTitle;

				if (visible.album()) {

					album.json.title = newTitle;
					view.album.title();

					if (albums.json) {
						var id = albumIDs[0];
						albums.json.content[id].title = newTitle;
					}

				} else if (visible.albums()) {

					albumIDs.forEach(function(id) {
						albums.json.content[id].title = newTitle;
						view.albums.content.title(id);
					});

				}

				params = "setAlbumTitle&albumIDs=" + albumIDs + "&title=" + escape(encodeURI(newTitle));
				lychee.api(params, function(data) {

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		if (albumIDs.length===1) modal.show("Set Title", "Enter a new title for this album: <input class='text' type='text' maxlength='30' placeholder='Title' value='" + oldTitle + "'>", buttons);
		else modal.show("Set Titles", "Enter a title for all " + albumIDs.length + " selected album: <input class='text' type='text' maxlength='30' placeholder='Title' value='" + oldTitle + "'>", buttons);

	},

	setDescription: function(photoID) {

		var oldDescription = album.json.description.replace("'", "&apos;"),
			description,
			params,
			buttons;

		buttons = [
			["Set Description", function() {

				// Get input
				description = $(".message input.text").val();

				// Remove html from input
				description = lychee.removeHTML(description);

				if (visible.album()) {
					album.json.description = description;
					view.album.description();
				}

				params = "setAlbumDescription&albumID=" + photoID + "&description=" + escape(encodeURI(description));
				lychee.api(params, function(data) {

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		modal.show("Set Description", "Please enter a description for this album: <input class='text' type='text' maxlength='800' placeholder='Description' value='" + oldDescription + "'>", buttons);

	},

	setPublic: function(albumID, e) {

		var params,
			password = "",
			listed = false,
			downloadable = false;
		
		albums.refresh();

		if (!visible.message()&&album.json.public==0) {

			modal.show("Share Album", "This album will be shared with the following properties:</p><form><div class='choice'><input type='checkbox' name='listed' value='listed' checked><h2>Visible</h2><p>Listed to visitors of your Lychee.</p></div><div class='choice'><input type='checkbox' name='downloadable' value='downloadable'><h2>Downloadable</h2><p>Visitors of your Lychee can download this album.</p></div><div class='choice'><input type='checkbox' name='password' value='password'><h2>Password protected</h2><p>Only accessible with a valid password.<input class='text' type='password' placeholder='password' value='' style='display: none;'></p></div></form><p style='display: none;'>", [["Share Album", function() { album.setPublic(album.getID(), e) }], ["Cancel", function() {}]], -170);

			$(".message .choice input[name='password']").on("change", function() {

				if ($(this).prop('checked')===true) $(".message .choice input.text").show();
				else $(".message .choice input.text").hide();

			});
			
			return true;

		}

		if (visible.message()) {

			if ($(".message .choice input[name='password']:checked").val()==="password") {
				password = md5($(".message input.text").val());
				album.json.password = 1;
			} else {
				password = "";
				album.json.password = 0;
			}

			if ($(".message .choice input[name='listed']:checked").val()==="listed") listed = true;
			if ($(".message .choice input[name='downloadable']:checked").val()==="downloadable") downloadable = true;

		}

		params = "setAlbumPublic&albumID=" + albumID + "&password=" + password + "&visible=" + listed + "&downloadable=" + downloadable;

		if (visible.album()) {

			album.json.public = (album.json.public==0) ? 1 : 0;
			album.json.password = (album.json.public==0) ? 0 : album.json.password;

			view.album.public();
			view.album.password();

			if (album.json.public==1) contextMenu.shareAlbum(albumID, e);

		}

		lychee.api(params, function(data) {

			if (data!==true) lychee.error(null, params, data);

		});

	},

	share: function(service) {

		var link = "",
			url = location.href;

		switch (service) {
			case 0:
				link = "https://twitter.com/share?url=" + encodeURI(url);
				break;
			case 1:
				link = "http://www.facebook.com/sharer.php?u=" + encodeURI(url) + "&t=" + encodeURI(album.json.title);
				break;
			case 2:
				link = "mailto:?subject=" + encodeURI(album.json.title) + "&body=" + encodeURI(url);
				break;
			default:
				link = "";
				break;
		}

		if (link.length>5) location.href = link;

	},

	getArchive: function(albumID) {

		var link,
			url = "php/api.php?function=getAlbumArchive&albumID=" + albumID;

		if (location.href.indexOf("index.html")>0) link = location.href.replace(location.hash, "").replace("index.html", url);
		else link = location.href.replace(location.hash, "") + url;

		if (lychee.publicMode) link += "&password=" + password.value;

		location.href = link;

	}

};
/**
 * @name		Albums Module
 * @description	Takes care of every action albums can handle and execute.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

albums = {

	json: null,

	load: function() {

		var startTime,
			durationTime,
			waitTime;

		lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomOut");
		lychee.animate(".divider", "fadeOut");
		
		startTime = new Date().getTime();

	
		if(albums.json == null) {
			lychee.api("getAlbums", function(data) {
	
				/* Smart Albums */
				data.unsortedAlbum = {
					id: 0,
					title: "Unsorted",
					sysdate: data.unsortedNum + " photos",
					unsorted: 1,
					thumb0: data.unsortedThumb0,
					thumb1: data.unsortedThumb1,
					thumb2: data.unsortedThumb2
				};
	
				data.starredAlbum = {
					id: "f",
					title: "Starred",
					sysdate: data.starredNum + " photos",
					star: 1,
					thumb0: data.starredThumb0,
					thumb1: data.starredThumb1,
					thumb2: data.starredThumb2
				};
	
				data.publicAlbum = {
					id: "s",
					title: "Public",
					sysdate: data.publicNum + " photos",
					public: 1,
					thumb0: data.publicThumb0,
					thumb1: data.publicThumb1,
					thumb2: data.publicThumb2
				};
	
				data.recentAlbum = {
					id: "r",
					title: "Recent",
					sysdate: data.recentNum + " photos",
					recent: 1,
					thumb0: data.recentThumb0,
					thumb1: data.recentThumb1,
					thumb2: data.recentThumb2
				};
	
				albums.json = data;
			
				durationTime = (new Date().getTime() - startTime);
				if (durationTime>300) waitTime = 0; else waitTime = 300 - durationTime;
				if (!visible.albums()&&!visible.photo()&&!visible.album()) waitTime = 0;
				if (visible.album()&&lychee.content.html()==="") waitTime = 0;
		
				setTimeout(function() {
					view.header.mode("albums");
						view.albums.init();
						lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomIn");
	
					}, waitTime);
					});
			} else {
				view.header.mode("albums");
				view.albums.init();
				lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomIn");
			}
	},

	parse: function(album) {

		if (album.password&&lychee.publicMode) {
			album.thumb0 = "assets/img/password.svg";
			album.thumb1 = "assets/img/password.svg";
			album.thumb2 = "assets/img/password.svg";
		} else {
			if (!album.thumb0) album.thumb0 = "assets/img/no_images.svg";
			if (!album.thumb1) album.thumb1 = "assets/img/no_images.svg";
			if (!album.thumb2) album.thumb2 = "assets/img/no_images.svg";
		}

	},
	
	refresh: function() {
		albums.json = null;
	}

};
/**
 * @name		Build Module
 * @description	This module is used to generate HTML-Code.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

build = {

	divider: function(title) {

		return "<div class='divider fadeIn'><h1>" + title + "</h1></div>";

	},

	editIcon: function(id) {

		return "<div id='" + id + "' class='edit'><a class='icon-pencil'></a></div>";

	},

	multiselect: function(top, left) {

		return "<div id='multiselect' style='top: " + top + "px; left: " + left + "px;'></div>";

	},

	album: function(albumJSON) {

		if (!albumJSON) return "";

		var album = "",
			longTitle = "",
			title = albumJSON.title,
			typeThumb = "";

		if (title != null && title.length>18) {
			title = albumJSON.title.substr(0, 18) + "...";
			longTitle = albumJSON.title;
		}

		if (albumJSON.thumb0.split('.').pop()==="svg") typeThumb = "nonretina";

		album += "<div  class='album' data-id='" + albumJSON.id + "' data-password='" + albumJSON.password + "'>";
		album +=	"<img src='" + albumJSON.thumb2 + "' width='200' height='200' alt='thumb' data-type='nonretina'>";
		album +=	"<img src='" + albumJSON.thumb1 + "' width='200' height='200' alt='thumb' data-type='nonretina'>";
		album +=	"<img src='" + albumJSON.thumb0 + "' width='200' height='200' alt='thumb' data-type='" + typeThumb + "'>";
		album +=	"<div class='overlay'>";

		if (albumJSON.password&&!lychee.publicMode) album += "<h1><span class='icon-lock'></span> " + title + "</h1>";
		else album += "<h1 title='" + longTitle + "'>" + title + "</h1>";

		album +=		"<a>" + albumJSON.sysdate + "</a>";
		album +=	"</div>";

		if (!lychee.publicMode) {

			if(albumJSON.star==1)		album += "<a class='badge red icon-star'></a>";
			if(albumJSON.public==1)		album += "<a class='badge red icon-share'></a>";
			if(albumJSON.unsorted==1)	album += "<a class='badge red icon-reorder'></a>";
			if(albumJSON.recent==1)		album += "<a class='badge red icon-time'></a>";

		}

		album += "</div>";

		return album;

	},

	photo: function(photoJSON) {

		if (!photoJSON) return "";

		var photo = "",
			longTitle = "",
			title = photoJSON.title;

		if (title != null && title.length>18) {
			title = photoJSON.title.substr(0, 18) + "...";
			longTitle = photoJSON.title;
		}

		photo += "<div class='photo' data-album-id='" + photoJSON.album + "' data-id='" + photoJSON.id + "'>";
		photo +=	"<img src='" + photoJSON.thumbUrl + "' width='200' height='200' alt='thumb'>";
		photo +=	"<div class='overlay'>";
		photo +=		"<h1 title='" + longTitle + "'>" + title + "</h1>";

		if (photoJSON.cameraDate==1) {
			photo += "<a><span class='icon-camera' title='Photo Date'></span>" + photoJSON.sysdate + "</a>";
		} else {
			photo += "<a>" + photoJSON.sysdate + "</a>";
		}

		photo +=	"</div>";

		if (photoJSON.star==1) photo += "<a class='badge red icon-star'></a>";
		if (!lychee.publicMode&&photoJSON.public==1&&album.json.public!=1) photo += "<a class='badge red icon-share'></a>";

		photo += "</div>";

		return photo;

	},

	imageview: function(photoJSON, isSmall, visibleControls) {

		if (!photoJSON) return "";

		var view = "";

		view += "<div class='arrow_wrapper previous'><a id='previous' class='icon-caret-left'></a></div>";
		view += "<div class='arrow_wrapper next'><a id='next' class='icon-caret-right'></a></div>";

		if (isSmall) {

			if (visibleControls)
				view += "<div id='image' class='small' style='background-image: url(" + photoJSON.url + "); width: " + photoJSON.width + "px; height: " + photoJSON.height + "px; margin-top: -" + parseInt(photoJSON.height/2-20) + "px; margin-left: -" + photoJSON.width/2 + "px;'></div>";
			else
				view += "<div id='image' class='small' style='background-image: url(" + photoJSON.url + "); width: " + photoJSON.width + "px; height: " + photoJSON.height + "px; margin-top: -" + parseInt(photoJSON.height/2) + "px; margin-left: -" + photoJSON.width/2 + "px;'></div>";

		} else {

			if (visibleControls)
				view += "<div id='image' style='background-image: url(" + photoJSON.url + ")'></div>";
			else
				view += "<div id='image' style='background-image: url(" + photoJSON.url + ");' class='full'></div>";

		}

		return view;

	},

	no_content: function(typ) {

		var no_content = "";

		no_content += "<div class='no_content fadeIn'>";
		no_content +=	"<a class='icon icon-" + typ + "'></a>";

		if (typ==="search")		no_content += "<p>No results</p>";
		else if (typ==="share")	no_content += "<p>No public albums</p>";
		else if (typ==="cog")	no_content += "<p>No configuration</p>";

		no_content += "</div>";

		return no_content;

	},

	modal: function(title, text, button, marginTop, closeButton) {

		var modal = "",
			custom_style = "";

		if (marginTop) custom_style = "style='margin-top: " + marginTop + "px;'";

		modal += "<div class='message_overlay fadeIn'>";
		modal +=	"<div class='message center'" + custom_style + ">";
		modal +=		"<h1>" + title + "</h1>";

		if (closeButton!==false) {

			modal +=		"<a class='close icon-remove-sign'></a>";

		}

		modal +=		"<p>" + text + "</p>";

		$.each(button, function(index) {

			if (this[0]!=="") {

				if (index===0) modal += "<a class='button active'>" + this[0] + "</a>";
				else modal += "<a class='button'>" + this[0] + "</a>";

			}

		});

		modal +=	"</div>";
		modal += "</div>";

		return modal;

	},

	signInModal: function() {

		var modal = "";

		modal += "<div class='message_overlay'>";
		modal +=	"<div class='message center'>";
		modal +=		"<h1><a class='icon-lock'></a> Sign In</h1>";
		modal +=		"<a class='close icon-remove-sign'></a>";
		modal +=		"<div class='sign_in'>";
		modal +=			"<input id='username' type='text' value='' placeholder='username'>";
		modal +=			"<input id='password' type='password' value='' placeholder='password'>";
		modal +=		"</div>";
		modal +=		"<div id='version'>Version " + lychee.version + "<span> &#8211; <a target='_blank' href='" + lychee.updateURL + "'>Update available!</a><span></div>";
		modal +=		"<a onclick='lychee.login()' class='button active'>Sign in</a>";
		modal +=	"</div>";
		modal += "</div>";

		return modal;

	},

	uploadModal: function(title, files) {

		var modal = "";

		modal += "<div class='upload_overlay fadeIn'>";
		modal +=	"<div class='upload_message center'>";
		modal +=		"<h1>" + title + "</h1>";
		modal +=		"<a class='close icon-remove-sign'></a>";
		modal +=		"<div class='rows'>";

		for (var i = 0; i < files.length; i++) {

			if (files[i].name.length>40) files[i].name = files[i].name.substr(0, 17) + "..." + files[i].name.substr(files[i].name.length-20, 20);

			modal += "<div class='row'>";
			modal +=	"<a class='name'>" + lychee.escapeHTML(files[i].name) + "</a>";

			if (files[i].supported===true)	modal += "<a class='status'></a>";
			else							modal += "<a class='status error'>Not supported</a>";

			modal +=	"<p class='notice'></p>";
			modal += "</div>";

		}

		modal +=		"</div>";
		modal +=	"</div>";
		modal += "</div>";

		return modal;

	},

	contextMenu: function(items) {

		var menu = "";

		menu += "<div class='contextmenu_bg'></div>";
		menu += "<div class='contextmenu'>";
		menu +=		"<table>";
		menu +=			"<tbody>";

		$.each(items, function(index) {

			if (items[index][0]==="separator"&&items[index][1]===-1) menu += "<tr class='separator'></tr>";
			else if (items[index][1]===-1) menu += "<tr class='no_hover'><td>" + items[index][0] + "</td></tr>";
			else if (items[index][2]!=undefined) menu += "<tr><td onclick='" + items[index][2] + "; window.contextMenu.close();'>" + items[index][0] + "</td></tr>";
			else menu += "<tr><td onclick='window.contextMenu.fns[" + items[index][1] + "](); window.contextMenu.close();'>" + items[index][0] + "</td></tr>";

		});

		menu +=			"</tbody>";
		menu +=		"</table>";
		menu +=	"</div>";

		return menu;

	},

	tags: function(tags, forView) {

		var html = "",
			editTagsHTML = (forView===true||lychee.publicMode) ? "" : " " + build.editIcon("edit_tags");

		if (tags!=="") {

			tags = tags.split(",");

			tags.forEach(function(tag, index, array) {

				html += "<a class='tag'>" + tag + "<span class='icon-remove' data-index='" + index + "'></span></a>";

			});

			html += editTagsHTML;

		} else {


			html = "<div class='empty'>No Tags" + editTagsHTML + "</div>";

		}

		return html;

	},

	infoboxPhoto: function(photoJSON, forView) {

		if (!photoJSON) return "";

		var infobox = "",
			public,
			editTitleHTML,
			editDescriptionHTML,
			infos,
			exifHash = "";

		infobox += "<div class='header'><h1>About</h1><a class='icon-remove-sign'></a></div>";
		infobox += "<div class='wrapper'>";

		switch (photoJSON.public) {
			case "0":
				public = "No";
				break;
			case "1":
				public = "Yes";
				break;
			case "2":
				public = "Yes (Album)";
				break;
			default:
				public = "-";
				break;
		}

		editTitleHTML = (forView===true||lychee.publicMode) ? "" : " " + build.editIcon("edit_title");
		editDescriptionHTML = (forView===true||lychee.publicMode) ? "" : " " + build.editIcon("edit_description");

		infos = [
			["", "Basics"],
			["Title", photoJSON.title + editTitleHTML],
			["Uploaded", photoJSON.sysdate],
			["Description", photoJSON.description + editDescriptionHTML],
			["", "Image"],
			["Size", photoJSON.size],
			["Format", photoJSON.type],
			["Resolution", photoJSON.width + " x " + photoJSON.height],
			["Tags", build.tags(photoJSON.tags, forView)]
		];

		exifHash = photoJSON.takestamp+photoJSON.make+photoJSON.model+photoJSON.shutter+photoJSON.aperture+photoJSON.focal+photoJSON.iso;

		if (exifHash!="0"&&exifHash!=="null") {

			infos = infos.concat([
				["", "Camera"],
				["Captured", photoJSON.takedate],
				["Make", photoJSON.make],
				["Type/Model", photoJSON.model],
				["Shutter Speed", photoJSON.shutter],
				["Aperture", photoJSON.aperture],
				["Focal Length", photoJSON.focal],
				["ISO", photoJSON.iso]
			]);

		}

		infos = infos.concat([
			["", "Share"],
			["Public", public]
		]);

		$.each(infos, function(index) {

			if (infos[index][1]===""||infos[index][1]===undefined||infos[index][1]===null) infos[index][1] = "-";

			switch (infos[index][0]) {

				case "":		// Separator
								infobox += "</table>";
								infobox += "<div class='separator'><h1>" + infos[index][1] + "</h1></div>";
								infobox += "<table>";
								break;

				case "Tags":	// Tags
								if (forView!==true&&!lychee.publicMode) {
									infobox += "</table>";
									infobox += "<div class='separator'><h1>" + infos[index][0] + "</h1></div>";
									infobox += "<div id='tags'>" + infos[index][1] + "</div>";
								}
								break;

				default:		// Item
								infobox +=	"<tr>";
								infobox +=		"<td>" + infos[index][0] + "</td>";
								infobox +=		"<td class='attr_" + infos[index][0].toLowerCase() + "'>" + infos[index][1] + "</td>";
								infobox +=	"</tr>";
								break;

			}

		});

		infobox += "</table>";
		infobox += "<div class='bumper'></div>";
		infobox += "</div>";

		return infobox;

	},

	infoboxAlbum: function(albumJSON, forView) {

		if (!albumJSON) return "";

		var infobox = "",
			public = "-",
			password = "-",
			downloadable = "-",
			editTitleHTML,
			editDescriptionHTML,
			infos;

		infobox += "<div class='header'><h1>About</h1><a class='icon-remove-sign'></a></div>";
		infobox += "<div class='wrapper'>";

		switch (albumJSON.public) {
			case "0":
				public = "No";
				break;
			case "1":
				public = "Yes";
				break;
		}

		switch (albumJSON.password) {
			case false:
				password = "No";
				break;
			case true:
				password = "Yes";
				break;
		}

		switch (albumJSON.downloadable) {
			case "0":
				downloadable = "No";
				break;
			case "1":
				downloadable = "Yes";
				break;
		}

		editTitleHTML = (forView===true||lychee.publicMode) ? "" : " " + build.editIcon("edit_title_album");
		editDescriptionHTML = (forView===true||lychee.publicMode) ? "" : " " + build.editIcon("edit_description_album");

		infos = [
			["", "Basics"],
			["Title", albumJSON.title + editTitleHTML],
			["Description", albumJSON.description + editDescriptionHTML],
			["", "Album"],
			["Created", albumJSON.sysdate],
			["Images", albumJSON.num],
			["", "Share"],
			["Public", public],
			["Downloadable", downloadable],
			["Password", password]
		];

		$.each(infos, function(index) {

			if (infos[index][1]===""||infos[index][1]===undefined||infos[index][1]===null) infos[index][1] = "-";

			if (infos[index][0]==="") {

				infobox += "</table>";
				infobox += "<div class='separator'><h1>" + infos[index][1] + "</h1></div>";
				infobox += "<table id='infos'>";

			} else {

				infobox +=	"<tr>";
				infobox +=		"<td>" + infos[index][0] + "</td>";
				infobox +=		"<td class='attr_" + infos[index][0].toLowerCase() + "'>" + infos[index][1] + "</td>";
				infobox +=	"</tr>";

			}

		});

		infobox += "</table>";
		infobox += "<div class='bumper'></div>";
		infobox += "</div>";

		return infobox;

	}

};
/**
 * @name		ContextMenu Module
 * @description	This module is used for the context menu.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

contextMenu = {

	fns: null,

	show: function(items, mouse_x, mouse_y, orientation) {

		contextMenu.close();

		$("body")
			.css("overflow", "hidden")
			.append(build.contextMenu(items));

		// Do not leave the screen
		if ((mouse_x+$(".contextmenu").outerWidth(true))>$("html").width()) orientation = "left";
		if ((mouse_y+$(".contextmenu").outerHeight(true))>$("html").height()) mouse_y -= (mouse_y+$(".contextmenu").outerHeight(true)-$("html").height());

		if (mouse_x>$(document).width()) mouse_x = $(document).width();
		if (mouse_x<0) mouse_x = 0;
		if (mouse_y>$(document).height()) mouse_y = $(document).height();
		if (mouse_y<0) mouse_y = 0;

		if (orientation==="left") mouse_x -= $(".contextmenu").outerWidth(true);

		if (mouse_x===null||
			mouse_x===undefined||
			isNaN(mouse_x)||
			mouse_y===null||
			mouse_y===undefined||
			isNaN(mouse_y)) {
				mouse_x = "10px";
				mouse_y = "10px";
		}

		$(".contextmenu").css({
			"top": mouse_y,
			"left": mouse_x,
			"opacity": 0.98
		});

	},

	add: function(e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		upload.notify();

		contextMenu.fns = [
			function() { $("#upload_files").click() },
			function() { upload.start.url() },
			function() { upload.start.dropbox() },
			function() { upload.start.server() },
			function() { album.add() }
		];

		items = [
			["<a class='icon-picture'></a> Upload Photo", 0],
			["separator", -1],
			["<a class='icon-link'></a> Import from Link", 1],
			["<a class='icon-folder-open'></a> Import from Dropbox", 2],
			["<a class='icon-hdd'></a> Import from Server", 3],
			["separator", -1],
			["<a class='icon-folder-close'></a> New Album", 4]
		];

		contextMenu.show(items, mouse_x, mouse_y, "left");

	},

	settings: function(e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		contextMenu.fns = [
			function() { settings.setLogin() },
			function() { settings.setSorting() },
			function() { settings.setDropboxKey() },
			function() { window.open(lychee.website); },
			function() { window.open("plugins/check/"); },
			function() { window.open("plugins/displaylog/"); },
			function() { lychee.logout() }
		];

		items = [
			["<a class='icon-user'></a> Change Login", 0],
			["<a class='icon-sort'></a> Change Sorting", 1],
			["<a class='icon-folder-open'></a> Set Dropbox", 2],
			["separator", -1],
			["<a class='icon-info-sign'></a> About Lychee", 3],
			["<a class='icon-dashboard'></a> Diagnostics", 4],
			["<a class='icon-list'></a> Show Log", 5],
			["separator", -1],
			["<a class='icon-signout'></a> Sign Out", 6]
		];

		contextMenu.show(items, mouse_x, mouse_y, "right");

	},

	album: function(albumID, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		if (albumID==="0"||albumID==="f"||albumID==="s"||albumID==="r") return false;

		contextMenu.fns = [
			function() { album.setTitle([albumID]) },
			function() { album.delete([albumID]) }
		];

		items = [
			["<a class='icon-edit'></a> Rename", 0],
			["<a class='icon-trash'></a> Delete", 1]
		];

		contextMenu.show(items, mouse_x, mouse_y, "right");

		$(".album[data-id='" + albumID + "']").addClass("active");

	},

	albumMulti: function(albumIDs, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		multiselect.stopResize();

		contextMenu.fns = [
			function() { album.setTitle(albumIDs) },
			function() { album.delete(albumIDs) },
		];

		items = [
			["<a class='icon-edit'></a> Rename All", 0],
			["<a class='icon-trash'></a> Delete All", 1]
		];

		contextMenu.show(items, mouse_x, mouse_y, "right");

	},

	photo: function(photoID, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		contextMenu.fns = [
			function() { photo.setStar([photoID]) },
			function() { photo.editTags([photoID]) },
			function() { photo.setTitle([photoID]) },
			function() { photo.duplicate([photoID]) },
			function() { contextMenu.move([photoID], e, "right") },
			function() { photo.delete([photoID]) }
		];

		items = [
			["<a class='icon-star'></a> Star", 0],
			["<a class='icon-tags'></a> Tags", 1],
			["separator", -1],
			["<a class='icon-edit'></a> Rename", 2],
			["<a class='icon-copy'></a> Duplicate", 3],
			["<a class='icon-folder-open'></a> Move", 4],
			["<a class='icon-trash'></a> Delete", 5]
		];

		contextMenu.show(items, mouse_x, mouse_y, "right");

		$(".photo[data-id='" + photoID + "']").addClass("active");

	},

	photoMulti: function(photoIDs, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		multiselect.stopResize();

		contextMenu.fns = [
			function() { photo.setStar(photoIDs) },
			function() { photo.editTags(photoIDs) },
			function() { photo.setTitle(photoIDs) },
			function() { photo.duplicate(photoIDs) },
			function() { contextMenu.move(photoIDs, e, "right") },
			function() { photo.delete(photoIDs) }
		];

		items = [
			["<a class='icon-star'></a> Star All", 0],
			["<a class='icon-tags'></a> Tag All", 1],
			["separator", -1],
			["<a class='icon-edit'></a> Rename All", 2],
			["<a class='icon-copy'></a> Duplicate All", 3],
			["<a class='icon-folder-open'></a> Move All", 4],
			["<a class='icon-trash'></a> Delete All", 5]
		];

		contextMenu.show(items, mouse_x, mouse_y, "right");

	},

	photoMore: function(photoID, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items;

		contextMenu.fns = [
			function() { window.open(photo.getDirectLink()) },
			function() { photo.getArchive(photoID) }
		];

		items = [["<a class='icon-resize-full'></a> Full Photo", 0]];
		if ((album.json&&album.json.downloadable&&album.json.downloadable==="1"&&lychee.publicMode)||!lychee.publicMode) items.push(["<a class='icon-circle-arrow-down'></a> Download", 1]);

		contextMenu.show(items, mouse_x, mouse_y, "right");

	},

	move: function(photoIDs, e, orientation) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY - $(document).scrollTop(),
			items = [];

		contextMenu.close(true);

		if (album.getID()!=="0") {
			items = [
				["Unsorted", 0, "photo.setAlbum([" + photoIDs + "], 0)"],
				["separator", -1]
			];
		}

		lychee.api("getAlbums", function(data) {

			if (data.num===0) {
				items = [["New Album", 0, "album.add()"]];
			} else {
				$.each(data.content, function(index) {
					if (this.id!=album.getID()) items.push([this.title, 0, "photo.setAlbum([" + photoIDs + "], " + this.id + ")"]);
				});
			}

			if (!visible.photo()) contextMenu.show(items, mouse_x, mouse_y, "right");
			else contextMenu.show(items, mouse_x, mouse_y, "left");

		});

	},

	sharePhoto: function(photoID, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY,
			items,
			link = "";

		mouse_y -= $(document).scrollTop();

		contextMenu.fns = [
			function() { photo.setPublic(photoID) },
			function() { photo.share(photoID, 0) },
			function() { photo.share(photoID, 1) },
			function() { photo.share(photoID, 2) },
			function() { photo.share(photoID, 3) },
			function() { window.open(photo.getDirectLink()) }
		];

		link = photo.getViewLink(photoID);
		if (photo.json.public==="2") link = location.href;

		items = [
			["<input readonly id='link' value='" + link + "'>", -1],
			["separator", -1],
			["<a class='icon-eye-close'></a> Make Private", 0],
			["separator", -1],
			["<a class='icon-twitter'></a> Twitter", 1],
			["<a class='icon-facebook'></a> Facebook", 2],
			["<a class='icon-envelope'></a> Mail", 3],
			["<a class='icon-hdd'></a> Dropbox", 4],
			["<a class='icon-link'></a> Direct Link", 5]
		];

		contextMenu.show(items, mouse_x, mouse_y, "left");
		$(".contextmenu input").focus().select();

	},

	shareAlbum: function(albumID, e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY,
			items;

		mouse_y -= $(document).scrollTop();

		contextMenu.fns = [
			function() { album.setPublic(albumID) },
			function() { album.share(0) },
			function() { album.share(1) },
			function() { album.share(2) },
			function() { password.remove(albumID) }
		];

		items = [
			["<input readonly id='link' value='" + location.href + "'>", -1],
			["separator", -1],
			["<a class='icon-eye-close'></a> Make Private", 0],
			["separator", -1],
			["<a class='icon-twitter'></a> Twitter", 1],
			["<a class='icon-facebook'></a> Facebook", 2],
			["<a class='icon-envelope'></a> Mail", 3],
		];

		contextMenu.show(items, mouse_x, mouse_y, "left");
		$(".contextmenu input").focus().select();

	},

	close: function(leaveSelection) {

		if (!visible.contextMenu()) return false;

		contextMenu.fns = [];

		$(".contextmenu_bg, .contextmenu").remove();
		$("body").css("overflow", "auto");

		if (leaveSelection!==true) {
			$(".photo.active, .album.active").removeClass("active");
			if (visible.multiselect()) multiselect.close();
		}

	}

};
/**
 * @name		Init Module
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

$(document).ready(function(){

	/* Event Name */
	var event_name = (mobileBrowser()) ? "touchend" : "click";

	/* Disable ContextMenu */
	$(document).bind("contextmenu", function(e) { e.preventDefault() });

	/* Tooltips */
	if (!mobileBrowser()) $(".tools").tipsy({gravity: 'n', fade: false, delayIn: 0, opacity: 1});

	/* Multiselect */
	$("#content").on("mousedown", multiselect.show);
	$(document).on("mouseup", multiselect.getSelection);

	/* Header */
	$("#hostedwith").on(event_name, function() { window.open(lychee.website) });
	$("#button_signin").on(event_name, lychee.loginDialog);
	$("#button_settings").on("click", contextMenu.settings);
	$("#button_share").on(event_name, function(e) {
		if (photo.json.public==1||photo.json.public==2) contextMenu.sharePhoto(photo.getID(), e);
		else photo.setPublic(photo.getID(), e);
	});
	$("#button_share_album").on(event_name, function(e) {
		if (album.json.public==1) contextMenu.shareAlbum(album.getID(), e);
		else album.setPublic(album.getID(), e);
	});
	$("#button_more").on(event_name, function(e) { contextMenu.photoMore(photo.getID(), e) });
	$("#button_trash_album").on(event_name, function() { album.delete([album.getID()]) });
	$("#button_move").on(event_name, function(e) { contextMenu.move([photo.getID()], e) });
	$("#button_trash").on(event_name, function() { photo.delete([photo.getID()]) });
	$("#button_info_album").on(event_name, function() { view.infobox.show() });
	$("#button_info").on(event_name, function() { view.infobox.show() });
	$("#button_archive").on(event_name, function() { album.getArchive(album.getID()) });
	$("#button_star").on(event_name, function() { photo.setStar([photo.getID()]) });

	/* Search */
	$("#search").on("keyup click", function() { search.find($(this).val()) });

	/* Clear Search */
	$("#clearSearch").on(event_name, function () {
		$("#search").focus();
		search.reset();
	});

	/* Back Buttons */
	$("#button_back_home").on(event_name, function() { lychee.goto("") });
	$("#button_back").on(event_name, function() { lychee.goto(album.getID()) });

	/* Image View */
	lychee.imageview
		.on(event_name, ".arrow_wrapper.previous", photo.previous)
		.on(event_name, ".arrow_wrapper.next", photo.next);

	/* Infobox */
	$("#infobox")
		.on(event_name, ".header a", function() { view.infobox.hide() })
		.on(event_name, "#edit_title_album", function() { album.setTitle([album.getID()]) })
		.on(event_name, "#edit_description_album", function() { album.setDescription(album.getID()) })
		.on(event_name, "#edit_title", function() { photo.setTitle([photo.getID()]) })
		.on(event_name, "#edit_description", function() { photo.setDescription(photo.getID()) })
		.on(event_name, "#edit_tags", function() { photo.editTags([photo.getID()]) })
		.on(event_name, "#tags .tag span", function() { photo.deleteTag(photo.getID(), $(this).data('index')) });

	/* Keyboard */
	Mousetrap
		.bind('left', function() { if (visible.photo()) $("#imageview a#previous").click() })
		.bind('right', function() { if (visible.photo()) $("#imageview a#next").click() })
		.bind(['u', 'ctrl+u'], function() { $("#upload_files").click() })
		.bind(['s', 'ctrl+s', 'f', 'ctrl+f'], function(e) {
			if (visible.photo()) {
				$("#button_star").click();
			} else if (visible.albums()) {
				e.preventDefault();
				$("#search").focus();
			}
		})
		.bind(['r', 'ctrl+r'], function(e) {
			e.preventDefault();
			if (visible.album()) album.setTitle(album.getID());
			else if (visible.photo()) photo.setTitle([photo.getID()]);
		})
		.bind(['d', 'ctrl+d'], function(e) {
			e.preventDefault();
			if (visible.photo()) photo.setDescription(photo.getID());
			else if (visible.album()) album.setDescription(album.getID());
		})
		.bind(['t', 'ctrl+t'], function(e) {
			if (visible.photo()) {
				e.preventDefault();
				photo.editTags([photo.getID()]);
			}
		})
		.bind(['i', 'ctrl+i'], function() {
			if (visible.infobox()) view.infobox.hide();
			else if (visible.infoboxbutton()) view.infobox.show();
		})
		.bind(['command+backspace', 'ctrl+backspace'], function() {
			if (visible.photo()&&!visible.message()) photo.delete([photo.getID()]);
			else if (visible.album()&&!visible.message()) album.delete([album.getID()]);
		})
		.bind(['command+a', 'ctrl+a'], function() {
			if (visible.album()&&!visible.message()) multiselect.selectAll();
			else if (visible.albums()&&!visible.message()) multiselect.selectAll();
		});

	Mousetrap.bindGlobal('enter', function() {
		if ($(".message .button.active").length) $(".message .button.active").addClass("pressed").click()
	});

	Mousetrap.bindGlobal(['esc', 'command+up'], function(e) {
		e.preventDefault();
		if (visible.message()&&$(".message .close").length>0) modal.close();
		else if (visible.contextMenu()) contextMenu.close();
		else if (visible.infobox()) view.infobox.hide();
		else if (visible.photo()) lychee.goto(album.getID());
		else if (visible.album()) lychee.goto("");
		else if (visible.albums()&&$("#search").val().length!==0) search.reset();
	});


	if (mobileBrowser()) {

		$(document)

			/* Fullscreen on mobile */
			.on('touchend', '#image', function(e) {
				if (swipe.obj===null||(swipe.offset>=-5&&swipe.offset<=5)) {
					if (visible.controls()) view.header.hide(e, 0);
					else view.header.show();
				}
			})

			/* Swipe on mobile */
			.swipe().on('swipeStart', function() { if (visible.photo()) swipe.start($("#image")) })
			.swipe().on('swipeMove', function(e) { if (visible.photo()) swipe.move(e.swipe) })
			.swipe().on('swipeEnd', function(e) { if (visible.photo()) swipe.stop(e.swipe, photo.previous, photo.next) });

	}

	/* Document */
	$(document)

		/* Login */
		.on("keyup", "#password", function() { if ($(this).val().length>0) $(this).removeClass("error") })

		/* Header */
		.on(event_name, "#title.editable", function() {
			if (visible.photo()) photo.setTitle([photo.getID()]);
			else album.setTitle([album.getID()]);
		})

		/* Navigation */
		.on("click", ".album", function() { lychee.goto($(this).attr("data-id")) })
		.on("click", ".photo", function() { lychee.goto(album.getID() + "/" + $(this).attr("data-id")) })

		/* Modal */
		.on(event_name, ".message .close", modal.close)
		.on(event_name, ".message .button:first", function() { if (modal.fns!==null) modal.fns[0](); if (!visible.signin()) modal.close() })
		.on(event_name, ".message .button:last", function() { if (modal.fns!==null) modal.fns[1](); if (!visible.signin()) modal.close() })

		/* Add Dialog */
		.on(event_name, ".button_add", function(e) { contextMenu.add(e) })

		/* Context Menu */
		.on("contextmenu", ".photo", function(e) { contextMenu.photo(photo.getID(), e) })
		.on("contextmenu", ".album", function(e) { contextMenu.album(album.getID(), e) })
		.on(event_name, ".contextmenu_bg", contextMenu.close)
		.on("contextmenu", ".contextmenu_bg", contextMenu.close)

		/* Infobox */
		.on(event_name, "#infobox_overlay", view.infobox.hide)

		/* Upload */
		.on("change", "#upload_files", function() { modal.close(); upload.start.local(this.files) })
		.on(event_name, ".upload_message a.close", upload.close)
		.on("dragover", function(e) { e.preventDefault(); }, false)
		.on("drop", function(e) {
			e.stopPropagation();
			e.preventDefault();
			if (e.originalEvent.dataTransfer.files.length>0)				upload.start.local(e.originalEvent.dataTransfer.files);
			else if (e.originalEvent.dataTransfer.getData('Text').length>3)	upload.start.url(e.originalEvent.dataTransfer.getData('Text'));
			return true;
		});

	/* Init */
	lychee.init();

});
/**
 * @name		LoadingBar Module
 * @description	This module is used to show and hide the loading bar.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

loadingBar = {

	status: null,

	show: function(status, errorText) {

		if (status==='error') {

			// Set status
			loadingBar.status = 'error';

			// Parse text
			if (errorText) errorText = errorText.replace('<br>', '');
			if (!errorText) errorText = 'Whoops, it looks like something went wrong. Please reload the site and try again!';

			// Move header down
			if (visible.controls()) lychee.header.addClass('error');

			// Modify loading
			lychee.loadingBar
				.removeClass('loading uploading error')
				.addClass(status)
				.html('<h1>Error: <span>' + errorText + '</span></h1>')
				.show()
				.css('height', '40px');

			// Set timeout
			clearTimeout(lychee.loadingBar.data('timeout'));
			lychee.loadingBar.data('timeout', setTimeout(function() { loadingBar.hide(true) }, 3000));

			return true;

		}

		if (loadingBar.status===null) {

			// Set status
			loadingBar.status = 'loading';

			// Set timeout
			clearTimeout(lychee.loadingBar.data('timeout'));
			lychee.loadingBar.data('timeout', setTimeout(function() {

				// Move header down
				if (visible.controls()) lychee.header.addClass('loading');

				// Modify loading
				lychee.loadingBar
					.removeClass('loading uploading error')
					.addClass('loading')
					.show();

			}, 1000));

			return true;

		}

	},

	hide: function(force) {

		if ((loadingBar.status!=='error'&&loadingBar.status!==null)||force) {

			// Remove status
			loadingBar.status = null;

			// Move header up
			if (visible.controls()) lychee.header.removeClass('error loading');

			// Modify loading
			lychee.loadingBar
				.html('')
				.css('height', '3px');

			// Set timeout
			clearTimeout(lychee.loadingBar.data('timeout'));
			setTimeout(function() { lychee.loadingBar.hide() }, 300);

		}

	}

};
/**
 * @name		Lychee Module
 * @description	This module provides the basic functions of Lychee.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

var lychee = {

	title: "",
	version: "2.6.2",
	version_code: "020602",

	api_path: "php/api.php",
	update_path: "http://lychee.electerious.com/version/index.php",
	updateURL: "https://github.com/electerious/Lychee",
	website: "http://lychee.electerious.com",

	publicMode: false,
	viewMode: false,
	debugMode: false,

	username: "",
	checkForUpdates: false,
	sorting: "",
	location: "",

	dropbox: false,
	dropboxKey: '',

	loadingBar: $("#loading"),
	header: $("header"),
	content: $("#content"),
	imageview: $("#imageview"),
	infobox: $("#infobox"),

	init: function() {

		var params;

		params = "init&version=" + lychee.version_code;
		lychee.api(params, function(data) {

			if (data.loggedIn!==true) {
				lychee.setMode("public");
			} else {
				lychee.username = data.config.username || '';
				lychee.sorting = data.config.sorting || '';
				lychee.dropboxKey = data.config.dropboxKey || '';
				lychee.location = data.config.location || '';
			}

			// No configuration
			if (data==="Warning: No configuration!") {
				lychee.header.hide();
				lychee.content.hide();
				$("body").append(build.no_content("cog"));
				settings.createConfig();
				return true;
			}

			// No login
			if (data.config.login===false) {
				settings.createLogin();
			}

			lychee.checkForUpdates = data.config.checkForUpdates;
			$(window).bind("popstate", lychee.load);
			lychee.load();

		});

	},

	api: function(params, callback, loading) {

		if (loading===undefined) loadingBar.show();

		$.ajax({
			type: "POST",
			url: lychee.api_path,
			data: "function=" + params,
			dataType: "text",
			success: function(data) {

				setTimeout(function() { loadingBar.hide() }, 100);

				if (typeof data==="string"&&data.substring(0, 7)==="Error: ") {
					lychee.error(data.substring(7, data.length), params, data);
					upload.close(true);
					return false;
				}

				if (data==="1") data = true;
				else if (data==="") data = false;

				if (typeof data==="string"&&data.substring(0, 1)==="{"&&data.substring(data.length-1, data.length)==="}") data = $.parseJSON(data);

				if (lychee.debugMode) console.log(data);

				callback(data);

			},
			error: function(jqXHR, textStatus, errorThrown) {

				lychee.error("Server error or API not found.", params, errorThrown);
				upload.close(true);

			}
		});

	},

	login: function() {

		var user = $("input#username").val(),
			password = md5($("input#password").val()),
			params;

		params = "login&user=" + user + "&password=" + password;
		lychee.api(params, function(data) {
			if (data===true) {
				localStorage.setItem("lychee_username", user);
				window.location.reload();
			} else {
				$("#password").val("").addClass("error").focus();
				$(".message .button.active").removeClass("pressed");
			}
		});

	},

	loginDialog: function() {

		var local_username;

		$("body").append(build.signInModal());
		$("#username").focus();
		if (localStorage) {
			local_username = localStorage.getItem("lychee_username");
			if (local_username!==null) {
				if (local_username.length>0) $("#username").val(local_username);
				$("#password").focus();
			}
		}
		if (lychee.checkForUpdates==="1") lychee.getUpdate();

	},

	logout: function() {

		lychee.api("logout", function() {
			window.location.reload();
		});

	},

	goto: function(url) {

		if (url===undefined) url = "#";
		else url = "#" + url;

		history.pushState(null, null, url);
		lychee.load();

	},

	load: function() {

		var albumID = "",
			photoID = "",
			hash = document.location.hash.replace("#", "").split("/");

		$(".no_content").remove();
		contextMenu.close();
		multiselect.close();

		if (hash[0]!==undefined) albumID = hash[0];
		if (hash[1]!==undefined) photoID = hash[1];

		if (albumID&&photoID) {

			// Trash data
			//albums.json = null;
			photo.json = null;

			// Show Photo
			if (lychee.content.html()===""||($("#search").length&&$("#search").val().length!==0)) {
				lychee.content.hide();
				album.load(albumID, true);
			}
			photo.load(photoID, albumID);
            
		} else if (albumID) {

			// Trash data
			//albums.json = null;
			photo.json = null;

			// Show Album
			if (visible.photo()) view.photo.hide();
			if (album.json&&albumID==album.json.id) view.album.title();
			else album.load(albumID);

		} else {

			// Trash data
			//albums.json = null;
			album.json = null;
			photo.json = null;
			search.code = "";

			// Show Albums
			if (visible.album()) view.album.hide();
			if (visible.photo()) view.photo.hide();
			albums.load();

		}

	},

	getUpdate: function() {

		$.ajax({
			url: lychee.update_path,
			success: function(data) { if (parseInt(data)>parseInt(lychee.version_code)) $("#version span").show(); }
		});

	},

	setTitle: function(title, editable) {

		if (lychee.title==="") lychee.title = document.title;

		if (title==="Albums") document.title = lychee.title;
		else document.title = lychee.title + " - " + title;

		if (editable) $("#title").addClass("editable");
		else $("#title").removeClass("editable");

		$("#title").html(title);

	},

	setMode: function(mode) {

		$("#button_settings, #button_settings, #button_search, #search, #button_trash_album, #button_share_album, .button_add, .button_divider").remove();
		$("#button_trash, #button_move, #button_share, #button_star").remove();

		$(document)
			.on("mouseenter", "#title.editable", function() { $(this).removeClass("editable") })
			.off("click", "#title.editable")
			.off("touchend", "#title.editable")
			.off("contextmenu", ".photo")
			.off("contextmenu", ".album")
			.off("drop");

		Mousetrap
			.unbind(['u', 'ctrl+u'])
			.unbind(['s', 'ctrl+s'])
			.unbind(['r', 'ctrl+r'])
			.unbind(['d', 'ctrl+d'])
			.unbind(['t', 'ctrl+t'])
			.unbind(['command+backspace', 'ctrl+backspace']);

		if (mode==="public") {

			$("header #button_signin, header #hostedwith").show();
			lychee.publicMode = true;

		} else if (mode==="view") {

			Mousetrap.unbind('esc');
			$("#button_back, a#next, a#previous").remove();
			$(".no_content").remove();

			lychee.publicMode = true;
			lychee.viewMode = true;

		}

	},

	animate: function(obj, animation) {

		var animations = [
			["fadeIn", "fadeOut"],
			["contentZoomIn", "contentZoomOut"]
		];

		if (!obj.jQuery) obj = $(obj);

		for (var i = 0; i < animations.length; i++) {
			for (var x = 0; x < animations[i].length; x++) {
				if (animations[i][x]==animation) {
					obj.removeClass(animations[i][0] + " " + animations[i][1]).addClass(animation);
					return true;
				}
			}
		}

		return false;

	},

	escapeHTML: function(s) {

		return s.replace(/&/g, '&amp;')
				.replace(/"/g, '&quot;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;');

	},

	loadDropbox: function(callback) {

		if (!lychee.dropbox&&lychee.dropboxKey) {

			loadingBar.show();

			var g = document.createElement("script"),
				s = document.getElementsByTagName("script")[0];

			g.src = "https://www.dropbox.com/static/api/1/dropins.js";
			g.id = "dropboxjs";
			g.type = "text/javascript";
			g.async = "true";
			g.setAttribute("data-app-key", lychee.dropboxKey);
			g.onload = g.onreadystatechange = function() {
				var rs = this.readyState;
				if (rs&&rs!=="complete"&&rs!=="loaded") return;
				lychee.dropbox = true;
				loadingBar.hide();
				callback();
			};
			s.parentNode.insertBefore(g, s);

		} else if (lychee.dropbox&&lychee.dropboxKey) {

			callback();

		} else {

			settings.setDropboxKey(callback);

		}

	},

	removeHTML: function(html) {

		var tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText;

	},

	error: function(errorThrown, params, data) {

		console.error({
			description: errorThrown,
			params: params,
			response: data
		});

		loadingBar.show("error", errorThrown);

	}

};
/**
 * @name        Modal Module
 * @description	Build, show and hide a modal.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

modal = {

	fns: null,

	show: function(title, text, buttons, marginTop, closeButton) {

		if (!buttons) {
			buttons = [
				["", function() {}],
				["", function() {}]
			];
		}

		modal.fns = [buttons[0][1], buttons[1][1]];
		$("body").append(build.modal(title, text, buttons, marginTop, closeButton));
		$(".message input:first-child").focus().select();

	},

	close: function() {

		modal.fns = null;
		$(".message_overlay").removeClass("fadeIn").css("opacity", 0);
		setTimeout(function() { $(".message_overlay").remove() }, 300);

	}

};
/**
 * @name		Multiselect Module
 * @description	Select multiple albums or photos.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

multiselect = {

	position: {

		top:	null,
		right:	null,
		bottom:	null,
		left:	null

	},

	show: function(e) {

		if (mobileBrowser())	return false;
		if (lychee.publicMode)	return false;
		if (visible.search())	return false;
		if (visible.infobox())	return false;
		if (!visible.albums()&&!visible.album)			return false;
		if ($('.album:hover, .photo:hover').length!==0)	return false;
		if (visible.multiselect())						$('#multiselect').remove();

		multiselect.position.top	= e.pageY;
		multiselect.position.right	= -1 * (e.pageX - $(document).width());
		multiselect.position.bottom	= -1 * (multiselect.position.top - $(window).height());
		multiselect.position.left	= e.pageX;

		$('body').append(build.multiselect(multiselect.position.top, multiselect.position.left));
		$(document).on('mousemove', multiselect.resize);

	},

	selectAll: function() {

		var e,
			newWidth,
			newHeight;

		if (mobileBrowser())		return false;
		if (lychee.publicMode)		return false;
		if (visible.search())		return false;
		if (visible.infobox())		return false;
		if (!visible.albums()&&!visible.album)	return false;
		if (visible.multiselect())	$('#multiselect').remove();

		multiselect.position.top	= 70;
		multiselect.position.right	= 40;
		multiselect.position.bottom	= 90;
		multiselect.position.left	= 20;

		$('body').append(build.multiselect(multiselect.position.top, multiselect.position.left));

		newWidth	= $(document).width() - multiselect.position.right + 2;
		newHeight	= $(document).height() - multiselect.position.bottom;

		$('#multiselect').css({
			width: newWidth,
			height: newHeight
		});

		e = {
			pageX: $(document).width() - (multiselect.position.right / 2),
			pageY: $(document).height() - multiselect.position.bottom
		};

		multiselect.getSelection(e);

	},

	resize: function(e) {

		var mouse_x = e.pageX,
			mouse_y = e.pageY,
			newHeight,
			newWidth;

		if (multiselect.position.top===null||
			multiselect.position.right===null||
			multiselect.position.bottom===null||
			multiselect.position.left===null) return false;

		if (mouse_y>=multiselect.position.top) {

			// Do not leave the screen
			newHeight = mouse_y - multiselect.position.top;
			if ((multiselect.position.top+newHeight)>=$(document).height())
				newHeight -= (multiselect.position.top + newHeight) - $(document).height() + 2;

			$('#multiselect').css({
				top: multiselect.position.top,
				bottom: 'inherit',
				height: newHeight
			});

		} else {

			$('#multiselect').css({
				top: 'inherit',
				bottom: multiselect.position.bottom,
				height: multiselect.position.top - e.pageY
			});

		}

		if (mouse_x>=multiselect.position.left) {

			// Do not leave the screen
			newWidth = mouse_x - multiselect.position.left;
			if ((multiselect.position.left+newWidth)>=$(document).width())
				newWidth -= (multiselect.position.left + newWidth) - $(document).width() + 2;

			$('#multiselect').css({
				right: 'inherit',
				left: multiselect.position.left,
				width: newWidth
			});

		} else {

			$('#multiselect').css({
				right: multiselect.position.right,
				left: 'inherit',
				width: multiselect.position.left - e.pageX
			});

		}

	},

	stopResize: function() {

		$(document).off('mousemove');

	},

	getSize: function() {

		if (!visible.multiselect()) return false;

		return {
			top:	$('#multiselect').offset().top,
			left:	$('#multiselect').offset().left,
			width:	parseInt($('#multiselect').css('width').replace('px', '')),
			height:	parseInt($('#multiselect').css('height').replace('px', ''))
		};

	},

	getSelection: function(e) {

		var tolerance = 150,
			id,
			ids = [],
			offset,
			size = multiselect.getSize();

		if (visible.contextMenu()) return false;
		if (!visible.multiselect()) return false;

		$('.photo, .album').each(function() {

			offset = $(this).offset();

			if (offset.top>=(size.top-tolerance)&&
				offset.left>=(size.left-tolerance)&&
				(offset.top+206)<=(size.top+size.height+tolerance)&&
				(offset.left+206)<=(size.left+size.width+tolerance)) {

					id = $(this).data('id');

					if (id!=='0'&&id!==0&&id!=='f'&&id!=='s'&&id!=='r'&&id!==null&&id!==undefined) {

						ids.push(id);
						$(this).addClass('active');

					}

				}

		});

		if (ids.length!==0&&visible.album()) contextMenu.photoMulti(ids, e);
		else if (ids.length!==0&&visible.albums()) contextMenu.albumMulti(ids, e);
		else multiselect.close();

	},

	close: function() {

		multiselect.stopResize();

		multiselect.position.top	= null;
		multiselect.position.right	= null;
		multiselect.position.bottom	= null;
		multiselect.position.left	= null;

		lychee.animate('#multiselect', 'fadeOut');
		setTimeout(function() {
			$('#multiselect').remove();
		}, 300);

	}

};
/**
 * @name        Password Module
 * @description	Controls the access to password-protected albums and photos.
 * @author      Tobias Reich
 * @copyright   2014 by Tobias Reich
 */

password = {

	value: "",

	get: function(albumID, callback) {

		var passwd = $(".message input.text").val(),
			params;

		if (!lychee.publicMode) callback();
		else if (album.json&&album.json.password==false) callback();
		else if (albums.json&&albums.json.content[albumID].password==false) callback();
		else if (!albums.json&&!album.json) {

			// Continue without password
			album.json = {password: true};
			callback("");

		} else if (passwd==undefined) {

			// Request password
			password.getDialog(albumID, callback);

		} else {

			// Check password
			params = "checkAlbumAccess&albumID=" + albumID + "&password=" + md5(passwd);
			lychee.api(params, function(data) {

				if (data===true) {
					password.value = md5(passwd);
					callback();
				} else {
					lychee.goto("");
					loadingBar.show("error", "Access denied. Wrong password!");
				}

			});

		}

	},

	getDialog: function(albumID, callback) {

		var buttons;

		buttons = [
			["Enter", function() { password.get(albumID, callback) }],
			["Cancel", lychee.goto]
		];
		modal.show("<a class='icon-lock'></a> Enter Password", "This album is protected by a password. Enter the password below to view the photos of this album: <input class='text' type='password' placeholder='password' value=''>", buttons, -110, false);

	}

};
/**
 * @name		Photo Module
 * @description	Takes care of every action a photo can handle and execute.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

cache = null;
photo = {

	json: null,

	getID: function() {

		var id;

		if (photo.json) id = photo.json.id;
		else id = $(".photo:hover, .photo.active").attr("data-id");

		if (id) return id;
		else return false;

	},

	load: function(photoID, albumID) {

		var params,
			checkPasswd;

		params = "getPhoto&photoID=" + photoID + "&albumID=" + albumID + "&password=" + password.value;
		lychee.api(params, function(data) {

			if (data==="Warning: Wrong password!") {
				checkPasswd = function() {
					if (password.value!=="") photo.load(photoID, albumID);
					else setTimeout(checkPasswd, 250);
				};
				checkPasswd();
				return false;
			}

			photo.json = data;
			if (!visible.photo()) view.photo.show();
			view.photo.init();

			lychee.imageview.show();
			setTimeout(function() { 
				lychee.content.show();
				photo.preloadNext(photoID,albumID); }, 300);

		});

	},
	
	//preload the next photo for better response time
	preloadNext: function(photoID) {
		if(album.json &&
		   album.json.content && 
		   album.json.content[photoID] &&
		   album.json.content[photoID].nextPhoto!="") {
			
			var nextPhoto    = album.json.content[photoID].nextPhoto;
			var url   = album.json.content[nextPhoto].url; 
			cache     = new Image();
			cache.src = url;
		}
	},

	parse: function() {

		if (!photo.json.title) photo.json.title = "Untitled";

	},

	previous: function(animate) {

		var delay = 0;

		if (photo.getID()!==false&&
			album.json&&
			album.json.content[photo.getID()]&&
			album.json.content[photo.getID()].previousPhoto!=="") {

				if (animate===true) {

					delay = 200;

					$("#image").css({
						WebkitTransform: 'translateX(100%)',
						MozTransform: 'translateX(100%)',
						transform: 'translateX(100%)',
						opacity: 0
					});

				}

				setTimeout(function() {
					if (photo.getID()===false) return false;
					lychee.goto(album.getID() + "/" + album.json.content[photo.getID()].previousPhoto)
				}, delay);

			}

	},

	next: function(animate) {

		var delay = 0;

		if (photo.getID()!==false&&
			album.json&&
			album.json.content[photo.getID()]&&
			album.json.content[photo.getID()].nextPhoto!=="") {

				if (animate===true) {

					delay = 200;

					$("#image").css({
						WebkitTransform: 'translateX(-100%)',
						MozTransform: 'translateX(-100%)',
						transform: 'translateX(-100%)',
						opacity: 0
					});

				}

				setTimeout(function() {
					if (photo.getID()===false) return false;
					lychee.goto(album.getID() + "/" + album.json.content[photo.getID()].nextPhoto);
				}, delay);

			}

	},

	duplicate: function(photoIDs) {

		var params;

		if (!photoIDs) return false;
		if (photoIDs instanceof Array===false) photoIDs = [photoIDs];

		params = "duplicatePhoto&photoIDs=" + photoIDs;
		lychee.api(params, function(data) {

			if (data!==true) lychee.error(null, params, data);
			else album.load(album.getID(), false);

		});

	},

	delete: function(photoIDs) {

		var params,
			buttons,
			photoTitle;

		if (!photoIDs) return false;
		if (photoIDs instanceof Array===false) photoIDs = [photoIDs];

		if (photoIDs.length===1) {
			// Get title if only one photo is selected
			if (visible.photo()) photoTitle = photo.json.title;
			else photoTitle = album.json.content[photoIDs].title;
			if (photoTitle==="") photoTitle = "Untitled";
		}

		buttons = [
			["", function() {

				var nextPhoto,
					previousPhoto;

				photoIDs.forEach(function(id, index, array) {

					// Change reference for the next and previous photo
					if (album.json.content[id].nextPhoto!==""||album.json.content[id].previousPhoto!=="") {

						nextPhoto = album.json.content[id].nextPhoto;
						previousPhoto = album.json.content[id].previousPhoto;

						album.json.content[previousPhoto].nextPhoto = nextPhoto;
						album.json.content[nextPhoto].previousPhoto = previousPhoto;

					}

					album.json.content[id] = null;
					view.album.content.delete(id);

				});

				// Only when search is not active
				if (!visible.albums()) lychee.goto(album.getID());

				params = "deletePhoto&photoIDs=" + photoIDs;
				lychee.api(params, function(data) {

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["", function() {}]
		];

		if (photoIDs.length===1) {

			buttons[0][0] = "Delete Photo";
			buttons[1][0] = "Keep Photo";

			modal.show("Delete Photo", "Are you sure you want to delete the photo '" + photoTitle + "'?<br>This action can't be undone!", buttons);

		} else {

			buttons[0][0] = "Delete Photos";
			buttons[1][0] = "Keep Photos";

			modal.show("Delete Photos", "Are you sure you want to delete all " + photoIDs.length + " selected photo?<br>This action can't be undone!", buttons);

		}

	},

	setTitle: function(photoIDs) {

		var oldTitle = "",
			newTitle,
			params,
			buttons;

		if (!photoIDs) return false;
		if (photoIDs instanceof Array===false) photoIDs = [photoIDs];

		if (photoIDs.length===1) {
			// Get old title if only one photo is selected
			if (photo.json) oldTitle = photo.json.title;
			else if (album.json) oldTitle = album.json.content[photoIDs].title;
			oldTitle = oldTitle.replace("'", "&apos;");
		}

		buttons = [
			["Set Title", function() {

				// Get input
				newTitle = $(".message input.text").val();

				// Remove html from input
				newTitle = lychee.removeHTML(newTitle);

				if (visible.photo()) {
					photo.json.title = (newTitle==="") ? "Untitled" : newTitle;
					view.photo.title();
				}

				photoIDs.forEach(function(id, index, array) {
					album.json.content[id].title = newTitle;
					view.album.content.title(id);
				});

				params = "setPhotoTitle&photoIDs=" + photoIDs + "&title=" + escape(encodeURI(newTitle));
				lychee.api(params, function(data) {

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		if (photoIDs.length===1) modal.show("Set Title", "Enter a new title for this photo: <input class='text' type='text' maxlength='30' placeholder='Title' value='" + oldTitle + "'>", buttons);
		else modal.show("Set Titles", "Enter a title for all " + photoIDs.length + " selected photos: <input class='text' type='text' maxlength='30' placeholder='Title' value=''>", buttons);

	},

	setAlbum: function(photoIDs, albumID) {

		var params,
			nextPhoto,
			previousPhoto;

		if (!photoIDs) return false;
		if (visible.photo) lychee.goto(album.getID());
		if (photoIDs instanceof Array===false) photoIDs = [photoIDs];

		photoIDs.forEach(function(id, index, array) {

			// Change reference for the next and previous photo
			if (album.json.content[id].nextPhoto!==""||album.json.content[id].previousPhoto!=="") {

				nextPhoto = album.json.content[id].nextPhoto;
				previousPhoto = album.json.content[id].previousPhoto;

				album.json.content[previousPhoto].nextPhoto = nextPhoto;
				album.json.content[nextPhoto].previousPhoto = previousPhoto;

			}

			album.json.content[id] = null;
			view.album.content.delete(id);

		});

		params = "setPhotoAlbum&photoIDs=" + photoIDs + "&albumID=" + albumID;
		lychee.api(params, function(data) {

			if (data!==true) lychee.error(null, params, data);

		});

	},

	setStar: function(photoIDs) {

		var params;

		if (!photoIDs) return false;
		if (visible.photo()) {
			photo.json.star = (photo.json.star==0) ? 1 : 0;
			view.photo.star();
		}

		photoIDs.forEach(function(id, index, array) {
			album.json.content[id].star = (album.json.content[id].star==0) ? 1 : 0;
			view.album.content.star(id);
		});

		params = "setPhotoStar&photoIDs=" + photoIDs;
		lychee.api(params, function(data) {

			if (data!==true) lychee.error(null, params, data);

		});
		
		albums.refresh();

	},

	setPublic: function(photoID, e) {

		var params;
		
		if (photo.json.public==2) {
			modal.show("Public Album", "This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.", [["Show Album", function() { lychee.goto(photo.json.original_album) }], ["Close", function() {}]]);
			return false;

		}
		
		albums.refresh();


		if (visible.photo()) {

			photo.json.public = (photo.json.public==0) ? 1 : 0;
			view.photo.public();
			if (photo.json.public==1) contextMenu.sharePhoto(photoID, e);

		}

		album.json.content[photoID].public = (album.json.content[photoID].public==0) ? 1 : 0;
		view.album.content.public(photoID);

		params = "setPhotoPublic&photoID=" + photoID;
		lychee.api(params, function(data) {

			if (data!==true) lychee.error(null, params, data);

		});

	},

	setDescription: function(photoID) {

		var oldDescription = photo.json.description.replace("'", "&apos;"),
			description,
			params,
			buttons;

		buttons = [
			["Set Description", function() {

				// Get input
				description = $(".message input.text").val();

				// Remove html from input
				description = lychee.removeHTML(description);

				if (visible.photo()) {
					photo.json.description = description;
					view.photo.description();
				}

				params = "setPhotoDescription&photoID=" + photoID + "&description=" + escape(encodeURI(description));
				lychee.api(params, function(data) {

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		modal.show("Set Description", "Enter a description for this photo: <input class='text' type='text' maxlength='800' placeholder='Description' value='" + oldDescription + "'>", buttons);

	},

	editTags: function(photoIDs) {

		var oldTags = "",
			tags = "",
			buttons;

		if (!photoIDs) return false;
		if (photoIDs instanceof Array===false) photoIDs = [photoIDs];

		// Get tags
		if (visible.photo()) oldTags = photo.json.tags;
		if (visible.album()&&photoIDs.length===1) oldTags = album.json.content[photoIDs].tags;
		if (visible.album()&&photoIDs.length>1) {
			var same = true;
			photoIDs.forEach(function(id, index, array) {
				if(album.json.content[id].tags===album.json.content[photoIDs[0]].tags&&same===true) same = true;
				else same = false;
			});
			if (same) oldTags = album.json.content[photoIDs[0]].tags;
		}

		// Improve tags
		oldTags = oldTags.replace(/,/g, ', ');

		buttons = [
			["Set Tags", function() {

				tags = $(".message input.text").val();

				photo.setTags(photoIDs, tags);

			}],
			["Cancel", function() {}]
		];

		if (photoIDs.length===1) modal.show("Set Tags", "Enter your tags for this photo. You can add multiple tags by separating them with a comma: <input class='text' type='text' maxlength='800' placeholder='Tags' value='" + oldTags + "'>", buttons);
		else modal.show("Set Tags", "Enter your tags for all " + photoIDs.length + " selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma: <input class='text' type='text' maxlength='800' placeholder='Tags' value='" + oldTags + "'>", buttons);

	},

	setTags: function(photoIDs, tags) {

		var params;

		if (!photoIDs) return false;
		if (photoIDs instanceof Array===false) photoIDs = [photoIDs];

		// Parse tags
		tags = tags.replace(/(\ ,\ )|(\ ,)|(,\ )|(,{1,}\ {0,})|(,$|^,)/g, ',');
		tags = tags.replace(/,$|^,|(\ ){0,}$/g, '');

		// Remove html from input
		tags = lychee.removeHTML(tags);

		if (visible.photo()) {
			photo.json.tags = tags;
			view.photo.tags();
		}

		photoIDs.forEach(function(id, index, array) {
			album.json.content[id].tags = tags;
		});

		params = "setPhotoTags&photoIDs=" + photoIDs + "&tags=" + tags;
		lychee.api(params, function(data) {

			if (data!==true) lychee.error(null, params, data);

		});

	},

	deleteTag: function(photoID, index) {

		var tags;

		// Remove
		tags = photo.json.tags.split(',');
		tags.splice(index, 1);

		// Save
		photo.json.tags = tags.toString();
		photo.setTags([photoID], photo.json.tags);

	},

	share: function(photoID, service) {

		var link = "",
			url = photo.getViewLink(photoID),
			filename = "unknown";

		switch (service) {
			case 0:
				link = "https://twitter.com/share?url=" + encodeURI(url);
				break;
			case 1:
				link = "http://www.facebook.com/sharer.php?u=" + encodeURI(url) + "&t=" + encodeURI(photo.json.title);
				break;
			case 2:
				link = "mailto:?subject=" + encodeURI(photo.json.title) + "&body=" + encodeURI(url);
				break;
			case 3:
				lychee.loadDropbox(function() {
					filename = photo.json.title + "." + photo.getDirectLink().split('.').pop();
					Dropbox.save(photo.getDirectLink(), filename);
				});
				break;
			default:
				link = "";
				break;
		}

		if (link.length>5) location.href = link;

	},

	isSmall: function() {

		var size = {
			width: false,
			height: false
		};

		if (photo.json.width<$(window).width()-60) size.width = true;
		if (photo.json.height<$(window).height()-100) size.height = true;

		if (size.width&&size.height) return true;
		else return false;

	},

	getArchive: function(photoID) {

		var link,
			url = "php/api.php?function=getPhotoArchive&photoID=" + photoID;

		if (location.href.indexOf("index.html")>0) link = location.href.replace(location.hash, "").replace("index.html", url);
		else link = location.href.replace(location.hash, "") + url;

		if (lychee.publicMode) link += "&password=" + password.value;

		location.href = link;

	},

	getDirectLink: function() {

		return $("#imageview #image").css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig, "");

	},

	getViewLink: function(photoID) {

		var url = "view.php?p=" + photoID;

		if (location.href.indexOf("index.html")>0) return location.href.replace("index.html" + location.hash, url);
		else return location.href.replace(location.hash, url);

	}

};
/**
 * @name        Search Module
 * @description	Searches through your photos and albums.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

search = {

	code: null,

	find: function(term) {

		var params,
			albumsData = "",
			photosData = "",
			code;

		clearTimeout($(window).data("timeout"));
		$(window).data("timeout", setTimeout(function() {

			if ($("#search").val().length!==0) {

				params = "search&term=" + term;
				lychee.api(params, function(data) {

					if (data&&data.albums) {
						albums.json = { content: data.albums };
						$.each(albums.json.content, function() {
							albums.parse(this);
							albumsData += build.album(this);
						});
					}

					if (data&&data.photos) {
						album.json = { content: data.photos };
						$.each(album.json.content, function() {
							photosData += build.photo(this);
						});
					}

					if (albumsData===""&&photosData==="") code = "error";
					else if (albumsData==="") code = build.divider("Photos")+photosData;
					else if (photosData==="") code = build.divider("Albums")+albumsData;
					else code = build.divider("Photos")+photosData+build.divider("Albums")+albumsData;

					if (search.code!==md5(code)) {

						$(".no_content").remove();

						lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomOut");
						lychee.animate(".divider", "fadeOut");

						search.code = md5(code);

						setTimeout(function() {

							if (code==="error") $("body").append(build.no_content("search"));
							else {
								lychee.content.html(code);
								lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)", "contentZoomIn");
								$("img[data-type!='svg']").retina();
							}

						}, 300);

					}

				});

			} else search.reset();

		}, 250));

	},

	reset: function() {

		$("#search").val("");
		$(".no_content").remove();

		if (search.code!=="") {

			// Trash data
			albums.json = null;
			album.json = null;
			photo.json = null;
			search.code = "";

			lychee.animate(".divider", "fadeOut");
			albums.load();

		}

	}

};
/**
 * @name		Settings Module
 * @description	Lets you change settings.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

var settings = {

	createConfig: function() {

		var dbName,
			dbUser,
			dbPassword,
			dbHost,
			dbTablePrefix,
			buttons,
			params;

		buttons = [
			["Connect", function() {

				dbHost			= $(".message input.text#dbHost").val();
				dbUser			= $(".message input.text#dbUser").val();
				dbPassword		= $(".message input.text#dbPassword").val();
				dbName			= $(".message input.text#dbName").val();
				dbTablePrefix	= $(".message input.text#dbTablePrefix").val();

				if (dbHost.length<1) dbHost = "localhost";
				if (dbName.length<1) dbName = "lychee";

				params = "dbCreateConfig&dbName=" + escape(dbName) + "&dbUser=" + escape(dbUser) + "&dbPassword=" + escape(dbPassword) + "&dbHost=" + escape(dbHost) + "&dbTablePrefix=" + escape(dbTablePrefix);
				lychee.api(params, function(data) {

					if (data!==true) {

						// Configuration failed
						setTimeout(function() {

							// Connection failed
							if (data.indexOf("Warning: Connection failed!")!==-1) {

								buttons = [
									["Retry", function() { setTimeout(settings.createConfig, 400) }],
									["", function() {}]
								];
								modal.show("Connection Failed", "Unable to connect to host database because access was denied. Double-check your host, username and password and ensure that access from your current location is permitted.", buttons, null, false);
								return false;

							}

							// Creation failed
							if (data.indexOf("Warning: Creation failed!")!==-1) {

								buttons = [
									["Retry", function() { setTimeout(settings.createConfig, 400) }],
									["", function() {}]
								];
								modal.show("Creation Failed", "Unable to create the database. Double-check your host, username and password and ensure that the specified user has the rights to modify and add content to the database.", buttons, null, false);
								return false;

							}

							// Could not create file
							if (data.indexOf("Warning: Could not create file!")!==-1) {

								buttons = [
									["Retry", function() { setTimeout(settings.createConfig, 400) }],
									["", function() {}]
								];
								modal.show("Saving Failed", "Unable to save this configuration. Permission denied in <b>'data/'</b>. Please set the read, write and execute rights for others in <b>'data/'</b> and <b>'uploads/'</b>. Take a look the readme for more information.", buttons, null, false);
								return false;

							}

							// Something went wrong
							buttons = [
								["Retry", function() { setTimeout(settings.createConfig, 400) }],
								["", function() {}]
							];
							modal.show("Configuration Failed", "Something unexpected happened. Please try again and check your installation and server. Take a look the readme for more information.", buttons, null, false);
							return false;

						}, 400);

					} else {

						// Configuration successful
						window.location.reload();

					}

				});

			}],
			["", function() {}]
		];

		modal.show("Configuration", "Enter your database connection details below: <input id='dbHost' class='text less' type='text' placeholder='Database Host (optional)' value=''><input id='dbUser' class='text less' type='text' placeholder='Database Username' value=''><input id='dbPassword' class='text more' type='password' placeholder='Database Password' value=''><br>Lychee will create its own database. If required, you can enter the name of an existing database instead:<input id='dbName' class='text less' type='text' placeholder='Database Name (optional)' value=''><input id='dbTablePrefix' class='text more' type='text' placeholder='Table prefix (optional)' value=''>", buttons, -235, false);

	},

	createLogin: function() {

		var username,
			password,
			params,
			buttons;

		buttons = [
			["Create Login", function() {

				username = $(".message input.text#username").val();
				password = $(".message input.text#password").val();

				if (username.length<1||password.length<1) {

					setTimeout(function() {

						buttons = [
							["Retry", function() { setTimeout(settings.createLogin, 400) }],
							["", function() {}]
						];
						modal.show("Wrong Input", "The username or password you entered is not long enough. Please try again with another username and password!", buttons, null, false);
						return false;

					}, 400);

				} else {

					params = "setLogin&username=" + escape(username) + "&password=" + md5(password);
					lychee.api(params, function(data) {

						if (data!==true) {

							setTimeout(function() {

								buttons = [
									["Retry", function() { setTimeout(settings.createLogin, 400) }],
									["", function() {}]
								];
								modal.show("Creation Failed", "Unable to save login. Please try again with another username and password!", buttons, null, false);
								return false;

							}, 400);

						}

					});

				}

			}],
			["", function() {}]
		];

		modal.show("Create Login", "Enter a username and password for your installation: <input id='username' class='text less' type='text' placeholder='New Username' value=''><input id='password' class='text' type='password' placeholder='New Password' value=''>", buttons, -122, false);

	},

	setLogin: function() {

		var old_password,
			username,
			password,
			params,
			buttons;

		buttons = [
			["Change Login", function() {

				old_password = $(".message input.text#old_password").val();
				username = $(".message input.text#username").val();
				password = $(".message input.text#password").val();

				if (old_password.length<1) {
					loadingBar.show("error", "Your old password was entered incorrectly. Please try again!");
					return false;
				}

				if (username.length<1) {
					loadingBar.show("error", "Your new username was entered incorrectly. Please try again!");
					return false;
				}

				if (password.length<1) {
					loadingBar.show("error", "Your new password was entered incorrectly. Please try again!");
					return false;
				}

				params = "setLogin&oldPassword=" + md5(old_password) + "&username=" + escape(username) + "&password=" + md5(password);
				lychee.api(params, function(data) {

					if (data!==true) lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		modal.show("Change Login", "Enter your current password: <input id='old_password' class='text more' type='password' placeholder='Current Password' value=''><br>Your username and password will be changed to the following: <input id='username' class='text less' type='text' placeholder='New Username' value=''><input id='password' class='text' type='password' placeholder='New Password' value=''>", buttons, -171);

	},

	setSorting: function() {

		var buttons,
			sorting,
			params;

		buttons = [
			["Change Sorting", function() {

				sorting[0] = $("select#settings_type").val();
				sorting[1] = $("select#settings_order").val();

				params = "setSorting&type=" + sorting[0] + "&order=" + sorting[1];
				lychee.api(params, function(data) {

					if (data===true) {
						lychee.sorting = "ORDER BY " + sorting[0] + " " + sorting[1];
						lychee.load();
					} else lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];
		modal.show("Change Sorting",
			"Sort photos by \
				<select id='settings_type'> \
					<option value='id'>Upload Time</option> \
					<option value='takestamp'>Take Date</option> \
					<option value='title'>Title</option> \
					<option value='description'>Description</option> \
					<option value='public'>Public</option> \
					<option value='star'>Star</option> \
					<option value='type'>Photo Format</option> \
				</select> \
				in an \
				<select id='settings_order'> \
					<option value='ASC'>Ascending</option> \
					<option value='DESC'>Descending</option> \
				</select> \
				order.\
			", buttons);

		if (lychee.sorting!=="") {

			sorting = lychee.sorting.replace("ORDER BY ", "").split(" ");

			$("select#settings_type").val(sorting[0]);
			$("select#settings_order").val(sorting[1]);

		}

	},

	setDropboxKey: function(callback) {

		var buttons,
			params,
			key;

		buttons = [
			["Set Key", function() {

				key = $(".message input.text#key").val();

				params = "setDropboxKey&key=" + key;
				lychee.api(params, function(data) {

					if (data===true) {
						lychee.dropboxKey = key;
						if (callback) lychee.loadDropbox(callback);
					} else lychee.error(null, params, data);

				});

			}],
			["Cancel", function() {}]
		];

		modal.show("Set Dropbox Key", "In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href='https://www.dropbox.com/developers/apps/create'>their website</a>. Generate yourself a personal key and enter it below: <input id='key' class='text' type='text' placeholder='Dropbox API Key' value='" + lychee.dropboxKey + "'>", buttons);

	}

};
/**
 * @name		Swipe Module
 * @description	Swipes and moves an object.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

swipe = {

	obj: null,
	tolerance: 150,
	offset: 0,

	start: function(obj, tolerance) {

		if (obj) swipe.obj = obj;
		if (tolerance) swipe.tolerance = tolerance;

		return true;

	},

	move: function(e) {

		if (swipe.obj===null) return false;

		swipe.offset = -1 * e.x;

		swipe.obj.css({
			WebkitTransform: 'translateX(' + swipe.offset + 'px)',
			MozTransform: 'translateX(' + swipe.offset + 'px)',
			transform: 'translateX(' + swipe.offset + 'px)'
		});

	},

	stop: function(e, left, right) {

		if (e.x<=-swipe.tolerance) left(true);
		else if (e.x>=swipe.tolerance) right(true);
		else if (swipe.obj!==null) {
			swipe.obj.css({
				WebkitTransform: 'translateX(0px)',
				MozTransform: 'translateX(0px)',
				transform: 'translateX(0px)'
			});
		}

		swipe.obj = null;
		swipe.offset = 0;

	}

};
/**
 * @name		Album Module
 * @description	Takes care of every action an album can handle and execute.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

upload = {

	show: function(title, files, callback) {

		upload.close(true);
		$("body").append(build.uploadModal(title, files));

		if (callback!==null&&callback!==undefined) callback();

	},

	notify: function(title, text) {

		var popup;

		if (!text||text==="") text = "You can now manage your new photo(s).";

		if (!window.webkitNotifications) return false;

		if (window.webkitNotifications.checkPermission()!==0) window.webkitNotifications.requestPermission();

		if (window.webkitNotifications.checkPermission()===0&&title) {
			popup = window.webkitNotifications.createNotification("", title, text);
			popup.show();
		}

	},

	start: {

		local: function(files) {

			var albumID = album.getID(),
				error = false,
				process = function(files, file) {

					var formData = new FormData(),
						xhr = new XMLHttpRequest(),
						pre_progress = 0,
						progress,
						finish = function() {

							window.onbeforeunload = null;

							$("#upload_files").val("");

							if (error===false) {

								// Success
								upload.close();
								upload.notify("Upload complete");

							} else {

								// Error
								$(".upload_message a.close").show();
								upload.notify("Upload complete", "Failed to upload one or more photos.");

							}

							if (album.getID()===false) lychee.goto("0");
							else album.load(albumID);

						};

					// Check if file is supported
					if (file.supported===false) {

						// Skip file
						if (file.next!==null) process(files, file.next);
						else {

							// Look for supported files
							// If zero files are supported, hide the upload after a delay

							var hasSupportedFiles = false;

							for (var i = 0; i < files.length; i++) {

								if (files[i].supported===true) {
									hasSupportedFiles = true;
									break;
								}

							}

							if (hasSupportedFiles===false) setTimeout(finish, 2000);

						}

						return false;

					}

					formData.append("function", "upload");
					formData.append("albumID", albumID);
					formData.append("tags", "");
					formData.append(0, file);

					xhr.open("POST", lychee.api_path);

					xhr.onload = function() {

						var wait = false;

						file.ready = true;

						// Set status
						if (xhr.status===200&&xhr.responseText==="1") {

							// Success
							$(".upload_message .rows .row:nth-child(" + (file.num+1) + ") .status")
								.html("Finished")
								.addClass("success");

						} else {

							// Error
							$(".upload_message .rows .row:nth-child(" + (file.num+1) + ") .status")
								.html("Error")
								.addClass("error");
							$(".upload_message .rows .row:nth-child(" + (file.num+1) + ") p.notice")
								.html("Server returned an unknown response. Please take a look at the console of your browser for further details.")
								.show();

							// Set global error
							error = true;

							// Throw error
							lychee.error("Upload failed. Server returned the status code " + xhr.status + "!", xhr, xhr.responseText);

						}

						// Check if there are file which are not finished
						for (var i = 0; i < files.length; i++) {

							if (files[i].ready===false) {
								wait = true;
								break;
							}

						}

						// Finish upload when all files are finished
						if (wait===false) finish();

					};

					xhr.upload.onprogress = function(e) {

						if (e.lengthComputable) {

							// Calculate progress
							progress = (e.loaded / e.total * 100 | 0);

							// Set progress when progress has changed
							if (progress>pre_progress) {
								$(".upload_message .rows .row:nth-child(" + (file.num+1) + ") .status").html(progress + "%");
								pre_progress = progress;
							}

							if (progress>=100) {

								// Scroll to the uploading file
								var scrollPos = 0;
								if ((file.num+1)>4) scrollPos = (file.num + 1 - 4) * 40
								$(".upload_message .rows").scrollTop(scrollPos);

								// Set status to processing
								$(".upload_message .rows .row:nth-child(" + (file.num+1) + ") .status").html("Processing");

								// Upload next file
								if (file.next!==null) process(files, file.next);

							}

						}

					};

					xhr.send(formData);

				};

			if (files.length<=0) return false;
			if (albumID===false||visible.albums()===true) albumID = 0;

			for (var i = 0; i < files.length; i++) {

				files[i].num = i;
				files[i].ready = false;
				files[i].supported = true;

				if (i < files.length-1) files[i].next = files[i+1];
				else files[i].next = null;

				// Check if file is supported
				if (files[i].type!=="image/jpeg"&&files[i].type!=="image/jpg"&&files[i].type!=="image/png"&&files[i].type!=="image/gif") {

					files[i].ready = true;
					files[i].supported = false;

				}

			}

			window.onbeforeunload = function() { return "Lychee is currently uploading!"; };

			upload.show("Uploading", files);

			// Upload first file
			process(files, files[0]);

		},

		url: function() {

			var albumID = album.getID(),
				params,
				extension,
				buttons,
				link,
				files = [];

			if (albumID===false) albumID = 0;

			buttons = [
				["Import", function() {

					link = $(".message input.text").val();

					if (link&&link.length>3) {

						extension = link.split('.').pop();
						if (extension!=="jpeg"&&extension!=="jpg"&&extension!=="png"&&extension!=="gif"&&extension!=="webp") {
							loadingBar.show("error", "The file format of this link is not supported.");
							return false;
						}

						files[0] = {
							name: link,
							supported: true
						}

						upload.show("Importing URL", files, function() {
							$(".upload_message .rows .row .status").html("Importing");
						});

						params = "importUrl&url=" + escape(encodeURI(link)) + "&albumID=" + albumID;
						lychee.api(params, function(data) {

							upload.close();
							upload.notify("Import complete");

							if (album.getID()===false) lychee.goto("0");
							else album.load(albumID);

							if (data!==true) lychee.error(null, params, data);

						});

					} else loadingBar.show("error", "Link to short or too long. Please try another one!");

				}],
				["Cancel", function() {}]
			];

			modal.show("Import from Link", "Please enter the direct link to a photo to import it: <input class='text' type='text' placeholder='http://' value='http://'>", buttons);

		},

		server: function() {

			var albumID = album.getID(),
				params,
				buttons,
				files = [],
				path;

			if (albumID===false) albumID = 0;

			buttons = [
				["Import", function() {

					path = $(".message input.text").val();

					files[0] = {
						name: path,
						supported: true
					};

					upload.show("Importing from server", files, function() {
						$(".upload_message .rows .row .status").html("Importing");
					});

					params = "importServer&albumID=" + albumID + "&path=" + escape(encodeURI(path));
					lychee.api(params, function(data) {

						upload.close();
						upload.notify("Import complete");

						if (data==="Notice: Import only contains albums!") {
							if (visible.albums()) lychee.load();
							else lychee.goto("");
						}
						else if (album.getID()===false) lychee.goto("0");
						else album.load(albumID);

						if (data==="Notice: Import only contains albums!") return true;
						else if (data==="Warning: Folder empty!") lychee.error("Folder empty. No photos imported!", params, data);
						else if (data!==true) lychee.error(null, params, data);

					});

				}],
				["Cancel", function() {}]
			];

			modal.show("Import from Server", "This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible. <input class='text' type='text' maxlength='100' placeholder='Absolute path to directory' value='" + lychee.location + "uploads/import/'>", buttons);

		},

		dropbox: function() {

			var albumID = album.getID(),
				params,
				links = "";

			if (albumID===false) albumID = 0;

			lychee.loadDropbox(function() {
				Dropbox.choose({
					linkType: "direct",
					multiselect: true,
					success: function(files) {

						for (var i = 0; i < files.length; i++) {

							links += files[i].link + ",";

							files[i] = {
								name: files[i].link,
								supported: true
							};

						}

						// Remove last comma
						links = links.substr(0, links.length-1);

						upload.show("Importing from Dropbox", files, function() {
							$(".upload_message .rows .row .status").html("Importing");
						});

						params = "importUrl&url=" + escape(links) + "&albumID=" + albumID;
						lychee.api(params, function(data) {

							upload.close();
							upload.notify("Import complete");

							if (album.getID()===false) lychee.goto("0");
							else album.load(albumID);

							if (data!==true) lychee.error(null, params, data);

						});

					}
				});
			});

		}

	},

	close: function(force) {

		if (force===true) {
			$(".upload_overlay").remove();
		} else {
			$(".upload_overlay").removeClass("fadeIn").css("opacity", 0);
			setTimeout(function() { $(".upload_overlay").remove() }, 300);
		}

	}

};
/**
 * @name		UI View
 * @description	Responsible to reflect data changes to the UI.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

view = {

	header: {

		show: function() {
 
			var newMargin = -1*($("#imageview #image").height()/2)+20;

			clearTimeout($(window).data("timeout"));

			lychee.imageview.removeClass("full");
			lychee.header.removeClass("hidden");
			lychee.loadingBar.css("opacity", 1);

			if ($("#imageview #image.small").length>0) $("#imageview #image").css('margin-top', newMargin);
			else $("#imageview #image").removeClass('full');

		},

		hide: function(e, delay) {

			var newMargin = -1*($("#imageview #image").height()/2);

			if (delay===undefined) delay = 500;

			if (visible.photo()&&!visible.infobox()&&!visible.contextMenu()&&!visible.message()) {

				clearTimeout($(window).data("timeout"));

				$(window).data("timeout", setTimeout(function() {

					lychee.imageview.addClass("full");
					lychee.header.addClass("hidden");
					lychee.loadingBar.css("opacity", 0);

					if ($("#imageview #image.small").length>0) $("#imageview #image").css('margin-top', newMargin);
					else $("#imageview #image").addClass('full');

				}, delay));

			}

		},

		mode: function(mode) {

			var albumID = album.getID();

			switch (mode) {
				case "albums":
					lychee.header.removeClass("view");
					$("#tools_album, #tools_photo").hide();
					$("#tools_albums").show();
					break;
				case "album":
					lychee.header.removeClass("view");
					$("#tools_albums, #tools_photo").hide();
					$("#tools_album").show();
					album.json.content === false ? $("#button_archive").hide() : $("#button_archive").show();
					if (lychee.publicMode&&album.json.downloadable==="0") $("#button_archive").hide();
					if (albumID==="s"||albumID==="f"||albumID==="r") {
						$("#button_info_album, #button_trash_album, #button_share_album").hide();
					} else if (albumID==="0") {
						$("#button_info_album, #button_share_album").hide();
						$("#button_trash_album").show();
					} else {
						$("#button_info_album, #button_trash_album, #button_share_album").show();
					}
					break;
				case "photo":
					lychee.header.addClass("view");
					$("#tools_albums, #tools_album").hide();
					$("#tools_photo").show();
					break;

			}

		}

	},

	infobox: {

		show: function() {

			if (!visible.infobox()) $("body").append("<div id='infobox_overlay' class='fadeIn'></div>");
			lychee.infobox.addClass("active");

		},

		hide: function() {

			lychee.animate("#infobox_overlay", "fadeOut");
			setTimeout(function() { $("#infobox_overlay").remove() }, 300);
			lychee.infobox.removeClass("active");

		}

	},

	albums: {

		init: function() {

			view.albums.title();
			view.albums.content.init();

		},

		title: function() {

			lychee.setTitle("Albums", false);

		},

		content: {
			
			scroll_pos: 0,

			init: function() {

				var smartData = "",
					albumsData = "";

				/*  Smart Albums */
				albums.parse(albums.json.unsortedAlbum);
				albums.parse(albums.json.publicAlbum);
				albums.parse(albums.json.starredAlbum);
				albums.parse(albums.json.recentAlbum);
				if (!lychee.publicMode) smartData = build.divider("Smart Albums") + build.album(albums.json.unsortedAlbum) + build.album(albums.json.starredAlbum) + build.album(albums.json.publicAlbum) + build.album(albums.json.recentAlbum);

				/*  Albums */                     
					
				if (albums.json.content) {
					$.each(albums.json.content, function() {
						albums.parse(this);
						
						//display albums in reverse order
						albumsData = build.album(this) + albumsData;
					});
					
					if (!lychee.publicMode) albumsData = build.divider("Albums") + albumsData; 
				}

				if (smartData===""&&albumsData==="") {
					lychee.content.html('');
					$("body").append(build.no_content("share"));
				} else {
					lychee.content.html(smartData + albumsData);
				}

				$("img[data-type!='nonretina']").retina();
				
				//restore scroll
				if (view.albums.content.scroll_pos != null) {
					$("html, body").scrollTop(view.albums.content.scroll_pos);
				}

			},

			title: function(albumID) {

				var prefix = "",
					longTitle = "",
					title = albums.json.content[albumID].title;

				if (albums.json.content[albumID].password) prefix = "<span class='icon-lock'></span> ";
				if (title != null && title.length>18) {
					longTitle = title;
					title = title.substr(0, 18) + "...";
				}

				$(".album[data-id='" + albumID + "'] .overlay h1")
					.html(prefix + title)
					.attr("title", longTitle);

			},

			delete: function(albumID) {

				$(".album[data-id='" + albumID + "']").css("opacity", 0).animate({
					width: 0,
					marginLeft: 0
				}, 300, function() {
					$(this).remove();
					if (albums.json.num<=0) lychee.animate(".divider:last-of-type", "fadeOut");
				});

			}

		}

	},

	album: {

		init: function() {

			album.parse();

			view.album.infobox();
			view.album.title();
			view.album.public();
			view.album.content.init();

			album.json.init = 1;

		},

		hide: function() {

			view.infobox.hide();

		},

		title: function() {

			if ((visible.album()||!album.json.init)&&!visible.photo()) {

				switch (album.getID()) {
					case "f":
						lychee.setTitle("Starred", false);
						break;
					case "s":
						lychee.setTitle("Public", false);
						break;
					case "r":
						lychee.setTitle("Recent", false);
						break;
					case "0":
						lychee.setTitle("Unsorted", false);
						break;
					default:
						if (album.json.init) $("#infobox .attr_title").html(album.json.title + " " + build.editIcon("edit_title_album"));
						lychee.setTitle(album.json.title, true);
						break;
				}

			}

		},

		content: {

			init: function() {

				var photosData = "";

				$.each(album.json.content, function() {
					photosData += build.photo(this);
				});
				lychee.content.html(photosData);

				$("img[data-type!='svg']").retina();
				
				view.albums.content.scroll_pos = $(document).scrollTop();
				//scroll to top
				$("html, body").scrollTop(0);
			},

			title: function(photoID) {

				var longTitle = "",
					title = album.json.content[photoID].title;

				if (title != null && title.length>18) {
					longTitle = title;
					title = title.substr(0, 18) + "...";
				}

				$(".photo[data-id='" + photoID + "'] .overlay h1")
					.html(title)
					.attr("title", longTitle);

			},

			star: function(photoID) {

				$(".photo[data-id='" + photoID + "'] .icon-star").remove();
				if (album.json.content[photoID].star==1) $(".photo[data-id='" + photoID + "']").append("<a class='badge red icon-star'></a>");

			},

			public: function(photoID) {

				$(".photo[data-id='" + photoID + "'] .icon-share").remove();
				if (album.json.content[photoID].public==1) $(".photo[data-id='" + photoID + "']").append("<a class='badge red icon-share'></a>");

			},

			delete: function(photoID) {

				$(".photo[data-id='" + photoID + "']").css("opacity", 0).animate({
					width: 0,
					marginLeft: 0
				}, 300, function() {
					$(this).remove();
					// Only when search is not active
					if (!visible.albums()) {
						album.json.num--;
						view.album.num();
						view.album.title();
					}
				});

			}

		},

		description: function() {

			$("#infobox .attr_description").html(album.json.description + " " + build.editIcon("edit_description_album"));

		},

		num: function() {

			$("#infobox .attr_images").html(album.json.num);

		},

		public: function() {

			if (album.json.public==1) {
				$("#button_share_album a").addClass("active");
				$("#button_share_album").attr("title", "Share Album");
				$(".photo .icon-share").remove();
				if (album.json.init) $("#infobox .attr_visibility").html("Public");
			} else {
				$("#button_share_album a").removeClass("active");
				$("#button_share_album").attr("title", "Make Public");
				if (album.json.init) $("#infobox .attr_visibility").html("Private");
			}

		},

		password: function() {

			if (album.json.password==1) $("#infobox .attr_password").html("Yes");
			else $("#infobox .attr_password").html("No");

		},

		infobox: function() {

			if ((visible.album()||!album.json.init)&&!visible.photo()) lychee.infobox.html(build.infoboxAlbum(album.json)).show();

		}

	},

	photo: {

		init: function() {

			photo.parse();

			view.photo.infobox();
			view.photo.title();
			view.photo.star();
			view.photo.public();
			view.photo.photo();

			photo.json.init = 1;

		},

		show: function() {

			// Change header
			lychee.content.addClass("view");
			view.header.mode("photo");

			// Make body not scrollable
			$("body").css("overflow", "hidden");

			// Fullscreen
			$(document)
				.bind("mouseenter", view.header.show)
				.bind("mouseleave", view.header.hide);

			lychee.animate(lychee.imageview, "fadeIn");

		},

		hide: function() {

			view.header.show();
			if (visible.infobox) view.infobox.hide();

			lychee.content.removeClass("view");
			view.header.mode("album");

			// Make body scrollable
			$("body").css("overflow", "auto");

			// Disable Fullscreen
			$(document)
				.unbind("mouseenter")
				.unbind("mouseleave");

			// Hide Photo
			lychee.animate(lychee.imageview, "fadeOut");
			setTimeout(function() {
				lychee.imageview.hide();
				view.album.infobox();
			}, 300);

		},

		title: function() {

			if (photo.json.init) $("#infobox .attr_title").html(photo.json.title + " " + build.editIcon("edit_title"));
			lychee.setTitle(photo.json.title, true);

		},

		description: function() {

			if (photo.json.init) $("#infobox .attr_description").html(photo.json.description + " " + build.editIcon("edit_description"));

		},

		star: function() {

			$("#button_star a").removeClass("icon-star-empty icon-star");
			if (photo.json.star==1) {
				// Starred
				$("#button_star a").addClass("icon-star");
				$("#button_star").attr("title", "Unstar Photo");
			} else {
				// Unstarred
				$("#button_star a").addClass("icon-star-empty");
				$("#button_star").attr("title", "Star Photo");
			}

		},

		public: function() {

			if (photo.json.public==1||photo.json.public==2) {
				// Photo public
				$("#button_share a").addClass("active");
				$("#button_share").attr("title", "Share Photo");
				if (photo.json.init) $("#infobox .attr_visibility").html("Public");
			} else {
				// Photo private
				$("#button_share a").removeClass("active");
				$("#button_share").attr("title", "Make Public");
				if (photo.json.init) $("#infobox .attr_visibility").html("Private");
			}

		},

		tags: function() {

			$("#infobox #tags").html(build.tags(photo.json.tags));

		},

		photo: function() {

			lychee.imageview.html(build.imageview(photo.json, photo.isSmall(), visible.controls()));
			
			if ((album.json&&album.json.content&&album.json.content[photo.getID()]&&album.json.content[photo.getID()].nextPhoto==="")||lychee.viewMode) $("a#next").hide();
			if ((album.json&&album.json.content&&album.json.content[photo.getID()]&&album.json.content[photo.getID()].previousPhoto==="")||lychee.viewMode) $("a#previous").hide();

		},

		infobox: function() {

			lychee.infobox.html(build.infoboxPhoto(photo.json)).show();

		}

	}

};
/**
 * @name        Visible Module
 * @description	This module is used to check if elements are visible or not.
 * @author		Tobias Reich
 * @copyright	2014 by Tobias Reich
 */

visible = {

	albums: function() {
		if ($('#tools_albums').css('display')==='block') return true;
		else return false;
	},

	album: function() {
		if ($('#tools_album').css('display')==='block') return true;
		else return false;
	},

	photo: function() {
		if ($('#imageview.fadeIn').length>0) return true;
		else return false;
	},

	search: function() {
		if (search.code!==null&&search.code!=='') return true;
		else return false;
	},

	infobox: function() {
		if ($('#infobox.active').length>0) return true;
		else return false;
	},

	infoboxbutton: function() {
		if (visible.albums()) return false;
		if (visible.photo()) return true;
		if (visible.album()&&$('#button_info_album:visible').length>0) return true;
		else return false;
	},

	controls: function() {
		if (lychee.loadingBar.css('opacity')<1) return false;
		else return true;
	},

	message: function() {
		if ($('.message').length>0) return true;
		else return false;
	},

	signin: function() {
		if ($('.message .sign_in').length>0) return true;
		else return false;
	},

	contextMenu: function() {
		if ($('.contextmenu').length>0) return true;
		else return false;
	},

	multiselect: function() {
		if ($('#multiselect').length>0) return true;
		else return false;
	}

};
=======
function mobileBrowser(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?!0:!1}function gup(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)",n=new RegExp(t),o=n.exec(window.location.href);return null===o?"":o[1]}!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=J.type(e);return"function"===n||J.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function o(e,t,n){if(J.isFunction(t))return J.grep(e,function(e,o){return!!t.call(e,o,e)!==n});if(t.nodeType)return J.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return J.filter(t,e,n);t=J.filter(t,e)}return J.grep(e,function(e){return z.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function a(e){var t=ft[e]={};return J.each(e.match(ht)||[],function(e,n){t[n]=!0}),t}function r(){Q.removeEventListener("DOMContentLoaded",r,!1),e.removeEventListener("load",r,!1),J.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=J.expando+Math.random()}function l(e,t,n){var o;if(void 0===n&&1===e.nodeType)if(o="data-"+t.replace(wt,"-$1").toLowerCase(),n=e.getAttribute(o),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:yt.test(n)?J.parseJSON(n):n}catch(i){}vt.set(e,t,n)}else n=void 0;return n}function u(){return!0}function c(){return!1}function d(){try{return Q.activeElement}catch(e){}}function p(e,t){return J.nodeName(e,"table")&&J.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function h(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function f(e){var t=Lt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,o=e.length;o>n;n++)bt.set(e[n],"globalEval",!t||bt.get(t[n],"globalEval"))}function g(e,t){var n,o,i,a,r,s,l,u;if(1===t.nodeType){if(bt.hasData(e)&&(a=bt.access(e),r=bt.set(t,a),u=a.events)){delete r.handle,r.events={};for(i in u)for(n=0,o=u[i].length;o>n;n++)J.event.add(t,i,u[i][n])}vt.hasData(e)&&(s=vt.access(e),l=J.extend({},s),vt.set(t,l))}}function b(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&J.nodeName(e,t)?J.merge([e],n):n}function v(e,t){var n=t.nodeName.toLowerCase();"input"===n&&kt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function y(t,n){var o,i=J(n.createElement(t)).appendTo(n.body),a=e.getDefaultComputedStyle&&(o=e.getDefaultComputedStyle(i[0]))?o.display:J.css(i[0],"display");return i.detach(),a}function w(e){var t=Q,n=Rt[e];return n||(n=y(e,t),"none"!==n&&n||(qt=(qt||J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=qt[0].contentDocument,t.write(),t.close(),n=y(e,t),qt.detach()),Rt[e]=n),n}function x(e,t,n){var o,i,a,r,s=e.style;return n=n||Ut(e),n&&(r=n.getPropertyValue(t)||n[t]),n&&(""!==r||J.contains(e.ownerDocument,e)||(r=J.style(e,t)),Ft.test(r)&&Bt.test(t)&&(o=s.width,i=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=r,r=n.width,s.width=o,s.minWidth=i,s.maxWidth=a)),void 0!==r?r+"":r}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function $(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),o=t,i=Vt.length;i--;)if(t=Vt[i]+n,t in e)return t;return o}function k(e,t,n){var o=Xt.exec(t);return o?Math.max(0,o[1]-(n||0))+(o[2]||"px"):t}function j(e,t,n,o,i){for(var a=n===(o?"border":"content")?4:"width"===t?1:0,r=0;4>a;a+=2)"margin"===n&&(r+=J.css(e,n+Tt[a],!0,i)),o?("content"===n&&(r-=J.css(e,"padding"+Tt[a],!0,i)),"margin"!==n&&(r-=J.css(e,"border"+Tt[a]+"Width",!0,i))):(r+=J.css(e,"padding"+Tt[a],!0,i),"padding"!==n&&(r+=J.css(e,"border"+Tt[a]+"Width",!0,i)));return r}function C(e,t,n){var o=!0,i="width"===t?e.offsetWidth:e.offsetHeight,a=Ut(e),r="border-box"===J.css(e,"boxSizing",!1,a);if(0>=i||null==i){if(i=x(e,t,a),(0>i||null==i)&&(i=e.style[t]),Ft.test(i))return i;o=r&&(G.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+j(e,t,n||(r?"border":"content"),o,a)+"px"}function D(e,t){for(var n,o,i,a=[],r=0,s=e.length;s>r;r++)o=e[r],o.style&&(a[r]=bt.get(o,"olddisplay"),n=o.style.display,t?(a[r]||"none"!==n||(o.style.display=""),""===o.style.display&&$t(o)&&(a[r]=bt.access(o,"olddisplay",w(o.nodeName)))):(i=$t(o),"none"===n&&i||bt.set(o,"olddisplay",i?n:J.css(o,"display"))));for(r=0;s>r;r++)o=e[r],o.style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?a[r]||"":"none"));return e}function S(e,t,n,o,i){return new S.prototype.init(e,t,n,o,i)}function A(){return setTimeout(function(){Gt=void 0}),Gt=J.now()}function N(e,t){var n,o=0,i={height:e};for(t=t?1:0;4>o;o+=2-t)n=Tt[o],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function I(e,t,n){for(var o,i=(nn[t]||[]).concat(nn["*"]),a=0,r=i.length;r>a;a++)if(o=i[a].call(n,t,e))return o}function _(e,t,n){var o,i,a,r,s,l,u,c,d=this,p={},h=e.style,f=e.nodeType&&$t(e),m=bt.get(e,"fxshow");n.queue||(s=J._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,J.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=J.css(e,"display"),c="none"===u?bt.get(e,"olddisplay")||w(e.nodeName):u,"inline"===c&&"none"===J.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(o in t)if(i=t[o],Zt.exec(i)){if(delete t[o],a=a||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!m||void 0===m[o])continue;f=!0}p[o]=m&&m[o]||J.style(e,o)}else u=void 0;if(J.isEmptyObject(p))"inline"===("none"===u?w(e.nodeName):u)&&(h.display=u);else{m?"hidden"in m&&(f=m.hidden):m=bt.access(e,"fxshow",{}),a&&(m.hidden=!f),f?J(e).show():d.done(function(){J(e).hide()}),d.done(function(){var t;bt.remove(e,"fxshow");for(t in p)J.style(e,t,p[t])});for(o in p)r=I(f?m[o]:0,o,d),o in m||(m[o]=r.start,f&&(r.end=r.start,r.start="width"===o||"height"===o?1:0))}}function M(e,t){var n,o,i,a,r;for(n in e)if(o=J.camelCase(n),i=t[o],a=e[n],J.isArray(a)&&(i=a[1],a=e[n]=a[0]),n!==o&&(e[o]=a,delete e[n]),r=J.cssHooks[o],r&&"expand"in r){a=r.expand(a),delete e[o];for(n in a)n in e||(e[n]=a[n],t[n]=i)}else t[o]=i}function E(e,t,n){var o,i,a=0,r=tn.length,s=J.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=Gt||A(),n=Math.max(0,u.startTime+u.duration-t),o=n/u.duration||0,a=1-o,r=0,l=u.tweens.length;l>r;r++)u.tweens[r].run(a);return s.notifyWith(e,[u,a,n]),1>a&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:J.extend({},t),opts:J.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Gt||A(),duration:n.duration,tweens:[],createTween:function(t,n){var o=J.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(o),o},stop:function(t){var n=0,o=t?u.tweens.length:0;if(i)return this;for(i=!0;o>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(M(c,u.opts.specialEasing);r>a;a++)if(o=tn[a].call(u,e,c,u.opts))return o;return J.map(c,I,u),J.isFunction(u.opts.start)&&u.opts.start.call(e,u),J.fx.timer(J.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var o,i=0,a=t.toLowerCase().match(ht)||[];if(J.isFunction(n))for(;o=a[i++];)"+"===o[0]?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(n)):(e[o]=e[o]||[]).push(n)}}function L(e,t,n,o){function i(s){var l;return a[s]=!0,J.each(e[s]||[],function(e,s){var u=s(t,n,o);return"string"!=typeof u||r||a[u]?r?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var a={},r=e===Tn;return i(t.dataTypes[0])||!a["*"]&&i("*")}function O(e,t){var n,o,i=J.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:o||(o={}))[n]=t[n]);return o&&J.extend(!0,e,o),e}function H(e,t,n){for(var o,i,a,r,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=e.mimeType||t.getResponseHeader("Content-Type"));if(o)for(i in s)if(s[i]&&s[i].test(o)){l.unshift(i);break}if(l[0]in n)a=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){a=i;break}r||(r=i)}a=a||r}return a?(a!==l[0]&&l.unshift(a),n[a]):void 0}function q(e,t,n,o){var i,a,r,s,l,u={},c=e.dataTypes.slice();if(c[1])for(r in e.converters)u[r.toLowerCase()]=e.converters[r];for(a=c.shift();a;)if(e.responseFields[a]&&(n[e.responseFields[a]]=t),!l&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=a,a=c.shift())if("*"===a)a=l;else if("*"!==l&&l!==a){if(r=u[l+" "+a]||u["* "+a],!r)for(i in u)if(s=i.split(" "),s[1]===a&&(r=u[l+" "+s[0]]||u["* "+s[0]])){r===!0?r=u[i]:u[i]!==!0&&(a=s[0],c.unshift(s[1]));break}if(r!==!0)if(r&&e["throws"])t=r(t);else try{t=r(t)}catch(d){return{state:"parsererror",error:r?d:"No conversion from "+l+" to "+a}}}return{state:"success",data:t}}function R(e,t,n,o){var i;if(J.isArray(t))J.each(t,function(t,i){n||Cn.test(e)?o(e,i):R(e+"["+("object"==typeof i?t:"")+"]",i,n,o)});else if(n||"object"!==J.type(t))o(e,t);else for(i in t)R(e+"["+i+"]",t[i],n,o)}function B(e){return J.isWindow(e)?e:9===e.nodeType&&e.defaultView}var F=[],U=F.slice,W=F.concat,X=F.push,z=F.indexOf,Y={},K=Y.toString,V=Y.hasOwnProperty,G={},Q=e.document,Z="2.1.1",J=function(e,t){return new J.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,ot=function(e,t){return t.toUpperCase()};J.fn=J.prototype={jquery:Z,constructor:J,selector:"",length:0,toArray:function(){return U.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:U.call(this)},pushStack:function(e){var t=J.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return J.each(this,e,t)},map:function(e){return this.pushStack(J.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:X,sort:F.sort,splice:F.splice},J.extend=J.fn.extend=function(){var e,t,n,o,i,a,r=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof r&&(u=r,r=arguments[s]||{},s++),"object"==typeof r||J.isFunction(r)||(r={}),s===l&&(r=this,s--);l>s;s++)if(null!=(e=arguments[s]))for(t in e)n=r[t],o=e[t],r!==o&&(u&&o&&(J.isPlainObject(o)||(i=J.isArray(o)))?(i?(i=!1,a=n&&J.isArray(n)?n:[]):a=n&&J.isPlainObject(n)?n:{},r[t]=J.extend(u,a,o)):void 0!==o&&(r[t]=o));return r},J.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===J.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!J.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==J.type(e)||e.nodeType||J.isWindow(e)?!1:e.constructor&&!V.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Y[K.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=J.trim(e),e&&(1===e.indexOf("use strict")?(t=Q.createElement("script"),t.text=e,Q.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,ot)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,o){var i,a=0,r=e.length,s=n(e);if(o){if(s)for(;r>a&&(i=t.apply(e[a],o),i!==!1);a++);else for(a in e)if(i=t.apply(e[a],o),i===!1)break}else if(s)for(;r>a&&(i=t.call(e[a],a,e[a]),i!==!1);a++);else for(a in e)if(i=t.call(e[a],a,e[a]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var o=t||[];return null!=e&&(n(Object(e))?J.merge(o,"string"==typeof e?[e]:e):X.call(o,e)),o},inArray:function(e,t,n){return null==t?-1:z.call(t,e,n)},merge:function(e,t){for(var n=+t.length,o=0,i=e.length;n>o;o++)e[i++]=t[o];return e.length=i,e},grep:function(e,t,n){for(var o,i=[],a=0,r=e.length,s=!n;r>a;a++)o=!t(e[a],a),o!==s&&i.push(e[a]);return i},map:function(e,t,o){var i,a=0,r=e.length,s=n(e),l=[];if(s)for(;r>a;a++)i=t(e[a],a,o),null!=i&&l.push(i);else for(a in e)i=t(e[a],a,o),null!=i&&l.push(i);return W.apply([],l)},guid:1,proxy:function(e,t){var n,o,i;return"string"==typeof t&&(n=e[t],t=e,e=n),J.isFunction(e)?(o=U.call(arguments,2),i=function(){return e.apply(t||this,o.concat(U.call(arguments)))},i.guid=e.guid=e.guid||J.guid++,i):void 0},now:Date.now,support:G}),J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Y["[object "+t+"]"]=t.toLowerCase()});var it=function(e){function t(e,t,n,o){var i,a,r,s,l,u,d,h,f,m;if((t?t.ownerDocument||t:R)!==_&&I(t),t=t||_,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(E&&!o){if(i=vt.exec(e))if(r=i[1]){if(9===s){if(a=t.getElementById(r),!a||!a.parentNode)return n;if(a.id===r)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(r))&&H(t,a)&&a.id===r)return n.push(a),n}else{if(i[2])return J.apply(n,t.getElementsByTagName(e)),n;if((r=i[3])&&x.getElementsByClassName&&t.getElementsByClassName)return J.apply(n,t.getElementsByClassName(r)),n}if(x.qsa&&(!P||!P.test(e))){if(h=d=q,f=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=j(e),(d=t.getAttribute("id"))?h=d.replace(wt,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=u.length;l--;)u[l]=h+p(u[l]);f=yt.test(e)&&c(t.parentNode)||t,m=u.join(",")}if(m)try{return J.apply(n,f.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return D(e.replace(lt,"$1"),t,n,o)}function n(){function e(n,o){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=o}var t=[];return e}function o(e){return e[q]=!0,e}function i(e){var t=_.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),o=e.length;o--;)T.attrHandle[n[o]]=t}function r(e,t){var n=t&&e,o=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(o)return o;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return o(function(t){return t=+t,o(function(n,o){for(var i,a=e([],n.length,t),r=a.length;r--;)n[i=a[r]]&&(n[i]=!(o[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==Y&&e}function d(){}function p(e){for(var t=0,n=e.length,o="";n>t;t++)o+=e[t].value;return o}function h(e,t,n){var o=t.dir,i=n&&"parentNode"===o,a=F++;return t.first?function(t,n,a){for(;t=t[o];)if(1===t.nodeType||i)return e(t,n,a)}:function(t,n,r){var s,l,u=[B,a];if(r){for(;t=t[o];)if((1===t.nodeType||i)&&e(t,n,r))return!0}else for(;t=t[o];)if(1===t.nodeType||i){if(l=t[q]||(t[q]={}),(s=l[o])&&s[0]===B&&s[1]===a)return u[2]=s[2];if(l[o]=u,u[2]=e(t,n,r))return!0}}}function f(e){return e.length>1?function(t,n,o){for(var i=e.length;i--;)if(!e[i](t,n,o))return!1;return!0}:e[0]}function m(e,n,o){for(var i=0,a=n.length;a>i;i++)t(e,n[i],o);return o}function g(e,t,n,o,i){for(var a,r=[],s=0,l=e.length,u=null!=t;l>s;s++)(a=e[s])&&(!n||n(a,o,i))&&(r.push(a),u&&t.push(s));return r}function b(e,t,n,i,a,r){return i&&!i[q]&&(i=b(i)),a&&!a[q]&&(a=b(a,r)),o(function(o,r,s,l){var u,c,d,p=[],h=[],f=r.length,b=o||m(t||"*",s.nodeType?[s]:s,[]),v=!e||!o&&t?b:g(b,p,e,s,l),y=n?a||(o?e:f||i)?[]:r:v;if(n&&n(v,y,s,l),i)for(u=g(y,h),i(u,[],s,l),c=u.length;c--;)(d=u[c])&&(y[h[c]]=!(v[h[c]]=d));if(o){if(a||e){if(a){for(u=[],c=y.length;c--;)(d=y[c])&&u.push(v[c]=d);a(null,y=[],u,l)}for(c=y.length;c--;)(d=y[c])&&(u=a?tt.call(o,d):p[c])>-1&&(o[u]=!(r[u]=d))}}else y=g(y===r?y.splice(f,y.length):y),a?a(null,r,y,l):J.apply(r,y)})}function v(e){for(var t,n,o,i=e.length,a=T.relative[e[0].type],r=a||T.relative[" "],s=a?1:0,l=h(function(e){return e===t},r,!0),u=h(function(e){return tt.call(t,e)>-1},r,!0),c=[function(e,n,o){return!a&&(o||n!==S)||((t=n).nodeType?l(e,n,o):u(e,n,o))}];i>s;s++)if(n=T.relative[e[s].type])c=[h(f(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[q]){for(o=++s;i>o&&!T.relative[e[o].type];o++);return b(s>1&&f(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(lt,"$1"),n,o>s&&v(e.slice(s,o)),i>o&&v(e=e.slice(o)),i>o&&p(e))}c.push(n)}return f(c)}function y(e,n){var i=n.length>0,a=e.length>0,r=function(o,r,s,l,u){var c,d,p,h=0,f="0",m=o&&[],b=[],v=S,y=o||a&&T.find.TAG("*",u),w=B+=null==v?1:Math.random()||.1,x=y.length;for(u&&(S=r!==_&&r);f!==x&&null!=(c=y[f]);f++){if(a&&c){for(d=0;p=e[d++];)if(p(c,r,s)){l.push(c);break}u&&(B=w)}i&&((c=!p&&c)&&h--,o&&m.push(c))}if(h+=f,i&&f!==h){for(d=0;p=n[d++];)p(m,b,r,s);if(o){if(h>0)for(;f--;)m[f]||b[f]||(b[f]=Q.call(l));b=g(b)}J.apply(l,b),u&&!o&&b.length>0&&h+n.length>1&&t.uniqueSort(l)}return u&&(B=w,S=v),m};return i?o(r):r}var w,x,T,$,k,j,C,D,S,A,N,I,_,M,E,P,L,O,H,q="sizzle"+-new Date,R=e.document,B=0,F=0,U=n(),W=n(),X=n(),z=function(e,t){return e===t&&(N=!0),0},Y="undefined",K=1<<31,V={}.hasOwnProperty,G=[],Q=G.pop,Z=G.push,J=G.push,et=G.slice,tt=G.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ot="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",at=it.replace("w","w#"),rt="\\["+ot+"*("+it+")(?:"+ot+"*([*^$|!~]?=)"+ot+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+at+"))|)"+ot+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+rt+")*)|.*)\\)|)",lt=new RegExp("^"+ot+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ot+"+$","g"),ut=new RegExp("^"+ot+"*,"+ot+"*"),ct=new RegExp("^"+ot+"*([>+~]|"+ot+")"+ot+"*"),dt=new RegExp("="+ot+"*([^\\]'\"]*?)"+ot+"*\\]","g"),pt=new RegExp(st),ht=new RegExp("^"+at+"$"),ft={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+rt),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ot+"*(even|odd|(([+-]|)(\\d*)n|)"+ot+"*(?:([+-]|)"+ot+"*(\\d+)|))"+ot+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+ot+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ot+"*((?:-\\d)?\\d*)"+ot+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,bt=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,wt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+ot+"?|("+ot+")|.)","ig"),Tt=function(e,t,n){var o="0x"+t-65536;return o!==o||n?t:0>o?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)};try{J.apply(G=et.call(R.childNodes),R.childNodes),G[R.childNodes.length].nodeType}catch($t){J={apply:G.length?function(e,t){Z.apply(e,et.call(t))}:function(e,t){for(var n=e.length,o=0;e[n++]=t[o++];);e.length=n-1}}}x=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},I=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:R,o=n.defaultView;return n!==_&&9===n.nodeType&&n.documentElement?(_=n,M=n.documentElement,E=!k(n),o&&o!==o.top&&(o.addEventListener?o.addEventListener("unload",function(){I()},!1):o.attachEvent&&o.attachEvent("onunload",function(){I()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=bt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),x.getById=i(function(e){return M.appendChild(e).id=q,!n.getElementsByName||!n.getElementsByName(q).length}),x.getById?(T.find.ID=function(e,t){if(typeof t.getElementById!==Y&&E){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==Y&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=x.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==Y?t.getElementsByTagName(e):void 0}:function(e,t){var n,o=[],i=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[i++];)1===n.nodeType&&o.push(n);return o}return a},T.find.CLASS=x.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==Y&&E?t.getElementsByClassName(e):void 0},L=[],P=[],(x.qsa=bt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&P.push("[*^$]="+ot+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ot+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||P.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ot+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=bt.test(O=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){x.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),L.push("!=",st)}),P=P.length&&new RegExp(P.join("|")),L=L.length&&new RegExp(L.join("|")),t=bt.test(M.compareDocumentPosition),H=t||bt.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},z=t?function(e,t){if(e===t)return N=!0,0;var o=!e.compareDocumentPosition-!t.compareDocumentPosition;return o?o:(o=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&o||!x.sortDetached&&t.compareDocumentPosition(e)===o?e===n||e.ownerDocument===R&&H(R,e)?-1:t===n||t.ownerDocument===R&&H(R,t)?1:A?tt.call(A,e)-tt.call(A,t):0:4&o?-1:1)}:function(e,t){if(e===t)return N=!0,0;var o,i=0,a=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!a||!s)return e===n?-1:t===n?1:a?-1:s?1:A?tt.call(A,e)-tt.call(A,t):0;if(a===s)return r(e,t);for(o=e;o=o.parentNode;)l.unshift(o);for(o=t;o=o.parentNode;)u.unshift(o);for(;l[i]===u[i];)i++;return i?r(l[i],u[i]):l[i]===R?-1:u[i]===R?1:0},n):_},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==_&&I(e),n=n.replace(dt,"='$1']"),!(!x.matchesSelector||!E||L&&L.test(n)||P&&P.test(n)))try{var o=O.call(e,n);if(o||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return o}catch(i){}return t(n,_,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==_&&I(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==_&&I(e);var n=T.attrHandle[t.toLowerCase()],o=n&&V.call(T.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==o?o:x.attributes||!E?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],o=0,i=0;if(N=!x.detectDuplicates,A=!x.sortStable&&e.slice(0),e.sort(z),N){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)e.splice(n[o],1)}return A=null,e},$=t.getText=function(e){var t,n="",o=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=$(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[o++];)n+=$(t);return n},T=t.selectors={cacheLength:50,createPseudo:o,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[3]||e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ft.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=j(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xt,Tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+ot+")"+e+"("+ot+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Y&&e.getAttribute("class")||"")})},ATTR:function(e,n,o){return function(i){var a=t.attr(i,e);return null==a?"!="===n:n?(a+="","="===n?a===o:"!="===n?a!==o:"^="===n?o&&0===a.indexOf(o):"*="===n?o&&a.indexOf(o)>-1:"$="===n?o&&a.slice(-o.length)===o:"~="===n?(" "+a+" ").indexOf(o)>-1:"|="===n?a===o||a.slice(0,o.length+1)===o+"-":!1):!0}},CHILD:function(e,t,n,o,i){var a="nth"!==e.slice(0,3),r="last"!==e.slice(-4),s="of-type"===t;return 1===o&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,p,h,f,m=a!==r?"nextSibling":"previousSibling",g=t.parentNode,b=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(g){if(a){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===b:1===d.nodeType)return!1;f=m="only"===e&&!f&&"nextSibling"}return!0}if(f=[r?g.firstChild:g.lastChild],r&&v){for(c=g[q]||(g[q]={}),u=c[e]||[],h=u[0]===B&&u[1],p=u[0]===B&&u[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(p=h=0)||f.pop();)if(1===d.nodeType&&++p&&d===t){c[e]=[B,h,p];break}}else if(v&&(u=(t[q]||(t[q]={}))[e])&&u[0]===B)p=u[1];else for(;(d=++h&&d&&d[m]||(p=h=0)||f.pop())&&((s?d.nodeName.toLowerCase()!==b:1!==d.nodeType)||!++p||(v&&((d[q]||(d[q]={}))[e]=[B,p]),d!==t)););return p-=i,p===o||p%o===0&&p/o>=0}}},PSEUDO:function(e,n){var i,a=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[q]?a(n):a.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?o(function(e,t){for(var o,i=a(e,n),r=i.length;r--;)o=tt.call(e,i[r]),e[o]=!(t[o]=i[r])}):function(e){return a(e,0,i)}):a}},pseudos:{not:o(function(e){var t=[],n=[],i=C(e.replace(lt,"$1"));return i[q]?o(function(e,t,n,o){for(var a,r=i(e,null,o,[]),s=e.length;s--;)(a=r[s])&&(e[s]=!(t[s]=a))}):function(e,o,a){return t[0]=e,i(t,null,a,n),!n.pop()}}),has:o(function(e){return function(n){return t(e,n).length>0}}),contains:o(function(e){return function(t){return(t.textContent||t.innerText||$(t)).indexOf(e)>-1}}),lang:o(function(e){return ht.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=E?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===_.activeElement&&(!_.hasFocus||_.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var o=0>n?n+t:n;--o>=0;)e.push(o);return e}),gt:u(function(e,t,n){for(var o=0>n?n+t:n;++o<t;)e.push(o);return e})}},T.pseudos.nth=T.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[w]=s(w);for(w in{submit:!0,reset:!0})T.pseudos[w]=l(w);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,j=t.tokenize=function(e,n){var o,i,a,r,s,l,u,c=W[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=T.preFilter;s;){(!o||(i=ut.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(a=[])),o=!1,(i=ct.exec(s))&&(o=i.shift(),a.push({value:o,type:i[0].replace(lt," ")}),s=s.slice(o.length));for(r in T.filter)!(i=ft[r].exec(s))||u[r]&&!(i=u[r](i))||(o=i.shift(),a.push({value:o,type:r,matches:i}),s=s.slice(o.length));if(!o)break}return n?s.length:s?t.error(e):W(e,l).slice(0)},C=t.compile=function(e,t){var n,o=[],i=[],a=X[e+" "];if(!a){for(t||(t=j(e)),n=t.length;n--;)a=v(t[n]),a[q]?o.push(a):i.push(a);a=X(e,y(i,o)),a.selector=e}return a},D=t.select=function(e,t,n,o){var i,a,r,s,l,u="function"==typeof e&&e,d=!o&&j(e=u.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(r=a[0]).type&&x.getById&&9===t.nodeType&&E&&T.relative[a[1].type]){if(t=(T.find.ID(r.matches[0].replace(xt,Tt),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(i=ft.needsContext.test(e)?0:a.length;i--&&(r=a[i],!T.relative[s=r.type]);)if((l=T.find[s])&&(o=l(r.matches[0].replace(xt,Tt),yt.test(a[0].type)&&c(t.parentNode)||t))){if(a.splice(i,1),e=o.length&&p(a),!e)return J.apply(n,o),n;break}}return(u||C(e,d))(o,t,!E,n,yt.test(e)&&c(t.parentNode)||t),n},x.sortStable=q.split("").sort(z).join("")===q,x.detectDuplicates=!!N,I(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(_.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||a("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||a("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||a(nt,function(e,t,n){var o;return n?void 0:e[t]===!0?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null}),t}(e);J.find=it,J.expr=it.selectors,J.expr[":"]=J.expr.pseudos,J.unique=it.uniqueSort,J.text=it.getText,J.isXMLDoc=it.isXML,J.contains=it.contains;var at=J.expr.match.needsContext,rt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,st=/^.[^:#\[\.,]*$/;J.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?J.find.matchesSelector(o,e)?[o]:[]:J.find.matches(e,J.grep(t,function(e){return 1===e.nodeType
}))},J.fn.extend({find:function(e){var t,n=this.length,o=[],i=this;if("string"!=typeof e)return this.pushStack(J(e).filter(function(){for(t=0;n>t;t++)if(J.contains(i[t],this))return!0}));for(t=0;n>t;t++)J.find(e,i[t],o);return o=this.pushStack(n>1?J.unique(o):o),o.selector=this.selector?this.selector+" "+e:e,o},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&at.test(e)?J(e):e||[],!1).length}});var lt,ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ct=J.fn.init=function(e,t){var n,o;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ut.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||lt).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof J?t[0]:t,J.merge(this,J.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:Q,!0)),rt.test(n[1])&&J.isPlainObject(t))for(n in t)J.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return o=Q.getElementById(n[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=Q,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):J.isFunction(e)?"undefined"!=typeof lt.ready?lt.ready(e):e(J):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),J.makeArray(e,this))};ct.prototype=J.fn,lt=J(Q);var dt=/^(?:parents|prev(?:Until|All))/,pt={children:!0,contents:!0,next:!0,prev:!0};J.extend({dir:function(e,t,n){for(var o=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&J(e).is(n))break;o.push(e)}return o},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),J.fn.extend({has:function(e){var t=J(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(J.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,o=0,i=this.length,a=[],r=at.test(e)||"string"!=typeof e?J(e,t||this.context):0;i>o;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(r?r.index(n)>-1:1===n.nodeType&&J.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?J.unique(a):a)},index:function(e){return e?"string"==typeof e?z.call(J(e),this[0]):z.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(J.unique(J.merge(this.get(),J(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),J.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return J.dir(e,"parentNode")},parentsUntil:function(e,t,n){return J.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return J.dir(e,"nextSibling")},prevAll:function(e){return J.dir(e,"previousSibling")},nextUntil:function(e,t,n){return J.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return J.dir(e,"previousSibling",n)},siblings:function(e){return J.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return J.sibling(e.firstChild)},contents:function(e){return e.contentDocument||J.merge([],e.childNodes)}},function(e,t){J.fn[e]=function(n,o){var i=J.map(this,t,n);return"Until"!==e.slice(-5)&&(o=n),o&&"string"==typeof o&&(i=J.filter(o,i)),this.length>1&&(pt[e]||J.unique(i),dt.test(e)&&i.reverse()),this.pushStack(i)}});var ht=/\S+/g,ft={};J.Callbacks=function(e){e="string"==typeof e?ft[e]||a(e):J.extend({},e);var t,n,o,i,r,s,l=[],u=!e.once&&[],c=function(a){for(t=e.memory&&a,n=!0,s=i||0,i=0,r=l.length,o=!0;l&&r>s;s++)if(l[s].apply(a[0],a[1])===!1&&e.stopOnFalse){t=!1;break}o=!1,l&&(u?u.length&&c(u.shift()):t?l=[]:d.disable())},d={add:function(){if(l){var n=l.length;!function a(t){J.each(t,function(t,n){var o=J.type(n);"function"===o?e.unique&&d.has(n)||l.push(n):n&&n.length&&"string"!==o&&a(n)})}(arguments),o?r=l.length:t&&(i=n,c(t))}return this},remove:function(){return l&&J.each(arguments,function(e,t){for(var n;(n=J.inArray(t,l,n))>-1;)l.splice(n,1),o&&(r>=n&&r--,s>=n&&s--)}),this},has:function(e){return e?J.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],r=0,this},disable:function(){return l=u=t=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,t||d.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],o?u.push(t):c(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}};return d},J.extend({Deferred:function(e){var t=[["resolve","done",J.Callbacks("once memory"),"resolved"],["reject","fail",J.Callbacks("once memory"),"rejected"],["notify","progress",J.Callbacks("memory")]],n="pending",o={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return J.Deferred(function(n){J.each(t,function(t,a){var r=J.isFunction(e[t])&&e[t];i[a[1]](function(){var e=r&&r.apply(this,arguments);e&&J.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===o?n.promise():this,r?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?J.extend(e,o):o}},i={};return o.pipe=o.then,J.each(t,function(e,a){var r=a[2],s=a[3];o[a[1]]=r.add,s&&r.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[a[0]]=function(){return i[a[0]+"With"](this===i?o:this,arguments),this},i[a[0]+"With"]=r.fireWith}),o.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,o,i=0,a=U.call(arguments),r=a.length,s=1!==r||e&&J.isFunction(e.promise)?r:0,l=1===s?e:J.Deferred(),u=function(e,n,o){return function(i){n[e]=this,o[e]=arguments.length>1?U.call(arguments):i,o===t?l.notifyWith(n,o):--s||l.resolveWith(n,o)}};if(r>1)for(t=new Array(r),n=new Array(r),o=new Array(r);r>i;i++)a[i]&&J.isFunction(a[i].promise)?a[i].promise().done(u(i,o,a)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(o,a),l.promise()}});var mt;J.fn.ready=function(e){return J.ready.promise().done(e),this},J.extend({isReady:!1,readyWait:1,holdReady:function(e){e?J.readyWait++:J.ready(!0)},ready:function(e){(e===!0?--J.readyWait:J.isReady)||(J.isReady=!0,e!==!0&&--J.readyWait>0||(mt.resolveWith(Q,[J]),J.fn.triggerHandler&&(J(Q).triggerHandler("ready"),J(Q).off("ready"))))}}),J.ready.promise=function(t){return mt||(mt=J.Deferred(),"complete"===Q.readyState?setTimeout(J.ready):(Q.addEventListener("DOMContentLoaded",r,!1),e.addEventListener("load",r,!1))),mt.promise(t)},J.ready.promise();var gt=J.access=function(e,t,n,o,i,a,r){var s=0,l=e.length,u=null==n;if("object"===J.type(n)){i=!0;for(s in n)J.access(e,t,s,n[s],!0,a,r)}else if(void 0!==o&&(i=!0,J.isFunction(o)||(r=!0),u&&(r?(t.call(e,o),t=null):(u=t,t=function(e,t,n){return u.call(J(e),n)})),t))for(;l>s;s++)t(e[s],n,r?o:o.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):a};J.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=J.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=s.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(o){t[this.expando]=n,J.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var o,i=this.key(e),a=this.cache[i];if("string"==typeof t)a[t]=n;else if(J.isEmptyObject(a))J.extend(this.cache[i],t);else for(o in t)a[o]=t[o];return a},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var o;return void 0===t||t&&"string"==typeof t&&void 0===n?(o=this.get(e,t),void 0!==o?o:this.get(e,J.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,o,i,a=this.key(e),r=this.cache[a];if(void 0===t)this.cache[a]={};else{J.isArray(t)?o=t.concat(t.map(J.camelCase)):(i=J.camelCase(t),t in r?o=[t,i]:(o=i,o=o in r?[o]:o.match(ht)||[])),n=o.length;for(;n--;)delete r[o[n]]}},hasData:function(e){return!J.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var bt=new s,vt=new s,yt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,wt=/([A-Z])/g;J.extend({hasData:function(e){return vt.hasData(e)||bt.hasData(e)},data:function(e,t,n){return vt.access(e,t,n)},removeData:function(e,t){vt.remove(e,t)},_data:function(e,t,n){return bt.access(e,t,n)},_removeData:function(e,t){bt.remove(e,t)}}),J.fn.extend({data:function(e,t){var n,o,i,a=this[0],r=a&&a.attributes;if(void 0===e){if(this.length&&(i=vt.get(a),1===a.nodeType&&!bt.get(a,"hasDataAttrs"))){for(n=r.length;n--;)r[n]&&(o=r[n].name,0===o.indexOf("data-")&&(o=J.camelCase(o.slice(5)),l(a,o,i[o])));bt.set(a,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){vt.set(this,e)}):gt(this,function(t){var n,o=J.camelCase(e);if(a&&void 0===t){if(n=vt.get(a,e),void 0!==n)return n;if(n=vt.get(a,o),void 0!==n)return n;if(n=l(a,o,void 0),void 0!==n)return n}else this.each(function(){var n=vt.get(this,o);vt.set(this,o,t),-1!==e.indexOf("-")&&void 0!==n&&vt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){vt.remove(this,e)})}}),J.extend({queue:function(e,t,n){var o;return e?(t=(t||"fx")+"queue",o=bt.get(e,t),n&&(!o||J.isArray(n)?o=bt.access(e,t,J.makeArray(n)):o.push(n)),o||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=J.queue(e,t),o=n.length,i=n.shift(),a=J._queueHooks(e,t),r=function(){J.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),o--),i&&("fx"===t&&n.unshift("inprogress"),delete a.stop,i.call(e,r,a)),!o&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return bt.get(e,n)||bt.access(e,n,{empty:J.Callbacks("once memory").add(function(){bt.remove(e,[t+"queue",n])})})}}),J.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?J.queue(this[0],e):void 0===t?this:this.each(function(){var n=J.queue(this,e,t);J._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&J.dequeue(this,e)})},dequeue:function(e){return this.each(function(){J.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,o=1,i=J.Deferred(),a=this,r=this.length,s=function(){--o||i.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)n=bt.get(a[r],e+"queueHooks"),n&&n.empty&&(o++,n.empty.add(s));return s(),i.promise(t)}});var xt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Tt=["Top","Right","Bottom","Left"],$t=function(e,t){return e=t||e,"none"===J.css(e,"display")||!J.contains(e.ownerDocument,e)},kt=/^(?:checkbox|radio)$/i;!function(){var e=Q.createDocumentFragment(),t=e.appendChild(Q.createElement("div")),n=Q.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),G.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",G.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var jt="undefined";G.focusinBubbles="onfocusin"in e;var Ct=/^key/,Dt=/^(?:mouse|pointer|contextmenu)|click/,St=/^(?:focusinfocus|focusoutblur)$/,At=/^([^.]*)(?:\.(.+)|)$/;J.event={global:{},add:function(e,t,n,o,i){var a,r,s,l,u,c,d,p,h,f,m,g=bt.get(e);if(g)for(n.handler&&(a=n,n=a.handler,i=a.selector),n.guid||(n.guid=J.guid++),(l=g.events)||(l=g.events={}),(r=g.handle)||(r=g.handle=function(t){return typeof J!==jt&&J.event.triggered!==t.type?J.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ht)||[""],u=t.length;u--;)s=At.exec(t[u])||[],h=m=s[1],f=(s[2]||"").split(".").sort(),h&&(d=J.event.special[h]||{},h=(i?d.delegateType:d.bindType)||h,d=J.event.special[h]||{},c=J.extend({type:h,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&J.expr.match.needsContext.test(i),namespace:f.join(".")},a),(p=l[h])||(p=l[h]=[],p.delegateCount=0,d.setup&&d.setup.call(e,o,f,r)!==!1||e.addEventListener&&e.addEventListener(h,r,!1)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),J.event.global[h]=!0)},remove:function(e,t,n,o,i){var a,r,s,l,u,c,d,p,h,f,m,g=bt.hasData(e)&&bt.get(e);if(g&&(l=g.events)){for(t=(t||"").match(ht)||[""],u=t.length;u--;)if(s=At.exec(t[u])||[],h=m=s[1],f=(s[2]||"").split(".").sort(),h){for(d=J.event.special[h]||{},h=(o?d.delegateType:d.bindType)||h,p=l[h]||[],s=s[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=a=p.length;a--;)c=p[a],!i&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||o&&o!==c.selector&&("**"!==o||!c.selector)||(p.splice(a,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(e,c));r&&!p.length&&(d.teardown&&d.teardown.call(e,f,g.handle)!==!1||J.removeEvent(e,h,g.handle),delete l[h])}else for(h in l)J.event.remove(e,h+t[u],n,o,!0);J.isEmptyObject(l)&&(delete g.handle,bt.remove(e,"events"))}},trigger:function(t,n,o,i){var a,r,s,l,u,c,d,p=[o||Q],h=V.call(t,"type")?t.type:t,f=V.call(t,"namespace")?t.namespace.split("."):[];if(r=s=o=o||Q,3!==o.nodeType&&8!==o.nodeType&&!St.test(h+J.event.triggered)&&(h.indexOf(".")>=0&&(f=h.split("."),h=f.shift(),f.sort()),u=h.indexOf(":")<0&&"on"+h,t=t[J.expando]?t:new J.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=f.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=o),n=null==n?[t]:J.makeArray(n,[t]),d=J.event.special[h]||{},i||!d.trigger||d.trigger.apply(o,n)!==!1)){if(!i&&!d.noBubble&&!J.isWindow(o)){for(l=d.delegateType||h,St.test(l+h)||(r=r.parentNode);r;r=r.parentNode)p.push(r),s=r;s===(o.ownerDocument||Q)&&p.push(s.defaultView||s.parentWindow||e)}for(a=0;(r=p[a++])&&!t.isPropagationStopped();)t.type=a>1?l:d.bindType||h,c=(bt.get(r,"events")||{})[t.type]&&bt.get(r,"handle"),c&&c.apply(r,n),c=u&&r[u],c&&c.apply&&J.acceptData(r)&&(t.result=c.apply(r,n),t.result===!1&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||d._default&&d._default.apply(p.pop(),n)!==!1||!J.acceptData(o)||u&&J.isFunction(o[h])&&!J.isWindow(o)&&(s=o[u],s&&(o[u]=null),J.event.triggered=h,o[h](),J.event.triggered=void 0,s&&(o[u]=s)),t.result}},dispatch:function(e){e=J.event.fix(e);var t,n,o,i,a,r=[],s=U.call(arguments),l=(bt.get(this,"events")||{})[e.type]||[],u=J.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(r=J.event.handlers.call(this,e,l),t=0;(i=r[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(a=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,o=((J.event.special[a.origType]||{}).handle||a.handler).apply(i.elem,s),void 0!==o&&(e.result=o)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,o,i,a,r=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(o=[],n=0;s>n;n++)a=t[n],i=a.selector+" ",void 0===o[i]&&(o[i]=a.needsContext?J(i,this).index(l)>=0:J.find(i,this,null,[l]).length),o[i]&&o.push(a);o.length&&r.push({elem:l,handlers:o})}return s<t.length&&r.push({elem:this,handlers:t.slice(s)}),r},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,o,i,a=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Q,o=n.documentElement,i=n.body,e.pageX=t.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[J.expando])return e;var t,n,o,i=e.type,a=e,r=this.fixHooks[i];for(r||(this.fixHooks[i]=r=Dt.test(i)?this.mouseHooks:Ct.test(i)?this.keyHooks:{}),o=r.props?this.props.concat(r.props):this.props,e=new J.Event(a),t=o.length;t--;)n=o[t],e[n]=a[n];return e.target||(e.target=Q),3===e.target.nodeType&&(e.target=e.target.parentNode),r.filter?r.filter(e,a):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==d()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===d()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&J.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return J.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,o){var i=J.extend(new J.Event,n,{type:e,isSimulated:!0,originalEvent:{}});o?J.event.trigger(i,null,t):J.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},J.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},J.Event=function(e,t){return this instanceof J.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?u:c):this.type=e,t&&J.extend(this,t),this.timeStamp=e&&e.timeStamp||J.now(),void(this[J.expando]=!0)):new J.Event(e,t)},J.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=u,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},J.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){J.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,o=this,i=e.relatedTarget,a=e.handleObj;return(!i||i!==o&&!J.contains(o,i))&&(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}}),G.focusinBubbles||J.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){J.event.simulate(t,e.target,J.event.fix(e),!0)};J.event.special[t]={setup:function(){var o=this.ownerDocument||this,i=bt.access(o,t);i||o.addEventListener(e,n,!0),bt.access(o,t,(i||0)+1)},teardown:function(){var o=this.ownerDocument||this,i=bt.access(o,t)-1;i?bt.access(o,t,i):(o.removeEventListener(e,n,!0),bt.remove(o,t))}}}),J.fn.extend({on:function(e,t,n,o,i){var a,r;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(r in e)this.on(r,t,n,e[r],i);return this}if(null==n&&null==o?(o=t,n=t=void 0):null==o&&("string"==typeof t?(o=n,n=void 0):(o=n,n=t,t=void 0)),o===!1)o=c;else if(!o)return this;return 1===i&&(a=o,o=function(e){return J().off(e),a.apply(this,arguments)},o.guid=a.guid||(a.guid=J.guid++)),this.each(function(){J.event.add(this,e,o,n,t)})},one:function(e,t,n,o){return this.on(e,t,n,o,1)},off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,J(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){J.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){J.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?J.event.trigger(e,t,n,!0):void 0}});var Nt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,It=/<([\w:]+)/,_t=/<|&#?\w+;/,Mt=/<(?:script|style|link)/i,Et=/checked\s*(?:[^=]|=\s*.checked.)/i,Pt=/^$|\/(?:java|ecma)script/i,Lt=/^true\/(.*)/,Ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ht={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ht.optgroup=Ht.option,Ht.tbody=Ht.tfoot=Ht.colgroup=Ht.caption=Ht.thead,Ht.th=Ht.td,J.extend({clone:function(e,t,n){var o,i,a,r,s=e.cloneNode(!0),l=J.contains(e.ownerDocument,e);if(!(G.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||J.isXMLDoc(e)))for(r=b(s),a=b(e),o=0,i=a.length;i>o;o++)v(a[o],r[o]);if(t)if(n)for(a=a||b(e),r=r||b(s),o=0,i=a.length;i>o;o++)g(a[o],r[o]);else g(e,s);return r=b(s,"script"),r.length>0&&m(r,!l&&b(e,"script")),s},buildFragment:function(e,t,n,o){for(var i,a,r,s,l,u,c=t.createDocumentFragment(),d=[],p=0,h=e.length;h>p;p++)if(i=e[p],i||0===i)if("object"===J.type(i))J.merge(d,i.nodeType?[i]:i);else if(_t.test(i)){for(a=a||c.appendChild(t.createElement("div")),r=(It.exec(i)||["",""])[1].toLowerCase(),s=Ht[r]||Ht._default,a.innerHTML=s[1]+i.replace(Nt,"<$1></$2>")+s[2],u=s[0];u--;)a=a.lastChild;J.merge(d,a.childNodes),a=c.firstChild,a.textContent=""}else d.push(t.createTextNode(i));for(c.textContent="",p=0;i=d[p++];)if((!o||-1===J.inArray(i,o))&&(l=J.contains(i.ownerDocument,i),a=b(c.appendChild(i),"script"),l&&m(a),n))for(u=0;i=a[u++];)Pt.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,o,i,a=J.event.special,r=0;void 0!==(n=e[r]);r++){if(J.acceptData(n)&&(i=n[bt.expando],i&&(t=bt.cache[i]))){if(t.events)for(o in t.events)a[o]?J.event.remove(n,o):J.removeEvent(n,o,t.handle);bt.cache[i]&&delete bt.cache[i]}delete vt.cache[n[vt.expando]]}}}),J.fn.extend({text:function(e){return gt(this,function(e){return void 0===e?J.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,o=e?J.filter(e,this):this,i=0;null!=(n=o[i]);i++)t||1!==n.nodeType||J.cleanData(b(n)),n.parentNode&&(t&&J.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(J.cleanData(b(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return J.clone(this,e,t)})},html:function(e){return gt(this,function(e){var t=this[0]||{},n=0,o=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Mt.test(e)&&!Ht[(It.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Nt,"<$1></$2>");try{for(;o>n;n++)t=this[n]||{},1===t.nodeType&&(J.cleanData(b(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,J.cleanData(b(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=W.apply([],e);var n,o,i,a,r,s,l=0,u=this.length,c=this,d=u-1,p=e[0],m=J.isFunction(p);if(m||u>1&&"string"==typeof p&&!G.checkClone&&Et.test(p))return this.each(function(n){var o=c.eq(n);m&&(e[0]=p.call(this,n,o.html())),o.domManip(e,t)});if(u&&(n=J.buildFragment(e,this[0].ownerDocument,!1,this),o=n.firstChild,1===n.childNodes.length&&(n=o),o)){for(i=J.map(b(n,"script"),h),a=i.length;u>l;l++)r=n,l!==d&&(r=J.clone(r,!0,!0),a&&J.merge(i,b(r,"script"))),t.call(this[l],r,l);if(a)for(s=i[i.length-1].ownerDocument,J.map(i,f),l=0;a>l;l++)r=i[l],Pt.test(r.type||"")&&!bt.access(r,"globalEval")&&J.contains(s,r)&&(r.src?J._evalUrl&&J._evalUrl(r.src):J.globalEval(r.textContent.replace(Ot,"")))}return this}}),J.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){J.fn[e]=function(e){for(var n,o=[],i=J(e),a=i.length-1,r=0;a>=r;r++)n=r===a?this:this.clone(!0),J(i[r])[t](n),X.apply(o,n.get());return this.pushStack(o)}});var qt,Rt={},Bt=/^margin/,Ft=new RegExp("^("+xt+")(?!px)[a-z%]+$","i"),Ut=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){function t(){r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r.innerHTML="",i.appendChild(a);var t=e.getComputedStyle(r,null);n="1%"!==t.top,o="4px"===t.width,i.removeChild(a)}var n,o,i=Q.documentElement,a=Q.createElement("div"),r=Q.createElement("div");r.style&&(r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",G.clearCloneStyle="content-box"===r.style.backgroundClip,a.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",a.appendChild(r),e.getComputedStyle&&J.extend(G,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==o&&t(),o},reliableMarginRight:function(){var t,n=r.appendChild(Q.createElement("div"));return n.style.cssText=r.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",r.style.width="1px",i.appendChild(a),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(a),t}}))}(),J.swap=function(e,t,n,o){var i,a,r={};for(a in t)r[a]=e.style[a],e.style[a]=t[a];i=n.apply(e,o||[]);for(a in t)e.style[a]=r[a];return i};var Wt=/^(none|table(?!-c[ea]).+)/,Xt=new RegExp("^("+xt+")(.*)$","i"),zt=new RegExp("^([+-])=("+xt+")","i"),Yt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:"0",fontWeight:"400"},Vt=["Webkit","O","Moz","ms"];J.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,a,r,s=J.camelCase(t),l=e.style;return t=J.cssProps[s]||(J.cssProps[s]=$(l,s)),r=J.cssHooks[t]||J.cssHooks[s],void 0===n?r&&"get"in r&&void 0!==(i=r.get(e,!1,o))?i:l[t]:(a=typeof n,"string"===a&&(i=zt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(J.css(e,t)),a="number"),void(null!=n&&n===n&&("number"!==a||J.cssNumber[s]||(n+="px"),G.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),r&&"set"in r&&void 0===(n=r.set(e,n,o))||(l[t]=n))))}},css:function(e,t,n,o){var i,a,r,s=J.camelCase(t);return t=J.cssProps[s]||(J.cssProps[s]=$(e.style,s)),r=J.cssHooks[t]||J.cssHooks[s],r&&"get"in r&&(i=r.get(e,!0,n)),void 0===i&&(i=x(e,t,o)),"normal"===i&&t in Kt&&(i=Kt[t]),""===n||n?(a=parseFloat(i),n===!0||J.isNumeric(a)?a||0:i):i}}),J.each(["height","width"],function(e,t){J.cssHooks[t]={get:function(e,n,o){return n?Wt.test(J.css(e,"display"))&&0===e.offsetWidth?J.swap(e,Yt,function(){return C(e,t,o)}):C(e,t,o):void 0},set:function(e,n,o){var i=o&&Ut(e);return k(e,n,o?j(e,t,o,"border-box"===J.css(e,"boxSizing",!1,i),i):0)}}}),J.cssHooks.marginRight=T(G.reliableMarginRight,function(e,t){return t?J.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),J.each({margin:"",padding:"",border:"Width"},function(e,t){J.cssHooks[e+t]={expand:function(n){for(var o=0,i={},a="string"==typeof n?n.split(" "):[n];4>o;o++)i[e+Tt[o]+t]=a[o]||a[o-2]||a[0];return i}},Bt.test(e)||(J.cssHooks[e+t].set=k)}),J.fn.extend({css:function(e,t){return gt(this,function(e,t,n){var o,i,a={},r=0;if(J.isArray(t)){for(o=Ut(e),i=t.length;i>r;r++)a[t[r]]=J.css(e,t[r],!1,o);return a}return void 0!==n?J.style(e,t,n):J.css(e,t)},e,t,arguments.length>1)},show:function(){return D(this,!0)},hide:function(){return D(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){$t(this)?J(this).show():J(this).hide()})}}),J.Tween=S,S.prototype={constructor:S,init:function(e,t,n,o,i,a){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=a||(J.cssNumber[n]?"":"px")},cur:function(){var e=S.propHooks[this.prop];return e&&e.get?e.get(this):S.propHooks._default.get(this)},run:function(e){var t,n=S.propHooks[this.prop];return this.pos=t=this.options.duration?J.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):S.propHooks._default.set(this),this}},S.prototype.init.prototype=S.prototype,S.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=J.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){J.fx.step[e.prop]?J.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[J.cssProps[e.prop]]||J.cssHooks[e.prop])?J.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},S.propHooks.scrollTop=S.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},J.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},J.fx=S.prototype.init,J.fx.step={};var Gt,Qt,Zt=/^(?:toggle|show|hide)$/,Jt=new RegExp("^(?:([+-])=|)("+xt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[_],nn={"*":[function(e,t){var n=this.createTween(e,t),o=n.cur(),i=Jt.exec(t),a=i&&i[3]||(J.cssNumber[e]?"":"px"),r=(J.cssNumber[e]||"px"!==a&&+o)&&Jt.exec(J.css(n.elem,e)),s=1,l=20;if(r&&r[3]!==a){a=a||r[3],i=i||[],r=+o||1;do s=s||".5",r/=s,J.style(n.elem,e,r+a);while(s!==(s=n.cur()/o)&&1!==s&&--l)}return i&&(r=n.start=+r||+o||0,n.unit=a,n.end=i[1]?r+(i[1]+1)*i[2]:+i[2]),n}]};J.Animation=J.extend(E,{tweener:function(e,t){J.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,o=0,i=e.length;i>o;o++)n=e[o],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),J.speed=function(e,t,n){var o=e&&"object"==typeof e?J.extend({},e):{complete:n||!n&&t||J.isFunction(e)&&e,duration:e,easing:n&&t||t&&!J.isFunction(t)&&t};return o.duration=J.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in J.fx.speeds?J.fx.speeds[o.duration]:J.fx.speeds._default,(null==o.queue||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){J.isFunction(o.old)&&o.old.call(this),o.queue&&J.dequeue(this,o.queue)},o},J.fn.extend({fadeTo:function(e,t,n,o){return this.filter($t).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var i=J.isEmptyObject(e),a=J.speed(t,n,o),r=function(){var t=E(this,J.extend({},e),a);(i||bt.get(this,"finish"))&&t.stop(!0)};return r.finish=r,i||a.queue===!1?this.each(r):this.queue(a.queue,r)},stop:function(e,t,n){var o=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",a=J.timers,r=bt.get(this);if(i)r[i]&&r[i].stop&&o(r[i]);else for(i in r)r[i]&&r[i].stop&&en.test(i)&&o(r[i]);for(i=a.length;i--;)a[i].elem!==this||null!=e&&a[i].queue!==e||(a[i].anim.stop(n),t=!1,a.splice(i,1));(t||!n)&&J.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=bt.get(this),o=n[e+"queue"],i=n[e+"queueHooks"],a=J.timers,r=o?o.length:0;for(n.finish=!0,J.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=a.length;t--;)a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));
for(t=0;r>t;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete n.finish})}}),J.each(["toggle","show","hide"],function(e,t){var n=J.fn[t];J.fn[t]=function(e,o,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(N(t,!0),e,o,i)}}),J.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){J.fn[e]=function(e,n,o){return this.animate(t,e,n,o)}}),J.timers=[],J.fx.tick=function(){var e,t=0,n=J.timers;for(Gt=J.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||J.fx.stop(),Gt=void 0},J.fx.timer=function(e){J.timers.push(e),e()?J.fx.start():J.timers.pop()},J.fx.interval=13,J.fx.start=function(){Qt||(Qt=setInterval(J.fx.tick,J.fx.interval))},J.fx.stop=function(){clearInterval(Qt),Qt=null},J.fx.speeds={slow:600,fast:200,_default:400},J.fn.delay=function(e,t){return e=J.fx?J.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var o=setTimeout(t,e);n.stop=function(){clearTimeout(o)}})},function(){var e=Q.createElement("input"),t=Q.createElement("select"),n=t.appendChild(Q.createElement("option"));e.type="checkbox",G.checkOn=""!==e.value,G.optSelected=n.selected,t.disabled=!0,G.optDisabled=!n.disabled,e=Q.createElement("input"),e.value="t",e.type="radio",G.radioValue="t"===e.value}();var on,an,rn=J.expr.attrHandle;J.fn.extend({attr:function(e,t){return gt(this,J.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){J.removeAttr(this,e)})}}),J.extend({attr:function(e,t,n){var o,i,a=e.nodeType;return e&&3!==a&&8!==a&&2!==a?typeof e.getAttribute===jt?J.prop(e,t,n):(1===a&&J.isXMLDoc(e)||(t=t.toLowerCase(),o=J.attrHooks[t]||(J.expr.match.bool.test(t)?an:on)),void 0===n?o&&"get"in o&&null!==(i=o.get(e,t))?i:(i=J.find.attr(e,t),null==i?void 0:i):null!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void J.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,o,i=0,a=t&&t.match(ht);if(a&&1===e.nodeType)for(;n=a[i++];)o=J.propFix[n]||n,J.expr.match.bool.test(n)&&(e[o]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!G.radioValue&&"radio"===t&&J.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),an={set:function(e,t,n){return t===!1?J.removeAttr(e,n):e.setAttribute(n,n),n}},J.each(J.expr.match.bool.source.match(/\w+/g),function(e,t){var n=rn[t]||J.find.attr;rn[t]=function(e,t,o){var i,a;return o||(a=rn[t],rn[t]=i,i=null!=n(e,t,o)?t.toLowerCase():null,rn[t]=a),i}});var sn=/^(?:input|select|textarea|button)$/i;J.fn.extend({prop:function(e,t){return gt(this,J.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[J.propFix[e]||e]})}}),J.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var o,i,a,r=e.nodeType;return e&&3!==r&&8!==r&&2!==r?(a=1!==r||!J.isXMLDoc(e),a&&(t=J.propFix[t]||t,i=J.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:e[t]=n:i&&"get"in i&&null!==(o=i.get(e,t))?o:e[t]):void 0},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||sn.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),G.optSelected||(J.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),J.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){J.propFix[this.toLowerCase()]=this});var ln=/[\t\r\n\f]/g;J.fn.extend({addClass:function(e){var t,n,o,i,a,r,s="string"==typeof e&&e,l=0,u=this.length;if(J.isFunction(e))return this.each(function(t){J(this).addClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ht)||[];u>l;l++)if(n=this[l],o=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):" ")){for(a=0;i=t[a++];)o.indexOf(" "+i+" ")<0&&(o+=i+" ");r=J.trim(o),n.className!==r&&(n.className=r)}return this},removeClass:function(e){var t,n,o,i,a,r,s=0===arguments.length||"string"==typeof e&&e,l=0,u=this.length;if(J.isFunction(e))return this.each(function(t){J(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ht)||[];u>l;l++)if(n=this[l],o=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):"")){for(a=0;i=t[a++];)for(;o.indexOf(" "+i+" ")>=0;)o=o.replace(" "+i+" "," ");r=e?J.trim(o):"",n.className!==r&&(n.className=r)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(J.isFunction(e)?function(n){J(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,o=0,i=J(this),a=e.match(ht)||[];t=a[o++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===jt||"boolean"===n)&&(this.className&&bt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":bt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,o=this.length;o>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ln," ").indexOf(t)>=0)return!0;return!1}});var un=/\r/g;J.fn.extend({val:function(e){var t,n,o,i=this[0];return arguments.length?(o=J.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=o?e.call(this,n,J(this).val()):e,null==i?i="":"number"==typeof i?i+="":J.isArray(i)&&(i=J.map(i,function(e){return null==e?"":e+""})),t=J.valHooks[this.type]||J.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=J.valHooks[i.type]||J.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(un,""):null==n?"":n)):void 0}}),J.extend({valHooks:{option:{get:function(e){var t=J.find.attr(e,"value");return null!=t?t:J.trim(J.text(e))}},select:{get:function(e){for(var t,n,o=e.options,i=e.selectedIndex,a="select-one"===e.type||0>i,r=a?null:[],s=a?i+1:o.length,l=0>i?s:a?i:0;s>l;l++)if(n=o[l],!(!n.selected&&l!==i||(G.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&J.nodeName(n.parentNode,"optgroup"))){if(t=J(n).val(),a)return t;r.push(t)}return r},set:function(e,t){for(var n,o,i=e.options,a=J.makeArray(t),r=i.length;r--;)o=i[r],(o.selected=J.inArray(o.value,a)>=0)&&(n=!0);return n||(e.selectedIndex=-1),a}}}}),J.each(["radio","checkbox"],function(){J.valHooks[this]={set:function(e,t){return J.isArray(t)?e.checked=J.inArray(J(e).val(),t)>=0:void 0}},G.checkOn||(J.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){J.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),J.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var cn=J.now(),dn=/\?/;J.parseJSON=function(e){return JSON.parse(e+"")},J.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(o){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&J.error("Invalid XML: "+e),t};var pn,hn,fn=/#.*$/,mn=/([?&])_=[^&]*/,gn=/^(.*?):[ \t]*([^\r\n]*)$/gm,bn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,yn=/^\/\//,wn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,xn={},Tn={},$n="*/".concat("*");try{hn=location.href}catch(kn){hn=Q.createElement("a"),hn.href="",hn=hn.href}pn=wn.exec(hn.toLowerCase())||[],J.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:hn,type:"GET",isLocal:bn.test(pn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$n,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":J.parseJSON,"text xml":J.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?O(O(e,J.ajaxSettings),t):O(J.ajaxSettings,e)},ajaxPrefilter:P(xn),ajaxTransport:P(Tn),ajax:function(e,t){function n(e,t,n,r){var l,c,b,v,w,T=t;2!==y&&(y=2,s&&clearTimeout(s),o=void 0,a=r||"",x.readyState=e>0?4:0,l=e>=200&&300>e||304===e,n&&(v=H(d,x,n)),v=q(d,v,x,l),l?(d.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(J.lastModified[i]=w),w=x.getResponseHeader("etag"),w&&(J.etag[i]=w)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=v.state,c=v.data,b=v.error,l=!b)):(b=T,(e||!T)&&(T="error",0>e&&(e=0))),x.status=e,x.statusText=(t||T)+"",l?f.resolveWith(p,[c,T,x]):f.rejectWith(p,[x,T,b]),x.statusCode(g),g=void 0,u&&h.trigger(l?"ajaxSuccess":"ajaxError",[x,d,l?c:b]),m.fireWith(p,[x,T]),u&&(h.trigger("ajaxComplete",[x,d]),--J.active||J.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var o,i,a,r,s,l,u,c,d=J.ajaxSetup({},t),p=d.context||d,h=d.context&&(p.nodeType||p.jquery)?J(p):J.event,f=J.Deferred(),m=J.Callbacks("once memory"),g=d.statusCode||{},b={},v={},y=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===y){if(!r)for(r={};t=gn.exec(a);)r[t[1].toLowerCase()]=t[2];t=r[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return y||(e=v[n]=v[n]||e,b[e]=t),this},overrideMimeType:function(e){return y||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>y)for(t in e)g[t]=[g[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||w;return o&&o.abort(t),n(0,t),this}};if(f.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,d.url=((e||d.url||hn)+"").replace(fn,"").replace(yn,pn[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=J.trim(d.dataType||"*").toLowerCase().match(ht)||[""],null==d.crossDomain&&(l=wn.exec(d.url.toLowerCase()),d.crossDomain=!(!l||l[1]===pn[1]&&l[2]===pn[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(pn[3]||("http:"===pn[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=J.param(d.data,d.traditional)),L(xn,d,t,x),2===y)return x;u=d.global,u&&0===J.active++&&J.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!vn.test(d.type),i=d.url,d.hasContent||(d.data&&(i=d.url+=(dn.test(i)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=mn.test(i)?i.replace(mn,"$1_="+cn++):i+(dn.test(i)?"&":"?")+"_="+cn++)),d.ifModified&&(J.lastModified[i]&&x.setRequestHeader("If-Modified-Since",J.lastModified[i]),J.etag[i]&&x.setRequestHeader("If-None-Match",J.etag[i])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+$n+"; q=0.01":""):d.accepts["*"]);for(c in d.headers)x.setRequestHeader(c,d.headers[c]);if(d.beforeSend&&(d.beforeSend.call(p,x,d)===!1||2===y))return x.abort();w="abort";for(c in{success:1,error:1,complete:1})x[c](d[c]);if(o=L(Tn,d,t,x)){x.readyState=1,u&&h.trigger("ajaxSend",[x,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){x.abort("timeout")},d.timeout));try{y=1,o.send(b,n)}catch(T){if(!(2>y))throw T;n(-1,T)}}else n(-1,"No Transport");return x},getJSON:function(e,t,n){return J.get(e,t,n,"json")},getScript:function(e,t){return J.get(e,void 0,t,"script")}}),J.each(["get","post"],function(e,t){J[t]=function(e,n,o,i){return J.isFunction(n)&&(i=i||o,o=n,n=void 0),J.ajax({url:e,type:t,dataType:i,data:n,success:o})}}),J.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){J.fn[t]=function(e){return this.on(t,e)}}),J._evalUrl=function(e){return J.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},J.fn.extend({wrapAll:function(e){var t;return J.isFunction(e)?this.each(function(t){J(this).wrapAll(e.call(this,t))}):(this[0]&&(t=J(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(J.isFunction(e)?function(t){J(this).wrapInner(e.call(this,t))}:function(){var t=J(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=J.isFunction(e);return this.each(function(n){J(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){J.nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()}}),J.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},J.expr.filters.visible=function(e){return!J.expr.filters.hidden(e)};var jn=/%20/g,Cn=/\[\]$/,Dn=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,An=/^(?:input|select|textarea|keygen)/i;J.param=function(e,t){var n,o=[],i=function(e,t){t=J.isFunction(t)?t():null==t?"":t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=J.ajaxSettings&&J.ajaxSettings.traditional),J.isArray(e)||e.jquery&&!J.isPlainObject(e))J.each(e,function(){i(this.name,this.value)});else for(n in e)R(n,e[n],t,i);return o.join("&").replace(jn,"+")},J.fn.extend({serialize:function(){return J.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=J.prop(this,"elements");return e?J.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!J(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!kt.test(e))}).map(function(e,t){var n=J(this).val();return null==n?null:J.isArray(n)?J.map(n,function(e){return{name:t.name,value:e.replace(Dn,"\r\n")}}):{name:t.name,value:n.replace(Dn,"\r\n")}}).get()}}),J.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Nn=0,In={},_n={0:200,1223:204},Mn=J.ajaxSettings.xhr();e.ActiveXObject&&J(e).on("unload",function(){for(var e in In)In[e]()}),G.cors=!!Mn&&"withCredentials"in Mn,G.ajax=Mn=!!Mn,J.ajaxTransport(function(e){var t;return G.cors||Mn&&!e.crossDomain?{send:function(n,o){var i,a=e.xhr(),r=++Nn;if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)a[i]=e.xhrFields[i];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)a.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete In[r],t=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?o(a.status,a.statusText):o(_n[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:void 0,a.getAllResponseHeaders()))}},a.onload=t(),a.onerror=t("error"),t=In[r]=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(s){if(t)throw s}},abort:function(){t&&t()}}:void 0}),J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return J.globalEval(e),e}}}),J.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),J.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(o,i){t=J("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Q.head.appendChild(t[0])},abort:function(){n&&n()}}}});var En=[],Pn=/(=)\?(?=&|$)|\?\?/;J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=En.pop()||J.expando+"_"+cn++;return this[e]=!0,e}}),J.ajaxPrefilter("json jsonp",function(t,n,o){var i,a,r,s=t.jsonp!==!1&&(Pn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pn.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=J.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Pn,"$1"+i):t.jsonp!==!1&&(t.url+=(dn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return r||J.error(i+" was not called"),r[0]},t.dataTypes[0]="json",a=e[i],e[i]=function(){r=arguments},o.always(function(){e[i]=a,t[i]&&(t.jsonpCallback=n.jsonpCallback,En.push(i)),r&&J.isFunction(a)&&a(r[0]),r=a=void 0}),"script"):void 0}),J.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Q;var o=rt.exec(e),i=!n&&[];return o?[t.createElement(o[1])]:(o=J.buildFragment([e],t,i),i&&i.length&&J(i).remove(),J.merge([],o.childNodes))};var Ln=J.fn.load;J.fn.load=function(e,t,n){if("string"!=typeof e&&Ln)return Ln.apply(this,arguments);var o,i,a,r=this,s=e.indexOf(" ");return s>=0&&(o=J.trim(e.slice(s)),e=e.slice(0,s)),J.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),r.length>0&&J.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){a=arguments,r.html(o?J("<div>").append(J.parseHTML(e)).find(o):e)}).complete(n&&function(e,t){r.each(n,a||[e.responseText,t,e])}),this},J.expr.filters.animated=function(e){return J.grep(J.timers,function(t){return e===t.elem}).length};var On=e.document.documentElement;J.offset={setOffset:function(e,t,n){var o,i,a,r,s,l,u,c=J.css(e,"position"),d=J(e),p={};"static"===c&&(e.style.position="relative"),s=d.offset(),a=J.css(e,"top"),l=J.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(a+l).indexOf("auto")>-1,u?(o=d.position(),r=o.top,i=o.left):(r=parseFloat(a)||0,i=parseFloat(l)||0),J.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+r),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):d.css(p)}},J.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){J.offset.setOffset(this,e,t)});var t,n,o=this[0],i={top:0,left:0},a=o&&o.ownerDocument;return a?(t=a.documentElement,J.contains(t,o)?(typeof o.getBoundingClientRect!==jt&&(i=o.getBoundingClientRect()),n=B(a),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],o={top:0,left:0};return"fixed"===J.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),J.nodeName(e[0],"html")||(o=e.offset()),o.top+=J.css(e[0],"borderTopWidth",!0),o.left+=J.css(e[0],"borderLeftWidth",!0)),{top:t.top-o.top-J.css(n,"marginTop",!0),left:t.left-o.left-J.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||On;e&&!J.nodeName(e,"html")&&"static"===J.css(e,"position");)e=e.offsetParent;return e||On})}}),J.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var o="pageYOffset"===n;J.fn[t]=function(i){return gt(this,function(t,i,a){var r=B(t);return void 0===a?r?r[n]:t[i]:void(r?r.scrollTo(o?e.pageXOffset:a,o?a:e.pageYOffset):t[i]=a)},t,i,arguments.length,null)}}),J.each(["top","left"],function(e,t){J.cssHooks[t]=T(G.pixelPosition,function(e,n){return n?(n=x(e,t),Ft.test(n)?J(e).position()[t]+"px":n):void 0})}),J.each({Height:"height",Width:"width"},function(e,t){J.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){J.fn[o]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),r=n||(o===!0||i===!0?"margin":"border");return gt(this,function(t,n,o){var i;return J.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?J.css(t,n,r):J.style(t,n,o,r)},t,a?o:void 0,a,null)}})}),J.fn.size=function(){return this.length},J.fn.andSelf=J.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return J});var Hn=e.jQuery,qn=e.$;return J.noConflict=function(t){return e.$===J&&(e.$=qn),t&&e.jQuery===J&&(e.jQuery=Hn),J},typeof t===jt&&(e.jQuery=e.$=J),J}),!function(e){"use strict";function t(e,t){var n=(65535&e)+(65535&t),o=(e>>16)+(t>>16)+(n>>16);return o<<16|65535&n}function n(e,t){return e<<t|e>>>32-t}function o(e,o,i,a,r,s){return t(n(t(t(o,e),t(a,s)),r),i)}function i(e,t,n,i,a,r,s){return o(t&n|~t&i,e,t,a,r,s)}function a(e,t,n,i,a,r,s){return o(t&i|n&~i,e,t,a,r,s)}function r(e,t,n,i,a,r,s){return o(t^n^i,e,t,a,r,s)}function s(e,t,n,i,a,r,s){return o(n^(t|~i),e,t,a,r,s)}function l(e,n){e[n>>5]|=128<<n%32,e[(n+64>>>9<<4)+14]=n;var o,l,u,c,d,p=1732584193,h=-271733879,f=-1732584194,m=271733878;for(o=0;o<e.length;o+=16)l=p,u=h,c=f,d=m,p=i(p,h,f,m,e[o],7,-680876936),m=i(m,p,h,f,e[o+1],12,-389564586),f=i(f,m,p,h,e[o+2],17,606105819),h=i(h,f,m,p,e[o+3],22,-1044525330),p=i(p,h,f,m,e[o+4],7,-176418897),m=i(m,p,h,f,e[o+5],12,1200080426),f=i(f,m,p,h,e[o+6],17,-1473231341),h=i(h,f,m,p,e[o+7],22,-45705983),p=i(p,h,f,m,e[o+8],7,1770035416),m=i(m,p,h,f,e[o+9],12,-1958414417),f=i(f,m,p,h,e[o+10],17,-42063),h=i(h,f,m,p,e[o+11],22,-1990404162),p=i(p,h,f,m,e[o+12],7,1804603682),m=i(m,p,h,f,e[o+13],12,-40341101),f=i(f,m,p,h,e[o+14],17,-1502002290),h=i(h,f,m,p,e[o+15],22,1236535329),p=a(p,h,f,m,e[o+1],5,-165796510),m=a(m,p,h,f,e[o+6],9,-1069501632),f=a(f,m,p,h,e[o+11],14,643717713),h=a(h,f,m,p,e[o],20,-373897302),p=a(p,h,f,m,e[o+5],5,-701558691),m=a(m,p,h,f,e[o+10],9,38016083),f=a(f,m,p,h,e[o+15],14,-660478335),h=a(h,f,m,p,e[o+4],20,-405537848),p=a(p,h,f,m,e[o+9],5,568446438),m=a(m,p,h,f,e[o+14],9,-1019803690),f=a(f,m,p,h,e[o+3],14,-187363961),h=a(h,f,m,p,e[o+8],20,1163531501),p=a(p,h,f,m,e[o+13],5,-1444681467),m=a(m,p,h,f,e[o+2],9,-51403784),f=a(f,m,p,h,e[o+7],14,1735328473),h=a(h,f,m,p,e[o+12],20,-1926607734),p=r(p,h,f,m,e[o+5],4,-378558),m=r(m,p,h,f,e[o+8],11,-2022574463),f=r(f,m,p,h,e[o+11],16,1839030562),h=r(h,f,m,p,e[o+14],23,-35309556),p=r(p,h,f,m,e[o+1],4,-1530992060),m=r(m,p,h,f,e[o+4],11,1272893353),f=r(f,m,p,h,e[o+7],16,-155497632),h=r(h,f,m,p,e[o+10],23,-1094730640),p=r(p,h,f,m,e[o+13],4,681279174),m=r(m,p,h,f,e[o],11,-358537222),f=r(f,m,p,h,e[o+3],16,-722521979),h=r(h,f,m,p,e[o+6],23,76029189),p=r(p,h,f,m,e[o+9],4,-640364487),m=r(m,p,h,f,e[o+12],11,-421815835),f=r(f,m,p,h,e[o+15],16,530742520),h=r(h,f,m,p,e[o+2],23,-995338651),p=s(p,h,f,m,e[o],6,-198630844),m=s(m,p,h,f,e[o+7],10,1126891415),f=s(f,m,p,h,e[o+14],15,-1416354905),h=s(h,f,m,p,e[o+5],21,-57434055),p=s(p,h,f,m,e[o+12],6,1700485571),m=s(m,p,h,f,e[o+3],10,-1894986606),f=s(f,m,p,h,e[o+10],15,-1051523),h=s(h,f,m,p,e[o+1],21,-2054922799),p=s(p,h,f,m,e[o+8],6,1873313359),m=s(m,p,h,f,e[o+15],10,-30611744),f=s(f,m,p,h,e[o+6],15,-1560198380),h=s(h,f,m,p,e[o+13],21,1309151649),p=s(p,h,f,m,e[o+4],6,-145523070),m=s(m,p,h,f,e[o+11],10,-1120210379),f=s(f,m,p,h,e[o+2],15,718787259),h=s(h,f,m,p,e[o+9],21,-343485551),p=t(p,l),h=t(h,u),f=t(f,c),m=t(m,d);return[p,h,f,m]}function u(e){var t,n="";for(t=0;t<32*e.length;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function c(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function d(e){return u(l(c(e),8*e.length))}function p(e,t){var n,o,i=c(e),a=[],r=[];for(a[15]=r[15]=void 0,i.length>16&&(i=l(i,8*e.length)),n=0;16>n;n+=1)a[n]=909522486^i[n],r[n]=1549556828^i[n];return o=l(a.concat(c(t)),512+8*t.length),u(l(r.concat(o),640))}function h(e){var t,n,o="0123456789abcdef",i="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),i+=o.charAt(t>>>4&15)+o.charAt(15&t);return i}function f(e){return unescape(encodeURIComponent(e))}function m(e){return d(f(e))}function g(e){return h(m(e))}function b(e,t){return p(f(e),f(t))}function v(e,t){return h(b(e,t))}function y(e,t,n){return t?n?b(t,e):v(t,e):n?m(e):g(e)}"function"==typeof define&&define.amd?define(function(){return y}):e.md5=y}(this),function(e,t,n){function o(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function i(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return g[e.which]?g[e.which]:b[e.which]?b[e.which]:String.fromCharCode(e.which).toLowerCase()}function a(e){e=e||{};var t,n=!1;for(t in T)e[t]?n=!0:T[t]=0;n||(j=!1)}function r(e,t,n,o,i,a){var r,s,l=[],u=n.type;if(!w[e])return[];for("keyup"==u&&c(e)&&(t=[e]),r=0;r<w[e].length;++r)if(s=w[e][r],!(!o&&s.seq&&T[s.seq]!=s.level||u!=s.action||("keypress"!=u||n.metaKey||n.ctrlKey)&&t.sort().join(",")!==s.modifiers.sort().join(","))){var d=o&&s.seq==o&&s.level==a;(!o&&s.combo==i||d)&&w[e].splice(r,1),l.push(s)}return l}function s(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}function l(e,t,n,o){C.stopCallback(t,t.target||t.srcElement,n,o)||!1!==e(t,n)||(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation?t.stopPropagation():t.cancelBubble=!0)}function u(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=i(e);t&&("keyup"==e.type&&$===t?$=!1:C.handleKey(t,s(e),e))}function c(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function d(e,t,n,o){function r(t){return function(){j=t,++T[e],clearTimeout(m),m=setTimeout(a,1e3)}}function s(t){l(n,t,e),"keyup"!==o&&($=i(t)),setTimeout(a,10)}for(var u=T[e]=0;u<t.length;++u){var c=u+1===t.length?s:r(o||p(t[u+1]).action);h(t[u],c,o,e,u)}}function p(e,t){var n,o,i,a=[];for(n="+"===e?["+"]:e.split("+"),i=0;i<n.length;++i)o=n[i],y[o]&&(o=y[o]),t&&"keypress"!=t&&v[o]&&(o=v[o],a.push("shift")),c(o)&&a.push(o);if(n=o,i=t,!i){if(!f){f={};for(var r in g)r>95&&112>r||g.hasOwnProperty(r)&&(f[g[r]]=r)}i=f[n]?"keydown":"keypress"}return"keypress"==i&&a.length&&(i="keydown"),{key:o,modifiers:a,action:i}}function h(e,t,n,o,i){x[e+":"+n]=t,e=e.replace(/\s+/g," ");var a=e.split(" ");1<a.length?d(e,a,t,n):(n=p(e,n),w[n.key]=w[n.key]||[],r(n.key,n.modifiers,{type:n.action},o,e,i),w[n.key][o?"unshift":"push"]({callback:t,modifiers:n.modifiers,action:n.action,seq:o,level:i,combo:e}))}var f,m,g={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},b={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},v={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},y={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},w={},x={},T={},$=!1,k=!1,j=!1;for(n=1;20>n;++n)g[111+n]="f"+n;for(n=0;9>=n;++n)g[n+96]=n;o(t,"keypress",u),o(t,"keydown",u),o(t,"keyup",u);var C={bind:function(e,t,n){e=e instanceof Array?e:[e];for(var o=0;o<e.length;++o)h(e[o],t,n);return this},unbind:function(e,t){return C.bind(e,function(){},t)},trigger:function(e,t){return x[e+":"+t]&&x[e+":"+t]({},e),this},reset:function(){return w={},x={},this},stopCallback:function(e,t){return-1<(" "+t.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},handleKey:function(e,t,n){var o,i=r(e,t,n);t={};var s=0,u=!1;for(o=0;o<i.length;++o)i[o].seq&&(s=Math.max(s,i[o].level));for(o=0;o<i.length;++o)i[o].seq?i[o].level==s&&(u=!0,t[i[o].seq]=1,l(i[o].callback,n,i[o].combo,i[o].seq)):u||l(i[o].callback,n,i[o].combo);i="keypress"==n.type&&k,n.type!=j||c(e)||i||a(t),k=u&&"keydown"==n.type}};e.Mousetrap=C,"function"==typeof define&&define.amd&&define(C)}(window,document),Mousetrap=function(e){var t={},n=e.stopCallback;return e.stopCallback=function(e,o,i){return t[i]?!1:n(e,o,i)},e.bindGlobal=function(n,o,i){if(e.bind(n,o,i),n instanceof Array)for(o=0;o<n.length;o++)t[n[o]]=!0;else t[n]=!0},e}(Mousetrap),function(e){function t(e,t){return"function"==typeof e?e.call(t):e}function n(t,n){this.$element=e(t),this.options=n,this.enabled=!0,this.fixTitle()}n.prototype={show:function(){var n=this.getTitle();if(n&&this.enabled){var o=this.tip();o.find(".tipsy-inner")[this.options.html?"html":"text"](n),o[0].className="tipsy",o.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var i,a=e.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),r=o[0].offsetWidth,s=o[0].offsetHeight,l=t(this.options.gravity,this.$element[0]);switch(l.charAt(0)){case"n":i={top:a.top+a.height+this.options.offset,left:a.left+a.width/2-r/2};break;case"s":i={top:a.top-s-this.options.offset,left:a.left+a.width/2-r/2};break;case"e":i={top:a.top+a.height/2-s/2,left:a.left-r-this.options.offset};break;case"w":i={top:a.top+a.height/2-s/2,left:a.left+a.width+this.options.offset}}2==l.length&&(i.left="w"==l.charAt(1)?a.left+a.width/2-15:a.left+a.width/2-r+15),o.css(i).addClass("tipsy-"+l),o.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+l.charAt(0),this.options.className&&o.addClass(t(this.options.className,this.$element[0])),this.options.fade?o.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):o.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){e(this).remove()}):this.tip().remove()},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("original-title"))&&e.attr("original-title",e.attr("title")||"").removeAttr("title")},getTitle:function(){var e,t=this.$element,n=this.options;this.fixTitle();var e,n=this.options;return"string"==typeof n.title?e=t.attr("title"==n.title?"original-title":n.title):"function"==typeof n.title&&(e=n.title.call(t[0])),e=(""+e).replace(/(^\s*|\s*$)/,""),e||n.fallback},tip:function(){return this.$tip||(this.$tip=e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},e.fn.tipsy=function(t){function o(o){var i=e.data(o,"tipsy");return i||(i=new n(o,e.fn.tipsy.elementOptions(o,t)),e.data(o,"tipsy",i)),i}function i(){var e=o(this);e.hoverState="in",0==t.delayIn?e.show():(e.fixTitle(),setTimeout(function(){"in"==e.hoverState&&e.show()},t.delayIn))}function a(){var e=o(this);e.hoverState="out",0==t.delayOut?e.hide():setTimeout(function(){"out"==e.hoverState&&e.hide()},t.delayOut)}if(t===!0)return this.data("tipsy");if("string"==typeof t){var r=this.data("tipsy");return r&&r[t](),this}if(t=e.extend({},e.fn.tipsy.defaults,t),t.live||this.each(function(){o(this)}),"manual"!=t.trigger){var s=t.live?"live":"bind",l="hover"==t.trigger?"mouseenter":"focus",u="hover"==t.trigger?"mouseleave":"blur";this[s](l,i)[s](u,a)}return this},e.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover"},e.fn.tipsy.elementOptions=function(t,n){return e.metadata?e.extend({},n,e(t).metadata()):n},e.fn.tipsy.autoNS=function(){return e(this).offset().top>e(document).scrollTop()+e(window).height()/2?"s":"n"},e.fn.tipsy.autoWE=function(){return e(this).offset().left>e(document).scrollLeft()+e(window).width()/2?"e":"w"},e.fn.tipsy.autoBounds=function(t,n){return function(){var o={ns:n[0],ew:n.length>1?n[1]:!1},i=e(document).scrollTop()+t,a=e(document).scrollLeft()+t,r=e(this);return r.offset().top<i&&(o.ns="n"),r.offset().left<a&&(o.ew="w"),e(window).width()+e(document).scrollLeft()-r.offset().left<t&&(o.ew="e"),e(window).height()+e(document).scrollTop()-r.offset().top<t&&(o.ns="s"),o.ns+(o.ew?o.ew:"")}}}(jQuery);var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"
},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string,o=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,n){if(-1!=n.indexOf(e[t].subString))return e[t].identity}else if(o)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(-1!=t)return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init(),function(e){e.fn.retina=function(t){var n={"retina-background":!1,"retina-suffix":"@2x"};t&&e.extend(n,t);var o=function(e,t){var n=new Image;n.onload=function(){t(n)},n.src=e};window.devicePixelRatio>1&&this.each(function(){var t=e(this);if("img"==this.tagName.toLowerCase()&&t.attr("src")){var i=t.attr("src").replace(/\.(?!.*\.)/,n["retina-suffix"]+".");o(i,function(n){t.attr("src",n.src);var o=e("<div>").append(t.clone()).remove().html();/(width|height)=["']\d+["']/.test(o)||t.attr("width",n.width/2)})}if(n["retina-background"]){var a=t.css("background-image");if(/^url\(.*\)$/.test(a)){var i=a.substring(4,a.length-1).replace(/\.(?!.*\.)/,n["retina-suffix"]+".");o(i,function(e){t.css("background-image","url("+e.src+")"),"auto auto"==t.css("background-size")&&t.css("background-size",e.width/2+"px auto")})}}})}}(jQuery),function(e){var t=function(t){var n=this;this.el=e(t),this.pos={start:{x:0,y:0},end:{x:0,y:0}},this.startTime,t.on("touchstart",function(e){n.touchStart(e)}),t.on("touchmove",function(e){n.touchMove(e)}),t.on("touchend",function(){n.swipeEnd()}),t.on("mousedown",function(e){n.mouseDown(e)})};t.prototype={touchStart:function(e){var t=e.originalEvent.touches[0];this.swipeStart(e,t.pageX,t.pageY)},touchMove:function(e){var t=e.originalEvent.touches[0];this.swipeMove(e,t.pageX,t.pageY)},mouseDown:function(e){var t=this;this.swipeStart(e,e.pageX,e.pageY),this.el.on("mousemove",function(e){t.mouseMove(e)}),this.el.on("mouseup",function(){t.mouseUp()})},mouseMove:function(e){this.swipeMove(e,e.pageX,e.pageY)},mouseUp:function(e){this.swipeEnd(e),this.el.off("mousemove"),this.el.off("mouseup")},swipeStart:function(e,t,n){this.pos.start.x=t,this.pos.start.y=n,this.pos.end.x=t,this.pos.end.y=n,this.startTime=(new Date).getTime(),this.trigger("swipeStart",e)},swipeMove:function(e,t,n){this.pos.end.x=t,this.pos.end.y=n,this.trigger("swipeMove",e)},swipeEnd:function(e){this.trigger("swipeEnd",e)},trigger:function(t,n){var o=this,i=e.Event(t),a=o.pos.start.x-o.pos.end.x,r=o.pos.end.y-o.pos.start.y,s=Math.atan2(r,a),l="up",u=Math.round(Math.sqrt(Math.pow(a,2)+Math.pow(r,2))),c=Math.round(180*s/Math.PI),d=Math.round(u/((new Date).getTime()-o.startTime)*1e3);0>c&&(c=360-Math.abs(c)),45>=c&&c>=0||360>=c&&c>=315?l="left":c>=135&&225>=c?l="right":c>45&&135>c&&(l="down"),i.originalEvent=n,i.swipe={x:a,y:r,direction:l,distance:u,angle:c,speed:d},e(o.el).trigger(i)}},e.fn.swipe=function(){new t(this);return this}}(jQuery),album={json:null,getID:function(){var e;return e=photo.json?photo.json.album:album.json?album.json.id:$(".album:hover, .album.active").attr("data-id"),e||(e=$(".album:hover, .album.active").attr("data-id")),e||(e=$(".photo:hover, .photo.active").attr("data-album-id")),e?e:!1},load:function(e,t){var n,o,i,a;password.get(e,function(){t||(loadingBar.show(),lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomOut"),lychee.animate(".divider","fadeOut")),n=(new Date).getTime(),o="getAlbum&albumID="+e+"&password="+password.value,lychee.api(o,function(o){return"Warning: Album private!"===o?(void 0!=document.location.hash.replace("#","").split("/")[1]?lychee.setMode("view"):(lychee.content.show(),lychee.goto("")),!1):"Warning: Wrong password!"===o?(album.load(e,t),!1):(album.json=o,i=(new Date).getTime()-n,a=i>300?0:t?0:300-i,visible.albums()||visible.photo()||visible.album()||(a=0),void setTimeout(function(){view.album.init(),t||(lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomIn"),view.header.mode("album"))},a))})})},parse:function(){album.json.title||(album.json.title="Untitled")},add:function(){var e,t,n,o=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};n=[["Create Album",function(){e=$(".message input.text").val(),0===e.length&&(e="Untitled"),modal.close(),t="addAlbum&title="+escape(encodeURI(e)),lychee.api(t,function(e){e===!0&&(e=1),e!==!1&&o(e)?(albums.refresh(),lychee.goto(e)):lychee.error(null,t,e)})}],["Cancel",function(){}]],modal.show("New Album","Enter a title for this album: <input class='text' type='text' maxlength='30' placeholder='Title' value='Untitled'>",n)},"delete":function(e){var t,n,o;return e?(e instanceof Array==!1&&(e=[e]),n=[["",function(){t="deleteAlbum&albumIDs="+e,lychee.api(t,function(n){visible.albums()?e.forEach(function(e){albums.json.num--,view.albums.content.delete(e),delete albums.json.content[e]}):(albums.refresh(),lychee.goto("")),n!==!0&&lychee.error(null,t,n)})}],["",function(){}]],void("0"===e.toString()?(n[0][0]="Clear Unsorted",n[1][0]="Keep Unsorted",modal.show("Clear Unsorted","Are you sure you want to delete all photos from 'Unsorted'?<br>This action can't be undone!",n)):1===e.length?(n[0][0]="Delete Album and Photos",n[1][0]="Keep Album",album.json?o=album.json.title:albums.json&&(o=albums.json.content[e].title),modal.show("Delete Album","Are you sure you want to delete the album '"+o+"' and all of the photos it contains? This action can't be undone!",n)):(n[0][0]="Delete Albums and Photos",n[1][0]="Keep Albums",modal.show("Delete Albums","Are you sure you want to delete all "+e.length+" selected albums and all of the photos they contain? This action can't be undone!",n)))):!1},setTitle:function(e){var t,n,o,i="";return e?(e instanceof Array==!1&&(e=[e]),1===e.length&&(album.json?i=album.json.title:albums.json&&(i=albums.json.content[e].title),i||(i=""),i=i.replace("'","&apos;")),o=[["Set Title",function(){if(t=$(".message input.text").val(),t=lychee.removeHTML(t),t=""===t?"Untitled":t,visible.album()){if(album.json.title=t,view.album.title(),albums.json){var o=e[0];albums.json.content[o].title=t}}else visible.albums()&&e.forEach(function(e){albums.json.content[e].title=t,view.albums.content.title(e)});n="setAlbumTitle&albumIDs="+e+"&title="+escape(encodeURI(t)),lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})}],["Cancel",function(){}]],void(1===e.length?modal.show("Set Title","Enter a new title for this album: <input class='text' type='text' maxlength='30' placeholder='Title' value='"+i+"'>",o):modal.show("Set Titles","Enter a title for all "+e.length+" selected album: <input class='text' type='text' maxlength='30' placeholder='Title' value='"+i+"'>",o))):!1},setDescription:function(e){var t,n,o,i=album.json.description.replace("'","&apos;");o=[["Set Description",function(){t=$(".message input.text").val(),t=lychee.removeHTML(t),visible.album()&&(album.json.description=t,view.album.description()),n="setAlbumDescription&albumID="+e+"&description="+escape(encodeURI(t)),lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})}],["Cancel",function(){}]],modal.show("Set Description","Please enter a description for this album: <input class='text' type='text' maxlength='800' placeholder='Description' value='"+i+"'>",o)},setPublic:function(e,t){var n,o="",i=!1,a=!1;return albums.refresh(),visible.message()||0!=album.json.public?(visible.message()&&("password"===$(".message .choice input[name='password']:checked").val()?(o=md5($(".message input.text").val()),album.json.password=1):(o="",album.json.password=0),"listed"===$(".message .choice input[name='listed']:checked").val()&&(i=!0),"downloadable"===$(".message .choice input[name='downloadable']:checked").val()&&(a=!0)),n="setAlbumPublic&albumID="+e+"&password="+o+"&visible="+i+"&downloadable="+a,visible.album()&&(album.json.public=0==album.json.public?1:0,album.json.password=0==album.json.public?0:album.json.password,view.album.public(),view.album.password(),1==album.json.public&&contextMenu.shareAlbum(e,t)),void lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})):(modal.show("Share Album","This album will be shared with the following properties:</p><form><div class='choice'><input type='checkbox' name='listed' value='listed' checked><h2>Visible</h2><p>Listed to visitors of your Lychee.</p></div><div class='choice'><input type='checkbox' name='downloadable' value='downloadable'><h2>Downloadable</h2><p>Visitors of your Lychee can download this album.</p></div><div class='choice'><input type='checkbox' name='password' value='password'><h2>Password protected</h2><p>Only accessible with a valid password.<input class='text' type='password' placeholder='password' value='' style='display: none;'></p></div></form><p style='display: none;'>",[["Share Album",function(){album.setPublic(album.getID(),t)}],["Cancel",function(){}]],-170),$(".message .choice input[name='password']").on("change",function(){$(this).prop("checked")===!0?$(".message .choice input.text").show():$(".message .choice input.text").hide()}),!0)},share:function(e){var t="",n=location.href;switch(e){case 0:t="https://twitter.com/share?url="+encodeURI(n);break;case 1:t="http://www.facebook.com/sharer.php?u="+encodeURI(n)+"&t="+encodeURI(album.json.title);break;case 2:t="mailto:?subject="+encodeURI(album.json.title)+"&body="+encodeURI(n);break;default:t=""}t.length>5&&(location.href=t)},getArchive:function(e){var t,n="php/api.php?function=getAlbumArchive&albumID="+e;t=location.href.indexOf("index.html")>0?location.href.replace(location.hash,"").replace("index.html",n):location.href.replace(location.hash,"")+n,lychee.publicMode&&(t+="&password="+password.value),location.href=t}},albums={json:null,load:function(){var e,t,n;lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomOut"),lychee.animate(".divider","fadeOut"),e=(new Date).getTime(),null===albums.json?lychee.api("getAlbums",function(o){o.unsortedAlbum={id:0,title:"Unsorted",sysdate:o.unsortedNum+" photos",unsorted:1,thumb0:o.unsortedThumb0,thumb1:o.unsortedThumb1,thumb2:o.unsortedThumb2},o.starredAlbum={id:"f",title:"Starred",sysdate:o.starredNum+" photos",star:1,thumb0:o.starredThumb0,thumb1:o.starredThumb1,thumb2:o.starredThumb2},o.publicAlbum={id:"s",title:"Public",sysdate:o.publicNum+" photos","public":1,thumb0:o.publicThumb0,thumb1:o.publicThumb1,thumb2:o.publicThumb2},o.recentAlbum={id:"r",title:"Recent",sysdate:o.recentNum+" photos",recent:1,thumb0:o.recentThumb0,thumb1:o.recentThumb1,thumb2:o.recentThumb2},albums.json=o,t=(new Date).getTime()-e,n=t>300?0:300-t,visible.albums()||visible.photo()||visible.album()||(n=0),visible.album()&&""===lychee.content.html()&&(n=0),setTimeout(function(){view.header.mode("albums"),view.albums.init(),lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomIn")},n)}):setTimeout(function(){view.header.mode("albums"),view.albums.init(),lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomIn")},300)},parse:function(e){e.password&&lychee.publicMode?(e.thumb0="assets/img/password.svg",e.thumb1="assets/img/password.svg",e.thumb2="assets/img/password.svg"):(e.thumb0||(e.thumb0="assets/img/no_images.svg"),e.thumb1||(e.thumb1="assets/img/no_images.svg"),e.thumb2||(e.thumb2="assets/img/no_images.svg"))},refresh:function(){albums.json=null}},build={divider:function(e){return"<div class='divider fadeIn'><h1>"+e+"</h1></div>"},editIcon:function(e){return"<div id='"+e+"' class='edit'><a class='icon-pencil'></a></div>"},multiselect:function(e,t){return"<div id='multiselect' style='top: "+e+"px; left: "+t+"px;'></div>"},album:function(e){if(!e)return"";var t="",n="",o=e.title,i="";return null!==o&&o.length>18&&(o=e.title.substr(0,18)+"...",n=e.title),"svg"===e.thumb0.split(".").pop()&&(i="nonretina"),t+="<div  class='album' data-id='"+e.id+"' data-password='"+e.password+"'>",t+="<img src='"+e.thumb2+"' width='200' height='200' alt='thumb' data-type='nonretina'>",t+="<img src='"+e.thumb1+"' width='200' height='200' alt='thumb' data-type='nonretina'>",t+="<img src='"+e.thumb0+"' width='200' height='200' alt='thumb' data-type='"+i+"'>",t+="<div class='overlay'>",t+=e.password&&!lychee.publicMode?"<h1><span class='icon-lock'></span> "+o+"</h1>":"<h1 title='"+n+"'>"+o+"</h1>",t+="<a>"+e.sysdate+"</a>",t+="</div>",lychee.publicMode||(1==e.star&&(t+="<a class='badge red icon-star'></a>"),1==e.public&&(t+="<a class='badge red icon-share'></a>"),1==e.unsorted&&(t+="<a class='badge red icon-reorder'></a>"),1==e.recent&&(t+="<a class='badge red icon-time'></a>")),t+="</div>"},photo:function(e){if(!e)return"";var t="",n="",o=e.title;return null!==o&&o.length>18&&(o=e.title.substr(0,18)+"...",n=e.title),t+="<div class='photo' data-album-id='"+e.album+"' data-id='"+e.id+"'>",t+="<img src='"+e.thumbUrl+"' width='200' height='200' alt='thumb'>",t+="<div class='overlay'>",t+="<h1 title='"+n+"'>"+o+"</h1>",t+=1==e.cameraDate?"<a><span class='icon-camera' title='Photo Date'></span>"+e.sysdate+"</a>":"<a>"+e.sysdate+"</a>",t+="</div>",1==e.star&&(t+="<a class='badge red icon-star'></a>"),lychee.publicMode||1!=e.public||1==album.json.public||(t+="<a class='badge red icon-share'></a>"),t+="</div>"},imageview:function(e,t,n){if(!e)return"";var o="";return o+="<div class='arrow_wrapper previous'><a id='previous' class='icon-caret-left'></a></div>",o+="<div class='arrow_wrapper next'><a id='next' class='icon-caret-right'></a></div>",o+=t?n?"<div id='image' class='small' style='background-image: url("+e.url+"); width: "+e.width+"px; height: "+e.height+"px; margin-top: -"+parseInt(e.height/2-20)+"px; margin-left: -"+e.width/2+"px;'></div>":"<div id='image' class='small' style='background-image: url("+e.url+"); width: "+e.width+"px; height: "+e.height+"px; margin-top: -"+parseInt(e.height/2)+"px; margin-left: -"+e.width/2+"px;'></div>":n?"<div id='image' style='background-image: url("+e.url+")'></div>":"<div id='image' style='background-image: url("+e.url+");' class='full'></div>"},no_content:function(e){var t="";return t+="<div class='no_content fadeIn'>",t+="<a class='icon icon-"+e+"'></a>","search"===e?t+="<p>No results</p>":"share"===e?t+="<p>No public albums</p>":"cog"===e&&(t+="<p>No configuration</p>"),t+="</div>"},modal:function(e,t,n,o,i){var a="",r="";return o&&(r="style='margin-top: "+o+"px;'"),a+="<div class='message_overlay fadeIn'>",a+="<div class='message center'"+r+">",a+="<h1>"+e+"</h1>",i!==!1&&(a+="<a class='close icon-remove-sign'></a>"),a+="<p>"+t+"</p>",$.each(n,function(e){""!==this[0]&&(a+=0===e?"<a class='button active'>"+this[0]+"</a>":"<a class='button'>"+this[0]+"</a>")}),a+="</div>",a+="</div>"},signInModal:function(){var e="";return e+="<div class='message_overlay'>",e+="<div class='message center'>",e+="<h1><a class='icon-lock'></a> Sign In</h1>",e+="<a class='close icon-remove-sign'></a>",e+="<div class='sign_in'>",e+="<input id='username' type='text' value='' placeholder='username' autocapitalize='off' autocorrect='off'>",e+="<input id='password' type='password' value='' placeholder='password'>",e+="</div>",e+="<div id='version'>Version "+lychee.version+"<span> &#8211; <a target='_blank' href='"+lychee.updateURL+"'>Update available!</a><span></div>",e+="<a onclick='lychee.login()' class='button active'>Sign in</a>",e+="</div>",e+="</div>"},uploadModal:function(e,t){var n="";n+="<div class='upload_overlay fadeIn'>",n+="<div class='upload_message center'>",n+="<h1>"+e+"</h1>",n+="<a class='close icon-remove-sign'></a>",n+="<div class='rows'>";for(var o=0;o<t.length;o++)t[o].name.length>40&&(t[o].name=t[o].name.substr(0,17)+"..."+t[o].name.substr(t[o].name.length-20,20)),n+="<div class='row'>",n+="<a class='name'>"+lychee.escapeHTML(t[o].name)+"</a>",n+=t[o].supported===!0?"<a class='status'></a>":"<a class='status error'>Not supported</a>",n+="<p class='notice'></p>",n+="</div>";return n+="</div>",n+="</div>",n+="</div>"},contextMenu:function(e){var t="";return t+="<div class='contextmenu_bg'></div>",t+="<div class='contextmenu'>",t+="<table>",t+="<tbody>",$.each(e,function(n){t+="separator"===e[n][0]&&-1===e[n][1]?"<tr class='separator'></tr>":-1===e[n][1]?"<tr class='no_hover'><td>"+e[n][0]+"</td></tr>":void 0!=e[n][2]?"<tr><td onclick='"+e[n][2]+"; window.contextMenu.close();'>"+e[n][0]+"</td></tr>":"<tr><td onclick='window.contextMenu.fns["+e[n][1]+"](); window.contextMenu.close();'>"+e[n][0]+"</td></tr>"}),t+="</tbody>",t+="</table>",t+="</div>"},tags:function(e,t){var n="",o=t===!0||lychee.publicMode?"":" "+build.editIcon("edit_tags");return""!==e?(e=e.split(","),e.forEach(function(e,t){n+="<a class='tag'>"+e+"<span class='icon-remove' data-index='"+t+"'></span></a>"}),n+=o):n="<div class='empty'>No Tags"+o+"</div>",n},infoboxPhoto:function(e,t){if(!e)return"";var n,o,i,a,r="",s="";switch(r+="<div class='header'><h1>About</h1><a class='icon-remove-sign'></a></div>",r+="<div class='wrapper'>",e.public){case"0":n="No";break;case"1":n="Yes";break;case"2":n="Yes (Album)";break;default:n="-"}return o=t===!0||lychee.publicMode?"":" "+build.editIcon("edit_title"),i=t===!0||lychee.publicMode?"":" "+build.editIcon("edit_description"),a=[["","Basics"],["Title",e.title+o],["Uploaded",e.sysdate],["Description",e.description+i],["","Image"],["Size",e.size],["Format",e.type],["Resolution",e.width+" x "+e.height],["Tags",build.tags(e.tags,t)]],s=e.takestamp+e.make+e.model+e.shutter+e.aperture+e.focal+e.iso,"0"!=s&&"null"!==s&&(a=a.concat([["","Camera"],["Captured",e.takedate],["Make",e.make],["Type/Model",e.model],["Shutter Speed",e.shutter],["Aperture",e.aperture],["Focal Length",e.focal],["ISO",e.iso]])),a=a.concat([["","Share"],["Public",n]]),$.each(a,function(e){switch((""===a[e][1]||void 0===a[e][1]||null===a[e][1])&&(a[e][1]="-"),a[e][0]){case"":r+="</table>",r+="<div class='separator'><h1>"+a[e][1]+"</h1></div>",r+="<table>";break;case"Tags":t===!0||lychee.publicMode||(r+="</table>",r+="<div class='separator'><h1>"+a[e][0]+"</h1></div>",r+="<div id='tags'>"+a[e][1]+"</div>");break;default:r+="<tr>",r+="<td>"+a[e][0]+"</td>",r+="<td class='attr_"+a[e][0].toLowerCase()+"'>"+a[e][1]+"</td>",r+="</tr>"}}),r+="</table>",r+="<div class='bumper'></div>",r+="</div>"},infoboxAlbum:function(e,t){if(!e)return"";var n,o,i,a="",r="-",s="-",l="-";switch(a+="<div class='header'><h1>About</h1><a class='icon-remove-sign'></a></div>",a+="<div class='wrapper'>",e.public){case"0":r="No";break;case"1":r="Yes"}switch(e.password){case!1:s="No";break;case!0:s="Yes"}switch(e.downloadable){case"0":l="No";break;case"1":l="Yes"}return n=t===!0||lychee.publicMode?"":" "+build.editIcon("edit_title_album"),o=t===!0||lychee.publicMode?"":" "+build.editIcon("edit_description_album"),i=[["","Basics"],["Title",e.title+n],["Description",e.description+o],["","Album"],["Created",e.sysdate],["Images",e.num],["","Share"],["Public",r],["Downloadable",l],["Password",s]],$.each(i,function(e){(""===i[e][1]||void 0===i[e][1]||null===i[e][1])&&(i[e][1]="-"),""===i[e][0]?(a+="</table>",a+="<div class='separator'><h1>"+i[e][1]+"</h1></div>",a+="<table id='infos'>"):(a+="<tr>",a+="<td>"+i[e][0]+"</td>",a+="<td class='attr_"+i[e][0].toLowerCase()+"'>"+i[e][1]+"</td>",a+="</tr>")}),a+="</table>",a+="<div class='bumper'></div>",a+="</div>"}},contextMenu={fns:null,show:function(e,t,n,o){contextMenu.close(),$("body").css("overflow","hidden").append(build.contextMenu(e)),t+$(".contextmenu").outerWidth(!0)>$("html").width()&&(o="left"),n+$(".contextmenu").outerHeight(!0)>$("html").height()&&(n-=n+$(".contextmenu").outerHeight(!0)-$("html").height()),t>$(document).width()&&(t=$(document).width()),0>t&&(t=0),n>$(document).height()&&(n=$(document).height()),0>n&&(n=0),"left"===o&&(t-=$(".contextmenu").outerWidth(!0)),(null===t||void 0===t||isNaN(t)||null===n||void 0===n||isNaN(n))&&(t="10px",n="10px"),$(".contextmenu").css({top:n,left:t,opacity:.98})},add:function(e){var t,n=e.pageX,o=e.pageY-$(document).scrollTop();upload.notify(),contextMenu.fns=[function(){$("#upload_files").click()},function(){upload.start.url()},function(){upload.start.dropbox()},function(){upload.start.server()},function(){album.add()}],t=[["<a class='icon-picture'></a> Upload Photo",0],["separator",-1],["<a class='icon-link'></a> Import from Link",1],["<a class='icon-folder-open'></a> Import from Dropbox",2],["<a class='icon-hdd'></a> Import from Server",3],["separator",-1],["<a class='icon-folder-close'></a> New Album",4]],contextMenu.show(t,n,o,"left")},settings:function(e){var t,n=e.pageX,o=e.pageY-$(document).scrollTop();contextMenu.fns=[function(){settings.setLogin()},function(){settings.setSorting()},function(){settings.setDropboxKey()},function(){window.open(lychee.website)},function(){window.open("plugins/check/")},function(){window.open("plugins/displaylog/")},function(){lychee.logout()}],t=[["<a class='icon-user'></a> Change Login",0],["<a class='icon-sort'></a> Change Sorting",1],["<a class='icon-folder-open'></a> Set Dropbox",2],["separator",-1],["<a class='icon-info-sign'></a> About Lychee",3],["<a class='icon-dashboard'></a> Diagnostics",4],["<a class='icon-list'></a> Show Log",5],["separator",-1],["<a class='icon-signout'></a> Sign Out",6]],contextMenu.show(t,n,o,"right")},album:function(e,t){var n,o=t.pageX,i=t.pageY-$(document).scrollTop();return"0"===e||"f"===e||"s"===e||"r"===e?!1:(contextMenu.fns=[function(){album.setTitle([e])},function(){album.delete([e])}],n=[["<a class='icon-edit'></a> Rename",0],["<a class='icon-trash'></a> Delete",1]],contextMenu.show(n,o,i,"right"),void $(".album[data-id='"+e+"']").addClass("active"))},albumMulti:function(e,t){var n,o=t.pageX,i=t.pageY-$(document).scrollTop();multiselect.stopResize(),contextMenu.fns=[function(){album.setTitle(e)},function(){album.delete(e)}],n=[["<a class='icon-edit'></a> Rename All",0],["<a class='icon-trash'></a> Delete All",1]],contextMenu.show(n,o,i,"right")},photo:function(e,t){var n,o=t.pageX,i=t.pageY-$(document).scrollTop();contextMenu.fns=[function(){photo.setStar([e])},function(){photo.editTags([e])},function(){photo.setTitle([e])},function(){photo.duplicate([e])},function(){contextMenu.move([e],t,"right")},function(){photo.delete([e])}],n=[["<a class='icon-star'></a> Star",0],["<a class='icon-tags'></a> Tags",1],["separator",-1],["<a class='icon-edit'></a> Rename",2],["<a class='icon-copy'></a> Duplicate",3],["<a class='icon-folder-open'></a> Move",4],["<a class='icon-trash'></a> Delete",5]],contextMenu.show(n,o,i,"right"),$(".photo[data-id='"+e+"']").addClass("active")},photoMulti:function(e,t){var n,o=t.pageX,i=t.pageY-$(document).scrollTop();multiselect.stopResize(),contextMenu.fns=[function(){photo.setStar(e)},function(){photo.editTags(e)},function(){photo.setTitle(e)},function(){photo.duplicate(e)},function(){contextMenu.move(e,t,"right")},function(){photo.delete(e)}],n=[["<a class='icon-star'></a> Star All",0],["<a class='icon-tags'></a> Tag All",1],["separator",-1],["<a class='icon-edit'></a> Rename All",2],["<a class='icon-copy'></a> Duplicate All",3],["<a class='icon-folder-open'></a> Move All",4],["<a class='icon-trash'></a> Delete All",5]],contextMenu.show(n,o,i,"right")},photoMore:function(e,t){var n,o=t.pageX,i=t.pageY-$(document).scrollTop();contextMenu.fns=[function(){window.open(photo.getDirectLink())},function(){photo.getArchive(e)}],n=[["<a class='icon-resize-full'></a> Full Photo",0]],(album.json&&album.json.downloadable&&"1"===album.json.downloadable&&lychee.publicMode||!lychee.publicMode)&&n.push(["<a class='icon-circle-arrow-down'></a> Download",1]),contextMenu.show(n,o,i,"right")},move:function(e,t){var n=t.pageX,o=t.pageY-$(document).scrollTop(),i=[];contextMenu.close(!0),"0"!==album.getID()&&(i=[["Unsorted",0,"photo.setAlbum(["+e+"], 0)"],["separator",-1]]),lychee.api("getAlbums",function(t){0===t.num?i=[["New Album",0,"album.add()"]]:$.each(t.content,function(){this.id!=album.getID()&&i.push([this.title,0,"photo.setAlbum(["+e+"], "+this.id+")"])}),visible.photo()?contextMenu.show(i,n,o,"left"):contextMenu.show(i,n,o,"right")})},sharePhoto:function(e,t){var n,o=t.pageX,i=t.pageY,a="";i-=$(document).scrollTop(),contextMenu.fns=[function(){photo.setPublic(e)},function(){photo.share(e,0)},function(){photo.share(e,1)},function(){photo.share(e,2)},function(){photo.share(e,3)},function(){window.open(photo.getDirectLink())}],a=photo.getViewLink(e),"2"===photo.json.public&&(a=location.href),n=[["<input readonly id='link' value='"+a+"'>",-1],["separator",-1],["<a class='icon-eye-close'></a> Make Private",0],["separator",-1],["<a class='icon-twitter'></a> Twitter",1],["<a class='icon-facebook'></a> Facebook",2],["<a class='icon-envelope'></a> Mail",3],["<a class='icon-hdd'></a> Dropbox",4],["<a class='icon-link'></a> Direct Link",5]],contextMenu.show(n,o,i,"left"),$(".contextmenu input").focus().select()},shareAlbum:function(e,t){var n,o=t.pageX,i=t.pageY;i-=$(document).scrollTop(),contextMenu.fns=[function(){album.setPublic(e)},function(){album.share(0)},function(){album.share(1)},function(){album.share(2)},function(){password.remove(e)}],n=[["<input readonly id='link' value='"+location.href+"'>",-1],["separator",-1],["<a class='icon-eye-close'></a> Make Private",0],["separator",-1],["<a class='icon-twitter'></a> Twitter",1],["<a class='icon-facebook'></a> Facebook",2],["<a class='icon-envelope'></a> Mail",3]],contextMenu.show(n,o,i,"left"),$(".contextmenu input").focus().select()},close:function(e){return visible.contextMenu()?(contextMenu.fns=[],$(".contextmenu_bg, .contextmenu").remove(),$("body").css("overflow","auto"),void(e!==!0&&($(".photo.active, .album.active").removeClass("active"),visible.multiselect()&&multiselect.close()))):!1}},$(document).ready(function(){var e=mobileBrowser()?"touchend":"click";$(document).bind("contextmenu",function(e){e.preventDefault()}),mobileBrowser()||$(".tools").tipsy({gravity:"n",fade:!1,delayIn:0,opacity:1}),$("#content").on("mousedown",multiselect.show),$(document).on("mouseup",multiselect.getSelection),$("#hostedwith").on(e,function(){window.open(lychee.website)}),$("#button_signin").on(e,lychee.loginDialog),$("#button_settings").on("click",contextMenu.settings),$("#button_share").on(e,function(e){1==photo.json.public||2==photo.json.public?contextMenu.sharePhoto(photo.getID(),e):photo.setPublic(photo.getID(),e)}),$("#button_share_album").on(e,function(e){1==album.json.public?contextMenu.shareAlbum(album.getID(),e):album.setPublic(album.getID(),e)}),$("#button_more").on(e,function(e){contextMenu.photoMore(photo.getID(),e)}),$("#button_trash_album").on(e,function(){album.delete([album.getID()])}),$("#button_move").on(e,function(e){contextMenu.move([photo.getID()],e)}),$("#button_trash").on(e,function(){photo.delete([photo.getID()])}),$("#button_info_album").on(e,function(){view.infobox.show()}),$("#button_info").on(e,function(){view.infobox.show()}),$("#button_archive").on(e,function(){album.getArchive(album.getID())}),$("#button_star").on(e,function(){photo.setStar([photo.getID()])}),$("#search").on("keyup click",function(){search.find($(this).val())}),$("#clearSearch").on(e,function(){$("#search").focus(),search.reset()}),$("#button_back_home").on(e,function(){lychee.goto("")}),$("#button_back").on(e,function(){lychee.goto(album.getID())}),lychee.imageview.on(e,".arrow_wrapper.previous",photo.previous).on(e,".arrow_wrapper.next",photo.next),$("#infobox").on(e,".header a",function(){view.infobox.hide()}).on(e,"#edit_title_album",function(){album.setTitle([album.getID()])}).on(e,"#edit_description_album",function(){album.setDescription(album.getID())}).on(e,"#edit_title",function(){photo.setTitle([photo.getID()])}).on(e,"#edit_description",function(){photo.setDescription(photo.getID())}).on(e,"#edit_tags",function(){photo.editTags([photo.getID()])}).on(e,"#tags .tag span",function(){photo.deleteTag(photo.getID(),$(this).data("index"))}),Mousetrap.bind("left",function(){visible.photo()&&$("#imageview a#previous").click()}).bind("right",function(){visible.photo()&&$("#imageview a#next").click()}).bind(["u","ctrl+u"],function(){$("#upload_files").click()}).bind(["s","ctrl+s","f","ctrl+f"],function(e){visible.photo()?$("#button_star").click():visible.albums()&&(e.preventDefault(),$("#search").focus())}).bind(["r","ctrl+r"],function(e){e.preventDefault(),visible.album()?album.setTitle(album.getID()):visible.photo()&&photo.setTitle([photo.getID()])}).bind(["d","ctrl+d"],function(e){e.preventDefault(),visible.photo()?photo.setDescription(photo.getID()):visible.album()&&album.setDescription(album.getID())}).bind(["t","ctrl+t"],function(e){visible.photo()&&(e.preventDefault(),photo.editTags([photo.getID()]))}).bind(["i","ctrl+i"],function(){if(visible.infobox())view.infobox.hide();else{if(visible.multiselect())return!1;visible.infoboxbutton()&&view.infobox.show()}}).bind(["command+backspace","ctrl+backspace"],function(){visible.photo()&&!visible.message()?photo.delete([photo.getID()]):visible.album()&&!visible.message()&&album.delete([album.getID()])}).bind(["command+a","ctrl+a"],function(){visible.album()&&!visible.message()?multiselect.selectAll():visible.albums()&&!visible.message()&&multiselect.selectAll()}),Mousetrap.bindGlobal("enter",function(){$(".message .button.active").length&&$(".message .button.active").addClass("pressed").click()}),Mousetrap.bindGlobal(["esc","command+up"],function(e){e.preventDefault(),visible.message()&&$(".message .close").length>0?modal.close():visible.contextMenu()?contextMenu.close():visible.infobox()?view.infobox.hide():visible.photo()?lychee.goto(album.getID()):visible.album()?lychee.goto(""):visible.albums()&&0!==$("#search").val().length&&search.reset()}),mobileBrowser()&&$(document).on("touchend","#image",function(e){(null===swipe.obj||swipe.offset>=-5&&swipe.offset<=5)&&(visible.controls()?view.header.hide(e,0):view.header.show())}).swipe().on("swipeStart",function(){visible.photo()&&swipe.start($("#image"))}).swipe().on("swipeMove",function(e){visible.photo()&&swipe.move(e.swipe)}).swipe().on("swipeEnd",function(e){visible.photo()&&swipe.stop(e.swipe,photo.previous,photo.next)}),$(document).on("keyup","#password",function(){$(this).val().length>0&&$(this).removeClass("error")}).on(e,"#title.editable",function(){visible.photo()?photo.setTitle([photo.getID()]):album.setTitle([album.getID()])}).on("click",".album",function(){lychee.goto($(this).attr("data-id"))}).on("click",".photo",function(){lychee.goto(album.getID()+"/"+$(this).attr("data-id"))}).on(e,".message .close",modal.close).on(e,".message .button:first",function(){null!==modal.fns&&modal.fns[0](),visible.signin()||modal.close()}).on(e,".message .button:last",function(){null!==modal.fns&&modal.fns[1](),visible.signin()||modal.close()}).on(e,".button_add",function(e){contextMenu.add(e)}).on("contextmenu",".photo",function(e){contextMenu.photo(photo.getID(),e)}).on("contextmenu",".album",function(e){contextMenu.album(album.getID(),e)}).on(e,".contextmenu_bg",contextMenu.close).on("contextmenu",".contextmenu_bg",contextMenu.close).on(e,"#infobox_overlay",view.infobox.hide).on("change","#upload_files",function(){modal.close(),upload.start.local(this.files)
}).on(e,".upload_message a.close",upload.close).on("dragover",function(e){e.preventDefault()},!1).on("drop",function(e){return e.stopPropagation(),e.preventDefault(),visible.photo()&&lychee.goto(album.getID()),visible.contextMenu()&&contextMenu.close(),e.originalEvent.dataTransfer.files.length>0?upload.start.local(e.originalEvent.dataTransfer.files):e.originalEvent.dataTransfer.getData("Text").length>3&&upload.start.url(e.originalEvent.dataTransfer.getData("Text")),!0}),lychee.init()}),loadingBar={status:null,show:function(e,t){return"error"===e?(loadingBar.status="error",t&&(t=t.replace("<br>","")),t||(t="Whoops, it looks like something went wrong. Please reload the site and try again!"),visible.controls()&&lychee.header.addClass("error"),lychee.loadingBar.removeClass("loading uploading error").addClass(e).html("<h1>Error: <span>"+t+"</span></h1>").show().css("height","40px"),clearTimeout(lychee.loadingBar.data("timeout")),lychee.loadingBar.data("timeout",setTimeout(function(){loadingBar.hide(!0)},3e3)),!0):null===loadingBar.status?(loadingBar.status="loading",clearTimeout(lychee.loadingBar.data("timeout")),lychee.loadingBar.data("timeout",setTimeout(function(){visible.controls()&&lychee.header.addClass("loading"),lychee.loadingBar.removeClass("loading uploading error").addClass("loading").show()},1e3)),!0):void 0},hide:function(e){("error"!==loadingBar.status&&null!==loadingBar.status||e)&&(loadingBar.status=null,visible.controls()&&lychee.header.removeClass("error loading"),lychee.loadingBar.html("").css("height","3px"),clearTimeout(lychee.loadingBar.data("timeout")),setTimeout(function(){lychee.loadingBar.hide()},300))}};var lychee={title:"",version:"2.6.3",version_code:"020603",api_path:"php/api.php",update_path:"http://lychee.electerious.com/version/index.php",updateURL:"https://github.com/electerious/Lychee",website:"http://lychee.electerious.com",publicMode:!1,viewMode:!1,debugMode:!1,username:"",checkForUpdates:!1,sorting:"",location:"",dropbox:!1,dropboxKey:"",loadingBar:$("#loading"),header:$("header"),content:$("#content"),imageview:$("#imageview"),infobox:$("#infobox"),init:function(){var e;e="init&version="+lychee.version_code,lychee.api(e,function(e){return e.loggedIn!==!0?lychee.setMode("public"):(lychee.username=e.config.username||"",lychee.sorting=e.config.sorting||"",lychee.dropboxKey=e.config.dropboxKey||"",lychee.location=e.config.location||""),"Warning: No configuration!"===e?(lychee.header.hide(),lychee.content.hide(),$("body").append(build.no_content("cog")),settings.createConfig(),!0):(e.config.login===!1&&settings.createLogin(),lychee.checkForUpdates=e.config.checkForUpdates,$(window).bind("popstate",lychee.load),void lychee.load())})},api:function(e,t,n){void 0===n&&loadingBar.show(),$.ajax({type:"POST",url:lychee.api_path,data:"function="+e,dataType:"text",success:function(n){return setTimeout(function(){loadingBar.hide()},100),"string"==typeof n&&"Error: "===n.substring(0,7)?(lychee.error(n.substring(7,n.length),e,n),upload.close(!0),!1):("1"===n?n=!0:""===n&&(n=!1),"string"==typeof n&&"{"===n.substring(0,1)&&"}"===n.substring(n.length-1,n.length)&&(n=$.parseJSON(n)),lychee.debugMode&&console.log(n),void t(n))},error:function(t,n,o){lychee.error("Server error or API not found.",e,o),upload.close(!0)}})},login:function(){var e,t=$("input#username").val(),n=md5($("input#password").val());e="login&user="+t+"&password="+n,lychee.api(e,function(e){if(e===!0){try{localStorage.setItem("lychee_username",t)}catch(n){}window.location.reload()}else $("#password").val("").addClass("error").focus(),$(".message .button.active").removeClass("pressed")})},loginDialog:function(){var e;$("body").append(build.signInModal()),$("#username").focus(),localStorage&&(e=localStorage.getItem("lychee_username"),null!==e&&(e.length>0&&$("#username").val(e),$("#password").focus())),"1"===lychee.checkForUpdates&&lychee.getUpdate()},logout:function(){lychee.api("logout",function(){window.location.reload()})},"goto":function(e){e=void 0===e?"#":"#"+e,history.pushState(null,null,e),lychee.load()},load:function(){var e="",t="",n=document.location.hash.replace("#","").split("/");$(".no_content").remove(),contextMenu.close(),multiselect.close(),void 0!==n[0]&&(e=n[0]),void 0!==n[1]&&(t=n[1]),e&&t?(photo.json=null,(""===lychee.content.html()||$("#search").length&&0!==$("#search").val().length)&&(lychee.content.hide(),album.load(e,!0)),photo.load(t,e)):e?(photo.json=null,visible.photo()&&view.photo.hide(),album.json&&e==album.json.id?view.album.title():album.load(e)):(album.json=null,photo.json=null,search.code="",visible.album()&&view.album.hide(),visible.photo()&&view.photo.hide(),albums.load())},getUpdate:function(){$.ajax({url:lychee.update_path,success:function(e){parseInt(e)>parseInt(lychee.version_code)&&$("#version span").show()}})},setTitle:function(e,t){""===lychee.title&&(lychee.title=document.title),document.title="Albums"===e?lychee.title:lychee.title+" - "+e,t?$("#title").addClass("editable"):$("#title").removeClass("editable"),$("#title").html(e)},setMode:function(e){$("#button_settings, #button_settings, #button_search, #search, #button_trash_album, #button_share_album, .button_add, .button_divider").remove(),$("#button_trash, #button_move, #button_share, #button_star").remove(),$(document).on("mouseenter","#title.editable",function(){$(this).removeClass("editable")}).off("click","#title.editable").off("touchend","#title.editable").off("contextmenu",".photo").off("contextmenu",".album").off("drop"),Mousetrap.unbind(["u","ctrl+u"]).unbind(["s","ctrl+s"]).unbind(["r","ctrl+r"]).unbind(["d","ctrl+d"]).unbind(["t","ctrl+t"]).unbind(["command+backspace","ctrl+backspace"]),"public"===e?($("header #button_signin, header #hostedwith").show(),lychee.publicMode=!0):"view"===e&&(Mousetrap.unbind("esc"),$("#button_back, a#next, a#previous").remove(),$(".no_content").remove(),lychee.publicMode=!0,lychee.viewMode=!0)},animate:function(e,t){var n=[["fadeIn","fadeOut"],["contentZoomIn","contentZoomOut"]];e.jQuery||(e=$(e));for(var o=0;o<n.length;o++)for(var i=0;i<n[o].length;i++)if(n[o][i]==t)return e.removeClass(n[o][0]+" "+n[o][1]).addClass(t),!0;return!1},escapeHTML:function(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},loadDropbox:function(e){if(!lychee.dropbox&&lychee.dropboxKey){loadingBar.show();var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];t.src="https://www.dropbox.com/static/api/1/dropins.js",t.id="dropboxjs",t.type="text/javascript",t.async="true",t.setAttribute("data-app-key",lychee.dropboxKey),t.onload=t.onreadystatechange=function(){var t=this.readyState;t&&"complete"!==t&&"loaded"!==t||(lychee.dropbox=!0,loadingBar.hide(),e())},n.parentNode.insertBefore(t,n)}else lychee.dropbox&&lychee.dropboxKey?e():settings.setDropboxKey(e)},removeHTML:function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText},error:function(e,t,n){console.error({description:e,params:t,response:n}),loadingBar.show("error",e)}};modal={fns:null,show:function(e,t,n,o,i){n||(n=[["",function(){}],["",function(){}]]),modal.fns=[n[0][1],n[1][1]],$("body").append(build.modal(e,t,n,o,i)),$(".message input:first-child").focus().select()},close:function(){modal.fns=null,$(".message_overlay").removeClass("fadeIn").css("opacity",0),setTimeout(function(){$(".message_overlay").remove()},300)}},multiselect={position:{top:null,right:null,bottom:null,left:null},show:function(e){return mobileBrowser()?!1:lychee.publicMode?!1:visible.search()?!1:visible.infobox()?!1:visible.albums()||visible.album?0!==$(".album:hover, .photo:hover").length?!1:(visible.multiselect()&&$("#multiselect").remove(),multiselect.position.top=e.pageY,multiselect.position.right=-1*(e.pageX-$(document).width()),multiselect.position.bottom=-1*(multiselect.position.top-$(window).height()),multiselect.position.left=e.pageX,$("body").append(build.multiselect(multiselect.position.top,multiselect.position.left)),void $(document).on("mousemove",multiselect.resize)):!1},selectAll:function(){var e,t,n;return mobileBrowser()?!1:lychee.publicMode?!1:visible.search()?!1:visible.infobox()?!1:visible.albums()||visible.album?(visible.multiselect()&&$("#multiselect").remove(),multiselect.position.top=70,multiselect.position.right=40,multiselect.position.bottom=90,multiselect.position.left=20,$("body").append(build.multiselect(multiselect.position.top,multiselect.position.left)),t=$(document).width()-multiselect.position.right+2,n=$(document).height()-multiselect.position.bottom,$("#multiselect").css({width:t,height:n}),e={pageX:$(document).width()-multiselect.position.right/2,pageY:$(document).height()-multiselect.position.bottom},void multiselect.getSelection(e)):!1},resize:function(e){var t,n,o=e.pageX,i=e.pageY;return null===multiselect.position.top||null===multiselect.position.right||null===multiselect.position.bottom||null===multiselect.position.left?!1:(i>=multiselect.position.top?(t=i-multiselect.position.top,multiselect.position.top+t>=$(document).height()&&(t-=multiselect.position.top+t-$(document).height()+2),$("#multiselect").css({top:multiselect.position.top,bottom:"inherit",height:t})):$("#multiselect").css({top:"inherit",bottom:multiselect.position.bottom,height:multiselect.position.top-e.pageY}),void(o>=multiselect.position.left?(n=o-multiselect.position.left,multiselect.position.left+n>=$(document).width()&&(n-=multiselect.position.left+n-$(document).width()+2),$("#multiselect").css({right:"inherit",left:multiselect.position.left,width:n})):$("#multiselect").css({right:multiselect.position.right,left:"inherit",width:multiselect.position.left-e.pageX})))},stopResize:function(){$(document).off("mousemove")},getSize:function(){return visible.multiselect()?{top:$("#multiselect").offset().top,left:$("#multiselect").offset().left,width:parseInt($("#multiselect").css("width").replace("px","")),height:parseInt($("#multiselect").css("height").replace("px",""))}:!1},getSelection:function(e){var t,n,o=150,i=[],a=multiselect.getSize();return visible.contextMenu()?!1:visible.multiselect()?($(".photo, .album").each(function(){n=$(this).offset(),n.top>=a.top-o&&n.left>=a.left-o&&n.top+206<=a.top+a.height+o&&n.left+206<=a.left+a.width+o&&(t=$(this).data("id"),"0"!==t&&0!==t&&"f"!==t&&"s"!==t&&"r"!==t&&null!==t&&void 0!==t&&(i.push(t),$(this).addClass("active")))}),void(0!==i.length&&visible.album()?contextMenu.photoMulti(i,e):0!==i.length&&visible.albums()?contextMenu.albumMulti(i,e):multiselect.close())):!1},close:function(){multiselect.stopResize(),multiselect.position.top=null,multiselect.position.right=null,multiselect.position.bottom=null,multiselect.position.left=null,lychee.animate("#multiselect","fadeOut"),setTimeout(function(){$("#multiselect").remove()},300)}},password={value:"",get:function(e,t){var n,o=$(".message input.text").val();lychee.publicMode?album.json&&0==album.json.password?t():albums.json&&0==albums.json.content[e].password?t():albums.json||album.json?void 0==o?password.getDialog(e,t):(n="checkAlbumAccess&albumID="+e+"&password="+md5(o),lychee.api(n,function(e){e===!0?(password.value=md5(o),t()):(lychee.goto(""),loadingBar.show("error","Access denied. Wrong password!"))})):(album.json={password:!0},t("")):t()},getDialog:function(e,t){var n;n=[["Enter",function(){password.get(e,t)}],["Cancel",lychee.goto]],modal.show("<a class='icon-lock'></a> Enter Password","This album is protected by a password. Enter the password below to view the photos of this album: <input class='text' type='password' placeholder='password' value=''>",n,-110,!1)}},photo={json:null,cache:null,getID:function(){var e;return e=photo.json?photo.json.id:$(".photo:hover, .photo.active").attr("data-id"),e?e:!1},load:function(e,t){var n,o;n="getPhoto&photoID="+e+"&albumID="+t+"&password="+password.value,lychee.api(n,function(n){return"Warning: Wrong password!"===n?(o=function(){""!==password.value?photo.load(e,t):setTimeout(o,250)},o(),!1):(photo.json=n,visible.photo()||view.photo.show(),view.photo.init(),lychee.imageview.show(),void setTimeout(function(){lychee.content.show()},300))})},preloadNext:function(e){var t,n;return mobileBrowser()?void(album.json&&album.json.content&&album.json.content[e]&&""!=album.json.content[e].nextPhoto&&(t=album.json.content[e].nextPhoto,n=album.json.content[t].url,photo.cache=new Image,photo.cache.src=n,photo.cache.onload=function(){photo.cache=null})):!1},parse:function(){photo.json.title||(photo.json.title="Untitled")},previous:function(e){var t=0;photo.getID()!==!1&&album.json&&album.json.content[photo.getID()]&&""!==album.json.content[photo.getID()].previousPhoto&&(e===!0&&(t=200,$("#image").css({WebkitTransform:"translateX(100%)",MozTransform:"translateX(100%)",transform:"translateX(100%)",opacity:0})),setTimeout(function(){return photo.getID()===!1?!1:void lychee.goto(album.getID()+"/"+album.json.content[photo.getID()].previousPhoto)},t))},next:function(e){var t=0;photo.getID()!==!1&&album.json&&album.json.content[photo.getID()]&&""!==album.json.content[photo.getID()].nextPhoto&&(e===!0&&(t=200,$("#image").css({WebkitTransform:"translateX(-100%)",MozTransform:"translateX(-100%)",transform:"translateX(-100%)",opacity:0})),setTimeout(function(){return photo.getID()===!1?!1:void lychee.goto(album.getID()+"/"+album.json.content[photo.getID()].nextPhoto)},t))},duplicate:function(e){var t;return e?(e instanceof Array==!1&&(e=[e]),albums.refresh(),t="duplicatePhoto&photoIDs="+e,void lychee.api(t,function(e){e!==!0?lychee.error(null,t,e):album.load(album.getID(),!1)})):!1},"delete":function(e){var t,n,o;return e?(e instanceof Array==!1&&(e=[e]),1===e.length&&(o=visible.photo()?photo.json.title:album.json.content[e].title,""===o&&(o="Untitled")),n=[["",function(){var n,o;e.forEach(function(e){(""!==album.json.content[e].nextPhoto||""!==album.json.content[e].previousPhoto)&&(n=album.json.content[e].nextPhoto,o=album.json.content[e].previousPhoto,album.json.content[o].nextPhoto=n,album.json.content[n].previousPhoto=o),album.json.content[e]=null,view.album.content.delete(e)}),visible.albums()||lychee.goto(album.getID()),albums.refresh(),t="deletePhoto&photoIDs="+e,lychee.api(t,function(e){e!==!0&&lychee.error(null,t,e)})}],["",function(){}]],void(1===e.length?(n[0][0]="Delete Photo",n[1][0]="Keep Photo",modal.show("Delete Photo","Are you sure you want to delete the photo '"+o+"'?<br>This action can't be undone!",n)):(n[0][0]="Delete Photos",n[1][0]="Keep Photos",modal.show("Delete Photos","Are you sure you want to delete all "+e.length+" selected photo?<br>This action can't be undone!",n)))):!1},setTitle:function(e){var t,n,o,i="";return e?(e instanceof Array==!1&&(e=[e]),1===e.length&&(photo.json?i=photo.json.title:album.json&&(i=album.json.content[e].title),i=i.replace("'","&apos;")),o=[["Set Title",function(){t=$(".message input.text").val(),t=lychee.removeHTML(t),visible.photo()&&(photo.json.title=""===t?"Untitled":t,view.photo.title()),e.forEach(function(e){album.json.content[e].title=t,view.album.content.title(e)}),n="setPhotoTitle&photoIDs="+e+"&title="+escape(encodeURI(t)),lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})}],["Cancel",function(){}]],void(1===e.length?modal.show("Set Title","Enter a new title for this photo: <input class='text' type='text' maxlength='30' placeholder='Title' value='"+i+"'>",o):modal.show("Set Titles","Enter a title for all "+e.length+" selected photos: <input class='text' type='text' maxlength='30' placeholder='Title' value=''>",o))):!1},setAlbum:function(e,t){var n,o,i;return e?(visible.photo&&lychee.goto(album.getID()),e instanceof Array==!1&&(e=[e]),e.forEach(function(e){(""!==album.json.content[e].nextPhoto||""!==album.json.content[e].previousPhoto)&&(o=album.json.content[e].nextPhoto,i=album.json.content[e].previousPhoto,album.json.content[i].nextPhoto=o,album.json.content[o].previousPhoto=i),album.json.content[e]=null,view.album.content.delete(e)}),albums.refresh(),n="setPhotoAlbum&photoIDs="+e+"&albumID="+t,void lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})):!1},setStar:function(e){var t;return e?(visible.photo()&&(photo.json.star=0==photo.json.star?1:0,view.photo.star()),e.forEach(function(e){album.json.content[e].star=0==album.json.content[e].star?1:0,view.album.content.star(e)}),albums.refresh(),t="setPhotoStar&photoIDs="+e,void lychee.api(t,function(e){e!==!0&&lychee.error(null,t,e)})):!1},setPublic:function(e,t){var n;return 2==photo.json.public?(modal.show("Public Album","This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.",[["Show Album",function(){lychee.goto(photo.json.original_album)}],["Close",function(){}]]),!1):(visible.photo()&&(photo.json.public=0==photo.json.public?1:0,view.photo.public(),1==photo.json.public&&contextMenu.sharePhoto(e,t)),album.json.content[e].public=0==album.json.content[e].public?1:0,view.album.content.public(e),albums.refresh(),n="setPhotoPublic&photoID="+e,void lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)}))},setDescription:function(e){var t,n,o,i=photo.json.description.replace("'","&apos;");o=[["Set Description",function(){t=$(".message input.text").val(),t=lychee.removeHTML(t),visible.photo()&&(photo.json.description=t,view.photo.description()),n="setPhotoDescription&photoID="+e+"&description="+escape(encodeURI(t)),lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})}],["Cancel",function(){}]],modal.show("Set Description","Enter a description for this photo: <input class='text' type='text' maxlength='800' placeholder='Description' value='"+i+"'>",o)},editTags:function(e){var t,n="",o="";if(!e)return!1;if(e instanceof Array==!1&&(e=[e]),visible.photo()&&(n=photo.json.tags),visible.album()&&1===e.length&&(n=album.json.content[e].tags),visible.album()&&e.length>1){var i=!0;e.forEach(function(t){i=album.json.content[t].tags===album.json.content[e[0]].tags&&i===!0?!0:!1}),i&&(n=album.json.content[e[0]].tags)}n=n.replace(/,/g,", "),t=[["Set Tags",function(){o=$(".message input.text").val(),photo.setTags(e,o)}],["Cancel",function(){}]],1===e.length?modal.show("Set Tags","Enter your tags for this photo. You can add multiple tags by separating them with a comma: <input class='text' type='text' maxlength='800' placeholder='Tags' value='"+n+"'>",t):modal.show("Set Tags","Enter your tags for all "+e.length+" selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma: <input class='text' type='text' maxlength='800' placeholder='Tags' value='"+n+"'>",t)},setTags:function(e,t){var n;return e?(e instanceof Array==!1&&(e=[e]),t=t.replace(/(\ ,\ )|(\ ,)|(,\ )|(,{1,}\ {0,})|(,$|^,)/g,","),t=t.replace(/,$|^,|(\ ){0,}$/g,""),t=lychee.removeHTML(t),visible.photo()&&(photo.json.tags=t,view.photo.tags()),e.forEach(function(e){album.json.content[e].tags=t}),n="setPhotoTags&photoIDs="+e+"&tags="+t,void lychee.api(n,function(e){e!==!0&&lychee.error(null,n,e)})):!1},deleteTag:function(e,t){var n;n=photo.json.tags.split(","),n.splice(t,1),photo.json.tags=n.toString(),photo.setTags([e],photo.json.tags)},share:function(e,t){var n="",o=photo.getViewLink(e),i="unknown";switch(t){case 0:n="https://twitter.com/share?url="+encodeURI(o);break;case 1:n="http://www.facebook.com/sharer.php?u="+encodeURI(o)+"&t="+encodeURI(photo.json.title);break;case 2:n="mailto:?subject="+encodeURI(photo.json.title)+"&body="+encodeURI(o);break;case 3:lychee.loadDropbox(function(){i=photo.json.title+"."+photo.getDirectLink().split(".").pop(),Dropbox.save(photo.getDirectLink(),i)});break;default:n=""}n.length>5&&(location.href=n)},isSmall:function(){var e={width:!1,height:!1};return photo.json.width<$(window).width()-60&&(e.width=!0),photo.json.height<$(window).height()-100&&(e.height=!0),e.width&&e.height?!0:!1},getArchive:function(e){var t,n="php/api.php?function=getPhotoArchive&photoID="+e;t=location.href.indexOf("index.html")>0?location.href.replace(location.hash,"").replace("index.html",n):location.href.replace(location.hash,"")+n,lychee.publicMode&&(t+="&password="+password.value),location.href=t},getDirectLink:function(){return $("#imageview #image").css("background-image").replace(/"/g,"").replace(/url\(|\)$/gi,"")},getViewLink:function(e){var t="view.php?p="+e;return location.href.indexOf("index.html")>0?location.href.replace("index.html"+location.hash,t):location.href.replace(location.hash,t)}},search={code:null,find:function(e){var t,n,o="",i="";clearTimeout($(window).data("timeout")),$(window).data("timeout",setTimeout(function(){0!==$("#search").val().length?(t="search&term="+e,lychee.api(t,function(e){e&&e.albums&&(albums.json={content:e.albums},$.each(albums.json.content,function(){albums.parse(this),o+=build.album(this)})),e&&e.photos&&(album.json={content:e.photos},$.each(album.json.content,function(){i+=build.photo(this)})),n=""===o&&""===i?"error":""===o?build.divider("Photos")+i:""===i?build.divider("Albums")+o:build.divider("Photos")+i+build.divider("Albums")+o,search.code!==md5(n)&&($(".no_content").remove(),lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomOut"),lychee.animate(".divider","fadeOut"),search.code=md5(n),setTimeout(function(){"error"===n?$("body").append(build.no_content("search")):(lychee.content.html(n),lychee.animate(".album:nth-child(-n+50), .photo:nth-child(-n+50)","contentZoomIn"),$("img[data-type!='svg']").retina())},300))})):search.reset()},250))},reset:function(){$("#search").val(""),$(".no_content").remove(),""!==search.code&&(albums.json=null,album.json=null,photo.json=null,search.code="",lychee.animate(".divider","fadeOut"),albums.load())}};var settings={createConfig:function(){var e,t,n,o,i,a,r;a=[["Connect",function(){o=$(".message input.text#dbHost").val(),t=$(".message input.text#dbUser").val(),n=$(".message input.text#dbPassword").val(),e=$(".message input.text#dbName").val(),i=$(".message input.text#dbTablePrefix").val(),o.length<1&&(o="localhost"),e.length<1&&(e="lychee"),r="dbCreateConfig&dbName="+escape(e)+"&dbUser="+escape(t)+"&dbPassword="+escape(n)+"&dbHost="+escape(o)+"&dbTablePrefix="+escape(i),lychee.api(r,function(e){e!==!0?setTimeout(function(){return-1!==e.indexOf("Warning: Connection failed!")?(a=[["Retry",function(){setTimeout(settings.createConfig,400)}],["",function(){}]],modal.show("Connection Failed","Unable to connect to host database because access was denied. Double-check your host, username and password and ensure that access from your current location is permitted.",a,null,!1),!1):-1!==e.indexOf("Warning: Creation failed!")?(a=[["Retry",function(){setTimeout(settings.createConfig,400)}],["",function(){}]],modal.show("Creation Failed","Unable to create the database. Double-check your host, username and password and ensure that the specified user has the rights to modify and add content to the database.",a,null,!1),!1):-1!==e.indexOf("Warning: Could not create file!")?(a=[["Retry",function(){setTimeout(settings.createConfig,400)}],["",function(){}]],modal.show("Saving Failed","Unable to save this configuration. Permission denied in <b>'data/'</b>. Please set the read, write and execute rights for others in <b>'data/'</b> and <b>'uploads/'</b>. Take a look the readme for more information.",a,null,!1),!1):(a=[["Retry",function(){setTimeout(settings.createConfig,400)}],["",function(){}]],modal.show("Configuration Failed","Something unexpected happened. Please try again and check your installation and server. Take a look the readme for more information.",a,null,!1),!1)},400):window.location.reload()})}],["",function(){}]],modal.show("Configuration","Enter your database connection details below: <input id='dbHost' class='text less' type='text' placeholder='Database Host (optional)' value=''><input id='dbUser' class='text less' type='text' placeholder='Database Username' value=''><input id='dbPassword' class='text more' type='password' placeholder='Database Password' value=''><br>Lychee will create its own database. If required, you can enter the name of an existing database instead:<input id='dbName' class='text less' type='text' placeholder='Database Name (optional)' value=''><input id='dbTablePrefix' class='text more' type='text' placeholder='Table prefix (optional)' value=''>",a,-235,!1)},createLogin:function(){var e,t,n,o;o=[["Create Login",function(){e=$(".message input.text#username").val(),t=$(".message input.text#password").val(),e.length<1||t.length<1?setTimeout(function(){return o=[["Retry",function(){setTimeout(settings.createLogin,400)}],["",function(){}]],modal.show("Wrong Input","The username or password you entered is not long enough. Please try again with another username and password!",o,null,!1),!1},400):(n="setLogin&username="+escape(e)+"&password="+md5(t),lychee.api(n,function(e){e!==!0&&setTimeout(function(){return o=[["Retry",function(){setTimeout(settings.createLogin,400)}],["",function(){}]],modal.show("Creation Failed","Unable to save login. Please try again with another username and password!",o,null,!1),!1},400)}))}],["",function(){}]],modal.show("Create Login","Enter a username and password for your installation: <input id='username' class='text less' type='text' placeholder='New Username' value=''><input id='password' class='text' type='password' placeholder='New Password' value=''>",o,-122,!1)},setLogin:function(){var e,t,n,o,i;i=[["Change Login",function(){return e=$(".message input.text#old_password").val(),t=$(".message input.text#username").val(),n=$(".message input.text#password").val(),e.length<1?(loadingBar.show("error","Your old password was entered incorrectly. Please try again!"),!1):t.length<1?(loadingBar.show("error","Your new username was entered incorrectly. Please try again!"),!1):n.length<1?(loadingBar.show("error","Your new password was entered incorrectly. Please try again!"),!1):(o="setLogin&oldPassword="+md5(e)+"&username="+escape(t)+"&password="+md5(n),void lychee.api(o,function(e){e!==!0&&lychee.error(null,o,e)}))}],["Cancel",function(){}]],modal.show("Change Login","Enter your current password: <input id='old_password' class='text more' type='password' placeholder='Current Password' value=''><br>Your username and password will be changed to the following: <input id='username' class='text less' type='text' placeholder='New Username' value=''><input id='password' class='text' type='password' placeholder='New Password' value=''>",i,-171)},setSorting:function(){var e,t,n;e=[["Change Sorting",function(){t[0]=$("select#settings_type").val(),t[1]=$("select#settings_order").val(),albums.refresh(),n="setSorting&type="+t[0]+"&order="+t[1],lychee.api(n,function(e){e===!0?(lychee.sorting="ORDER BY "+t[0]+" "+t[1],lychee.load()):lychee.error(null,n,e)})}],["Cancel",function(){}]],modal.show("Change Sorting","Sort photos by 				<select id='settings_type'> 					<option value='id'>Upload Time</option> 					<option value='takestamp'>Take Date</option> 					<option value='title'>Title</option> 					<option value='description'>Description</option> 					<option value='public'>Public</option> 					<option value='star'>Star</option> 					<option value='type'>Photo Format</option> 				</select> 				in an 				<select id='settings_order'> 					<option value='ASC'>Ascending</option> 					<option value='DESC'>Descending</option> 				</select> 				order.			",e),""!==lychee.sorting&&(t=lychee.sorting.replace("ORDER BY ","").split(" "),$("select#settings_type").val(t[0]),$("select#settings_order").val(t[1]))},setDropboxKey:function(e){var t,n,o;t=[["Set Key",function(){o=$(".message input.text#key").val(),n="setDropboxKey&key="+o,lychee.api(n,function(t){t===!0?(lychee.dropboxKey=o,e&&lychee.loadDropbox(e)):lychee.error(null,n,t)})}],["Cancel",function(){}]],modal.show("Set Dropbox Key","In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href='https://www.dropbox.com/developers/apps/create'>their website</a>. Generate yourself a personal key and enter it below: <input id='key' class='text' type='text' placeholder='Dropbox API Key' value='"+lychee.dropboxKey+"'>",t)}};swipe={obj:null,tolerance:150,offset:0,start:function(e,t){return e&&(swipe.obj=e),t&&(swipe.tolerance=t),!0},move:function(e){return null===swipe.obj?!1:(swipe.offset=-1*e.x,void swipe.obj.css({WebkitTransform:"translateX("+swipe.offset+"px)",MozTransform:"translateX("+swipe.offset+"px)",transform:"translateX("+swipe.offset+"px)"}))},stop:function(e,t,n){e.x<=-swipe.tolerance?t(!0):e.x>=swipe.tolerance?n(!0):null!==swipe.obj&&swipe.obj.css({WebkitTransform:"translateX(0px)",MozTransform:"translateX(0px)",transform:"translateX(0px)"}),swipe.obj=null,swipe.offset=0}},upload={show:function(e,t,n){upload.close(!0),$("body").append(build.uploadModal(e,t)),null!==n&&void 0!==n&&n()},notify:function(e,t){var n;return t&&""!==t||(t="You can now manage your new photo(s)."),window.webkitNotifications?(0!==window.webkitNotifications.checkPermission()&&window.webkitNotifications.requestPermission(),void(0===window.webkitNotifications.checkPermission()&&e&&(n=window.webkitNotifications.createNotification("",e,t),n.show()))):!1},start:{local:function(e){var t=album.getID(),n=!1,o=function(e,i){var a,r=new FormData,s=new XMLHttpRequest,l=0,u=function(){window.onbeforeunload=null,$("#upload_files").val(""),n===!1?(upload.close(),upload.notify("Upload complete")):($(".upload_message a.close").show(),upload.notify("Upload complete","Failed to upload one or more photos.")),albums.refresh(),album.getID()===!1?lychee.goto("0"):album.load(t)};if(i.supported===!1){if(null!==i.next)o(e,i.next);else{for(var c=!1,d=0;d<e.length;d++)if(e[d].supported===!0){c=!0;break}c===!1&&setTimeout(u,2e3)}return!1}r.append("function","upload"),r.append("albumID",t),r.append("tags",""),r.append(0,i),s.open("POST",lychee.api_path),s.onload=function(){var t=!1;i.ready=!0,200===s.status&&"1"===s.responseText?$(".upload_message .rows .row:nth-child("+(i.num+1)+") .status").html("Finished").addClass("success"):($(".upload_message .rows .row:nth-child("+(i.num+1)+") .status").html("Error").addClass("error"),$(".upload_message .rows .row:nth-child("+(i.num+1)+") p.notice").html("Server returned an unknown response. Please take a look at the console of your browser for further details.").show(),n=!0,lychee.error("Upload failed. Server returned the status code "+s.status+"!",s,s.responseText));for(var o=0;o<e.length;o++)if(e[o].ready===!1){t=!0;break}t===!1&&u()},s.upload.onprogress=function(t){if(t.lengthComputable&&(a=t.loaded/t.total*100|0,a>l&&($(".upload_message .rows .row:nth-child("+(i.num+1)+") .status").html(a+"%"),l=a),a>=100)){var n=0;i.num+1>4&&(n=40*(i.num+1-4)),$(".upload_message .rows").scrollTop(n),$(".upload_message .rows .row:nth-child("+(i.num+1)+") .status").html("Processing"),null!==i.next&&o(e,i.next)}},s.send(r)};if(e.length<=0)return!1;(t===!1||visible.albums()===!0)&&(t=0);for(var i=0;i<e.length;i++)e[i].num=i,e[i].ready=!1,e[i].supported=!0,e[i].next=i<e.length-1?e[i+1]:null,"image/jpeg"!==e[i].type&&"image/jpg"!==e[i].type&&"image/png"!==e[i].type&&"image/gif"!==e[i].type&&(e[i].ready=!0,e[i].supported=!1);window.onbeforeunload=function(){return"Lychee is currently uploading!"},upload.show("Uploading",e),o(e,e[0])},url:function(){var e,t,n,o,i=album.getID(),a=[];i===!1&&(i=0),n=[["Import",function(){if(o=$(".message input.text").val(),o&&o.length>3){if(t=o.split(".").pop(),"jpeg"!==t&&"jpg"!==t&&"png"!==t&&"gif"!==t&&"webp"!==t)return loadingBar.show("error","The file format of this link is not supported."),!1;a[0]={name:o,supported:!0},upload.show("Importing URL",a,function(){$(".upload_message .rows .row .status").html("Importing")}),e="importUrl&url="+escape(encodeURI(o))+"&albumID="+i,lychee.api(e,function(t){upload.close(),upload.notify("Import complete"),albums.refresh(),album.getID()===!1?lychee.goto("0"):album.load(i),t!==!0&&lychee.error(null,e,t)})}else loadingBar.show("error","Link to short or too long. Please try another one!")}],["Cancel",function(){}]],modal.show("Import from Link","Please enter the direct link to a photo to import it: <input class='text' type='text' placeholder='http://' value='http://'>",n)
},server:function(){var e,t,n,o=album.getID(),i=[];o===!1&&(o=0),t=[["Import",function(){n=$(".message input.text").val(),i[0]={name:n,supported:!0},upload.show("Importing from server",i,function(){$(".upload_message .rows .row .status").html("Importing")}),e="importServer&albumID="+o+"&path="+escape(encodeURI(n)),lychee.api(e,function(t){return upload.close(),upload.notify("Import complete"),albums.refresh(),"Notice: Import only contains albums!"===t?visible.albums()?lychee.load():lychee.goto(""):album.getID()===!1?lychee.goto("0"):album.load(o),"Notice: Import only contains albums!"===t?!0:void("Warning: Folder empty!"===t?lychee.error("Folder empty. No photos imported!",e,t):t!==!0&&lychee.error(null,e,t))})}],["Cancel",function(){}]],modal.show("Import from Server","This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible. <input class='text' type='text' maxlength='100' placeholder='Absolute path to directory' value='"+lychee.location+"uploads/import/'>",t)},dropbox:function(){var e,t=album.getID(),n="";t===!1&&(t=0),lychee.loadDropbox(function(){Dropbox.choose({linkType:"direct",multiselect:!0,success:function(o){for(var i=0;i<o.length;i++)n+=o[i].link+",",o[i]={name:o[i].link,supported:!0};n=n.substr(0,n.length-1),upload.show("Importing from Dropbox",o,function(){$(".upload_message .rows .row .status").html("Importing")}),e="importUrl&url="+escape(n)+"&albumID="+t,lychee.api(e,function(n){upload.close(),upload.notify("Import complete"),albums.refresh(),album.getID()===!1?lychee.goto("0"):album.load(t),n!==!0&&lychee.error(null,e,n)})}})})}},close:function(e){e===!0?$(".upload_overlay").remove():($(".upload_overlay").removeClass("fadeIn").css("opacity",0),setTimeout(function(){$(".upload_overlay").remove()},300))}},view={header:{show:function(){var e=-1*($("#imageview #image").height()/2)+20;clearTimeout($(window).data("timeout")),lychee.imageview.removeClass("full"),lychee.header.removeClass("hidden"),lychee.loadingBar.css("opacity",1),$("#imageview #image.small").length>0?$("#imageview #image").css("margin-top",e):$("#imageview #image").removeClass("full")},hide:function(e,t){var n=-1*($("#imageview #image").height()/2);void 0===t&&(t=500),!visible.photo()||visible.infobox()||visible.contextMenu()||visible.message()||(clearTimeout($(window).data("timeout")),$(window).data("timeout",setTimeout(function(){lychee.imageview.addClass("full"),lychee.header.addClass("hidden"),lychee.loadingBar.css("opacity",0),$("#imageview #image.small").length>0?$("#imageview #image").css("margin-top",n):$("#imageview #image").addClass("full")},t)))},mode:function(e){var t=album.getID();switch(e){case"albums":lychee.header.removeClass("view"),$("#tools_album, #tools_photo").hide(),$("#tools_albums").show();break;case"album":lychee.header.removeClass("view"),$("#tools_albums, #tools_photo").hide(),$("#tools_album").show(),album.json.content===!1?$("#button_archive").hide():$("#button_archive").show(),lychee.publicMode&&"0"===album.json.downloadable&&$("#button_archive").hide(),"s"===t||"f"===t||"r"===t?$("#button_info_album, #button_trash_album, #button_share_album").hide():"0"===t?($("#button_info_album, #button_share_album").hide(),$("#button_trash_album").show()):$("#button_info_album, #button_trash_album, #button_share_album").show();break;case"photo":lychee.header.addClass("view"),$("#tools_albums, #tools_album").hide(),$("#tools_photo").show()}}},infobox:{show:function(){visible.infobox()||$("body").append("<div id='infobox_overlay' class='fadeIn'></div>"),lychee.infobox.addClass("active")},hide:function(){lychee.animate("#infobox_overlay","fadeOut"),setTimeout(function(){$("#infobox_overlay").remove()},300),lychee.infobox.removeClass("active")}},albums:{init:function(){view.albums.title(),view.albums.content.init()},title:function(){lychee.setTitle("Albums",!1)},content:{scrollPosition:0,init:function(){var e="",t="";albums.parse(albums.json.unsortedAlbum),albums.parse(albums.json.publicAlbum),albums.parse(albums.json.starredAlbum),albums.parse(albums.json.recentAlbum),lychee.publicMode||(e=build.divider("Smart Albums")+build.album(albums.json.unsortedAlbum)+build.album(albums.json.starredAlbum)+build.album(albums.json.publicAlbum)+build.album(albums.json.recentAlbum)),albums.json.content&&($.each(albums.json.content,function(){albums.parse(this),t=build.album(this)+t}),lychee.publicMode||(t=build.divider("Albums")+t)),""===e&&""===t?(lychee.content.html(""),$("body").append(build.no_content("share"))):lychee.content.html(e+t),$("img[data-type!='nonretina']").retina(),null!==view.albums.content.scrollPosition&&$("html, body").scrollTop(view.albums.content.scrollPosition)},title:function(e){var t="",n="",o=albums.json.content[e].title;albums.json.content[e].password&&(t="<span class='icon-lock'></span> "),null!==o&&o.length>18&&(n=o,o=o.substr(0,18)+"..."),$(".album[data-id='"+e+"'] .overlay h1").html(t+o).attr("title",n)},"delete":function(e){$(".album[data-id='"+e+"']").css("opacity",0).animate({width:0,marginLeft:0},300,function(){$(this).remove(),albums.json.num<=0&&lychee.animate(".divider:last-of-type","fadeOut")})}}},album:{init:function(){album.parse(),view.album.infobox(),view.album.title(),view.album.public(),view.album.content.init(),album.json.init=1},hide:function(){view.infobox.hide()},title:function(){if((visible.album()||!album.json.init)&&!visible.photo())switch(album.getID()){case"f":lychee.setTitle("Starred",!1);break;case"s":lychee.setTitle("Public",!1);break;case"r":lychee.setTitle("Recent",!1);break;case"0":lychee.setTitle("Unsorted",!1);break;default:album.json.init&&$("#infobox .attr_title").html(album.json.title+" "+build.editIcon("edit_title_album")),lychee.setTitle(album.json.title,!0)}},content:{init:function(){var e="";$.each(album.json.content,function(){e+=build.photo(this)}),lychee.content.html(e),$("img[data-type!='svg']").retina(),view.albums.content.scrollPosition=$(document).scrollTop(),$("html, body").scrollTop(0)},title:function(e){var t="",n=album.json.content[e].title;null!==n&&n.length>18&&(t=n,n=n.substr(0,18)+"..."),$(".photo[data-id='"+e+"'] .overlay h1").html(n).attr("title",t)},star:function(e){$(".photo[data-id='"+e+"'] .icon-star").remove(),1==album.json.content[e].star&&$(".photo[data-id='"+e+"']").append("<a class='badge red icon-star'></a>")},"public":function(e){$(".photo[data-id='"+e+"'] .icon-share").remove(),1==album.json.content[e].public&&$(".photo[data-id='"+e+"']").append("<a class='badge red icon-share'></a>")},"delete":function(e){$(".photo[data-id='"+e+"']").css("opacity",0).animate({width:0,marginLeft:0},300,function(){$(this).remove(),visible.albums()||(album.json.num--,view.album.num(),view.album.title())})}},description:function(){$("#infobox .attr_description").html(album.json.description+" "+build.editIcon("edit_description_album"))},num:function(){$("#infobox .attr_images").html(album.json.num)},"public":function(){1==album.json.public?($("#button_share_album a").addClass("active"),$("#button_share_album").attr("title","Share Album"),$(".photo .icon-share").remove(),album.json.init&&$("#infobox .attr_visibility").html("Public")):($("#button_share_album a").removeClass("active"),$("#button_share_album").attr("title","Make Public"),album.json.init&&$("#infobox .attr_visibility").html("Private"))},password:function(){$("#infobox .attr_password").html(1==album.json.password?"Yes":"No")},infobox:function(){!visible.album()&&album.json.init||visible.photo()||lychee.infobox.html(build.infoboxAlbum(album.json)).show()}},photo:{init:function(){photo.parse(),view.photo.infobox(),view.photo.title(),view.photo.star(),view.photo.public(),view.photo.photo(),photo.json.init=1},show:function(){lychee.content.addClass("view"),view.header.mode("photo"),$("body").css("overflow","hidden"),$(document).bind("mouseenter",view.header.show).bind("mouseleave",view.header.hide),lychee.animate(lychee.imageview,"fadeIn")},hide:function(){view.header.show(),visible.infobox&&view.infobox.hide(),lychee.content.removeClass("view"),view.header.mode("album"),$("body").css("overflow","auto"),$(document).unbind("mouseenter").unbind("mouseleave"),lychee.animate(lychee.imageview,"fadeOut"),setTimeout(function(){lychee.imageview.hide(),view.album.infobox()},300)},title:function(){photo.json.init&&$("#infobox .attr_title").html(photo.json.title+" "+build.editIcon("edit_title")),lychee.setTitle(photo.json.title,!0)},description:function(){photo.json.init&&$("#infobox .attr_description").html(photo.json.description+" "+build.editIcon("edit_description"))},star:function(){$("#button_star a").removeClass("icon-star-empty icon-star"),1==photo.json.star?($("#button_star a").addClass("icon-star"),$("#button_star").attr("title","Unstar Photo")):($("#button_star a").addClass("icon-star-empty"),$("#button_star").attr("title","Star Photo"))},"public":function(){1==photo.json.public||2==photo.json.public?($("#button_share a").addClass("active"),$("#button_share").attr("title","Share Photo"),photo.json.init&&$("#infobox .attr_visibility").html("Public")):($("#button_share a").removeClass("active"),$("#button_share").attr("title","Make Public"),photo.json.init&&$("#infobox .attr_visibility").html("Private"))},tags:function(){$("#infobox #tags").html(build.tags(photo.json.tags))},photo:function(){lychee.imageview.html(build.imageview(photo.json,photo.isSmall(),visible.controls())),(album.json&&album.json.content&&album.json.content[photo.getID()]&&""===album.json.content[photo.getID()].nextPhoto||lychee.viewMode)&&$("a#next").hide(),(album.json&&album.json.content&&album.json.content[photo.getID()]&&""===album.json.content[photo.getID()].previousPhoto||lychee.viewMode)&&$("a#previous").hide()},infobox:function(){lychee.infobox.html(build.infoboxPhoto(photo.json)).show()}}},visible={albums:function(){return"block"===$("#tools_albums").css("display")?!0:!1},album:function(){return"block"===$("#tools_album").css("display")?!0:!1},photo:function(){return $("#imageview.fadeIn").length>0?!0:!1},search:function(){return null!==search.code&&""!==search.code?!0:!1},infobox:function(){return $("#infobox.active").length>0?!0:!1},infoboxbutton:function(){return visible.albums()?!1:visible.photo()?!0:visible.album()&&$("#button_info_album:visible").length>0?!0:!1},controls:function(){return lychee.loadingBar.css("opacity")<1?!1:!0},message:function(){return $(".message").length>0?!0:!1},signin:function(){return $(".message .sign_in").length>0?!0:!1},contextMenu:function(){return $(".contextmenu").length>0?!0:!1},multiselect:function(){return $("#multiselect").length>0?!0:!1}};
>>>>>>> 436dcfef8c0015af9736662d074d491439b5ca68

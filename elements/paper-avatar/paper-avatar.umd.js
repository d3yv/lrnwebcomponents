!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("crypto"),require("buffer")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/utils/resolve-url.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","crypto","buffer"],e):e(t.PaperAvatar={},t.polymerLegacy_js,t.resolveUrl_js,null,t.crypto,t.buffer)}(this,function(t,e,r,n,i,o){"use strict";function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=i&&i.hasOwnProperty("default")?i.default:i,o=o&&o.hasOwnProperty("default")?o.default:o;var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var h;(function(t){!function(){function e(t){if(t)y[0]=y[16]=y[1]=y[2]=y[3]=y[4]=y[5]=y[6]=y[7]=y[8]=y[9]=y[10]=y[11]=y[12]=y[13]=y[14]=y[15]=0,this.blocks=y,this.buffer8=h;else if(f){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="object"==("undefined"==typeof window?"undefined":s(window))?window:{},n=!r.JS_MD5_NO_NODE_JS&&"object"==("undefined"==typeof process?"undefined":s(process))&&process.versions&&process.versions.node;n&&(r=a);var h,l=!r.JS_MD5_NO_COMMON_JS&&t.exports,f=!r.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,d="0123456789abcdef".split(""),c=[128,32768,8388608,-2147483648],u=[0,8,16,24],p=["hex","array","digest","buffer","arrayBuffer"],y=[];if(f){var b=new ArrayBuffer(68);h=new Uint8Array(b),y=new Uint32Array(b)}var v=function(t){return function(r){return new e(!0).update(r)[t]()}},w=function(t){var e=i,r=o.Buffer;return function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(n.constructor===ArrayBuffer)n=new Uint8Array(n);else if(void 0===n.length)return t(n);return e.createHash("md5").update(new r(n)).digest("hex")}};e.prototype.update=function(t){if(!this.finalized){var e="string"!=typeof t;e&&t.constructor==r.ArrayBuffer&&(t=new Uint8Array(t));for(var n,i,o=0,s=t.length||0,a=this.blocks,h=this.buffer8;s>o;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(f)for(i=this.start;s>o&&64>i;++o)h[i++]=t[o];else for(i=this.start;s>o&&64>i;++o)a[i>>2]|=t[o]<<u[3&i++];else if(f)for(i=this.start;s>o&&64>i;++o)128>(n=t.charCodeAt(o))?h[i++]=n:2048>n?(h[i++]=192|n>>6,h[i++]=128|63&n):55296>n||n>=57344?(h[i++]=224|n>>12,h[i++]=128|n>>6&63,h[i++]=128|63&n):(n=65536+((1023&n)<<10|1023&t.charCodeAt(++o)),h[i++]=240|n>>18,h[i++]=128|n>>12&63,h[i++]=128|n>>6&63,h[i++]=128|63&n);else for(i=this.start;s>o&&64>i;++o)128>(n=t.charCodeAt(o))?a[i>>2]|=n<<u[3&i++]:2048>n?(a[i>>2]|=(192|n>>6)<<u[3&i++],a[i>>2]|=(128|63&n)<<u[3&i++]):55296>n||n>=57344?(a[i>>2]|=(224|n>>12)<<u[3&i++],a[i>>2]|=(128|n>>6&63)<<u[3&i++],a[i>>2]|=(128|63&n)<<u[3&i++]):(n=65536+((1023&n)<<10|1023&t.charCodeAt(++o)),a[i>>2]|=(240|n>>18)<<u[3&i++],a[i>>2]|=(128|n>>12&63)<<u[3&i++],a[i>>2]|=(128|n>>6&63)<<u[3&i++],a[i>>2]|=(128|63&n)<<u[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this}},e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=c[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,this.hash()}},e.prototype.hash=function(){var t,e,r,n,i,o,s=this.blocks;this.first?e=((e=((t=((t=s[0]-680876937)<<7|t>>>25)-271733879<<0)^(r=((r=(-271733879^(n=((n=(-1732584194^2004318071&t)+s[1]-117830708)<<12|n>>>20)+t<<0)&(-271733879^t))+s[2]-1126478375)<<17|r>>>15)+n<<0)&(n^t))+s[3]-1316259209)<<22|e>>>10)+r<<0:(t=this.h0,e=this.h1,r=this.h2,e=((e+=((t=((t+=((n=this.h3)^e&(r^n))+s[0]-680876936)<<7|t>>>25)+e<<0)^(r=((r+=(e^(n=((n+=(r^t&(e^r))+s[1]-389564586)<<12|n>>>20)+t<<0)&(t^e))+s[2]+606105819)<<17|r>>>15)+n<<0)&(n^t))+s[3]-1044525330)<<22|e>>>10)+r<<0),e=((e+=((t=((t+=(n^e&(r^n))+s[4]-176418897)<<7|t>>>25)+e<<0)^(r=((r+=(e^(n=((n+=(r^t&(e^r))+s[5]+1200080426)<<12|n>>>20)+t<<0)&(t^e))+s[6]-1473231341)<<17|r>>>15)+n<<0)&(n^t))+s[7]-45705983)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(n^e&(r^n))+s[8]+1770035416)<<7|t>>>25)+e<<0)^(r=((r+=(e^(n=((n+=(r^t&(e^r))+s[9]-1958414417)<<12|n>>>20)+t<<0)&(t^e))+s[10]-42063)<<17|r>>>15)+n<<0)&(n^t))+s[11]-1990404162)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(n^e&(r^n))+s[12]+1804603682)<<7|t>>>25)+e<<0)^(r=((r+=(e^(n=((n+=(r^t&(e^r))+s[13]-40341101)<<12|n>>>20)+t<<0)&(t^e))+s[14]-1502002290)<<17|r>>>15)+n<<0)&(n^t))+s[15]+1236535329)<<22|e>>>10)+r<<0,e=((e+=((n=((n+=(e^r&((t=((t+=(r^n&(e^r))+s[1]-165796510)<<5|t>>>27)+e<<0)^e))+s[6]-1069501632)<<9|n>>>23)+t<<0)^t&((r=((r+=(t^e&(n^t))+s[11]+643717713)<<14|r>>>18)+n<<0)^n))+s[0]-373897302)<<20|e>>>12)+r<<0,e=((e+=((n=((n+=(e^r&((t=((t+=(r^n&(e^r))+s[5]-701558691)<<5|t>>>27)+e<<0)^e))+s[10]+38016083)<<9|n>>>23)+t<<0)^t&((r=((r+=(t^e&(n^t))+s[15]-660478335)<<14|r>>>18)+n<<0)^n))+s[4]-405537848)<<20|e>>>12)+r<<0,e=((e+=((n=((n+=(e^r&((t=((t+=(r^n&(e^r))+s[9]+568446438)<<5|t>>>27)+e<<0)^e))+s[14]-1019803690)<<9|n>>>23)+t<<0)^t&((r=((r+=(t^e&(n^t))+s[3]-187363961)<<14|r>>>18)+n<<0)^n))+s[8]+1163531501)<<20|e>>>12)+r<<0,e=((e+=((n=((n+=(e^r&((t=((t+=(r^n&(e^r))+s[13]-1444681467)<<5|t>>>27)+e<<0)^e))+s[2]-51403784)<<9|n>>>23)+t<<0)^t&((r=((r+=(t^e&(n^t))+s[7]+1735328473)<<14|r>>>18)+n<<0)^n))+s[12]-1926607734)<<20|e>>>12)+r<<0,e=((e+=((o=(n=((n+=((i=e^r)^(t=((t+=(i^n)+s[5]-378558)<<4|t>>>28)+e<<0))+s[8]-2022574463)<<11|n>>>21)+t<<0)^t)^(r=((r+=(o^e)+s[11]+1839030562)<<16|r>>>16)+n<<0))+s[14]-35309556)<<23|e>>>9)+r<<0,e=((e+=((o=(n=((n+=((i=e^r)^(t=((t+=(i^n)+s[1]-1530992060)<<4|t>>>28)+e<<0))+s[4]+1272893353)<<11|n>>>21)+t<<0)^t)^(r=((r+=(o^e)+s[7]-155497632)<<16|r>>>16)+n<<0))+s[10]-1094730640)<<23|e>>>9)+r<<0,e=((e+=((o=(n=((n+=((i=e^r)^(t=((t+=(i^n)+s[13]+681279174)<<4|t>>>28)+e<<0))+s[0]-358537222)<<11|n>>>21)+t<<0)^t)^(r=((r+=(o^e)+s[3]-722521979)<<16|r>>>16)+n<<0))+s[6]+76029189)<<23|e>>>9)+r<<0,e=((e+=((o=(n=((n+=((i=e^r)^(t=((t+=(i^n)+s[9]-640364487)<<4|t>>>28)+e<<0))+s[12]-421815835)<<11|n>>>21)+t<<0)^t)^(r=((r+=(o^e)+s[15]+530742520)<<16|r>>>16)+n<<0))+s[2]-995338651)<<23|e>>>9)+r<<0,e=((e+=((n=((n+=(e^((t=((t+=(r^(e|~n))+s[0]-198630844)<<6|t>>>26)+e<<0)|~r))+s[7]+1126891415)<<10|n>>>22)+t<<0)^((r=((r+=(t^(n|~e))+s[14]-1416354905)<<15|r>>>17)+n<<0)|~t))+s[5]-57434055)<<21|e>>>11)+r<<0,e=((e+=((n=((n+=(e^((t=((t+=(r^(e|~n))+s[12]+1700485571)<<6|t>>>26)+e<<0)|~r))+s[3]-1894986606)<<10|n>>>22)+t<<0)^((r=((r+=(t^(n|~e))+s[10]-1051523)<<15|r>>>17)+n<<0)|~t))+s[1]-2054922799)<<21|e>>>11)+r<<0,e=((e+=((n=((n+=(e^((t=((t+=(r^(e|~n))+s[8]+1873313359)<<6|t>>>26)+e<<0)|~r))+s[15]-30611744)<<10|n>>>22)+t<<0)^((r=((r+=(t^(n|~e))+s[6]-1560198380)<<15|r>>>17)+n<<0)|~t))+s[13]+1309151649)<<21|e>>>11)+r<<0,e=((e+=((n=((n+=(e^((t=((t+=(r^(e|~n))+s[4]-145523070)<<6|t>>>26)+e<<0)|~r))+s[11]-1120210379)<<10|n>>>22)+t<<0)^((r=((r+=(t^(n|~e))+s[2]+718787259)<<15|r>>>17)+n<<0)|~t))+s[9]-343485551)<<21|e>>>11)+r<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=r-1732584194<<0,this.h3=n+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+n<<0)},e.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,n=this.h3;return d[t>>4&15]+d[15&t]+d[t>>12&15]+d[t>>8&15]+d[t>>20&15]+d[t>>16&15]+d[t>>28&15]+d[t>>24&15]+d[e>>4&15]+d[15&e]+d[e>>12&15]+d[e>>8&15]+d[e>>20&15]+d[e>>16&15]+d[e>>28&15]+d[e>>24&15]+d[r>>4&15]+d[15&r]+d[r>>12&15]+d[r>>8&15]+d[r>>20&15]+d[r>>16&15]+d[r>>28&15]+d[r>>24&15]+d[n>>4&15]+d[15&n]+d[n>>12&15]+d[n>>8&15]+d[n>>20&15]+d[n>>16&15]+d[n>>28&15]+d[n>>24&15]},e.prototype.toString=e.prototype.hex,e.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,n=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255]},e.prototype.array=e.prototype.digest,e.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},e.prototype.buffer=e.prototype.arrayBuffer;var g=function(){var t=v("hex");n&&(t=w(t)),t.create=function(){return new e},t.update=function(e){return t.create().update(e)};for(var r=0;r<p.length;++r){var i=p[r];t[i]=v(i)}return t}();l?t.exports=g:r.md5=g}()})(h={exports:{}},h.exports);function l(){var t,e,r=(t=['\n    <style>\n\t\t\t:host {\n        --paper-avatar-width: 40px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tposition: relative;\n\t\t\t\twidth: var(--paper-avatar-width);\n\t\t\t\theight:  var(--paper-avatar-width);\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tcursor: default;\n\t\t\t\tbackground-color: var(--paper-avatar-color, var(--paper-avatar-bgcolor));\n\t\t\t\t-webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n\t\t\t}\n\t\t\t\n\t\t\t:host > * {\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t\n\t\t\t#label, #img, #jdenticon {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\t\t\t#label {\n\t\t\t\toverflow: hidden;\n\t\t\t\tdisplay: -ms-flexbox;\n\t\t\t\tdisplay: -webkit-flex;\n\t\t\t\tdisplay: flex;\n\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t-webkit-align-items: center;\n\t\t\t\t\t -ms-flex-align: center;\n\t\t\t\t\t \talign-items: center;\n\t\t\t}\n\t\t\t#label span {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tcolor: rgba(255, 255, 255, .8);\n\t\t\t\ttext-transform: capitalize;\n\t\t\t\tfont-family: \'Roboto\', \'Noto\', sans-serif;\n\t\t\t\t-webkit-font-smoothing: antialiased;\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-size: calc(var(--paper-avatar-width) / 1.65);\n\t\t\t}\n\t\t\t#jdenticon {\n\t\t\t\twidth: var(--paper-avatar-width);\n\t\t\t\theight: var(--paper-avatar-width);\n\t\t\t}\n\t\t</style>\n\t\t<div id="label" title="[[label]]"><span>[[_label(label)]]</span></div>\n\t\t<svg id="jdenticon" width="40" height="40">\n      <slot></slot>\n    </svg>\n    <template is="dom-if" if="[[src]]">\n\t\t  <img id="img" src="[[src]]" title="[[label]]" on-load="_onImgLoad" on-error="_onImgError" title="[[color]]">\n    </template>\n  '],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return l=function(){return r},r}var f=e.Polymer({is:"paper-avatar",_template:e.html(l()),properties:{src:{type:String,value:!1},label:{type:String,observer:"_observerLabel"},jdenticonExists:{type:Boolean,value:!1},twoChars:{type:Boolean,value:!1},colors:{type:Array},jdenticon:{type:Boolean,value:!1}},_observerLabel:function(t){t&&(this.jdenticonExists&&this.jdenticon&&(this.$.label.hidden=!0,window.jdenticon.config={lightness:{color:[1,1],grayscale:[1,1]},saturation:1},window.jdenticon.update(this.$.jdenticon,window.md5(t))),this.updateStyles({"--paper-avatar-bgcolor":this._parseColor(t)}))},ready:function(){var t=r.pathFromUrl("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href),e="".concat(t,"lib/jdenticon-1.4.0.min.js");window.addEventListener("es-bridge-".concat("jdenticon","-loaded"),this._jdenticonLoaded.bind(this)),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("jdenticon",e)},_jdenticonLoaded:function(t){this.jdenticonExists=!0,this._observerLabel(this.label)},_label:function(t){if(!t)return"";if(this.twoChars){if(this.label.indexOf(" ")>-1){var e=this.label.match(/\b(\w)/g);return e[0]+e[1]}return t.substring(0,2)}return t.charAt(0)},_onImgLoad:function(t){t.currentTarget.hidden=!1},_onImgError:function(t){t.currentTarget.hidden=!0},_parseColor:function(t){for(var e=this.colors?this.colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#795548","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#9E9E9E","#607D8B"],r=0,n=0;n<t.length;n++)r+=t.charCodeAt(n)<<5;return r>=e.length?e[r%e.length]:e[r]}});t.PaperAvatar=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=paper-avatar.umd.js.map

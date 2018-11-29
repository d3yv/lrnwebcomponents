!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/app-layout/app-layout.js"),require("@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js"),require("@lrnwebcomponents/lrnsys-button/lrnsys-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icons/image-icons.js"),require("@lrnwebcomponents/materializecss-styles/lib/colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/app-layout/app-layout.js","@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js","@lrnwebcomponents/lrnsys-button/lrnsys-button.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icons/image-icons.js","@lrnwebcomponents/materializecss-styles/lib/colors.js"],o):o(e.ImageInspector={},e.polymerLegacy_js)}(this,function(e,o){"use strict";function t(){var e,o,n=(e=['\n    <custom-style>\n      <style include="materializecss-styles-colors">\n        :host {\n          display: block;\n          --image-inspector-background: #dddddd;\n        }\n\n        app-toolbar {\n          width: 90%;\n          background: var(--image-inspector-background);\n          margin: 32px auto;\n          z-index: 1;\n          display: flex;\n          text-align: center;\n          justify-content: space-evenly;\n        }\n\n        lrnsys-button {\n          display: inline-flex;\n        }\n\n        .top {\n          top: 128px;\n        }\n      </style>\n    </custom-style>\n    <app-toolbar>\n      <lrnsys-button alt="Zoom in" icon="zoom-in" on-tap="zoomIn" hover-class="[[hoverClass]]"></lrnsys-button>\n      <lrnsys-button alt="Zoom out" icon="zoom-out" on-tap="zoomOut" hover-class="[[hoverClass]]"></lrnsys-button>\n      <lrnsys-button alt="Rotate right" icon="image:rotate-right" on-tap="rotateRight" hover-class="[[hoverClass]]"></lrnsys-button>\n      <lrnsys-button alt="Rotate left" icon="image:rotate-left" on-tap="rotateLeft" hover-class="[[hoverClass]]"></lrnsys-button>\n      <lrnsys-button alt="Mirror image" icon="image:flip" on-tap="mirrorImage" hover-class="[[hoverClass]]"></lrnsys-button>\n      <lrnsys-button alt="Open in new window" icon="launch" href="[[src]]" target="_blank" hover-class="[[hoverClass]]"></lrnsys-button>\n      <slot name="toolbar"></slot>\n    </app-toolbar>\n    <img-pan-zoom id="img" src="[[src]]"></img-pan-zoom>\n    <slot></slot>\n'],o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));return t=function(){return n},n}var n=o.Polymer({_template:o.html(t()),is:"image-inspector",properties:{degrees:{type:Number,value:0,reflectToAttribute:!0},src:{type:String,reflectToAttribute:!0},hoverClass:{type:String,value:"blue white-text"}},rotateRight:function(){var e=this.$.img;this.degrees+=90,e.style.transform="rotate("+this.degrees+"deg)",e.toggleClass("top")},rotateLeft:function(){var e=this.$.img;this.degrees+=-90,e.style.transform="rotate("+this.degrees+"deg)",e.toggleClass("top")},mirrorImage:function(){var e=this.$.img;"scaleX(1)"===e.style.transform?e.style.transform="scaleX(-1)":e.style.transform="scaleX(1)"},zoomIn:function(){this.$.img.zoomIn()},zoomOut:function(){this.$.img.zoomOut()}});e.ImageInspector=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=image-inspector.umd.js.map

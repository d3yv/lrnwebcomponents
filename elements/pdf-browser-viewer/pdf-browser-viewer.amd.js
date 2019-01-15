define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-button/paper-button.js"],function(_exports,_polymerLegacy,_paperCard,_paperButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PdfBrowserViewer=void 0;function _templateObject_c1caa630184e11e98ce5d1b65a5df4d2(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: none;\n      }\n      :host([file]) {\n        display: inherit;\n      }\n    </style>\n\n    <template is=\"dom-if\" if=\"[[card]]\">\n      <paper-card heading=\"[[heading]]\" elevation=\"[[elevation]]\">\n        <div class=\"card-content\">\n          <object\n            data=\"[[file]]\"\n            type=\"application/pdf\"\n            width=\"[[width]]\"\n            height=\"[[height]]\"\n          >\n            <p>\n              {{notSupportedMessage}}\n              <a href=\"[[file]]\">{{notSupportedLinkMessage}}</a>\n            </p>\n          </object>\n        </div>\n        <div class=\"card-actions\">\n          <paper-button on-click=\"_download\">[[downloadLabel]]</paper-button>\n        </div>\n      </paper-card>\n    </template>\n\n    <template is=\"dom-if\" if=\"[[!card]]\">\n      <object\n        data=\"[[file]]\"\n        type=\"application/pdf\"\n        width=\"[[width]]\"\n        height=\"[[height]]\"\n      >\n        <p>\n          {{notSupportedMessage}}\n          <a href=\"[[file]]\">{{notSupportedLinkMessage}}</a>\n        </p>\n      </object>\n    </template>\n  "]);_templateObject_c1caa630184e11e98ce5d1b65a5df4d2=function _templateObject_c1caa630184e11e98ce5d1b65a5df4d2(){return data};return data}var PdfBrowserViewer=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_c1caa630184e11e98ce5d1b65a5df4d2()),is:"pdf-browser-viewer",properties:{file:{type:String,value:void 0,reflectToAttribute:!0},notSupportedMessage:{type:String,value:"It appears your Web browser is not configured to display PDF files. No worries, just"},notSupportedLinkMessage:{type:String,value:"click here to download the PDF file."},height:{type:String,value:"400px"},width:{type:String,value:"100%"},card:{type:Boolean,value:!1},downloadLabel:{type:String,value:"Download"},elevation:{type:String,value:"1"}},clear:function clear(){this.file=void 0},_download:function _download(){window.location=this.file}});_exports.PdfBrowserViewer=PdfBrowserViewer});
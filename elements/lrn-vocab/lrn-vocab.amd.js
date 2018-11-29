define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js","./lib/lrn-vocab-dialog.js"],function(_exports,_polymerLegacy,_flattenedNodesObserver,_polymerDom,_paperButton,_HAXWiring,_schemaBehaviors,_simpleModal,_lrnVocabDialog){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnVocab=void 0;function _templateObject_25588530f35811e89e2fd533b02b0033(){var data=babelHelpers.taggedTemplateLiteral(["\n  <custom-style>\n    <style is=\"custom-style\">\n      :host {\n        display: inline-flex;\n        --lrn-vocab-border: 1px dashed #ccc;\n      }\n      paper-button {\n        text-transform: none;\n        padding: 0;\n        margin: 0;\n        position: relative;\n        top:0px;\n        border-radius:0;\n        border-bottom: var(--lrn-vocab-border);\n        background:#f5f5f5;\n        @apply --lrn-vocab-button\n      }\n      paper-button:hover {\n        background:#bbdefb;\n        border-bottom: 1px dashed #2196f3;\n        @apply --lrn-vocab-button-hover\n      }\n    </style>\n  </custom-style>\n  <paper-button id=\"button\" noink on-tap=\"openDialog\">[[term]]</paper-button>\n"]);_templateObject_25588530f35811e89e2fd533b02b0033=function _templateObject_25588530f35811e89e2fd533b02b0033(){return data};return data}var LrnVocab=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_25588530f35811e89e2fd533b02b0033()),is:"lrn-vocab",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{term:{type:String,reflectToAttribute:!0}},openDialog:function openDialog(e){var children=_flattenedNodesObserver.FlattenedNodesObserver.getFlattenedNodes(this).filter(function(n){return n.nodeType===Node.ELEMENT_NODE}),c=document.createElement("div");for(var child in children){c.appendChild(children[child].cloneNode(!0))}var evt=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:this.term,elements:{content:c},invokedBy:this.$.button}});this.dispatchEvent(evt)},attached:function attached(){window.simpleModal.requestAvailability();var props={canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Vocab",description:"Vocabulary term",icon:"image:details",color:"red",groups:["Vocab"],handles:[{type:"inline",text:"term"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"term",title:"Term",description:"The word or words to make clickable for more detail.",inputMethod:"textfield",icon:"editor:title",required:!0}],configure:[{property:"term",title:"Term",description:"The word or words to make clickable for more detail.",inputMethod:"textfield",icon:"editor:title",required:!0},{slot:"",title:"Contents",description:"Contents to display in the pop up.",inputMethod:"code-editor",required:!0}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrnVocab=LrnVocab});
import{html,Polymer}from"./node_modules/@polymer/polymer/polymer-legacy.js";import{dom}from"./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js";import"./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js";import"./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js";let MtzMarkedEditor=Polymer({_template:html`
    <style>
      :host {
        display: block;
      }
    </style>

      <slot name="controls"></slot>
      <slot name="textarea"></slot>
      <slot name="footer"></slot>
`,is:"mtz-marked-editor",properties:{autofocus:Boolean,readonly:Boolean,textareaSelector:{type:String,value:"textarea"},__textarea:Object},ready(){this.__bindControlToEditor=this.__bindControlToEditor.bind(this)},attached(){this.addEventListener("register-control",this.__bindControlToEditor);this.__textarea=dom(this).queryDistributedElements("[slot=\"textarea\"]")[0]},detached(){this.removeEventListener("register-control",this.__bindControlToEditor)},getTextarea(){return this.__textarea},getLines(){return this.getContent().split(/(?=\n|\r\n)$/gm)},getContent(){if(typeof this.getTextarea()!==typeof void 0){return this.getTextarea().value}return""},setContent(content){this.getTextarea().value=content},getSelection(textarea=this.getTextarea()){const start=textarea.selectionStart,end=textarea.selectionEnd;return{start,end,length:end-start,text:textarea.value.substring(start,end)}},setSelection(start,end,textarea=this.getTextarea()){textarea.selectionStart=start;textarea.selectionEnd=end},replaceSelection(text,textarea=this.getTextarea(),selection=this.getSelection()){const val=textarea.value;textarea.value=`${val.substr(0,selection.start)}${text}${val.substr(selection.end,val.length)}`},__bindControlToEditor(event){event.stopPropagation();dom(event).rootTarget.__editor=this}});export{MtzMarkedEditor};
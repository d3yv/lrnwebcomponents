!function(A,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-iconset-svg/iron-iconset-svg.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-iconset-svg/iron-iconset-svg.js"],n):n(A.StopNote={},A.polymerLegacy_js)}(this,function(A,n){"use strict";var o=document.createElement("div");function g(){var A,n,o=(A=['\n    <style>\n      :host {\n        display: block;\n        width: auto;\n        --background-color: #f7f7f7;\n        --accent-color: #d32f2f;\n        margin-bottom: 20px;\n      }\n\n      iron-icon {\n        height: 100px;\n        width: 100px;\n      }\n\n      :host([icon="stopnoteicons:stop-icon"]) {\n        --accent-color: #d8261c;\n      }\n\n      :host([icon="stopnoteicons:warning-icon"]) {\n        --accent-color: #ffeb3b;\n      }\n\n      :host([icon="stopnoteicons:confirm-icon"]) {\n        --accent-color: #81c784;\n      }\n\n      :host([icon="stopnoteicons:book-icon"]) {\n        --accent-color: #21a3db;\n      }\n\n      .container {\n        display: flex;\n        width: auto;\n      }\n\n      .message_wrap {\n        border-right: 7px solid var(--accent-color);\n        padding: 10px 25px;\n        flex: 1 1 auto;\n        background-color: var(--background-color);\n      }\n\n      .main_message {\n        font-size: 32px;\n        margin-top: 10px;\n      }\n\n      .secondary_message {\n        margin-top: 5px;\n        font-size: 19.2px;\n        float: left;\n      }\n\n      .link a {\n        margin-top: 5px;\n        font-size: 19.2px;\n        float: left;\n        clear: left;\n        text-decoration: none;\n        color: #2196f3;\n      }\n\n      .link a:hover {\n        color: #1976d2;\n      }\n\n      .svg {\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg_wrap {\n        background-color: var(--accent-color);\n        padding: 5px;\n        width: auto;\n      }\n    </style>\n\n    <div class="container">\n      <div class="svg_wrap">\n        <div class="svg">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </div>\n      </div>\n      <div class="message_wrap">\n        <div class="main_message">[[title]]</div>\n        <div class="secondary_message">\n          <slot name="message"></slot>\n        </div>\n        <template is="dom-if" if="[[url]]">\n          <div class="link">\n            <a href="[[url]]" target$="[[_urlTarget(url)]]">More Information &gt;</a>\n          </div>\n        </template>\n      </div>\n  </div>\n'],(n=['\n    <style>\n      :host {\n        display: block;\n        width: auto;\n        --background-color: #f7f7f7;\n        --accent-color: #d32f2f;\n        margin-bottom: 20px;\n      }\n\n      iron-icon {\n        height: 100px;\n        width: 100px;\n      }\n\n      :host([icon="stopnoteicons:stop-icon"]) {\n        --accent-color: #d8261c;\n      }\n\n      :host([icon="stopnoteicons:warning-icon"]) {\n        --accent-color: #ffeb3b;\n      }\n\n      :host([icon="stopnoteicons:confirm-icon"]) {\n        --accent-color: #81c784;\n      }\n\n      :host([icon="stopnoteicons:book-icon"]) {\n        --accent-color: #21a3db;\n      }\n\n      .container {\n        display: flex;\n        width: auto;\n      }\n\n      .message_wrap {\n        border-right: 7px solid var(--accent-color);\n        padding: 10px 25px;\n        flex: 1 1 auto;\n        background-color: var(--background-color);\n      }\n\n      .main_message {\n        font-size: 32px;\n        margin-top: 10px;\n      }\n\n      .secondary_message {\n        margin-top: 5px;\n        font-size: 19.2px;\n        float: left;\n      }\n\n      .link a {\n        margin-top: 5px;\n        font-size: 19.2px;\n        float: left;\n        clear: left;\n        text-decoration: none;\n        color: #2196f3;\n      }\n\n      .link a:hover {\n        color: #1976d2;\n      }\n\n      .svg {\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg_wrap {\n        background-color: var(--accent-color);\n        padding: 5px;\n        width: auto;\n      }\n    </style>\n\n    <div class="container">\n      <div class="svg_wrap">\n        <div class="svg">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </div>\n      </div>\n      <div class="message_wrap">\n        <div class="main_message">[[title]]</div>\n        <div class="secondary_message">\n          <slot name="message"></slot>\n        </div>\n        <template is="dom-if" if="[[url]]">\n          <div class="link">\n            <a href="[[url]]" target\\$="[[_urlTarget(url)]]">More Information &gt;</a>\n          </div>\n        </template>\n      </div>\n  </div>\n'])||(n=A.slice(0)),Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(n)}})));return g=function(){return o},o}o.setAttribute("style","display: none;"),o.innerHTML='<iron-iconset-svg size="24" name="stopnoteicons">\n    <svg>\n        <g id="stop-icon">\n            <polygon points="16.59 0.54 7.07 0.54 0.33 7.28 0.33 16.81 7.07 23.54 16.59 23.54 23.33 16.81 23.33 7.28 16.59 0.54" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px"></polygon>\n            <polygon points="16.2 1.5 7.46 1.5 1.29 7.68 1.29 16.41 7.46 22.58 16.2 22.58 22.37 16.41 22.37 7.68 16.2 1.5" style="fill:#d8261c"></polygon>\n            <path d="M2.93,12.39l1-.11C4,13,4.35,13.42,5,13.42a1,1,0,0,0,.7-.23.77.77,0,0,0,.26-.58.65.65,0,0,0-.09-.35A.69.69,0,0,0,5.55,12a8.28,8.28,0,0,0-.89-.3,3.07,3.07,0,0,1-.92-.42,1.56,1.56,0,0,1-.46-.58,1.87,1.87,0,0,1,.05-1.66,1.48,1.48,0,0,1,.61-.58,2.13,2.13,0,0,1,1-.2,1.85,1.85,0,0,1,1.34.46,1.9,1.9,0,0,1,.51,1.34l-1,.05a1.07,1.07,0,0,0-.27-.67.9.9,0,0,0-.62-.19,1,1,0,0,0-.61.17.49.49,0,0,0-.21.41.52.52,0,0,0,.19.41,2.75,2.75,0,0,0,.9.36,3.87,3.87,0,0,1,1.07.45,1.51,1.51,0,0,1,.5.62,2,2,0,0,1,.18.9,1.85,1.85,0,0,1-.48,1.3,1.88,1.88,0,0,1-1.49.53C3.73,14.43,3.06,13.75,2.93,12.39Z" style="fill:#fff"></path>\n            <path d="M8.81,14.33V9.4H7.37v-1h3.86v1H9.79v4.93Z" style="fill:#fff"></path>\n            <path d="M11.55,11.4a4.21,4.21,0,0,1,.32-1.75,2.31,2.31,0,0,1,.82-1,2.14,2.14,0,0,1,1.23-.34,2.09,2.09,0,0,1,1.7.8,3.47,3.47,0,0,1,.66,2.27,3.52,3.52,0,0,1-.7,2.33,2.05,2.05,0,0,1-1.66.74,2.06,2.06,0,0,1-1.67-.73A3.53,3.53,0,0,1,11.55,11.4Zm1,0A2.5,2.5,0,0,0,13,12.89a1.15,1.15,0,0,0,1.92,0,2.56,2.56,0,0,0,.39-1.56,2.53,2.53,0,0,0-.38-1.53,1.15,1.15,0,0,0-1-.5,1.16,1.16,0,0,0-1,.5A2.51,2.51,0,0,0,12.57,11.36Z" style="fill:#fff"></path>\n            <path d="M17.05,14.33V8.39h1.58a4.52,4.52,0,0,1,1.15.09,1.3,1.3,0,0,1,.72.58,2.14,2.14,0,0,1,.28,1.16,2.21,2.21,0,0,1-.24,1.08,1.38,1.38,0,0,1-.61.61,3.09,3.09,0,0,1-1.26.18H18v2.24ZM18,9.4v1.68h.54a2.5,2.5,0,0,0,.75-.07.66.66,0,0,0,.32-.28.85.85,0,0,0,.13-.49,1,1,0,0,0-.13-.5.7.7,0,0,0-.32-.28,3.41,3.41,0,0,0-.81-.06Z" style="fill:#fff"></path>\n        </g>\n        <g id="warning-icon">\n            <polygon points="11.8 22.5 23.06 3 0.55 3 11.8 22.5" style="fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px"></polygon>\n            <polygon points="11.8 20.38 21.33 3.88 2.28 3.88 11.8 20.38" style="fill:#ffeb3b"></polygon>\n            <text transform="translate(9.89 15.38)" style="font-size:14px;font-family:ArialNarrow-Bold, Arial Narrow;font-weight:700">!</text>\n        </g>\n        <g id="confirm-icon">\n            <circle cx="12.11" cy="12.53" r="11" style="fill:#fff;stroke:#000;stroke-width:0.25px"></circle>\n            <circle cx="12.11" cy="12.53" r="10" style="fill:#81c784"></circle>\n            <polygon points="8.37 16 5.48 12.63 4.54 13.44 7.43 16.81 8.4 17.93 9.34 17.13 19.68 8.26 18.71 7.13 8.37 16"></polygon>\n        </g>\n        <g id="book-icon">\n            <circle cx="12.05" cy="12.24" r="11" style="fill:#fff;stroke:#000;stroke-width:0.25px"></circle>\n            <circle cx="12.05" cy="12.24" r="10" style="fill:#21a3db"></circle>\n            <image width="800" height="800" transform="translate(4.13 4.13) scale(0.02)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMDFUMDk6MTQ6MTctMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA4LTAxVDA5OjQyOjIwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA4LTAxVDA5OjQyOjIwLTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmEzM2YyMjA1LWI2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yNiEB0BEgAC0hMhYhAdATIAAXEOIXEt4AFxEgABcS4i0hAfAxf66+gMAcLvdDMYFP2OAAbgBARiH25BzCA+AgQgQgPEIkWMID4AB+StYAOMyQL/Ozw5gUG5AAMbmNuQ5wgNgcG5AAOZgsP6enxHABB6+Abnf76tv7P7vIjA6tyEfW/18Ak4Uj7ir71cPnU9uQADms/oB9gw/C4DJCBCAORm8/QwApiRAAOa18wC+83cHmJp/BQtgbrv9XojwAJicGxCANewwmO/wHQGWJ0AA1rHygL7ydwPYigABWMuKg/qK3wlgWwIEYD0rDewrfRcAbgIEYFUrDO4rfAcA/iBAANY16wB/v8372QH4hgABWNtsw/xMnxWAFwgQgD3MMNjP8BkB+CEBArCPkQf8kT8bAAcSIAB7GXHQH/EzAXASAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAAAZAQIAAGQECAAAkBEgAABARoAAAACZv6/+AJt6u/oD/OJ+9QcAALYz0ixETIAw0gYghgDgPCOd+WxMgDCSozdGQQPAzAQDSxIgrOwnG7d4AeAIIgL+IEDgY88eGIIFYA+CAn5IgMAxnjmQxArAWEQFhAQI9B456EQKwDHEBQxGgMCYvjswBQrAPwQGTEaAwJy+OnDFCbAakQELESCwns8OamECjE5owAYECOxDmACjEBqwMQECCBPgLEID+A8BAnzmo8FBlACfERvAQwQI8AxRAtxuYgP4AQEC/NSfg4gggfUIDuAwAgQ4mlsSmJvYAE4lQICCWxIYl+AAUgIEuIIggesIDuBSAgQYwa8DkRiB44kOYBgCBBiN2xH4OcEBDEuAAKNzOwKPER3AFAQIMBMxAr8THcB0BAgwKzHCrkQHMDUBAqxAjLA60QEsQ4AAqxEjrEJ0AEsSIMDKxAizER3A8gQIsAsxwqhEB7AVAfIvA8nXHJCs5H09e++5kn2VFdlX+ZYA4VFXbygOas7gVoSavYyz2csYngBhFkduqAYAPuJWhDPZd/iKfYetCBB29OpGb4DYg1sRjmLP2I89Ax4gQOBxzx4sho/5uRXhFd79dXj34QQCBM7z6MFlWBmfEOER3uV5eJfhQgIErvfIQWiwGYO/nsWfvJvj8W7C4AQIzOGrA9UAdA23Invz3l3LewcTEyAwP3FyLSGyF+9UxzsFixIgsLbPDnBD1PGEyNq8M+fxzsBmBAjsSZicx++JrMP7cCzvA3C73QQI8LuPBgRD2OvciszJmv85ax74lAABviNKfk6IzMG6fo11DTxFgACvECWvESJjsnYfZ+0CPyZAgKP8OZgY6j4nRMZgjX7PGgUOJ0CAswiS7wmRa1iLn7MWgdMJEKAiSD4nRBrW3H9Zc0BOgABX+XXwMRj+Q4icw/r6nfUFXEqAACNwO/I7IXKM3dfRO+sIGIoAAUbkduQfQuQ1O6+Zd9YMMCwBAoxOjAiRR+26Pt5ZH8AUBAgwk91jRIh8bMe18M5aAKYjQIBZ7RwjQuQfuz33d7s/d2ByAgRYwa4xsmuI7PSM3+32jIGFCRBgNTvGyNttnwF1l2d6u+3zTIHNCBBgZe8D3A5D6+q3ITs8w3erPkOA2+0mQIA97HQrslqIrP683q3yvAC+JUCA3exyKzJ7iKz+fN7N+nwAXiZAgF3tcisyW4is/CzezfIsAE7xdr8/vA/aMIHVpcPv29sOs/a4njj/Dvsj6z8QIPbQweYGBOBfu9yK0BEdAH8QIAAf2+V3RTiH8AD4hAAB+JoQ4RnCA+AbAgTgMUKErwgPgAcJEIDn+D0R3okOgBcIEIDXuRXZk/AA+AEBAvBzQmQPwgPgAAIE4DhCZE3CA+BAAgTgeEJkDcID4AQCBOA8QmROwgPgRAIE4HxCZA7CAyAgQAA6/gnf8YgOgNhfV38AgE0ZfK/nGQBc4O1+t/8CAAANNyAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAABkBAgAAZAQIAACQESAAAEBGgAAAAJn/AUIRI9pSsAqtAAAAAElFTkSuQmCC"></image>\n        </g>\n    </svg>\n</iron-iconset-svg>',document.head.appendChild(o);var e=n.Polymer({_template:n.html(g()),is:"stop-note",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],observers:["_iconChanged(icon)"],properties:{title:{type:String,value:"Title",reflectToAttribute:!0},url:{type:String,value:null,reflectToAttribute:!0},icon:{type:String,value:"stopnoteicons:stop-icon",reflectToAttribute:!0}},_iconChanged:function(A){this.updateStyles()},_urlTarget:function(A){if(A&&this._outsideLink(A))return"_blank";return!1},_outsideLink:function(A){if(0!=A.indexOf("http"))return!1;var n=location.href,o=location.pathname,g=n.substring(0,n.indexOf(o));return 0!=A.indexOf(g)},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Stop Note",description:"A message to alert readers to specific directions.",icon:"icons:report",color:"orange",groups:["Video","Media"],handles:[{type:"text",title:"label"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"url",title:"URL",description:"Enter an external url.",inputMethod:"textfield",required:!0}],configure:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"url",title:"URL",description:"Enter an external url.",inputMethod:"textfield",required:!0},{slot:"message",title:"Message",description:"Enter a message for stop-note.",inputMethod:"code-editor",required:!0},{property:"icon",title:"Action Icon",description:"Icon used for stop-note",inputMethod:"iconpicker",options:["stopnoteicons:stop-icon","stopnoteicons:warning-icon","stopnoteicons:confirm-icon","stopnoteicons:book-icon"]}],advanced:[]}})}});A.StopNote=e,Object.defineProperty(A,"__esModule",{value:!0})});
//# sourceMappingURL=stop-note.umd.js.map

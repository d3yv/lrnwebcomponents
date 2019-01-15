define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/web-map/web-map.js"],function(_exports,_polymerLegacy,_materializecssStyles,_HAXWiring,_schemaBehaviors,_webMap){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.MapElement=void 0;function _templateObject_96a755f0185011e9949e89f207f76ed2(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <map\n      is=\"web-map\"\n      zoom=\"17\"\n      lat=\"45.398043\"\n      lon=\"-75.70683\"\n      width=\"700\"\n      height=\"400\"\n      controls=\"\"\n    >\n      <layer-\n        id=\"osm\"\n        src=\"https://geogratis.gc.ca/mapml/en/osmtile/osm/\"\n        label=\"Open Street Map\"\n        checked=\"\"\n        hidden=\"\"\n      ></layer->\n      <layer-\n        id=\"cbmt\"\n        src=\"https://geogratis.gc.ca/mapml/en/osmtile/cbmt/\"\n        label=\"Canada Base Map\"\n      ></layer->\n      <layer-\n        id=\"canvec\"\n        src=\"https://geogratis.gc.ca/api/beta/vectors/canvec/50k/features/\"\n        label=\"CanVec+ 031G\"\n        class=\"transparency\"\n      ></layer->\n      <layer- id=\"marker\" label=\"Marker layer\" src=\"marker.mapml\"></layer->\n      <area\n        is=\"map-area\"\n        id=\"marker2\"\n        href=\"https://example.com/marker/\"\n        alt=\"Marker\"\n        coords=\"265,185\"\n        shape=\"marker\"\n      />\n      <area\n        is=\"map-area\"\n        id=\"line\"\n        href=\"https://example.com/line/\"\n        alt=\"Line\"\n        coords=\"275,275,540,107\"\n        shape=\"line\"\n      />\n      <area\n        is=\"map-area\"\n        id=\"doughnut\"\n        alt=\"Circle\"\n        href=\"https://example.com/circle/\"\n        coords=\"250,250,25\"\n        shape=\"circle\"\n        style=\"fill: white; stroke: aqua; stroke-width: 5px;fill-opacity: 0.0\"\n      />\n      <area\n        is=\"map-area\"\n        id=\"hole\"\n        coords=\"250,250,7\"\n        shape=\"circle\"\n        style=\"fill: blue; stroke: none;fill-opacity: 0.3;\"\n      />\n      <area\n        is=\"map-area\"\n        id=\"rect\"\n        href=\"https://example.com/rectangle/\"\n        alt=\"Rectangle\"\n        coords=\"345,290,415,320\"\n        shape=\"rect\"\n        style=\"fill: greenyellow; stroke: blue; stroke-width: 3px;fill-opacity: 0.4\"\n      />\n      <area\n        is=\"map-area\"\n        id=\"poly\"\n        href=\"https://example.com/polygon/\"\n        alt=\"Polygon\"\n        coords=\"392,116,430,100,441,128,405,145\"\n        shape=\"poly\"\n        style=\"fill: pink; stroke: blue; stroke-width: 3px;fill-opacity: 0.4\"\n      />\n    </map>\n  "]);_templateObject_96a755f0185011e9949e89f207f76ed2=function _templateObject_96a755f0185011e9949e89f207f76ed2(){return data};return data}var MapElement=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_96a755f0185011e9949e89f207f76ed2()),is:"map-element",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],properties:{title:{type:String}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sample gizmo",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}};this.setHaxProperties(props)}});_exports.MapElement=MapElement});
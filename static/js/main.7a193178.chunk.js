(this.webpackJsonpdata_creator=this.webpackJsonpdata_creator||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(10),i=a.n(r),s=(a(16),a(3)),u=(a(17),a(4)),l=a(2),j=(a(18),function(e,t,a){var n=e.slice(0);return n[t]=a,n}),o=a(0),b=function e(t){var a=t.field,n=t.label,c=t.aboveSchema,r=t.setAboveSchema,i=t.index,s=t.objectDepth,u=t.arrayDepth,b=function(e){return r(j(c,i,Object(l.a)(Object(l.a)({},a),{},{children:e})))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"type",children:n}),Object(o.jsxs)("select",{type:"text",id:"type",name:"type",value:a.type,onChange:function(e){"array"===e.target.value?r(j(c,i,Object(l.a)(Object(l.a)({},a),{},{type:e.target.value,children:[{key:0,type:"string"}]}))):"object"===e.target.value?r(j(c,i,Object(l.a)(Object(l.a)({},a),{},{type:e.target.value,children:[{key:"YOUR_KEY",type:"string"}]}))):r(j(c,i,Object(l.a)(Object(l.a)({},a),{},{type:e.target.value})))},children:[Object(o.jsx)("option",{value:"string",children:"String"}),Object(o.jsx)("option",{value:"number",children:"Number"}),Object(o.jsx)("option",{value:"boolean",children:"Boolean"}),u>0&&Object(o.jsx)("option",{value:"array",children:"Array"}),s>0&&Object(o.jsx)("option",{value:"object",children:"Object"}),Object(o.jsx)("option",{value:"uuid",children:"Uuid"})]}),"array"===a.type&&Object(o.jsx)(e,{arrayDepth:u-1,objectDepth:s,index:0,setAboveSchema:b,aboveSchema:a.children,field:a.children[0],label:"Of: "}),"object"===a.type&&Object(o.jsx)(h,{arrayDepth:u,objectDepth:s-1,schema:a.children,setSchema:b})]})},h=function(e){var t=e.schema,a=e.setSchema,n=e.objectDepth,c=e.arrayDepth;return Object(o.jsxs)("div",{className:"schema-object",children:[t.map((function(e,r){return Object(o.jsxs)("div",{className:"schema-input-container",children:[Object(o.jsx)("button",{onClick:function(){return e=r,console.log(e),void a(t.filter((function(t,a){return a!==e})));var e},children:"---"}),Object(o.jsx)("label",{htmlFor:"key",children:"Key: "}),Object(o.jsx)("input",{className:"schema-input",type:"text",id:"key",name:"key",value:e.key,onChange:function(n){return function(e){return function(n,c){var r=Object(l.a)(Object(l.a)({},c),{},{key:e.target.value});a(j(t,n,r))}}(n)(r,e)}}),Object(o.jsx)(b,{objectDepth:n,arrayDepth:c,index:r,setAboveSchema:a,aboveSchema:t,field:e,label:"Type: "})]},e+r)})),Object(o.jsx)("button",{onClick:function(){a([].concat(Object(u.a)(t),[{key:"YOUR_KEY_"+(t.length+1),type:"string",value:""}]))},children:"Add"})]})},d=function(e){var t=e.schema,a=e.setSchema;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Create your schema"}),Object(o.jsx)(h,{schema:t,setSchema:a,objectDepth:4,arrayDepth:4})]})},O=function(e){return Array.isArray(e)?"array":"string"===typeof e?e.match(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/)?"uuid":"string":typeof e},y=a(25),p=function(e){var t,a=function(e){switch(O(e)){case"array":return[];case"object":return{};case"string":return"";case"number":return 0;case"boolean":return!1;case"uuid":return Object(y.a)()}};if("array"===O(e))t=Object(u.a)(e);else{if("object"!==O(e))return a(e);t=Object(l.a)({},e)}return function e(t,n){switch(O(t)){case"object":Object.keys(t).forEach((function(c){n[c]=a(t[c]),e(t[c],n[c])}));break;case"array":t.forEach((function(c,r){n[r]=a(t[r]),e(c,n[r])}));break;default:n=a(t)}}(e,t),t},x=(a(20),function(e){var t=e.data,a=e.setData;return Object(o.jsx)("div",{className:"rel",children:Object(o.jsxs)("div",{className:"input-array",children:[t.map((function(e,n){return Object(o.jsx)(k,{data:e,setData:(c=n,function(e){return a(j(t,c,e))})},n);var c})),Object(o.jsx)("button",{className:"add-to-array",onClick:function(){var e=p(t[0]);a([].concat(Object(u.a)(t),[e]))},children:"+"})]})})}),f=a(8),m=function(e){e.type;var t=e.labelKey;e.of;return Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:[t,":\xa0"]})})},v=(a(21),function(e){var t=e.data,a=e.setData,n=function(e){return function(n){return a(Object(l.a)(Object(l.a)({},t),{},Object(f.a)({},e,n)))}};return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("div",{className:"rel",children:Object(o.jsx)("div",{className:"input-object",children:Object.keys(t).map((function(e,a){return Object(o.jsxs)("div",{className:"object-label",children:[Object(o.jsx)("div",{className:"label",children:Object(o.jsx)(m,{type:O(t[e]),labelKey:e})}),Object(o.jsx)(k,{data:t[e],setData:n(e)})]},a)}))})})})}),g=(a(22),function(e){var t=e.value,a=e.setData,n=function(e){switch(O(t)){case"number":a(Number(e.target.value));break;case"boolean":a("true"===e.target.value);break;default:a(e.target.value)}};return Object(o.jsxs)("div",{children:["string"===O(t)&&Object(o.jsx)("input",{className:"single-input",value:t,type:"text",onChange:n}),"number"===O(t)&&Object(o.jsx)("input",{className:"single-input",value:t,type:"number",onChange:n}),"uuid"===O(t)&&Object(o.jsx)("input",{className:"single-input",type:"text",readOnly:!0,value:t}),"boolean"===O(t)&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"false",children:"False"}),Object(o.jsx)("input",{type:"radio",id:"false",value:"false",checked:!t,onChange:n}),Object(o.jsx)("label",{htmlFor:"true",children:"True"}),Object(o.jsx)("input",{type:"radio",id:"true",value:"true",checked:t,onChange:n})]})]})}),k=function(e){var t=e.data,a=e.setData;return Object(o.jsxs)("div",{children:["object"===O(t)&&Object(o.jsx)(v,{data:t,setData:a}),"array"===O(t)&&Object(o.jsx)(x,{data:t,setData:a}),"object"!==O(t)&&"array"!==O(t)&&Object(o.jsx)(g,{value:t,setData:a})]})},D=function(e,t){var a={},n=function(e){switch(e.type){case"string":return"";case"number":return 0;case"boolean":return!1;case"uuid":return Object(y.a)();case"array":return[];case"object":return{}}},c=Boolean(t),r=function(e,t){return function(e,t){return e!==O(t)}(e.type,t)?n(e):t[e.key]};return function e(t,a){t.forEach((function(t){"array"===t.type||"object"===t.type?(a[t.key]=c?r(t,a[t.key]):n(t),e(t.children,a[t.key])):a[t.key]=r(t,a[t.key])}))}(e,a),a},N=function(e){var t=e.schema,a=e.setData,n=e.newData,c=e.setNewData;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Your inputs"}),Object(o.jsx)("button",{onClick:function(){return c(D(t,n))},children:"Clear All"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a((function(e){return[].concat(Object(u.a)(e),[n])})),c(D(t,n))},children:[Object(o.jsx)(k,{data:n,setData:c}),Object(o.jsx)("input",{type:"submit",value:"Add to data array"})]})]})},S=(a(23),a(5)),w=a.n(S),C=function(e){var t=e.newData,a=Object(n.useState)(50),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(o.jsxs)("div",{className:"output-container",children:[Object(o.jsx)("h1",{children:"Output"}),Object(o.jsx)("label",{htmlFor:"line-length",children:"Line length"}),Object(o.jsx)("input",{type:"range",id:"line-length",max:50,min:0,value:r,onChange:function(e){return i(Number(e.target.value))}}),Object(o.jsx)("button",{onClick:function(){navigator.clipboard.writeText(w()(t,null,2,r))},children:"Copy"}),Object(o.jsx)("textarea",{className:"output-area",readOnly:!0,cols:"30",value:w()(t,null,2,r),rows:"30"})]})},A=[{key:"id",type:"uuid"},{key:"title",type:"string"},{key:"room",type:"number"},{key:"igen-e?",type:"boolean"},{key:"time",type:"object",children:[{key:"hour",type:"number"},{key:"min",type:"number"}]},{key:"pics",type:"array",children:[{key:0,type:"string"}]},{key:"arrayInArray",type:"array",children:[{key:0,type:"array",children:[{key:0,type:"number"}]}]},{key:"objInArray",type:"array",children:[{key:0,type:"object",children:[{key:"qwe",type:"number"},{key:"asd",type:"string"}]}]}],F=function(e){var t=e.data,a=Object(n.useState)(50),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(o.jsxs)("div",{className:"output-container",children:[Object(o.jsx)("h1",{children:"Output"}),Object(o.jsx)("label",{htmlFor:"line-length",children:"Line length"}),Object(o.jsx)("input",{type:"range",id:"line-length",max:50,min:0,value:r,onChange:function(e){return i(Number(e.target.value))}}),Object(o.jsx)("button",{onClick:function(){navigator.clipboard.writeText(w()(t,null,2,r))},children:"Copy"}),Object(o.jsx)("textarea",{className:"output-area",readOnly:!0,cols:"30",value:w()(t,null,2,r),rows:"30"})]})};var E=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),u=i[0],l=i[1],j=Object(n.useState)(A),b=Object(s.a)(j,2),h=b[0],O=b[1],y=Object(n.useState)(null),p=Object(s.a)(y,2),x=p[0],f=p[1],m=Object(n.useState)([]),v=Object(s.a)(m,2),g=v[0],k=v[1];return Object(n.useEffect)((function(){f((function(e){return D(h,e)}))}),[h]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsxs)("div",{className:"flex-container",children:[a?Object(o.jsx)(N,{schema:h,setData:k,newData:x,setNewData:f}):Object(o.jsx)(d,{schema:h,setSchema:O}),Object(o.jsx)("button",{onClick:function(){c(!a)},children:a?"<-- Back to the schema":"Show me my inputs --\x3e"})]}),Object(o.jsxs)("div",{className:"flex-container",children:[u?Object(o.jsx)(F,{data:g}):Object(o.jsx)(C,{newData:x}),Object(o.jsx)("button",{onClick:function(){l(!u)},children:u?"<-- Show current data":"Show the data array --\x3e"})]})]})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7a193178.chunk.js.map
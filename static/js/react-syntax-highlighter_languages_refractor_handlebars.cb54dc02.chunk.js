"use strict";(self.webpackChunktableformats=self.webpackChunktableformats||[]).push([[3846,3047],{4490:(e,a,n)=>{var t=n(595);function s(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=s,s.displayName="handlebars",s.aliases=["hbs"]},595:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,r){if(n.language===t){var o=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"===typeof r&&!r(e))return e;for(var s,l=o.length;-1!==n.code.indexOf(s=a(t,l));)++l;return o[l]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,r=Object.keys(n.tokenStack);!function o(l){for(var i=0;i<l.length&&!(s>=r.length);i++){var u=l[i];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=r[s],g=n.tokenStack[c],p="string"===typeof u?u:u.content,f=a(t,c),d=p.indexOf(f);if(d>-1){++s;var k=p.substring(0,d),b=new e.Token(t,e.tokenize(g,n.grammar),"language-"+t,g),h=p.substring(d+f.length),m=[];k&&m.push.apply(m,o([k])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof u?l.splice.apply(l,[i,1].concat(m)):u.content=m}}else u.content&&o(u.content)}return l}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.cb54dc02.chunk.js.map
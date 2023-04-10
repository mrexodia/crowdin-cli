"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[3978],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(t),u=a,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const o={},i="crowdin tm upload",p={unversionedId:"commands/crowdin-tm-upload",id:"commands/crowdin-tm-upload",title:"crowdin tm upload",description:"Description",source:"@site/docs/commands/crowdin-tm-upload.md",sourceDirName:"commands",slug:"/commands/crowdin-tm-upload",permalink:"/crowdin-cli/commands/crowdin-tm-upload",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/commands/crowdin-tm-upload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin tm list",permalink:"/crowdin-cli/commands/crowdin-tm-list"},next:{title:"crowdin tm download",permalink:"/crowdin-cli/commands/crowdin-tm-download"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Notes",id:"notes",level:2}],c={toc:m},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crowdin-tm-upload"},"crowdin tm upload"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Upload translation memory to localization resources"),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"crowdin tm upload <file> [CONFIG OPTIONS] [OPTIONS]\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"<","file",">"),(0,a.kt)("br",{parentName:"p"}),"\n","File to upload"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--first-line-contains-header"),(0,a.kt)("br",{parentName:"p"}),"\n","Defines whether the file contains the first-row header that shouldn\u2019t be\nimported (used only for CSV or XLS/XLSX files)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),(0,a.kt)("br",{parentName:"p"}),"\n","Show this help message and exit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--id"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Translation memory identifier"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--language"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Translation Memory language identifier"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--name"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Translation memory name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,a.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,a.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--scheme"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Defines data columns scheme (required for CSV or XLS/XLSX files)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,a.kt)("br",{parentName:"p"}),"\n","Provide more information on the command execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--version"),(0,a.kt)("br",{parentName:"p"}),"\n","Print version information and exit"),(0,a.kt)("h2",{id:"config-options"},"Config Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"To form the scheme for your CSV or XLS/XLSX glossary file, use the\nfollowing constants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"{language_code}")," \u2013 Column contains translation memory elements for\nthe specified language.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"{column_number}")," \u2013 Column number.Numbering starts from 0."))),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"{language_code}")," \u2013 Language code for the specified language.See\nthe full list of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.crowdin.com/language-codes"},"Supported\nLanguages"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--first-line-contains-header")," \u2013 used to skip the import of the first\nrow (header)."))}d.isMDXComponent=!0}}]);
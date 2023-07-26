"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[5099],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={},i="crowdin download",p={unversionedId:"commands/crowdin-download",id:"commands/crowdin-download",title:"crowdin download",description:"Description",source:"@site/docs/commands/crowdin-download.md",sourceDirName:"commands",slug:"/commands/crowdin-download",permalink:"/crowdin-cli/commands/crowdin-download",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-download.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin upload translations",permalink:"/crowdin-cli/commands/crowdin-upload-translations"},next:{title:"crowdin download sources",permalink:"/crowdin-cli/commands/crowdin-download-sources"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Notes",id:"notes",level:2}],s={toc:d},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crowdin-download"},"crowdin download"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Download the latest translations from Crowdin to the specified place"),(0,r.kt)("h2",{id:"synopsis"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"crowdin (download|pull) [CONFIG OPTIONS] [OPTIONS]\n")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"crowdin-download-bundle"},(0,r.kt)("strong",{parentName:"a"},"bundle")),(0,r.kt)("br",{parentName:"p"}),"\n","Download bundle from Crowdin"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"crowdin-download-sources"},(0,r.kt)("strong",{parentName:"a"},"sources")),(0,r.kt)("br",{parentName:"p"}),"\n","Download sources from Crowdin to the specified place"),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--branch"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Specify branch name. Default: none"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-match"),(0,r.kt)("br",{parentName:"p"}),"\n","Ignore warning message about a configuration change"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-l"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--language"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Download translations for the specified language. Can be specified\nmultiple times"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--exclude-language"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Skip the language during download. Can be specified multiple times"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--pseudo"),(0,r.kt)("br",{parentName:"p"}),"\n","Download pseudo-localized translation files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--skip-untranslated-strings"),(0,r.kt)("br",{parentName:"p"}),"\n","Skip untranslated strings in exported files (does not work with .docx,\n.html, .md and other document files)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--skip-untranslated-files"),(0,r.kt)("br",{parentName:"p"}),"\n","Omit downloading not fully translated files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--export-only-approved"),(0,r.kt)("br",{parentName:"p"}),"\n","Include approved translations only in exported files. If not combined\nwith --skip-untranslated-strings option, strings without approval are\nfulfilled with the source language"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--keep-archive"),(0,r.kt)("br",{parentName:"p"}),"\n","Do not remove the downloaded archive with translations after it\u2019s\nextracting"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--all"),(0,r.kt)("br",{parentName:"p"}),"\n","Download files even if local sources are missing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--version"),(0,r.kt)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),(0,r.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,r.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,r.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,r.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--dryrun"),(0,r.kt)("br",{parentName:"p"}),"\n","Print a command output without execution"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--tree"),(0,r.kt)("br",{parentName:"p"}),"\n","List contents of directories in a tree-like format in dryrun mode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--plain"),(0,r.kt)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,r.kt)("h2",{id:"config-options"},"Config Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Numeric ID of the project"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--source"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Path to the source files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--translation"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Path to the translation files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--dest"),"=",(0,r.kt)("em",{parentName:"p"},"\u2026"),(0,r.kt)("br",{parentName:"p"}),"\n","Specify file name in Crowdin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--[no-]preserve-hierarchy"),(0,r.kt)("br",{parentName:"p"}),"\n","Choose whether to save the directory hierarchy in the Crowdin project"),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-l"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--language=language_code")," - defines the language translations\nthat should be downloaded from Crowdin. By default, translations are\ndownloaded for all project\u2019s target languages. ",(0,r.kt)("a",{parentName:"li",href:"https://developer.crowdin.com/language-codes/"},"Crowdin Language\nCodes"),".")))}c.isMDXComponent=!0}}]);
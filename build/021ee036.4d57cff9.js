(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),o=(t(0),t(143)),a={title:"Configuring JS script"},c={id:"en/sdk",isDocsHomePage:!1,title:"Configuring JS script",description:"Script initialization",source:"@site/docs/en/sdk.md",permalink:"/en/sdk",sidebar:"en",previous:{title:"Collecting feed subscriptions",permalink:"/en/feed_collect"},next:{title:"Setting up a carousel of redirections",permalink:"/en/feed_carosule"}},l=[{value:"Script initialization",id:"script-initialization",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"script-initialization"},"Script initialization"),Object(o.b)("p",null,"If you are confident enough with Javascript, you can initialize the Push flow API yourself. Otherwise, use the script constructor on the Feeds page."),Object(o.b)("h4",{id:"pushflowinit-options"},"Pushflow.init() options:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'PushflowSDK.init({\n  failedUrl: "https://failedurl.com",\n  allowUrl: "https://allowUrl.com",\n  denyUrls: ["https://denyUrls.com", "https://1.denyUrls.com", "https://2.denyUrls.com"],\n  vapidPublic: "vapidpublic",\n  feedId: "1",\n  subscribeOnPageLoad: false,\n  subscribeOnPageLoadDelay: 2000,\n  isDebug: false,\n  onSuccessCallback: function() {},\n  onFailedCallback: function() {},\n  onDeniedCallback: function() {},\n  workerPath: "/sw-pushflownet.js",\n  widgets: {\n    isShowDialog: true,\n    dialogOptions: {\n      position: \'top-center\',\n      isLockBackground: false,\n      delay: 300,\n      title: "We\'d like to show you notifications for the latest updates",\n      text: "",\n      subscribeButton: "Allow",\n      cancelButton: "Cancel",\n      icon: "https://yourdomain.com/icon.png",\n    },\n    isLockBackground: false,\n    lockBackgroundOptions: {\n      isShowText: true,\n      text: ""\n    },\n    isShowNotification: false,\n    showNotificationOptions: {\n      title: "Success"\n    },\n    isShowBubble: false,\n    bubbleOptions: {\n      text: "New Message Request",\n      icon: "https://yourdomain.com/icon.png",\n      delay: 500\n    }\n  }\n});\n')))}u.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return t?i.a.createElement(b,c(c({ref:n},s),{},{components:t})):i.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
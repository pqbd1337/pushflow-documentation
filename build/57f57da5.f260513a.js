(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return f}));var r=t(2),o=t(6),a=(t(0),t(149)),i={title:"Useful tips and scripts"},c={id:"en/cookbook",isDocsHomePage:!1,title:"Useful tips and scripts",description:"Open an offer link in a new tab and show a push subscription request in the old one",source:"@site/docs/en/cookbook.md",permalink:"/docs/en/cookbook",sidebar:"en",previous:{title:"Push subscription carousel",permalink:"/docs/en/feed_carosule"},next:{title:"Pricing table",permalink:"/docs/en/pricing"}},s=[{value:"Open an offer link in a new tab and show a push subscription request in the old one",id:"open-an-offer-link-in-a-new-tab-and-show-a-push-subscription-request-in-the-old-one",children:[]},{value:"Ask for a push subscription before redirecting from a landing page to an offer",id:"ask-for-a-push-subscription-before-redirecting-from-a-landing-page-to-an-offer",children:[]}],p={rightToc:s};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"open-an-offer-link-in-a-new-tab-and-show-a-push-subscription-request-in-the-old-one"},"Open an offer link in a new tab and show a push subscription request in the old one"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Use case:")),"\nA user clicks on a final button that redirects to the offer. The offer opens in a new browser tab. When the user goes back to the old tab where your landing page was, they get a push subscription request."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Implementation:")),"\nIntegrate the Pushflow script ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/feed_collect"}),"according to the standard instructions"),".\nNext, we add a ",Object(a.b)("inlineCode",{parentName:"p"},"toOffer")," function, which will open the offer in a new tab and set a cookie that the user has gone to the offer. Next, we check the ",Object(a.b)("inlineCode",{parentName:"p"},"onfocus")," event and when the user has opened the tab again we check if our cookie is there, and if it's true we request a push subscription:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'  <script>\n    // Change it to your offer link\n    var offerUrl = "https://trackdomain.com/click.php?lp=1";\n    var isLeftPage = false;\n    \n    function toOffer(e) {\n      e.preventDefault();\n      var win = window.open(offerUrl, \'_blank\');\n      if (win) {\n          win.focus();\n      } else {\n          location.href = offerUrl;\n      }\n      isLeftPage = true;\n      document.cookie = "isLeftPage=1; max-age=" + 60 * 60 * 24 * 31 + " ; path=/";\n    };\n\n    window.onfocus = function() {\n      if (getCookie(\'isLeftPage\') == 1 || isLeftPage) {\n        setTimeout(PushflowSDK.askSubscription(), 500);\n      }\n    };\n\n    function getCookie(name) {\n        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, \'\\\\$1\') + "=([^;]*)"));\n        return matches ? decodeURIComponent(matches[1]) : undefined;\n    };\n  <\/script>\n')),Object(a.b)("p",null,"In the script above, change ",Object(a.b)("inlineCode",{parentName:"p"},"https://trackdomain.com/click.php?lp=1")," to a link to your offer."),Object(a.b)("h2",{id:"ask-for-a-push-subscription-before-redirecting-from-a-landing-page-to-an-offer"},"Ask for a push subscription before redirecting from a landing page to an offer"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Use case:")),"\nA user has reached the end of your landing page and clicks on a final button before redirect to an offer and a push subscription request appears. Regardless of whether the user subscribes or not, they are redirected to your offer."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Implementation:")),'\nCreate a feed and in a section "Redirects settings" in each field, specify a link to your offer, for example, if your tracker is Binom and you use external landing pages, then in each field there will be a link: ',Object(a.b)("inlineCode",{parentName:"p"},"http://trackdomain.com/click.php?lp=1")," or if you use integrated landing pages: ",Object(a.b)("inlineCode",{parentName:"p"},"{offer_link}"),". "),Object(a.b)("p",null,"Next, we need to create a function that, instead of redirecting to the offer, will make a push subscription request and then a Pushflow script will redirect to the offer. Copy the code below into the ",Object(a.b)("inlineCode",{parentName:"p"},"<head></head>")," :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"  <script>\n    function toOffer(e) {\n      e.preventDefault();\n      PushflowSDK.askSubscription();\n    }\n  <\/script>\n")),Object(a.b)("p",null,"Next, find the button where the link to the offer is located and add an onclick event:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'  <a href="http://trackdomain.com/click.php?lp=1" onclick="toOffer(event)">Link</a>\n')))}f.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),f=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=f(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=f(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||l[b]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
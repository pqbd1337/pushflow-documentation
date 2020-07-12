(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(2),r=t(6),i=(t(0),t(143)),a={title:"Useful tips and scripts"},c={id:"en/cookbook",isDocsHomePage:!1,title:"Useful tips and scripts",description:"Requested push subscription before moving to an offer with prelanding",source:"@site/docs/en/cookbook.md",permalink:"/docs/en/cookbook",sidebar:"en",previous:{title:"Setting up a carousel of redirections",permalink:"/docs/en/feed_carosule"},next:{title:"Setting up the tracker, postbacks, macros",permalink:"/docs/en/tracker"}},s=[{value:"Requested push subscription before moving to an offer with prelanding",id:"requested-push-subscription-before-moving-to-an-offer-with-prelanding",children:[]},{value:"Open the offer in a new tab, and make a push subscription request in the old one",id:"open-the-offer-in-a-new-tab-and-make-a-push-subscription-request-in-the-old-one",children:[]},{value:"Subscribe non-unique users",id:"subscribe-non-unique-users",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"requested-push-subscription-before-moving-to-an-offer-with-prelanding"},"Requested push subscription before moving to an offer with prelanding"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Scenario:")),"\nThe user has reached the end of your landing page, clicks on the final button to go to the offer, and a push subscription request window appears. Regardless of which option they choose, they are redirected to your offer."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Implementation:")),'\nCreate a Feed in Pushflow and in the "redirect settings" section, specify a link to your offer in each field. for example, if your tracker is Binom, then each field will contain a link like ',Object(i.b)("inlineCode",{parentName:"p"},'"'),Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://trackdomain.com/click.php?lp=1%60%60"}),"http://trackdomain.com/click.php?lp=1``"),". Save and integrate the generated script ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/en/feed_collect"}),"according to the standard instructions"),"."),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"<head></head>")," we add the following script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"  <script>\n    function toOffer(e) {\n      e.preventDefault();\n      PushflowSDK.askSubscription();\n    }\n  <\/script>\n")),Object(i.b)("p",null,"Next, find the button where your link to the offer is located and add the onclick event to it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'  <a href="http://trackdomain.com/click.php?lp=1" onclick="toOffer(event)">Link</a>\n')),Object(i.b)("h2",{id:"open-the-offer-in-a-new-tab-and-make-a-push-subscription-request-in-the-old-one"},"Open the offer in a new tab, and make a push subscription request in the old one"),Object(i.b)("p",null,"Integrating the Pushflow script ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/en/feed_collect"}),"according to the standard instructions"),". Next in ",Object(i.b)("inlineCode",{parentName:"p"},"<head></head>")," adding the following script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"  <script>\n    // Change it to your offer link\n    var offerUrl = \"https://trackdomain.com/click.php?lp=1\";\n    var isLeftPage = false;\n    \n    function toOffer(e) {\n      e.preventDefault();\n      var win = window.open(offerUrl, '_blank');\n      if (win) {\n          win.focus();\n      } else {\n          location.href = offerUrl;\n      }\n      isLeftPage = true;\n    };\n\n    window.onfocus = function() {\n      if (isLeftPage) {\n        setTimeout(PushflowSDK.askSubscription(), 500);\n      }\n    };\n  <\/script>\n")),Object(i.b)("p",null,"In the script, change ",Object(i.b)("inlineCode",{parentName:"p"},"https://trackdomain.com/click.php?lp=1")," to your link to the offer."),Object(i.b)("p",null,"It may also be that the user will forget about the old tab for a long time and then the script may not work. We can set the user a cookie for 31 days. Then the final script will look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'  <script>\n    // Change it to your offer link\n    var offerUrl = "https://trackdomain.com/click.php?lp=1";\n    var isLeftPage = false;\n    \n    function toOffer(e) {\n      e.preventDefault();\n      var win = window.open(offerUrl, \'_blank\');\n      if (win) {\n          win.focus();\n      } else {\n          location.href = offerUrl;\n      }\n      isLeftPage = true;\n      document.cookie = "isLeftPage=1; max-age=" + 60 * 60 * 24 * 31 + " ; path=/";\n    };\n\n    window.onfocus = function() {\n      if (getCookie(\'isLeftPage\') == 1 || isLeftPage) {\n        setTimeout(PushflowSDK.askSubscription(), 500);\n      }\n    };\n\n    function getCookie(name) {\n        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, \'\\\\$1\') + "=([^;]*)"));\n        return matches ? decodeURIComponent(matches[1]) : undefined;\n    };\n  <\/script>\n')),Object(i.b)("p",null,"The other option to request a subscription is to download a ready-made HTML template from the Feed page (a template with a captcha will do well), place it on your web server and redirect your user to this page after he opened the old tab. To do this, replace part of the script above ",Object(i.b)("inlineCode",{parentName:"p"},"window.onfocus = function() {}")," with the next one:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'  window.onfocus = function() {\n    if (isLeftPage) {\n      location.href = "https://link.com/index.php";\n    }\n  };\n')),Object(i.b)("p",null,"Where ",Object(i.b)("inlineCode",{parentName:"p"},"https://link.com/index.php")," should be replaced with a link to the page where you collect subscriptions."),Object(i.b)("h2",{id:"subscribe-non-unique-users"},"Subscribe non-unique users"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Scenario:")),"\nIf a user has already visited your site, they are immediately prompted to subscribe."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Implementation:")),"\nCreate Feed in Pushflow. If you want to leave all fields in the redirection section empty after the action with the subscription window. Integrate the Pushflow script ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/en/feed_collect"}),"following the usual instructions"),"."),Object(i.b)("p",null,"If you want to ask for a subscription from users who have left your publishing to the offshore and not just visited the page, add the following script to ``",Object(i.b)("inlineCode",{parentName:"p"},"<head></head>"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'<script>\n  function setPushflowCookie() {\n    document.cookie = "isLeftPage=1; max-age=" + 60 * 60 * 24 * 31 + " ; path=/";\n  };\n\n  window.addEventListener(\n    "load",\n    function() {\n      if (getCookie(\'isLeftPage\') == 1) {\n        setTimeout(PushflowSDK.askSubscription(), 1500);\n      }\n    },\n    true\n  );\n\n  function getCookie(name) {\n    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, \'\\\\$1\') + "=([^;]*)"));\n    return matches ? decodeURIComponent(matches[1]) : undefined;\n  };\n<\/script>\n')),Object(i.b)("p",null,"Find the button, where your link to the operator or tracker is and add it to the onclick event:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'  <a href="http://trackdomain.com/click.php?lp=1" onclick="setPushflowCookie()">Link</a>\n')),Object(i.b)("p",null,"If you want to ask for a subscription from all users who have logged in to your site and spent more than 3 seconds there, the script will look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'<script>\n  window.addEventListener(\n    "load",\n    function() {\n      setTimeout(setNonUniqCookeie(), 3000);\n\n      if (getCookie(\'isNonUniq\') == 1) {\n        setTimeout(PushflowSDK.askSubscription(), 1500);\n      }\n    },\n    true\n  );\n\n  function setNonUniqCookeie() {\n    document.cookie = "isNonUniq=1; max-age=" + 60 * 60 * 24 * 31 + " ; path=/";\n  };\n\n\n  function getCookie(name) {\n    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, \'\\\\$1\') + "=([^;]*)"));\n    return matches ? decodeURIComponent(matches[1]) : undefined;\n  };\n<\/script>\n')),Object(i.b)("p",null,"In this case, no additional scripts should be added to the button to go to the offshore."))}l.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=o,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||i;return t?r.a.createElement(d,c(c({ref:n},p),{},{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),l=n(7),o=(n(0),n(147)),i={title:"How to evaluate traffic quality and catch bots using Javascript",tags:["traffic quality","binom","bots"]},r={permalink:"/docs/blog/en/2020/07/18/traffic-quality",source:"@site/blog/en/2020-07-18-traffic-quality.md",description:"Evaluating traffic quality will help us cut off junk traffic sources and sites without having to spend money on a comprehensive test. In this article, we will show the scripts that we use to evaluate the quality of traffic and understand the audience's interest in your landing page. We will use Binom to manage our traffic and its event system. If you use a different tracker, it probably has similar functionality and you can easily take the code from the article and adapt it to your tracker.",date:"2020-07-18T00:00:00.000Z",tags:[{label:"traffic quality",permalink:"/docs/blog/en/tags/traffic-quality"},{label:"binom",permalink:"/docs/blog/en/tags/binom"},{label:"bots",permalink:"/docs/blog/en/tags/bots"}],title:"How to evaluate traffic quality and catch bots using Javascript",readingTime:9.635,truncated:!0},c=[{value:"1. Page loading",id:"1-page-loading",children:[]},{value:"2-3. User spent 3 or 12 seconds on the landing page",id:"2-3-user-spent-3-or-12-seconds-on-the-landing-page",children:[]},{value:"4. Scroll on the page",id:"4-scroll-on-the-page",children:[]},{value:"5-6. Click quality detection script",id:"5-6-click-quality-detection-script",children:[]},{value:"Formulas in Binom",id:"formulas-in-binom",children:[{value:"Custom <strong>LP CTR</strong>",id:"custom-lp-ctr",children:[]},{value:"Loaded, %",id:"loaded-",children:[]},{value:"3s and 12s",id:"3s-and-12s",children:[]},{value:"Scroll",id:"scroll",children:[]},{value:"Quality",id:"quality",children:[]},{value:"Bots",id:"bots",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Not Unique, %",id:"not-unique-",children:[]}]},{value:"<strong>Final Javascript</strong>",id:"final-javascript",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Evaluating traffic quality will help us cut off junk traffic sources and sites without having to spend money on a comprehensive test. In this article, we will show the scripts that we use to evaluate the quality of traffic and understand the audience's interest in your landing page. We will use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cp.binom.org/aff/go/upor_defo"}),"Binom")," to manage our traffic and its ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.binom.org/events.php"}),"event system"),". If you use a different tracker, it probably has similar functionality and you can easily take the code from the article and adapt it to your tracker."),Object(o.b)("p",null,'What are we going to do? We will perform various Javascript checks on the landing page to determine whether it is a "real" user or a bot that just clicks through your ad, or, for example, another affiliate who tries to steal your landing page using a proxy.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"So, two main tasks:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Understand the amount of low-quality traffic"),Object(o.b)("li",{parentName:"ol"},"Understand the interest of live users in your landing page.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To do this, we will collect the following Events:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Loading the page"),Object(o.b)("li",{parentName:"ol"},"User spent 3 seconds on the landing page"),Object(o.b)("li",{parentName:"ol"},"User spent 12 seconds on the landing page"),Object(o.b)("li",{parentName:"ol"},"Scroll on the page"),Object(o.b)("li",{parentName:"ol"},"Result of the click quality detection script"),Object(o.b)("li",{parentName:"ol"},"100% bot detected")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sending events to Binom")),Object(o.b)("p",null,"Before starting, to simplify sending events to a binom, we will create a function that will pass the event number and its value to the tracker:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Replace the url with the URL of your binom tracker, without / at the end\nvar tracker_url = 'https://youtrackerurl.com';\n\nfunction lp_callback(eventNumber, value) {\n  var o = document.createElement(\"img\");\n  if (typeof window['getUclick'] === 'function') {\n    o.src = tracker_url + '/click.php?event' + eventNumber + '=' + value + '&uclick=' + getUclick();\n  } else {\n    o.src = tracker_url + '/click.php?event' + eventNumber + '=' + value;\n  }\n}\n")),Object(o.b)("p",null,"Now, in order to pass an event, you need to call the ",Object(o.b)("inlineCode",{parentName:"p"},"lp_callback()")," function and pass two arguments to it: the event number and the value. For example, to pass ",Object(o.b)("inlineCode",{parentName:"p"},"event_8")," equal to ",Object(o.b)("inlineCode",{parentName:"p"},"1"),", you need to call ",Object(o.b)("inlineCode",{parentName:"p"},"lp_callback(8,1)")),Object(o.b)("h1",{id:"javascript-checks"},"Javascript checks"),Object(o.b)("h3",{id:"1-page-loading"},"1. Page loading"),Object(o.b)("p",null,"A key parameter if your landing pages are not located on the same server as tracker. The script will pass a value equal to 1 to event_1:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'window.addEventListener("DOMContentLoaded", function () {\n    lp_callback(1,1);\n});\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DOMContentLoaded \u2014 occurs when all HTML has been fully loaded and passed by the parser, after which our lp_callback is triggered")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Why is the page loading event one of the most important parameters for external landing pages??")," "),Object(o.b)("p",null,"First, we can use it to figure out how many clicks are lost before the page is loaded. We can influence this parameter by changes in our infrastructure, i.e. by moving servers with the tracker and landing pages closer to the user."),Object(o.b)("p",null,"Secondly, we will calculate all other events based on this event. For example, now the landing page CTR (LP CTR) in Binom is calculated: all clicks that passed landing are divided into all clicks. But, for example, there may be good clicks on the zone, but for technical reasons the page loads for a long time, then the LP CTR will be extremely low. Therefore, we consider LP CTR as all clicks that broke through the landing page divided by clicks that loaded the page. More on this later."),Object(o.b)("h3",{id:"2-3-user-spent-3-or-12-seconds-on-the-landing-page"},"2-3. User spent 3 or 12 seconds on the landing page"),Object(o.b)("p",null,"It helps us understand users' interest in our landing page. The event should start after the page loads, so we'll combine it with the script above"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'window.addEventListener("DOMContentLoaded", function () {\n    // Page loading, event_1\n    lp_callback(1,1);\n\n    // User spent 3 sec, event_2\n  setTimeout(function () {\n    lp_callback(2, 1)\n  }, 3 * 1000);\n\n    // User spent 12 sec, event_3\n  setTimeout(function () {\n    lp_callback(3, 1)\n  }, 12 * 1000);\n});\n')),Object(o.b)("h3",{id:"4-scroll-on-the-page"},"4. Scroll on the page"),Object(o.b)("p",null,"It will also help us understand the user's interest in your landing"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Scroll, event_4\nvar scroll = 0;\nwindow.onscroll = function () {\n  if (scroll != 1) {\n    scroll = 1;\n    lp_callback(4, 1)\n  }\n};\n")),Object(o.b)("h3",{id:"5-6-click-quality-detection-script"},"5-6. Click quality detection script"),Object(o.b)("p",null,"There will be some magic here. Each affiliate has some set of JS checks that they run on a landing to detect bot traffic, for example: whether ",Object(o.b)("inlineCode",{parentName:"p"},"navigator.platform")," matches the user agent, whether there are Java or other plug-ins in the browser, but we only have 10 events in Binom and it makes no sense to send all the values there. And here is some magic comes to play, a script from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pushflow.net/app/"}),"Pushflow")," to evaluate the quality of traffic. This script makes 35 such checks in the browser and another five on the server. This allows you to determine with a high probability the replacement of the user agent in the browser, the presence of proxy or VPN signs in the connection, various bots, headless browsers, incognito mode, etc. The script loads asynchronously, without blocking the page, and performs everything in the background, i.e. it does not affect the page loading speed in any way. The script performs all its checks and as a result gives the user a score from 0 to 1. You can read more about the script in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pushflow.net/app/trafficquality"}),"Pushflow client area"),"."),Object(o.b)("p",null,"So, let's start integration. To do this, we will use two events in the Binom:"),Object(o.b)("p",null,"event_5 \u2014 those who did not pass the basic quality check: people behind proxies, VPN, suspicious browsers and devices or OS, but there may be quite live converting users."),Object(o.b)("p",null,"event_6 \u2014 those who are definitely a bot or unwanted user. We will pass data from all sources to this event, if it is definitely a low-quality user. If you use a server based services to detect bots or other services, we will send data from them to this event."),Object(o.b)("p",null,"So, if the script for evaluating the quality of traffic from Pushflow returns a value less than 1, then we save it to suspicious users, if the value is less than or equal to 0.4, then to bots. Read More about gradation in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pushflow.net/app/trafficquality"}),"Pushflow client area")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function pushflowCallback(result) {\n    // All clicks with a quality less than 1 are recorded as suspicious, event_5\n  if (result.quality < 1) { lp_callback(5, 1); }\n\n    // All clicks with a quality less than or equal to 0.4 are recorded in bots, event_6\n  if (result.quality <= 0.4) { lp_callback(6, 1); }\n}\n\n// Completely replace the line below with the exact same line from the Pushflow client area\n// (function (d, t){ var s=d.createEle....\n")),Object(o.b)("p",null,"To make this script work, we need to copy the generated code from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pushflow.net/app/trafficquality"}),"Pushflow client area")," and replace the ",Object(o.b)("inlineCode",{parentName:"p"},"pushflowCallback")," function in it with the example above."),Object(o.b)("p",null,"At this point, we will finish collecting events and move on to configuring formulas in Binom itself."),Object(o.b)("h2",{id:"formulas-in-binom"},"Formulas in Binom"),Object(o.b)("p",null,'After passing events to the Binom, we need to create columns there to display the transmitted data. To do this, go to the tracker in the section "Settings > Statistics > Columns".'),Object(o.b)("h3",{id:"custom-lp-ctr"},"Custom ",Object(o.b)("strong",{parentName:"h3"},"LP CTR")),Object(o.b)("p",null,"The first thing we will do is add a new LP CTR formula. The standard formula looks like ",Object(o.b)("inlineCode",{parentName:"p"},"lp_clicks/clicks*100"),". First, it is logical to see LP CTR only for clicks that have a page loaded (i.e. the user saw what was offered to them and reached the end), and secondly, we are not interested in when LP CTR is called by bots and thus inflate it, it makes sens to remove them from this formula."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The new formula will look like this:")," "),Object(o.b)("p",null,"(LP Clicks - Bots)/(Page Loaded - Bots)*100"),Object(o.b)("p",null,"Under bots, we can consider 100% of bots or suspicious users, i.e. event_5 or event_6, here everyone chooses for themselves, we will stop at event_6 (100% bot)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"((lp_clicks-event_6)/(event_1-event_6))*100")),Object(o.b)("h3",{id:"loaded-"},"Loaded, %"),Object(o.b)("p",null,"Our key event is page loading for the user:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"event_1/clicks*100")),Object(o.b)("h3",{id:"3s-and-12s"},"3s and 12s"),Object(o.b)("p",null,"The user spent 3 seconds on the site. ",Object(o.b)("strong",{parentName:"p"},"Here you should note")," that we do not divide event_2 by all clicks, but only by those who have the page loaded, i.e. by event_1"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Final formula for 3s in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"event_2/event_1*100")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Final formula for 12s in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"event_3/event_1*100")),Object(o.b)("h3",{id:"scroll"},"Scroll"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"event_4/event_1*100")),Object(o.b)("h3",{id:"quality"},"Quality"),Object(o.b)("p",null,"In event_5, we passed the value 1 for all suspicious users: who uses VPN or proxy, whose browser does not pass certain checks for a live user, and so on. Let's create a formula that shows how many normal users you have left."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"100-event_5/event_1*100")),Object(o.b)("h3",{id:"bots"},"Bots"),Object(o.b)("p",null,"Clicks that we are sure are garbage traffic. If we send data from the server-side bot protection system to this event, then we need to divide event_6 by all clicks, if we get data only from the Pushflow script, then by event_1."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"event_6/clicks*100")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"With all the collected data, we can try to output an abstract formula that will show the user's interest in a specific landing page. To do this, take the ratio of parameters such as: 3 seconds on the page, scroll, LP CTR (LP CTR is an important indicator, so we will make it a coefficient of x2). Add all these parameters, divide by their sum number, and multiply by 10 to make it beautiful. This will be a fairly subjective, but useful indicator, which allows us to see zones and traffic sources that are very out of the picture."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"(event_2/event_1+event_4/event_1+((lp_clicks-event_6)/(event_1-event_6))*2)/3*10")),Object(o.b)("h3",{id:"not-unique-"},"Not Unique, %"),Object(o.b)("p",null,"As a bonus, we will also add % of non-unique users (for some reason, the standard Binom does not have this):"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The final formula in Binom:"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"(clicks-unique_clicks)/clicks*100")),Object(o.b)("h2",{id:"final-javascript"},Object(o.b)("strong",{parentName:"h2"},"Final Javascript")),Object(o.b)("p",null,"Replace in the script below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"tracker_url to the link with your tracker's domain"),Object(o.b)("li",{parentName:"ol"},"Insert the generated code from the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pushflow.net/app/trafficquality"}),"Pushflow client area")," and replace the ",Object(o.b)("inlineCode",{parentName:"li"},"pushflowCallback")," function with the function from our example")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Replace the url with the URL of your tracker, without / at the end\nvar tracker_url = 'https://youtrackerurl.com';\n\nfunction lp_callback(eventNumber, value) {\n  var o = document.createElement(\"img\");\n  if (typeof window['getUclick'] === 'function') {\n    o.src = tracker_url + '/click.php?event' + eventNumber + '=' + value + '&uclick=' + getUclick();\n  } else {\n    o.src = tracker_url + '/click.php?event' + eventNumber + '=' + value;\n  }\n}\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    // Page loading event\n    lp_callback(1,1);\n\n    // 3 seconds event\n  setTimeout(function () {\n    lp_callback(2, 1)\n  }, 3 * 1000);\n\n    // 12 seconds event\n  setTimeout(function () {\n    lp_callback(3, 1)\n  }, 12 * 1000);\n});\n\n// Scroll event\nvar scroll = 0;\nwindow.onscroll = function () {\n  if (scroll != 1) {\n    scroll = 1;\n    lp_callback(4, 1)\n  }\n};\n\nfunction pushflowCallback(result) {\n    // All clicks with a quality less than 1 are recorded as suspicious, event_5\n  if (result.quality < 1) { lp_callback(5, 1); }\n\n    // All clicks with a quality less than or equal to 0.4 are recorded in bots, event_6\n  if (result.quality <= 0.4) { lp_callback(6, 1); }\n}\n\n// Completely replace the line below with the exact same line from the Pushflow client area\n// (function (d, t){ var s=d.createEle....\n")),Object(o.b)("p",null,"Let's take the code above and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://javascript-minifier.com/"}),"minimize")," it. Next, we wrap the resulting code in the ",Object(o.b)("inlineCode",{parentName:"p"},"<script><\/script>")," tag and insert it all to our page inside the ",Object(o.b)("inlineCode",{parentName:"p"},"<header></header>")," tag."),Object(o.b)("p",null,"You should get something like this (the code below is not working, read above what you need to do):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta charset="utf-8">\n        <title></title>\n        <meta name="description" content="">\n        <meta name="author" content="">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link rel="stylesheet" href="">\n        <script>\n            var tracker_url="https://youtrackerurl.com";function lp_callback(c,l){var t=document.createElement("img");"function"==typeof window.getUclick?t.src=tracker_url+"/click.php?event"+c+"="+l+"&uclick="+getUclick():t.src=tracker_url+"/click.php?event"+c+"="+l}window.addEventListener("DOMContentLoaded",function(){lp_callback(1,1),setTimeout(function(){lp_callback(2,1)},3e3),setTimeout(function(){lp_callback(3,1)},12e3)});var scroll=0;function pushflowCallback(c){c.quality<1&&lp_callback(5,1),c.quality<=.4&&lp_callback(6,1)}window.onscroll=function(){1!=scroll&&(scroll=1,lp_callback(4,1))};\n        <\/script>\n    </head>\n<body>\n')))}u.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),u=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},h=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return n?l.a.createElement(d,r(r({ref:t},s),{},{components:n})):l.a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
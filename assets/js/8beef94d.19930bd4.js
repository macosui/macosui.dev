"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[521],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"starter_apps",title:"Generating Starter Apps",sidebar_position:2},p=void 0,s={unversionedId:"starter_apps",id:"starter_apps",title:"Generating Starter Apps",description:"Overview",source:"@site/docs/starter_apps.md",sourceDirName:".",slug:"/starter_apps",permalink:"/docs/starter_apps",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"starter_apps",title:"Generating Starter Apps",sidebar_position:2},sidebar:"sidebar",previous:{title:"Writing your first app",permalink:"/docs/getting_started/first_app"},next:{title:"Deep Dive into Menu Bars",permalink:"/docs/menubar_deepdive"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Getting set up",id:"getting-set-up",level:2},{value:"Installing <code>mason_cli</code>",id:"installing-mason_cli",level:3},{value:"Installing the starter brick",id:"installing-the-starter-brick",level:3},{value:"Configuring your starter app",id:"configuring-your-starter-app",level:2},{value:"Default",id:"default",level:3},{value:"No Native Titlebar",id:"no-native-titlebar",level:3},{value:"Window Translucency",id:"window-translucency",level:3},{value:"Debug Label",id:"debug-label",level:3},{value:"Custom System Menu Bar",id:"custom-system-menu-bar",level:3},{value:"Multi-Window",id:"multi-window",level:3},{value:"Configuration One: Menu Bar",id:"configuration-one-menu-bar",level:4},{value:"Configuration Two: &quot;About&quot; tile",id:"configuration-two-about-tile",level:4}],m={toc:d};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/mason_cli"},(0,r.kt)("inlineCode",{parentName:"a"},"package:mason_cli"))," you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://brickhub.dev/bricks/macosui_starter/1.2.1"},(0,r.kt)("inlineCode",{parentName:"a"},"macosui_starter"))," brick to generate starter applications in seconds. This guide walks you through the process of doing so in detail."),(0,r.kt)("h2",{id:"getting-set-up"},"Getting set up"),(0,r.kt)("h3",{id:"installing-mason_cli"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h3"},"mason_cli")),(0,r.kt)("p",null,"You can install ",(0,r.kt)("inlineCode",{parentName:"p"},"mason_cli")," by running either one of the following commands in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \ud83c\udfaf Activate from https://pub.dev\n$ dart pub global activate mason_cli\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \ud83c\udf7a Or install from https://brew.sh\n$ brew tap felangel/mason\n$ brew install mason\n")),(0,r.kt)("h3",{id:"installing-the-starter-brick"},"Installing the starter brick"),(0,r.kt)("p",null,"At this point you can install the ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter")," brick. It is recommended that you install it globally so that you can use it in any directory without any additional setup. "),(0,r.kt)("p",null,"You can do so with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Install globally\n$ mason add -g macosui_starter\n")),(0,r.kt)("h2",{id:"configuring-your-starter-app"},"Configuring your starter app"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter")," brick enables you to set up your application in a few different ways. To get started, use your terminal run the following command in the directory of your choice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ mason make macosui_starter\n")),(0,r.kt)("p",null,"You'll be prompted with the following configuration options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your application"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"macosui_starter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_description")),(0,r.kt)("td",{parentName:"tr",align:null},"The description of your application"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A starter Flutter application for macOS with macos_ui")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"org_name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your organization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"com.example ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"use_translucency")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to make the application window translucent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debug_label_on")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to show the debug label by default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_system_menu_bar")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to add a basic custom system menu bar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"add_multi_window")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to add basic multi-window support"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you choose ",(0,r.kt)("em",{parentName:"p"},"not")," to use window translucency, you'll be prompted for an additional option after you finish configuring the above options:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Hide native window title bar? (y/N)\n")),(0,r.kt)("p",{parentName:"div"},"This setting is turned on by default when using window translucency, which why you won't see this prompt if you choose to enable it."))),(0,r.kt)("p",null,"After your application files are generated, ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter")," will automatically run two commands for you: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter pub get")," - this is run for your convenience, as a time-saver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter format .")," - this is run to make sure your code is properly formatted, since it is difficult to make sure that templated code is properly formatted during development")),(0,r.kt)("p",null,"When your app is generated, you'll see a directory that looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"starter_app",src:n(7659).Z,width:"488",height:"534"})),(0,r.kt)("h3",{id:"default"},"Default"),(0,r.kt)("p",null,"If you'd like to configure your app with the absolute basics, simply press the ",(0,r.kt)("inlineCode",{parentName:"p"},"enter")," key for each of the prompts."),(0,r.kt)("p",null,"When the application is run, it will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"starter_app",src:n(4495).Z,width:"1824",height:"1480"})),(0,r.kt)("h3",{id:"no-native-titlebar"},"No Native Titlebar"),(0,r.kt)("p",null,"This configuration removes the native titlebar from the application window. To enable this, you must respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"use_translucency")," prompt, and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Hide native window title bar? (y/N)\n")),(0,r.kt)("p",null,"This configuration will generate an application that looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hidden_titlebar",src:n(735).Z,width:"1824",height:"1480"})),(0,r.kt)("h3",{id:"window-translucency"},"Window Translucency"),(0,r.kt)("p",null,"If you'd like to configure your app with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/translucency/"},"window translucency"),", respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Use window translucency? (y/N)\n")),(0,r.kt)("p",null,"This will generate an application that looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"translucency",src:n(1844).Z,width:"1824",height:"1480"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information on how the translucency effect is achieved, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/59969#issuecomment-916682559"},"this Flutter issue"),"."))),(0,r.kt)("h3",{id:"debug-label"},"Debug Label"),(0,r.kt)("p",null,"By default, apps generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter")," will have Flutter's debug label turned off. If you'd like to have it on to start with, respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Show debug label? (y/N)\n")),(0,r.kt)("h3",{id:"custom-system-menu-bar"},"Custom System Menu Bar"),(0,r.kt)("p",null,"With the introduction of Flutter 3.0, developers can create custom ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/macos/menus/menu-bar-menus/"},"system-level menu bars"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter")," takes advantage of this by offering to generate a basic custom menu bar for your application. To take advantage of this, respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Use custom system menu bar? (y/N)\n")),(0,r.kt)("p",null,"The generated application will have a menu bar that looks like this:"),(0,r.kt)("img",{src:"https://imgur.com/yV7RR2E.png"}),(0,r.kt)("p",null,"For more information on creating and working with custom menu bars, check out the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flutter Docs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/widgets/PlatformMenuBar-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"PlatformMenuBar"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/widgets/PlatformProvidedMenuItem-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"PlatformProvidedMenuItem"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"menubar_deepdive"},"Deep Dive: Menu Bars"))),(0,r.kt)("h3",{id:"multi-window"},"Multi-Window"),(0,r.kt)("p",null,"While Flutter has not yet implemented multi-window, a few community packages have done so. ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/desktop_multi_window"},"package:desktop_multi_window"),", which supports all three desktop platforms and has a robust API."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is not currently possible to apply the window translucency effect to new Flutter windows. Hopefully this will change in the future."))),(0,r.kt)("p",null,"There are two possible ways to configure a multi-window application with ",(0,r.kt)("inlineCode",{parentName:"p"},"macosui_starter"),":"),(0,r.kt)("h4",{id:"configuration-one-menu-bar"},"Configuration One: Menu Bar"),(0,r.kt)("p",null,'In this configuration, you can launch a new window by clicking on your applications menu bar and selecting "About", like so:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"menu_multiwindow",src:n(8862).Z,width:"480",height:"156"})),(0,r.kt)("p",null,"This will launch a small window that looks like this:"),(0,r.kt)("img",{src:"https://imgur.com/USErRy6.png",width:"75%"}),(0,r.kt)("p",null,"To enable this configuration, respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to the following prompts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Use custom system menu bar? (y/N)\n$ Add multi-window support? (y/N)\n")),(0,r.kt)("h4",{id:"configuration-two-about-tile"},'Configuration Two: "About" tile'),(0,r.kt)("p",null,'In this configuration, you can launch the "About" window via an "About" tile at the bottom of your application\'s sidebar, like so:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"about_window",src:n(4134).Z,width:"1600",height:"1256"})),(0,r.kt)("p",null,"To enable this configuration, respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ Add multi-window support? (y/N)\n")),(0,r.kt)("p",null,"For more on multi-window, check out the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flutter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/30701"},"Support multiple windows for desktop shells")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/11_4wntz_9IJTQOo_Qhp7QF4RfpIMTfVygtOTxQ4OGHY/edit"},"Desktop Multi-Window Support (design doc)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/desktop_multi_window"},(0,r.kt)("inlineCode",{parentName:"a"},"package:desktop_multi_window"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"multiwindow_deepdive"},"Deep Dive: Multi Window"))))}c.isMDXComponent=!0},4134:function(e,t,n){t.Z=n.p+"assets/images/about_window-c6d8a2a4117d52992d006552988aa2ac.gif"},4495:function(e,t,n){t.Z=n.p+"assets/images/default_app-e89fcb8e8ec9fa3a5c3977d745c28e2d.png"},7659:function(e,t,n){t.Z=n.p+"assets/images/default_app_directory-9713cfee0eace8cb31cbb397c9f5a1a7.png"},735:function(e,t,n){t.Z=n.p+"assets/images/hidden_titlebar-d40c6496140be3468b2e69da64ecc0f8.png"},8862:function(e,t,n){t.Z=n.p+"assets/images/menu_multiwindow-fa186bd0312b5243f15cf3660829f009.png"},1844:function(e,t,n){t.Z=n.p+"assets/images/translucency-ac0eba2252775994c14916cf1a8a12b7.png"}}]);
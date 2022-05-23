"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[400],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,u=m["".concat(d,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,r(r({ref:t},l),{},{components:n})):a.createElement(u,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"first_app",title:"Writing your first app",sidebar_position:3},d=void 0,p={unversionedId:"getting_started/first_app",id:"getting_started/first_app",title:"Writing your first app",description:'This codelab walks you through witing your first Flutter application for macOS using macos_ui, from scratch. If you are new to Flutter, you might want to begin with Flutter\'s "Write your first Flutter app" or "Write your first Flutter app on the web" codelabs and return here afterwards.',source:"@site/docs/getting_started/first_app.md",sourceDirName:"getting_started",slug:"/getting_started/first_app",permalink:"/docs/getting_started/first_app",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"first_app",title:"Writing your first app",sidebar_position:3},sidebar:"sidebar",previous:{title:"Manual Installation",permalink:"/docs/getting_started/installation"},next:{title:"Generating Starter Apps",permalink:"/docs/starter_apps"}},l={},c=[{value:"Step 1: Create the starter Flutter app",id:"step-1-create-the-starter-flutter-app",level:2},{value:"Step 2: Add <code>macos_ui</code>",id:"step-2-add-macos_ui",level:2},{value:"Step 3: Add some UI",id:"step-3-add-some-ui",level:2},{value:"Create the <code>MyHomePage</code> widget",id:"create-the-myhomepage-widget",level:3},{value:"Add some items to the <code>Sidebar</code>",id:"add-some-items-to-the-sidebar",level:3},{value:"Update the main content area",id:"update-the-main-content-area",level:3},{value:"Next Steps",id:"next-steps",level:2}],m={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This codelab walks you through witing your first Flutter application for macOS using ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui"),", ",(0,o.kt)("em",{parentName:"p"},"from scratch"),". If you are new to Flutter, you might want to begin with Flutter's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/get-started/codelab"},'"Write your first Flutter app"')," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/get-started/codelab-web"},'"Write your first Flutter app on the web"')," codelabs and return here afterwards. "),(0,o.kt)("p",{parentName:"div"},"If you are already comfortable with Flutter, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting_started/quick_start"},"Quick Start")," guide might be more appropriate for you."))),(0,o.kt)("h2",{id:"step-1-create-the-starter-flutter-app"},"Step 1: Create the starter Flutter app"),(0,o.kt)("p",null,"Create a simple, templated Flutter app using the instructions found using the method of your choice. You can follow the instructions found in Flutter's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/get-started/test-drive#create-app"},"Getting Started with your first Flutter app"),'. Name the project "basics".'),(0,o.kt)("h2",{id:"step-2-add-macos_ui"},"Step 2: Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"macos_ui")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"macos_ui")," to your ",(0,o.kt)("inlineCode",{parentName:"li"},"pubspec.yaml")," file using the instructions found in ",(0,o.kt)("a",{parentName:"li",href:"./installation"},"Installation"),"."),(0,o.kt)("li",{parentName:"ol"},"Delete all of the code from ",(0,o.kt)("strong",{parentName:"li"},"lib/main.dart")," and replace it with the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart" showLineNumbers',title:'"main.dart"',showLineNumbers:!0},"import 'package:flutter/cupertino.dart';\nimport 'package:macos_ui/macos_ui.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return MacosApp(\n      theme: MacosThemeData.light(),\n      darkTheme: MacosThemeData.dark(),\n      themeMode: ThemeMode.system,\n    );\n  }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The first thing you might notice is that we are importing ",(0,o.kt)("em",{parentName:"p"},"both")," ",(0,o.kt)("inlineCode",{parentName:"p"},"cupertino")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui"),". This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui")," does not export any of Flutter's built-in libraries via the ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui.dart")," library file. As such, in order to use things like ",(0,o.kt)("inlineCode",{parentName:"p"},"StatelessWidget")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeMode")," you'll have to import ",(0,o.kt)("inlineCode",{parentName:"p"},"cupertino")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"material"),". We're going with ",(0,o.kt)("inlineCode",{parentName:"p"},"cupertino")," so that we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"CupertinoIcons")," later on."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"material")," library in conjunction with ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui"),", be careful not to use any widgets like ",(0,o.kt)("inlineCode",{parentName:"p"},"ListTile")," that require a ",(0,o.kt)("inlineCode",{parentName:"p"},"Material")," ancestor in the widget tree. ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui")," offers alternatives to such widgets, like ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosListTile"),", that avoid such conflicts."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run the app ",(0,o.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/get-started/test-drive"},"in the way your IDE describes"),'. Select "macOS (desktop)" as your build target.')),(0,o.kt)("p",null,"Once the app finishes building you should see the following window:\n",(0,o.kt)("img",{alt:"window_with_sidebar_light",src:n(9198).Z,width:"912",height:"740"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"what is a ",(0,o.kt)("inlineCode",{parentName:"h5"},"MacosApp"),"?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp")," is a widget that represents an application that uses the macOS design system. It should be the root of your application's widget tree, and is comparable to Flutter's ",(0,o.kt)("inlineCode",{parentName:"p"},"MaterialApp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CupertinoApp")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"material")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cupertino")," widget libraries, respectively."),(0,o.kt)("p",{parentName:"div"},"As with ",(0,o.kt)("inlineCode",{parentName:"p"},"MaterialApp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CupertinoApp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp")," acts as a convenience wrapper around widgets that are commonly required for a Flutter application that is intended to look and feel like a native macOS application, and provides certain defaults, like themes and scrolling physics. While you could certainly use ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui")," widgets and themes without using a ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp"),", it would be quite messy to do so; therefore, it is ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommended that you place a ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp")," at the root of your widget tree rather than a ",(0,o.kt)("inlineCode",{parentName:"p"},"MaterialApp")," or other comparable widgets."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp")," is built on top of a ",(0,o.kt)("inlineCode",{parentName:"p"},"CupertinoApp"),". All the properties you'd expect a ",(0,o.kt)("inlineCode",{parentName:"p"},"CupertinoApp")," to have are available for a ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"builder"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"navigatorKey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"localizationsDelegate"),". To view the full list of ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosApp"),"'s available properties, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/macos_ui/latest/macos_ui/MacosApp-class.html"},"technical documentation")," on pub.dev."),(0,o.kt)("p",{parentName:"div"},"If at this point you are wondering how to manage targeting multiple platforms while using the appropriate widget libraries (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"material")," for mobile, ",(0,o.kt)("inlineCode",{parentName:"p"},"fluent_ui")," for Windows, and ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui")," for macOS), all of which expect their own root application widget, don't fret - this can be done relatively easily and there is a special codelab for this coming soon!"))),(0,o.kt)("h2",{id:"step-3-add-some-ui"},"Step 3: Add some UI"),(0,o.kt)("p",null,"It's pretty common for macOS applications to have the following: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A main content area "),(0,o.kt)("li",{parentName:"ul"},"A resizable sidebar with navigational items that change what is shown in the main content area")),(0,o.kt)("p",null,"Let's create some UI that reflects this common practice using ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui"),"."),(0,o.kt)("h3",{id:"create-the-myhomepage-widget"},"Create the ",(0,o.kt)("inlineCode",{parentName:"h3"},"MyHomePage")," widget"),(0,o.kt)("p",null,"A widget with a content area and a resizable sidebar is fairly complex. Thankfully, ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui")," abstracts all that away using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosWindow")," widget."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What is a ",(0,o.kt)("inlineCode",{parentName:"h5"},"MacosWindow"),"?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosWindow")," is a basic layout widget that handles top-level UI layout for you. In addition to providing the main content for your app, you can use it to give your app a ",(0,o.kt)("inlineCode",{parentName:"p"},"Sidebar")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Titlebar"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart" showLineNumbers',title:'"main.dart"',showLineNumbers:!0},"import 'package:flutter/cupertino.dart';\nimport 'package:macos_ui/macos_ui.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return MacosApp(\n      theme: MacosThemeData.light(),\n      darkTheme: MacosThemeData.dark(),\n      // highlight-next-line\n      home: const MyHomePage(),\n    );\n  }\n}\n\n// highlight-start\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key}) : super(key: key);\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _pageIndex = 0;\n  @override\n  Widget build(BuildContext context) {\n    return MacosWindow(\n      sidebar: Sidebar(\n        minWidth: 200,\n        builder: (context, scrollController) {\n          return SidebarItems(\n            currentIndex: _pageIndex,\n            onChanged: (index) {},\n            items: [],\n          );\n        },\n      ),\n      child: const Center(\n        child: Text('Hello World'),\n      ),\n    );\n  }\n}\n// highlight-end\n")),(0,o.kt)("h3",{id:"add-some-items-to-the-sidebar"},"Add some items to the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Sidebar")),(0,o.kt)("p",null,"At this point we need to fill our ",(0,o.kt)("inlineCode",{parentName:"p"},"SidebarItems")," with some actual ",(0,o.kt)("inlineCode",{parentName:"p"},"SidebarItem"),"s so that we can have something to click on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart" showLineNumbers',title:'"main.dart"',showLineNumbers:!0},"import 'package:flutter/cupertino.dart';\nimport 'package:macos_ui/macos_ui.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return MacosApp(\n      theme: MacosThemeData.light(),\n      darkTheme: MacosThemeData.dark(),\n      home: const MyHomePage(),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key}) : super(key: key);\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _pageIndex = 0;\n  @override\n  Widget build(BuildContext context) {\n    return MacosWindow(\n      sidebar: Sidebar(\n        minWidth: 200,\n        builder: (context, scrollController) {\n          return SidebarItems(\n            currentIndex: _pageIndex,\n            onChanged: (index) {},\n            // highlight-start\n            items: const [\n              SidebarItem(\n                leading: MacosIcon(CupertinoIcons.home),\n                label: Text('Home'),\n              ),\n              SidebarItem(\n                leading: MacosIcon(CupertinoIcons.search),\n                label: Text('Explore'),\n              ),\n            ],\n            // highlight-end\n          );\n        },\n      ),\n      child: const Center(\n        child: Text('Hello World'),\n      ),\n    );\n  }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"A closer look at ",(0,o.kt)("inlineCode",{parentName:"h5"},"Sidebar")," and ",(0,o.kt)("inlineCode",{parentName:"h5"},"SidebarItems"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h4",{parentName:"div",id:"sidebar"},(0,o.kt)("inlineCode",{parentName:"h4"},"Sidebar")),(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Sidebar")," is a configuration class that lets you set the properties of your app's sidebar area.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"minWidth")," is required, and is the minimum width the sidebar can be as it is being resized. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/macos_ui/latest/macos_ui/Sidebar-class.html"},"technical documentation")," to see all the ways you can customize your sidebar!"),(0,o.kt)("h4",{parentName:"div",id:"sidebaritems"},(0,o.kt)("inlineCode",{parentName:"h4"},"SidebarItems")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"SidebarItems")," is a scrollable widget that builds ",(0,o.kt)("inlineCode",{parentName:"p"},"SidebarItem"),"s and tracks the index of the currently selected ",(0,o.kt)("inlineCode",{parentName:"p"},"SidebarItem"),". You can pass it the ",(0,o.kt)("inlineCode",{parentName:"p"},"builder"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollController")," to have direct control over its scrolling behavior."),(0,o.kt)("p",{parentName:"div"},"Check out the technical documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/macos_ui/latest/macos_ui/SidebarItems-class.html"},(0,o.kt)("inlineCode",{parentName:"a"},"SidebarItems"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/macos_ui/latest/macos_ui/SidebarItem-class.html"},(0,o.kt)("inlineCode",{parentName:"a"},"SidebarItem"))," to learn more!"))),(0,o.kt)("p",null,"Do a hot ",(0,o.kt)("strong",{parentName:"p"},"restart")," of your app. Your app should now look like this:\n",(0,o.kt)("img",{alt:"window_with_sidebar_light",src:n(9297).Z,width:"912",height:"740"})),(0,o.kt)("p",null,"At this point, clicking on the sidebar items doesn't result in anything happening. This is because we are not doing anything in ",(0,o.kt)("inlineCode",{parentName:"p"},"SidebarItem"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"onChanged")," function, so let's take care of that like by adding the following code to that empty function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"onChanged: (index) {\n  setState(() => _pageIndex = index);\n},\n")),(0,o.kt)("p",null,"Perform a hot reload. Now, if you click on the sidebar items, they will appropriately become the currently selected item."),(0,o.kt)("h3",{id:"update-the-main-content-area"},"Update the main content area"),(0,o.kt)("p",null,"At this point we need to change the content being shown when navigation is performed. To do that, we need to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"Center")," widget that is the ",(0,o.kt)("inlineCode",{parentName:"p"},"child")," property of our ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosWindow")," and replace it with an ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexedStack"),". We'll then add two ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosScaffold"),' widgets two represent our two "pages" that we can navigate between by using the sidebar.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"what is a ",(0,o.kt)("inlineCode",{parentName:"h5"},"MacosScaffold"),"?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MacosScaffold"),' is what you might consider a "page" in an app. It provides a basic structure with which to lay out content in your app at a lower level than a ',(0,o.kt)("inlineCode",{parentName:"p"},"MacosWindow"),", but at a higher level than common layout widgets like ",(0,o.kt)("inlineCode",{parentName:"p"},"Stack"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Column"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Row"),". In this way, it is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"material")," library's ",(0,o.kt)("inlineCode",{parentName:"p"},"Scaffold")," widget and the ",(0,o.kt)("inlineCode",{parentName:"p"},"cupertino")," library's ",(0,o.kt)("inlineCode",{parentName:"p"},"CupertinoPageScaffold")," widget."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart" showLineNumbers',title:'"main.dart"',showLineNumbers:!0},"import 'package:flutter/cupertino.dart';\nimport 'package:macos_ui/macos_ui.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return MacosApp(\n      theme: MacosThemeData.light(),\n      darkTheme: MacosThemeData.dark(),\n      home: const MyHomePage(),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key}) : super(key: key);\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _pageIndex = 0;\n  @override\n  Widget build(BuildContext context) {\n    return MacosWindow(\n      sidebar: Sidebar(\n        minWidth: 200,\n        builder: (context, scrollController) {\n          return SidebarItems(\n            currentIndex: _pageIndex,\n            onChanged: (index) {\n              setState(() => _pageIndex = index);\n            },\n            items: const [\n              SidebarItem(\n                leading: MacosIcon(CupertinoIcons.home),\n                label: Text('Home'),\n              ),\n              SidebarItem(\n                leading: MacosIcon(CupertinoIcons.search),\n                label: Text('Explore'),\n              ),\n            ],\n          );\n        },\n      ),\n      // highlight-start\n      child: IndexedStack(\n        index: _pageIndex,\n        children: [\n          MacosScaffold(\n            children: [\n              ContentArea(\n                builder: ((context, scrollController) {\n                  return const Center(\n                    child: Text('Home'),\n                  );\n                }),\n              ),\n            ],\n          ),\n          MacosScaffold(\n            children: [\n              ContentArea(\n                builder: ((context, scrollController) {\n                  return const Center(\n                    child: Text('Explore'),\n                  );\n                }),\n              ),\n            ],\n          ),\n        ],\n      ),\n      // highlight-end\n    );\n  }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Be Aware")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"MacosScaffold")," widgets only accept two types of ",(0,o.kt)("inlineCode",{parentName:"p"},"children"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentArea")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ResizablePane"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," property can only contain ",(0,o.kt)("strong",{parentName:"p"},"one")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentArea")," but can included multiple (or zero) ",(0,o.kt)("inlineCode",{parentName:"p"},"ResizablePane"),"s."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's a good idea to break out the widgets you're using as the ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," of your ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexedStack")," into their own classes."))),(0,o.kt)("p",null,"At this point, your application is fully interactive - when you click on an item in the sidebar, the content area will be udpated appropriately."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Congratulations!"),(0,o.kt)("p",null,"You've written your first Flutter application for macOS using ",(0,o.kt)("inlineCode",{parentName:"p"},"macos_ui"),"! Try out some more codelabs, check out the rest of the documentation, or just start building!"))}h.isMDXComponent=!0},9198:function(e,t,n){t.Z=n.p+"assets/images/basics_1-5fc9a1dec9d471ab06d91d4161840c88.png"},9297:function(e,t,n){t.Z=n.p+"assets/images/basics_3-19fa62c21beb4fb1b2f1f7a3d32c2227.png"}}]);
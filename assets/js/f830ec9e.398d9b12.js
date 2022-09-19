"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9070],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const i={slug:"12-build-with-dapr",title:"12. Build With Dapr!",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},o=void 0,p={permalink:"/Cloud-Native/blog/12-build-with-dapr",source:"@site/blog/2022-09-12/index.md",title:"12. Build With Dapr!",description:"<FIXME>",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:7.09,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"12-build-with-dapr",title:"12. Build With Dapr!",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},prevItem:{title:"\ud83d\ude80 | Use Custom Handlers For Go",permalink:"/Cloud-Native/blog/zero2hero-func-03"}},s={image:a(8389).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Hello, Dapr!",id:"hello-dapr",level:2},{value:"Dapr + Apps: A Sidecar Approach",id:"dapr--apps-a-sidecar-approach",level:2},{value:"Dapr Building Blocks: API Interactions",id:"dapr-building-blocks-api-interactions",level:2},{value:"Integrate Dapr &amp; Azure Container Apps",id:"integrate-dapr--azure-container-apps",level:2},{value:"1. Enable Dapr in ACA: Settings",id:"1-enable-dapr-in-aca-settings",level:3},{value:"2. Configure Dapr in ACA:  Components",id:"2-configure-dapr-in-aca--components",level:3},{value:"Exercise: Deploy Dapr-enabled ACA",id:"exercise-deploy-dapr-enabled-aca",level:2},{value:"Resources",id:"resources",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/12-build-with-dapr"}),(0,r.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Dapr Integration with ACA"}),(0,r.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Dapr Integration with ACA"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/12-build-with-dapr"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 12")," of #30DaysOfServerless!"),(0,r.kt)("p",null,"So far we've looked at Azure Container Apps - what it is, how it enables microservices communication, and how it enables auto-scaling with KEDA compliant scalers. Today we'll shift gears and talk about Dapr - the Distributed Application Runtime - and how it makes microservices development with ACA ",(0,r.kt)("em",{parentName:"p"},"easier")," with core building blocks and a sidecar architecture!"),(0,r.kt)("p",null,"Ready? Let's go!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is Dapr and why use it?"),(0,r.kt)("li",{parentName:"ul"},"Building Block APIs"),(0,r.kt)("li",{parentName:"ul"},"Dapr Quickstart and Tutorials"),(0,r.kt)("li",{parentName:"ul"},"Dapr-enabled ACA: A Sidecar Approach"),(0,r.kt)("li",{parentName:"ul"},"Exercise: Build & Deploy a Dapr-enabled ACA."),(0,r.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8389).Z,width:"1600",height:"672"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hello-dapr"},"Hello, Dapr!"),(0,r.kt)("p",null,"Building distributed applications is hard. Building ",(0,r.kt)("strong",{parentName:"p"},"reliable and portable microservces")," means having middleware that deals with challenges like service discovery, sync and async communications, state management, secure information sharing and more. Integrating these support services into your application can be challenging from both development and maintenance perspectives, adding complexity that is independent of the core application logic you want to focus on."),(0,r.kt)("p",null,"This is where ",(0,r.kt)("a",{parentName:"p",href:"https://dapr.io"},(0,r.kt)("strong",{parentName:"a"},"Dapr (Distributed Application Runtime)"))," shines - ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/"},"it's defined as:"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," a portable, event-driven runtime that makes it easy for any developer to build resilient, stateless and stateful applications that run on the cloud and edge and embraces the diversity of languages and developer frameworks. ")),(0,r.kt)("p",null,"But what does this actually mean to me as an app developer? "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dapr--apps-a-sidecar-approach"},"Dapr + Apps: A Sidecar Approach"),(0,r.kt)("p",null,"The strength of Dapr lies in its ability to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"abstract complexities of distributed systems middleware - with  ",(0,r.kt)("strong",{parentName:"li"},"Building Block APIs")," that implement components using best practices to tackle key challenges."),(0,r.kt)("li",{parentName:"ul"},"implement a ",(0,r.kt)("strong",{parentName:"li"},"Sidecar Pattern")," with interactions via APIs - allowing applications to keep their codebase clean and focus on app logic."),(0,r.kt)("li",{parentName:"ul"},"be ",(0,r.kt)("strong",{parentName:"li"},"Incrementally Adoptable")," - allowing developers to start by integrating one API, then evolving to use more as and when needed."),(0,r.kt)("li",{parentName:"ul"},"be ",(0,r.kt)("strong",{parentName:"li"},"Platform Agnostic")," - allowing applications to be developed in a preferred language or framework without impacting integration capabilities.")),(0,r.kt)("p",null,"The application-dapr sidecar interaction is illustrated below. The API abstraction allows applications to get the desired functionality without having to know ",(0,r.kt)("em",{parentName:"p"},"how")," it was implemented, or without having to integrate Dapr-specific code into their codebase. Note how the sidecar process listens on port ",(0,r.kt)("inlineCode",{parentName:"p"},"3500")," and the API provides clear routes for the specific building blocks supported by Dapr (e.g, ",(0,r.kt)("inlineCode",{parentName:"p"},"/secrets"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/state")," etc.)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.dapr.io/images/overview-sidecar-model.png",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dapr-building-blocks-api-interactions"},"Dapr Building Blocks: API Interactions"),(0,r.kt)("p",null,"Dapr Building Blocks refers to ",(0,r.kt)("strong",{parentName:"p"},"HTTP and gRPC endpoints exposed by Dapr")," API endpoints exposed by the Dapr sidecar, providing key capabilities like state management, observability, service-to-service invocation, pub/sub messaging and more to the associated application. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Building Blocks: Under the Hood")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{parentName:"td",src:"https://docs.dapr.io/images/concepts-building-blocks.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Dapr API is implemented by ",(0,r.kt)("a",{parentName:"td",href:"https://docs.dapr.io/concepts/building-blocks-concept/"},"modular components")," that codify best practices for tackling the specific challenge that they represent. The API abstraction allows component implementations to evolve, or alternatives to be used , without requiring changes to the application codebase.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.dapr.io/images/building_blocks.png",alt:null})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/concepts/building-blocks-concept/"},"latest Dapr release")," has the building blocks shown in the above figure. Not all capabilities are available to Azure Container Apps by default -  check the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#unsupported-dapr-capabilities"},"documentation")," for the latest updates on this. For now, Azure Container Apps + Dapr integration provides the following capabilities to the application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/building-blocks/service-invocation/service-invocation-overview/"},"Service-to-Service Invocation")," for synchronous communications"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/building-blocks/state-management/state-management-overview/"},"State management")," for transactions and CRUD operations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/building-blocks/pubsub/pubsub-overview"},"Pub/Sub messaging")," for asynchronous (message-driven) communications"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/building-blocks/bindings/bindings-overview/"},"Bindings")," for seamless workflow integrations using event triggers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/building-blocks/actors/actors-overview/"},"Actors")," for encapsulated & reusable objects that enable reliable, scalable behaviors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/observability"},"Observability")," to monitor application events for health and performance")),(0,r.kt)("p",null,"In the next section, we'll dive into Dapr-enabled Azure Container Apps. Before we do that, here are a couple of resources to help you explore the Dapr platform by itself, and get more hands-on experience with the concepts and capabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/quickstarts/"},"Dapr Quickstarts")," - build your first Dapr app, then explore quickstarts for a core APIs including service-to-service invocation, pub/sub, state mangement, bindings and secrets management."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/tutorials/"},"Dapr Tutorials")," - go beyond the basic quickstart and explore more realistic service integrations and usage scenarios. Try the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dapr/quickstarts/tree/master/tutorials/distributed-calculator"},"distributed calculator")," example!")),(0,r.kt)("h2",{id:"integrate-dapr--azure-container-apps"},"Integrate Dapr & Azure Container Apps"),(0,r.kt)("p",null,"Dapr currently has a ",(0,r.kt)("a",{parentName:"p",href:"https://v1-9.docs.dapr.io/"},"v1.9 (preview)")," version, but Azure Container Apps supports ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview#current-supported-dapr-version"},"Dapr v1.8.3"),". In this section, we'll look at what it takes to enable, configure, and use, Dapr integration with Azure Container Apps. It involves 3 steps: ",(0,r.kt)("em",{parentName:"p"},"enabling")," Dapr using settings, ",(0,r.kt)("em",{parentName:"p"},"configuring")," Dapr components (API) for use, then invoking the APIs."),(0,r.kt)("p",null,"Here's a simple ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#dapr-settings"},"a publisher-subscriber scenario")," from the documentation. We have two Container apps identified as ",(0,r.kt)("inlineCode",{parentName:"p"},"publisher-app")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber-app")," deployed in a single environment. Each ACA has an activated ",(0,r.kt)("inlineCode",{parentName:"p"},"daprd")," sidecar, allowing them to use the ",(0,r.kt)("em",{parentName:"p"},"Pub/Sub")," API to communicate asynchronously with each other - without having to write the underlying pub/sub implementation themselves. Rather, we can see that the Dapr API uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"pubsub,azure.servicebus")," ",(0,r.kt)("strong",{parentName:"p"},"component")," to implement that capability."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/azure/container-apps/media/dapr-overview/dapr-in-aca.png",alt:"Pub/sub example"})),(0,r.kt)("p",null,"Let's look at how this is setup."),(0,r.kt)("h3",{id:"1-enable-dapr-in-aca-settings"},"1. ",(0,r.kt)("a",{parentName:"h3",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#enable-dapr"},"Enable Dapr in ACA: Settings")),(0,r.kt)("p",null,"We can enable Dapr integration in the Azure Container App during creation by ",(0,r.kt)("em",{parentName:"p"},"specifying settings")," in one of two ways, based on your development preference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using Azure CLI"),": use custom commandline options for each setting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using Infrastructure-as-Code (IaC)"),": using properties for Bicep, ARM templates")),(0,r.kt)("p",null,"Once enabled, Dapr will run in the same ",(0,r.kt)("em",{parentName:"p"},"environment")," as the Azure Container App, and listen on ",(0,r.kt)("strong",{parentName:"p"},"port 3500")," for API requests. The Dapr sidecar can be shared my multiple Container Apps ",(0,r.kt)("em",{parentName:"p"},"deployed in the same environment"),". "),(0,r.kt)("p",null,"There are four main settings - the example below shows the ARM template properties, but you can ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#enable-dapr"},"find the equivalent CLI parameters here")," for comparison."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dapr.enabled")," - enable Dapr for Azure Container App"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dapr.appPort")," - specify port on which app is listening"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dapr.appProtocol")," - specify if using ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," (default) or ",(0,r.kt)("inlineCode",{parentName:"li"},"gRPC")," for API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dapr.appId")," - specify unique application ID for service discovery, usage")),(0,r.kt)("p",null,"These are defined under the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties.configuration")," section for your resource. Changing Dapr settings does not update the revision but it ",(0,r.kt)("em",{parentName:"p"},"will")," restart ACA revisions and replicas. Here is what the relevant section of the ARM template looks like for the ",(0,r.kt)("inlineCode",{parentName:"p"},"publisher-app")," ACA in the scenario shown above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"dapr": {\n   "enabled": true,\n   "appId": "publisher-app",\n   "appProcotol": "http",\n   "appPort": 80\n }\n')),(0,r.kt)("h3",{id:"2-configure-dapr-in-aca--components"},"2. ",(0,r.kt)("a",{parentName:"h3",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#configure-dapr-components"},"Configure Dapr in ACA:  Components")),(0,r.kt)("p",null,"The next step after activating the Dapr sidecar, is to define the ",(0,r.kt)("em",{parentName:"p"},"APIs")," that you want to use and potentially specify the ",(0,r.kt)("strong",{parentName:"p"},"Dapr components")," (specific implementations of that API) that you prefer. These components are created at environment-level and can be accessed by all Dapr-enabled Container Apps running in it. "),(0,r.kt)("p",null,"By default, Dapr-enabled containers apps in an environment will load the complete set of deployed components -- ",(0,r.kt)("strong",{parentName:"p"},"use the ",(0,r.kt)("inlineCode",{parentName:"strong"},"scopes")," property")," to be more specific about components loaded by each ACA. Here's what the ARM template ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," section looks like for the example above. This tells us that the environment has a ",(0,r.kt)("inlineCode",{parentName:"p"},"dapr-pubsub")," component of type ",(0,r.kt)("inlineCode",{parentName:"p"},"pubsub.azure.servicebus")," deployed - where that component is loaded by default in apps specified by name (",(0,r.kt)("inlineCode",{parentName:"p"},"publisher-app"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber-app"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resources": [\n    {\n      "type": "daprComponents",\n      "name": "dapr-pubsub",\n      "properties": {\n        "componentType": "pubsub.azure.servicebus",\n        "version": "v1",\n        "secrets": [\n          {\n            "name": "sb-root-connectionstring",\n            "value": "value"\n          }\n        ],\n        "metadata": [\n          {\n            "name": "connectionString",\n            "secretRef": "sb-root-connectionstring"\n          }\n        ],\n        // Application scopes\n        "scopes": ["publisher-app", "subscriber-app"]\n\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"With this configuration, the ACA is now set to use pub/sub capabilities from the Dapr sidecar, using standard HTTP requests to the exposed API endpoint for this service."),(0,r.kt)("h2",{id:"exercise-deploy-dapr-enabled-aca"},"Exercise: Deploy Dapr-enabled ACA"),(0,r.kt)("p",null,"In the next post in this series, we'll be doing a walkthrough of a more complex example, to show how Dapr-enabled Azure Container Apps are created and deployed. "),(0,r.kt)("p",null,"However, you can get hands-on experience with these concepts by walking through one of these two tutorials, each providing an alternative approach to configure and setup the application describe in the scenario below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tutorial 1"),": ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr"},"Deploy a Dapr-enabled ACA using ",(0,r.kt)("strong",{parentName:"a"},"Azure CLI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tutorial 2"),": ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr"},"Deploy a Dapr-enabled ACA using ",(0,r.kt)("strong",{parentName:"a"},"Bicep or ARM templates")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/azure/container-apps/media/microservices-dapr/azure-container-apps-microservices-dapr.png",alt:null})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Here are the main resources to explore for self-study:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://v1-9.docs.dapr.io/concepts/"},"Dapr Documentation: Core Concepts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/quickstarts/"},"Dapr Quickstarts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/tutorials/"},"Dapr Tutorials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/dapr-overview"},"Azure Container Apps: Dapr Integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr"},"Dapr-enable Azure Container Apps: Using Azure CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr-azure-resource-manager"},"Dapr-enabled Azure Container Apps: Using Bicep or ARM"))))}u.isMDXComponent=!0},8389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-cc3cfe656444b6f21e4bc8d2c541bc3e.png"}}]);
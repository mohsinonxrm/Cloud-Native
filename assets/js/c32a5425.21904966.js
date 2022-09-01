"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3508],{1650:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"01-kickoff","metadata":{"permalink":"/Cloud-Native/blog/01-kickoff","source":"@site/blog/2022-09-01/index.md","title":"01. It\'s 30DaysOfServerless!","description":"What We\'ll Cover","date":"2022-09-01T00:00:00.000Z","formattedDate":"September 1, 2022","tags":[{"label":"hello","permalink":"/Cloud-Native/blog/tags/hello"},{"label":"serverless-september","permalink":"/Cloud-Native/blog/tags/serverless-september"}],"readingTime":4.255,"hasTruncateMarker":false,"authors":[{"name":"Nitya Narasimhan","title":"Senior Cloud Advocate, Illustrator","url":"https://github.com/nitya","imageURL":"https://github.com/nitya.png","key":"nitya"}],"frontMatter":{"slug":"01-kickoff","title":"01. It\'s 30DaysOfServerless!","authors":["nitya"],"draft":false,"tags":["hello","serverless-september"],"hide_table_of_contents":false,"toc_min_heading_level":2,"toc_max_heading_level":3,"keywords":["azure","functions","serverless","concepts"]},"nextItem":{"title":"Welcome Students!","permalink":"/Cloud-Native/blog/students"}},"content":"<head>\\n  <meta name=\\"twitter:url\\" content=\\"https://azure.github.io/Cloud-Native/blog/01-kickoff\\" />\\n  <meta name=\\"twitter:title\\" content=\\"#01 - It\'s 30DaysOfServerless!\\" />\\n  <meta name=\\"twitter:description\\" content=\\"Join #ServerlessSeptember as we kickoff #30DaysOfServerless with a look at @AzureFunctions and more. Visit https://aka.ms/serverless-september\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://azure.github.io/Cloud-Native/assets/images/post-kickoff-4a04995b44f0cc4a784fb4ab5e29cf7c.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta name=\\"twitter:creator\\" content=\\"@nitya\\" />\\n  <meta name=\\"twitter:site\\" content=\\"@AzureStaticApps\\" /> \\n</head>\\n\\n## What We\'ll Cover\\n * What is Serverless September? (6 initiatives)\\n * How can I _participate_? (3 actions)\\n * How can I _skill up_ (30 days)\\n * Who is behind this? (Team Contributors)\\n * How can _you_ contribute? (Custom Issues)\\n * **Exercise**: Take the Cloud Skills Challenge!\\n * **Resources**: Save the Serverless September Collection.\\n\\n---\\n\\n![Serverless September](../../static/img/banners/post-kickoff.png)\\n\\n\\nWelcome to `Day 01` of [\ud83c\udf42 #ServerlessSeptember](https://aka.ms/serverless-september)! Today, we kick off a full month of content and activities to skill you up on all things Serverless on Azure with content, events, and community interactions! Read on to learn about what we have planned!\\n\\n---\\n\\n## Explore our initiatives\\n\\nWe have a number of initiatives planned for the month to help you learn and skill up on relevant technologies. Click on the links to visit the relevant pages for each. \\n\\n* [#30DaysOfServerless](/serverless-september/30DaysOfServerless) - 4 themed weeks of daily articles in a structured roadmap\\n* [Zero To Hero](/serverless-september/ZeroToHero) - 4-part series from Product Engineering teams on best practices\\n* [Serverless Hacks](/serverless-september/ServerlessHacks) - build a serverless tollbooth by solving 8 challenges - with help!\\n* [Cloud Skills Challenge](/serverless-september/30DaysOfServerless) - skill up by competing with peers to complete modules\\n* [Ask The Expert](/serverless-september/AskTheExpert/) - join live Q&A sessions with Product Engineering teams\\n* [Community Buzz](https://github.com/Azure/Cloud-Native/issues/new/choose) - participate by submitting questions, or contributing content\\n\\nWe\'ll go into more details about **#30DaysOfServerless** in this post - don\'t forget to [subscribe](https://azure.github.io/Cloud-Native/blog/rss.xml) to the blog to get daily posts delivered directly to your preferred feed reader!\\n\\n---\\n\\n## Register for events!\\n\\nWhat are 3 things you can do today, to jumpstart your learning journey?\\n\\n * **Register** for live Q&A sessions (free, online)\\n    - Sep 15 - [Ask The Expert: Azure Functions](https://reactor.microsoft.com/en-us/reactor/events/17000/)\\n    - Sep 29 - [Ask the Expert: Azure Container Apps](https://reactor.microsoft.com/en-us/reactor/events/17000/)\\n  * **Register** for the [Cloud Skills Challenge](https://docs.microsoft.com/en-us/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c) - 30 days to complete it!\\n * **Register** for the [Serverless Hacks Challenge](https://docs.microsoft.com/en-us/events/learn-events/reactor-serverlessseptember/?wt.mc_id=eventspg_16946_webpage_reactor) office hours (weekly)\\n\\n![Serverless Hacks](../../static/img/banners/serverless-hacks.png)\\n\\n---\\n\\n## #30DaysOfServerless\\n\\n[#30DaysOfServerless](/serverless-september/30DaysOfServerless) is a month-long series of daily blog posts grouped into 4 themed weeks - taking you from core concepts to end-to-end solution examples in 30 days. Each article will be short (5-8 mins reading time) and provide exercises and resources to help you reinforce learnings and take next steps.\\n\\nThis series focuses on the [Serverless On Azure](https://azure.microsoft.com/en-us/solutions/serverless/) learning journey in **four stages**, each building on the previous week to help you skill up in a beginner-friendly way:\\n * **Week 1:** Get started with serverless using [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview) \\n * **Week 2:** Build & deploy microservices with [Azure Container Apps](https://docs.microsoft.com/en-us/azure/container-apps/overview) and [Dapr](https://dapr.io/).\\n * **Week 3:** Streamline integrations using [Azure Logic Apps](https://docs.microsoft.com/en-us/azure/logic-apps/) and [Azure Event Grid](https://docs.microsoft.com/en-us/azure/event-grid/overview)\\n * **Week 4:** Develop End-to-End solutions with [Serverless on Azure](https://azure.microsoft.com/en-us/solutions/serverless/)\\n\\n![](./img/banner.png)\\n\\nWe have a [tentative roadmap](/serverless-september/30DaysOfServerless) for the topics we hope to cover and will keep this updated as we go with links to actual articles as they get published.\\n\\n:::info Week 1: FOCUS ON FUNCTIONS \u26a1\ufe0f\\n\\nHere\'s a sneak peek at what we have planned for week 1. We\'ll start with a broad look at fundamentals, walkthrough examples for each targeted programming language, then wrap with a post that showcases the role of Azure Functions in powering different serverless scenarios.\\n\\n * Sep 02: Learn Core Concepts for Azure Functions\\n * Sep 03: Build and deploy your first Function\\n * Sep 04: Azure Functions - for Java Developers!\\n * Sep 05: Azure Functions - for JavaScript Developers!\\n * Sep 06: Azure Functions - for .NET Developers!\\n * Sep 07: Azure Functions - for Python Developers!\\n * Sep 08: Wrap: Azure Functions + Serverless on Azure\\n\\n:::\\n\\n---\\n\\n## Ways to Participate..\\n\\nWe hope you are as excited as we are, to jumpstart this journey. We want to make this a **useful, beginner-friendly** journey and we need your help!\\n\\nHere are the many ways you can participate:\\n\\n* **[Follow Azure on dev.to](https://dev.to/azure)** - we\'ll republish posts under [this series page](https://dev.to/nitya/series/19576) and welcome comments and feedback there!\\n* **[Discussions on GitHub](https://github.com/Azure/Cloud-Native/discussions)** - Use this if you have feedback for us (on how we can improve these resources), or want to chat with your peers about serverless topics.\\n* **[Custom Issues](https://github.com/Azure/Cloud-Native/issues/new/choose)** - just pick a template, create a new issue by filling in the requested details, and submit. You can use these to:\\n    - submit questions for **AskTheExpert** (live Q&A) ahead of time\\n    - submit your own articles or projects for community to learn from\\n    - share your **ServerlessHack** and get listed in our Hall Of Fame!\\n    - report bugs or share ideas for improvements\\n\\nHere\'s the list of custom issues currently defined.\\n\\n![Community Buzz](./img/community-buzz.png)\\n\\n\\n## Let\'s Get Started!\\n\\nNow you know everything! We hope you are as excited as we are to dive into a full month of active learning and doing! Don\'t forget to [subscribe](https://azure.github.io/Cloud-Native/blog/rss.xml) for updates in your favorite feed reader! **And look out for our first Azure Functions post tomorrow!**\\n\\n\\n---"},{"id":"students","metadata":{"permalink":"/Cloud-Native/blog/students","source":"@site/blog/2022-08-31/index.md","title":"Welcome Students!","description":"\u2728 Serverless September For Students","date":"2022-08-31T00:00:00.000Z","formattedDate":"August 31, 2022","tags":[{"label":"students","permalink":"/Cloud-Native/blog/tags/students"},{"label":"serverless-september","permalink":"/Cloud-Native/blog/tags/serverless-september"}],"readingTime":2.575,"hasTruncateMarker":false,"authors":[{"name":"Sara Gibbons","title":"Next Gen Experiences Advocate @Microsoft","url":"https://github.com/saragibby","imageURL":"https://github.com/saragibby.png","key":"sara"}],"frontMatter":{"slug":"students","title":"Welcome Students!","authors":["sara"],"draft":false,"tags":["students","serverless-september"]},"prevItem":{"title":"01. It\'s 30DaysOfServerless!","permalink":"/Cloud-Native/blog/01-kickoff"},"nextItem":{"title":"Hello, ServerlessSeptember","permalink":"/Cloud-Native/blog/welcome"}},"content":"## \u2728 Serverless September For Students\\n\\nMy love for the tech industry grows as it evolves. Not just for the new technologies to play with, but seeing how paths into a tech career continue to expand. Allowing so many new voices, ideas and perspectives to our industry. With [serverless computing](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-serverless-computing/?WT.mc_id=academic-75239-sagibbon) removing barriers of entry for so many.\\n\\nIt\'s a reason I enjoy working with universities and students. I get to hear the excitement of learning, fresh ideas and perspectives from our student community. All you students are incredible! How you view serverless, and what it can do, so cool!  \\n\\nThis year for Serverless September we want to hear all the amazing ways our student community is learning and working with Azure Serverless, and have all new ways for you to participate. \\n\\n### Getting Started\\n\\nIf you don\'t already have an [Azure for Students](https://docs.microsoft.com/en-us/azure/education-hub/azure-dev-tools-teaching/azure-students-program?WT.mc_id=academic-75239-sagibbon) account you can easily get your **FREE** account created at [Azure for Students Sign up](https://azure.microsoft.com/en-us/free/students/?WT.mc_id=academic-75239-sagibbon).\\n\\nIf you are new to serverless, here are a couple links to get you started:\\n * [Build Cloud Native Apps on Azure](https://azure.microsoft.com/en-us/solutions/cloud-native-apps/?WT.mc_id=academic-75239-sagibbon)\\n * [Go Serverless On Azure](https://azure.microsoft.com/en-us/solutions/serverless/?WT.mc_id=academic-75239-sagibbon)\\n\\n\\n### No Experience, No problem\\n\\nFor Serverless September we have planned beginner friendly content all month long. Covering such services as:\\n * [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview?WT.mc_id=academic-75239-sagibbon)\\n * [Azure Container Apps](https://docs.microsoft.com/en-us/azure/container-apps/overview?WT.mc_id=academic-75239-sagibbon)\\n * [Distributed Application Runtime (dapr)](https://dapr.io/)\\n * [Azure Event Grid](https://docs.microsoft.com/en-us/azure/event-grid/?WT.mc_id=academic-75239-sagibbon)\\n * [Azure Logic Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=academic-75239-sagibbon)\\n * [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/logic-apps/?WT.mc_id=academic-75239-sagibbon)\\n\\nYou can follow [#30DaysOfServerles](https://azure.github.io/Cloud-Native/blog/) here on the blog for daily posts covering concepts, scenarios, and how to create end-to-end solutions. \\n\\nJoin the [Cloud Skills Challenge](https://azure.github.io/Cloud-Native/serverless-september/CloudSkills/) where we have selected a list of Learn Modules for you to go through at your own pace, including deploying a full stack application with [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/logic-apps/?WT.mc_id=academic-75239-sagibbon).\\n\\n\\n### Have A Question \\n\\nWe want to hear it! All month long we will have **Ask The Expert** sessions. [Submit your questions](https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++) at any time and will be be sure to get one of our Azure Serverless experts to get you an answer. \\n\\n### Share What You\'ve Created \\n\\nIf you have written a blog post, recorded a video, have an open source Azure Serverless project, we\'d love to see it! Here is some links for you to share your creations\\n\\n* [Written an article or recorded a video involving Azure Serverless](https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=&template=---community-buzz--share-technical-articles.md&title=)\\n* [Have an open source Serverless project you built](https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=&template=---community-showcase--share-code-projects.md&title=%5BShowcase+Submission%5D)\\n* [Crafted a Serverless Hack](https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=&template=---serverless-hacks--share-your-hack-.md&title=%5BServerless+Hacks%5D)\\n\\n## \ud83e\udded Explore Student Resources\\n\\n* [Microsoft Student Hub](https://docs.microsoft.com/en-us/learn/student-hub/?WT.mc_id=academic-75239-sagibbon) - highlight student focused resources across Microsoft\\n* [Microsoft Learn Student Ambassadors](https://studentambassadors.microsoft.com/?WT.mc_id=academic-75239-sagibbon) - our student focused community program\\n* [Imagine Cup](https://imaginecup.microsoft.com/en-us/Events?ocid=pre_web_ambassador_learnmore_all?WT.mc_id=academic-75239-sagibbon) - our annual student innovation competition\\n\\n## \u26a1\ufe0f Join us!\\n\\nMultiple teams across Microsoft are working to create Serverless September! They all want to hear from our incredible student community. We can\'t wait to share all the Serverless September resources and hear what you have learned and created. Here are some ways to keep up to date on all Serverless September activity:\\n\\n* **[Subscribe to this blog](https://azure.github.io/Cloud-Native/blog/rss.xml)** - get notified early when we publish!\\n* **[Follow Azure on dev.to](https://dev.to/azure)** - look for the #ServerlessSeptember series!\\n* **[Bookmark this site](https://aka.ms/serverless-september?WT.mc_id=academic-75239-sagibbon)** and check back regularly for updates."},{"id":"welcome","metadata":{"permalink":"/Cloud-Native/blog/welcome","source":"@site/blog/2022-08-17/index.md","title":"Hello, ServerlessSeptember","description":"\ud83c\udf42 It\'s September?","date":"2022-08-17T00:00:00.000Z","formattedDate":"August 17, 2022","tags":[{"label":"hello","permalink":"/Cloud-Native/blog/tags/hello"},{"label":"serverless-september","permalink":"/Cloud-Native/blog/tags/serverless-september"}],"readingTime":2.38,"hasTruncateMarker":false,"authors":[{"name":"Nitya Narasimhan","title":"Senior Cloud Advocate, Illustrator","url":"https://github.com/nitya","imageURL":"https://github.com/nitya.png","key":"nitya"},{"name":"Devanshi Joshi","title":"Product Marketing Manager","url":"https://github.com/devanshidiaries","imageURL":"https://pbs.twimg.com/profile_images/1520928730230652928/00BaK5xn_400x400.jpg","key":"devanshi"}],"frontMatter":{"slug":"welcome","title":"Hello, ServerlessSeptember","authors":["nitya","devanshi"],"draft":false,"tags":["hello","serverless-september"],"image":"../../static/img/banners/post-kickoff.png"},"prevItem":{"title":"Welcome Students!","permalink":"/Cloud-Native/blog/students"}},"content":"## \ud83c\udf42 It\'s September?\\n\\nWell, almost! September 1 is a few days away and I\'m excited! Why? Because it\'s the perfect time to revisit **#Serverless September**, a month of\\n> \\".. content-driven learning where experts and practitioners share their insights and tutorials on how to use serverless technologies effectively in today\'s ecosystems\\"\\n\\nIf the words look familiar, it\'s because I actually wrote them [2 years ago](https://dev.to/azure/serverlessseptember-just-5-things-you-need-to-know-3p9e) when we launched the 2020 edition of this series. You might even recall _this_ whimsical image I drew to capture the concept of September (fall) and Serverless (event-driven on-demand compute). Since then, a lot has happened in the serverless ecosystem!\\n\\n\\nYou can still browse the [2020 Content Collection](https://dev.to/azure/serverlessseptember-2020-content-collection-443k) to find great talks, articles and code samples to get started using Serverless on Azure. But read on to learn what\'s new!\\n\\n![](./img/2020-banner.png)\\n\\n\\n\\n\\n## \ud83e\uddd0 What\'s New?\\n\\nWell - quite a few things actually. This year, [Devanshi Joshi](https://twitter.com/devanshidiaries) and I expanded the original concept in a number of ways. Here\'s just a few of them that come to mind.\\n\\n### New Website\\n\\nThis year, we created _this_ website (shortcut: [https://aka.ms/serverless-september](https://aka.ms/serverless-september)) to serve as a permanent home for content in 2022 and beyond - making it a  canonical source for the `#serverless` posts we publish to  tech communities like [dev.to](https://dev.to/azure), [Azure Developer Community](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/bg-p/AzureDevCommunityBlog) and [Apps On Azure](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/bg-p/AppsonAzureBlog/label-name/Serverless). We hope this also makes it easier for you to search for, or discover, current and past articles that support your learning journey!\\n\\nStart by bookmarking these two sites:\\n\\n * [Build Cloud Native Apps on Azure](https://azure.microsoft.com/en-us/solutions/cloud-native-apps/)\\n * [Go Serverless On Azure](https://azure.microsoft.com/en-us/solutions/serverless/)\\n\\n\\n### More Options\\n\\nPrevious years focused on curating and sharing content authored by Microsoft and community contributors, showcasing serverless examples and best practices. This was perfect for those who already had experience with the core devtools and concepts.\\n\\nThis year, we wanted to combine _beginner-friendly_ options (for those just starting their serverless journey) with more _advanced insights_ (for those looking to skill up further). Here\'s a sneak peek at some of the initiatives we\'ve got planned!\\n\\n![](../../static/img/banners/post-kickoff.png)\\n\\nWe\'ll also explore the full spectrum of serverless - from Functions-as-a-Service (for granularity) to Containerization (for deployment) and Microservices (for scalability). Here are a few services and technologies you\'ll get to learn more about:\\n\\n * [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)\\n * [Azure Container Apps](https://docs.microsoft.com/en-us/azure/container-apps/overview)\\n * [Distributed Application Runtime (dapr)](https://dapr.io/)\\n * [Azure Event Grid](https://docs.microsoft.com/en-us/azure/event-grid/)\\n * [Azure Logic Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/)\\n * [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/logic-apps/)\\n\\n\\n\\n\\n## \u26a1\ufe0f Join us!\\n\\nThis has been a labor of love from multiple teams at Microsoft! We can\'t wait to share all the resources that we hope will help _you_ skill up on all things Serverless this September! Here are a couple of ways to participate:\\n\\n* **[Subscribe to this blog](https://azure.github.io/Cloud-Native/blog/rss.xml)** - get notified early when we publish!\\n* **[Follow Azure on dev.to](https://dev.to/azure)** - look for the #ServerlessSeptember series!\\n* **[Bookmark this site](https://aka.ms/serverless-september)** and check back regularly for updates."}]}')}}]);
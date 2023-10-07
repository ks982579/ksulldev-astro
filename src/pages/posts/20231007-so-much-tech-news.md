---
layout: '@layouts/BlogLayout.astro'
title: 'So Much Tech News'
pubDate: 2023-10-07
description: 'It is hard to keep up with all the tech news, so here it is all at once. From Bard and Meta, to Mojo and Python. Many updates all at once!'
author: 'Kevin Sullivan'
tags: ["blogging", "language", "programming", "Google", "Bard", "Meta", "VR", "virtual reality", "AI", "Python", "Mojo", "Java", "Bun", "Nuritas", "Forcepoint", "WFH", "work from home", "remote work"]
draft: false
image:
    url: https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    alt: 'Person getting coffee from robot.'
---

## Introduction

Trying to keep up with all of the tech news out there is hard on any given day, but lately it has been nearly impossible. I've been meaning to summarize the bits I find interesting in a blog for some time now but haven't found the time (get to that at the end).


## Google

I will start with the AI news as that is the always the hottest topic these days. [Google Bard](https://bard.google.com/chat) is now available in Europe. Maybe it has been for a while, but I noticed only recently that I'm able to access it from Ireland. I have only given it a few test chats but Bard seems much more enthusiastic to help me do anything than ChatGPT. I am not saying it makes it better but I think it's interesting to notice almost a _personality_ difference between Chat and Bard. I think I remember seeing a video, sorry I can't find it again, but Bard can integrate into your email and answer questions in that way.

That is where my good Google news ends I think. Google is being sued by the US Department of Justice for antitrust violations. This is nothing new, but I caught an article that Google is being accused of [secretly altering search queries to drive ad revenue](https://www.techdirt.com/2023/10/04/google-accused-of-secretly-altering-search-queries-to-drive-more-ads-and-sales/). Basically, since they own like over 90% or the search engine market, they can alter your search results in the backend so that you aren't aware of it, providing you with technically worse results geared towards relieving you of your pesky cash. You see the ads, the companies pay Google for placement even if you never intended on shopping, and no one was the wiser really. 

### Alternative Search Enginges - My New Setup

As such, I have changed my default search engine from Google to [Qwant.com](https://www.qwant.com/). Basically, I moved from Chrome to Firefox, but Firefox defaults to Google as its search engine so I opted for Qwant. I did some research into different search engines, you can use DuckDuckGo as well, but that seems too much like Apple for me. Check out this article: [21 Great Search Engines You Can Use Instead of Google](https://www.searchenginejournal.com/alternative-search-engines/271409/#close). I also have the [Brave Browser](https://brave.com/) which is quite nice if you don't mind it uses Chromium under the hood. Might be better than Firefox though as _Bryan Lunduke_ discusses Mozilla's dodgy finances in his article [Firefox Money: Investigating the bizarre finances of Mozilla](https://lunduke.locals.com/post/4387539/firefox-money-investigating-the-bizarre-finances-of-mozilla). They are a not-for-profit company that owns two for-profit companies. Received donations, which they say is how they stay afloat, is hardly a drop in the bucket of overall revenue. Worst yet, the CEO paid himself a fat bonus that is _coincidentally_ nearly the size of donations. 

## Meta

There are numerous articles and videos about Meta's new headset, but I like this one, [Meta’s plan to beat Apple in spatial computing: cheaper, faster, and more fun](https://www.fastcompany.com/90959652/metas-plan-to-beat-apple-in-spatial-computing-cheaper-faster-and-more-fun). Basically, Meta's new Quest 3 headset will start around $500, which is significantly less expensive than Apple's Vision Pro headset which was around $3,500. One of the main differences is that Meta has geared its headset towards gaming as well as other functions, where Apple kind of left out the gaming bit. Die-hard Apple fans will no doubt lean towards the Vision Pro, but gamers (which are probably a considerable share of the tech market) will more likely lean towards the Quest 3. 

## Languages and Tools

I'll try to make this quick, leaving more research up to the reader as I have much reading to do for my Data Science course. Speaking of data science, [Mojo 🔥](https://www.modular.com/mojo) is now available for download. If you are unfamiliar, it's almost like if Python was more C like, giving it C superpower speed, but the familiar Python syntax. Mojo 🔥 helps to unlock parallel processing, quite handy for ML models. FreeCodeCamp also has a YouTube course already, [Mojo Programming Language - Full Course for Beginners](https://youtu.be/5Sm9IVMet9c?si=L9Z6ih1kEPcUdWuG), where a young and enthusiastic CS student gives a tour of the language. 

Also, [Bun v1.0](https://bun.sh/) dropped recently as a _drop-in replacement for Node_. I believe it is mostly written in [Zig](https://ziglang.org/) , which is quite new itself. Bun is like a batteries include JavaScript runtime that hopefully works with previous Node modules, comes with a built-in bundler, transpiles JSX to vanilla JavaScript, and is insanely fast. I haven't tried it yet, but it apparently already works with the Astro Framework. Also, luckily I do my work on WSL because it apparently doesn't have support for Windows yet. 

Finally, let's talk about some language updates. In his article, [Java 21 Features](https://www.happycoders.eu/java/java-21-features/) by Sven Woltmann, he outlines Java version 21 was released on the $19^{th}$ of September 2023. Some significant highlights include **virtual threads**, record patterns and pattern matching, string templates, and unnamed patterns and variables. Paul Krill also mentions in his article [JDK 21: The new features in Java 21](https://www.infoworld.com/article/3689880/jdk-21-the-new-features-in-java-21.html) improvements to the generational Z garbage collector.

[Python 3.12](https://docs.python.org/3.12/whatsnew/3.12.html) also dropped on the $2^{nd}$ of October 2023, with some nice updates as well. My favourite is actually a minor improvement they made to f-strings where you can use the same quotes that wrap the string inside the curly brackets. 

```python
# New f-string in 3.12
def useless_function(word: str) -> str:
	return word
print(f"Hello, {useless_function("world")}!")
```

You used to have to change the quotes around `"world"` because Python would recognize them as the closing quotation from the outside. You can watch this YouTube video by `@ArjanCodes`, [Python 3.12: All New Features You Need To Know!](https://youtu.be/udHmeAmOlbI?si=-YQDXTzpwUNFjwZN) for a nice review of the new features. There's also an update that will help overcome the GIL in Python 3.12, but a usable API for this feature is set for Python 3.13. Additionally, a few standard library packages have been deprecated. 

## New Job

I haven't had much time lately because I am trying to keep up with my studies for my MSc. in Computer Science, but I have also switched jobs. I have changed from Junior Software Engineer at [Nuritas](https://nuritas.com/) to Test Engineer I at [Forcepoint](https://www.forcepoint.com/), basically a junior level role. Why the move? Well, it was mostly the _move_ that spurred the choice. That is, Nuritas is located in Dublin and I live about 2.5hrs away on a train. Well, that's just the train ride, getting to the train station from home and then from the Dublin train station to the Office tagged on an additional hour. I won't bash the company as that would be unprofessional and I actually liked the job and the people I worked with. It was a bit intimidating at times as everyone except myself seemingly had a PhD; however, we all come from different walks of life. My decision came down to, I couldn't see myself making that journey to Dublin every week to sit at a desk and do basically the same work I could do comfortably from home. The train tickets were expensive, the journey was a huge waste... amount of time, and sometimes the evening train would be delayed. Due to an accident one evening, all trains were prevented from leaving their terminals and I was almost stuck in Dublin that night. 

So, why Forcepoint? I think video games and hacking were my two main interest at first when I started learning to program. In fact, keep it between you and me, but my initial inspiration was to hack a video game. And just if you were wondering like I was, according to [HackerBot](https://hackerbot.net/faq/54-are-game-hacks-legal), hacking a video game in most circumstances is legal. Forcepoint is a cyber security company that provides a suite of products to help businesses better protect their data. The company's suite of products peeked my interest and also gives me a sense of pride being apart of a team provides such critical services. The position is around creating automated tests to ensure their products are performing as intended. The team I am on uses Python, which I am also quite familiar with, to perform all sorts of actions, so I will still be happily coding and learning. Oh, and the office is only about 15 minutes from my apartment on my [e-scooter](https://shopeu.niu.com/products/niu-kqi3-pro-electric-kick-scooter-for-adults-fr-version?variant=43133477978359). Plus, the benefits from PTO to pension are very good, nothing to complain about. 

Am I happy to make the switch? Right now I am in the overwhelming learning phase of understanding the product I am working on, learning the tools our team uses for testing, and learning the testing process in general. Obviously being Test Engineer is much different than being a full-stack web developer. I do notice some cross-over of knowledge, skills, and technology, but there's also many differences. So, seeing beyond my initial discomfort I would answer that yes, I am happy to have made the move. The team I am currently on is also full of helpful and nice people, with a more rigorous adherence to Scrum. Additionally, I think moving to Forcepoint makes sense because the product is software. And as a programmer, I feel like it is a much better alignment with my skills and aspirations. 

## Work From Home

I also wrote a thought earlier about how I truly believe that **work from home** is the future and should be the direction we all head; however, seemingly the opposite is happening. Really, the only benefits to being dragged into an office are around stimulating the local economy on your lunch break, which can be quite expensive if you only make enough to get by. However, I don't believe that outweighs the costs on the environment, city infrastructure, mental health, personal time, and my personal safety. I probably have at least one _close-call_ every day that I currently travel to the office on my e-scooter. And that doesn't just put me at risk, but people around me, other people being forced into an office for a job they could do from home could sustain serious injuries for no good reason. 

I'm not the only one either, apparently [3 out of 5 Google employees in Ireland](https://www.businesspost.ie/news/three-in-five-google-staff-may-submit-legal-request-to-work-from-home/), from regular staff to managerial level, also don't agree with being unnecessarily forced into an office. The majority of respondents say they have been negatively affected by being called back to the office from working remote. The main sighted benefit is that connection and collaboration are improved in person, 2 things that can't actually be measured. Regardless, 63% of respondents disagreed. I personally find it easier and more effective to communicate through messaging systems like Teams and Slack. It gives me time to think about a question and construct an answer rather than having to come up with something on the spot. Sure, you might get answers quicker in person, pestering someone for information, but if they are answering a question on the spot, without thinking about the answer, what's the quality of that information? 

I am on team Work from Home, and I don't believe anything can sway me. I completely understand that some people prefer an office environment and prefer talking with people in person, and that is okay. They should have the option to do that, the company should support employees two work in a way that is most comfortable and beneficial for them. However, it should be a choice. 

Also, quick shout out to the Irish Government for dragging their feet on this. The article says a bill was passed in April 2023 allowing employees to request to work remotely. It's quite a disappointing right honestly, and passed very quietly through the Dáil (different story). Now, the Workplace Relations Commission was meant to draft some guidelines on accepting requests, which initially were supposed to be done in August or September from when I last read. Information is hard to find on the topic, but apparently this article states they are _expected_ to be complete by end of 2023. 

Thanks for reading if you made it this far. I plan to write more soon, maybe about a project or my courses. 

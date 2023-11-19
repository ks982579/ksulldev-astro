---
layout: '@layouts/BlogLayout.astro'
title: 'Time to Pay Up'
pubDate: 2023-11-19
description: "Blog was meant to be about Apple underpaying taxes to Ireland but OpenAI's recent decision to let go of CEO Sam Altman takes the cake."
author: 'Kevin Sullivan'
tags: ["blogging", "language", "programming", "Google", "Apple", "OpenAI", "Okta", "Confluence", "AI", "Python", "Artificial Intelligence", "AI"]
draft: false
image:
    url:  https://pixabay.com/get/g342b650fe80181a9aa80772b3d31491bb2c57d10ff30695abce824c51758a36e7252c8000578d9e9d0c990c83d8cf26a4a38a76df6e08955240d76963a375227cd9dba34a3a874e02b54cf113b9f40a9_640.jpg
    alt: 'Imagine an image of artificial intelligence.'
---

## Introduction

I get a lot of tech news to my inbox, but I honestly don't have a ton of time each day to read all of the interesting bits. In fact, I'm probably backed up over a month at this point. So, in this blog, I want to recap interesting things, news, stories, updates, etc... that I find. Additionally, this blog was meant to go out last week, but I have been locked away studying for my data science exam and didn't have a chance to finish until now. 

## Apple

This blog was inspired when I read about Apple possibly having to pay €13.1 billion in unpaid taxes to Ireland. Check out articles like [Explained: The Latest Twist in the Apple Tax Case Saga | RTE](https://www.rte.ie/news/business/2023/1108/1415460-apple-tax-explainer/). I believe the short story is that Apple had somehow gotten away with underpaying taxes in Ireland from 2003 to 2014. Apple had thought it was going to get away with it but the Advocate General of the EU's highest court released a statement that the courts should carry out a new assessment. 

This doesn't mean Apple will have to pay yet, or that they ever will. But it's an official opinion from an important figure that Apple has done a bit of wrong. Honestly, to a company with a net worth of...  $2.95 trillion according to [MacroTrends](https://www.macrotrends.net/stocks/charts/AAPL/apple/net-worth) as of the 17th of November, 2023, the tax bill is only 0.44% of their net worth, a mere slap on the wrist. But with that money, even going seriously over budget, Ireland could build 7 national children's hospitals, per [Explained: Controversy Surrounding National Children's Hospital | BreakingNews.IE](https://www.breakingnews.ie/ireland/explained-controversy-surrounding-national-childrens-hospital-1492241.html). 

## Artificial Intelligence

[Tech Groups Fight Back | FedScoop.com](https://fedscoop.com/tech-groups-push-back-on-biden-ai-executive-order-raising-concerns-that-it-could-crush-innovation/) as President Biden signs an executive order on AI. Some people like it and others say it is too broad and confusing, and can hinder development and innovation. I unfortunately haven't looked much further into this, but I thought it was worth noting. 

## OpenAI

There are articles everywhere, just [Qwant](https://www.qwant.com) "OpenAI" and look for an article, but I'll link [OpenAI Investors Push for Return of Ousted CEO Sam Altman](https://www.theguardian.com/technology/2023/nov/19/openai-investors-push-for-return-of-ousted-ceo-sam-altman-chatgpt). You can also look on YouTube, people read the OpenAI blog for you and give some insider opinions. Basically, in what appears to have been a rash decision, the board of OpenAI has fired founder and CEO Sam Altman. Reasons why were a bit ambiguous, but Sam was not "candid in his communications" with the board. According to [Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/candid) the word "candid" means, "honest and telling the truth, especially about something difficult or painful."

We could dive into technical definitions and wonder what painful truth Sam was withholding from the board, or perhaps whomever wrote the article liked that word and misused it. Either way, the linked article also suggests that major players, like Microsoft included, want Sam back as CEO. Their stock only dropped about 2% after the news. Oddly enough, and pointed out in a few YouTube videos, Sam was in a weird position that he did not own equity in the company he founded. As such, he was unable to prevent this decision. 

In another Guardian article, [Sam Altman 'was working on new venture' Before Sacking from OpenAI](https://www.theguardian.com/technology/2023/nov/18/earthquake-at-chatgpt-developer-as-senior-staff-quit-after-sacking-of-boss-sam-altman), cofounder and former OpenAI president, Greg Brockman, also quit OpenAI when learning of the news that Sam was fired. This is indicative that the firing of Sam was unjust in some sense, that others didn't agree with the decision. And this article states perhaps the two have plans to start something new instead of going back to the old stomping grounds. 

## Google 

In Sarah Perez's article about [Google and Match | TechCrunch](https://techcrunch.com/2023/10/31/google-and-match-group-reach-settlement-in-app-store-antitrust-case/), they discuss how the companies reached a settlement in the antitrust case. Looks like $40 million will be _returned_ to Match Group. 

Sarah also wrote about [Google and Epic Games | TechCrunch](https://techcrunch.com/2023/11/06/what-to-know-about-fortnite-maker-epic-games-antitrust-battle-with-google-starting-today/), and their antitrust battle. Epic wants to convince a jury that Google engages in anticompetitive behaviour. Epic apparently already went toe-to-toe with Apple on a similar claim. 

## Who Got Hacked?

I get a lot of stories about zero-day vulnerabilities and companies getting hacked and such through my news letters. So, I think hacks deserves its own section. I also work for a Cyber Security company, as a test automation engineer, so having a knowledge of the industry might be fitting. Quite a lot has happened, but I wanted to write about Okta because they are also a security company. I also wanted to write about Confluence because their exploit seems to have been a serious oversight of API functionality. 

### Okta

In [this article](https://www.securityweek.com/okta-hack-blamed-on-employee-using-personal-google-account-on-company-laptop/) from SecurityWeek, Ryan Naraine discusses that the security company Okta confirmed that bad actor(s) gained unauthorized access to their customer support system, which lead to them finding some session tokens. Session tokens are stored in cookies and allow a user to access a website without providing credentials repeatedly because HTTP is stateless. Essentially, the hackers could log in as certain customers without credentials. They blame an employee logging into their personal Google account on an Okta managed laptop for the breach. 

The Hacker New [reported here](https://thehackernews.com/2023/09/okta-warns-of-social-engineering.html) that attempts were made to gain access into Okta Super Administrator, accounts through social engineering, for various customers. This isn't as much Okta's fault as it is their organization being a target. But in [this article](https://www.investors.com/news/technology/okta-stock-falls-security-breach-hackers/) by Reinhardt Krause, they mention how the company has suffered **three** security incidences in 18 months. In 2022, bad actors gained access to their systems and some of their source code repositories, on GitHub, were also exposed. 

### Confluence

As Ionut Arghire discusses in their article [Exploitation of Critical Confluence Vulnerability Begins | SecurityWeek](https://www.securityweek.com/exploitation-of-critical-confluence-vulnerability-begins/), Atlassian Confluence data centre and Confluence Server have recently discovered vulnerabilities, which are being exploited. Well, attempts have been made. The exploit is a bit above my pay grade, but something like a hacker sending a POST request to a `/json/setup-restore` endpoint. The endpoint isn't properly authenticated. An administrator can restore Confluence from a backup, but a bad actor can send a POST request with their own backup data, overwriting the existing data. And tah-dah, the hacker has control of the Confluence Server and can steal data or deploy malware. Updates are available to patch this bug. 

That last one was CVE-2023-22518. In his article about [CVE-2023-22515 | SecurityWeek](https://www.securityweek.com/microsoft-blames-nation-state-threat-actor-for-confluence-zero-day-attacks/), Ryan Naraine describes an earlier _zero-day_ bug allowing infected devices connected to to a vulnerable application to create a Confluence Administrator account within the application. Worse yet, Atlassian confirmed it had evidence that the bug was actively exploited. 

## Wrap Up

So, that'll be it this time around. I wanted to write more about Apple possibly being hit with the unpaid tax bill, not because I don't like Apple, but that seemingly small amount of money to them can make a huge difference to a country, if they know how to manage it properly. However, I think the drama around OpenAI's decision to let go of founder and CEO Sam Altman really took the cake when I finally had time to release the blog. Either way, always good to come out from under your rock and read some news articles from time to time. I have a statistics module now to complete and a software engineering project that I may write about in the future. Until next time, thanks for reading. 

## YAML Sources

```yaml
articles: [
	{
		title: "Explained: The Latest Twist in the Apple Tax Case Saga"
		authors:
			- Will Goodbody
		date: 2023-11-09
		publisher: RTE
		url: "https://www.rte.ie/news/business/2023/1108/1415460-apple-tax-explainer/"
	},
	{
		title: Google and Match Group Reach Settlement in App Store Antitrust Case
		authors:
			- Sarah Perez
		date: 2023-10-31
		publisher: TechCrunch
		url: "https://techcrunch.com/2023/10/31/google-and-match-group-reach-settlement-in-app-store-antitrust-case/"
	},
	{
		title: Microsoft Blames Nation-State Threat Actor for Confluence Zero-Day Attacks
		subtitle: "Microsoft says an APT group tracked as Storm-0062 has been hacking Confluence installations since mid-September, three weeks before Atlassian’s disclosure."
		authors:
			- Ryan Naraine
		date: 2023-10-10
		publisher: SecurityWeek
		url: "https://www.securityweek.com/microsoft-blames-nation-state-threat-actor-for-confluence-zero-day-attacks/"
	},
	{
		title: OpenAI Investors Push for Return of Ousted CEO Sam Altman
		authors: 
			- Dan Milmo
		date: 2023-11-19
		publisher: The Guardian
		url: "https://www.theguardian.com/technology/2023/nov/19/openai-investors-push-for-return-of-ousted-ceo-sam-altman-chatgpt"
	},
	{
		title: "Tech Groups Push Back on Biden AI Executive Order, Raising Concerns thatt it could Crush Innovation"
		authors:
			- Nihal Krishan
		date: 2023-11-09
		publisher: FedScoop
		url: "https://fedscoop.com/tech-groups-push-back-on-biden-ai-executive-order-raising-concerns-that-it-could-crush-innovation/"
	},
	{
		title: Exploitation of Critical Confluence Vulnerability Begins
		subtitle: "Threat actors have started exploiting a recent critical vulnerability in Confluence Data Center and Confluence Server."
		authors:
			- Ionut Arghire
		date: 2023-11-06
		publisher: SecurityWeek
		url: "https://www.securityweek.com/exploitation-of-critical-confluence-vulnerability-begins/"
	},
	{
		title: Okta Hack Blamed on Employee Using Personal Google Account on Company Laptop
		subtitle: Okta is blaming the recent hack of its support system on an employee who logged into a personal Google account on a company-managed laptop.
		authors:
			- Ryan Naraine
		date: 2023-11-03
		publisher: SecurityWeek
		url: "https://www.securityweek.com/okta-hack-blamed-on-employee-using-personal-google-account-on-company-laptop/"
	},
	{
		title: Okta Warns of Social Engineering Attacks Targeting Super Administrator Privileges
		authors:
			- Newsroom
		date: 2023-09-02
		publisher: The Hacker News
		url: "https://thehackernews.com/2023/09/okta-warns-of-social-engineering.html"
	},
	{
		title: Okta Stock Falls on New Hacker Security Breach
		authors:
			- Reinhardt Krause
		date: 2023-10-20
		publisher: "Investor's Business Daily"
		url: "https://www.investors.com/news/technology/okta-stock-falls-security-breach-hackers/"
	},
	{
		title: Sam Altman 'was working on new venture' before sacking from OpenAI
		authors: 
			- Shanti Das
			- David Connet
		date: 2023-11-19
		publisher: The Guardian
		url: "https://www.theguardian.com/technology/2023/nov/18/earthquake-at-chatgpt-developer-as-senior-staff-quit-after-sacking-of-boss-sam-altman"
	},
	{
		title: "What to Know about Fortnite maker Epic Games' Antitrust Battle with Google, Starting Today"
		authors:
			- Sarah Perez
		date: 2023-11-06
		publisher: TechCrunch
		url: "https://techcrunch.com/2023/11/06/what-to-know-about-fortnite-maker-epic-games-antitrust-battle-with-google-starting-today/"
	}
]
images: [
    {
        title: Artificial Intelligence Brain
        artists:
            - geralt
        host: Pixabay
        date: 2019-08-07
        url: "https://pixabay.com/illustrations/artificial-intelligence-brain-4389372/"
    }
]
```
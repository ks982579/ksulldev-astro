---
layout: '@layouts/NotesLayout.astro'
title: 'Agile: The Good, the Hype and the Ugly'
pubDate: 2023-06-15
description: 'Notes on a book about Agile software development.'
author: 'Kevin Sullivan'
tags: ["astro", "notes", "agile", "software development"]
---

# Agile!

## The Good, the Hype and the Ugly

```yaml
title: Agile!
subtitle: The Good, the Hype and the Ugly
author: Bertrand Meyer
publisher: Springer International Publishing Switzerland
year: 2014
city: Zurich, Switzerland
```

> These are my raw notes from reading the book, unrefined and incomplete. Read at your own risk. The end goal would be to combine these with other notes on Agile when I have time 😅

Index
1. Overview
2. Deconstructing Agile Texts
3. The Enemy: Big Upfront Anything
4. Agile Principles
5. Agile Roles
6. Agile Practices: Managerial
7. Agile Practices: Technical
8. Agile Artifacts
9. Agile Methods
10. Dealing with Agile Teams
11. The Ugly, the Hype and the Good: an assessment of the Agile Approach

This text is meant to aid readers to benefit from the good ideas in agile methods and avoid the bad ones. Examples of Agile Methods are:
- Scrum
- Extreme Programming
- Lean Software
- Crystal

The book aims to provide a _description_ of essential agile ideas and techniques that aren't tied to a particular agile method. It Also aims to provide an _assessment_, taking a non-biased look at agile methods and determine what helps and what hurts. You do not have to agree with the conclusion. 

Three challenges from existing information are: partisan, intimidation, and extremism. 
- **Partisan** = most existing texts are partisan.
- Agile literature is often **intimidating**. They dismiss previous approches or label them as "waterfall", making them sound rigid. 
- **Extremism** refers to idea you must apply a method in its entirety. Some take an all-or-nothing view. 

## Ch. 1 - Overview

Extreme Programming dates as far back as the 1990s, but the "Agile Manifesto" was created/appeared in 2001. Rather than a single development method, **Agile** encapsulates a set of ideas that are then developed into several methods, like Extreme Programming (XP), Scrum, Lean Software, and Crystal. Many people and teams use some ideas from a method without embracing it completely. 

We will aim to review the following core characteristics:
- _Values_ - general assumptions
- _Principles_ - core rules
- _Roles_ - responsibilities and privileges
- _Practices_ - Activities
- _Artifacts_ - support tools

### 1.1 Values

Five general Agile tenets:
1. Redefined roles for developers, manager and customers.
2. No "Big Upfront" steps.
3. Iterative Development.
4. Limited, negotiated functionality.
5. Focus on quality, understood as achieved through testing. 

For tenet 1, Agile methods redefine and limit manager's job by transfering many duties to the team as a whole. This includes selecting tasks to be performed and assigning them to developers. Agile methods are, in part, the rehabilitation of code. 

This redefinition of roles also affects _customers_, who don't just receive products but activily participate in their development. 

The 2nd tenet is regarding software engineering techniques that involve extensive planning at the beginning of a project, and basically to not do those. Principal examples are:
- _Requirements_ - define the goals of the system
	- From agile view, these cannot be captured at beginning of a project because users don't know what they want. 
	- Requirements also change throughout a project. 
	- Recommended instead of a "requirements document", constant interaction with customer for insight and feedback. 
- _Design_ - define its architecture
	- Building a design upfront is a waste of time because we don't know what will and won't work upfront. 
	- Recommended to build a system iteratively, devising at each step the "simplest solution that can possibly work" (XP slogan). 
		- Then refactor

By consequence, Agile is "iterative, time-boxed development." (Tenet 3) Agile alternative to requirements document is a prioritized list of functions for a team to select from during an iteration, also called a "sprint" in Scrum. Typically select the highest _Return on Investment_ task. 

Tenet 4 is about implementing functionality with highest ROI. A team shouldn't waste time on implementing features that hardly anyone will use. Lean Software treats unused functionality as "waste", and promotes "waste minimization" as a core concern. "Kanban" seeks to minimize "work in progress". 

Negotiation occurs when choosing functionality for each iteration. It's not realistic to commit to both functionality and delivery time. An missed functionality during one iteration is reassigned to a subsequent phase or dropped if deemed insufficient ROI. 

The final tenent essentially means continuous testing. Emphasis on role of a project's _regression test suite_, which is the set of tests taht must pass. 

### 1.2 Principles

We will also consider the following as core Agile principles:
1. Put the customer at the center.
2. Let the team self-organize.
3. Work at a sustainable pace.
4. Develop minimal software:
	1. Produce minimal functionality.
	2. Produce only the product requested.
	3. Develop only code and tests.
5. Accept change.
6. Develop Iteratively.
	1. Produce frequent working iterations.
	2. Freeze requirements during iterations.
7. Treat Tests as a key resource.
	1. Do not start any new development until all tests pass.
	2. Test first.
8. Express requirements through scenarios.

These principles follow the five general values previously discucced. They are not the 12 principles from the Agile Manifesto as those are less appropriate for analysis. 

#### 1.2.1 Organization Principles

Covers first 5 principles. "Self-organize" refers to teams deciding their own tasks. "Sustainability" requires programmers work reasonable hours, preserving evenings and week-ends. 

Accepting change refers to full requirements cannot be determined at the beginning. 

#### 1.2.2 Technical Principles

Agile development implies an iterative development process, consisting of successive iterations. Each is fairly short, and produces a working release of the software. Customer representatives can then try out software and provide reactions to fuel the next iteration. 

Author in this book is keen on _test-driven development_. 

Also, "scenario" is not a common Agile term, but covers variants such as _user cases_ and _user stories_. A **use case** is a complete interaction. A **user story** is an application of a smaller unit of functionality. Scenarios are obtained from customers. 

### 1.3 Roles

Key Agile Roles:
1. Team
	- Self-organised group of developers (and others), responsible for ongoing assignment of development tasks. 
2. Product Owner
	- Defines product properties. 
	- Can change properties, but not sprint in progress. 
1. Scrum Master
	- Scrum specific. 
	- cannot be product owner. 
2. Customer

### 1.4 Practices

Principal/Key Agile Practices:
- **Organizational**
	1. daily meeting.
	2. planning game, planning poker.
	3. continuous integration.
	4. retrospective.
		- where you reflect on things at end of iteration.
	5. shared code ownership.
		- All of the team is responsible for all of the code. 
		- Avoids undue dependence on individuals 
		- This is different from (Microsoft) approach that a person may "own" a unit of software in that they decide what may and may not change in that unit. 
- **Technical**
	6. test-driven development.
	7. refactoring.
	8. pair programming.
	9. simplest solution that can possibly work.
	10. coding standards.

Scrum specifically requires a _daily meeting_ at the beginning of each day known as the "daily Scrum". The meeting is kept short by answering 3 questions:
1. What did I do in the previous work day?
2. What do I plan to do today?
3. What impediments am I facing? (blockers)

It's meant to help teams remain cohesive, everyone knows what is happening, and easy to spot problems early. 

XP implements the **planning game**, and Scrum implements **planning poker**, which are both estimation techniques which asks participants to come with initial estimates independently. Then, reach a consensus together. 

Let's talk about **paired programming**. It is promoted by XP. Code is systematically developed by 2 people sharing a workstation, one does the typing and explaining their thoughts, the other making comments and suggestions. A _pilot-and-navigator_ if you will. XP presents paired programming as the _only_ mode of development. 

XP also popularized practice of "The simplest solution that can possibly work." It shuns any work that is intended to make the solution more extendible or reusable, which is usually recommended by conventional software engineering priciples. The idea is that such work is illusory anyway, because the software may never need reuse. 

### 1.5 Artifacts

Agile artifacts are supporting tools, like user stories and story cards:
- Virtual
	- Use case, user story
		- These are scenarios that represent user interactions with a system. 
	- Burndown chart
		- A record of projects _velocity_, how fast it processes. 
			- "Burns down the items in its task list."
- Material
	- Story card.
		- A paper card (3x5) used to write down user story. 
	- story board.
		- story cards are pinned to story board.
		- The team moves cards around the board. 
	- open room.

### 1.5.1 Virtual Artifacts

difference between _use case_, and _user story_ is "granularity". A **use case** cover a full run through the system. A **user story** is a smaller unit of functionality expected by users. That's where we write like:
"As a customer, I want to see a list of..., So that I can..."

A **burndown chart** is like a chart of tasks over time, and it should approach 0. Maintaining a burndown chart is a way to make a team aware of progress and alert when not discharging tasks fast enough. 

### 1.5.2 Material Artifacts

The story board setup has following: to do, in progress, under test, done. Weird since it's meant to be test driven development. 

And office is suggested to be and **open room** to promote interactions instead of closed offices. However, there's a Harvard study that suggest exactly the opposite as people prefer their privacy. 

## 1.6 A First Assessment

See www.samuel-johnson.com/apocryph.html, maybe w/out the hyphen. Agile approach to requirements based on user stories. They are a valuable tool for validating requirements, but inadequate for defining requirements because they only document examples of system execution. Actual requirements must go beyond the user story and identify more general ufnctions of the system, or the system will only do a few things and little else. 

Author discusses _paired programming_ again, suggesting it "can be an effective technique if applied with reason." 

There's also a bit of a clash between Agile suggesting develop only minimal software, produce only what's requested, develop only code and tests, and the software engineering practices of generalizing code for ease of extension and reuse. But in _Lean_ terminology, those results are wasteful, since not delivered to customer. Basically, think of ROI. 

Also, Agile may reject upfront requirements when preventing no big upfront steps, but upfront requirements aren't useless. Just know they could be subject to change. The author goes as far to say, "The Agile advise here is irresponsible and serious software projects should ignore it." It's usually sound practice to start collecting requirements at the beginning, but treat them as a living product. 

With that said, _iterative development_ is something Agile promotes and has basically always been. 

What Agile does bring to the table is **team empowerment**. One of the simple but great ideas is from Scrum, with daily meetings. it reinforces programmer interaction. Another good idea could be freezing requirements during iterations. It's a must for software to be flexible and change, but change is not always welcome in Agile. This can bring stability to the software process.

And testing is always a must. 

## Ch. 2 - Deconstructing Agile Texts

### 2.1 The Plight of the Traveling Seminarist

Auther references "important" Agile book, _Succeeding with Agile_ by Cohn. As they state, writing down requirements doesn't mean a user gets what they want. At best, they get what is written, which can have different interpretations or even be misleading.

However, now the author tears into that statement, suggesting that Cohn is dangerously providing _proof by anecdote_. This merely proves that a generalization does not hold. It may back an argument, but shouldn't stand on its own. 

On the other hand, having documentation/requirements written down is good because of moments when "I thought you knew" causes 2 weeks of debugging. Like how caching works at my current job. 

**When writing beats speaking**. Well, you write software, so makes sense to write requirements. Especially due to turnover and such. Auther argues:
- Spoken work is more notoriously ambiguous than written requirements. 
- People have different accents, making communication difficult sometimes. 
- Verbal discussions are only known to those who attend. 
- People on a software project come and go. 

>Personally, I think you can also come up with a better and more detailed response when given time to write it down, instead of trying to explain something on the spot. 

**Words of caution:**
- Written words can be misleading and appear more precise than they are, or even meant to be. 
	- Alternatives when precision is the goal is _mathematics_. 
	- Basically, writing neither implies precision nor correctness. 
	- Doesn't imply accuracy nor completeness.
- Also, communication is hard. 
- And speaking isn't just for engineers, but for all stakeholders. 
	- This includes other teams, customers and users. 
	- practice what you preach.

Verbal communication is a complement to written documents, not a replacement. 

### 2.2 Top 7 Rhetorical Traps

Many Agile authors advocate their approaches using unsound methodology. Let's cover some of the unsound methods one will come across when reading Agile documents:
- **Proof by anecdote** - Acedotes can support an argument, but are not proof.
- **Slander by association** - Lumping together ideas an author wants to criticize with one that everyone loathes.
- **Intimidation** - Might label users of approach something terrible.
- **Catastrophism** - Pretending certain approaches are a disaster.
	- Common to highlight flaws in other approaches. 
- **All-or-nothing** - promoting extremist method. This is clever, that success can be ascribed to Agile techniques, and failures to their incomplete application.
- **Cover-your-behind** - Advocating radical prescriptions; then putting a footnote in stating milage may vary.
	- Footnotes may not advise when to renounce their approach for best use. 
	- Makes the author of approach look reasonable without being helpful. 
- **Unverifiable claims** - When literature touts huge productivity improvements, without rigorous independent verification to make such assertions. Creates the _Hype_. 

Agile books largely make their point through anecdotes, looking at edge cases and creating new problems with their solutions. Anecdotes are good for supporting an argument, but not for making generalizations. If another person has an opposite anecdote from experience, they can easily reject the generalization. 

Also be aware that, when talking about intimidation, a logical fallacy may occur that event B implies event A because event A implies event B. Obviously not always the case. Sometime, event happen to be side effects of multiple different events. 

If you are not an enthusiastic promoter of Agile, you are a dinosaur. 

Regarding the _cover-your-behind_ caution, the author pulls an example from Lean programming, where after seven chapters of radical ideas, Mary and Tom Poppendieck leave you with a list of cautions. Our author argues it doesn't help the reader but the author of the Agile method cover themselves. 

>In these cases, I understand where our author is coming from. If instructions are meant to be interpreted instead of followed literally, then the initial wording should reflect. It'd be terrible to read the first 6 chapters of a book and begin implementing radical ideas, just to get to the last chapter and find out you shouldn't have. 

Finally, it is hard to perform large-scale studies of the effects of software development techniques. Many companies don't want to put in the effort or share their results. Also, IBM actaully did a study assessing Agile methods, but it was conducted in collaboration with the Scrum Alliance. Coincidently, it had good things to say about Scrum. 

Look up the "Hawthorne Effect". 

---

## Ch. 3 - The Enemy: Big Upfront Anything
p. 31 (48 of 181)

Every hero needs a villain. Who are villains of Agile?
- Waterfall
- Process-based methods
- predictive
- Big Upfront Anything

The "anything" includes requirements and design. This chapter will briefly cover the "planned-based" approaches resented by Agile. A detailed kdeep-dive would be its own book.

### 3.1 Predictive is not Waterfall

The _Waterfall_ is a specific lifecycle model whose main role is pedagogical. It's more of a textbook example of how not to organize a software porject. 

Predictive means more like organizing a greater or lesser part of design and production process in advance, based on techniques of science and management. It sounds more general, possibly many more specific approaches can be catagorized as predictive. 

### 3.2 Requirements Engineering

Requirements Analysis is a task of defining what a problem really is and what kind of solution will satisfy the stakeholders. Probably most important aspect of successful software development. Software engineering is about building systems right; requirements are about building the right system. 

#### 3.2.1 Requirements Engineering Techniques

An important part of requirements analysis is **requirements elicitation**, which is the gathering of user needs. Techniques for this include:
- Stakeholder interviews
- Stakeholder workshops 

Resutls typically includes a requirements document, summarizing objectives of system. Other outcomes include a _system test plan_ and a _development plan_. 

#### 3.2.2 Agile Criticism of Upfront Requirements

All variants of Agile reject the idea of upfront requirements. Requirement documents are a form of "waste" for 2 reasons:
1. **Waste Criticism:** Not a useful deliverable since not part of what is given to customer.
	1. Personally I would argue that the contents are indirectly given over.
2. **Change Criticism:** Agile believes customers do not know what they want. And if they think they do, it may be an unrealistic system. They may also change their minds. 

#### 3.2.3 The Waste Criticism

Food for thought, the _waste criticism_, in principle, is limited to **unused** requirements, such as not analyzed and designed. Writing requirements is meant to provide a sound basis, early in the project, to discuss the system's future functions and decide which functions to drop. 

The Agile approach is to design and get feedback. Eventually, a customer may drop an unnecessary feature. As an agrument, was that not wasteful, more wasteful that writing down the idea? It's cheaper to kill a feature in requirements than after wasting implementation resources. 

Also consider developer moral, as discarding a feature may deflate it. 

However, you may not know how useful (or useless) something is until you build it. 

The problem is _dogmatism_, and condemning either in an absolute manner can harm a project. 

_Aside_: Then perhaps there is a mid-ground labeling, priority, decision making system? For me, without a plan to review, things become short sighted and confusing. 

Basically, huge and thorough requirements documents, describing every detail in advance, is a waste. 

Additionally, even following a strict definition of "waste" may not exclude requirements documents because they can serve as a basis for writing _system documentation_. So, perhaps a better way of looking at things isn't right or wrong, but how can we get the most out of what we got. 

#### 3.2.4 The Change Criticism

Agile is correct that it is _hopeless_ to freeze requirements, especially at the beginning of a project. However, the requirements document is a resulting artefact of software development, along with code and regression tests. In a sense, **requirements are software**, and like other components of software, should be treated as an asset. And like all software assets, they are subject to change. 

An important note is that writing requirements does not imply _freezing_ requirements. People arguing about a phase of development needed to result in a static document must not plan to update and maintain their software. 

#### 3.2.5 The domain and the machine

Another consideration when comparing Agile to other processes is a distinction between _domain_ and _machine_ requirements. 
- **Domain Requirements** are, say, properties of a model of a part of the world in which the system will operate. 
- **Machine Requirements** are desired properties of the system that they want to build.

For a banking application, rules regarding actual accounting are _domain_ properties. But specifications of how to process payments and other operations are machine properties. Also, consider when the natural laws of physics are concerned, like speed of connection over a wire. 

These requirements are often combined but should be kept separate because of their difference in nature. The project can define the machine, but probably has no influence on the domain. Some authors argue that design and implementation are acutally the same thing.

Regardless of how you look at it, abiding by domain properties are hard requirements. 

Agile does identify a real issue, the risk of spending too much time too early on design or implementation decisions. Sometimes, it is better to defer until more information becomes availabe. 

"The speed of light is not an implementation decision."

### 3.3 Architecture and Design

If requirements analysis handles identifying the problem, designing is part of the solution. We will call the modular structure of the design the _architecture_. Examples of design decisions:
- Choices of abstractions
- use of design patterns
- Specification of interfaces between modules
- definition of inheritance structures

There isn't much _meaningful_ difference between "Design" and "Architecture". We will consider the former to be the process and the latter to be the result. 

#### 3.3.1 Is Design separate from Implementation?

Many smart people believe there's no clear divide between design and implementation (production). An interesting argument is that even the production phase will include decisions that influence performance and are therefore part of the design phase. Implementation is a continuation of design for software engineering. 

Another interesting characteristic of software is that it may make more sense to perform the design _after_ writing the code. Think of a mathematical proof, neatly laid out where each proposition follows the previous and implies the next. However, if you ask the mathematician how it was derived, their story may appear disorderly and chaotic.

#### 3.3.2 Agile Methods and Design

There is no single articulated Agile approach to design. However, there are three key ideas:
1. If a specific design activity is needed, apply it at the level of individual system iterations, and alternate it with implementation pahses. 
	1. do not perform design at level of entire system.
2. Focus on solving the problem at hand.
	1. Don't worry as much about making solution extendible and reusable. 
3. To obtain a _good_ architecture, produce something that works. Then, examine it critically, and improve via **refactoring**. 
	1. Don't worry about getting the perfect solution from the start. 

The first observation is that Agile de-emphasises extendibility and reusability of code, which is a common practice. Refactoring is also a sound engineering technique, but is not a replacement for good upfront design. Refactored junk is still junk. 

What can go wrong with a big design?
- Planning becomes difficult
- allocating work among teams and individuals is challenging
- People uncomfortable not having overall architecture
- Rework is inevitable. 

Why is at least a little upfront system-level design good?
- **Security** - security cannot be an afterthought. Security experts should include security concerns upfront and keep them always on the agenda. 
- Multi-lingual user interfaces. It's easy to implement through appropriate architectural techniques. 

The idea is to avoid doing too much at the start since all necessary information is not available. However, it's not a reason to ban all upfront design.

### 3.4 Lifecycle Models

P. 41 (58 of 181)

Lifecycle models try to identify the steps a software project goes through, such as:
- Analysis
- Implementation
- Verification and Validation (V&V)
- etc...

Best known models are waterfall and spiral. You don't need photos. 

Lifecycle modesl play 2 _distinct_ roles:
- **Descriptive:** try capture how sucessful team works.
- **Prescriptive:** Says how team should work. 

_"Lifecycle concepts considered harmful"_ by McCraken and Jackson, an article from 1982 discussing prescriptive sense of Lifecycle models. 

We have 3 arguments for considering a waterfall-like model:
- historical argument: to reach out present state with our flexible models, these traditional ones played a role.
- conceptual argument: useful to understand distinct properties as activities of software development. 
- Pedagogical argument: easier to teach the linear sequences before the more flexible ones. 

However, actual use of waterfall is discredited today, and rightly so. 

### 3.5 Rational Unified Process
p. 42

**Rational Unified Process** promotes a waterfall-style with an iterative approach, and combines with a number of recommended software engineering practices. Most important contribution is 6 recommended practices:
1. develop iteratively
2. manage requirements
3. use component-based development
4. model software visually
5. verify quality continuously
6. control changes

It's also recommended each project involves 4 phases:
1. inception
2. elaboration
3. construction
4. transition

First 3 are like requirements, design, and implementation. And Transisition is another term for deployment. RUP, however, is not popular in Agile circles because it can have the Big and Bad Upfront Costs. It's also too sequential.

### 3.5 Again... my bad but good review
p. 43 (60)

6 recommended practices of RUP:
- Develop iteratively
- manage requirements
- use component-based development
- model software visually
- verify quality continuously
- control changes

All but "model software visually" correspond to widely accepted practices of SE. Lifecycle models involve 4 phases:
- Inception (requirements)
- elaboration (design)
- construction (implementation)
- transition (deployment)

In parenthesis are similar and more common concepts. Note that deployment was absent from traditional models because software issues were simpler in 1970. 

RUP is not popular in _Agile Circles_ because it has Big (Bad) Upfront Methods. It is also too sequential. However, requirements are managed with user stories, which are defined iteratively, and supports continuous verification. 

### 3.6 Maturity Models

Started in 1980 with ISO 9000 set of standards from **International Standards Organization** and **Capability Maturity Model** (CMM) aimed at software specifically. We will look at CMMI, the "I" is for "Integration".

#### 3.6.1 CMMI in Plain English
p. 44 (61)
3 Notions:
- Practices
- Goals
- Assessment
	- Not directly testing, but ensuring procedures are in place to evaluate software quality. 

A **process area** is a clearly identified aspect of the software process (eg configuration management, project planning, risk managment). CMMI defines some generic goals and practices applicable across process areas.

Apparently, you move through CMMI levels, but qualify through an assessment process conducted by an approved assessors. Sounds like a scam. 

There are 5 levels, ranging from negative and unstable to optimized. Back in the 1980s, the US Department of Defense was the largest consumer of software products, and they liked specifying a standard.

#### 3.6.2 The Personal Software Process

CMMI, based on concept and cost, was meant for _large_ organizations. **Personal Software Process** (PSP) is largely outdated but the practices are kind of relevant even still and worth noting I guess. Things like keeping logs, tracking time, recording bugs, etc...

#### 3.6.3 CMMI/PSP and Agile Methods

No fundamental contridiction exists between Agile and CMMI. However, they are perceived as incompatible. 

On the contrary, if you need to implement CMMI through Agile methods, you can find reports devoted to CMMI level 5 using Scrum.

#### 3.6.4 An Agile Maturity Scale
p. 47 (64)

It appears some Agile frameworks try to mimic CMMI with its 5 levels. However, a closer counterpart is Shu-Ha-Ri (Shuhari), a 3-step gradation:
- Shu -> Japanese for "obeying", this is for learning.
- Ha -> for "detach", people can abstract core rules.
- Ri -> for "surpass", going beyond existing rules and methods to create own solutions as needed.

## Ch. 4 Agile Principles

### 4.1 What is a Principle?

2 concepts:
- Abstractness
	- principle is a general rule
	- differentiates from practices (implementation of principle)
- Falsifiability
	- Possible for reasonable person to disagree with principle. 
	- difference between principle and platitude.

Principles should be **precriptive**, not descriptive. That is, it directs an action or actions. 

### 4.2 The Official Principles
p. 50 (66)

Agile Manifesto lists 12 principles. Not writing them verbatum now, look in book. 
1. Customer satisfaction is most important
2. Welcome changing requirements
3. Deliver _working_ software frequently
4. Developors work with stakeholders
5. Build projects around motivated individuals
6. ~~face-to-face conversaion is most efficient and effective method to convey information~~
7. Working software is primary measure of progress
8. Agile process promotes sustainable development practices, working indefinitely
9. Attention to detail
10. Simplicity
11. Self-organizing teams are better
12. Team reflects internally to become better

Some of these are actually practices and platitudes. Think of a platitude like an obvious statement, like working with motivated individuals. Additionally, some are not prescriptions but asertions, like aiming for simplicity. This is OK unless the assertion is _wrong_. 

Author argues that these rules are a bit redundant, mentioning frequent delivery several times, and incomplete, not mentioning testing explicitly. 

### 4.3 A Usable List
p. 51

We will look at the list from the "Overview" chapter. They are in the book, and quite similar but more thorough as well. Looks like we will cover them in depth.

### 4.4 Organizational Principles

Think project management, scheduling and team organization.

There's a lot of information, so I'll try to be quite concise with bullet points instead of using several sub headings. 

**Organizational:**
- Put customer at center
	- Traditional approaches allow customer intervention at specified points. Agile suggests interactions with customers throughout the project. 
	- Customers are welcome at regular project meetings and interact freely with developers. 
	- Some approaches suggest "embedding" a customer in the development team... Sounds extreme. 
	- Principle addresses danger of building a system that does not properly address user's needs. 
	- Note that any significant project involves many categories of stakeholds, which can have conflicting needs and priorities. 
		- Important to not replace requirements with interactions.
		- They may not be best source, or can skew results to fit their views. 
		- Hence, "embedding" a customer is actually risky.
- Let team self-organize
	- Strays from traditional managers assigning tasks
	- Leans on _Product Owner_ and _Scrum Master_ to support team. 
	- However, there's a technique called **subtle control**, control through peer pressure and _love_?
	- Self-organizing does not mean no control. It means that managers guide rather than instruct. Management may still pick which projects are important to build. 
	- Teams require mentoring and coachin, but not command and control. 
- Work at sustainable pace (p.56 or 72)
	- Ed Yourdon explains a **death march** as a managment practice of accepting an unrealistic commitment and forcing the programming team to meet it through pressure and additional time at work. 
		- Burnout is not Agile
	- **Personal Safety** explained by Cockburn is ability to speak up to repair weakness in safe environment. Without it, the weakness can damage the team. 
	- "PeopleWare" by DeMarco and Lister, explains how programmers function and why it is important to provide correct working environment. 
		- The concept sounds nice but execution is lacking. Sounds like the open-floor plan was their idea saying people were exiled to cubicles. 
	- XP recommends practice of _slack_
		- Categorizing tasks that can be dropped if you fall behind. 
- Develop minimal software
	- **Produce minimal functionality**
		- Agile view is many software systems suffer from **bloat**. 
			- Elements that are not needed or only needed by a few users. 
		- XP slogan is "You Ain't Gonna Need It" (YAGNI)
			- Work on story you have, not what you think we will need.
		- Extra features, especially unnecessary ones, drive up complexity of code. This can drive up costs in nonlinear fashion. 
		- If code is not needed **now**, putting it into the system is a waste. 
	- **Produce only the product requested** (p.58)
		- Note: software engineering _wisdom_ encourages 2 software qualities to produce long-term rather than immediate benefits:
			- _Extendibility_: Devise architecture to support future extensions
			- _Reusability_: Make software elements as general as possible to be reused elsewhere in project. 
		- In Contrast - Agile wants to develop software that works now.
		- "Do the simplest thing that could possibly work."
		- Ron Jeffries explains why designing for reuse is not ideal
			- Reuse is simply difficult to do effectively. 
			- Designing for reuse can distract from solving problem now
				- This is true, you now have 2 problems, the one now, and the one on making code reusable.
		- In a way, it is better to not guess where the future will take us. 
		- Examples of this methodology failing:
			- MS-DOS 640-K memory limit
			- Y2K
			- IPv-4
		- Final Thoughts by Author:
			- Catastrophic failures of the "do only what we need now" method causes billions of dollars of wasted effort fixing a mess that shouldn't have occurred.
			- Only focusing on short-term is detrimental to software process. 
			- If you follow Agile and find it useful, it is best to ignore this design pattern.
	- **Develop only Code and Tests**
		- One of most _radical_ Agile methods deprecates all standard supporting products of software development, particularly documentation. 
			- requirements documents
			- design documents
			- plans
			- program documentation
			- etc...
		- Basically, these are like _intermediate consumables_. The burden is on the artifact to prove it adds value to the final product AND is the most efficient way of achieving that value. 
			- Think consumables are anything not delivered to customer.
		- Most traditional artifacts can be considered consumables:
			- feasibility studies
			- transcripts / videos of requirements interviews and workshops
			- requirements documents
			- PowerPoint presentations about future system
			- emails
			- design documents
			- UML diagrams...
		- The Author points out that this redefines the role of an Architect. Since something is produces as the MVP, the Architect merely refactors architecture. They do not seem thrilled about this concept either. 
	- **Minimalism: an assessment**
		- Author states: "The insistence on minimal software, in the three forms just described, leads to some of the most absurd and damaging contributions of agile methods."
		- The truth in the Agile criticism of traditional projects is their propensity to bloat. 
			- Projects and products tend to include too many features
			- Not all paperwork is necessary.
			- The code is what counts, not UML diagrams or Gantt charts
		- However, it **does not** justify renouncing upfront planning altogether.
			- Bloat can indicate poor management.
				- Project manager should know to fight _creeping featurism_
			- There are many examples, like the _ObamaCare_ platform, where projects are built too quickly.
			- It becomes a build it twice, and check it once.
			- Basically, it is naive to expect refactoring an MVP can solve all problems. 
				- Think of major performance issues that cannot be corrected without a complete redesign.
			- Demanding visible results can cause other hard problems to be repeatedly put aside. 
	- **Additive and multiplicative complexity: the lasagne and the linguine**
		- p. 63
		- There are 2 kinds of complexities:
			- **Additive Complexity** is when a basic problem is simple with many special cases that you can add one-by-one.
				- You can focus on the simple first, and fold in the complexity later.
			- **Multiplicative Complexity** is when the fundamental problem is already complex and you cannot derive an acceptable solution until you handle the complex elements. 
				- Something that might be intertwined in every element might be simpler to engineer at the start, then integrate everywhere at the end. 
				- multi-language user interface
		- Feature interactions have been notorious source for runaway complexity, bugs, expenses, and unfortunate user experiences. 
			- Many examples provided
	- **The Role of Documents**
		- Author says dismissing documents is not appropriate. Customers may not look at documents, but would expect products to be maintained. And developers will utilize documents during maintainence and such.
		- The real issue is documents are difficult to keep in sync with software changes. 
		- Check out **Single-Product Principle**.
	- **What is Simplicity?**
		- Agile's search for the simplist solution has consequences. 
		- Instead of simplicity, perhaps we mean "the art of maximizing the amount of work not done". 
		- Sometimes, or a lot of the time, the simplist solution take much more work to get to. 
		- Quote page 67 "It seems that perfection is reached not when there is nothing more to add, but when there is nothing more to remove."
		- Basically, simplicity is not the same as minimizing work. 
		- Additionally, building features one at a time and making decisions as late as possible can hurt a project. 
			- Arguably then, was the decision made too late?
- **Accept Change**
	- p.68
	- Software system requirements will change. 
	- Agile Manifesto suggests "welcoming" change, not just accepting it. 
		- This is _obviously_ an exaduration. 
	- Scrum has a _closed-window rule_
		- Prohibits product owner, and others, from changing requirements during development phase. 
		- Their rule is more like - accept change outside of sprints. 
	- **Extendibility** - Software that can easily be changed. 
		- Core topic of software engineering discussions.
	- Extreme Programming rule - every piece of functionality should have an associated test case. 
		- Test allow us to safely change code later on with confidence that previous things didn't break. 
	- Some ironey in Agile is welcoming change but seething the idea of producing extendible software.
		- Minimal software practices directly damage extendibility.
		- YAGNI - code not needed **now** is _waste_. 
	- Ease of change requires **designing the architecture for change.**
		- This would require big Upfront thinking, which is rejected by Agile.
	- Some Agile criticism is correct though:
		- Dont' engage in unwarranted generalization.

Agilist folks want to have their cake and eat it too.

**Technical:**
+ Develop iteratively
	+ Produce frequent working iterations
		+ Vertical iterative approach works on successibe subsystems, or *clusters*.
			+ This can be like Database -> Networking -> Business Logic -> UI
			+ This is not Agile notion of iterative development though
		+ Agile development is _horizontal_.
			+ each iteration yields working system.
		+ Recall additive and multiplicative complexity.
			+ Multiplicative complexity, like creating architectural basis, requires vertical iteration.
	+ Iteration Length
		+ Typical sprints are only a few weeks. 
		+ Deadlines do not change, unfinished tasks are dumped or moved to the next sprint. 
	+ freeze requirements during iterations
		+ Scrum has hard rule that functionality can only be added in sprint planning phase. 
	+ An Assessment of Iterative Development
		+ Main ideas are frequent working iterations and freezing requirements during sprints. 
		+ Author draws analogy to building a house. 
			+ A lot of foundation, base work, pipes, are done but doesn't look like much is happenning.
			+ Then the house goes up, looks very fast
			+ It's because they had the correct setup.
		+ The need to deliver a working system at _every step_ can be a damaging distraction. 
	+ Order or tasks?
		+ XP suggests "the simplest thing that can possibly work."
		+ you can also think perhaps the highest business value first. 
			+ What if the tech-stack for this damns the remaining tasks?
		+ There is no single simple solution.
		+ Must have a global view of the project at all times. 
	+ **Dual Development**
		+ Challenge is resolving tradeoff between Infrastructure work and user-visible functions. 
		+ One Idea is to Distinguish between "Early" and "Later" parts of a project.
			+ Early
				+ Infrastructure is Key
				+ Analyze fundamental constraints on system
				+ Make design decisions to guarantee success. 
				+ extendible and scalable system 
			+ Later
				+ To prevent development going flat, focusing on perfecting internals rather than delivering value, sprints should deliver working systems regularly. 
+ Treat tests as a key resource:
	+ **Regression Test Suite** - set of tests revealing a bug that has since been fixed. 
		+ Tests aimed to prevent phenomenon known as "Software Regression". 
			+ reappearance of bugs previously fixed. 
		+ Important to keep a suite of any test that failed at any point in the process. 
	+ Also introducing "Automated Testing". 
	+ Two principles to extend fundamental role of tests in Agile:
		+ **Do not start any new development until all tests pass**
			+ Integrity of what is produced is more important than adding new elements. 
			+ Many decisions can be made, like if functionality is buggy and we have a huge backlog, do we remove the functionality? Do we call the bug a feature? 
		+ **Test first**
			+ Testing first is associated with XP, an advocate of test-driven development (TDD) and test-first development. 
			+ Write a failing automated test before changing any code. 
			+ Some say that writing tests helps design code. 
			+ There's some debate, but in Agile, whether the test is written before, during, or after functionaltiy, the fundamental rule is **no code without test.**
+ Express requirements through scenarios
	+ p. 77
	+ Contridiction!
		+ Agile rejects Big Upfront Anaything (requirements)
		+ Software development requires requirements.
			+ Perhaps they don't have to be specified upfront. 
		+ Requirement Techniques in Agile:
			+ **Use Cases**
				+ Coarse-grained and typically describes entire walk through the system
			+ **User Stories**
				+ Describes elementary unit of interaction. 
				+ "As a \<role\>, I want to \<action\> so as to \<goal\>."

---

## Ch. 5 - Agile Roles

P. 79

Agile Development methods redefine roles for managers, customers and the development team. 

### 5.1 Manager

Managers actually have a list of things they shouldn't do, such as:
+ Assign tasks
+ Decide what functions to implement
+ Direct work of team members
+ Request status reports. 

Sounds like the Manager is restricted from _micro-managing_. These tasks are spread to different areas. What is left for a manager to do?
+ Create positive work environment 
+ Ensure _smooth_ interaction with rest of organization
	+ The manager is the **Champion** of the team with higher management and other organizational units. 
	+ Must ensure other divisions of company, which may not work with Agile methods, do not impede progress of team
+ Handle resources, including suppliers and outsourcing partners. 

Scrum specifically goes further by not including a manager role and only having:
+ Product Owner
+ Scrum Master
+ Rest of Team

And the management responsibilities are divided among these roles. 

### 5.2 Product Owner

Product owner's main responsibility is to define and maintain the product backlog (ie list of features). This is product level functionality, and not individual tasks to implement functionalty. They are also crucial to sprint:
+ Start = select user stories from product backlog, and explain them in terms of business role.
+ end = evaluate result of sprint.

A Scrum product owner also decides on functionality. However, they don't enforce rules  (Scrum Master), nor assign individual development tasks to implement selected user story (to the team). 

### 5.3 Team

The **Team** takes over the critical role of deciding what tasks to implement. 

#### 5.3.1 Self-organizing

Agile teams are characterized by self-organization and intense collaboration. Agile literature defends that self-organizing does not mean hands off completely. Managers are still important, but just not required for everyday decisions. 

#### 5.3.2 Cross-Functional

p. 81

Interesting concept -> Teams that can deliver useful features independently of other teams. This implies that teams should be formed along the lines of features and services. 

Rejected alternative is team divisions based on areas of competence (eg hardware vs. software). Instead, it is recommended to divide along "user-visible subsystems". 

### 5.4 Members and Observers

In the Agile world, and Scrum in particular, there are 2 kinds of participants for any project:
+ Those who are truly committed to the project
	+ Success of project is critical for them
+ Those are are involved, but from the sidelines. 

[Visual Paradigm](https://www.visual-paradigm.com/scrum/scrum-pig-and-chicken/)
> The joke involves a chicken and a pig. The chicken asks the pig if he wants to open a restaurant together. The pig says maybe, and asks what it would be called. The chicken says "How about 'Ham-n-Eggs'?", to which the pig replies "No thanks. I'd be committed, but you'd only be involved."

In the context of Scrum, chickens have input on how the product is developed, but pigs decide how it's going to be done and the rate it is accomplished. 
+ Pigs: Product owner, Scrum Master, development team members.
+ Chickens: Customer, vendor, executives, other stakeholders. 

**Note**: The website also has a tutorials section for creating many diagrams. 

[Agile Academy](https://www.agile-academy.com/en/agile-dictionary/chickens-pigs/)
Chickens refer to people involved in a project but not responsible for a specific outcome. A Pig is someone who is directly responsible for the deliverables. 

[Scrum Guide](https://www.scrum.org/resources/chickens-and-pigs) mentions that the pigs and chickens have been removed from the Scrum Guide. The guides still makes a distinction between members of the Scrum team and other only a part of the process, but doesn't use metaphors as it was thought to derogatory and created a negative persona. People described as chickens often felt powerless and as such, lacked engagement.

Side note, the [Agile Academcy - Scrum Guide](https://www.agile-academy.com/en/foundations/scrum-guide/) is an article probably worth reading to understand Scrum more effectively. 

Our author offers other variations such as _members_ and _observers_. 

### 5.5 Customer

We have seen that Agile methods put customer(s) at the center. A consequence is to emphasize the role of the customer throughout the project. In some cases, consider them as a member of the project. 

Early models limited customer involvement to the beginning and end of the software development life cycle. Some project environments also discouraged customer contact  or prohibitted interaction between developers and customers. 

Agile methods require customer interaction. However, different Agile approaches encourage different levels of customer involvement. There is apparently anecdotal evidence that it is difficult to integrate even a well-meaning customer representative into the development team as exclaimed by the XP approach, and the Scrum approach having the Product owner represent the users is the superior method. 

I believe one of the papers I read also mentioned how ONE representative from the company / customer can guide a biased product tailored only for them and is useless to other stakeholders, or packed with useless features and lacking more esential ones. 

### 5.6 Coach, Scrum Master

Teams require enforcement so they don't stray from recommended principles. Although the project manager can play this role too, it is recommended to assign it to a different individual. 
+ XP = **Coach**
+ Scrum = **Scrum Master**

XP insists the role of a Coach is to advice and not prescribe. "Coach" suggests a training role. Scrum Masters, addtiionally, take on a managment role. However, I believe both are evidently responsible for ensuring their team lives by the values of their Agile approach. 

Additionally, another important role is to **remove impediments** identified by team members in daily meetings. 
+ Technical (unsure how to accomplish task)
+ political or organizational
+ Hardware (failure to work or perform as needed)
+ **Distractions** and interference from rest of organization. 
	+ Comes from Agile tenet that developers should be able to concentrate on one task at one time. 

You can become a certified Scrum Master. It is debatable that a Scrum Master will only do that job, and not be a developer. A Scrum Master that also gets their hands dirty can lose objectivity, and form a bias. 

However, the author kind of disagrees. A Consultant can take credit if the project succeeds and blame the team if it fails. So there is a fear that the Scrum Master could do this. Also, for the Scrum Master, their work isn't tangable, but dependent on the team's performance. 

In India, they use the term of Technical Scrum Master for a SM who is also a developer. 

### 5.7 Separating Roles

p. 86

Scrum forcefully insists on only 3 roles: Product Owner, Scurm Master, and the Development Team. What is the good and the bad?

Separating managerial role from the Product Owner can be helpful. Some companies find it hard to draw a line between the business and the software because the business is software (ie Google, Facebook). Merging Product Owner and Project Manager risks the person being _too close to the problem_. The Manager should focus on business needs, but runs the risk of getting too involved in the project. 

However, with limited resources, other roles may consider merging:
+ Developers double up as coach / Scrum Master
+ Manager can could as a Coach
	+ More appropriate if manager is a _technical_ manager, with more experience than team and naturally qualified to serve as mentor and perform management tasks.
	+ Do **not** merge coach and product owner roles.
		+ Separate product owner should represent business needs and not meddle with how team works.


## Ch. 6 Agile Practices: Managerial

p. 89

We looked at different roles for a software development project. Now, we will look at some practices. 

What is a _practice_ in software development? A **practice** is an activity or way of working with repeated application. It must occur regularly / enforced systematically, else it's just a once-off thing. 

Scrum calls _practices_ "ceremonies". 

### 6.1 Sprint

All Agile methods develop iteratively. Scrum uses the term "sprint" as the name of an iteration. Purpose of sprint is to advance the project by a significant increment with tasks from the sprint backlog. 

Each task on the list is defined as the implementation of a "user story".

#### 6.1.1 Sprint Basics

Sprint typically 2-4 weeks. 
Important, especially to Scrum, during the sprint, the task list does not grow. 

Supposed to be no exceptions. If there are really pressing needs, they should be parked until the end of the current sprint and examined for possible inclusion in the next sprint. 

If there are issues, you can make the extreme decision of _terminating the sprint early_. This decision is privilege of the product owner, considered drastic. 

My team currently implements a _Sprint Refinement_ session mid-way through the sprint giving an opportunity to make adjustments if necessary. 

#### 6.1.2 The Closed-Window Rule

p. 90

The **closed-window rule** is that the window for changes is closed whenever a sprint is in progress. The author made this name. One of the biggest obstacles to successful software development can be _disruptive feature creep_. Customers and managers may have ideas that they push to the team that can interupt priorities, which can politically be difficult to refuse without a clear policy. 

Closed-window rule is meant to fight the feature creep indirectly by channeling it into sprint planning exercises instead of just putting features on someone's desk. 

#### 6.1.3 Sprint: an Assessment

Author agrees with strict prescription of rigid sprint. They suggest calendar month as "simplicity breeds focus". 

The closed-window rule can be seen to contridict the Agile Manifesto's principle A2, "Welcome changing requirements, even late in development". However, it provides a framework for handling changes by just not welcoming changes at all times. 

I'd say that changes / suggestions are always welcome. But the customer must recognized that the change hits the backlog until the next sprint. 

### 6.2 Daily Meetings

_Stand-up meetings_, or the _daily scrum_, are short meetings where each team member answers 3 questions:
+ what did you do on the previous dat
+ what will you do today
+ any impediments

Agile believes that direct contact is critical to project success. They are short to keep it lean, not being a long waste-inducing meeting / practice. 

The stand-up meeting is **not** intended to solve problems or engage in deep technical discussions. 

Answering first 2 questions ensures members make realistic commitments and fulfill them. The questions are meant for the boss to see who is behind schedule, but an opportunity for team members to make commitments to each other. 

For Scrum, removing impediments is one of the key responsibilities of the Scrum Master. 

Two threats to stand-ups are:
+ Project members who go off into digressions.
+ temptation to engage in deep technical discussions.

This is where a Project Manager, or Scrum Master, can:
+ Remind ramblers to be concise
	+ indirect technique is to enfore the time limit. This can lead to some people not speaking, but the ramblers should understand they are the ones at fault. 
+ If technical discussion takes off, suggest hodling separate meeting. 

Auther throws a little shade at _distributed teams_, which I don't believe is relevant anymore. 

For time-zone based issues, sometimes it is more convenient to hold two longer meetings per week. The author did research and found an initial one-hour meeting at the beginning for developer and deadline-based topics, checking progress, small technical discussions. One hour time limit is strictly enforced. Longer and deeper issues are moved to another small meet-up or the second weekly meeting, which is agenda-based. The list of issues/topics are collected in advance by the meeting secretary (rotating role). Decisions are recorded as "action items". Variations are welcome.

### 6.3 Planning Game

The "Planning Game" comes from Extreme Programming, and is called "Planning Poker" in Scrum. It addresses one of the toughest challenges of software management and development, estimating the cost of a system to be developed (or part of that system). Also remember that Agile typically doesn't like the idea of big upfront tasks. 

Unit of estimation has _traditionally_ been unit of work:
+ person per month
+ developer per day (developer-day)
+ Story points, a more recent metric

The "game" idea comes from game theory. The business and development actors try to maximize different criteria and seek an optimal compromise. The game concludes when the sides agree to select highest-priority tasks with an appropriate total cost and time allocation. 

### 6.4 Planning Poker

The Scrum side, how to estimate the cost of user stories in advance. Two main ideas:
+ rely on collective judgement of a panel of estimators, iterating until they agree.
+ Avoid pointless haggling over small differences by forcing the values to be taken from a sequence of clearly distinct values.

The panel of estimators is the development team and product owner, and other customer representatives as appropriate. Goal is to reach a consensus, but avoid reaching it through intimidation. Process of estimating cost of functionality elements has the following steps:
+ describe feature
+ feature discussion from participants
+ every participant pirvately picks an estimate
+ revealed choices
+ If values not identical, discussion happens, and process is repeated.
+ If values are in agreement, next feature.
+ If process cannot converge, abandon it and discuss what else to do, (eg get more information and change estimation to later date).

Some love the Planning Poker. Auther says you can see pressure from power of majority. Even as an expert, it may be hard to argue your point for long without appearing arrogant. 

### 6.5 Onsite Customer

p. 96

All Agile methods recommend involving customers. XP considers an "active customer" or an embedded customer. 

### 6.6 Open Space

Closed offices and cubicles are anathema to Agile development. This is because of core role of _communication_. For some reason, it means working in open spaces. 

I hate and disagree with the words written on page 96. 

Recommended Agile layout is:
+ Development area is a large room
+ Developers sit at desks close to each other. 
	+ "people should be able to hear conversations at neighboring desks and spontaneously join them."
+ Walls covered with whiteboards to support technical discussions.
+ A quiet meeting room is available for technical meetings.

Some people apparently like this, others purchase noise-reduction headphones. 

The Author states that open spaces are not a solution for all people at all times. 
+ Software development is challenging 
+ This requires talking, communication, collaboration...
+ It also requires concentration!

Part of respect due to programmers (advocated forcefully in Crystal method) is to accept that people are different and **not** force a single scheme on them. 

### 6.7 Process Miniature

**Process miniature** -> get familiar with a proposed software process by applying it to some non-software tasks over a short period, a day at most. 

### 6.8 Iteration Planning

p. 98

Agile practices have many meetings. At start of an iteration, a planning meeting should take place. 3 outcomes for entire team should be:
+ An **iteration goal** = what team is to achieve in iteration (concisely). 
+ An **iteration backlog** = list of tasks to be implemented.
	+ Select user stories from backlog
	+ decompose them into tasks
	+ estimate cost of each task (planning poker)
+ **List of acceptance criteria** for each task.

Note: we do not assign tasks, that is done at _last possible moment_. Additionally, testing should be done continuously during implementation of user stories. 

### 6.9 Review Meeting

p. 99

Mirrors the planning meeting but to assess what happened. 

Additionally, good time to reflect not just on what was done, but how it got done. Scrum separates meetings, the latter is the **Retrospective**. 

### 6.10 Retrospective

What went well and what didn't go well during the sprint? What can be improved for the next one? Looking to optimize the next sprint and nearly create a feedback loop. 

Inward looking at team and coach / Scrum Master, but can also include product owner. 

### 6.11 Scrum of Scrums

Basic Agile techniques are intented for teams up to 10 people. **Scrum of Scrums** is defined as a metting consisting of one member from each team in a multi-team project. These meeting can happen 2-3 times a week. 

Challenge is coordination:
+ interface changes
+ dependencies between sub-projects

This is probably more for software teams, not software and other teams. Meetings help address first problem. Dependencies should be avoided if possible. 

### 6.12 Collective Code Ownership

In many projects every software module or subsystem is under the responsibility of a specific person. It's not owned like intellectual property, that belongs to the company, but in a sense of technical authority. 

#### 6.12.1 Code Ownership Debate

There's a benefit that someone in charge feels responsible for software consistency and integrity. It might fend off general degradation due to inconsiderate extensions (creeping featurism). 

The risk is creating knowledge silos. Additionally, there would be barriers to change. 

XP promotes collective code ownership. It also has a dangerous statement that "any two people sitting together and agreeing on it [the change] can change any line of code in the system."

Crystal says, "change it, but let me know."

Interesting thought -> If people aren't afraid to add code, but are afraid to  delete it... code bloat. 

#### 6.12.2 Collective Ownership and Cross-Functionality

An extreme suggestion of Agile is to assign the next task to the next available developer. Only works if everyone can work on everything, interchangably. This is Agile assumption of **cross-functional** teams, developers are generalists and not specialists. 

You can imagine pros and cons (p. 102).


## Ch. 7 Agile Practices: Technical

p. 103

In this text, the author discusses the impact of agile principles on software development techniques. They mention that while the previous chapter focused on management-oriented practices, this chapter focuses on the corresponding development practices. The author notes that there is a strong presence of Scrum in the previous chapter, but many of the practices discussed in this chapter come from Extreme Programming (XP). This distribution of roles is attributed to Scrum being a generic management methodology, while XP was specifically designed by programmers for programmers.

The author acknowledges that the number of techniques covered in this chapter is not extensive, as many of the significant contributions of agility are related to project management rather than software-specific ideas. However, the author emphasizes the importance of one particular technique discussed in this chapter: test-first development. They state that test-first development has already had a profound effect on the software industry.

### 7.1 Daily Build and Continuous Integration

**Integrating** a software project means taking the components of the software as written so far, compiling them together and running the tests (the regression suite). 

**Big Bang** approach = traditional process where developers develop their parts and try to integrate everything at the end in a Big Bang. Note this method is not great as assumptions diverge quickly and components become incompatible. 

Better tools, like Git, make collaboration easier. Additionally, integrations on shorter cycles keep the team in sync. 

Microsoft used to do the _daily build_ back in the 80s. XP recommends a _continuous integration_. That is integrating and testing changes after a couple hours. However, running and building tests takes time. I think the creator of XP, Beck, dismisses the issues by saying that the wait time provides an opportunity for the programmer pair to discuss long-term issues. Yes, in an ideal world, all humans do is work...

Poppendieck's advice is to integrate frequently enough to do it rapidly at any time without finding defects. It's not an exact duration. 

### 7.2 Pair Programming

Pair programming is cornerstone of XP. It is only occasionally practiced today. Enthusiasts come up with new variants such as _mob programming_. The idea has retreated from the limelight as other Agile practices are considered more important. 

[Pair Programming (devopedia.org)](https://devopedia.org/pair-programming) _can_ yield better software faster and at lower costs if done right. 

In a sprint text, and article "The Effect of Pair Programming on Code Maintainability" by M.Nawahdah and M. Jaradat, they sat folks down to write small programs and found pairs wrote 50% less errors, 30% less code, and 25% better code. Again, the sum of the inputs is greater than the output. 

Please read "Are Two Heads Better than One For Software Development? The Productivity Paradox of Pair Programming" by V. Balijepally, et el... In conclusion, pair programming cannot exceed the performance of its best members working individually. 

#### 7.2.1 Pair Programming Concepts

p. 106

The pair is like a driver and navigator. On on the keyboard, the other telling them what to type. Roles should reverse regularly. 

Advertised benefits:
+ Keeping each other on task.
+ brainstorming improvements.
+ clarifying ideas.
+ holding each other accountable.
+ Enable one partner to take initiative when other is stuck.

There's a caution about romantic pairing not being great for the team (but good for the pair).

Most people think pairing will essentially halve the output. XP proponents respond that if the pair produces software that is _twice as good_, it is a productivity gain, not a loss. Typical productivity figures in software industry, measured in **source lines of code** (SLoC), are around 20 SLoCs per person per day. Clearly, the rest of the day is _thinking_ and _correcting_. 

Empirical studies fail to give resounding answer of support for pair programming. 

#### 7.2.2 Pair programming vs. mentoring

**Mentoring** is good. However, mentoring and pairing cannot be combined. The Jr. memeber will slow down the senior, who instead of getting help for most difficult challenges, finds themselves repeatedly explaining the easiest parts. And the teacher, facing a deadline, will not explain more than strictly needed. 

Pair programming is meant to obtain feedback from someone around the same level of skills. 

#### 7.2.3 Mob Programming

**Mob programming** is all of the brilliant people working at the same time, in the same space, at the same computer, on the same thing. I mean, is this real?

#### 7.2.4 Pair programming: an assessment 

We should remember immortal works, "\[We should be\] mature enought to separate approval from arousal." 

Pair programming can be useful. However, XP advocates this as the only way to program, which is absurd:
+ Inconclusive empirical evidence that this is a good way to work. 
	+ Actually, there's a fair amount of empirical evidence, and it doesn't show significant advantages for pair programming. 
	+ It fosters relationships within the team. 
+ People are different!
	+ some love interacting with others when writing programs, and others do not. 

Agile view is that communication should be encouraged, and the days of solitary, silent genius are gone. 

It is dangerous to force a single work pattern in a highlly creative and challenging intellectual endeavor. 

### 7.3 Coding Standards

With some practice, it should be hard to impossible to tell who wrote what code on a team. This means that everyone is following the same standards. This idea was coined in the 1970s as "egoless programming". 

### 7.4 Refactoring
p. 109

Refactoring is the alternative to _big upfront_ design. It involves sucessive versions of the program, looking for design and code "smells", and correcting them. 

#### 7.4.1 The refactoring concept

One typical example of _code smell_ is duplication. Typical refactoring is to abstract commonality into separate module. Programmers perform refactoring by identifying code smells and implementing a _refactoring pattern_ if one exists and is applicable. 

[Refactoring: clean your code](https://refactoring.guru/refactoring) has some cool tips and techniques, perhaps for another day. 
This blog from [Common Refactoring Patterns and How to Use Them | Refraction](https://www.refraction.dev/blog/common-refactoring-patterns) also covers some common refactoring patterns. 

Refactoring is different from update because of these 2 promenent properties:
+ Refactoring must not change the semantics of the program.
	+ Should have same behaviour / produce same output.
+ Refactoring must imporve the quality of code or the architecture. 

Refactoring is not bug fixing. Basically, code and design smells are signs of bad quality, which may be refered to as "anti-patterns". 

Overall, aim for **simplicity**, no duplication, minimum number of classes, minimum number of methods. 

#### 7.4.2 Benefits and limits of refactoring

Benefits of refactoring?
+ Mindset of always looking for possible improvements in an architecture
+ By rejecting "Big Upfront Design", you avoid possible loop of trying to create the _simplest solution that could possibly work_, redoing the design over and over since initial solution, while workable, is not adaptable. 

Limits of refactoring
+ Time
	+ To properly untangle messay inheritance hierarchy could take a month...
+ Typically no new user-visible functionality besides perhaps, speed improvements.

Take refactoring in small steps. If in the middle of a test case, move a method or variable to clean up.

Remember that Garbage In, Garbage Out (GIGO). Refactored junk is still junk. 

#### 7.4.3 Incidental and Essentail Changes
p.112

2 ways initial design can lead to imperfect architecture:
+ Incidental = these imperfections can be corrected through refactoring
	+ eg) inconsistent naming conventions
+ Essential = cannot be corrected through refactoring
	+ eg) Wrong choice of abstractions / data structures

This distinction is related to the **additive** vs **multiplicative** complexity noted earlier. 
+ Incidental $\approx$ additive
+ Essential $\approx$ multiplicative
+ or $R b$ is for realted to

#### 7.4.4 Combining a Priori and a Posteriori approaches

Refactoring cannot correct a flawedarchitecture. Primary responsibility of any designer is to identify the fundamental abstractions that will provide the backbone of the architecture. 

Agile methods teach us that we should always be ready to criticize our own work, and alert to code smells.

### 7.5 Test-First and Test-Driven Development
p. 113

**Test Driven Development** (TDD) is technical practice of testing before developing. 

#### 7.5.1 The TDD method of software development

It's not a testing technique, but a software development method. The basic cycle:
+ Quickly add a test.
+ Run all tests and see the new one fail.
+ Make a little change.
+ Run all tests and see them all pass.
+ Refactor to remove duplication.

4 major implications:
+ Always write test before feature.
	+ this is **test-first development** (TFD), which is subset of TDD. Basically, it doesn't require actually running tests to ensure failure. 
+ Process is extremely incremental - one new test at a time. 
+ Refactoring is necessary.
+ Do not move on until all tests pass.

#### 7.5.2 An Assessment of TFD and TDD

Criticism:
+ Bad idea to assume tests are all we need to specify a program. 
	+ Tests are technically more specific than user stories, which were discussed to not be general enough also. 
+ The requireent that all tests must pass before the team moves on can create some bottlenecks (discussed p.76).

Benefits:
Not discussed but i'm sure you can figure it out ;)


---

## 8. Agile Artifacts
p. 117

Main virtual artifacts: working code, tests, user stories, story points, velocity, definition of done, product backlog. 

Concrete artifacts: working space, story card, task and story board, burndown chart. 

Negative artifacts to avoid: impediment, technical debt, waste, dependencies, dependency charts. 

### 8.1 Code

Specifically, _working code_. 

### 8.2 Tests

Two core artifacts here:
+ Unit tests
+ Regression test suites

**Unit test** is description of particular test run and its expected results. For a unit test in the "xUnit" style testing tools, such as JUnit for Java, it takes the form of a class and includes:
+ Routine (method) that executes the test.
+ set-up and tear down routines, to prepare for the test and reset the context. 
+ An **assertion**, defining the condition for the test to succeed. 

The **regression test suite** is a collection of unit tests. It should include any test that has been found to fail at some point. That is because, a particular phenomenon of software development is that old bugs tend to reappear. This may be known as **software regression**. Note, this doesn't have to be only tests that previously failed. 

Regression test suites are a key asset to any well-managed software project. These are also incremental by nature, starting small and (hopefully) growing with the project. 

### 8.3 User Stories

**User stories** provide the basic unit of requirements in Agile methods. It is the description of a fine-grain functionality of the system, as seen by users. 

A more general notion is the _use case_. This can be big, describing an entire interaction scenario, like the process of ordering an item on a website. I think they may also call these _epics_?

The standard style that emerged in Agile circle to describe user stories consists of a triple: _category of user, goal, benefit_. 
+ eg) As a..., I want to..., So that...

You can't just list a change like "update database from relational to no-SQL solution." You must define it as a task for a user story that describes a benefit visible to users. 

Benefits of relying on user stories as basis for development:
+ Keep team looking outward for what customers _really_ want.
	+ rather than inward at further developing existing code
		+ However, from experience, I argue that further development of existing code is important. 

Note that the size of a user story does not necessarily translate to its complexity. It's normal for different user stories to take different amounts of _effort_. That is why we measure them up with **story points**. Story points are a measure of effort, which will be discussed in just a bit. 

Lack of perspective can lead to a brittle design and overall useless work, waste. Mention of **domain model**, which is a model for real world properties. You can avoid duplicate code by working on the domain model first, and making it in a way that supports different user stories. 

Looking at the whole problem rather than individual details is Lean software principle. 

Infrastructure work in not glamorous and shunned in Agile approach because it does not immediately bring new user-relevant visibility. 

Just like how tests cannot replace specifications; user stories cannot replace requirements and designs. 

The **dual development** technique was introduced previously, but I believe it is working on infrastructure and delivering working systems regularly, either in sequence or parallel. 
+ Sequential = give priority to domain model in first phase then move to focus on regular delivery of user-visible functionality, informed by user stories.
+ Parallel = work at the same time on both aspects, constantly informing one by the other. 

### 8.4 Story Points
p. 121

Successful project control requires:
+ _Estimation of effort_, in advance of an iteration.
+ _Measurement_ of progress, during the iteration and at the end.

For both of these techniques we require a unit of progress. Traditionally, the industry used _person-months_, or _person-days_, but is more about cost than effort. **Source lines of code** counts (LOCs, SLOCs) are also used. However, it is difficult to measure in advance the SLOC count of a system. 

A better measure is **function points**, estimates the number of individual functions of the system. However, hard to estimate, and not always appropriate in developments using modern object-oriented techniques. 

In Agile world the basis for measuring progress comes from the standard mode of specifying functionality: user stories. We don't count user stories, but give each story a number of _story points_. The beauty of this is that estimating with story points separates estimation of effort from estimation of duration. 

Story point have 3 important properties:
+ They are **relative** indicators, not absolute time values. 
+ Story points can only be counted for implemented user stories.
	+ does not count incomplete work
+ Any non-delivered artifacts will not count towards progress. 

Story points are kind of new. XP used an absolute measure of time, _ideal programming time_, which was days required to implement a story assuming full-time work with no distractions. That as weighted by a _load factor_, ratio of actual time to ideal time, typically 2 to 4. But this was criticised to _fudge_ the estimation, so XP moved to "pure programmer weeks". Then the trend to abandon the reference to precise units of time and work with a dimension-less number. 

The term **gummi bear** is sometimes used as a synonym for story points. 

**Planning Poker** is one of the accepted Agile techniques for obtaining story point estimates for user stories. 

### 8.5 Velocity
p. 123

The _cost estimates_ given to user stories can be used to assess progress when the iteration starts. **Velocity** is a way to provide "a clear, measurable, continuous estimate of the speed at which a project is progressing." I've heard it a few different ways, but the saying goes like, "It takes 20% of the time to get 80% done, and the remaining 80% of the time to get the last 20% done."

Or, "You can achieve most of the work in a fraction of the time, and then spend the rest of the time perfecting the details."

Or, "Achieving 80% completion requires a mere fraction of the time, while the remaining 20% necessitates a substantial portion of the total time investment."

The physics definition of the vector _velocity_ is distance per unit time. For Software Development, it's more like story points per iteration. Basically, it's hard to accurately predict how long projects take. However, by applying the story point methodology, the relative predictions of story points _should_ become more accurate over time.

If you don't know how to create story points, check out this [Asana Guide](https://asana.com/resources/story-points) through applying story points with the Fibonacci sequence story point matrix. Or use a search engine or your favourite AI chat bot for more information. 

### 8.6 Definition of Done
p. 125

The **Definition of Done** is apparently a Scrum concept of knowing what everyone means when they say they are done. The definition is also important to fairly and accurately measure progress. Some ideas for definitions:
+ Releasable.
+ Unit and integration tested, and deployed to development server.
+ Acceptance-tested, release notes written, releasable.

### 8.7 Working Space
p. 125

**XP** argues group programming in open spaces, called _bullpens_, fosters communication. XP also recommends people have small cubbies along the outside communal space they can keep their belonging in and have a false sense of privacy. 

There's a huge push toward "everyone-under-one-roof" model, stating that it is better. I understand that it might be good for many people, but I personally believe it to have a negative impact on my productivity and mental health due to lack of privacy and stress from being an introvert. 

### 8.8 Product Backlog, Iteration Backlog
p. 126

In software engineering, a **requirement** means the description of a property of the system. And the **requirements** refers to the overall description of the system. However, Agile approaches reject traditional comprehensive requirements documents, typically cited as waste. Instead, Agile prefers:
+ **Product backlog** = collection of user stories for the project as a whole.
+ **Iteration Backlog** = collection of tasks associated with user stories for a particular iteration. 

Scrum recommends dividing backlog into 3 parts, containing respectively the user stories or tasks for:
+ remain to be implemented
+ are being implemented
+ have been implemented

These are malleable recommendations. 

### 8.9 Story Card, Task Card
p. 127

These are physical note cards with hand-written user stories. 

### 8.10 Task and Story Boards
p. 127

Visible reminders of tasks to do, in progress, and completed keep the team on the same page. Team members can pick up tasks when needed, keep track of velocity, and discourage waste. Things that don't deliver functionality aren't shown on the board. 

A Task Board was usually a physical whiteboard with magnets and index cards. However, there are countless software applications that can serve as an upgraded replacement for the physical artifact. 

### 8.11 Burndown and Burnup Charts
p. 128

A **burndown chart** is a visual graph of velocity, that is remaining tasks / story points over days in iteration. The idea is that remaining story points should decrease over time. 

In the Crystal Agile methodology, they use **burnup charts** that shows progress instead of work remaining. 

Both graphs have these similar properties:
+ Only counts _deliverable_ work, excluding internal work such as plan and design.
+ Only counts _finished_ work, which for code should be fully tested. 

### 8.12 Impediment
p. 129

An **impediment** is "any matter that damages the progress of the project, whether technical or organizational." 

### 8.13  Waste, Technical Debt, Dependency, Dependency Charts
p. 129

These last artifacts are considered negative artifacts and are suggested to be avoided in Agile circles. 

For the Lean Agile methodology, it is all about avoiding _waste_. **Waste** is considered anything not delivered to customers. That means things like design documents are waste and say _unfocused_ meetings are also waste. 

**Technical debt** refers to code elements of poor quality. Initially they are hardly noticeable, but as they accumulate they cause issues. _Refactoring_ is the tool for fighting technical debt.

**Dependencies** are constraints between development elements. The word is self describing. Dependencies prevent the Agile practice of developers picking the next task on the iteration backlog to develop. 

There are also developer constraints. The goal is for a cross-functional team. However, people often have areas of expertise and are better suited for certain tasks. Sometimes it is best to wait until they are available to handle certain tasks. 

The final artifact we will discuss is a dependency chart. Often these take the form of Gantt Charts. Remember that accurately predicting task and project durations can be difficult. So, creating a whole chart is probably a waste of time as it will probably need updates within days and on a continuous basis. 

Rejecting all of this waste is an extreme approach. However, remembering what is considered waste might be helpful.

![[some_garbage_is_ok.png]]

---

## 9. Agile Methods
p. 133

Reviewing key characteristics of the four main methods cited in this book. 

### 9.1 Methods and Methodology
p.133

#### 9.1.1 Terminology

**Methodology** is the study of methods. So a **method** is something being studies. Often, it is seen Agile methods denoted as _methodologies_, are acceptable as a combination of methods. 

#### 9.1.2 The Fox and the Hedgehog

The author is looking for the **One Big Idea** behind each method that supports all other method components. Each method consists of principles and practices, hopefully stemming from that big idea. The author will then provide an assessment of the method.

### 9.2 Lean Software and Kanban
p.134

Lean and Kanban came from mostly Toyota. Feel free to research on your own.

#### 9.2.1 Lean Software's Big Idea

Lean's big idea is to **Reduce Waste**. Waste, as described above, is anything not delivered to the customer. The aim is to focus on what matters to the customers, and remove distractions. 

#### 9.2.2 Lean Software's Principles

Lean Software method promotes 7 principles:
+ Eliminate waste
	+ Waste _products_ includes: requirements documents (if no one reads them), incomplete work, extra features (bloat), defects (bugs).
	+ Waste _processes_ are: unnecessary tasks, needless management activities, task switching, waiting for anything from deployment and resources to information and decisions, and motion or transfer of artifacts between people or groups. 
+ Amplify learning
	+ rejects _do it right the first time_.
	+ favours "try-it, test-it, fix-it"
+ Decide as late as possible
	+ Avoids Big-Upfront-Design decisions, which can be costly to change in future. 
+ Deliver as fast as possible
	+ Common amongst Agile methods, produce a working system every iteration for more feedback. 
+ Empower the team
	+ The self-organizing team concept.
+ Build integrity
	+ need for maintaining consistency of system's design.
+ See the whole
	+ don't sweat the small stuff like intermediate deadlines/

#### 9.2.3 Lean Software: an assessment

Not a "cradle-to-grave" method, but more of a philosophy from a set of general observations. Don't turn to Lean Software as a comprehensive software development method or expect everything from their text to be absolute. However, their contribution to the community has been significant. 

#### 9.2.4 Kanban

Kanban is _distinct_ from Lean Software but also draws from the Toyota production process. Kanban's big idea is to **Minimize Work in Progress**. The Kanban board is similar to the Scrum task board, used to visualize progress. However, there's not actually an explicit Kanban method for software, but its principles are useful.

### 9.3 Extreme Programming
p. 137

Extreme Programming (XP) is the original Agile approach with an introduction in the late 1990s. 

#### 9.3.1 XP's Big Idea

It's big idea is to **Increment then simplify**. Functionality is added through test-driven-development and refactored to restore simplicity. There's also the pair-programming initiative. 

### 9.3.2 XP: the unadulterated source

There are a few texts written, but the original reference is Beck's "Extreme Programming Explained". The author continues to explain how they preferred the 2000 first edition of the book to the 2005 second edition, as the latter was more of a response to criticism and toned down the simplistic and in-your-face style in favour of a more abstract teaching.

#### 9.3.3 Key XP Techniques

The XP books have very long lists of practices. However, some essentials are:
+ Short iterations
+ Pair programming
+ User stories
+ Refactoring
+ Open workspaces
+ Collective code ownership
+ Continuous integration
+ Test-first / test-driven development

#### 9.3.4 XP: an assessment

Extreme Programming (XP) is an approach to software development that brought attention to agile methods. The term "extreme" emphasizes the idea of taking the best development practices to their fullest extent. XP is known for being assertive and seeing its techniques as obligations rather than options. For example, it advocates for pair programming, where two programmers work together on the same code. This assertiveness has both strengths and drawbacks, as it has limited the overall adoption of XP in the programming community. However, many individual techniques promoted by XP have made a significant impact in the industry, even outside of agile processes. XP has particularly highlighted the importance of two techniques: continuously integrating code by avoiding code branches and consistently testing software. These contributions alone have secured XP's place in the history of software engineering.

### 9.4 Scrum
p. 139

Scrum has taken over as the Agile method of choice. There are many texts about principles and practices.

#### 9.4.1 Scrum's Big Idea

The author states the big idea for Scrum is to **Freeze Requirements During Short Iterations**, also referred to by the author as the "closed-window" rule. There are many other concepts like the 3-roles, 4-events, pigs and chickens, etc... But this is the core that addresses how to handle change. 

#### 9.4.2 Key Scrum Practices

List of Scrum practices, discussed previously as well:
+ Sprint planning at beginning of iteration
+ closed-window rule, allowing requirements change but in a controlled way
+ user stories, decomposed in tasks
+ daily scrum to track progress and isolate impediments
+ definition of done to keep everyone on same page
+ task board and burndown chart to assess velocity
+ sprint review to reflect on the previous sprint and prepare the next one

#### 9.4.3 Scrum: an assessment

The iteration model, called the sprint, has become the industry standard. Scrum's primary contribution affects the organizational aspects of projects, and can be generalized to apply to non-software technical disciplines. Does this mean there's room for an Agile method that takes the best from Scrum and addresses unique demands of Software Development?

### 9.5 Crystal
p. 141

_Crystal_ actually refers to a 2-D array of methods based on criticality and size, each characteristic having four levels. 

#### 9.5.1 Crystal's Big Idea

Crystal's big idea is **Osmotic Communication**, or communication through the team as a single unit. Because older generations can only comprehend communication in person, the focus is on office space layout that favours open communication. This Agile method treats poor communication as the core issue of software development. Projects can face major costs and impediments from bad communication between team members, delays in answering questions, and questions just not asked for whatever reason. 

#### 9.5.2 Crystal Principles

Crystal's 7-principles:
+ Frequent Delivery
	+ Most important property of any project.
+ Reflective improvement
	+ host _reflection workshops_ or retrospectives for improvements
+ Osmotic communication
	+ constant and free flowing communication
+ Personal safety
	+ Think, sustainable pace. Team members should be free to speak up, without fear of reprisal, when needed such as with unrealistic schedules. 
+ Focus
	+ Work without interruptions
+ Easy Access to expert users
	+ Just a realistic guarantee of access to knowledgeable user representatives. 
	+ Not necessarily an embedded user in the team (XP), or a product owner (Scrum)
+ Technical environment with automated tests, configuration management and frequent integration.
	+ Programmers should have modern tools.

#### 9.5.3 Crystal: an assessment

Crystal is not a comprehensive method or a step-by-step guide. It's more like software development wisdom. Some distinguishing characteristics is refusal of dogmatism and acceptance of some _classical_ software engineering principles. 


---

## 10. Dealing with Agile Teams
p. 145

### 10.1 Gravity Still Holds
p. 145

Software engineering has laws that limit what we can expect. Boehm's work in the 1980s has been confirmed by numerous studies. It states for any IT problem there exists a "nominal" cost and a nominal development time, and solutions cannot deviate from them. Sounds similar to the _iron triangle_; to speed up development time you will spend more money and decrease product quality, or something of that nature. 

These are not laws of physics, but observations supported by credible empirical studies. 

### 10.2 The Either-What-Or-When Fallacy
p. 146

Iterations in Agile Development are _time-boxed_. When something must give, it would be features over the iteration's end date. However, customers may note negotiate as easily. Your man Beck suggests taking a huge contract, and trying to split it up into several smaller ones.

Many customers want to know both "when" and "what". In transitional environments, plan-oriented groups can find it hard to get precise commitments from Agile ones. The difficulty of getting Agile teams to commit is a delicate issue. It's best to split goals into intermediate steps, define tangible objectives that can be achieved at regular intervals. 



---

## 11. The Ugly, the Hype, and the Good: an assessment of the agile approach
p. 149 #here
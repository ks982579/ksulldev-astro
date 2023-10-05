---
layout: '@layouts/NotesLayout.astro'
title: 'Developing Cloud Software'
pubDate: 2023-10-05
description: 'Looking into Cloud Software Development'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "cloud"]
---

```yaml
title: Developing Cloud Software
subtitle: Algorithms, Applications, and Tools
authors:
	- Ivan Porres
	- Tommi Mikkonen
	- Adnan Ashraf
publisher: TUCS General Publication
date: October 2013
```

I found a pdf of the book free online. Due to time constraints, I cannot take detailed notes for the website at this time. 

# Developing Cloud Software

## Ch. 1 - Introduction to Cloud Computing Technologies

p. 1

Clouds are a large pool of easily usable and accessible virtualized resources, like hardware, which can be dynamically reconfigured. Companies hosting cloud resources benefit from economics of scale for operational costs. 

This chapter looks at:
+ Hardware virtualization
+ Sandboxing 
+ Virtualized Network Block Storage
+ Scalable Datastore
+ Scalable file storage
+ Scalable batch processing
+ Cloud controller

We all know Amazon, but another player is [Cloud Computing, Security, Content Delivery (CDN) | Akamai](https://www.akamai.com/)...

Software layer providing virtualization is called a virtual machine monitor or hypervisor. 

Services can be divided into:
+ Software as a Service (SaaS)
+ Platform as a Service (PaaS)
+ Infrastructure as a Service (IaaS)

There are 2 main virtualization techniques:
+ System virtualization
+ Para-virtualization

2 main hypervisor types:
+ Type 1 - runs directly on host's hardware and executes guest OS
+ Type 2 - (hosted) runs within an OS

Wikipedia has a comprehensive list of different _virtualization solutions_, both open source and commercially licensed. The book talks about [Home - Xen Project](https://xenproject.org/) (opensource), VMWare, and KVM. The books says that XEN is marketed by [Explore Citrix Products for Enterprise and Medium Business - Citrix](https://www.citrix.com/products/), but it may have moved since 2013. 

I also want to shout out [VirtualBox - Wikipedia](https://en.wikipedia.org/wiki/VirtualBox), because I have used it before. However, XEN is a type 1 and VirtualBox is a Type 2. 

**Sandboxing** separates programs and resources from each other. 

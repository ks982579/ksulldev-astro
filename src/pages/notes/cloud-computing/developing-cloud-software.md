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

**Sandboxing** separates programs and resources from each other. Good for using experimental software in same infrastructure as the production software. 

Goal of **storage virtualization** is to abstract the physical location of the data from the users and developers. Role of Virtualization storage is to provide a mapping from the perceived data to the actual physical location. Some benefits of virtualized storage systems:
+ Non-disruptive data migration
+ Improved utilization
+ Simplified management

**OpenFlow**, [Product Certification - Open Networking Foundation](https://opennetworking.org/product-certification/), is the first Software-Defined Networking (SDN) and specification, and a vital element of an open software-defined network architecture. It allows developers to run experimental protocols in production networks. It is a feature added to switches, routers, access points, and basestations, allowing these datapath devices to be controlled through an external, standardized API. 

Software-defined networking is expected to be one of the new emerging research topics in computer networking. 

NOX is an open source network control platform that can control all connectivity on the network. 

[Welcome to Nox — Nox 2023.4.22 documentation (thea.codes)](https://nox.thea.codes/en/stable/index.html) This Nox looks like Python automation testing...

[SDN Series Part Three: NOX, the Original OpenFlow Controller - The New Stack](https://thenewstack.io/sdn-series-part-iii-nox-the-original-openflow-controller/) goes to [NOX Repo | Github](https://github.com/noxrepo/)... There's also [GitHub - noxworld-dev/opennox: OpenNox main repository.](https://github.com/noxworld-dev/opennox), an extension of NOX. 

The key driver behind cloud computing is scalability. Applications, especially internet ones, have variable demand at different times. **Horizontal scaling** is running applications across many machines instead of one powerful one. It can have potential cost savings on hardware and energy consumption. 

We now apply that to data and create a _scalable datastore_. There are so many available:
+ Google Datastore
+ Amazon SimpleDB
+ Amazon Dynamo
+ Yahoo! PNUTS
+ Apache Cassandra
+ Tokyo Tyrant (open source)
+ Project Voldemort (open source)
+ etc...

Guarantees given my most traditional database systems are denoted ACID:
+ Atomicity
+ Consistency
+ Integrity
+ Durability

The NoSQL movement insists on much more limited datastore functionality called BASE:
+ Basically Available
+ Soft state
+ Eventually consistent

Implementing BASE favours availability (and often low write latency) over consistency.

An ecommerce site may deploy BASE on the front-end for speed and ACID on the backend for consistency. Think the difference between adding to your shopping cart (BASE) vs billing information (ACID). 

So, BASE vs. ACID. It is impossible to build a database system that is CAP:
+ Consistent
+ Available
+ Partition Tolerant - operations will complete even if individual components are unavailable (disk failure).

You must discard one attribute. 

A **key/value store** is a system built on top of a massive distributed hash-table(s). A technique called _consistent hashing_ allows for nodes to enter and leave a peer-to-peer content lookup network with minimal overhead. 

Google uses technology called the **Chubby System**, which is a highly _fault tolerant_ database. The contents of the database are replicated over several servers. So if the majority of the servers are running, the database can serve requests. The design is based on the _classic_ **Paxos Algorithm**, which is expensive. 

**Scalable file storage** is also important, like for Amazon S3 system. Google has near identical competing product called Google Storage. Cost saving techniques include:
+ Compression
+ Deduplication (detecting duplicates and storing one copy)
+ ...

**Asynchronous batch processing** of data needs to horizontally scale as well. Contenders are Google MapReduce and Apache Hadoop, the opensource alternative. Basically, it works like:
+ data given to MapReduce in very large file
+ split into chunks, typically 64MB
+ Chunks processed in parallel by $n$ mapper tasks
+ each record is fed into a user provided _map_ function one at a time. 
+ Map function processes each recode to produce some number of records consisting of key-value pairs. 
+ MapReduce does a _shuffle operation_, grouping all data from all parallel mappers using a user provided hash function to distribute them over $m$ reducer tasks. 
	+ Network bandwidth heavy operation, $n$ mappers communicate values for each $m$ reducer in parallel, becoming $O(n \cdot m)$ operation. 
+ Data is then sorted locally by reducers.

Probably not the best explanation of the process. 

Hadoop is written in Java. Popular extension is called _Hive_, providing an SQL-style like query language for the Hadoop engine. _HBase_ is another Hadoop like database by Apache. 

Then there is the **Nexus Framework** for running multiple other frameworks in the same cluster. 

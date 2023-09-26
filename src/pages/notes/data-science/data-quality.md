---
layout: '@layouts/NotesLayout.astro'
title: 'Data Quality'
pubDate: 2023-09-21
description: 'Data quality'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "data quality"]
---

```yaml
title: Data Quality
subtitle: Dimensions, Measurement, Strategy, Management, and Governance
authors:
	- Rupa Mahanti
ISBN: 978-0-87389-977-2
ISBN: 9781951058678
publisher: ASQ Quality Press
date: 2019
url: https://www.ebooks.com/en-ie/book/210693540/data-quality/rupa-mahanti/
price: €137.88
```

Required reading are chapters 1 and 3. Further reading is the entire book. 

# Data Quality

I have maybe less than a week to get through a lot of material so this is going to be very light note taking

## Ch. 1 - Data, Data Quality, and Cost of Poor Data Quality

### The Data Age

The text discusses the significance of data in the 21st century, likening its importance to what steam power was in the 18th century, electricity in the 19th century, and hydrocarbons in the 20th century. It highlights the omnipresence of data due to advances in information technology and the Internet of Things, which has transformed how businesses operate, research is conducted, and communication occurs.

The definition of **data** is presented as "facts and statistics collected together for reference or analysis." From an IT perspective, data are abstract representations of real-world entities and concepts, expressed through definable conventions related to their meaning, format, collection, and storage.

The text traces the evolution of data handling, from manual storage in physical files to electronic processing and storage on a massive scale. It emphasizes that everything in modern life is associated with data sources and is captured and stored electronically.

Furthermore, the text discusses the role of databases and how technological advancements have made accessing information easier. It mentions the various channels through which data is collected and stored, including call centres, web forms, and databases of different types.

The chapter's content is structured to start with the importance of data and data quality, followed by an exploration of data quality dimensions, causes of poor data quality, and the associated costs. It also touches upon the "**butterfly effect** of data quality," illustrating how minor data issues can escalate within an organization. Finally, the chapter concludes by summarizing the key points discussed.

In essence, the text emphasizes the transformative role of data in contemporary society and lays the groundwork for discussing data quality and its implications.

### Importance of Data and Data Quality

Data is no longer a _by-product_ of IT systems and applications. It can be an organizations most valuable asset. And Good quality data are essential to create the best models and produce the best results, the best services. Data can also be reusable, so quality goes a long way. 

For medical fields, the best data can lead to new discoveries to improve health. 

### Data Quality

Data is very important, as noted above. Is the quality of data important? Yes, of course. But what is "data quality"? We need to understand categorization of data aapparently, and then the business impact and cost of bad data and poor quality data. 

### Categorization of Data

An enterprise can have about 5 types of data:
+ Master data
+ Reference data
+ Transactional data
+ Historical data
+ Metadata

#### Master Data

This is non-transactional data used to define the primary business entities and used by multiple business processes. It's typically used often and doesn't change much. Errors in master data can have substantial cost implications. If customer's addresses are wrong the correspondence is sent to wrong address. 

Usually described with nouns like "customer". 

#### Reference Data

These are sets of _permissible values_ referenced and shared by a number of systems. They are meant to be referenced by other data records, like the master data. It provides standard terminology and structure across different systems. Think of it like abbreviations or status codes. 

Organizations (should) use internal reference data to describe or standardize their own internal business data, like status codes for account status or something. 

Reference data also does not changes excessively, but can be amended from time to time. 

#### Transactional Data

These describe business events. A record of a "fact" that transpired at a point in time. They depend on the master data and are usually described by verbs. The _customer_ and _account_ are master data. The customer _opening_ an account is the action, generating transactional data. 

When you think about it, actions always have a time component, opening, purchasing, ordering, etc... So it is usually some master data, maybe some reference data, and a data / time something occurred. 

At this point, you can see that some corruption in the master and/or reference data will corrupt the transactional data as well. Transactional data can be extremely volatile as well, since it's constantly be updated. 

#### Historical Data

It's the transactional data once complete. It shouldn't be altered unless to correct an error. If a customer's surname changes after marriage, then this piece of master data becomes historical data. Interesting!

#### MetaData

This is data that defines other data. It describes characteristics to make interpreting data easier. There are 3 main types of **Metadata**:
+ **Technical Metadata**
	+ To described technical aspects and organization of data stored in repository. 
	+ Examples could be table names, column or field names, key information (primary and foreign), data type, etc...
+ **Business Metadata**
	+ To describe functionality to add context and value to data, which is nontechnical and more like how data is used by the business. 
	+ Examples include field definitions, business rules, privacy level, security level, KPIs, etc...
+ **Process Metadata**
	+ To describe results of various _IT_ operations that create and deliver the data.
	+ An example comes from the _extract, transform, load_ (ETL) process, data created from tasks in a run-time environment such as access data, start and end time, CPU seconds used, disk reads/source table read, disk writes/target table written, etc...
	+ Could also be error logs and data captured when something goes wrong. 
+ **Audit Trail Metadata**
	+ This is a _particular_ type of metadata, usually stored in a record and protected from alteration, and captures how, when, and by whom the data were created, accessed, updated, or deleted. 
	+ Used for tracking security breaches and compliance issues. 

The quality of metadata can have a positive or negative impact on the other data categories, Master, Transactional, Reference and Historical data. 

### Data Quality: An Overview

**Data Quality** is the capability of data to satisfy the stated business, system, and technical requirements of an enterprise. 

Break it down:
+ It is a measure of the data's ability to satisfy requirements. 
+ Data must be in the right context. Data about whale sightings won't really help sell more iPhones. 
+ Generally, data quality is "fitness for use".
+ Data are _fit for use_ if they are free of defects and possess desired features. 

There are two aspects of data quality:
+ **Intrinsic Data Quality**
	+ Based on the data elements themselves, independent of the context in which they are used. 
	+ Examples: accuracy, representation, and accessibility of data. 
		+ You want all data to be accurate and easily accessible to you. Data should be in the right types, names spelt correctly, zero to minimal missing values. 
+ **Contextual Data Quality**
	+ Individuals' perceptions of data quality like purpose for which data are used, timing of use, etc...

So, from just before, whale sighting data may have very high intrinsic data quality but very low contextual data quality for selling iPhones. 

Perfection isn't practical usually as there is typically a lot of data to draw meaningful insights and additional work to improve data quality may be more costly, and nearly unnecessary, than working with how it is. 

You can establish a _degree of conformance_ to represent a data quality threshold. These are minimum confidence level and maximum tolerance level of errors. 

Six Sigma DMAIC (define, measure, analyze, improve, and control) methodology can be utilized to measure and improve data quality. See Ch. 6 for more details on DMAIC. 

### How is Data Quality Different?

Quality of information depends on business processes, databases, software design, the data, and software production processes involved in producing the information. It's similar to physical products except data and information can be reused.

This is good and bad. If you have a physical product of bad quality, maybe the next one will be ok. However, if you have bad data, it will continue to be bad when reused. 

Data characteristics are also intangible. They don't have weight or colour, but more like data type, format and such. If data is stored in a system poorly, then it may be hard to use and maintain. Date data is interesting. What is 01/02/08? User's must understand the format that is used in the system they are accessing to correctly interpret the data.

I had an issue like this before where I mistakenly took the date to be European style when it was American. After processing, I realized there were many errors because of this. The error was hard to spot because there was so much data that the issue of seeing a month 13 didn't pop-up until 

Data quality is a function of _imperceptible properties_ called **data quality dimensions**. Example being a data element of "age" cannot be less than 0. 

> Aside, if you know something will be created in the future, could you technically consider it to have negative age? Suppose it wouldn't necessarily be a certain value though.

Basically, it is easier to measure the quality of a physical product because of physical characteristics. Some examples of data quality dimensions are accuracy, completeness, consistency, uniqueness and timeliness

### Data Quality Dimensions

Definition - **Data Quality Dimensions**: A set of data quality attributes that represent a single aspect or construct of data quality. 

Provides means to quantify and manage quality of data. Some commonly used data quality dimensions are completeness, accuracy, timeliness, conformity, and consistency. More on this in Ch. 3 - 4.

### Causes of Bad Data Quality

Data quality issues can be injected into every phase of the data life cycle, from initial creation and procurement/collection _touch_ points (like Internet), to data processing, transfer and storage. You can also consider backing up data, fetching archived data, and disaster recovery as other points were data can get messy. 

Again, using date format as an example, where databases may interpret differently.

#### Manual Data Entry

There's a saying, **Garbage in, garbage out.** Humans are very susceptible to errors, especially with data entry. Many business sight data entry mistakes as a "... barrier to achieving more accurate customer information." 

People entering data may do so on accident, intentionally, or because they don't know. Think if a form asks for gender and only provides "Male" or "Female". As this is but a mere subset of all genders, the form is setup to collect inaccurate data. 

Figure on p. 15 shows many causes for bad data quality. Manual data entry is just one of well over 10 options. 

The ease of entering data may also be a factor. Make it to hard and employees might not provide correct data, especially under time restraints and with a bad UI. Bankers have also been motivated by greed to provide incorrect data, whether it be bonuses of commission. 

#### Inadequate Validation in the Data Capture Process

Inadequate validation can fail to catch simple data entry errors. 

#### Aging of Data/Data Decay

**Data Decay** (sounds cooler) is data degradation over time, resulting in bad data quality over time. In a data set, the average can shift over time. Like housing prices. 

Some data, like a birthday, will never change. Other data, like address or job title, are subject to frequent change. Every data element has a different expiration date. 

Data has a shelf life and requires continuous maintenance. It's important to set guidelines for how often each field should be updated. There are different ways to update data in a database:
+ Expire existing record and insert a new record with the updated information. 
+ Updated field could be tracked separately from the rest of the record
+ A `comments` field can be included in the table to state what field or fields were updated. 

I did work on an app that chose the first method for customer business locations. This confused customers as they would see their business as _closed_ and they would complain they were not closed, but have moved. Be aware who will use data as clearly option 2 or 3 would have been more appropriate in said circumstance. 

#### Inefficient Business Process Management and Design

The following will have an _adverse_ impact on data quality:
+ Lack of a standard process to address business requirements and business process improvements.
+ Poorly designed and implemented business processes that result in lack of 
	+ training
	+ coaching
	+ communication in the use of the process, and unclear definition of subprocess or process ownership, roles, and responsibilities have an adverse impact on data quality.

Example is an incentivized call center to take as many calls as possible and fill in forms. No checks were in place in data collections, so employees were not correctly filling in the forms to take more calls. 

#### Data Migration

**Data migration** generally involves transfer of data from an existing data source to a new one. This can be a new database or just a new schema within the same database. Some issues can be data changing considerably in the new database or the new schema. 

Data migration projects migrate data from one data structure to another, or transforms data from one platform to another with modified data structure. 

An example is migrating data from a legacy data system to a relational database management system. Every system (should) be made of three layers: database (storage), business rules, and a user interface. A **Legacy System** would rarely have completed specifications nor well documented business rules. So, storing data in CSVs or spreadsheets? You are just storing data to store it, with little to no thought of how it will be later used. 

The result is poorly formatted data perhaps. And since lack of documentation, data formatting can be inconsistent across sources. 

#### Data Integration

**Data Integration** processes bring together and combine data from numerous _heterogeneous_ source systems into a new technology application. It involves moving data between applications and can combine conflicting data that will require conflict resolution business rules. 

**Mapping Specifications** are used to transform data from one source system and load them into the target applications. Example being a phone number in one system as a 10 digit string, and needing to be a nine digit integer in another. 

Data quality thus depends on robustness of data mapping specifications and conflict resolution rules. 

#### Data Cleansing Programs

**Data Cleansing** is the process of correcting the erroneous data elements of a dataset. They are meant to resolve data quality issues, but can be the source of new ones. This is because the vast amount of data these days cannot be cleansed manually, and automated methods may make unexpected corrections.

Automated data cleansing algorithms can have bugs, and then be implemented over an entire set of data. Hence, thousands or millions of records could be ruined. 

Also, sensitive data needs protection:
+ Personally identifiable information (PII)
	+ Examples are tax identification number, employee number, address, even date of birth. 
+ Personal health information (PHI)
+ Payment Card Industry (PCI)

**Data Anonymization** is the process of removing PII from a dataset. 

#### Organizational Changes

Organization changes, described below, can increase chances of data quality errors. 

##### Corporate Mergers and Acquisitions

Data consolidation in these cases can lead to duplicate and inconsistent data. Each IT system may have their own rules and methods of handling data. Hence, a merger can be messy. There's also the case of losing key employees during the process. 

##### Globalization

Going global is great for revenue but adds another dimension of complexity to data with different date formats, address, telephone numbers, currencies, etc... Current data may need to be transformed, new schema. For example to include country code in telephone numbers or the Country in the address. 

Additionally, countries have different legal requirements for data, where it can be stored, how it is stored (encryption), retention requirements, etc... 

##### Reorganization

When staff who has knowledge about the detailed working of IT systems leave, their knowledge is lost with them. That can have a negative impact on data quality.

##### External Changes

Examples are: tax law changes, regulatory requirements such as financial reporting, compliance, data protection, etc... These require hastily changes and patches to systems. There's a saying that you can have only 3 of 4, Cheap, Fast, Good (quality), Done. Companies sadly pick the _quality_ as the flex point. 

#### System Upgrades

Apparently data fit for one system requires some massaging to fit in another. This can cause issues and expose inaccuracies. 

#### Data Purging

**Data Purging** is the process of _permanently_ deleting old data from storage space. This is done once the retention limit is reached or data becomes obsolete. It can impact the wrong data accidentally. You can purge too much or too little.

#### Multiple Uses of Data and Lack of Shared Understanding

Again, data quality depends on context it is used. So, if collected for one purpose, it may not port over for other purposes. If the data collectors knew what it would be used for, the could collect good quality data for everyone. 

#### Loss of Expertise

p. 26

One person typically on a project knows the ins and outs of all the data. This can be especially true in a legacy system. If there's no documentation, then if said individual leaves, there goes the _knowledge silo_. 

#### Lack of Common Data Standards, Data Dictionary, and MetaData

Metadata helps users understand the data. Simple help text of address or date format can go a long way. Same terminology also helps. It doesn't help when some sources reference "customer" and others use "client" when talking about the same thing. 

#### Business Data Ownership and Governance Issues

p. 27

Important data assets may have several providers or producers and numerous consumers who are often oblivious of each other. Data quality is not a concern of the providers. When there's not transparency or accountability for data quality, data can be incomplete, outdated, inaccurate and altogether unreliable and inconsistent. 

#### Data Corruption by Hackers

Hackers can corrupt, steal and delete data. It can be serious like medical devices and GPS, or for silly games like Pokemon Go. However, if PII, PHI, or PCI data is stolen, organizations also face loss of customer confidence, reputational damage, and/or regulatory actions. 

### Cost of Poor Data Quality

p. 28

Understanding the impact of bad quality data helps understand the importance of data quality in general. Poor quality data can lead to incorrect decisions which can negatively impact a business. It is the reason:
+ failing business initiatives
+ reduced labor productivity
+ lost revenue
+ additional costs
+ decreased customer satisfaction

There's a [**The Data Warehouse Institute**](https://tdwi.org/Home.aspx)?

Bad data can lead to wasted money in poorly targeted sales and marketing campaigns. Customer loyalty programs also suffer from bad contact data. A business can under and over promote the wrong products. 

Apparently one of the key factors in the 2007 global financial crisis was inadequate IT and data architecture to support management of financial risk. 

Poor data quality can also have serious health risks. Many people die each year from medical errors. One example being a woman in the UK whose address was recorded as "16" instead of "1b". She missed many letters, appointments, and unfortunately died because of delayed treatment. 

That's only the half of it. People undergoing unnecessary surgeries because of swapped results. 

Major impacts of bad data quality are:
+ Financial
	+ additional operating costs
	+ reduced sales and revenue
	+ delays in cash flow
+ Confidence and satisfaction
	+ Customers, employees, vendors, suppliers
	+ Decreased organizational trust, loss of credibility, low confidence in forecasting
+ Productivity
	+ Can be increased processing or turnaround time
	+ Or a decline in product quality
+ Risk and Compliance
	+ credit assessment
	+ investment risks
	+ competitive risk
	+ health risk
	+ fraud
	+ overall compliance with regulatory authorities

Starting on p. 32, the author lists many examples. 

Data produced/generated in one business process are consumed by several in other business processes. 

There's also an interesting picture showing the cost to prevent bad data quality is quite low. The cost to correct it is a bit more, but still ok. But the cost of failure due to bad quality can be quite a lot. 

### The Butterfly Effect on Data Quality

p. 37

You probably know what it is, but the _butterfly effect_ is apparently an aspect of chaos theory to describe how small changes in one state of a deterministic non-linear system can result in large differences in a later state. 

Data issues often follow the same trajectory. Small error in a product code, customer id, account number, etc... can then propagate across systems in an exponential manner. 

Author provides nice summary on pp. 40 - 42.

## Ch. 2 - Building Blocks of Data: Evolutionary History and Data Concepts

pp. 43 - 68

This chapter is about the evolution of data collections, data structures, and storage over said period of time. We'll also look at inception of the database, relational databases, and the data warehouse. 

Then a discussion about databases, data models, normalization, database schema, relational databases, data warehousing, and data hierarchy. 

### Evolution of Data Collection, Storage, and Data Quality

We have come a long way since paper files and filing cabinets. Then came punch cards, paper tapes, and then magnetic tape. Some solutions didn't hold much data and others were expensive, the typical struggle. Finally, we hit the hard disk drive era in 1956 thanks to IBM which were expensive and low capacity. 

That would work itself out eventually. in 1960, Charles W. Bachman developed the first database management system called _Integrated Database Store_ (IDS). IBM would develop their first DMS in 1960s as well called _Information Management System_ (IMS). 

There's much more interesting history into the inception of the database. There were pre-relational databases before relational, and IBM developed SQL in 1974 which became the ANSI and OSI standards in 1986 and 1987. 

The data warehouse began to show up in the 1970s with something first called the "data mart". Sounds like it came from a need to clean and integrate data store in legacy systems. But the concept and practice of data warehousing we know today came in the 1980s.

Data warehousing exposed data quality issues as organizations attempted to integrate their disparate data. Disparate is things so unlike there is no basis for comparison, which might be a bit harsh. However, this was a result of limited technology resulting in isolated applications.

### Database, Database Models, and Database Schemas

The database timeline:
+ 1960s = hierarchical and network databases
+ 1970s = object-oriented databases
+ 1980s = relational databases
+ 2000s = NoSQL and cloud databases
+ 2011 = [NewSQL](https://en.wikipedia.org/wiki/NewSQL) which tries to be the best of relational and NoSQL

**Definition - database:** a structured collection of interrelated data that are organized and stored in computer systems in a way to facilitate efficient retrieval. 

**Definition - database model:** type of data model that determines the logical structure of a database and fundamentally determines in which manner data can be stored, organized and manipulated. 
+ common models: relational models, hierarchical models, flat-file models, object-oriented models, entity relationship models, and network models.

**Definition - Database Schema:** the structure in a database management system that holds the physical implementation of a data model. Think of it like blueprints of how data is stored, a references for the DMS. 

**Definition - Database Instance:** This is a _snapshot_ of the data in the database a a particular point in time. So, you might have backups of data saved as instances. 

### Relational Database

**Definition - Relational Database:** A digital database based on the _relational model_ of data. 

That definition isn't great at explaining. It's made up of tables that use a _relational database management system_ (RDBMS). 

**Definition - Relational Model:** A framework of structuring data using relationships. It's the theoretical basis of relational databases. 

**Definition - Primary Key:** Each record would be given a unique identifier known as the _primary key_.
+ If said primary key consists of a set of columns, it is called a **composite primary key**. 

**Definition - Natural Key:** An attribute or set of that already exists in the real world and can uniquely identify a record. 

A record is a row in a table. Columns in a table are called field names. the records are a instance of something and the field names are the attributes of occurrence. 

**Definition - Candidate Key:** This is the set of natural keys that can be declared as the primary key (choices).

**Definition - Surrogate Key:** Any column or set of columns in a relational table that does not have a business meaning but can be used to uniquely identify records in the table. So, it can be used as a primary key instead of a natural key. 

**Definition - Entity:** Any object in the system that we want to model and store data about. Can be people, places, objects, phenomena, or events. 

**Definition - Attributes:** Characteristics or features of an entity. 

**Definition - Instance:** An occurrence of an entity. We store data of an instance in our relational database as a record with fields. 

**Definition - Relationship:** An association or link between entities with an attribute or set of attributes establishing the link. 

A relationship is established by a _foreign key_ in one entity linking to the primary key in another entity. 

**Definition - Foreign Key:** A column, or set of, from one relational table whose values must match another relational table's primary key. This establishes a link. 

**Definition - Domain:** A set or range of allowable values for a field (column). 

Four main elements in relational database:
+ field name = column name
+ field = the column, representing attribute values of entities.
+ record = a row or instance of an entity
+ table = represents the entity. 

**Definition - Structured Query Language (SQL):** a relational database query and manipulation language allowing for the creation, modification, truncation, and deletion of databases and tables, and the manipulation and query of data. 

### Data Models

p. 52
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


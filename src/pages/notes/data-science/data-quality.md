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

p. 7

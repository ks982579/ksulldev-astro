---
layout: '@layouts/NotesLayout.astro'
title: 'Data Processing'
pubDate: 2023-10-01
description: 'Explaining concepts and stages of data processing'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "processing"]
---

```yaml
title: Data Science
subtitle: DLMBDSA01
authors: Prof. Dr. Claudia Heß
publisher: IU International University of Applied Sciences
date: 2022
```

# Unit 4: Processing of Data

pp. 67 - 80

Learning objectives include:
+ Understanding concepts of data, information, and data processing.
+ Understanding the stages and cycles of data processing.
+ Understanding the different methods and types of data processing.
+ Understanding the output forms and file formats for processed data.

## Introduction

**Data processing** is the extraction of useful information from collected raw data. Similar concept to industrial production, raw inputs go in (data), labour transforms inputs (data processing), and a useful product comes out (insights and information). 

Benefits of data processing to organizations:
+ Better analysis and presentation of organization's data.
+ Reduction of data to only the most meaningful information.
+ Easier storage and distribution of data.
+ Simplified report creation.
+ Improved productivity and increased profits.
+ More accurate decision-making. 

## 4.1 - Stages of Data Processing

p. 69

Data processing transforms data into information. Stages are:
+ Data collection
+ Data preparation
+ Input
+ Data analysis
+ Data interpretation
+ Data storage

These stages should be completed in order, but can also be cyclical. 

### Data Collection

After raw data are collected from a source(s), they are converted into a computer friendly format to form a _data lake_.

**Definition - Data Lake**: A repository of data stored in both its natural and transformed formats. 

collecting data can be difficult for noisy, redundant, and contradicting data. 

### Data Preparation

This is the pre-processing stage where data is cleaned, organized, standardized, and checked for errors. This stage may require significant domain knowledge and is meant to handle missing values, and eliminate redundant, duplicate and incorrect records. See the previous section in Data Processing. 

### Data Input

After the data have been prepared and cleaned, they are input into their destination and translated into a format for the consumers to understand. An example of the destination is a _data warehouse_.

**Definition - Data Warehouse**: A store gathered from data sources and used to guide decision-making in an organization. 

To understand the data, one needs to have a grasp of their key characteristics such as
+ distribution
+ trends
+ attribute relationships

### Data Analysis

May be performed through multiple threads of simultaneously executed instructions using machine learning and AI algorithms. This is probably the _heart_ of the process, the one that makes many YouTube videos. 

This stage can involve converting data into more suitable format, ensuring correctness, _distilling_ detailed data into main points, and combining multiple groups of data records. 

Data analysis has its own 5 steps:
+ Feature Extraction
	+ Data are represented by a number of fixed features which can be categorical, binary, or continuous. 
	+ **Data Feature**: (AKA variable) are aspects of the data like name, date, age, etc...
	+ [Feature Extraction | Wiki](https://en.wikipedia.org/wiki/Feature_engineering) (Feature Engineering or Feature Discovery) is the process of extracting features from raw data. This is obtaining characteristics, properties, attributes, etc... even if it might not be significant to the model. 
+ Correlation Analysis
	+ To determine which pairs of data features have the highest degree of correlation. 
	+ One in a pair can often be removed from the feature set if highly correlated. 
+ Feature Selection
	+ Information and relevant features are selected by applying correlation analysis.
	+ Relevant features have low degree of intercorrelation with other features and high level of changeability across data records. 
	+ Domain expert may be needed to guide the process and review the list of suggested relevant features.
	+ [Feature Selection | Wiki](https://en.wikipedia.org/wiki/Feature_selection) is process of selecting a subset of relevant features for use in the model construction. 
+ Machine Learning
	+ A _learning mathematical_ algorithm is developed to extract knowledge from and uncover properties of the data and predict future outcomes if new data is provided. 
	+ Descriptive analytics are used to understand underlying data patterns
	+ Predictive analytics are used to estimate new or future data based on performance
	+ Prescriptive analytics are used to optimize the dependent action.
	+ Also determines which learning technique to use: Unsupervised or Supervised.
+ Extracting Valuable Insights
	+ After the model is evaluated for accuracy and performance (previous step?), the most important and relevant information contained in the input data is retrieved and presented. 
	+ The model should be ready for predicting future events, gains/losses of a business under different scenarios. 

[The Difference Between Feature Extraction and Selection | GeeksForGeeks](https://www.geeksforgeeks.org/difference-between-feature-selection-and-feature-extraction/) is that Extraction transforms original features into a new set of features that are more informative and compact. The goal is to capture the essential information from original features and represent it in a lower-dimensional feature space. Linear transformation methods such as Principal Component Analysis and Linear Discriminant Analysis, and non linear methods such as Kernel PCA and Autoencoder are used to extract features. Feature selection's goal is to reduce dimensionality of the feature space, simplify the model, and improve its generalization performance. It has 3 methods:
+ Filter Methods
	+ The simplest method where features are selected based on their statistical properties, such as correlation with target variable. 
+ Wrapper Methods
	+ Involves training ML model to evaluate the performance of different subset of features. A search algorithm is used to select a subset of features that results in the best model performance. 
	+ computationally expensive method.
+ Embedded methods
	+ Hybrid method where feature selection is integrated into the model training process and features are selected based on importance in the model. 
	+ They are more accurate than filter methods and more efficient that wrapper methods, but not all models have built-in feature selection capabilities. 

### Data Interpretation

Outcomes of machine learning predictions must be translated into _actions_. To do this, those outcomes must be _interpreted_ to obtain beneficial information for guiding decisions. 

### Data Storage

Finally, we store the data, instructions, developed numerical models, and information for future use. It should be stored to be accessed easily and quickly when needed. 

## 4.2 - Method and Types of Data Processing

### Manual Data Processing

**Manual Data Processing** is not _primitive_, but was used when technology was young and expensive. This is the paper and pencil way to perform calculations and data transformations. Very prone to human error and takes a lot of time.

### Mechanical Data Processing

Data is processed with mechanical, but not computer, devices. Things from printers and calculators to typewriters. Still prone to errors.

### Electronic Data Processing

**Electronic Data Processing**  is data processed automatically with computers and software. Both fast and accurate. 

Types of electronic data processing:
+ Batch
	+ input data and/or output information are grouped into _batches_ to permit sequential processing. 
+ Online
	+ Utilizes internet connections and online resources, like cloud computing.
+ Real-time
	+ An approach that responds immediately to changes in inputs and the requests of outputs. 
	+ Online processing is not as attentive to time parameters. 
	+ Think "banking transactions".
+ Distributed (multi-processing)
	+ Remote workstations connected to a large server. Like ATMs. Same information and instructions are given to each node. 
+ Time-Sharing
	+ When a single computing unit is utilized by multiple users according to predetermined, allocated time slot. 
	+ Usually performed by super and mainframe computers on bulk data, like a census survey. 

## 4.3 - Output Formats of Processed Data

p. 74

Processed data should be presented in a format that meets the following criteria:
+ Data files are in _sophisticated_ formats that computers can analyze.
+ People can easily recognize the data fields and their range of values.
+ The formats are popular and/or standard so that the data can be mixed and matched with other data sources.
+ data are clear and express the information they contain without unnecessary features (eg. highly-correlated, redundant).

**Definition - ASCII Text:** American Standard Code for Information Interchange. ASCII code represents text for electronic communication in computers. 

Processed data can be obtained in different forms:
+ User-readable plain text files.
+ Charts to reflect trends and progress/decay.
+ Maps for spatial data.
+ Images for graphical data.
+ Software-specific formats for those data requiring further analysis and processing.

We will look at several common software-specific data formats
+ XLS (Excel Spreadsheet)
	+ Microsoft Excel spreadsheet. 
+ CSV (comma-separated value)
	+ top are column names.
	+ each line denotes a record with values separated by commas.
+ XML (extensible markup language)
	+ File with structured, non-tabular data written as text with annotations. 
	+ Formatted to be easily shared on the World Wide Web using ASCII text. 
+ JSON (JavaScript Object Notation)
	+ File includes a list of variable-field pairs and their corresponding names and values. 
+ Protobuf (protocol buffers)
	+ Reduced version of XML.
	+ Files transfer small structured data sizes across programs.
	+ [Protocol Buffers | Protobuf.dev](https://protobuf.dev/)
	+ [Protocol Buffers | Wiki](https://en.wikipedia.org/wiki/Protocol_Buffers) 
+ Apache Parquet
	+ A column-oriented database management system format available in the _Hadoop_ ecosystem for big data processing. 
	+ Works regardless of data model or programming language.
	+ Being in columns allows for more precise access to data needed to answer queries. 
	+ Can utilize many data formats such as hierarchical data format (HDF4 and HDF versions.)
+ SQL (structured query language)
	+ Not exactly a file format but a widely used language for querying databases. 
	+ Descriptive in the sense that you specify what you want to have as a result, letting the interpreting system figure out a way how to achieve that goal. 

---

# Video Lectures

Data processing cycle - very important:
+ Collect
	+ creation of a **data lake** - storage of natural and transformed data.
+ Prepare
	+ Preprocessing raw data, creating important features and characteristics for our data and removing / fixing outliers and missing values, etc...
+ Enter the data
	+ Update **Data warehouse** with our features.
+ Analyse
	+ Feature extraction, correlation analysis, feature selection, machine learning and extracting valuable insights. 
+ Interpret
	+ Translate model predictions into actionable business decisions.
+ Store
	+ Documentation of processes, models and information for future.
	+ This is like covering your butt in case you are audited by some regulators or something. 

The professor does not agree 100% with this cycle but it is what we must learn for our exam.

What is a **Data Warehouse**? It's like a real warehouse, but for data. It's a central repository that stores and organizes large volumes of structured data from various sources. Employ a process known as Extract, Transform, Load (ETL) to collect data from source systems, transform it into a consistent format, and load it into the warehouse. 

There's a diagram, might be worth looking into diagrams to visualize where it sits in process. You kind of start with collection of data from various sources, operational to application. The _Load Manager_ collects the data and puts it into a _staging area_, like a giant database or something. Then, the Warehouse Manager software performs ETL, the load for loading it into another database, probably the data warehouse at this point. The data can be used in Data Marts for reporting, Data Cubes for OLAP Analysis, or for Data Mining. 

Data mining is automation AI used for looking for patterns in data and such. 

A look at an OLAP Cubes. They are literally cubes, categories of data, maybe what sector it came from, region, product line, etc... OLAP is Online Analytical Processing. OLTP is Online Transaction Processing is for real transactions. OLAP is more for pushing related products and what it thinks you would like to purchase. 

Exam questions may ask about processing. Take care you are not answering the wrong thing, which can happen. If asked what are processing techniques, some answer there's a serial transmission and parallel transmission. That is not the data processing the exam is looking for. Those are actually data transmission methods, not processing techniques. With raw data, Processing techniques include
+ Manual processing is typically like sorting
+ Mechanical processing is like Printing
	+ Per [What is Data Processing | SimpliLearn](https://www.simplilearn.com/what-is-data-processing-article#:~:text=In%20Mechanical%20Data%20Processing%2C%20data,is%20faster%20and%20less%20intensive.) Mechanical data processing probably uses calculators, and typewriters. It's faster and less error prone than manual processing. 
+ Electronic processing types are:
	+ batch = supply chain, payroll
		+ dividing into smaller groups
	+ online = cloud computing, barcode scanning
	+ real-time = banking transactions
		+ sometimes there are delays in the cloud, and this must be 
	+ distributed = ATM, weather forecasting
		+ modular data sources - which happens in most applications. Think like Google Maps...
	+ time-sharing = Enterprise Resource Planning (ERP) systems.
		+ Think like parallel, multiple sources accessed in nearly the same time. You have one connection and different time slots to communicate to other systems. 
		+ Assign time slots to different slots.

The term **online** is confusing because technically real-time, distributed, and time-sharing types all happen online as well. So, you need to thing beyond the internet. Sometimes data also is processes online, distributed, and in real-time! 

The exam may ask if you can explain what a type is an give an example!

Another part is how data is stored. The Output Formats of processed Data. The Comma-Separated Value is common. We also know Excel (.xlsx) is quite popular. The second "x" stands for "XML" apparently. 

Office Open XML documents exist in 3 markup languages:
+ WordProcessingML
+ SpreadSheetML
+ PresentationML

Don't get confused by "Open Office". But he goes through, if you have an _unzip_ program, you can unzip an Excel file and see it's file structure, a bunch of XML files. You can do that for any Office Open file, even word and such.

Other usable schemes include:
+ Office Math Markup Language (OMML)
+ DrawingML (Vector graphics, charts, SmartArt)
+ VectorML (replaced by SVG)
+ Windows Metafile (WMF)
+ Enhanced Metafile (EMF)

You don't get much back zipping a word document because basically, it's already been zipped. 

Now, to dive into XML. A real tutorial can be be found here, [XML Introduction | mozilla.org](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction):

```xml
<?xml version="1.0" endocing="UTF-8" ?>
<!-- Above is processing instruction -->
<!-- Below is a Start tag -->
<catalog>
	<book id="bk001">
		<title>XML Developer's Guide</title>
	</book>
</catalog>
<!-- above is an end tag -->
```

There's also a whole website, [XML.com](https://www.xml.com/). Basically information is stored in tags, and metadata is stored as attributes in the tags. The tags themselves are also metadata and very important for structure.

There's also JSON format, and like XML it is handy for data transmission. However, XML requires an XML parser and an XML DOM. JSON can be parsed with JavaScript and is shorter and can use arrays. Both are self-describing, human readable, hierarchical, and can be fetched with `XMLHttpRequest`. 

XML allows for more complex structures apparently. 

**Protocol Buffers** - Serialisation, like XML or JSON, with interface specification. 
+ The `.proto` file defines data structure. It has a compiler to put into 4 different languages
+ It can be built in Java to send information
+ The receiver could be C++ to parse information. 

Another interesting approach is **Apache Parquet**. This is a column-oriented storage format rather than the conventional row-oriented database format. 

Advantages:
+ improved compression since each column has same data type
+ faster since only relevant columns are parsed
+ less hard drive access

Disadvantages:
+ high memory required
+ Not for complex structures
+ Lower write performance

Sounds like a quick read with high memory use and low write performance. Hard drives are cheap and reliable for database storage so they are still like the go-to. But it takes time to read from the database. Hence, storing in memory makes it faster, but you need a lot of memory to hold a bunch of data. 

Finally, we are looking into SQL. Suggested at checking out MySQL Workbench, free open source thing to practice using SQL if you would like. You `SELECT` data `FROM` a table, under certain conditions. That is the general idea, but not everything you need. There's also `JOIN`, using one table to pull information from another based on relationships. 

You can create and save databases with SQL, but using it as a transfer method probably isn't the most popular method. 

---

## Knowledge Check

Q1: What is defined as facts, observations, assumptions, and incidences?

_Data_ is defined as that. 

Not to be confused with _features_, AKA variables, which are aspects of data, like name or date.

Q2: What is defined as the patterns and relationships among data elements?

_Information_ is defined as such. 

So, it sounds like information is made up of data, which is described by features. 

Q3: What are the stages of data processing, and which stage is pre-processing performed?

The stages of data processing are:
+ data collection
+ data preparation
+ data input
+ data analysis
+ data interpretation
+ data storage

Steps are kind of self-describing, but pre-processing is performed in _data preparation_. 

Q4: Name some common data formats and name which format is the following

```xml
<img fig="Alice.jpg" tag="Alice" />
```

That is _XML_, AKA extensible markup language, which as a format similar to HTML.

Other formats include XLS (spreadsheets), CSV (comma separated values), and JSON (JavaScript Object Notation).

SQL is not a format but a query language for databases. However, I have seen files written in SQL for populating databases. 

Q5: What are (generally) the five stages of Data Analysis? When do we handle data with missing values?

This is a tricky question.

The five stages of Data Analysis are:
+ feature extraction
+ correlation analysis
+ feature selection
+ machine learning
+ extracting valuable insights

Missing values are handled during data pre-processing, which was the topic of the last chapter, and occurs in the _Data Preparation_ stage, well before we hit  the _Data Analysis_ stage. 

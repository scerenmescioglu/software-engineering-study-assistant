---
title: Database Design and Normalization
category: Database Systems
id: SE-DB-001
---

# Database Design and Normalization

Database design is the process of organising data so that it can be stored, accessed, and maintained efficiently.

## Relational Database

A relational database stores data in tables.

Each table contains:

- Rows, also called records or tuples
- Columns, also called attributes or fields

Each table should represent one main entity or relationship.

## Primary Key

A primary key uniquely identifies each row in a table.

A primary key:

- Must be unique
- Cannot contain NULL values
- Should remain stable

Example:

In a Student table, Student_ID can be the primary key.

## Foreign Key

A foreign key is an attribute that references the primary key of another table.

Foreign keys create relationships between tables and help maintain referential integrity.

Example:

Department_ID in the Student table may reference Department_ID in the Department table.

## Candidate Key

A candidate key is any minimal attribute, or combination of attributes, that can uniquely identify a row.

One candidate key is selected as the primary key.

Other candidate keys become alternate keys.

## Composite Key

A composite key consists of two or more attributes used together to uniquely identify a row.

Example:

In an Enrollment table, Student_ID and Course_ID may form a composite primary key.

## Functional Dependency

A functional dependency exists when one attribute determines another attribute.

It is written as:

A → B

This means that each value of A is associated with exactly one value of B.

Example:

Student_ID → Student_Name

Student_ID determines the student's name.

## Partial Dependency

A partial dependency occurs when a non-key attribute depends on only part of a composite primary key.

Example:

If the key is:

Student_ID + Course_ID

and:

Student_ID → Student_Name

then Student_Name depends only on part of the composite key.

Partial dependencies violate Second Normal Form.

## Transitive Dependency

A transitive dependency occurs when a non-key attribute depends on another non-key attribute.

Example:

Student_ID → Department_ID

Department_ID → Department_Name

Therefore:

Student_ID → Department_Name

Department_Name is transitively dependent on Student_ID.

Transitive dependencies violate Third Normal Form.

## First Normal Form

A table is in First Normal Form, or 1NF, when:

- Each field contains one atomic value
- There are no repeating groups
- Each row can be uniquely identified

A cell should not contain a list of multiple values.

## Second Normal Form

A table is in Second Normal Form, or 2NF, when:

- It is already in 1NF
- It has no partial dependencies

Second Normal Form is mainly relevant when the table has a composite key.

## Third Normal Form

A table is in Third Normal Form, or 3NF, when:

- It is already in 2NF
- It has no transitive dependencies

Non-key attributes should depend on the key, the whole key, and nothing but the key.

## Entity-Relationship Diagram

An Entity-Relationship Diagram, or ERD, visually represents database entities and their relationships.

Common components include:

- Entities
- Attributes
- Primary keys
- Relationships
- Cardinality
- Participation constraints

## Relationship Cardinality

Common relationship types include:

- One-to-one
- One-to-many
- Many-to-many

A many-to-many relationship is normally implemented using an associative table.

Example:

Students and Courses have a many-to-many relationship.

The Enrollment table connects them.

## Referential Integrity

Referential integrity ensures that a foreign-key value refers to an existing row in the related table.

It prevents invalid relationships and orphan records.

## Benefits of Normalization

Normalization helps:

- Reduce duplicated data
- Prevent update anomalies
- Prevent insertion anomalies
- Prevent deletion anomalies
- Improve data consistency
- Make tables easier to maintain

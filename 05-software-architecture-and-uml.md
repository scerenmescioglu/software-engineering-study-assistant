---
title: Software Architecture and UML Fundamentals
category: Software Design
id: SE-DESIGN-001
---

# Software Architecture and UML Fundamentals

Software architecture describes the high-level structure of a software system.

It identifies the major components, their responsibilities, and the ways they communicate.

## Importance of Software Architecture

A good architecture can improve:

- Maintainability
- Scalability
- Reliability
- Security
- Performance
- Testability
- Reusability
- Understandability

Architectural decisions are often difficult and expensive to change later in development.

## Layered Architecture

Layered architecture separates a system into logical layers.

A common structure includes:

### Presentation Layer

The presentation layer contains the user interface and handles user interaction.

### Business Logic Layer

The business logic layer contains application rules, calculations, and decision-making processes.

### Data Access Layer

The data access layer communicates with databases and other storage systems.

### Database Layer

The database layer stores and manages persistent data.

Each layer should mainly communicate with the layer directly below or above it.

## Client-Server Architecture

In client-server architecture:

- The client sends requests
- The server processes requests
- The server returns responses

A web browser can act as the client, while a Node.js application can act as the server.

## Model-View-Controller

Model-View-Controller, or MVC, separates an application into three parts.

### Model

The Model represents data and business rules.

### View

The View presents information to the user.

### Controller

The Controller handles user input and coordinates communication between the Model and View.

MVC improves separation of concerns and maintainability.

## Monolithic Architecture

A monolithic application contains most functionality in one deployable unit.

### Advantages

- Simple initial development
- Easy local testing
- Straightforward deployment for small systems

### Limitations

- Difficult to scale individual features
- Large codebases may become difficult to maintain
- One failure may affect the whole application
- Deployment requires releasing the entire system

## Microservices Architecture

Microservices architecture divides an application into small, independently deployable services.

Each service normally focuses on one business capability.

### Advantages

- Independent deployment
- Independent scaling
- Smaller service codebases
- Technology flexibility
- Better fault isolation

### Limitations

- Increased operational complexity
- Network communication problems
- Distributed data management
- More difficult debugging
- More complex testing and monitoring

## Coupling

Coupling describes how strongly software components depend on each other.

Low coupling is generally preferred because components can be changed with less effect on the rest of the system.

## Cohesion

Cohesion describes how closely related the responsibilities inside one component are.

High cohesion is generally preferred because each component has a focused purpose.

A well-designed system usually aims for:

- Low coupling
- High cohesion

# Unified Modeling Language

Unified Modeling Language, or UML, is a standard visual language used to model software systems.

UML diagrams can describe system structure and behaviour.

## Use-Case Diagram

A use-case diagram represents interactions between external actors and the system.

Main elements include:

- Actor
- Use case
- System boundary
- Association
- Include relationship
- Extend relationship
- Generalisation

An actor represents a role interacting with the system, not necessarily one specific person.

## Class Diagram

A class diagram represents the static structure of an object-oriented system.

A class may contain:

- Class name
- Attributes
- Methods

Common relationships include:

- Association
- Aggregation
- Composition
- Inheritance
- Dependency

## Association

Association represents a general relationship between classes.

Example:

A Student enrols in a Course.

## Aggregation

Aggregation represents a weak whole-part relationship.

The part can exist independently of the whole.

Example:

A Department contains Professors, but a Professor can continue to exist if the Department is reorganised.

## Composition

Composition represents a strong whole-part relationship.

The part normally cannot exist independently of the whole.

Example:

A House contains Rooms. If the House is destroyed as a modelled object, its Rooms are also removed.

## Inheritance

Inheritance represents an “is-a” relationship.

A subclass inherits attributes and methods from a superclass.

Example:

A Student is a User.

## Sequence Diagram

A sequence diagram shows how objects or components communicate over time.

It includes:

- Actors
- Lifelines
- Messages
- Activation bars
- Return messages

Time progresses from top to bottom.

## Activity Diagram

An activity diagram represents a workflow or business process.

Common symbols include:

- Initial node
- Activity
- Decision node
- Merge node
- Fork
- Join
- Final node

## State Diagram

A state diagram represents the different states of an object and the events that cause transitions.

Example states for an order include:

- Created
- Paid
- Shipped
- Delivered
- Cancelled

## Component Diagram

A component diagram shows major software components and their dependencies.

It is useful for representing modules, services, libraries, and interfaces.

## Deployment Diagram

A deployment diagram shows how software components are distributed across physical or virtual hardware nodes.

It may include:

- Client device
- Web server
- Application server
- Database server
- Cloud service

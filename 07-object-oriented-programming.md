---
title: Object-Oriented Programming Fundamentals
category: Software Design
id: SE-OOP-001
---

# Object-Oriented Programming Fundamentals

Object-oriented programming, or OOP, organises software around objects that contain data and behaviour.

An object is created from a class.

## Class

A class is a blueprint that defines the attributes and methods shared by its objects.

Example:

A Student class may contain:

- Name
- Student number
- GPA
- Methods for registering for courses

## Object

An object is an instance of a class.

If Student is a class, Ceren and Alex may be separate Student objects with different values.

## Attribute

An attribute represents data stored inside an object.

Examples include:

- name
- age
- balance
- studentId

## Method

A method represents behaviour belonging to a class or object.

Examples include:

- calculateTotal()
- registerCourse()
- updatePassword()
- displayInformation()

## Encapsulation

Encapsulation combines data and related methods inside a class while controlling access to internal details.

Private attributes should normally be accessed through suitable methods.

Benefits include:

- Data protection
- Controlled modification
- Reduced dependency
- Easier maintenance

## Abstraction

Abstraction exposes essential behaviour while hiding unnecessary implementation details.

For example, a user can call a payment method without needing to understand every internal banking operation.

## Inheritance

Inheritance allows one class to reuse or extend another class.

The original class is called the superclass or parent class.

The derived class is called the subclass or child class.

Example:

User may be a parent class.

Student and Administrator may inherit from User.

Inheritance represents an “is-a” relationship.

## Polymorphism

Polymorphism allows the same operation to behave differently depending on the object.

For example, different classes may implement a calculateSalary method differently.

## Method Overriding

Method overriding occurs when a subclass provides its own implementation of an inherited method.

## Method Overloading

Method overloading uses the same method name with different parameter lists.

Not every programming language supports traditional method overloading.

## Association

Association represents a general relationship between two classes.

Example:

A Teacher teaches a Course.

## Aggregation

Aggregation is a weak whole-part relationship.

The contained object can exist independently of the container.

Example:

A Department contains Teachers, but a Teacher can exist independently of one specific Department.

## Composition

Composition is a strong whole-part relationship.

The contained object normally cannot exist independently of the owner.

Example:

An Order contains OrderItems. Removing the Order normally removes its OrderItems.

## Interface

An interface defines operations that implementing classes must provide.

Interfaces help create flexible systems with low coupling.

## Abstract Class

An abstract class cannot normally be instantiated directly.

It may include:

- Abstract methods without complete implementations
- Implemented methods
- Shared attributes
- Common behaviour

## Constructor

A constructor is a special method used to initialise a new object.

It commonly assigns initial attribute values.

## Access Modifiers

Access modifiers control where attributes and methods can be accessed.

Common access levels include:

- Public
- Private
- Protected

## SOLID Principles

### Single Responsibility Principle

A class should have one main responsibility and one primary reason to change.

### Open-Closed Principle

Software components should be open for extension but closed for unnecessary modification.

### Liskov Substitution Principle

Objects of a subclass should be usable wherever objects of the parent class are expected without breaking correct behaviour.

### Interface Segregation Principle

Classes should not be forced to depend on methods they do not need.

Smaller focused interfaces are preferred over large general interfaces.

### Dependency Inversion Principle

High-level modules should not depend directly on low-level implementation details.

Both should depend on abstractions.

## Benefits of OOP

Object-oriented programming can improve:

- Code organisation
- Reusability
- Maintainability
- Extensibility
- Testability
- Separation of responsibilities

OOP should be used carefully. Poorly designed class structures can create unnecessary complexity and strong dependencies.

---
title: Software Security Fundamentals
category: Software Security
id: SE-SEC-001
---

# Software Security Fundamentals

Software security is the practice of designing, developing, testing, and maintaining software so that it protects systems and data from unauthorised access, misuse, damage, and disruption.

## Confidentiality

Confidentiality ensures that information is accessible only to authorised users.

Examples include:

- Encrypting sensitive data
- Using access controls
- Protecting passwords
- Restricting database permissions

## Integrity

Integrity ensures that information remains accurate and is not changed without authorisation.

Examples include:

- Input validation
- Digital signatures
- Database constraints
- Audit logs

## Availability

Availability ensures that systems and information remain accessible when authorised users need them.

Threats to availability include:

- Hardware failure
- Denial-of-service attacks
- Software crashes
- Network outages
- Data corruption

## Authentication

Authentication verifies the identity of a user or system.

Common authentication methods include:

- Passwords
- One-time codes
- Security keys
- Biometric verification
- Multi-factor authentication

## Authorization

Authorization determines what an authenticated user is allowed to access or perform.

Authentication asks:

"Who are you?"

Authorization asks:

"What are you allowed to do?"

## Principle of Least Privilege

The principle of least privilege means that users and programs should receive only the permissions necessary to complete their tasks.

This reduces the damage caused by mistakes, compromised accounts, and malicious software.

## Input Validation

Input validation checks whether user-supplied data follows expected rules.

Input should be checked for:

- Data type
- Length
- Range
- Format
- Required values
- Allowed characters

Validation should be performed on the server even when client-side validation is also used.

## SQL Injection

SQL injection occurs when untrusted input is inserted directly into an SQL query.

Unsafe example:

    SELECT * FROM users WHERE username = 'USER_INPUT';

Protection methods include:

- Prepared statements
- Parameterised queries
- Input validation
- Restricted database permissions

## Cross-Site Scripting

Cross-site scripting, or XSS, occurs when malicious script content is displayed in another user's browser.

Protection methods include:

- Escaping output
- Sanitising user content
- Using Content Security Policy
- Avoiding unsafe HTML insertion

## Cross-Site Request Forgery

Cross-site request forgery, or CSRF, tricks an authenticated user into submitting an unwanted request.

Protection methods include:

- CSRF tokens
- SameSite cookies
- Reauthentication for sensitive actions
- Checking request origins

## Password Security

Passwords should never be stored as plain text.

Secure password storage normally uses:

- A strong password-hashing algorithm
- A unique salt
- An appropriate work factor

Examples of password-hashing algorithms include bcrypt, scrypt, and Argon2.

## Encryption

Encryption converts readable data into protected ciphertext.

Data may need encryption:

- While stored
- While transmitted
- During backup

HTTPS protects data transmitted between browsers and web servers.

## Session Security

Secure session management should include:

- Random session identifiers
- Secure and HttpOnly cookies
- Session expiration
- Logout functionality
- Regeneration after login
- Protection against session fixation

## Error Handling

Error messages should help users without exposing sensitive system details.

Applications should not reveal:

- Database passwords
- File-system paths
- Stack traces
- Secret keys
- Internal queries

Detailed errors should be stored in protected logs.

## Security Testing

Security testing may include:

- Vulnerability scanning
- Penetration testing
- Static code analysis
- Dynamic analysis
- Dependency scanning
- Authentication testing
- Authorization testing
- Input validation testing

## Secure Development Practices

Developers should:

- Validate all untrusted input
- Use parameterised database queries
- Keep dependencies updated
- Avoid hard-coded secrets
- Use secure authentication
- Apply least privilege
- Log important security events
- Review code
- Test security requirements
- Back up important data

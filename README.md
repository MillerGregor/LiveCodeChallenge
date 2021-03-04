# Live Code Challenge
## Goals

We're adding a new feature to our hypothetical application which displays a user's messages.

- Data Retrieval
  - Mock REST API endpoints:
    - GET messages: http://localhost:4000/user/:userId/messages
    - PUT message: http://localhost:4000/messages/:messageId
        - body with updated message as JSON, omitting id
        - set header: `Content-Type: application/json`
  - re-query every 30 seconds
  - start server: 
    - in `./server`, use "`start`" script from package.json

- Front-End Component
  - Re-usable throughout an application
    - include 2 instances to demonstrate
  - Styled as defined in Figma
  - Shows status indicator when query is running
  - when a message is clicked, it is updated via the API as viewed

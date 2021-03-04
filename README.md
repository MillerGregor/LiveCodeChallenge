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
  - NOTES: 
    - start server: "`start`" script in `./server/package.json`
    - the mock server implements a 2.5s delay
    - consider calls to the endpoints expensive

- React Component
  - Re-usable throughout an application
    - include 2 instances to demonstrate
  - Styled as defined in Figma:
    - https://www.figma.com/file/rlyQpSTz2UT4Vk44dA47B0/Live-Coding-Challenge?node-id=0%3A1
  - Shows `StatusIndicator` when query is running
  - when a message is clicked, it is updated via the API as viewed

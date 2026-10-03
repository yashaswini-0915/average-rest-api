# Average REST API

A simple Node.js REST API that calculates the average of all numbers received so far.

## Technologies Used

* Node.js
* Express.js
* Axios

## API Endpoint

### POST `/average`

The API accepts a number in the request body.

### Request

```json
{
  "number": 20
}
```

### Response

```json
{
  "number": 20,
  "average": 15
}
```

The server stores all valid numbers received so far and calculates their average.

## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node server.js
```

The server runs at:

```text
http://localhost:3000
```

### 3. Start the client

Open another terminal and run:

```bash
node client.js
```

Enter numbers when prompted.

## Example

```text
Enter a number: 10
Number: 10
Average: 10

Enter a number: 20
Number: 20
Average: 15

Enter a number: 30
Number: 30
Average: 20
```

<!-- ## Project Structure

```text
average-api/
├── client.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
``` -->



# Distributed Ride Request

Azure Durable Functions are used in the development handle user requests and responses for rides.

The solution will involve breaking down the matching algorithm into smaller functions that can be executed separately and asynchronously, improving the performance and scalability of the system.

The code accepts a request 

## Installation
1. Clone or download repository

2. Install any dependencies with npm

```bash
  npm install
```

3. Ensure Azure Functions Core Tools are installed

4. Ensure that Azurite Blob, Queue and Tables are running

```bash
  azurite start
```
5. Run the functions

```bash
  func start
```

6. Postman or Curl can be used to send a GET or POST request to http://localhost:7071/api/orchestrators/DurableFunctionsOrchestratorJS1 once the functions are running, the parameters
"lat", "lon" and "riders" needs to be passed in the request body for the code to calculate correctly.
lat for latitude, lon for longitude and riders for the number of riders in the vehicle.
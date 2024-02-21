# **Course API Documentation**
___
## Introduction
Welcome to the Course API documentation. This API provides endpoints for retrieving all the Course Data using Get Request, you can view the different course information such as all sorted course, all course name and specialization, and all course name.
___
## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have *Node.js* and *npm* installed on your machine.
- You have a local *MongoDB* running
___
## Installation
To use the Courses API, follow these steps:
1. Clone the repository to your local machine. `git clone https://github.com/zdotdev/Course-API-2.0.git`
2. Run `npm install` to install all the necessary dependencies.
5. Start the server with `npm run devStart`.
___
## Usage
Once the server is running, you can interact with the API using HTTP requests. The base URL for all endpoints is /.
### Endpoints
- **GET** /api/courses Retrieve all sorted Courses.
- **GET** /api/specializations Retrieve all Course name and Specializations.
- **GET** /api/cirriculums Retrieve all Curriculums.
___
## Deployment

This API is designed to be deployed to a server environment. Follow standard deployment procedures for your chosen hosting provider. Ensure that the environment variables are correctly set in the production environment.
___

## Challenges
I encounter a lot of challenges, especially in sorting and retrieving specific data. I start from the scratch because this is my first time using local MongoDB Database. I learned how to navigate by reading the documentations online, especially in the part of sorting and filtering data.
___
## Security
Ensure that your API is secure by implementing proper authentication and authorization mechanisms. Use HTTPS for all communication and restrict access to sensitive operations.
___
## Troubleshooting
If you encounter issues, check the logs for any error messages. Common problems could be related to the database connection, incorrect environment variables, or syntax errors in the code.
___
## Contributing
Contributions to the Course API are welcome. Please submit a pull request with a clear description of the changes and tests.
___
## Contact
For any further queries or support, please contact the project maintainer.

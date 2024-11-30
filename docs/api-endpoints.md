
# API Endpoints

This document contains detailed information about the API endpoints available in the project.

## Files API

### 1. Upload File
- **Method**: `POST`
- **Endpoint**: `/files/upload`
- **Headers**: `Content-Type: multipart/form-data`
- **Request Body**:
  - `file`: The file to upload (binary).
  - `userId`: (String) ID of the user uploading the file.
- **Response**:
  ```json
  {
    "message": "File <filename> successfully uploaded."
  }
  ```
- **Description**:
  - Uploads a file to the server.
  - Stores the file metadata in the database.
  - Caches the file metadata in Redis.

### 2. Get File by ID
- **Method**: `GET`
- **Endpoint**: `/files/:fileId`
- **Parameters**:
  - `fileId`: (String) The ID of the file to retrieve.
- **Response**:
  ```json
  {
    "fileId": "example-file-id",
    "userId": "user123",
    "size": 1024,
    "duration": 0,
    "timestamp": "2024-11-30T00:00:00.000Z",
    "status": "uploaded"
  }
  ```
- **Description**:
  - Retrieves file metadata by its ID.
  - Checks Redis cache first; if not found, retrieves from the database and caches it.

---

## Queue API

### 1. Add Task to Queue
- **Method**: `POST`
- **Endpoint**: `/queue/add-task`
- **Request Body**:
  ```json
  {
    "fileUrl": "http://example.com/file.jpg",
    "fileId": "example-file-id"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task for processing file <fileId> has been added to the queue."
  }
  ```
- **Description**:
  - Adds a file processing task to the queue.
  - The `fileUrl` is used to download and process the file.

---

## Users API

### 1. Register User
- **Method**: `POST`
- **Endpoint**: `/users/register`
- **Request Body**:
  ```json
  {
    "username": "example",
    "password": "example123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User example successfully registered."
  }
  ```
- **Description**:
  - Registers a new user.
  - Hashes the password and stores the user in the database.
  - Returns an error if the username already exists.

### 2. Login User
- **Method**: `POST`
- **Endpoint**: `/users/login`
- **Request Body**:
  ```json
  {
    "username": "example",
    "password": "example123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt-token-string"
  }
  ```
- **Description**:
  - Authenticates a user using the provided username and password.
  - Returns a JWT token upon successful login.
  - Throws an error if the credentials are invalid.


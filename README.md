# homebase-test

## Prerequisites
Before you begin, make sure you have the following installed on your machine:

- Python version 3
- Node.js >= 14
- npm >= 0.38

## Installation

### Set up Express server

1. Clone the repository
```
git clone https://github.com/tuankg1028/homebase-test.git
```
2. Navigate to the `be` directory of the cloned repository:
```
cd homebase-test/express
```
3. Install dependencies:
```
npm install
```
4. Start the server:
```
npm run start
```
#### Testing CURD user
##### Create user
```
curl --location 'http://localhost:80/api/users' \
--header 'Content-Type: application/json' \
--data '{
    "fullName": "Le Thanh Tuan",
    "username": "tuankg1028",
    "password": "Test123"
}'
```

##### List users
```
curl --location --request GET 'http://localhost:80/api/users' \
--header 'Content-Type: application/json' \
--data '{
    "fullName": "Le Thanh Tuan",
    "username": "tuankg1028",
    "password": "Test123"
}'
```

##### Get users
```
curl --location --request GET 'http://localhost:80/api/users/1' \
--header 'Content-Type: application/json' \
--data '{
    "fullName": "Le Thanh Tuan",
    "username": "tuankg1028",
    "password": "Test123"
}'
```

##### Update users
```
curl --location --request PUT 'http://localhost:80/api/users/1' \
--header 'Content-Type: application/json' \
--data '{
    "fullName": "Le Thanh Tuan",
    "username": "tuankg1028",
    "password": "Test123"
}'
```
##### Delete user
curl --location --request DELETE 'http://localhost:80/api/users/1' \
--header 'Content-Type: application/json' \
--data '{
    "fullName": "Le Thanh Tuan",
    "username": "tuankg1028",
    "password": "Test123"
}'
### Setup Proxy

1. Run proxy server
```
python proxy.py
```
You can test this proxy by adding `-x http://localhost:8080` to `curl`

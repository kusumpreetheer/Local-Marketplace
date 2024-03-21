# Backend - UofC Portal


### Prerequisites

What things you need to install the software and how to install them.

```bash
# For Mac
python3 --version  # Ensure you have Python 3.x installed
pip3 install django  # Install Django

# it might be a little different for Windown users
``````

### Run Django

1. navigate to /backend/uofcPortal and run: `python3 manage.py runserver`
2. In your browser, navigate to http://127.0.0.1:8000 
3. If successful, you'll see the Django welcome page



## Quickstart

### Create a User

There is two ways to create a user:

1. **Via API**

      If you create a user via API, **the user TOKEN will be automatically created for you**.

      Example:

      ```javascript
      // Define the API endpoint
      const apiUrl = 'http://localhost:8000/api/users/';

      // User data
      const userData = {
        username: 'newuser',
        password: 'newpassword123'
      };

      // Use fetch to send a POST request
      fetch(apiUrl, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(userData), // Convert the JavaScript object to a JSON string
      })
      .then(response => {
        if (!response.ok) {
          // If the server response was not ok, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON in the response
      })
      .then(data => {
        console.log(data); // Log the data for debugging
        // Handle the response data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      ```
      Note: this will not return the token. See the [GET User Token](#get-user-token) section

<br/>

2. **Via the Admin console**
      
      **Note**: This approach will **NOT** automatically create a TOKEN for the user
      
      Go to the `/admin` console and create a user under the Users model.

      Then go to the `Token` section and create a Token for the user you just created.

<br/>

### GET user Token

Make a POST request with `username` and `password` and get a TOKEN in return (it returns JSON)

**Shell**
```ash
http post http://127.0.0.1:8000/auth/ username=7user password=7user
```

**JavaScript**

```javascript
fetch('http://127.0.0.1:8000/auth/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: '7user',
    password: '7user'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));

```

The above will **return**:

```bash
HTTP/1.1 200 OK
Allow: POST, OPTIONS
Content-Length: 52
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Wed, 21 Feb 2024 02:04:31 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.9.6
Vary: Cookie
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "token": "0bea0f2613cf603b501e56d9fce263c7f83312ea"
}
```
<br/>

### GET data

If you make a GET request to any table without specifying the `token` in the header, you will get the following in return

```
{
    "detail": "Authentication credentials were not provided."
}
```

this is because you did not provide the `Token` in the request.

The correct way of requesting is as follows:

```javascript
fetch('YOUR_ENDPOINT_URL', {
  method: 'GET', // or 'PUT'
  headers: {
    'Authorization': 'Token 024b09eea7518c868c1ab9a1bbd13b85115bda4a'
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});

```

this will return data related to the specific Token/User. (Not implemented for now)

***

### Fixtures & Dummy Data

To flush database data:

```BASH
python3 manage.py flush
```

To upload the default dummy data:

```BASH
python3 manage.py loaddata dummy_data.json
```
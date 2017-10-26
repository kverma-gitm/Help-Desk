# Help Desk - Ticket Based Support System


## Description
A generic ticket based support system for resolving queries on a platform.It's ticket based support system web app where you can raise a query and get it resolved by the admin.


## Features

```
   Features of the platform -  

 
 1) A view for the user-

a) This view contains a view where user can register or signup. 
b) The user can raise query and get a reply from the admin.
c) The user can open or close a query.
d) The user can see details of a particular query.  
e) The user can delete a query.
f) User can all see the information of the account.
g) On Status change of ticket or reply on the ticket, the person will receive an email notification.
h) User can filter the tickets according to the status using dropdown menu on the upper right corner of the webpage.
 
 
2) A view for the admin- 

a)Here admin can login and see all queries by the user.
b)The admin can reply to the queries.
c)The admin can open or close a query.
d)Admin can delete a query.
e)Admin can see all the information of the users.
f)On Status change of ticket or reply on the ticket, the person will receive an email notification.
e)Admin can filter the tickets according to the status using dropdown menu on the upper right corner of the webpage. 


(   Note- 

    To open As Admin:

    To Run the Application as an admin please signup into Application Using name as "Admin".
    1.)As this is demo Application, all the users having name as Admin will be admin of this application.
    2.)You Will be able to see the information of all users.

    To open as User:
    To Run the Application as an user please signup into Application Using name other than (Admin).

    To Send email notification:
    Enter valid email and password in "ticket.js" file in server/app/controller folder.)
 
 ```

## Prerequisites

Git

NodeJs

NPM

MongoDB

## Running

  running mongodb:
```
    1). Open Command Prompt and change directory to where mongodb is installed in bin folder.
    2). Type 'mongod' in the command prompt.
    3). press enter database server will start.
```
  installing dependencies:
```
    (Make sure the command prompt is running for mongoDB and open a new Command Prompt.)
    1). Unzip the downloaded file.
    2). Open the extracted folder.
    3). open the server folder 
    4). Type Command : npm install and press enter. This will install all dependencies shown in package.json file.
```
  running project:
```
    Install all dependencies by : npm install and run the application Using: node app.js in new command prompt.

    1.)Update Email and Password in ticket Controller for nodemailer event.
```

    
## Built With

OS : Windows 10

API Tool : Postman

Editor : Sublim Text

Frontend Technologies allowed - HTML 5, CSS3, Javascript, Jquery and AngularJS.

Backend Technologies allowed - NodeJs, ExpressJS, MongoDB.

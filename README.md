## Description
Shopping website mock-up displaying items, allowing users to add items to their cart and checkout. Featuring a product carousel. Built using React, HTML and SCSS. Products are stored in Google firestore database. Project was made develop understanding with React as well as working with document-oriented databases.

![Screenshot](https://user-images.githubusercontent.com/93106408/200732193-3fcb965a-da8a-4096-88dd-3fa464a6c970.JPG)

## Setup 

Clone this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To run:

`npm start`

Alternatively hosted [here](https://robswares-ecommerce-site.netlify.app)

## Approach
In order to store products in a database, I set up a Google Firestore database. Firestore is a document-based database which I found to be more advantageous compared to using a relational database such as mySQL. The database stores and queries data as JSON-like documents which makes it much easier to use as it is in the same format as the application code. The documents also are flexible and are allowed to evolve over time which is helpful to easily make changes with the application needs. 
After developing the code to get and update products from the database, I created the React frontend to allow the user to interact with the products. I utilise the reusable component functionality of React to create a Product component, which I use to store props such as the name, price, etc. For the user to access different products and pages such as the Cart, the ```BrowserRouter``` is defined with various ```Routes``` contained in it linking the different pages on the site. 

## Struggles
One of the main struggles I had was working with the Firestore API to get data awell as make updates to it, as it was my first time working with the API. This led to me to research the Firestore documentation, to try and understand how it was working and what code I needed to write to read and update data. This process gave me a much greater understanding of Firestore and how document databases work. 

## Things I would do differently
To avoid the stock images of products from breaking, I would store these images on a cloud storage platform, instead of as links as they are currently. This would ensure so long as the cloud storage is running, these images wouldn’t go missing. 

Due to time constraints when developing the project, functionality such as the cart isn’t fully fleshed out. I would develop it further to allow the user to enter customer details and payment information to create a more realistic shopping website experience. 

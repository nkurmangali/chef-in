# Instructions to launch
In terminal, while in the root directory of the project, run the following commands
```
npm i
npm start
```

# Development Process
I used the React framework to develop this website as it is a lightweight, popular and easy to start framework for developing web applications.

In order to build this website I have followed the waterfall model of the Software Development Cycle.
## Requirements Gathering
I have read through the requirements specified in Task №9 as provided. I identified the following features requirements:
Fetching the list of recipes
Showing the list of recipes on a webpage
Opening a page of detailed recipe view when clicked on a specific recipe on the list
Detailed recipe view
Search recipes with keywords

## System Design
My system will consist of a web application. It doesn’t have its own server as the recipes will be directly fetched from the open-source recipes API. In my case, it is the Recipe Search API by Edemam.I have decided to build a two page website.
The first page will contain a search bar and a result of that search.
The second page will be accessible by clicking on any of the search results given on the first page

## Implementation 
I created a new React Application using create-react-app. I have split my project src directory into service, components, and pages folders. Service folder contains the files for the code that interacts with the external API. The components folder contains components of my web page such as header, list items, etc. The pages folder contains the main pages of my website. I have decided to use react-router-dom for handling the routing on my website. To handle storing and manipulating the data I used React’s built-in useState and useEffect hooks. There is a drawback related to this implementation as the web page will not store states across pages. If a user decides to see the detailed view of the recipe and then go back to their search result, they won’t be able to. The search also can be extended given the next url of the search result. For that I have implemented a “Load More” button at the end of the list. When clicked, it will query the external API to get the next list of search results for the same query.

## Testing
I have conducted end-to-end testing going through the workflow as a user and have found the search and the detail view to display correct information.

## Deployment
The source code of my website is uploaded to github and can be accessed by anyone and run locally.


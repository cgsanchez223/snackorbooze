### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is used with React applications to render and navigate components. It has the capabilities to map URLs to specific components.

- What is a single page application?
A single page application is a web application that works with a single page of HTML. With React Router, the components on that single page can progressively update content not immediately shown to the user.

- What are some differences between client side and server side routing?
Client side routing is handled by the browser. There is faster navigation between pages because all the pages are local. Server side routing requires communication with a server. Each time you want to go on a new page, you need to send a request. ex - clicking a link on your current page will send a request to the server, which will then respond with taking you to a new page or denying access. 

- What are two ways of handling redirects with React Router? When would you use each?
Components can be used to handle redirects with React Router. Navigate Component is useful for redirecting pages that you cannot go back. For example - login pages often have a json permission key timer. Some pages the timer will log out and redirect you due to inactivity. In these case, you cannot go back to the last page because the key expired. You can use a Navigate Component to redirect you back to the login page.

Hooks are also a great way to use redirects. useNavigate can be used on pages with multiple routes. For example, when you are taking a quiz online. Each question can be on a separate page. You can answer the question and click a "Next" button to move to the next question. On the next page, there will also be a "Back" button, which can take you back to the previous question without reloading the page. Everything is already loaded in the background from the react router and the hook is used to retrieve that information for you to see.

- What are two different ways to handle page-not-found user experiences using React Router? 
You can use a custom path such as "page/:path" which can be used to redirect to pages such as 404 Not Found pages. You can also redirect to different pages such as throwing the user back to the original page.

You can also redirect them to "/" - which can be the homepage, and you can code it to show an error message after redirecting.

- How do you grab URL parameters from within a component using React Router?
There is a hook in React call useParams(); Params can be customized to many different variables. For example useParams({ username, country }) can be used to apply the username and country onto whatever you are using the information for.

- What is context in React? When would you use it?
Context can be used to link multiple pages without having to pass props at every level. For example - you can have a main Child page. From that page, you can branch off and pass along many props to a GrandChild page. You can then create a further GreatGrandChild page which can have props from Child and GrandChild by only linking them, not manually writing them in.

You can use context with data that is meant to be used throughout an application by all users.

- Describe some differences between class-based components and function
  components in React.
Class based components use the ES6 classes for components, state, and life-cycle methods. Function components uses JavaScript for declaration. Function components can also use hooks such as useState() and useEffect() to work with state and life-cycles.

- What are some of the problems that hooks were designed to solve?
There were a ton of limitations with many other components. Often finding one solution would create another. Hooks were designed to simplify the process. Complex structures could written on one page, and then passed down to be reused on another without linking everything. It created better origanization. Errors with state could be handled on one page, then linked to another page.
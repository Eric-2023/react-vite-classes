/*
When creating a new component, remember to:
1. Create a new file in the components directory/folder. (src/components/)
2. Name the file using PascalCase (e.g., MyComponent.jsx). - this is how React 
components are typically named/ complier will know that this is a component and not a regular JS file.
3. Import React and any necessary hooks or libraries at the top of the file.
4. Define your component as a function or class. 
functional components are components that are defined using a JavaScript function. 
They can accept props as an argument and return JSX to render UI, they also can use hooks to manage state and side effects. eg useState, useEffect, etc.
but class components are defined using ES6 classes and extend the React.Component class.

5. Use JSX to structure your component's UI.
6. Export the component at the bottom of the file.
7. Add PropTypes if your component accepts props for better type checking.
8. Write CSS or use styled-components for styling, if needed.
9. Test your component to ensure it works as expected.
10. Document any important details or usage instructions in comments.

Following these steps will help maintain consistency and quality across all components in the project.import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1>Welcome to Our Website</h1>
            <p>Your journey to excellence starts here.</p>
            <button className="cta-button">Get Started</button>
        </div>
    );
};

export default HeroSection; 
 */

/*
1. create a breakedown wireframe/ mockup of the app into components.
2. Create a new file in the components directory/folder. (src/components/)
3. create the componeents without interactivity first.
4. Add interactivity using state and event handlers- for changing data. 
and props for  data that is not changing.
5. Test each component to ensure it works as expected.

Components return JSX, which is a syntax extension for JavaScript that looks similar to HTML.
the JSX only returns a single parent/root element.
<nav> </nav> is the parent element in the NavBar component.
<div> </div> is the parent element in the Footer component., it cannot return two sibling elements.
If the elements are more than one, wrap them in a single parent element like a <div> </div> or a React Fragment <> </>.
To style the components, you can use inline styles, CSS modules, or styled-components.
To be able to use the components in other parts of the application, you need to export them using export default ComponentName; at the end of the file.
eg 
function NavBar (){
return ( ... )}
export default NavBar; {NavBar, UserProfile}

Props and State in React

Props are short for properties and are used to pass data from a parent component to a child component.
Props are used to pass data from a parent component to a child component.
Props are read-only and cannot be modified by the child component.
Props are passed as attributes in the JSX when rendering the child component.
Props can be of any data type, including strings, numbers, objects, and functions.
We have 2 way of passing data to components:
1. Props - for data that is not changing.
2. State - for data that is changing.
we have 2 ways of passing props:
1. Directly passing values as attributes in the JSX.
2. Using the spread operator to pass an object containing multiple props.

for any list of items, use the map() method to iterate over the array and render a component for each item in the array.
Each item in the list should have a unique key prop to help React identify which items have changed, are added, or are removed.; 
eg
const productList = dresses.map((item) =>
    <Products key={item.id} id is unique for each item in the array (is the key prop)
    name={item.name}
    price={item.price}
    description={item.description}
    image={item.image}
     />
);
return (
    <div>
        {productList}
    </div>
)


State is used to manage data that can change over time within a component.
State is managed using the useState hook in functional components.
State is initialized with a default value and can be updated using the setState function.
When state changes, the component re-renders to reflect the new state.

eg
import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0); // count is the state variable, setCount is the function to update the state variable, 0 is the initial value of the state variable.
    
    const increment = () => {
        setCount(count + 1); // update the state variable using the setCount function.
    };
    
    return (
        <div>
            <p>Count: {count}</p> // display the current value of the state variable.
            <button onClick={increment}>Increment</button> // call the increment function when the button is clicked.
        </div>
    );
}
export default Counter;
Exaple 2:
example of passing props and using state in a component:
import React from 'react'
import { useState } from 'react'

function Products({ name, price, descr, image, button, onClick }) {
  return (
    <div className="card m-2" style={{ width: "14rem", height: "350px", fontSize: "0.8rem", display: "flex", flexDirection: "column" }}>
      <img src={image} className="card-img-top" alt={name} style={{ height: "175px", objectFit: "cover" }} />
      
      <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{descr}</p>
        <p className="card-text" style={{ fontWeight: "bold" }}>${price}</p>
        
       
        <div className="mt-auto">
          <button 
            className="btn btn-primary" 
            style={{ fontSize: "0.8rem", padding: "0.3rem 0.6rem" }}
            onClick={onClick}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products

In this example, the Products component receives several props: name, price, descr, image, button, and onClick. 
These props are used to display product information and handle button clicks.
The onClick prop is a function that is called when the button is clicked, allowing for interactivity.

Example 3: form handling with state
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;

In this example, the ContactForm component uses state to manage form data. 
The handleChange function updates the state whenever an input field changes, and the handleSubmit function handles form submission.

By understanding and utilizing props and state effectively, you can create dynamic and interactive React components.

Information flow in React:
1. Parent to Child: Data is passed from a parent component to a child component using props.
2. Child to Parent: Data can be sent from a child component to a parent component using callback functions passed as props.
3. Sibling to Sibling: Data can be shared between sibling components by lifting the state up to their common parent component and passing it down as props.
4. Global State Management: For larger applications, state management libraries like Redux or Context API can be used to manage and share state across multiple components.
5. Event Handling: Components can communicate through events, where a child component can trigger an event that the parent component listens to and responds accordingly.
State Notes:
controlled components - its a component that uses state to manage its form data/ to keep track of the input values. eg input, textarea, select in forms
uncontrolled components - its a component that does not use state to manage its data. instead, it relies on the DOM to handle the data. eg using refs to access the input values. eg useRef hook in functional components.
example of controlled component:
import React, { useState } from 'react';

function ControlledInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <input type="text" value={inputValue} onChange={handleChange} />
    );
}

export default ControlledInput;

example of uncontrolled component:
import React, { useRef } from 'react';

function UncontrolledInput() {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        alert(`Input Value: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
} 

export default UncontrolledInput; 
Real world applications often use a combination of both controlled and uncontrolled components based on the specific requirements and complexity of the form.
Real world application example for uncontrolled components is when integrating with third-party libraries that manage their own state, such as date pickers or rich text editors.

we use state for data that is changing.
Add interactivity using state and event handlers- for changing data.
for events we can use onClick, onChange, onSubmit, onMouseOver, onMouseOut, onFocus, onBlur, etc. eg onClick={() => alert(`You have selected the ${item.name} priced at $${item.price}`)} and its added to the button element in the Products component.

in our case;
we have App.jsx as the parent component and Form.jsx as the child.
we will use state at the App.jsx component to manage the form data. and we will pass the state and the event handlers as props to the Form.jsx component.
Steps:
1. In App.jsx, import useState from React.
2. Create a state variable to hold the form data using useState.
Here, we need useState to capture the form data that is being inputed in the Form component.
we use it before the return statement in the App component.
const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
});
we initialize the state with an object that has two properties: firstName and lastName, both set to empty strings.
the setFormData function is used to update the state when the input values change.

We will define a state for the first name and last name input fields by storing them in a varible.
the syntax is:
const [stateVariable, setStateVariable] = useState(initialValue);
useState is a hook provided by React that allows us to add state to functional components.
stateVariable is the current value of the state.
setStateVariable is a function that we can use to update the state.
initialValue is the initial value of the state.
3. Create event handler functions to handle form input changes and form submission.
4. Pass the state variable and event handler functions as props to the Form component.
5. In Form.jsx, use the props to set the input values and handle input changes and form submission.
6. Test the form to ensure that the state is being updated correctly and that the form submission works as expected.
7. Add validation to the form inputs to ensure that the data entered is valid before submission.
8. Add error handling to display error messages if the form submission fails.
9. Add authentication and authorization to restrict access to the form based on user roles or permissions.

What about when you dont want to use props and instead have everything in one component? example Form.jsx
import React, { useState } from 'react'
function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
    <div>
        <h2>Form Component</h2> 
        <form>
            <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
export default Form


Using formData object to manage multiple input fields

import React, { useState } from 'react'
function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return (
    <div>
        <h2>Form Component</h2>
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col">
                <input type="text" className="form-control" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="col">
                <input type="text" className="form-control" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange}/>
            </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
export default Form

Here the Form component manages its own state for the first name and last name input fields using the useState hook, without relying on props from a parent component.
This approach is suitable for simple forms or when the form data does not need to be shared with other components.
This approach is also useful for encapsulating form logic and state within the form component itself, making it more self-contained and easier to manage.   
And the handleChange function updates the state whenever an input field changes, and the handleSubmit function handles form submission.
Also, the input fields have the name attribute set to match the state properties, allowing the handleChange function to update the correct state property based on the input field that triggered the change event.
This makes the code more scalable and easier to maintain, especially when dealing with multiple input fields in a form.
It also allows for easier addition of new input fields in the future, as the handleChange function can handle changes for any input field with a matching name attribute.
It also helps in keeping the form data organized in a single state object, making it easier to manage and submit the form data as a whole.


What about lifting state up?   
Lifting state up is a common pattern in React where you move the state from a child component to a common parent component.
This is done when multiple child components need to share the same state or when a child component needs to update the state of another child component.
For example, if you have a form component that needs to update the state of a parent component when the form is submitted, you would lift the state up to the parent component and pass the state and the event handler as props to the form component.
In our case, we have lifted the state up from the Form component to the App component.
This allows us to manage the form data in the App component and pass it down to the Form component as props.
This way, the Form component can update the state in the App component when the input values change, and the App component can pass the updated state back to the Form component to display the current input values.
This is useful for managing shared state and ensuring that the state is consistent across multiple components.


What about when you dont want to use props drilling?
Props drilling is the process of passing props from a parent component to a child component, and then to a grandchild component, and so on, until the props reach the component that needs them.
This can lead to a lot of unnecessary prop passing and can make the code harder to read and maintain.
To avoid props drilling, you can use the Context API or state management libraries like Redux or Zustand.   
The Context API allows you to create a context that can be accessed by any component in the component tree, without having to pass props down manually at every level.
This is useful for managing global state, such as user authentication or theme settings.


What about validation?
Validation is the process of ensuring that the data entered into a form meets certain criteria before it is submitted or processed.
In React, validation can be implemented in several ways, depending on the complexity of the form and the specific requirements.
Here are some common approaches to validation in React:

1. Client-Side Validation:
This involves validating the form data on the client side (in the browser) before it is submitted to the server.
You can use JavaScript to check if the input values meet certain criteria, such as required fields, valid email format, password strength, etc.
You can display error messages to the user if the validation fails.

2. Using HTML5 Validation Attributes:
HTML5 provides built-in validation attributes that can be added to form elements, such as required, pattern, minLength, maxLength, etc.
These attributes can help enforce basic validation rules without writing custom JavaScript code.

3. Using Form Libraries:
There are several form libraries available for React that provide built-in validation features, such as Formik, React Hook Form, and Redux Form.
These libraries make it easier to manage form state and validation logic.

4. Custom Validation Logic:
For more complex validation requirements, you can implement custom validation logic in your React components.
This may involve creating functions to validate specific fields or the entire form based on your application's needs.

5. Server-Side Validation:
In addition to client-side validation, it's important to perform server-side validation to ensure data integrity and security.
This involves validating the form data on the server after it has been submitted.

Example of simple client-side validation in a React form:
import React, { useState } from 'react';

function SimpleForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your Password"
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;

In this example, the SimpleForm component includes client-side validation for the email and password fields. 
The validate function checks if the fields are filled out correctly and sets error messages accordingly. 
When the form is submitted, it either logs the form data or displays the validation errors.

By implementing validation in your React forms, you can enhance the user experience and ensure that the data collected is accurate and reliable.import React, { useState } from 'react'

what about authentication and authorisation?
Authentication is the process of verifying the identity of a user, typically through a login system where users provide credentials such as a username and password.
Authorization, on the other hand, is the process of determining what actions or resources a user is allowed to access based on their authenticated identity and assigned permissions or roles.

In a React application, authentication and authorization can be implemented using various methods, including:

1. Token-Based Authentication:
This involves using tokens (such as JWT - JSON Web Tokens) to authenticate users. Upon successful login, the server issues a token that the client stores (usually in localStorage or cookies) and includes in subsequent requests to access protected resources.

2. OAuth:
OAuth is an open standard for access delegation commonly used for token-based authentication. It allows users to log in using their credentials from third-party services like Google, Facebook, or GitHub.
3. Role-Based Access Control (RBAC):
This involves assigning roles to users (e.g., admin, user, guest) and defining permissions for each role. The application checks the user's role before granting access to certain features or resources.
4. Context API or State Management Libraries:
Using React's Context API or state management libraries like Redux to manage authentication state and user information across the application.  
5. Protected Routes:
Using libraries like React Router to create protected routes that only authenticated users can access. If a user is not authenticated, they are redirected to the login page.
6. Third-Party Authentication Services:
Using services like Firebase Authentication, Auth0, or AWS Cognito to handle authentication and authorization, which can simplify the implementation process.

Example of a simple authentication flow using React and JWT:
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function Login({ setAuth }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password }); // Send login request to the server
            const { token } = response.data;
            localStorage.setItem('token', token); // Store the token in localStorage
            setAuth(true); // Update authentication state
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

function ProtectedRoute({ component: Component, auth, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                auth ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}

function App() {
    const [auth, setAuth] = useState(!!localStorage.getItem('token')); // Check if token exists in localStorage

    return (
        <Router>
            <Route path="/login" render={() => <Login setAuth={setAuth} />} />
            <ProtectedRoute path="/dashboard" component={Dashboard} auth={auth} />
        </Router>
    );
}

function Dashboard() {
    return <h1>Welcome to the Dashboard!</h1>;
}

export default App;

In this example, the Login component handles user authentication by sending a login request to the server and storing the received JWT token in localStorage. 
The ProtectedRoute component checks if the user is authenticated before allowing access to the Dashboard component. If not authenticated, the user is redirected to the login page.

By implementing authentication and authorization in your React application, you can ensure that only authorized users can access certain features and resources, enhancing security and user experience.

In advanced applications, you might also consider implementing features such as:
- Multi-Factor Authentication (MFA): Adding an extra layer of security by requiring users to provide additional verification (e.g., a code sent to their phone) during login.
- Session Management: Handling user sessions, including session expiration and renewal, to maintain security over time.
- User Registration and Password Recovery: Implementing features for new user sign-up and password reset functionality.
- Audit Logging: Keeping track of user activities for security and compliance purposes.

In addition to the above, always ensure to follow best security practices, such as using HTTPS, securely storing tokens, and protecting against common vulnerabilities like XSS and CSRF.

In advanced React applications, we also learn about:
- Higher-Order Components (HOCs): Functions that take a component and return a new component with enhanced functionality.
- Render Props: A technique for sharing code between React components using a prop whose value is a function.
also learn about performance optimization techniques such as:
- Memoization: Using React.memo to prevent unnecessary re-renders of functional components.
- useCallback and useMemo Hooks: Optimizing functions and values that are passed as props to child components.
- Code Splitting: Dynamically loading parts of the application to reduce the initial load time using React.lazy and Suspense.
also learn about testing React components using libraries like Jest and React Testing Library to ensure the reliability and correctness of the application.
also learn about server-side rendering (SSR) and static site generation (SSG) using frameworks like Next.js to improve performance and SEO.
also learn about TypeScript integration with React for type safety and improved developer experience.
also learn about accessibility best practices to ensure that the application is usable by people with disabilities.
also learn about internationalization (i18n) to support multiple languages and locales in the application.
also learn about advanced state management techniques using libraries like Redux, MobX, or Zustand for managing complex application state.
also learn about using GraphQL with React for efficient data fetching and management.
also learn about building Progressive Web Apps (PWAs) with React to provide a native app-like experience on the web.
also learn about using React Native for building mobile applications using React.

Lets learn about Redux, Zustand and context API for state management in advanced applications.
Redux is a predictable state container for JavaScript apps, often used with React for managing application state in a centralized way.
Zustand is a small, fast, and scalable state management library for React that provides a simple and intuitive API for managing state in functional components.
The Context API is a built-in feature of React that allows you to share state across the component tree without having to pass props down manually at every level.
In advanced applications, you might choose one of these state management solutions based on the complexity of your application and your specific requirements.
Lets begin with Context API:
in advanced applications, the Context API is often used for managing global state that needs to be accessed by multiple components at different levels of the component tree.
some common use cases for the Context API in advanced applications include:
1. Theme Management: Managing application themes (e.g., light and dark mode) that can be toggled by the user and accessed by various components.
2. User Authentication: Storing and managing user authentication state, such as whether a user is logged in, their user information, and permissions.
3. Language Preferences: Managing internationalization (i18n) settings, such as the current language and locale, to support multiple languages in the application.
4. Application Settings: Storing global application settings that can be accessed and modified by different components, such as notification preferences or layout options.
5. Shopping Cart: In e-commerce applications, managing the state of a shopping cart that needs to be accessed by various components, such as product listings and checkout pages.
6. Form State: Managing the state of complex forms that span multiple components or steps, allowing for easy access and updates to form data.
7. Data Fetching State: Managing the state of data fetching operations, such as loading status, error handling, and cached data, to provide a consistent experience across components that rely on the same data.
8. Modal Management: Controlling the visibility and content of modals or dialogs that can be triggered from different parts of the application.
9. Notifications: Managing global notifications or alerts that need to be displayed to the user from various components.
10. User Preferences: Storing user-specific preferences, such as font size, layout options, or other customizable settings that enhance the user experience.

This is how to create a context and use it in advanced applications:

import React, { createContext, useState, useContext } from 'react';

// Create a Context for the theme (light or dark)
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme is light

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Example of a component that consumes the ThemeContext
const ThemedButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer'
            }}
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    );
}

// Example of using the ThemeProvider in the app
const App = () => {
    return (
        <ThemeProvider>
            <div style={{ padding: '20px' }}>
                <h1>Welcome to the Themed App</h1>
                <ThemedButton />
            </div>
        </ThemeProvider>
    );
}

export default App;
This is how we create a Redux store and use it in advanced applications:
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import React from 'react';

// Define initial state
const initialState = {
    count: 0
};

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Define a reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// Create a Redux store
const store = createStore(counterReducer);

// Example of a component that uses Redux state and dispatches actions
const Counter = () => {
    const count = useSelector((state) => state.count); // Access state from the Redux store
    const dispatch = useDispatch(); // Get the dispatch function

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

// Example of using the Provider to make the store available to the app
const App = () => {
    return (
        <Provider store={store}>
            <div style={{ padding: '20px' }}>
                <Counter />
            </div>
        </Provider>
    );
}

export default App;

We use Redux also in cart management in e-commerce applications, user authentication state management, and complex form handling.
eg in a shopping cart application, you might have actions for adding items to the cart, removing items, and updating item quantities. The reducer would handle these actions and update the cart state accordingly.
Exampl of using Redux in cart management:
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import React from 'react';





import { createStore, applyMiddleware } from 'redux';
more advanced example is:
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';

// Define initial state
const initialState = {
    data: [],
    loading: false,
    error: null
};

// Define action types
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Define action creators
const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

// Define a thunk action for fetching data
const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get('https://api.example.com/data');
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
}

// Define a reducer
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

// Create a Redux store with thunk middleware
const store = createStore(dataReducer, applyMiddleware(thunk));

// Example of a component that fetches and displays data using Redux
const DataFetcher = () => {
    const { data, loading, error } = useSelector((state) => state); // Access state from the Redux store
    const dispatch = useDispatch(); // Get the dispatch function

    useEffect(() => {
        dispatch(fetchData()); // Fetch data when the component mounts
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

// Example of using the Provider to make the store available to the app
const App = () => {
    return (
        <Provider store={store}>
            <div style={{ padding: '20px' }}>
                <h1>Data Fetcher</h1>
                <DataFetcher />
            </div>
        </Provider>
    );
}

export default App;


Example of using Zustand for state management in advanced applications:
import create from 'zustand';
import React from 'react';

// Create a Zustand store
const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}));

// Example of a component that uses Zustand state
const Counter = () => {
    const { count, increment, decrement } = useStore(); // Access state and actions from the store

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

// Example of using the Counter component in the app
const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Counter />
        </div>
    );
}

export default App;

*/
/*
useState is a hook provided by react that allows you to add state to functional components. it returns an array with exactly two elements:

 */
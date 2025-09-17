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
 */
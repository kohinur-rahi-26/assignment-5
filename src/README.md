# my project name
 Dev Stack

# A little description
A simple and user-friendly web application that helps users explore and build their ideal development stack by choosing different technologies.
# technologies
TypeScript,
Tailwind CSS,
HTML,
CSS

# 3 features about my project

- Explore different development technologies
- Select and build your ideal development stack
- User-friendly and responsive interface






### QUESTION ANSWER
1)JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. In React, JSX is used to easily create the structure of the UI or components.

2) props is a parent component from child component it is used to send data. normally props can't change child component 

On the other hand, state is the component’s own data, which can change. When the state changes, the component re-renders.

3)useState is used to store data or state within a React component. In this project, I have used useState to store the JSON data loading state and the selected data.

4)useEffect is used to perform side effects after a component renders, such as fetching data from an API or fetching a local JSON file. In our project, we have used useEffect to load data from the JSON file so that the JSON data can be fetched after the component loads.

5)When React renders multiple items using ".map()", each item needs a unique key to identify it separately. This helps React understand which item has changed, been added, or been removed. As a result, React can update the UI efficiently.

6)Conditional rendering means showing or hiding something in the UI based on a condition.
EXAMPLE  IN MY CODE:

            {selectedCards.length === 0 && (
              <p > Your stack is empty.</p>
           )}

 7)We pass data from parent to child using props. To send data from child to parent, we use a callback function as a prop.          

             


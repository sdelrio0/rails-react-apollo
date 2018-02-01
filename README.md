# Rails + React + Apollo GraphQL

## Running in DEV

```
$ overmind s -f Procfile.dev
```

## Styling conventions

We are going to borrow from BEM’s handbook by adopting a “block/element” approach (where “block” is our component, and “element” is some logical part of it). We will choose this syntax convention: component-name--element-name. That way, text field and submit button need the following classes: auth-form--input (component auth-form, element input) and auth-form--submit (component auth-form, element submit). “M” in BEM stands for “modifier”, but we will not use modifiers in our simple example.
 
The rule of thumb here is to have your parent CSS class to be named exactly as a component and its folder inside the project—not respecting that can lead to a spaghetti code in no time.

If a component has any children, children should be imported in a component’s .js file. This way, in our application.js we only register components located at the top of the hierarchy.

Perhaps you are wondering why we repeat our class names twice: message-form and js-message-form. This convention ensures that if someone gets carried away while redesigning and chooses to change a class name, your JS selectors will not be affected. Thus you have two parallel ways to name things: one for CSS and one for JavaScript. 

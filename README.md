# Rails + React + Apollo GraphQL


## Styling conventions

We are going to borrow from BEM’s handbook by adopting a “block/element” approach (where “block” is our component, and “element” is some logical part of it). We will choose this syntax convention: component-name--element-name. That way, text field and submit button need the following classes: auth-form--input (component auth-form, element input) and auth-form--submit (component auth-form, element submit). “M” in BEM stands for “modifier”, but we will not use modifiers in our simple example.
 
The rule of thumb here is to have your parent CSS class to be named exactly as a component and its folder inside the project—not respecting that can lead to a spaghetti code in no time.


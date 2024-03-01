A component cannot return more than one element in order to have multiple elements, wrap it in a div or another element

shortcut to wrap entire expression in an element => highlight code => command pallete =>
wrap with abbreviation => type element to wrap expression in

Better way to wrap entire expression and return multiple elements is to use Fragement. Either import
or, shortcut, is to leave empty angle brackets which is syntax for React.Fragments

add key to the prop for mapping each item in the List so React can keep track of the items.

To render dynamically, use {} e.g. to add if statements, add a function

const handleClick = (event) => {console.log(event)} declared outside of rendering resulted in parameter implicity has 'any' type. Tyscrpit needs to know 
the type of the parameter. In this case, even belong to React.MouseEvent, so we need to import 
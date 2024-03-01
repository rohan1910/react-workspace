/**
 *
 * A component cannot return more than one element
 * in order to have multiple elements, wrap it in a div or another element
 * shortcut to wrap entire expression in an element => highlight code => command pallete =>
 * wrap with abbreviation => type element to wrap expression in
 *
 * Better way to wrap entire expression and return multiple elements is to use Fragement. Either import
 * or, shortcut, is to leave empty angle brackets which is syntax for React.Fragments
 *
 * add key to the prop for mapping each item in the List so React can keep track of the items.
 *
 * To render dynamically, use {} e.g. to add if statements, add a function
 */
import { MouseEvent, useState } from "react";

// {items:[], heading: string}
/**
 *
 * Using an Interface allows us to define the shape(interface) of an object
 */
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup(props: ListGroupProps) {
  let items = ["New york", "Paris", "London", "Italy"];

  // Event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  // Hook => use keyword
  // should destrcuture array into variable and function
  /**
   * arr[0]  // state variable(selectedIndex)
   * arr[1]  // updater function(setSelectedIndex)
   */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

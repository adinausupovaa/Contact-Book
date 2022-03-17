import React from "react";

const contactsList = (props) => {
  // console.log(props);
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.surname}</li>
          <li>{item.phone}</li>
          <li>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.hendleEditIndex(index)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default contactsList;

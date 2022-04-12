import React, { useState } from "react";
import { useCounter } from "../context/counterContext";

const ListItem = ({ listObject }) => {
  const {
    id,
    from,
    is_unread: isUnread,
    sent_date: sentDate,
    snippet,
    subject,
  } = listObject || {};

  return (
    <div>
      <div>{from}</div>
      <CheckBoxWithLogic isUnread={isUnread} id={id} />
      <div>{sentDate}</div>
      <div>{snippet}</div>
      <div>{subject}</div>
    </div>
  );
};

const CheckBoxWithLogic = ({ isUnread, id }) => {
  const { setCheckedItemsCount } = useCounter();
  const [isChecked, setIsChecked] = useState(isUnread);
  const sendDataToServer = (id) => {
    // post request to the server
  };
  const checkHandler = () => {
    setCheckedItemsCount((prev) => (isChecked ? (prev -= 1) : (prev += 1)));
    setIsChecked((prev) => !prev);
    sendDataToServer(id);
  };
  return (
    <>
      <label>Nieprzeczytane</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => checkHandler()}
      />
    </>
  );
};
export default ListItem;

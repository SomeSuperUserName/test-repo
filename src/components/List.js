import ListItem from "./ListItem";
import { useFetchList } from "../context/listContext";

import { Link } from "react-router-dom";
import Counter from "./Counter";

const List = () => {
  const { listItems } = useFetchList();

  return (
    <div>
      {listItems.map((item) => (
        <div key={item.id}>
          <ListItem listObject={item} />
          <Link to={`/${item.id}`}>Przejdź do elementu</Link>
          <hr />
        </div>
      ))}
      <Counter />
    </div>
  );
};

export default List;

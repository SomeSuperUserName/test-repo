import { useParams } from "react-router-dom";
import { useFetchList } from "../context/listContext";
import ListItem from "./ListItem";

const Item = () => {
  const { id } = useParams();
  const { listItems } = useFetchList();
  const getData = (id) => {
    // eslint-disable-next-line eqeqeq
    return listItems.find((item) => item.id == id);
  };
  const data = getData(id);

  if (!id || !data) {
    return "404 Page";
  }

  return (
    <div>
      <ListItem listObject={data} />;
    </div>
  );
};

export default Item;

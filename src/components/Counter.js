import { useCounter } from "../context/counterContext";

const Counter = () => {
  const { checkedItemsCount } = useCounter();
  return <div>Counter: {checkedItemsCount}</div>;
};

export default Counter;

import useCounter from '../../hooks/use-counter';
import Card from '../UI/Card/Card';



export default function ForwardCounter() {

  const counter = useCounter();

  return (
    <Card>{counter}</Card>
  )
}


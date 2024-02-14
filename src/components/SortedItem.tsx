import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

type SortedItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function SortedItem({ id, name, price, imgUrl }: SortedItemProps) {
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex  justify-content-between align-item-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add To Cart</Button>
          ) : <div className="d-flex align-item-center flex-column" style={{gap:".5rem"}}>
            <div className="d-flex align-item-center justify-content-center" style={{gap:".5rem"}}>
               <Button>-</Button>
               <span>{quantity}</span>
            </div>
            </div>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SortedItem;

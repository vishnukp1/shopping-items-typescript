import { Card } from "react-bootstrap"

type SortedItemProps = {
id : number
name:string
price:number
imgUrl:string
}

function SortedItem({id ,name, price ,imgUrl}:SortedItemProps ){
  return (
 <Card>
    <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit:"cover"}}/>
 <Card.Body className="d-flex  justify-content-between align-item-baseline mb-4">
    <span className="fs-2">{name}</span>
    <span className="ms-2 text-muted">{price}</span>
 </Card.Body>
 </Card>

  )
}

export default SortedItem
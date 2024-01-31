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
 </Card>
  )
}

export default SortedItem
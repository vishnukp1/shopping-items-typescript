import { Col, Row } from "react-bootstrap"
import sortedItems from "../data/item.json"
import SortedItem from "../components/SortedItem"

function Store() {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {
            sortedItems.map(item =>(
                <Col key={item.id}>
               <SortedItem  {...item}/>
                </Col>
            ))
        }
    </Row>
    </>
  )
}

export default Store
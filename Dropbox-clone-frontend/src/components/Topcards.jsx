import React from 'react'
import { Col ,Row } from 'react-bootstrap'
import UploadCard from './UploadCard'
import FolderCreateCard from './FolderCreateCard'

function Topcards() {
  return (
   <div  id="topcards">
   <Row >
        {/* card-1 */}
        <Col sm="6" lg="3">
        <UploadCard/> 
        </Col>
     {/* card-2 */}
        <Col sm="6" lg="3">
          <FolderCreateCard/>
        </Col>
     {/* card-3 */}
  
        {/* <Col style={{ zIndex: 1 }} sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-success"
            title=""
            subtitle="Access"
            earning="People"
            icon="bi bi-folder-plus"
          />
        </Col> */}
      </Row>

   
   </div>
  )
}

export default Topcards
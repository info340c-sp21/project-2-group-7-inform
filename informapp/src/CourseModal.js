'use strict';
// Leon
import React, { useState } from 'react';
import { Modal, Button } from "reactstrap";


export default function CourseModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Large modal</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Hello World!! Modal here!!</Modal.Body>
            </Modal>
            
            
            {/* <div className="modal fade" id="BIME435" tab-index="-1" style="display:none;" aria-hidden="true" aria-labelledby="BIME435">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card m-3">
                                <div class="card-header">
                                    <h1>BIME435</h1>
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title">Informatics in Healthcare</h2>
                                    <p class="card-text">Introduces information technology applied in 
                                    <br>healthcare across three modules that (1) overview the U.S. healthcare 
                                    <br>system, (2) establish an understanding of clinical information systems 
                                    <br>used in healthcare, including electronic health records, and  (3) survey
                                    <br> applications in clinical informatics, such as virtual health care and 
                                    <br>the learning health system. Offered: W.
                                    </p>
                                </div>
                                
                                <div class="card-footer text-muted"><div class="course-tags" valign="bottom"><div class="tag"><p>BIO</p></div><div class="tag"><p>Non-major</p></div></div></div></div></div></div></div></div> */}
        </>
    );
}
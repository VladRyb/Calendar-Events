import React from 'react';
import { Toast, Row, Col } from 'react-bootstrap';

export default function ToastWin({ show, setShow, event }) {
  return (
    <Row className='toast-win'>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded mr-2'
              alt=''
            />
            <strong className='mr-auto'>Не пропустите</strong>
            <small>В течение 5 мин.</small>
          </Toast.Header>
          <Toast.Body>{event && event.title}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

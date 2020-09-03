import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import actions from '../redux/actions';
import Modalka from './Modalka';

export default function ListEvents() {
  const events = useSelector((store) => store.collectionsEvent);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [eventChange, setEventChange] = useState({
    id: '',
    title: '',
    dateStart: '',
    dateEnd: '',
  });

  function deleteEvent(id) {
    dispatch({ type: actions.delete, id });
  }

  return (
    <div>
      <Modalka
        setFormValue={setEventChange}
        formValue={eventChange}
        show={show}
        handleClose={handleClose}
      />
      {events.length <= 0 ? (
        <h3>Пока нет Мероприятий</h3>
      ) : (
        events.map((item) => {
          return (
            <Card key={item.id}>
              <Card.Header></Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>{item.title}</p>
                  <footer className='footer-card'>
                    <p> Начало: {item.dateStart}</p>
                    <p> Окончание: {item.dateEnd}</p>
                  </footer>
                </blockquote>

                <Button
                  className='delete'
                  variant='danger'
                  onClick={() => deleteEvent(item.id)}
                >
                  Удалить
                </Button>
                <Button
                  variant='info'
                  onClick={() => {
                    handleShow();
                    setEventChange(item);
                  }}
                >
                  Изменить
                </Button>
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
}

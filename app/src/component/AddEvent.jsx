import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import actions from '../redux/actions';

export default function AddEvent() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValue, setFormValue] = useState({
    title: '',
    dateStart: '',
    dateEnd: '',
  });

  function changeForm(e, key) {
    setFormValue({ ...formValue, [key]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch({ type: actions.add, event: formValue });
    setFormValue({
      title: '',
      dateStart: '',
      dateEnd: '',
    });
  }

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Создать Мероприятие
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={(e) => submitForm(e)}>
          <Modal.Header closeButton>
            <Modal.Title> Создание Мероприятия</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Название:</label>
            <input
              value={formValue.title}
              onChange={(e) => changeForm(e, 'title')}
              className='form-control'
              type='text'
              required
            />
            <label>Начало:</label>

            <input
              value={formValue.dateStart}
              onChange={(e) => changeForm(e, 'dateStart')}
              className='form-control'
              type='datetime-local'
              id='example-datetime-local-input'
              required
            />
            <label>Окончание:</label>

            <input
              value={formValue.dateEnd}
              onChange={(e) => changeForm(e, 'dateEnd')}
              className='form-control'
              type='datetime-local'
              id='example-datetime-local-input'
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Отменить
            </Button>
            <Button variant='primary' type='submit' onClick={handleClose}>
              Сохранить
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

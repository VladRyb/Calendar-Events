import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import actions from '../redux/actions';

export default function Modalka({
  setFormValue,
  handleClose,
  show,
  formValue,
}) {
  const dispatch = useDispatch();

  function changeForm(e, key) {
    setFormValue({ ...formValue, [key]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch({ type: actions.changeEvent, event: formValue });
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Изменить</Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => submitForm(e)}>
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
  );
}

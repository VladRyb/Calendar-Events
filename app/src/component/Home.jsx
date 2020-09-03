import React from 'react';
import ListEvents from './ListEvents';
import AddEvent from './AddEvent';
import { useEffect } from 'react';
import { useState } from 'react';
import ToastWin from './ToastWin';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions';

export default function Home() {
  const [time, setTime] = useState(null);
  const [show, setShow] = useState(false);
  const [checkEvent, setCheckEvent] = useState(null);

  const collection = useSelector((store) => store.collectionsEvent);
  const dispatch = useDispatch();

  function checkerTime() {
    const checkElem = collection.find((elem) => {
      const checkTime = new Date(elem.dateStart).getTime();
      return (
        checkTime - Date.now() <= 300000 &&
        checkTime - Date.now() > 0 &&
        !elem.check
      );
    });

    if (checkElem) {
      setCheckEvent(checkElem);
      setShow(true);
      dispatch({ type: actions.check, id: checkElem.id });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      checkerTime();
      setTime(Date.now());
    }, 5000);
  }, [time]);

  return (
    <>
      <ToastWin event={checkEvent} show={show} setShow={setShow} />
      <div className='global'>
        <div className='category'>
          <div className='menu'>
            <span>Список Мероприятий</span>
            <AddEvent />
          </div>
          <ListEvents />
        </div>
      </div>
    </>
  );
}

import React from 'react';
import ListEvents from './ListEvents';
import AddEvent from './AddEvent';

export default function Home() {
  return (
    <div className='global'>
      <div className='category'>
        <div className='menu'>
          <span>Список Мероприятий</span>
          <AddEvent />
        </div>
        <ListEvents />
      </div>
    </div>
  );
}

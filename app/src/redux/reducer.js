import actionType from './actions';

const initialState = {
  collectionsEvent: [
    {
      id: 123,
      title: 'Ryba',
      dateStart: '2020-09-03T18:53',
      dateEnd: '2020-09-03T18:53',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.add:
      return {
        ...state,
        collectionsEvent: [
          ...state.collectionsEvent,
          { ...action.event, id: Date.now() },
        ],
      };
    case actionType.delete:
      const newCollection = state.collectionsEvent.filter(
        (elem) => elem.id !== action.id
      );
      return {
        ...state,
        collectionsEvent: newCollection,
      };
    case actionType.changeEvent:
      const changeCollection = state.collectionsEvent.map((item) => {
        if (item.id === action.event.id) {
          return (item = action.event);
        }
        return item;
      });
      return {
        ...state,
        collectionsEvent: changeCollection,
      };
    default:
      return state;
  }
};

export default reducer;

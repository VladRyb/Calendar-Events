import actionType from './actions';

const initialState = {
  collectionsEvent: [
    {
      id: 123,
      title: 'Ryba',
      dateStart: '2020-09-04T10:00',
      dateEnd: '2020-09-04T10:00',
      check: false,
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
          { ...action.event, id: Date.now(), check: false },
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
    case actionType.check:
      const checkElem = state.collectionsEvent.map((item) => {
        if (item.id === action.id) {
          return (item = { ...item, check: true });
        }
        return item;
      });
      return {
        ...state,
        collectionsEvent: checkElem,
      };
    default:
      return state;
  }
};

export default reducer;

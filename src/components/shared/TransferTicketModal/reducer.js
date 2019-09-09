const DISPLAY_TRANSFER_TICKET_MODAL = 'DISPLAY_TRANSFER_TICKET_MODAL';

export const openTransferTicketModal = (ticket) => {
  return (dispatch, getState) => {
    dispatch({
      type: DISPLAY_TRANSFER_TICKET_MODAL,
      payload: {
        isOpen: true,
        ticket: ticket
      }
    });
  };
};

export const closeTransferTicketModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DISPLAY_TRANSFER_TICKET_MODAL,
      payload: {
        isOpen: false,
        ticket: null
      }
    });
  };
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DISPLAY_TRANSFER_TICKET_MODAL]: (state, action) => {
    return {
      ...state,
      isOpen: action.payload.isOpen,
      ticket: action.payload.ticket
    };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isOpen: false,
  ticket: null
};
export default function transferTicketModalReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

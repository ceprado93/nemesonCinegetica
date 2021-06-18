const initialState = { footer: false, newsletter: true };

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "show":
      return (state.footer = true);
    case "hide":
      return (state.footer = false);

    case "hideNewsletter":
      return (state.newsletter = false);
    default:
      return state;
  }
};

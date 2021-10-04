const initial_state = {
  pokemonDetails: [],
  displayedCards: [],
  limit: 10,
  previous: null,
  next: null,
  sortBy: "Name",
  searchTerm: "",
  searchType: "",
};

const pokemonReducer = (state = initial_state, action) => {
  const sortOrder = (currentState, sortBy) => {
    currentState = currentState.filter(
      (st, index, self) => index === self.findIndex((t) => t.name === st.name)
    );
    switch (sortBy) {
      case "Name":
        return currentState.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      case "Height":
        return currentState.sort((a, b) =>
          a.height > b.height ? 1 : b.height > a.height ? -1 : 0
        );
      case "Weight":
        return currentState.sort((a, b) =>
          a.weight > b.weight ? 1 : b.weight > a.weight ? -1 : 0
        );
      default:
        return currentState;
    }
  };
  switch (action.type) {
    case "ADD_POKEMON":
      return {
        ...state,
        pokemonDetails: [...state.pokemonDetails, action.data],
      };
    case "SAVE_DISPLAYED_CARDS":
      return {
        ...state,
        displayedCards: sortOrder(action.data, state.sortBy),
      };
    case "SAVE_INITIAL_DISPLAY_CARDS":
      return {
        ...state,
        displayedCards: sortOrder(
          [...state.displayedCards, action.data],
          state.sortBy
        ),
      };
    case "CLEAR_DISPLAY_CARDS":
      return {
        ...state,
        displayedCards: [],
      };
    case "CLEAR_ALL_POKEMON":
      return {
        ...state,
        pokemonDetails: [],
      };
    case "SET_LIMIT":
      return {
        ...state,
        limit: action.data,
      };
    case "SET_PREVIOUS":
      return {
        ...state,
        previous: action.data,
      };
    case "SET_NEXT":
      return {
        ...state,
        next: action.data,
      };
    case "SET_SORT_ORDER":
      return {
        ...state,
        sortBy: action.data,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.data,
      };
    case "SET_SEARCH_TYPE":
      return {
        ...state,
        searchType: action.data,
      };
    default:
      return initial_state;
  }
};

export default pokemonReducer;

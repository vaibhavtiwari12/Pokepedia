export const doSavePokemon = (dispatch, pokemon) => {
  dispatch({
    type: "ADD_POKEMON",
    data: pokemon,
  });
};
export const doSaveDisplayedCards = (dispatch, pokemons) => {
  dispatch({
    type: "SAVE_DISPLAYED_CARDS",
    data: pokemons,
  });
};
export const doSaveInitialDisplayCards = (dispatch, pokemon) => {
  dispatch({
    type: "SAVE_INITIAL_DISPLAY_CARDS",
    data: pokemon,
  });
};
export const clearDisplayCards = (dispatch, pokemon) => {
  dispatch({
    type: "CLEAR_DISPLAY_CARDS",
    data: [],
  });
};
export const clearAllPokemons = (dispatch) => {
  dispatch({
    type: "CLEAR_ALL_POKEMON",
    data: [],
  });
};
export const doSaveLimit = (dispatch, limit) => {
  dispatch({
    type: "SET_LIMIT",
    data: limit,
  });
};
export const doSetPrevious = (dispatch, previous) => {
  dispatch({
    type: "SET_PREVIOUS",
    data: previous,
  });
};
export const doSetNext = (dispatch, next) => {
  dispatch({
    type: "SET_NEXT",
    data: next,
  });
};
export const doSetSortOrder = (dispatch, sortBy) => {
  dispatch({
    type: "SET_SORT_ORDER",
    data: sortBy,
  });
};
export const doSetSearchTerm = (dispatch, searchTerm) => {
  dispatch({
    type: "SET_SEARCH_TERM",
    data: searchTerm,
  });
};
export const doSetSearchType = (dispatch, searchType) => {
  dispatch({
    type: "SET_SEARCH_TYPE",
    data: searchType,
  });
};

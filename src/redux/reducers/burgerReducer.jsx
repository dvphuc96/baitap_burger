const stateDefault = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const burgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_QUANTITY": {
      let { name, quantity } = action;
      if (quantity === -1 && state.burger[name] <= 1) {
        alert("Số lượng tối thiểu là 1");
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[name] += quantity;

      state.burger = burgerUpdate;
      state.total += quantity * state.menu[name];
      return { ...state };
    }
  }
  return { ...state };
};

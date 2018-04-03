const score = (state = 0, action) => {
  switch (action.type) {
    case 'SCORE_INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default score;

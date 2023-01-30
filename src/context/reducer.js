const reducer = (state, action) => {
    console.log('reducer.js --state=',state)
    console.log('reducer.js --action=',action)
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, currentUser: action.payload };
  
      default:
        throw new Error('No matched action!');
    }
  };
  
  export default reducer;
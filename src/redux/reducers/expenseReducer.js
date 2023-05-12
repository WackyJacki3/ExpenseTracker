const initialState = {
    expenseList:[],
    query: "",
};

// const initialSearch = {
//     query: ""
// }

function expenseReducer(state = initialState, action, query) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                expenseList: [...state.expenseList, action.payload]
            }
        case 'DELETE_EXPENSE':
            // const { data } = action;
            // const updatedList = state.expenseList.filter(
            //     item=>item.createdAt!==data.createdAt
            // );
            return {
                expenseList: state.expenseList.filter(list => list.createdAt !== action.payload.createdAt)
            }
        case 'SEARCH_EXPENSE':
            return {
                expenseList: [...state.expenseList, query]
            }
        default:
            return state;
    }
}

export default expenseReducer;
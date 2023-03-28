export const initialState = {
    userInfo: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SIGN_UP':{
            return{
                userInfo : action.user,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default reducer;
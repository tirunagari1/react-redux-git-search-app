import Redux from 'redux';
//step2: defining initialState
let initialState={
    username: '',
    userprofile: {} ,
    repos: []
}
//step1 : reducer has state and action
// state shouldnot be undefined
const reducer = (state= initialState, action)=>{
    switch (action.type){
        case 'UPDATE_USERNAME':
        return{
            ...state,
            username:action.username
        }
        break;
        case 'UPDATE_USERPROFILE': 
        return{
            ...state,
            userprofile: action.userprofile
        }
        break;
        case 'UPDATE_FETCHREPO' :
        return {
            ...state,
            repos: action.repos
        }
    

        default: 
           return state;
    }

}

export default reducer;
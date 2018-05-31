
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_USERPROFILE = 'UPDATE_USERPROFILE';
export const UPDATE_FETCHREPO = 'UPDATE_FETCHREPO';


export const username=()=>{
    return{ type: UPDATE_USERNAME};
};
export const userprofile=()=>{
    return{ type: UPDATE_USERPROFILE};
};
export const fetchRepos=()=>{
    return{ type: UPDATE_FETCHREPO};
};
import {GET_AUTHORS} from '../dispatchRefs';

export const getAuthors=()=> async (dispatch)=>{
    dispatch({type : GET_AUTHORS});
}
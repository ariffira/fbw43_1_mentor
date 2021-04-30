/**
 * Action
 * - object with 2 keys: values
 * - action type and payload/data
 * - dispatch means a action is going to trigger
 */
export const fetchPosts = ()=> dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(posts=> {
        dispatch({
            type: "FETCH_POSTS",
            payload: posts // 100 posts from api
        })
    })
}

// export const createPost = (postdata)=> dispatch=>{
// }

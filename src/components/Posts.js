import React, {Component} from 'react';
import { connect } from "react-redux";
import {fetchPosts} from '../actions/postAction';


class Posts extends Component{
    // this will get posts properties from fetchposts action
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.posts.map(post=> {
            return(
                <div key={post.id} style={{backgroundColor:"yellowgreen", color:"black"}}>
                    <h4>Title: {post.title}</h4>
                    <h5>Content: {post.body}</h5>
                </div>
            )
        })
        return(
            <div>
                <h1>Lists of Posts from REST API</h1>
                {postItems}
            </div>
        )
    }
}

// here we can decide what data from action we need
const mapStateToProps = state => ({
    posts: state.posts.items
})

// export default Posts;
export default connect(mapStateToProps, {fetchPosts})(Posts);
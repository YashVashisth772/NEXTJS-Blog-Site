import PostsGrid from "./post-grid";


function AllPosts(props){
    return(
        <PostsGrid posts={props.posts}/>
    )
}

export default AllPosts;
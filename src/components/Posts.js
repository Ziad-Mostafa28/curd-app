import React from "react";

export default function Posts() {
    return(
        <div>
        <div className="form"> 
                <input type="text" placeholder="Enter Post Title" />
                <input type="text" placeholder="Enter Post Desc" />
                <button>Add Post</button>
        </div>
        <div className="posts">
                <div className="post">
                    <h2>Post Title</h2>
                    <h2>Post Desc</h2>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
        </div>
        </div>
    )
}

import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${postId}/comments`
        );

        setComments(res.data);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.commentId}>{comment.content}</li>
            ))}
        </ul>
    )
}

export default CommentsList;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import CommentItem from "../components/CommentItem";
import { useFetching } from "../components/Hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import cl from "./PostIdPage.module.css";

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([[]]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <main className={cl.postIdPage__wrapper}>
      <h1 className={cl.postIdPage__title}>
        This is post page with ID = {params.id}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cl.postIdPage__content}>
          <p className={cl.content__title}>
            {post.id}
            {". "}
            {post.title}
          </p>
          <p>Comments:</p>
          <div>
            {comments.map((comment, index) => (
              <CommentItem key={index} comment={comment} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

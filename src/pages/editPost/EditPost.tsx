import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axiosApi from "../../axiosApi";
import type { PostApi } from "../../type";
import Form from "../../components/form/Form";

const EditPost = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState<PostApi | null>(null);

    useEffect(() => {

        const fetchPost = async () => {
            const { data } = await axiosApi<PostApi>(`/posts/${id}.json`);

            setPost(data);
        };
        void fetchPost();
    }, [id]);

    const editPost = async (post: PostApi) => {
        void await axiosApi.put(`/posts/${id}.json`, post);
        navigate('/');
    }


    return (
        <div className="container">
            {post && <Form onSubmit={editPost} existingPost={post} isEdit />}
        </div>
    )
}

export default EditPost
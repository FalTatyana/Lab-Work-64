import { type SubmitEvent } from 'react';
import { useState, type ChangeEvent } from 'react'
import './Form.css'
import type { Post, PostApi } from '../../type';

interface Props {
    onSubmit: (post: Post) => void;
    existingPost?: PostApi;
    isEdit?: boolean;
}

const Form = ({ onSubmit, existingPost, isEdit = false }: Props) => {
    const [form, setForm] = useState<Post>(existingPost ? existingPost : {
        title: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <h4 className='formTitle'>Title <i className="bi bi-asterisk"></i></h4>
            <input
                id='title'
                className='inputTitle'
                name='title'
                type="text"
                placeholder='Enter the title'
                onChange={handleChange}
                value={form.title}
            />
            <h4 className='formTitle'>Message <i className="bi bi-asterisk"></i></h4>
            <textarea
                className='textarea'
                placeholder='Enter your message'
                name="message"
                id="message"
                onChange={handleChange}
                value={form.message}
            >
            </textarea>
            <button
                type='submit'
                className='btnNewPostSave'>
                {isEdit ? "Edit post" : "Publish post"}
            </button>
        </form>
    )
};

export default Form
import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

    let AddNewPostForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"
                       validate={[required, maxLength10]}  />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>;
    }

   let AddNewPostFormRedux = reduxForm ({form: "profileAddNewPostForm"})(AddNewPostForm);

    const MyPosts = (props) => {
        let postsElements =
            props.posts.map( p =><Post message={p.message} like={p.like} />);

        const onAddPost = (values) => {
            props.addPost(values.newPostText);
        };
    return (
        <div className={s.postsBlock}>
          <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
       <div className={s.posts}>
           { postsElements }
        </div>
    </div>
    )
}

export  default  MyPosts;
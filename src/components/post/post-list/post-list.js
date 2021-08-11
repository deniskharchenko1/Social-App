import React, { Component, useState, useEffect } from 'react';
import { fetchPosts } from '../../../redux/posts/api';
import SocialapiService from '../../../services/social-service';
import Spinner from '../../spinner/spinner';

import './post-list.css';


//=============hooks

const PostList = () => {
  const [postsList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderItems = (arr) => {
    return arr.map(({id, title, userId, body}) => {
      return (
        <div className="list-group-item"
            key={id}
            onClick={() => this.props.onPostSelected(id)}>
          <p className='post-list title'>{title}</p> {id}
          <p>{body}</p>
        </div>
      );
    });
  }


}


export { PostList };

//=============hooks





export default class PostList extends Component {

  socialapiService = new SocialapiService();

  state = {
    postList: null
  };

  componentDidMount() {
    this.updatePosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.postId !== prevProps.postId) {
      this.updatePosts();
    }
  }

  updatePosts() {
    const {postId} = this.props;
    if (!postId) {
      return;
    }

    this.socialapiService.getPostsUserId(postId)
    .then((postList) => {
        this.setState({postList});
      });
  }

  renderItems(arr) {
    return arr.map(({id, title, userId, body}) => {
      return (
        <div className="list-group-item"
            key={id}
            onClick={() => this.props.onPostSelected(id)}>
          <p className='post-list title'>{title}</p> {id}
          <p>{body}</p>
        </div>
      );
    });
  }

  render() {

    const { postList } = this.state;

    if (!postList) {
      return <Spinner />;
    }

    const items = this.renderItems(postList);

    return (
      <>
      <div>
        POSTS
      </div>
      <div className="post-list post-group">
        {items}
      </div>
      </>
    );
  }
}

import React, { Component } from 'react';
import SocialapiService from '../../services/social-service';
import Spinner from '../spinner/spinner';

import './comments-list.css';

export default class CommentsList extends Component {

    socialapiService = new SocialapiService();

    state = {
      commentsList: null
    };
  
    componentDidMount() {
      this.updateComments();
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.postId !== prevProps.postId) {
        this.updateComments();
      }
    }
  
    updateComments() {
      const {postId} = this.props;
      if (!postId) {
        return;
      }
  
      this.socialapiService.getCommentsPostId(postId)
      .then((commentsList) => {
          this.setState({commentsList});
        });
    }
  
    renderItems(arr) {
      return arr.map(({id, name, body, email}) => {
        return (
          <div className="list-group-item"
              key={id}>
            <p className='comments-list title'>{name}</p> {id}
            <p>{body}</p>
            <p className='comments-list email'>{email}</p>
          </div>
        );
      });
    }
  
    render() {
  
      const { commentsList } = this.state;
  
      if (!commentsList) {
        return <Spinner />;
      }
  
      const items = this.renderItems(commentsList);
  
      return (
        
        <div className="comments-list comments-group">
          {items}
        </div>
      );
    }


}
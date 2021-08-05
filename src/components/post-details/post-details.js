// import React, { Component } from 'react';

// import SocialapiService from '../../services/social-service';

// import './post-details.css';

// export default class PostDetails extends Component {

//   socialapiService = new SocialapiService();

//   state = {
//     title: null,
//     body: null,
    
//   }

//   constructor() {
//     super();
//     this.updatePost();
//   }

//   updatePost() {
//     this.socialapiService
//       .getPost(6)
//       .then((posts) => {
//         this.setState({
//           title: posts.title,
//           body: posts.body,
//         });
//       });
//   }

//   render() {

//     const {title, body} = this.state;

//     return (
        
//       <div className="post-details card">

//         <div className="card-body">
//           <h4 className="card-title">{title}</h4>
//           <span className="card-text">{body}</span>
//         </div>
//       </div>
      
    
//     )
//   }
// }



// import React, { Component } from 'react';
// import SocialapiService from '../../services/social-service';

// import './post-details.css';

// export default class PostDetails extends Component {

//   socialapiService = new SocialapiService();

//   state = {
//     posts: 5
//   }

//   componentDidMount() {
//     this.updatePost();
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.postId !== prevProps.postId) {
//       this.updatePost();
//     }
//   }

//   updatePost() {
//     const {postId} = this.props;
//     if (!postId) {
//       return;
//     }

//     this.socialapiService
//       .getPost(postId)
//       .then((posts) => {
//         this.setState({posts})
//       })
//   }

//   render() {
//     if (!this.state.posts) {
//       return <span>Select a post from a list</span>;
//     }

//     const { title, body } = this.state;

//     return (
//       <div className="post-details card">

//         <div className="card-body">
//           <h4 className="card-title">{title}</h4>
//           <span className="card-text">{body}</span>
//         </div>
//       </div>
//     )
//   }
// }




import React, { Component } from 'react';
import SocialapiService from '../../services/social-service';
import CommentsList from '../comments-list';
import PostList from '../post-list';


// import './person-details.css';

export default class PostDetails extends Component {

  socialapiService = new SocialapiService();

  
  state = {
    posts: null,
  }
  


  componentDidMount() {
    this.updatePost();
  }

  componentDidUpdate(prevProps) {
    if (this.props.postId !== prevProps.postId) {
      this.updatePost();
    }
  }

  updatePost() {
    const {postId} = this.props;
    if (!postId) {
      return;
    }

    this.socialapiService
      .getPost(postId)
      .then((posts) => {
        this.setState({posts})
      })
  }

  render() {
    if (!this.state.posts) {
      return <span>Select a person from a list</span>;
    }

    const { title, body } = this.state.posts;

    return (
      <>
      {/* <div className="person-details card">
        <div className="card-body">
          <h4>{title} {this.props.postId}</h4> 
          <span>{body}</span> 
        </div >
      </div> */}
      <div className="">
        COMMENTS
      </div>
      </>
    )
  }
}

import React from 'react';
import VideoComment from './VideoComment.json';
import './Comments.scss';
const Comments = () => {
  // const CommentList = VideoComment.items.filter();
  return (
    <div className="CommentContainer">
      <p>{VideoComment.items.length} Comments</p>
      <div className="CommentBox">
        {VideoComment.items.map((comment) => {
          return (
            <li key={comment.id}>
              <div className="CommentBoxContainer">
                <div className="CommentAvatarContainer">
                  <img src={comment.snippet.authorProfileImageUrl} alt="user avatar" />
                </div>
                <div className="CommentTextContainer">
                  <div className="CommentAuthorName">
                    <p>{comment.snippet.authorDisplayName}</p>

                    <span>{comment.snippet.updatedAt}</span>
                  </div>
                  <p className="CommentText">{comment.snippet.textDisplay}</p>
                </div>
              </div>
              <div className="comment_buttons">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
                  </svg>
                  <span className="muted">100</span>
                </div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"></path>
                  </svg>
                </div>
                <span className="muted">REPLY</span>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;

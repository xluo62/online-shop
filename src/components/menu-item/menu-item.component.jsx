import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
// we can use functional component bc we dont need to store any state for now.
const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div  className={`${size} menu-item`}
          onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div  className= "background-image"
        style = {{backgroundImage: `url(${imageUrl})`}}
        />        
        <div className = "content  ">
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>
);
export default withRouter(MenuItem);
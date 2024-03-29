import React from "react";

export function NewsItem (props) {

    let { title, description, imageUrl, newurl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: 0}}>
        <span className=" badge rounded-pill bg-danger" style={{left:'90%',  zIndex: 1}}>
                {source}
              </span>
        </div>
          <img src={imageUrl} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...{" "}
             
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {!author ? "unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;

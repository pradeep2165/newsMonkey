import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl ? "https://static.cnbetacdn.com/article/2022/0521/83ce8818083bf3a.webp" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
            {source}
          </span>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unkhow"} on {date ? new Date(date).toGMTString() : ""}{" "}
              </small>
            </p>

            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

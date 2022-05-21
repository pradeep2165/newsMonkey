import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor(props) {
    super(props);
    console.log("i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
    });
  }
  handelNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page + 1 });
  };
  handelPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page - 1 });
  };
  render() {
    return (
      <div className="container align-items-center my-2">
        <div className="text-center">
          <h1>DailyNews - Top Headlines</h1>
        </div>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          ;
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handelPreviousClick}
              disabled={this.state.page <= 1}
            >
              &#8592; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handelNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalArticles / 18)
              }
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
    this.setState({ loading: true });
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }
  handelNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  handelPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container align-items-center my-2">
        <div className="text-center">
          <h1>DailyNews - Top Headlines</h1>
          {this.state.loading && <Spinner />}
        </div>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = "DailyNews - " + this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);
  }
  updateNews = async () => {
    console.log(this.state.page + "from update");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    this.updateNews();
  }
  handelNextClick = async () => {
    await this.setState({
      page: this.state.page + 1,
    });

    this.updateNews();
  };
  handelPreviousClick = async () => {
    await this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  render() {
    return (
      <div className="container align-items-center my-2">
        <div className="text-center mt-5">
          <h1 style={{ marginTop: "100px", marginBottom: "50px" }}>
            {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - Top Headlines on DailyNews
          </h1>
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
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          ;
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-dark" onClick={this.handelPreviousClick} disabled={this.state.page <= 1}>
              &#8592; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handelNextClick}
              disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)}
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

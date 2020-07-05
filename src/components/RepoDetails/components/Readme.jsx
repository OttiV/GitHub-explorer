import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContents } from "../../../actions/reposActions";
import { Spinner } from "../../Spinner";
import "./Readme.css";

class Readme extends Component {
  componentDidMount() {
    const { fetchContents, url } = this.props;
    fetchContents(url);
  }

  render() {
    const { contents } = this.props;

    const { loading, value } = contents;
    const readme = value.filter(value => value.name === "README");
    return (
      <>
        {loading && <Spinner />}
        {readme.map(element => {
          const { html_url } = element;
          return (
            <div>
              README:
              <div key={html_url} className="readmeWrapper">
                <iframe
                  src={html_url}
                  title="contents"
                  width="400"
                  height="120"
                ></iframe>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.repo.contents
});
const mapDispatchToProps = dispatch => {
  return {
    fetchContents: url => dispatch(fetchContents(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Readme);

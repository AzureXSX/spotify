import React from "react";
import { TrackCardWithRouter } from "./TrackCardComponent";
import { forEach } from "lodash";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

  }

  componentDidUpdate(nextProps) {
    if (nextProps.ListMAP != this.props.ListMAP && nextProps.ListMAP.length > 0) {
      this.setState({ list: nextProps.ListMAP });
      console.log('searchTypeParam = ' + this.props.searchTypeParam);
      console.log(nextProps.ListMAP)
    }
  }

  componentDidMount () {

  }


  render() {

    if (this.state.list.length > 0) {
     return this.state.list.map((e) => {
          return (
            <TrackCardWithRouter
              setSongId={this.props.setSongId}
              key={e.id + e.count_cc}
              name={e.name}
              albumuri={e.albumuri}
              id={e.id}
              img={e.image}
              artist={e.artists}
              token={this.props.token}
            ></TrackCardWithRouter>
          );
        });
     
    } else {
      return <div></div>;
    }
  }
}

export default List;

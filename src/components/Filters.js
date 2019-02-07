import React from 'react';
import { connect } from "react-redux";


class Filters extends React.Component {
 render() {
   return(
     <div>Tools {this.props.filterKey}: {this.props.filterValue}</div>
   );
 }
}

Filters = connect(
  (state, props) => ({
    filterKey: props.match.params.key,
    filterValue: props.match.params.value
  })
)(Filters);

export {
  Filters
};

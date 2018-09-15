import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BreweryCard } from '../BreweryCard/BreweryCard'


export class BreweryContainer extends Component {
  constructor(props) {
    super(props);
    
  }
  
  displayBreweries = () => this.props.breweries.map(brewery => {
      return <BreweryCard {...brewery}/>
    })
  

  
  render() {
    return(
      <section>
        {this.displayBreweries()}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  breweries: state.breweries
})



export default connect(mapStateToProps, null)(BreweryContainer);



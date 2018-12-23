import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BreweryCard } from '../BreweryCard/BreweryCard';
import './BreweryContainer.css'


export class BreweryContainer extends Component {
  constructor(props) {
    super(props);
    
  }
  
  displayBreweries = () => this.props.breweries.map(brewery => {
      return <BreweryCard {...brewery} key={brewery.id} />
    })
  

  
  render() {
    return(
      <section className="BreweryContainer">
        {this.displayBreweries()}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  breweries: state.breweries
})



export default connect(mapStateToProps, null)(BreweryContainer);

BreweryContainer.propTypes = {
  breweries: PropTypes.array
};



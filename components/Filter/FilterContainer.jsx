import React from 'react';
import { connect } from 'react-redux';
import { toggleCheckbox } from '../../store/reducers/filter';
import Filter from './Filter';

function FilterContainer(props) {

    return (
        <Filter filterItems={props.filterItems} toggleCheckbox={props.toggleCheckbox} />
    )
}

const mapStateToProps = state => ({
    filterItems: state.filter
})



export default connect(mapStateToProps, { toggleCheckbox })(FilterContainer);


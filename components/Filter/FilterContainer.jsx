import Axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { connect } from 'react-redux';
import { toggleCheckbox } from '../../store/reducers/filter';
import Filter from './Filter';

function FilterContainer({ filter, toggleCheckbox }) {

    const router = useRouter();

    const filterArrServer = () => {

        const arr = filter.result.map(key => {

            const checkBox = filter.entities.checkBox[key];
            const checkBoxItems = checkBox.items.map(keyItems => {
                return filter.entities.checkBoxItems[keyItems];
            })
            return {
                ...checkBox,
                items: checkBoxItems.filter(item => item.checked)
            }

        })

        const arrFilter = arr.filter(checkbox => checkbox.items.length);

        const arrString = arrFilter.map(checkbox => {
            let items = {};

            checkbox.items.forEach(item => {
                items[item.checkBoxName] = item.latName
            })
            return [
                checkbox.lat_name,
                ...Object.keys(items).map(key => items[key])
            ]
        })

        let stringServe = '';

        arrString.forEach(item => {
            let query = ''
            item.map((itemChecked, index) => {
                if (index === 0) {
                    query = query + `&${itemChecked}=`;
                }
                else query = query + `${itemChecked}${item.length - 1 === index ? '' : '|'}`
            })
            stringServe = stringServe + query
        })






        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                filter: stringServe,
                count: '1',
                foo: {
                    femel: '1',
                    sex: '2'
                }
            }
        });

    }

    const clearFilter = () => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                filter: ''
            }
        });
    }

    return (
        <Filter filter={filter} toggleCheckbox={toggleCheckbox} filterArrServer={filterArrServer} clearFilter={clearFilter} />
    )
}

const mapStateToProps = state => ({
    filter: state.filter
})



export default connect(mapStateToProps, { toggleCheckbox })(FilterContainer);


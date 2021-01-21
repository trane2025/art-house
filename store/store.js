import { applyMiddleware, combineReducers, createStore } from 'redux';
import basket from './reducers/basket';
import { cardsGoods } from './reducers/cardsGoods';
import filter from './reducers/filter';
import { pageLinks } from './reducers/pageLinks';
import { cardsDecor } from './redusersDecor/cardsDecor';
import { filterDecor } from './redusersDecor/filterDecor';
import { cardsLight } from './redusersLight/cardsLight';
import { filterLight } from './redusersLight/filterLight';
import { cardsSoftFurniture } from './redusersSoftFurniture/cardsSoftFurniture';
import { filterSoftFurniture } from './redusersSoftFurniture/filterSoftFurniture';

import { composeWithDevTools } from 'redux-devtools-extension';
import { useMemo } from 'react';


let store

const initialState = {};

const reducers = combineReducers({
    filter,
    cardsGoods,
    pageLinks,
    filterLight,
    cardsLight,
    filterDecor,
    cardsDecor,
    basket,
    cardsSoftFurniture,
    filterSoftFurniture
})

function initStore(preloadedState = initialState) {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // После перехода на страницу с начальным состоянием Redux объедините это состояние
    // с текущим состоянием в store и создайте новый store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // Для SSG и SSR всегда создавайте новый store
    if (typeof window === 'undefined') return _store
    // Создайте store один раз в клиенте
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}


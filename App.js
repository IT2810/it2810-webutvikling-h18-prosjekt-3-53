import React from 'react';
import MainNavigator from 'navigation/MainNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from 'reducers';
import {View, Text} from 'react-native';
import LoadingScreen from 'screens/LoadingScreen';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['profile', 'tasks']
}

const persistedReduer = persistReducer(persistConfig, rootReducer);

// simple redux logger middleware
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

const store = createStore(persistedReduer, applyMiddleware(logger));
const persistor = persistStore(store);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
                    <MainNavigator/>
                </PersistGate>
            </Provider>
        );
    }
}
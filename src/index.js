import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './routes/App';

const initialState = {
  "user": {},
  "bill": [],
  "subTotal": 0 ,
  "total": 0,
  "tables":[
    {
      "id" : "1"
    }
  ],
"clients":[
    {
        "id": 1,
        "label": "Robert Alejandro Ruiz huerta",
        "value":{
            "name": "Robert Alejandro Ruiz huerta",
            "email": "rruiz2298@gmail.com",
            "phone": "994021020",
            "direction": "Av americo vespucio 4641",
            "history":" 22/ 05 / 21"
        }    
        
    },
    {
        "id": 2,
        "label": "Robert Carrillo",
        "value":{
            "name": "Robert Carrillo",
            "email": "pipo@gmail.com",
            "phone": "123456",
            "direction": "Av americo vespucio 4601",
            "history":" 22/ 05 / 21"
        }    
        
    }

  ],
"menu":[
    {
        "id": 1,
        "name": "Pizza",
        "list": [
          {
            "id": "1.1",
            "name": "Margarita",
            "price": 5990,
            "cant": 1,
          },
          {
            "id": "1.2",
            "name": "Marinara",
            "price": 5990,
            "cant": 1,
          },
          {
            "id": "1.3",
            "name": "Pepperonni",
            "price": 5990,
            "cant": 1,
          },
        ],
    },
  ],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer,initialState,  composeEnhancers());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

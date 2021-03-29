import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  postReducer,
  specialityReducer,
  courseReducer,
  teacherReducer,
  fragmentReducer
} from './Reducers'

export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    courseReducer,
    teacherReducer,
    fragmentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)


/*
  NOTE: orden de los reducers, actions y los creators

  1. redurcer: es como los estados glovables de la app, se definen primero, ellos devuelven el estado de donde se llama

  2. actions: solo tiene los nombre de las acciones a realizar, xq la accion real se hace en el actionCreator,

  3. actionCreator: es para las llamadas a la api

  basicamente el redurce llama al action y este llama al action creator aunque no hace la importacion

  4. se llama el Provider de redux en el index

*/

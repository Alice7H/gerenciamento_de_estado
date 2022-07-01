import { messageReducer } from './reducers/messageReducer';
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  messages: messageReducer
})

export default rootReducer
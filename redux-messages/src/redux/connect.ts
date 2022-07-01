import { Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from "react-redux";
import DisplayMessages from "../components/DisplayMessages";
import { addMessage } from "./actions/messages";

const mapStateToProps = (state: string[]) => {
  return Object.assign({messages: []}, state);
};

const mapDispatchToProps = (dispatch: Dispatch) =>{
  return {
    submitNewMessage: (message: string) => {
      dispatch(addMessage(message));
    }
  }
}

const Connector = connect(mapStateToProps, mapDispatchToProps);

export type MessageReduxProps = ConnectedProps<typeof Connector>
export default Connector(DisplayMessages);
import { ADD } from "../constants";

export const addMessage = (message: string) => {
  return {
    type: ADD,
    message
  }
};
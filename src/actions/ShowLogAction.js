import { SHOW_LOG_INFO } from "./types";

export const showLogInfo = id => {
  return {
    type: SHOW_LOG_INFO,
    id
  };
};

import { NavResponseModel } from "./navResponseModel";

export interface NavListResponseModel<T> extends NavResponseModel {
  data:T[];
}

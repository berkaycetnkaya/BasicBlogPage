import { NavResponseModel } from "./navResponseModel";

export interface NavSingleResponseModel<T> extends NavResponseModel {
    data:T
}
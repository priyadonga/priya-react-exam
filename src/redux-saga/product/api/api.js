import axios from "axios";
import { DELETE_PRODUCT, GET_PRODUCT, POST_PRODUCT, PUT_PRODUCT, base_url, } from "../../Constant";

let get_product = (action) => {
    return axios.get(base_url + GET_PRODUCT, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};

let post_product = (action) => {
    return axios.post(base_url + POST_PRODUCT, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};

let delete_product = (action) => {
    return axios.delete(base_url + DELETE_PRODUCT + action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};

let update_product = (action) => {
    return axios
        .put(base_url + PUT_PRODUCT + action.payload.id, action.payload)
        .then((res) => {
            let data = res.data;
            let status = res.status;
            return { data, status };
        });
};

export { get_product, post_product, delete_product, update_product };
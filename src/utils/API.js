import axios from "axios";

const RANDOMURL = "https://randomuser.me/api/?results=200&nat=us"

export default {
    getRandom: function() {
        return axios.get(RANDOMURL);
    }
}
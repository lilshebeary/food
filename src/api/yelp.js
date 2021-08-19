import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer LX2G-euPsNkrCGBcS_UmMA0_eJDUFpimdrNNvar4Pjrn5_ud4uUJwBPdqp2FIoemObIdS2vLd4R0bDXvc-vwtgxsakP8FBddKITzM3L7UdjyXR7nhBFOY_ZXswbeX3Yx'
    }
});

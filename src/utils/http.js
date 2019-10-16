import axios from 'axios'

const http = ({
    url,
    method = 'GET',
    params,
    data,
    headers,
    withCredentials
}) => {
    return new Promise((resolve, reject) => {
        axios({
                url,
                method,
                params,
                data,
                headers,
                withCredentials
            }).then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export default http
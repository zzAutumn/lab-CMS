//  setting up some type of connectors  which can
//  be used to hitting up the back end
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}


import axios from 'axios'

import { TECTON_API } from '../constants'

export const fetchDatasetList = () => {
  return axios.get(`${TECTON_API}/tables.json`)
}

export const fetchDataset = id => {
  return axios.get(`${TECTON_API}/${id}.csv`)
}

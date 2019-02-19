import axios from 'axios'

const base = ''

export const getAllCampuses = () => {
  return axios.get(`${base}/campuses`)
}
export const loadPlaces = param => {
  let getParam = {}
  getParam.params = param

  return axios.get(`${base}/places`, getParam)
}
export const loadPositions = param => {
  let getParam = {}
  getParam.params = param

  return axios.get(`${base}/positions`, getParam)
}
export const loadEquipments = param => {
  let getParam = {}
  getParam.params = param

  return axios.get(`${base}/equipments`, getParam)
}
export const postNewFailureReporting = params => {
  return axios.post(`${base}/baoxiu`, params)
}
export const loadUserPhone = () => {
  return axios.get(`${base}/userphone`)
}
export const getUserLists = params => {
  return axios.get(`${base}/lists`, params)
}
export const postuserPhone = params => {
  return axios.post(`${base}/phoneBaoxiu`, params)
}
export const postListId = params => {
  return axios.post(`${base}/listid`, params)
}
export const getSuccessList = params => {
  return axios.get(`${base}/list`, params)
}
export const getOperation = params => {
  return axios.get(`${base}/operation`, params)
}
export const postListEvaluation = params => {
  return axios.post(`${base}/evaluation`, params)
}

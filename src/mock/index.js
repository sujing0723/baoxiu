import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import baoXiuMock from './baoxiu/baoxiu'
const base = ''

const mock = new MockAdapter(axios)

mock.onGet(`${base}/campuses`).reply(baoXiuMock.getAllCampuses)
mock.onGet(`${base}/places`).reply(baoXiuMock.loadPlaces)
mock.onGet(`${base}/positions`).reply(baoXiuMock.loadPositions)
mock.onGet(`${base}/equipments`).reply(baoXiuMock.loadEquipments)
mock.onPost(`${base}/baoxiu`).reply(baoXiuMock.newBaoxiu)
mock.onPost(`${base}/phoneBaoxiu`).reply(baoXiuMock.phoneUse)
mock.onGet(`${base}/lists`).reply(baoXiuMock.loadlists)
mock.onPost(`${base}/listid`).reply(baoXiuMock.postListId)
mock.onGet(`${base}/list`).reply(baoXiuMock.loadSuccesslist)
mock.onGet(`${base}/operation`).reply(baoXiuMock.loadOperation)
mock.onPost(`${base}/evaluation`).reply(baoXiuMock.postListEvaluation)

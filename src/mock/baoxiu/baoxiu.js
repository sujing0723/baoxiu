import { Campuses } from '../data/campuses'
// 返回数组
import { Places } from '../data/places'
import { Positions } from '../data/positions'
import { BxLists } from '../data/BxLists'
import BaoXiuData from '../data/List'
// 返回对象

export default {
  getAllCampuses: config => {
    let arr = Campuses

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          campuses: arr
        }])
      }, 500)
    })
  },
  loadPlaces: config => {
    let campuses = Campuses.filter((u, index) => (config.params.campusId === u.id))
    let places = campuses[0].places

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          places: places
        }])
      }, 500)
    })
  },
  getPlaces: config => {
    let arr = Places

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          places: arr
        }])
      }, 500)
    })
  },
  loadPositions: config => {
    let places = Places.filter((u, index) => (config.params.placeId === u.id))
    let positions = places[0].positions

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          positions: positions
        }])
      }, 500)
    })
  },
  getPositions: config => {
    let arr = Positions

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          positions: arr
        }])
      }, 500)
    })
  },
  loadEquipments: config => {
    let positions = Positions.filter((u, index) => (config.params.positionId === u.id))
    let equipments = positions[0].equipments

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          equipments: equipments
        }])
      }, 500)
    })
  },
  newBaoxiu: config => {
    let list = JSON.parse(config.data)

    list.userphone = '13190100000'
    list.id = '001'

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          list: list
        }])
      }, 500)
    })
  },
  phoneUse: config => {
    let phoneBaoxiu = config.data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          phoneBaoxiu: phoneBaoxiu
        }])
      }, 500)
    })
  },
  loadlists: config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          lists: BxLists
        }])
      }, 500)
    })
  },
  loadSuccesslist: config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          list: BaoXiuData
        }])
      }, 500)
    })
  },
  loadUserphone: config => {
    let bxLists = BxLists.filter((u, index) => (config.params.failureReportingId === u.id))
    let userphone = bxLists[0].userphone

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          userphone: userphone
        }])
      }, 500)
    })
  },
  postListId: config => {
    let listid = config.data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          listid: listid
        }])
      }, 500)
    })
  },
  loadOperation: config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          operation: {
            list: '2018-08-08 08:00:00 12345678900 手机用户提交'
          }
        }])
      }, 500)
    })
  }
}

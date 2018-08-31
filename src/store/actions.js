// import C from '../service/BaseCommon.js'

export const updLoginName = ({ commit }, x) => {
    commit('updLoginName', x)
}

/*export const updInitData = ({ commit }, x) => {
  let ledgerId = new C().getCookie('fin_ledgerId')
  new C().call('user/getInitData', {'ledgerId': ledgerId}).then((res) => {
    let d = res
    if (d.titles) {
      d.titleMap = {}
      for (let t of d.titles) {
        d.titleMap['' + t.code] = t.name
      }
    }
    commit('updInitData', d)
  })
}

export const setInitData = ({ commit }, x) => {
  commit('updInitData', x)
}*/

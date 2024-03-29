import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_list = (page,size,params) =>{

  // 将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params)
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+"?"+queryString);
}

// 新增页面
export const page_add = parames =>{
  return http.requestPost(apiUrl+"/cms/page/add",parames)
}

/*页面查询*/
export const page_get = id => {
  return http.requestQuickGet(apiUrl+'/cms/page/get/'+id)
}

/*页面修改，采用put方法*/
export const page_edit = (id,params) => {
  return http.requestPut(apiUrl+'/cms/page/edit/'+id,params)
}

/*页面删除*/
export const page_del = id => {
  return http.requestDelete(apiUrl+'/cms/page/del/'+id)
}


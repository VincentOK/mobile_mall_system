import {
  baseUrl
} from './url'
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from "../store/store";
axios.defaults.withCredentials = true;
export default async(url, data = {}, type = 'GET', loading = false, configType = 'application/json;charset=UTF-8') => {
  let token = store.state.token;
  let config = null;
  if (token) {
    config = {
      headers: {
        'Content-Type': configType,
        'token': token
      }
    }
  } else {
    config = {
      headers: { 'Content-Type': configType }
    }
  }
  if (loading) {
    Vue.$vux.loading.show({
      text: 'Loading'
    });
  }
  return new Promise((resolve, reject) => {
    url = baseUrl + url;
    if (type == 'GET') {
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      });
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr
      }
      console.log("get请求请求头:" + JSON.stringify(token) + '=============' + "get请求url+参数:" + url);
      axios.get(url, config)
        .then(function(response) {
          console.log("请求返回数据：" + JSON.stringify(response));
          if (response.status === 200) {
            Vue.$vux.loading.hide();
            resolve(response.data)
          } else {
            Vue.$vux.toast.show({
              text: '请求失败:+'+response.status+'',
            });
            reject('请求返回状态：' + response.status + '')
          }
        })
        .catch(function(error) {
          Vue.$vux.toast.show({
            text: '请求失败',
          });
          reject(error)
        })
    } else {
      if (configType === 'application/json;charset=UTF-8') {
        data = JSON.stringify(data);
      } else if (configType === 'x-www-form-urlencoded' || configType === 'application/x-www-form-urlencoded') {
        data = qs.stringify(data);
      }
      console.log("============请求url:" + url + "post请求请求头：" + JSON.stringify(config) + '========' + "post请求参数：" + data);
      axios.post(url, data, config)
        .then(function(response) {
          console.log("请求返回数据:" + JSON.stringify(response));
          if (response.status === 200) {
            Vue.$vux.loading.hide();
            resolve(response.data)
          } else {
            Vue.$vux.toast.show({
              text: '请求失败:+'+response.status+'',
            });
            reject('请求返回状态：' + response.status + '')
          }
        })
        .catch(function(error) {
          Vue.$vux.toast.show({
            text: '请求失败',
          });
          reject(error)
        })
    }
  })

}

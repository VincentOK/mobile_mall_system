/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * key:十六位十六进制数密钥
 * iv:十六位十六进制数密钥偏移量
 *
 */
let baseUrl = '';
let imgBaseUrl = '';
let key = "14935725AWCNHVUG";
let iv = 'KHGTHNBF14896325';

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://192.168.0.154:8989';
  // imgBaseUrl = '/img/';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://l92.168.0.154:8989';
}
export {
  baseUrl,
  key,
  iv,
  imgBaseUrl,
}

/**
 * 调用接口名文件
 */
import fetch from './fetch'


/**
 * 用户登陆
 */
export const userLogin = () => fetch('/timestoremanage/ajaxLogin', {
}, 'POST', true);

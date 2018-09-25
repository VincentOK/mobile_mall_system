/**
 * 调用接口名文件
 */
import { baseUrl } from './url'
import fetch from './fetch'
/**
 * 上传files图片
 *
 */
export const uploadGoodsImg = () => { return baseUrl + '/timestoremanage/storeCommodity/uploadImages' };

/**
 * 获取验证码
 */
export const getCode = () => { return baseUrl + '/timestoremanage/common/captcha' };
/**
 * 用户登陆
 */
export const userLogin = (username, password, captcha) => fetch('/timestoremanage/ajaxLogin', {
  userPhone: username,
  password: password,
  captcha: captcha
}, 'POST', true);
/**
 * 商户入驻申请
 * @param msgObj
 * @returns {Promise<*>}
 */
export const userRegister = (msgObj) => fetch('/timestoremanage/register', msgObj, 'POST', true);

/**
 * 检验商户名是否可用
 * @param val
 * @returns {Promise<*>}
 */
export const checkUser = (val) => fetch('/timestoremanage/common/queryUserNameOrCommercialName', val, 'POST');

/**
 * 商户注册发送短信验证码
 * @param phone
 * @returns {Promise<*>}
 */
export const sendPhoneCode = (phone) => fetch('/timestoremanage/common/regSendVcode', {
  userPhone: phone
}, 'POST');


export const getUntreatedOrdersList = (pageNumber, pageSize, tenantUid, keyword) => fetch('/timestoremanage/order/listStaySend', {
  pageNumber: pageNumber,
  pageSize: pageSize,
  tenantUid: tenantUid,
  keyword: keyword
}, 'POST');
/**
 * 忘记密码发送短信验证码
 * @param phone
 * @returns {Promise<*>}
 */
export const forgetPhoneCode = (phone) => fetch('/timestoremanage/common/forgotPasswordSendVcode', {
  userPhone: phone
}, 'POST');
/**
 * 忘记密码提交修改
 * @param params
 * @returns {Promise<*>}
 */
export const forgotPasswordSubmit = (params) => fetch('/timestoremanage/common/forgotPasswordSubmit', {
  userPhone: params.userPhone,
  captcha: params.captcha,
  newPassWord: params.password
}, 'POST', true);
/**
 * 根据订单号获取订单详情(待发货订单)
 * @param orderNumber
 * @returns {Promise<*>}
 */
export const orderDetail = (orderNumber) => fetch('/timestoremanage/order/getStaySendOrderDetail', {
  orderNumber: orderNumber
}, 'POST', true);
/**
 * 获取待退款订单详情
 * @param orderNumber
 * @returns {Promise<*>}
 */
export const orderDetailrefund = (orderNumber) => fetch('/timestoremanage/order/getRefundDetail', {
  orderNumber: orderNumber
}, 'POST', true);
/**
 * 同意退款
 * @param form
 * @returns {Promise<*>}
 */
export const confrimRefund = (form) => fetch('/timestoremanage/order/confrimRefund', {
  uid: form.uid,
  shippingName: form.shippingName,
  shippingPhone: form.shippingPhone,
  shippingAddress: form.shippingAddress,
  detailAddress: form.detailAddress,
}, 'POST', true);
/**
 * 拒绝发货
 * @param form
 * @returns {Promise<*>}
 * @constructor
 */
export const RefuseDelivery = (form) => fetch('/timestoremanage/order/noSend', {
  orderNumber: form.orderNumber,
  reason: form.surereason
}, 'POST', true);
/**
 * 确认发货
 * @param orderNumber 订单号
 * @param logisticsName 快递公司
 * @param logisticsNumber 快递单号
 * @returns {Promise<*>}
 * @constructor
 */
export const ConfirmDelivery = (form) => fetch('/timestoremanage/order/confrimSend', {
  orderNumber: form.ordernumber,
  logisticsName: form.logisticsName,
  logisticsNumber: form.logisticsNumber
}, 'POST', true);
/**
 * 已拒绝发货订单详情
 * @param orderNumber
 * @returns {Promise<*>}
 */
export const getNoSendDetail = (orderNumber) => fetch('/timestoremanage/order/getNoSendDetail', {
  orderNumber: orderNumber
}, 'POST', true);
/**
 * 已发货订单详情
 * @param orderNumber
 * @returns {Promise<*>}
 */
export const getShippedSend = (orderNumber) => fetch('/timestoremanage/order/getShippedSend', {
  orderNumber: orderNumber
}, 'POST', true);
/**
 * 获取待退款列表
 * @param pageNumber  页码
 * @param pageSize  每页行数
 * @param tenantUid 商户id
 * @returns {Promise<*>}
 */
export const listRefund = (pageNumber, pageSize, tenantUid) => fetch('/timestoremanage/order/listRefund', {
  pageNumber: pageNumber,
  pageSize: pageSize,
  tenantUid: tenantUid
}, 'POST', true);
/**
 * 获取已处理订单列表
 * @param pageNumber
 * @param pageSize
 * @param tenantUid
 * @param keyword
 * @param orderStatus
 * @returns {Promise<*>}
 */
export const listRefundOrder = (pageNumber, pageSize, tenantUid, keyword, orderStatus) => fetch('/timestoremanage/order/listRefundOrder', {
  pageNumber: pageNumber,
  pageSize: pageSize,
  tenantUid: tenantUid,
  keyword: keyword,
  orderStatus: orderStatus
}, 'POST', true);

/**
 * 退出登录
 * @type {Promise<*>}
 */
export const loginout = () => fetch('/timestoremanage/sysUser/logout', {}, 'POST');

/**
 * 商品管理
 */

//新增商品
export const addStoreCommodity = (param) => fetch('/timestoremanage/storeCommodity/add', {
  tenantUid: param.tenantUid,
  commodityName: param.commodityName,
  unit: param.unit,
  realityPrice: param.realityPrice,
  suggestPrice: param.suggestPrice,
  inventory: param.inventory,
  carriage: param.carriage,
  payList: param.payType,
  salesReturn: param.salesReturn,
  invoice: param.invoice,
  invoiceList: param.invoiceType,
  detail: param.detail,
  promotion: param.promotion,
  imageList: param.imageList
}, 'POST', true);

// 新增商品图片上传
export const uploadImages = (files) => fetch('/timestoremanage/storeCommodity/uploadImages', {
  files: files,
}, 'POST', false);
//支付方式列表
export const payTypeList = () => fetch('/timestoremanage/payType/list', {}, 'POST', false);

//发票列表
export const invoiceList = () => fetch('/timestoremanage/invoice/list', {}, 'POST', false);


/**
 * 线上商品管理
 */

//出售中列表
export const listSell = (param) => fetch('/timestoremanage/storeCommodity/listSell', {
  pageNumber: param.pageNumber,
  pageSize: param.pageSize,
  tenantUid: param.tenantUid,
  startTime: param.startTime,
  endTime: param.endTime,
  keyword: param.keyword
}, 'POST', true);

//出售中/已下架商品详情
export const storeCommodityDetail = (commodityId) => fetch('/timestoremanage/storeCommodity/detail', {
  commodityId: commodityId
}, 'POST', true);

//下架
export const soldOut = (commodityId) => fetch('/timestoremanage/storeCommodity/soldOut', {
  commodityId: commodityId
}, 'POST', true);

//编辑
export const edit = (param) => fetch('/timestoremanage/storeCommodity/edit', {
  commodityId: param.commodityId,
  realityPrice: param.realityPrice,
  suggestPrice: param.suggestPrice,
  inventory: param.inventory
}, 'POST', true);

//已下架商品列表
export const listSoldOut = (param) => fetch('/timestoremanage/storeCommodity/listSoldOut', {
  pageNumber: param.pageNumber,
  pageSize: param.pageSize,
  tenantUid: param.tenantUid,
  startTime: param.startTime,
  endTime: param.endTime,
  keyword: param.keyword,
  sort: param.sort
}, 'POST', true);

//审核中商品列表接口
export const listCheck = (param) => fetch('/timestoremanage/storeCommodity/listCheck', {
  pageNumber: param.pageNumber,
  pageSize: param.pageSize,
  tenantUid: param.tenantUid,
  startTime: param.startTime,
  endTime: param.endTime,
  keyword: param.keyword
}, 'POST', true);

//审核中商品详情接口
export const getCheckDetail = (commodityId) => fetch('/timestoremanage/storeCommodity/getCheckDetail', {
  commodityId: commodityId
}, 'POST', false);


/**
 * 资产管理
 */

//收益统计与结算
export const countEarnings = (tenantUid) => fetch('/timestoremanage/account/countEarnings', {
  tenantUid: tenantUid
}, 'POST', true);

//结算申请预览
export const settlementApplication = (tenantUid, price) => fetch('/timestoremanage/account/settlementApplication', {
  tenantUid: tenantUid,
  price: price
}, 'POST', true);

//确认结算账户
export const addBillingDetails = (tenantUid, count) => fetch('/timestoremanage/account/addBillingDetails', {
  tenantUid: tenantUid,
  count: count
}, 'POST', true);

//结算明细列表
export const listBillingDetails = (param) => fetch('/timestoremanage/account/listBillingDetails', {
  tenantUid: param.tenantUid,
  startTime: param.startTime,
  endTime: param.endTime,
  status: param.status,
  pageNumber: param.pageNumber,
  pageSize: param.pageSize,
}, 'POST', true);

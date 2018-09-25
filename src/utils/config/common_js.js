/**
 * 检验手机号码
 * @param val
 * @returns {boolean}
 */
export const checkPhone = (val) =>{
  let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(val)) {
    return false;
  } else {
    return true;
  }
};
/**
 * 检验姓名
 * @returns {boolean}
 */
export const checkName = (str) =>{
  let nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
  if (nameReg.test(str)){
    return true
  }else {
    return false
  }
};

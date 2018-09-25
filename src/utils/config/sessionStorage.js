export const setStorage = (key,val) =>{
  window.sessionStorage.setItem(key,val);
};
export const getStorage = (name) =>{
  if (!name) return;
  return window.sessionStorage.getItem(name);
};
export const removeStorage = (name) =>{
  if (!name) return;
  return window.sessionStorage.removeItem(name);
};

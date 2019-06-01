import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';


// 获取内容数据--ajax
export const getCategoryContent = (id) => {  

  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: TIMEOUT    
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) { // 取消前一次的请求
      console.log(err);
    } 
  });
};

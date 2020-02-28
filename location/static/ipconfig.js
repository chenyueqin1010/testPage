//测试地址
let env = 1;

let baseUrl = "";

if (env == 0) {
//	本地代理
  baseUrl = '/api';
} else if (env == 1) {
  baseUrl = ""; 
  // baseUrl = "192.168.8.132:21010/bcmp/wx-bcmp-interface/v1/wx/WXLogin.do";
  // baseUrl = "https://hxydbg.95577.com.cn/bcmp/edge/bcmp/bcmp-daily/v0";
  // baseUrl = "http://192.168.8.138:8000"; 
  // 这个是最开始获取token的接口
  // baseUrlToken = "https://hxydbg.95577.com.cn/bcmp/edge/bcmp/bcmp-wx-interface/v1";
} else if (env == 2) {
//	生产
  baseUrl = "https://hxkpi.hxb.com.cn/bcmp/api";
}
// const commonIp = 'http://103.160.160.29:9349';
//const commonIp = 'https://hxydbg.95577.com.cn/bcmp/api';

// window.baseIp = {
//    wxLogin: commonIp+'/wx/WXLogin.do'
//   }
import axios from 'axios';

const getStore = (key) => {
  const json = localStorage.getItem(key);
  if (json) return JSON.parse(json);
  return null;
};


export const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});

//Cấu hình request

axiosConfig.interceptors.request.use(
  (configs) => {
    //Cấu hình tất cả header add thêm thuộc tính Authorization
    configs.headers = {
      ...configs.headers,
      ['Authorization']: `Bearer ${getStore("token")}`,
    };

    return configs;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/*
    statuscode: mã kết quả trả về do backend qui định
    200(Success): Kết quả trả về thành công
    201(created): Tạo giá trị thành công trên server (thường dùng 200)
    400(Bad Request): Không tồn tại đường dẫn 
    404(Not Found): Không tìm thấy dữ liệu
    401(UnAuthorize): Không có quyền truy cập vào api
    403(Forbiden): Token chưa đủ quyền truy cập
    500(Error in server ): Lỗi xảy ra trên server (Nguyên nhân do frontend hoặc backend tuỳ tình huống )
*/

// Cấu hình kết quả trả về
axiosConfig.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    const originalRequest = error.config;
    console.log(err.response.status);
    if (err.response.status === 400 || err.response.status === 404) {
      // history.push('/');
      console.log("status : 400 || 404");
      return Promise.reject(err);
    }
    if (err.response.status === 401 || err.response.status === 403) {
      console.log('Token không hợp lệ ! Vui lòng đăng nhập lại !');
      // history.push('/login');
      return Promise.reject(err);
    }
  }
);

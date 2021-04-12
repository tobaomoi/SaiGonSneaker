// Import thư viện axios dùng để gọi api
import axios from "axios";

/**
 * Call api truyền thống bằng axios:
 * axios({ 
 *    url: "http://localhost:5000/api/products/getAllProdút",
 *    method: "Phương thức GET/POST/...",
 *    data: "Nếu có"
 * })
 *    .then((result)=>{"Call Api thành công !"});
 *    .catch((err)=>{"Call Api không thành công !"});
 */

const callApi = axios.create({
	baseURL: "https://saigonsneakers-be.herokuapp.com/api",
});

export default callApi;

/**
 * Tuy nhiên dự án call Api rất nhiều lần ở nhiều file khác nhau nên axios cung cấp
 * phương thức create trả về một đối tượng có các chức năng GET/POST ..
 * Cách gọi Api mới:
 * Ex: callApi.get("/products/getAllProducts").then().catch(); // then, catch như trên
 * Do mình đã tạo baseURL rồi nên bây giờ chỉ cần gõ phần còn lại của link Api thôi
 * Cách này lợi ở :
 *    + Code ngắn gọn hơn
 *    + Sau này khi deploy backend ra thì chỉ cần vô đây sửa lại baseURL thô, không cần phải sửa nhiều nơi như cách kia
 */
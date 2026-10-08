## So Sánh Cách Làm Giao Diện: DOM Thuần (Phần A) vs React (Phần B)

### 1. Quản lý Giao diện (UI Rendering)
- **DOM Thuần (Phần A):** Thao tác trực tiếp với DOM tree thông qua các phương thức như `document.createElement`, `appendChild`, hay `innerHTML`. Mỗi khi dữ liệu thay đổi, phải tự viết code thủ công để tìm node tương ứng và cập nhật giao diện.
- **React (Phần B):** Xây dựng giao diện theo mô hình khai báo (Declarative) dựa trên Component và Virtual DOM. Giao diện tự động cập nhật và phản chiếu chính xác theo trạng thái (State) của ứng dụng mà không cần can thiệp trực tiếp vào DOM thật.

### 2. Quản lý Dữ liệu & Luồng dữ liệu (State & Data Flow)
- **DOM Thuần (Phần A):** Dữ liệu thường lưu ở các biến toàn cục (global variables) hoặc gán trực tiếp vào thuộc tính của phần tử HTML (như `data-id`). Luồng dữ liệu hai chiều/phức tạp dễ gây ra hiện tượng giao diện và dữ liệu không đồng bộ.
- **React (Phần B):** Quản lý tập trung bằng Hook `useState`. Luồng dữ liệu di chuyển một chiều từ trên xuống (Unidirectional Data Flow): Component cha (`App`) nắm giữ State và truyền dữ liệu/hàm xử lý xuống Component con thông qua `props`.

### 3. Xử lý Sự kiện (Event Handling)
- **DOM Thuần (Phần A):** Cần gắn các trình lắng nghe sự kiện (`addEventListener`) hoặc sử dụng kỹ thuật Ủy quyền sự kiện (Event Delegation) trên danh sách để tối ưu hiệu năng khi thẻ sách thay đổi.
- **React (Phần B):** Gắn sự kiện trực tiếp trên thẻ JSX (như `onClick`) trong từng Component con (`BookCard`). React tự động quản lý việc lắng nghe và tối ưu sự kiện bên dưới hệ thống (Synthetic Events).

### 4. Bố cục & Khả năng tái sử dụng (Architecture & Reusability)
- **DOM Thuần (Phần A):** Tách file theo chức năng module JS (`api.js`, `storage.js`, `main.js`)[cite: 2, 4], nhưng phần giao diện HTML vẫn bị gắn chặt vào file `index.html` hoặc chuỗi khởi tạo bằng JS.
- **React (Phần B):** Chia nhỏ giao diện thành các thành phần độc lập (`Header`, `Section`, `GenreFilter`, `BookList`, `BookCard`). Sử dụng `children` và `props` giúp mã nguồn dễ đọc, linh hoạt và có khả năng tái sử dụng cao.

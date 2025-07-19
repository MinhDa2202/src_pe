# Ứng Dụng Quản Lý Bài Đăng

Ứng dụng web full-stack hiện đại được xây dựng với Next.js, TypeScript, MongoDB, và Cloudinary để quản lý bài đăng với hình ảnh.

## ✨ Tính Năng

### 🔐 Xác Thực Người Dùng
- Đăng ký và đăng nhập với email/mật khẩu
- Bảo mật với NextAuth.js và bcrypt
- Phân quyền truy cập dựa trên trạng thái đăng nhập

### 📝 Quản Lý Bài Đăng
- **Tạo bài đăng**: Thêm tiêu đề, mô tả và hình ảnh
- **Chỉnh sửa bài đăng**: Cập nhật thông tin và thay đổi hình ảnh
- **Xóa bài đăng**: Xóa với xác nhận an toàn
- **Xem bài đăng**: Hiển thị dạng lưới responsive

### 🔍 Tìm Kiếm & Sắp Xếp
- Tìm kiếm theo tiêu đề (real-time)
- Sắp xếp A-Z hoặc Z-A
- Phân trang thông minh

### 🎨 Giao Diện Người Dùng
- Thiết kế hiện đại với Tailwind CSS
- Chế độ sáng/tối (Dark/Light mode)
- Responsive trên mọi thiết bị
- Animations mượt mà

### 🖼️ Quản Lý Hình Ảnh
- Upload hình ảnh lên Cloudinary
- Tối ưu hóa và nén tự động
- Preview trước khi upload

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Next.js API Routes
- **Database**: MongoDB với Mongoose
- **Authentication**: NextAuth.js
- **File Upload**: Cloudinary
- **Icons**: Lucide React

## 🚀 Cài Đặt và Chạy

### 1. Clone Repository
```bash
git clone <repository-url>
cd pe_sdn
```

### 2. Cài Đặt Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Cấu Hình Environment Variables
Cập nhật file `.env.local` với các giá trị cần thiết:

```env
# MongoDB - Đã được cấu hình
MONGODB_URI=mongodb+srv://ecommerce:voxuany2004@ecommerce.dptk32a.mongodb.net/post_management_app?retryWrites=true&w=majority&appName=ecommerce

# NextAuth - Tạo secret key mới
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-key

# Cloudinary - Đã được cấu hình
CLOUDINARY_CLOUD_NAME=dp2scfmf3
```

### 4. Tạo NextAuth Secret
```bash
# Tạo secret key ngẫu nhiên
openssl rand -base64 32
```

### 5. Cấu Hình Cloudinary
1. Đăng ký tài khoản tại [Cloudinary](https://cloudinary.com/)
2. Tạo một unsigned upload preset trong Settings > Upload
3. Cloud name đã được cấu hình sẵn

### 6. Chạy Ứng Dụng
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## 📱 Hướng Dẫn Sử Dụng

### Cho Khách (Chưa Đăng Nhập)
- Xem danh sách tất cả bài đăng
- Tìm kiếm và sắp xếp bài đăng
- Chuyển đổi chế độ sáng/tối

### Cho Người Dùng Đã Đăng Nhập
- Tất cả tính năng của khách
- Tạo bài đăng mới
- Chỉnh sửa bài đăng của mình
- Xóa bài đăng với xác nhận

## 🏗️ Cấu Trúc Dự Án

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── auth/              # Authentication pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React Components
│   ├── ui/                # Base UI components
│   ├── Header.tsx         # Navigation header
│   ├── PostCard.tsx       # Post display card
│   ├── PostModal.tsx      # Create/Edit modal
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/                   # Utilities
│   ├── models/            # MongoDB schemas
│   ├── auth.ts            # NextAuth config
│   ├── cloudinary.ts      # Image upload
│   ├── mongodb.ts         # Database connection
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript definitions
```

## 🔒 Bảo Mật

- Mật khẩu được hash với bcrypt
- JWT tokens cho session management
- Validation dữ liệu đầu vào
- CORS và rate limiting
- Secure file upload với Cloudinary

## 📊 Database Schema

### User Model
```typescript
{
  email: string (unique)
  hashedPassword: string
  createdAt: Date
}
```

### Post Model
```typescript
{
  title: string (max 100 chars)
  description: string (max 500 chars)
  imageUrl: string
  createdAt: Date
  updatedAt: Date
}
```

## 🎯 Tính Năng Nâng Cao

- **Real-time Search**: Tìm kiếm tức thì không cần reload
- **Optimistic Updates**: UI cập nhật ngay lập tức
- **Image Optimization**: Tự động tối ưu hình ảnh
- **Responsive Design**: Hoạt động tốt trên mọi thiết bị
- **Error Handling**: Xử lý lỗi thân thiện với người dùng
- **Loading States**: Feedback rõ ràng cho mọi hành động

## 🚀 Deploy

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Kết nối với Vercel
3. Cấu hình environment variables
4. Deploy tự động

### Các Platform Khác
- Netlify
- Railway
- Heroku
- DigitalOcean

## 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push và tạo Pull Request

## 📄 License

MIT License - xem file LICENSE để biết thêm chi tiết.

## 📞 Hỗ Trợ

Nếu gặp vấn đề, vui lòng tạo issue trên GitHub hoặc liên hệ qua email.

---

**Được xây dựng với ❤️ bằng Next.js và TypeScript**
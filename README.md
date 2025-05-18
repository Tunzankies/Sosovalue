# SOSOVALUE TOOL

<div align="center">
  <a href="#vietnamese">🇻🇳 Tiếng Việt</a> | 
  <a href="#english">🇬🇧 English</a>
</div>

---

<div id="vietnamese">

# SOSOVALUE TOOL

![SOSOVALUE Banner](https://img.shields.io/badge/SOSOVALUE-Tool-blueviolet?style=for-the-badge&logo=github)  
**Phiên bản mới nhất**: v1.0.1 | **Tác giả**: @tunankies | **Liên hệ**: [Telegram](https://web.telegram.org/k/#@tunankies)

Một công cụ mạnh mẽ hỗ trợ tự động hóa trên nền tảng **SOSOVALUE**, giúp bạn tối ưu hóa việc buff ref, làm nhiệm vụ và quản lý tài khoản một cách dễ dàng.

---

## ✨ CHỨC NĂNG CHÍNH

1. **Buff Ref (Tài khoản chính)**
   - Tự động đăng ký và buff ref cho tài khoản chính
   - Hỗ trợ nhiều luồng chạy đồng thời
   - Tự động lưu tài khoản đã đăng ký

2. **Buff Ref (Tài khoản phụ - Cơ chế ref tầng)**
   - Hỗ trợ buff ref nhiều tầng
   - Tự động tạo và quản lý tài khoản phụ
   - Tối ưu hóa điểm ref theo cấu trúc tầng

3. **Làm Nhiệm Vụ (Bug điểm)**
   - Tự động hoàn thành các nhiệm vụ hàng ngày
   - Tối ưu hóa việc nhận điểm thưởng
   - Hỗ trợ nhiều tài khoản cùng lúc

4. **Get Token**
   - Tự động lấy token mới khi token hết hạn
   - Lưu trữ và quản lý token an toàn
   - Tự động cập nhật token khi cần thiết

5. **Login Metamask**
   - Hỗ trợ đăng nhập bằng ví Metamask
   - Tự động kết nối và xác thực ví
   - Bảo mật thông tin ví

6. **Connect X (Đang bảo trì)**
   - Tính năng đang được nâng cấp và bảo trì
   - Sẽ được cập nhật trong phiên bản tiếp theo

7. **Thoát**
   - Lưu lại trạng thái hiện tại
   - Đóng chương trình an toàn

---

## ⚙️ CẤU HÌNH CONFIG.JSON

```json
{
    "waitTime": 86400,       // Thời gian chờ giữa các vòng lặp (giây)
    "numberThread": 1,       // Số luồng chạy đồng thời
    "refCode": "2413Y837",   // Mã ref chính của SOSOVALUE
    "checkProxy": true,      // Kiểm tra proxy trước khi chạy
    "password": "Tunzankies123@", // Mật khẩu mặc định cho tài khoản
    "API_CAPMONSTER": "your_api_key" // API Key CapMonster
}
```

### Giải thích cấu hình:
- **waitTime**: Thời gian chờ giữa các lần chạy (mặc định: 86400 giây = 24 giờ)
- **numberThread**: Số lượng luồng chạy đồng thời (mặc định: 1)
- **refCode**: Mã giới thiệu của bạn trên SOSOVALUE
- **checkProxy**: Bật/tắt kiểm tra proxy trước khi chạy
- **password**: Mật khẩu mặc định cho các tài khoản được tạo
- **API_CAPMONSTER**: API key từ CapMonster để giải captcha

---

## 🛠️ HƯỚNG DẪN SỬ DỤNG

### 1. Chuẩn bị
- Cài đặt API CapMonster từ [CapMonster Dashboard](https://capmonster.cloud/Dashboard)
- Chuẩn bị file `proxies.txt` với định dạng: `ip:port:username:password`

### 2. Chạy Tool
- Chạy file `sosovalue.exe`
- Chọn chức năng từ menu chính
- Theo dõi log để kiểm tra tiến trình

### 3. Quản lý tài khoản
- Tài khoản được lưu trong `account.txt`
- Token được lưu trong `tokens.txt`
- Mã ref được lưu trong `ref.txt`

---

## 📝 LƯU Ý QUAN TRỌNG

- Luôn bật `"checkProxy": true` để đảm bảo proxy hoạt động tốt
- Cập nhật API CapMonster thường xuyên
- Sao lưu dữ liệu tài khoản định kỳ
- Liên hệ [Telegram: @tunankies](https://web.telegram.org/k/#@tunankies) nếu cần hỗ trợ

---

## ❤️ HỖ TRỢ TÁC GIẢ

Tool được phát triển bởi **@tunankies**. Nếu thấy hữu ích, hãy:
- **Subscribe** kênh [Bào Ngư's Airdrop](https://t.me/airdrop_tool_for_everyone)
- **Liên hệ Telegram**: [tunankies](https://web.telegram.org/k/#@tunankies)

---

**Cảm ơn bạn đã sử dụng SOSOVALUE TOOL! Chúc bạn thành công!** 🚀

--- 

</div>

<div id="english">

# SOSOVALUE TOOL

![SOSOVALUE Banner](https://img.shields.io/badge/SOSOVALUE-Tool-blueviolet?style=for-the-badge&logo=github)  
**Latest Version**: v1.0.1 | **Author**: @tunankies | **Contact**: [Telegram](https://web.telegram.org/k/#@tunankies)

A powerful automation tool for the **SOSOVALUE** platform, helping you optimize ref buffing, task completion, and account management with ease.

## ✨ MAIN FEATURES

1. **Buff Ref (Main Account)**
   - Automatic registration and ref buffing for main account
   - Support for multiple concurrent threads
   - Automatic account saving

2. **Buff Ref (Sub Accounts - Tier System)**
   - Support for multi-tier ref buffing
   - Automatic sub-account creation and management
   - Optimize ref points through tier structure

3. **Daily Tasks (Bug Points)**
   - Automatic daily task completion
   - Optimize reward points
   - Support for multiple accounts simultaneously

4. **Get Token**
   - Automatic token refresh when expired
   - Secure token storage and management
   - Automatic token updates when needed

5. **Login Metamask**
   - Support for Metamask wallet login
   - Automatic wallet connection and verification
   - Secure wallet information

6. **Connect X (Maintenance)**
   - Feature under upgrade and maintenance
   - Will be updated in next version

7. **Exit**
   - Save current state
   - Safe program closure

## ⚙️ CONFIG.JSON SETTINGS

```json
{
    "waitTime": 86400,       // Wait time between runs (seconds)
    "numberThread": 1,       // Number of concurrent threads
    "refCode": "2413Y837",   // Your SOSOVALUE referral code
    "checkProxy": true,      // Check proxy before running
    "password": "Tunzankies123@", // Default account password
    "API_CAPMONSTER": "your_api_key" // CapMonster API Key
}
```

### Configuration Explanation:
- **waitTime**: Time between runs (default: 86400 seconds = 24 hours)
- **numberThread**: Number of concurrent threads (default: 1)
- **refCode**: Your SOSOVALUE referral code
- **checkProxy**: Enable/disable proxy checking before running
- **password**: Default password for created accounts
- **API_CAPMONSTER**: CapMonster API key for captcha solving

## 🛠️ USAGE GUIDE

### 1. Preparation
- Install CapMonster API from [CapMonster Dashboard](https://capmonster.cloud/Dashboard)
- Prepare `proxies.txt` file with format: `ip:port:username:password`

### 2. Running the Tool
- Run `sosovalue.exe`
- Select function from main menu
- Monitor logs for progress

### 3. Account Management
- Accounts saved in `account.txt`
- Tokens saved in `tokens.txt`
- Ref codes saved in `ref.txt`

## 📝 IMPORTANT NOTES

- Always enable `"checkProxy": true` to ensure proxy functionality
- Update CapMonster API regularly
- Backup account data periodically
- Contact [Telegram: @tunankies](https://web.telegram.org/k/#@tunankies) for support

## ❤️ SUPPORT THE AUTHOR

Tool developed by **@tunankies**. If you find it useful:
- **Subscribe** to [Bào Ngư's Airdrop](https://t.me/airdrop_tool_for_everyone)
- **Contact Telegram**: [tunankies](https://web.telegram.org/k/#@tunankies)

---

**Thank you for using SOSOVALUE TOOL! Good luck!** 🚀

</div>

<style>
  /* CSS for language tabs */
  div[align="center"] {
    margin: 20px 0;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 5px;
  }
  
  div[align="center"] a {
    margin: 0 10px;
    padding: 5px 15px;
    text-decoration: none;
    color: #333;
    border-radius: 3px;
    transition: background 0.3s;
  }
  
  div[align="center"] a:hover {
    background: #e0e0e0;
  }
  
  /* Hide all language sections by default */
  #vietnamese, #english {
    display: none;
  }
  
  /* Show Vietnamese by default */
  #vietnamese {
    display: block;
  }
</style>

<script>
  // JavaScript for language switching
  document.querySelectorAll('div[align="center"] a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      
      // Hide all language sections
      document.querySelectorAll('#vietnamese, #english').forEach(section => {
        section.style.display = 'none';
      });
      
      // Show selected language section
      document.getElementById(targetId).style.display = 'block';
      
      // Update active tab
      document.querySelectorAll('div[align="center"] a').forEach(a => {
        a.style.background = '';
      });
      e.target.style.background = '#e0e0e0';
    });
  });
</script>

--- 

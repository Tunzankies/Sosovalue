

# SOSOVALUE TOOL

![SOSOVALUE Banner](https://img.shields.io/badge/SOSOVALUE-Tool-blueviolet?style=for-the-badge&logo=github)  
**Phiên bản mới nhất**: v1.0.1 | **Tác giả**: @tunankies | **Liên hệ**: [Telegram](https://web.telegram.org/k/#@tunankies)

Một công cụ mạnh mẽ hỗ trợ tự động hóa trên nền tảng **SOSOVALUE**, giúp bạn tối ưu hóa việc buff ref, làm nhiệm vụ hàng ngày, lấy token và kết nối tài khoản X một cách dễ dàng.

---

## ✨ CHỨC NĂNG CHÍNH

- **Buff Ref (Nhiều tầng)**: Hỗ trợ buff ref cho tài khoản chính và phụ theo cơ chế nhiều tầng.
- **Kết nối X**: Tự động kết nối tài khoản X để tăng điểm ref (bao nhiêu X thì buff bấy nhiêu ref).
- **Làm nhiệm vụ hàng ngày**: Bypass toàn bộ task cho các tài khoản đã kết nối X.
- **Lấy token mới**: Tự động lấy lại token nếu token hết hạn hoặc bị mất.

---

## ⚙️ CẤU HÌNH CONFIG.JSON

Dưới đây là cấu hình mẫu trong file `config.json`. Chỉnh sửa theo nhu cầu sử dụng:

```json
{
    "waitTime": 10,          // Thời gian chờ giữa các vòng lặp (giây)
    "numberThread": 20,      // Số luồng chạy đồng thời (cần đủ proxy)
    "refCode": "2413Y837",   // Mã ref chính của SOSOVALUE
    "checkProxy": true,      // Bật kiểm tra proxy (khuyến nghị luôn bật)
    "autoReg": true,         // Tự động đăng ký và buff ref
    "taskDaily": true,       // Chạy nhiệm vụ hàng ngày
    "ref_2": {               // Chế độ buff ref nhiều tầng
        "enable": true,      // Bật chế độ buff tầng 2
        "numberRef2": 3      // Số lượng ref cần buff ở tầng 2
    },
    "getToken": true,        // Lấy lại token mới
    "API_CAPMONSTER": "your_api_key" // API Key từ CapMonster
}
```

### Chế độ chạy
- **Đăng ký tài khoản**: Chỉ bật `"autoReg": true`, tắt các mục khác.
- **Lấy token**: Chỉ bật `"getToken": true`, tắt các mục khác.
- **Làm nhiệm vụ hàng ngày**: Chỉ bật `"taskDaily": true`, tắt các mục khác.

---

## 🛠️ HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY

### 1. Chuẩn bị API CapMonster
- **Bước 1**: Truy cập [CapMonster Dashboard](https://capmonster.cloud/Dashboard) để mua API giải captcha.
- **Bước 2**: Sao chép API Key và dán vào `"API_CAPMONSTER"` trong file `config.json`.

### 2. Cấu hình Proxy
- Tạo file `proxies.txt` với định dạng:  
  ```
  ip:port:username:password
  ```
- Ví dụ:
  ```
  192.168.1.1:8080:user1:pass1
  10.0.0.1:3128:user2:pass2
  ```

### 3. Chạy Tool
- Chạy file:
  ```
  sosovalue.exe
  ```

---

## 📂 QUẢN LÝ TÀI KHOẢN

- **Khi đăng ký thành công**:
  - Tài khoản sẽ được lưu vào `account.txt` với định dạng:  
    ```
    username|password
    ```
  - Mã ref lưu vào file `ref.txt`,
  - Token sẽ được lưu vào `tokens.txt`.

- **Kết nối X**:
  - Cần cài 2 extension trước khi connect X
  - 1: CapMonster Cloud — automated captcha solver
  - 2: getOTP_soso_ex_v1(by tunankies)
  - **Lưu ý**: tài khoản phải login sẵn X
  - Mua X liên hệ @tunankies giá 400đ/acc
  - có script login X đi kèm
  - Copy danh sách tài khoản từ `account.txt` vào cột B trong file Excel mẫu (có sẵn trong tool).
  - Cột A: Tên profile X (đã đăng nhập sẵn tài khoản X).
  - Ref từ X sẽ cộng thêm **25k điểm giới thiệu**.

---

## 🔒 TÍNH NĂNG BẢO MẬT

- **Fake User-Agent**: Tool tự động thay đổi User-Agent ngẫu nhiên.
- **Sử dụng Proxy**: Đảm bảo ẩn danh và tránh bị chặn.

---

## 📝 LƯU Ý QUAN TRỌNG

- Đảm bảo bật `"checkProxy": true` để kiểm tra proxy trước khi chạy.
- Liên hệ [Telegram: @tunankies](https://web.telegram.org/k/#@tunankies) nếu cần hỗ trợ.

---

## ❤️ HỖ TRỢ TÁC GIẢ

Tool được phát triển bởi **@tunankies**. Nếu thấy hữu ích, hãy:
- **Subscribe** kênh của mình [Bào Ngư's Airdrop](https://t.me/airdrop_tool_for_everyone).
- **Liên hệ Telegram**: [tunankies](https://web.telegram.org/k/#@tunankies) để ủng hộ hoặc báo lỗi.

---

**Cảm ơn bạn đã sử dụng SOSOVALUE TOOL! Chúc bạn thành công!** 🚀

--- 


# ENGLISH
SOSOVALUE TOOL
Latest Version: v1.0.1 | Author: @tunankies | Contact: Telegram
A powerful automation tool for the SOSOVALUE platform, designed to streamline ref boosting, daily task completion, token retrieval, and X account integration.

✨ KEY FEATURES

Multi-Tier Ref Boosting: Automates ref boosting for primary and secondary accounts with a multi-tier mechanism.
X Integration: Automatically connects X accounts to increase ref points (each X account adds ref points).
Daily Task Automation: Bypasses all daily tasks for accounts linked with X.
Token Retrieval: Automatically retrieves new tokens if they expire or are lost.


⚙️ CONFIG.JSON SETUP
Below is a sample configuration for the config.json file. Adjust it based on your needs:
{
    "waitTime": 10,          // Wait time between loops (seconds)
    "numberThread": 20,      // Number of concurrent threads (requires sufficient proxies)
    "refCode": "2413Y837",   // Main SOSOVALUE ref code
    "checkProxy": true,      // Enable proxy checking (recommended to keep enabled)
    "autoReg": true,         // Automatically register and boost refs
    "taskDaily": true,       // Run daily tasks
    "ref_2": {               // Multi-tier ref boosting mode
        "enable": true,      // Enable tier-2 ref boosting
        "numberRef2": 3      // Number of refs to boost in tier 2
    },
    "getToken": true,        // Retrieve new tokens
    "API_CAPMONSTER": "your_api_key" // CapMonster API Key
}

Operation Modes

Account Registration: Enable only "autoReg": true, disable other options.
Token Retrieval: Enable only "getToken": true, disable other options.
Daily Tasks: Enable only "taskDaily": true, disable other options.


🛠️ INSTALLATION AND SETUP
1. Prepare CapMonster API

Step 1: Visit CapMonster Dashboard to purchase a captcha-solving API.
Step 2: Copy the API Key and paste it into "API_CAPMONSTER" in the config.json file.

2. Configure Proxies

Create a proxies.txt file with the format:  ip:port:username:password


Example:192.168.1.1:8080:user1:pass1
10.0.0.1:3128:user2:pass2



3. Run the Tool

Execute the file:sosovalue.exe




📂 ACCOUNT MANAGEMENT

Upon Successful Registration:

Accounts are saved to account.txt in the format:  username|password


Ref codes are saved to ref.txt.
Tokens are saved to tokens.txt.


X Integration:

Install two browser extensions before connecting X:
CapMonster Cloud — automated captcha solver
getOTP_soso_ex_v1 (by tunankies)


Note: X accounts must be logged in beforehand.
Purchase X accounts via @tunankies (400đ/account).
A script for logging into X is included.
Copy the account list from account.txt to column B in the provided Excel template (included with the tool).
Column A: X profile names (already logged into X accounts).
Each X ref adds 25k referral points.




🔒 SECURITY FEATURES

Fake User-Agent: The tool automatically rotates User-Agents randomly.
Proxy Support: Ensures anonymity and prevents bans.


📝 IMPORTANT NOTES

Always enable "checkProxy": true to verify proxies before running.
Contact Telegram: @tunankies for support.


❤️ SUPPORT THE AUTHOR
This tool was developed by @tunankies. If you find it useful, please:

Subscribe to my channel: Bào Ngư's Airdrop.
Contact via Telegram: tunankies to show support or report issues.


Thank you for using SOSOVALUE TOOL! Wishing you success! 🚀




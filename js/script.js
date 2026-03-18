$(document).ready(function () {
  document.getElementById("carBookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Cấu hình Telegram (Thay thông tin của bạn vào đây)
    const telegramToken = "8764329841:AAHGb-7D88qeAiR8vVIqwDZj7guQ0QSXvvI"; //"THAY_TOKEN_CUA_BAN_VAO_DAY";
    const chatId = 5217475773; //"THAY_ID_CUA_BAN_VAO_DAY";

    // 2. Lấy dữ liệu từ Form
    const name = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("serviceType").value;
    const location = document.getElementById("location").value;
    const note = document.getElementById("note").value;

    // 3. Nội dung tin nhắn gửi về điện thoại
    const message = `
🚖 CÓ KHÁCH ĐẶT XE MỚI!
-----------------------
👤 Khách hàng: ${name}
📞 Điện thoại: ${phone}
🛠 Dịch vụ: ${service}
📍 Điểm đón/đến: ${location}
📝 Ghi chú: ${note}
-----------------------
⚡ Hãy gọi lại ngay cho khách!`;

    // 4. Gửi dữ liệu qua API Telegram
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const params = {
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown", // Cho phép in đậm, in nghiêng
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((response) => {
        if (response.ok) {
          alert("Đã gửi yêu cầu thành công! Tài xế sẽ gọi lại cho bạn ngay.");
          document.getElementById("carBookingForm").reset();
        } else {
          alert("Lỗi gửi tin nhắn. Vui lòng gọi trực tiếp Hotline!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Không thể kết nối. Vui lòng kiểm tra mạng!");
      });
  });
});

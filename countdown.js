// Thiết lập ngày và giờ kết thúc sự kiện
const eventDate = new Date("2025-10-01T22:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Tính toán thời gian cho ngày, giờ, phút và giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả trong phần tử có id="countdown"
    document.getElementById("countdown").innerHTML = `${days} Ngày ${hours} Giờ ${minutes} Phút ${seconds} Giây`;

    // Nếu sự kiện đã kết thúc
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "SỰ KIỆN ĐÃ KẾT THÚC!";
    }
}, 1000);
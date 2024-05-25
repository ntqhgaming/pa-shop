 // Đặt thời gian đích (thời gian kết thúc giảm giá)
 const saleEndTime = new Date('2024-06-01T12:00:00').getTime();

 // Hàm cập nhật đồng hồ đếm ngược
 function updateCountdown() {
     const now = new Date().getTime();
     const timeLeft = saleEndTime - now;

     if (timeLeft <= 0) {
         // Kết thúc giảm giá
         document.getElementById('countdown').innerText = "Giảm giá đã kết thúc";
         return;
     }

     // Tính toán ngày, giờ, phút, giây còn lại
     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     // Cập nhật phần tử đếm ngược với thời gian còn lại
     document.getElementById('countdown').innerText = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;

     // Cập nhật mỗi giây
     setTimeout(updateCountdown, 1000);
 }

 // Bắt đầu cập nhật đồng hồ đếm ngược
 updateCountdown();
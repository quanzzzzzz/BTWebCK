// Lấy form đánh giá và container chứa các đánh giá
const formDanhGia = document.querySelector('.form-container form');
const containerDanhGia = document.querySelector('.review-cards');

// Thêm sự kiện submit cho form đánh giá
formDanhGia.addEventListener('submit', (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

  // Lấy dữ liệu từ form
  const formData = new FormData(event.target);
  const ten = formData.get('name');
  const danhGia = formData.get('rating');
  const noiDung = formData.get('review');

  // Tạo một phần tử đánh giá mới
  const cardDanhGia = document.createElement('div');
  cardDanhGia.classList.add('review-card');

  // Tạo phần hiển thị số sao đánh giá
  const phanTuDanhGia = document.createElement('div');
  phanTuDanhGia.classList.add('rating');
  for (let i = 0; i < 5; i++) {
    const sao = document.createElement('span');
    sao.textContent = '★';
    if (i < parseInt(danhGia)) {
      sao.classList.add('active');
    }
    phanTuDanhGia.appendChild(sao);
  }

  // Tạo phần nội dung đánh giá
  const phanTuNoiDung = document.createElement('div');
  phanTuNoiDung.classList.add('review-content');
  phanTuNoiDung.textContent = noiDung;

  // Tạo phần chân trang đánh giá
  const phanTuFooter = document.createElement('div');
  phanTuFooter.classList.add('review-footer');
  phanTuFooter.innerHTML = `<span>${ten}</span><span>${new Date().toLocaleDateString()}</span>`;

  // Thêm các phần tử vào card đánh giá
  cardDanhGia.appendChild(phanTuDanhGia);
  cardDanhGia.appendChild(phanTuNoiDung);
  cardDanhGia.appendChild(phanTuFooter);

  // Thêm card đánh giá mới vào đầu container
  containerDanhGia.prepend(cardDanhGia);

  // Đặt lại form
  formDanhGia.reset();
});
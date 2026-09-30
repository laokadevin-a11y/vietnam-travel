# Hướng dẫn deploy 5 phút — VN Du Lịch

Web của bạn là **HTML/CSS/JS tĩnh**, nên deploy rất đơn giản — chỉ cần tải folder lên bất kỳ hosting tĩnh nào. Dưới đây là 3 cách phổ biến nhất, chọn 1.

> **Trước khi deploy:** nên đổi tên miền `vndulich.vn` trong `sitemap.xml`, `robots.txt` và các thẻ `canonical`/`og:url`/JSON-LD trong từng file HTML thành tên miền thật của bạn.

---

## Cách 1 — Netlify (khuyên dùng, miễn phí)

1. Vào [netlify.com](https://app.netlify.com) → đăng ký bằng GitHub/Google.
2. Kéo **toàn bộ folder** `vietnam-travel` vào khung "Drag and drop your site folder" trên trang Dashboard.
3. Chờ ~30 giây, web lên mạng ngay với địa chỉ `ten-ngau-nhien.netlify.app`.
4. (Tùy chọn) Đổi tên: Site settings → Change site name → `vndulich`.
5. Để gắn tên miền riêng: Domain management → Add custom domain → nhập `vndulich.vn` → trỏ DNS theo hướng dẫn.

**Ưu điểm:** kéo-thả, có sẵn HTTPS, không cần dòng lệnh.

---

## Cách 2 — Vercel (nhanh, miễn phí)

1. Vào [vercel.com](https://vercel.com) → đăng ký.
2. Cài Vercel CLI hoặc dùng GitHub. Cách nhanh nhất (CLI):
   ```bash
   npm i -g vercel
   cd vietnam-travel
   vercel --prod
   ```
3. Trả lời các câu hỏi (framework: Other; output dir: để trống), xong web lên `xxx.vercel.app`.
4. Gắn domain: Project → Settings → Domains.

---

## Cách 3 — GitHub Pages (miễn phí, dành cho GitHub)

1. Tạo repo mới trên GitHub (ví dụ `vietnam-travel`), upload toàn bộ folder (hoặc dùng git).
2. Repo → Settings → Pages → Source: `Deploy from a branch` → chọn `main` + thư mục `/ (root)` → Save.
3. Sau 1–2 phút web lên `https://<ten-ban>.github.io/vietnam-travel/`.
4. Gắn domain: Settings → Pages → Custom domain → nhập `vndulich.vn` → trỏ DNS (A record) tới `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

> Lưu ý: với GitHub Pages, đường dẫn tuyệt đối trong sitemap/OG nên cập nhật cho khớp tên miền.

---

## Checklist sau khi lên mạng
- [ ] Mở web trên điện thoại + máy tính, thử đổi ngôn ngữ, lọc, tìm kiếm
- [ ] Thử gửi form liên hệ
- [ ] Đổi GA4 ID thật trong từng file (tìm `G-XXXXXXXXXX`)
- [ ] Cài Google Search Console: vào search.google.com/search-console → thêm tên miền → xác minh (Netlify: thêm file HTML; GH Pages: thêm meta tag)
- [ ] Nộp `sitemap.xml` trong Search Console để Google index nhanh

---

## Nếu muốn có tên miền .vn
- Mua tại các nhà đăng ký Việt Nam: PA Vietnam, Mắt Bão, iNET (giá ~200–400k/năm).
- Sau khi mua, trỏ DNS về Netlify/Vercel theo hướng dẫn của nền tảng.
- Nhớ đổi `vndulich.vn` thành tên miền thật trong `sitemap.xml`, `robots.txt` và các thẻ `canonical`/`og:url` trong từng file HTML.

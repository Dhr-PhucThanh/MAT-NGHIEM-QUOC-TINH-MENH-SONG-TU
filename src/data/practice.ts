export type Stage = {
  id: string;
  mark: string;
  title: string;
  work: string;
  aim: string;
  notes: string[];
};

export const khaiQuang = [
  "Ngồi yên, lưng thẳng, thở tự nhiên. Buông tạp niệm, không đếm hơi.",
  "Hồi quang nội chiếu: ý nhẹ, không nhìn ra ngoài, không truy cảnh.",
  "An thần vào chỗ của giai đoạn đang tu (Tổ Khiếu, Hoàng Trung, hoặc Hạ Đan Điền).",
  "Giữ 5–15 phút trước mỗi khóa. Mục tiêu là làm lắng Hậu Thiên, không phải sinh cảm ứng.",
];

export const stages: Stage[] = [
  {
    id: "t1",
    mark: "Hanh · 1",
    title: "Hàm dưỡng bản nguyên, cứu hộ mệnh bảo",
    work: "Tẩy tâm thoái tàng. Ngọc dịch luyện hình.",
    aim: "Giữ mệnh, nuôi gốc, không hao tinh khí.",
    notes: [
      "Sơ cơ. Mỗi ngày một đến hai khóa, 30–60 phút.",
      "Không vận khí cưỡng, không tưởng tượng luân chuyển.",
      "Dừng khi thân ấm, tâm yên. Không thêm hỏa hầu.",
    ],
  },
  {
    id: "t2",
    mark: "Hanh · 2",
    title: "An thần tổ khiếu, hấp tụ tiên thiên",
    work: "An thần Tổ Khiếu. Pháp luân tự chuyển. Long hổ giao cấu.",
    aim: "Thần định thì khí tụ, không dùng ý đuổi khí.",
    notes: [
      "Tổ khiếu là chỗ an thần, không phải chỗ nhìn chằm chằm bằng mắt.",
      "Long hổ giao cấu là khí tự hợp sau khi thần đã định.",
    ],
  },
  {
    id: "t3",
    mark: "Hanh · 3",
    title: "Trập tàng khí huyệt, chúng diệu quy căn",
    work: "Ngưng thần nhập khí huyệt. Thai tức.",
    aim: "Thần khí không rời, tính mệnh bắt đầu hợp.",
    notes: [
      "Khẩu quyết cốt: điều chân tức, luyện bất thần chi thần.",
      "Khí huyệt: sau rốn, trước thận, dưới hoàng đình, trên quan nguyên — theo bản dịch Nguyễn Văn Thọ.",
      "Không lấy hô hấp phổi làm chân tức.",
    ],
  },
  {
    id: "t4",
    mark: "Lợi · 4",
    title: "Thiên nhân hợp pháp, thái dược quy hồ",
    work: "Thái dược quy hồ. Tụ hỏa tải kim.",
    aim: "Thu dược khi đã có cảm ứng, không thái sớm.",
    notes: ["Chỉ vào tiết này khi ba tiết Hanh đã ổn định.", "Có dược thì thu; không có thì không bịa cảm ứng."],
  },
  {
    id: "t5",
    mark: "Lợi · 5",
    title: "Càn khôn giao cấu, khử khoáng lưu kim",
    work: "Càn khôn giao cấu. Mão dậu châu thiên.",
    aim: "Bỏ cặn, giữ chân kim.",
    notes: ["Châu thiên là tuần hoàn tự nhiên của chân khí, không phải ý dẫn vòng thân."],
  },
  {
    id: "t6",
    mark: "Lợi · 6",
    title: "Linh đơn nhập đỉnh, trường dưỡng thánh thai",
    work: "Linh đơn nhập đỉnh. Hành hỏa hầu. Nuôi thánh thai.",
    aim: "Kết thai và nuôi, không đốt hỏa quá mức.",
    notes: ["Hỏa hầu lấy văn hỏa làm chính. Võ hỏa chỉ khi có truyền riêng."],
  },
  {
    id: "t7",
    mark: "Trinh · 7",
    title: "Anh nhi hiện hình, xuất ly khổ hải",
    work: "Anh nhi hiện. Chân không luyện hình.",
    aim: "Pháp thân có hình, chưa ra ngoài chấp tướng.",
    notes: ["Không đuổi cảnh, không kể mộng làm chứng quả."],
  },
  {
    id: "t8",
    mark: "Trinh · 8",
    title: "Di thần nội viện, đoan củng minh tâm",
    work: "Di thần nội viện. Đoan củng minh tâm.",
    aim: "Thần định, tâm sáng, không tán ra cảnh.",
    notes: ["Nội viện là chỗ thần về, không phải tưởng một cung điện."],
  },
  {
    id: "t9",
    mark: "Trinh · 9",
    title: "Bản thể hư không, siêu xuất tam giới",
    work: "Siêu xuất. Tì Lô chứng quả.",
    aim: "Hình thần cùng diệu, hợp thái hư.",
    notes: ["Đây là chỗ sách kết. Không lấy làm bài tập hàng ngày của người mới."],
  },
];

export const knots = [
  {
    id: "k1",
    n: "01–02",
    root: "Nhãn căn",
    open: "Nhận trần sắc là nút. Buông theo hình, trụ vào tánh thấy — thấy mà không chọn cảnh.",
    prove: "Sắc đến không kéo tâm. Tánh thấy còn khi mắt nhắm.",
  },
  {
    id: "k2",
    n: "03–04",
    root: "Nhĩ căn",
    open: "Cửa chính đời này. Nghe tiếng trong ngoài, rồi nghe cái nghe. Không đuổi nguồn tiếng.",
    prove: "Tiếng dứt, tánh nghe không dứt. Không còn chọn tiếng ưa ghét.",
  },
  {
    id: "k3",
    n: "05–06",
    root: "Tỷ căn",
    open: "Hơi và mùi đến thì biết, không vịn. Trung tâm nút là tánh ngửi, không phải lỗ mũi.",
    prove: "Không truy hương, không chán uế. Hơi thở không thành đối tượng.",
  },
  {
    id: "k4",
    n: "07–08",
    root: "Thiệt căn",
    open: "Vị và lời đều là nút. Nếm thì biết vị, nói thì biết tiếng lời, không thêm chuyện.",
    prove: "Lưỡi không chạy theo vị. Lời không thành chỗ bám.",
  },
  {
    id: "k5",
    n: "09–10",
    root: "Thân căn",
    open: "Xúc chạm, nóng lạnh, đau dễ đều để yên. Không dịch thân để tìm cảm giác.",
    prove: "Thân còn cảm mà tâm không theo. Ngồi lâu không cần đổi thế vì buồn.",
  },
  {
    id: "k6",
    n: "11–12",
    root: "Ý căn",
    open: "Nút giữa của sáu nút. Niệm khởi thì biết niệm, không đuổi, không đè.",
    prove: "Sáu căn đã mở thì một cũng không còn chỗ gọi. Nhân không rồi pháp không.",
  },
];

export const nav = [
  { href: "#khai-quang", label: "Khai quang" },
  { href: "#chin-tiet", label: "Chín tiết" },
  { href: "#sau-nut", label: "Mười hai bước" },
  { href: "#gian-do", label: "Giản đồ" },
  { href: "#ngay", label: "Một ngày" },
];

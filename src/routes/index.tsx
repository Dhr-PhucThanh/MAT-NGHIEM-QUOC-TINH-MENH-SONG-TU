import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Check, Printer } from "lucide-react";
import { khaiQuang, knots, nav, stages } from "@/data/practice";

export const Route = createFileRoute("/")({ component: Home });

const KEY = "khue-chi-done";

function Home() {
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDone(JSON.parse(raw) as string[]);
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
  }, []);

  function toggle(id: string) {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }

  const total = stages.length + knots.length;
  const count = done.length;

  return (
    <div className="min-h-screen">
      <header className="no-print sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <a href="#dau" className="font-serif text-lg font-medium tracking-tight">
            Khuê Chỉ
          </a>
          <nav className="hidden gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted hover:bg-paper hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm text-paper"
          >
            <Printer className="size-4" aria-hidden />
            In / PDF
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-line bg-paper px-3 py-2 text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <section id="dau" className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-cinnabar uppercase">
            Tính mệnh song tu
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight font-medium md:text-5xl">
            Quy trình thực hành Khuê Chỉ và mở sáu nút
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Outline từ đệ nhất đến đệ cửu tiết của{" "}
            <em className="text-ink">Tính Mệnh Khuê Chỉ Toàn Thư</em> (bản dịch
            Nhân Tử Nguyễn Văn Thọ), kèm mười hai bước mở sáu căn theo thứ lớp
            Kinh Lăng Nghiêm. Có phần khai quang trước mỗi khóa.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            File Terabox không mở được từ đây. Mười hai bước là cặp khai–chứng
            cho sáu căn, dựng từ nguyên lý “mở từ giữa nút, theo thứ lớp”, không
            phải khẩu truyền trong file đó.
          </p>
          <p className="mt-6 text-sm text-muted" aria-live="polite">
            {ready ? `Đã đánh dấu ${count}/${total} bước trên máy này.` : "Đang mở sổ."}
          </p>
        </section>

        <section id="khai-quang" className="mt-14 print-break">
          <h2 className="font-serif text-3xl font-medium">Khai quang</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Làm trước mỗi tiết và trước mỗi lần mở nút. Ngắn, đều, không thêm
            pháp.
          </p>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {khaiQuang.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-line bg-paper p-4"
              >
                <span className="font-serif text-xl text-cinnabar">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="chin-tiet" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-medium">Chín tiết khẩu quyết</h2>
            <span className="text-sm text-muted">Hanh → Lợi → Trinh</span>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {stages.map((stage) => (
              <article
                key={stage.id}
                className="print-break rounded-xl border border-line bg-paper p-5 md:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-cinnabar">{stage.mark}</p>
                    <h3 className="mt-1 font-serif text-2xl leading-snug font-medium">
                      {stage.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-pressed={done.includes(stage.id)}
                    onClick={() => toggle(stage.id)}
                    className={`no-print inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-3 text-sm ${
                      done.includes(stage.id)
                        ? "border-pine bg-pine-soft text-pine"
                        : "border-line text-muted"
                    }`}
                  >
                    <Check className="size-4" aria-hidden />
                    {done.includes(stage.id) ? "Đã tu" : "Đánh dấu"}
                  </button>
                </div>
                <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                  <div>
                    <dt className="text-muted">Công phu</dt>
                    <dd className="mt-1">{stage.work}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Mục</dt>
                    <dd className="mt-1">{stage.aim}</dd>
                  </div>
                </dl>
                <ul className="mt-4 flex flex-col gap-1 text-sm text-muted">
                  {stage.notes.map((note) => (
                    <li key={note}>— {note}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="sau-nut" className="mt-16">
          <h2 className="font-serif text-3xl font-medium">Mười hai bước mở sáu nút</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Mỗi căn hai bước: khai rồi chứng. Không kéo hai đầu nút. Nhĩ căn là
            cửa làm trước; căn nào còn cột thì ở lại căn đó.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {knots.map((knot) => (
              <article
                key={knot.id}
                className="print-break rounded-xl border border-line bg-paper p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-pine">Bước {knot.n}</p>
                    <h3 className="mt-1 font-serif text-2xl font-medium">{knot.root}</h3>
                  </div>
                  <button
                    type="button"
                    aria-pressed={done.includes(knot.id)}
                    onClick={() => toggle(knot.id)}
                    className={`no-print inline-flex size-11 items-center justify-center rounded-full border ${
                      done.includes(knot.id)
                        ? "border-pine bg-pine-soft text-pine"
                        : "border-line text-muted"
                    }`}
                    aria-label={done.includes(knot.id) ? "Bỏ đánh dấu" : "Đánh dấu đã mở"}
                  >
                    <Check className="size-4" aria-hidden />
                  </button>
                </div>
                <p className="mt-4 text-sm">
                  <span className="text-muted">Khai. </span>
                  {knot.open}
                </p>
                <p className="mt-2 text-sm">
                  <span className="text-muted">Chứng. </span>
                  {knot.prove}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="gian-do" className="mt-16 print-break">
          <h2 className="font-serif text-3xl font-medium">Giản đồ</h2>
          <div className="mt-6 rounded-xl border border-line bg-paper p-5 md:p-8">
            <p className="text-center font-serif text-xl">Khai quang chung</p>
            <div className="mx-auto my-3 h-6 w-px bg-line" />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-cinnabar-soft p-4">
                <p className="text-sm font-medium text-cinnabar">Tính Mệnh Khuê Chỉ</p>
                <ol className="mt-3 flex flex-col gap-2 text-sm">
                  <li>Hanh 1 → 2 → 3</li>
                  <li>Lợi 4 → 5 → 6</li>
                  <li>Trinh 7 → 8 → 9</li>
                </ol>
              </div>
              <div className="rounded-lg bg-pine-soft p-4">
                <p className="text-sm font-medium text-pine">Mở sáu nút</p>
                <ol className="mt-3 flex flex-col gap-2 text-sm">
                  <li>Nhãn 01–02</li>
                  <li>Nhĩ 03–04 — cửa chính</li>
                  <li>Tỷ, thiệt, thân, ý 05–12</li>
                </ol>
              </div>
            </div>
            <div className="mx-auto my-3 h-6 w-px bg-line" />
            <p className="text-center font-serif text-xl">Nhất tâm / thái hư</p>
            <p className="mt-2 text-center text-sm text-muted">
              Sáu mở thì một cũng không còn chỗ gọi.
            </p>
          </div>
        </section>

        <section id="ngay" className="mt-16 mb-10 print-break">
          <h2 className="font-serif text-3xl font-medium">Một ngày</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Khai quang năm đến mười phút.",
              "Một tiết Khuê Chỉ đúng trình độ đang đứng.",
              "Một nút, ưu tiên nhĩ căn nếu chưa thông.",
              "Ngồi vô niệm vài phút. Ghi cảm ứng, không chấp.",
            ].map((line, i) => (
              <li key={line} className="flex gap-4 rounded-xl border border-line bg-paper p-4">
                <BookOpen className="mt-0.5 size-5 shrink-0 text-cinnabar" aria-hidden />
                <span>
                  <span className="text-muted">{i + 1}. </span>
                  {line}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Song tu tính và mệnh. Không nhảy tiết. Thần thông và cảnh không phải
            thước đo. Chi tiết hỏa hầu, thái dược cần thầy; trang này chỉ giữ thứ
            tự và chỗ dừng.
          </p>
        </section>
      </main>
    </div>
  );
}

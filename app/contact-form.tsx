'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

type FieldName = 'name' | 'company' | 'email';
type FormErrors = Partial<Record<FieldName, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  function clearError(field: FieldName) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setSuccess(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: FormErrors = {};
    const name = String(data.get('name') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();

    if (!name) nextErrors.name = 'お名前を入力してください。';
    if (!company) nextErrors.company = '会社名を入力してください。';
    if (!email) {
      nextErrors.email = 'メールアドレスを入力してください。';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = '正しい形式のメールアドレスを入力してください。';
    }

    setErrors(nextErrors);
    setSuccess(false);

    const firstInvalid = (['name', 'company', 'email'] as FieldName[]).find(
      (field) => nextErrors[field],
    );
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    form.reset();
    setSuccess(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 && (
        <div className="form-error-summary" role="alert">
          入力されていない必須項目があります。赤く表示された項目をご確認ください。
        </div>
      )}

      {success && (
        <div className="form-success" role="status" aria-live="polite">
          <CheckCircle2 />
          <div>
            <strong>ご登録ありがとうございます。</strong>
            <p>内容を確認のうえ、2営業日以内に担当者よりご連絡します。</p>
          </div>
        </div>
      )}

      <label className={errors.name ? 'field-error' : ''}>
        お名前<span>必須</span>
        <input
          name="name"
          placeholder="例）山田 太郎"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onChange={() => clearError('name')}
        />
        {errors.name && <small className="field-error-message" id="name-error">{errors.name}</small>}
      </label>

      <label className={errors.company ? 'field-error' : ''}>
        会社名<span>必須</span>
        <input
          name="company"
          placeholder="例）株式会社ストライド"
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? 'company-error' : undefined}
          onChange={() => clearError('company')}
        />
        {errors.company && <small className="field-error-message" id="company-error">{errors.company}</small>}
      </label>

      <label className={errors.email ? 'field-error' : ''}>
        メールアドレス<span>必須</span>
        <input
          name="email"
          type="email"
          placeholder="example@company.jp"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onChange={() => clearError('email')}
        />
        {errors.email && <small className="field-error-message" id="email-error">{errors.email}</small>}
      </label>

      <label>
        ご相談内容<span>任意</span>
        <textarea name="message" rows={4} placeholder="課題感やご希望をお聞かせください" />
      </label>

      <button type="submit">無料相談を申し込む <ArrowUpRight /></button>
      <small>このフォームは動作確認用のため、入力内容は外部へ送信・保存されません。</small>
    </form>
  );
}

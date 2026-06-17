import type { Category } from '@/lib/types';

const emailMarketing: Category = {
  id: 'email-marketing',
  label: { en: 'Email Campaign', ar: 'حملة بريد إلكتروني' },
  description: { en: 'Write compelling marketing emails', ar: 'اكتب رسائل بريد إلكتروني تسويقية مقنعة' },
  icon: '✉️',
  questions: [
    {
      id: 'email_type',
      type: 'single',
      label: { en: 'Email Type', ar: 'نوع البريد الإلكتروني' },
      options: [
        { id: 'newsletter', label: { en: 'Newsletter', ar: 'النشرة الإخبارية' } },
        { id: 'promo', label: { en: 'Promotional', ar: 'ترويجي' } },
        { id: 'welcome', label: { en: 'Welcome Email', ar: 'بريد الترحيب' } },
        { id: 'reengagement', label: { en: 'Re-engagement', ar: 'إعادة التفاعل' } },
      ],
    },
    {
      id: 'audience',
      type: 'text',
      label: { en: 'Target Audience', ar: 'الجمهور المستهدف' },
      placeholder: { en: 'e.g. existing customers, leads who signed up last month…', ar: 'مثال: العملاء الحاليون، المهتمون الذين سجلوا الشهر الماضي…' },
      required: true,
    },
    {
      id: 'offer',
      type: 'text',
      label: { en: 'Main Offer or Message', ar: 'العرض أو الرسالة الرئيسية' },
      placeholder: { en: 'e.g. 30% off summer collection, free trial for 14 days…', ar: 'مثال: خصم 30٪ على مجموعة الصيف، تجربة مجانية لمدة 14 يوماً…' },
      required: true,
    },
    {
      id: 'tone',
      type: 'single',
      label: { en: 'Tone', ar: 'الأسلوب' },
      options: [
        { id: 'formal', label: { en: 'Formal', ar: 'رسمي' } },
        { id: 'conversational', label: { en: 'Conversational', ar: 'محادثة' } },
        { id: 'urgent', label: { en: 'Urgent / FOMO', ar: 'عاجل / خوف من الفوات' } },
      ],
    },
    {
      id: 'subject_line',
      type: 'toggle',
      label: { en: 'Generate subject line suggestions', ar: 'اقتراح سطور موضوع' },
    },
  ],
  templates: {
    en: `Write a {{tone}} {{email_type}} email for {{audience}}.

Main message / offer: {{offer}}

{{subject_line}}

Include a clear call-to-action and structure the email with a compelling opening, body, and closing.`,
    ar: `اكتب بريداً إلكترونياً {{tone}} من نوع {{email_type}} موجهاً إلى {{audience}}.

الرسالة / العرض الرئيسي: {{offer}}

{{subject_line}}

أضف دعوة واضحة للعمل وهيكل البريد الإلكتروني بمقدمة جذابة وجسم ونهاية.`,
  },
};

export default emailMarketing;

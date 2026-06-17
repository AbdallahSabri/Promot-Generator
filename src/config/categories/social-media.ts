import type { Category } from '@/lib/types';

const socialMedia: Category = {
  id: 'social-media',
  label: { en: 'Social Media Post', ar: 'منشور وسائل التواصل الاجتماعي' },
  description: { en: 'Create engaging social media content', ar: 'أنشئ محتوى جذاباً لوسائل التواصل' },
  icon: '📱',
  questions: [
    {
      id: 'platform',
      type: 'single',
      label: { en: 'Platform', ar: 'المنصة' },
      options: [
        { id: 'instagram', label: { en: 'Instagram', ar: 'إنستغرام' } },
        { id: 'twitter', label: { en: 'X / Twitter', ar: 'إكس / تويتر' } },
        { id: 'linkedin', label: { en: 'LinkedIn', ar: 'لينكد إن' } },
        { id: 'facebook', label: { en: 'Facebook', ar: 'فيسبوك' } },
      ],
    },
    {
      id: 'goal',
      type: 'single',
      label: { en: 'Post Goal', ar: 'هدف المنشور' },
      options: [
        { id: 'awareness', label: { en: 'Brand Awareness', ar: 'الوعي بالعلامة التجارية' } },
        { id: 'engagement', label: { en: 'Engagement', ar: 'التفاعل' } },
        { id: 'leads', label: { en: 'Lead Generation', ar: 'توليد العملاء المحتملين' } },
        { id: 'sales', label: { en: 'Sales / Conversion', ar: 'المبيعات / التحويل' } },
      ],
    },
    {
      id: 'tone',
      type: 'single',
      label: { en: 'Tone of Voice', ar: 'أسلوب الصوت' },
      options: [
        { id: 'professional', label: { en: 'Professional', ar: 'احترافي' } },
        { id: 'casual', label: { en: 'Casual & Friendly', ar: 'غير رسمي وودي' } },
        { id: 'humorous', label: { en: 'Humorous', ar: 'فكاهي' } },
        { id: 'inspirational', label: { en: 'Inspirational', ar: 'ملهم' } },
      ],
    },
    {
      id: 'topic',
      type: 'text',
      label: { en: 'What is the post about?', ar: 'موضوع المنشور' },
      placeholder: { en: 'e.g. launching a new product, an upcoming event…', ar: 'مثال: إطلاق منتج جديد، حدث قادم…' },
      required: true,
    },
    {
      id: 'cta',
      type: 'toggle',
      label: { en: 'Include a Call-to-Action', ar: 'تضمين دعوة للعمل' },
    },
    {
      id: 'hashtags',
      type: 'toggle',
      label: { en: 'Suggest relevant hashtags', ar: 'اقتراح وسوم ذات صلة' },
    },
    {
      id: 'extras',
      type: 'multi',
      label: { en: 'Extra elements', ar: 'عناصر إضافية' },
      options: [
        { id: 'emoji', label: { en: 'Use emojis', ar: 'استخدام الإيموجي' } },
        { id: 'hook', label: { en: 'Strong opening hook', ar: 'افتتاحية جذابة' } },
        { id: 'story', label: { en: 'Storytelling format', ar: 'أسلوب سرد القصص' } },
      ],
    },
  ],
  templates: {
    en: `Write a {{tone}} social media post for {{platform}} aimed at {{goal}}.

Topic: {{topic}}

{{cta}}
{{hashtags}}
{{extras}}

The post should be optimized for {{platform}} best practices.`,
    ar: `اكتب منشوراً بأسلوب {{tone}} لمنصة {{platform}} يستهدف {{goal}}.

الموضوع: {{topic}}

{{cta}}
{{hashtags}}
{{extras}}

يجب أن يكون المنشور محسّناً لأفضل ممارسات {{platform}}.`,
  },
};

export default socialMedia;

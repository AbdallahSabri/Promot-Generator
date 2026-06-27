import type { Category } from '@/lib/types';

const clincura: Category = {
  id: 'clincura',
  label: { en: 'Clincura', ar: 'كلينكيورا' },
  description: { en: 'Generate prompts for Clincura product decisions', ar: 'أنشئ برومبتات لقرارات منتج كلينكيورا' },
  icon: '🏥',
  questions: [
    {
      id: 'role',
      type: 'multi',
      label: { en: 'Your Role', ar: 'دورك' },
      options: [
        { id: 'ceo', label: { en: 'CEO', ar: 'الرئيس التنفيذي' } },
        { id: 'cto', label: { en: 'CTO', ar: 'مدير التقنية' } },
        { id: 'coo', label: { en: 'COO', ar: 'مدير العمليات' } },
        { id: 'cmo', label: { en: 'CMO', ar: 'مدير التسويق' } },
        { id: 'cpo', label: { en: 'CPO', ar: 'مدير المنتج' } },
        { id: 'cfo', label: { en: 'CFO', ar: 'المدير المالي' } },
      ],
    },
    {
      id: 'module',
      type: 'multi',
      label: { en: 'Module', ar: 'الوحدة' },
      options: [
        { id: 'new_module', label: { en: 'New Module', ar: 'وحدة جديدة' } },
        { id: 'auth', label: { en: 'Auth & Access Control', ar: 'المصادقة والصلاحيات' } },
        { id: 'patients', label: { en: 'Patients', ar: 'المرضى' } },
        { id: 'visits', label: { en: 'Visits', ar: 'الزيارات' } },
        { id: 'appointments', label: { en: 'Appointments', ar: 'المواعيد' } },
        { id: 'billing', label: { en: 'Billing & Invoicing', ar: 'الفواتير والمدفوعات' } },
        { id: 'reports', label: { en: 'Reports & Analytics', ar: 'التقارير والتحليلات' } },
        { id: 'notifications', label: { en: 'Notifications', ar: 'الإشعارات' } },
        { id: 'settings', label: { en: 'Settings', ar: 'الإعدادات' } },
      ],
    },
    {
      id: 'action',
      type: 'single',
      label: { en: 'Action', ar: 'الإجراء' },
      options: [
        { id: 'enhance', label: { en: 'Enhance', ar: 'تحسين' } },
        { id: 'suggest', label: { en: 'Suggest', ar: 'اقتراح' } },
        { id: 'remove', label: { en: 'Remove', ar: 'إزالة' } },
        { id: 'update', label: { en: 'Update', ar: 'تحديث' } },
        { id: 'design', label: { en: 'Design', ar: 'تصميم' } },
        { id: 'audit', label: { en: 'Audit', ar: 'مراجعة' } },
        { id: 'prioritize', label: { en: 'Prioritize', ar: 'ترتيب الأولويات' } },
      ],
    },
    {
      id: 'tune',
      type: 'single',
      label: { en: 'Tone', ar: 'الأسلوب' },
      options: [
        { id: 'serious', label: { en: 'Serious', ar: 'جاد' } },
        { id: 'strict', label: { en: 'Strict', ar: 'صارم' } },
        { id: 'analytical', label: { en: 'Analytical', ar: 'تحليلي' } },
        { id: 'collaborative', label: { en: 'Collaborative', ar: 'تعاوني' } },
        { id: 'visionary', label: { en: 'Visionary', ar: 'استراتيجي بعيد المدى' } },
      ],
    },
    {
      id: 'details',
      type: 'text',
      label: { en: 'Additional Details', ar: 'تفاصيل إضافية' },
      placeholder: {
        en: 'Describe the specific problem, context, or goal you want to address…',
        ar: 'صف المشكلة أو السياق أو الهدف الذي تريد معالجته…',
      },
      required: false,
    },
  ],
  templates: {
    en: `You are acting as the {{role}} of Clincura, a healthcare SaaS platform.

Module in focus: {{module}}
Action required: {{action}}
Tone: {{tune}}

{{details}}

Provide a clear, structured response that addresses the above from a {{role}} perspective, keeping in mind clinical workflows, user experience, and business impact.`,
    ar: `أنت تؤدي دور {{role}} في منصة كلينكيورا، وهي منصة SaaS للرعاية الصحية.

الوحدة المستهدفة: {{module}}
الإجراء المطلوب: {{action}}
الأسلوب: {{tune}}

{{details}}

قدّم استجابة واضحة ومنظمة تعالج ما سبق من منظور {{role}}، مع مراعاة سير العمل السريري وتجربة المستخدم والأثر التجاري.`,
  },
};

export default clincura;

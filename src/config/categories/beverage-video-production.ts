import type { Category } from '@/lib/types';

const beverageVideoProduction: Category = {
  id: 'beverage-video-production',
  label: {
    en: 'AI Beverage Video Production',
    ar: 'إنتاج فيديو مشروبات بالذكاء الاصطناعي',
  },
  description: {
    en: 'Generate a production-ready prompt for an AI video of a beverage product (drinks, coffee, mocktails, packaged goods) — lock packaging and label fidelity while varying the hero action, state cues, light, and motion.',
    ar: 'أنشئ برومبتًا جاهزًا للإنتاج لفيديو منتج مشروبات بالذكاء الاصطناعي (مشروبات، قهوة، موكتيل، منتجات معبّأة) — يثبّت دقة العبوة والملصق مع تغيير الحركة الأساسية ومؤشرات الحالة والإضاءة والحركة.',
  },
  icon: '🥤',
  questions: [
    // ── 0. Role ────────────────────────────────────────────────────────────
    {
      id: 'role',
      type: 'multi',
      label: { en: 'Role(s) to act as', ar: 'الدور/الأدوار المطلوب تقمّصها' },
      required: true,
      joinWith: { en: ' and ', ar: ' و ' },
      default: ['food_beverage_stylist'],
      options: [
        {
          id: 'food_beverage_stylist',
          label: { en: 'a food & beverage stylist', ar: 'مصمّمًا للطعام والمشروبات' },
        },
        {
          id: 'commercial_director',
          label: { en: 'a commercial product director', ar: 'مخرجًا لإعلانات المنتجات' },
        },
        {
          id: 'ai_prompt_engineer',
          label: { en: 'an AI video prompt engineer', ar: 'مهندسًا لبرومبتات الفيديو بالذكاء الاصطناعي' },
        },
        {
          id: 'cgi_3d_artist',
          label: { en: 'a CGI / 3D product artist', ar: 'فنانًا للمنتجات ثلاثية الأبعاد / CGI' },
        },
        {
          id: 'cinematographer',
          label: { en: 'a cinematographer', ar: 'مديرًا للتصوير السينمائي' },
        },
        {
          id: 'art_director',
          label: { en: 'an art director', ar: 'مديرًا فنيًا' },
        },
        {
          id: 'colorist',
          label: { en: 'a colorist', ar: 'خبيرًا في تصحيح الألوان' },
        },
        {
          id: 'creative_producer',
          label: { en: 'a creative producer', ar: 'منتجًا إبداعيًا' },
        },
      ],
    },

    // ── 1. Product fidelity (the hero) ─────────────────────────────────────
    {
      id: 'product_conditioning',
      type: 'single',
      label: { en: 'Product reference method', ar: 'طريقة مرجعية المنتج' },
      help: {
        en: 'Feed the product as image conditioning — not a text description — to keep packaging, shape, and label exact.',
        ar: 'قدّم المنتج كتكييف صوري وليس وصفًا نصيًا للحفاظ على دقة العبوة والشكل والملصق.',
      },
      required: true,
      default: 'packshot_i2v',
      options: [
        {
          id: 'packshot_i2v',
          label: {
            en: 'image-to-video from a real product packshot — highest fidelity',
            ar: 'من صورة إلى فيديو من صورة منتج حقيقية — أعلى دقة',
          },
        },
        {
          id: 'reference_element',
          label: {
            en: 'reference-element conditioning from a product shot',
            ar: 'تكييف بعنصر مرجعي من صورة المنتج',
          },
        },
        {
          id: 'text_only',
          label: {
            en: 'text description only — never for label / logo',
            ar: 'وصف نصي فقط — لا يُستخدم للملصق / الشعار',
          },
        },
        {
          id: 'hybrid_composite',
          label: {
            en: 'hybrid — composite the real packaging / label in post',
            ar: 'هجين — دمج العبوة / الملصق الحقيقي في مرحلة المعالجة',
          },
        },
      ],
    },
    {
      id: 'product_type',
      type: 'single',
      label: { en: 'Beverage type', ar: 'نوع المشروب' },
      help: {
        en: 'Beverage type drives the state cues, physics, and lighting choices downstream.',
        ar: 'نوع المشروب يقود مؤشرات الحالة والفيزياء وخيارات الإضاءة لاحقًا.',
      },
      required: true,
      default: 'cold_drink',
      options: [
        { id: 'cold_drink', label: { en: 'cold drink (soda, juice, water)', ar: 'مشروب بارد (مياه غازية، عصير، ماء)' } },
        { id: 'hot_beverage', label: { en: 'hot beverage (coffee, tea)', ar: 'مشروب ساخن (قهوة، شاي)' } },
        { id: 'alcohol_free_cocktail', label: { en: 'mocktail / mixed drink', ar: 'موكتيل / مشروب مخلوط' } },
        { id: 'energy_sport', label: { en: 'energy / sports drink', ar: 'مشروب طاقة / رياضي' } },
        { id: 'dairy_shake', label: { en: 'dairy / milkshake / smoothie', ar: 'حليب / ميلك شيك / سموذي' } },
        { id: 'packaged_snack', label: { en: 'packaged snack / branded CPG', ar: 'وجبة خفيفة معبّأة / منتج مُعبَّأ' } },
        { id: 'cosmetic_bottle', label: { en: 'cosmetic / bottle product', ar: 'منتج تجميلي / عبوة' } },
        { id: 'other', label: { en: 'other packaged beverage', ar: 'مشروب معبّأ آخر' } },
      ],
    },
    {
      id: 'packaging_material',
      type: 'single',
      label: { en: 'Packaging material', ar: 'مادة العبوة' },
      help: {
        en: 'Material decides how light behaves — reflections, transparency, and highlights differ per surface. Backlight glass/liquids; rim-light cans.',
        ar: 'المادة تحدّد سلوك الضوء — الانعكاسات والشفافية والإبرازات تختلف حسب السطح. إضاءة خلفية للزجاج/السوائل؛ إضاءة حافة للعلب.',
      },
      required: true,
      default: 'glass_bottle',
      options: [
        { id: 'glass_bottle', label: { en: 'glass bottle', ar: 'زجاجة' } },
        { id: 'aluminum_can', label: { en: 'aluminum can', ar: 'علبة ألمنيوم' } },
        { id: 'plastic_bottle', label: { en: 'plastic bottle (opaque / clear)', ar: 'زجاجة بلاستيك (مغلقة / شفافة)' } },
        { id: 'foil_wrapper', label: { en: 'foil wrapper', ar: 'غلاف فويل' } },
        { id: 'paper_carton', label: { en: 'paper carton / box', ar: 'عبوة ورقية / علبة' } },
        { id: 'pouch', label: { en: 'pouch / sachet', ar: 'كيس / ظرف' } },
        { id: 'jar', label: { en: 'jar / tub', ar: 'برطمان / علبة' } },
        { id: 'served_glass', label: { en: 'served in a glass (no packaging)', ar: 'مُقدَّم في كوب (بلا تغليف)' } },
      ],
    },
    {
      id: 'product_color',
      type: 'text',
      options: [
        { id: 'from attached image',      color: '#1C1C1C', label: { en: 'IMG',         ar: 'من الصورة'          } },
        { id: 'auto-extract dominant brand colors from the uploaded product image', color: '#8FA8BF', label: { en: 'Extract',    ar: 'استخراج'           } },
        { id: 'Black (#1C1C1C)',          color: '#1C1C1C', label: { en: 'B',         ar: 'أسود'          } },
        { id: 'White (#FAFAFA)',          color: '#FAFAFA', label: { en: 'W',         ar: 'أبيض'          } },
        { id: 'Red (#C0392B)',            color: '#C0392B', label: { en: 'Red',           ar: 'أحمر'          } },
        { id: 'Crimson (#A4161A)',        color: '#A4161A', label: { en: 'Crimson',       ar: 'قرمزي'         } },
        { id: 'Orange (#E8735A)',         color: '#E8735A', label: { en: 'Orange',        ar: 'برتقالي'       } },
        { id: 'Amber (#C5A028)',          color: '#C5A028', label: { en: 'Amber',         ar: 'كهرماني'       } },
        { id: 'Gold (#C5A028)',           color: '#C5A028', label: { en: 'Gold',          ar: 'ذهبي'          } },
        { id: 'Yellow (#E1A100)',         color: '#E1A100', label: { en: 'Yellow',        ar: 'أصفر'          } },
        { id: 'Lime (#87A878)',           color: '#87A878', label: { en: 'Lime',          ar: 'ليموني'        } },
        { id: 'Green (#2D9B6F)',          color: '#2D9B6F', label: { en: 'Green',         ar: 'أخضر'          } },
        { id: 'Teal (#2A9D8F)',           color: '#2A9D8F', label: { en: 'Teal',          ar: 'أزرق مخضر'    } },
        { id: 'Royal Blue (#2E52A3)',     color: '#2E52A3', label: { en: 'Royal Blue',    ar: 'أزرق ملكي'    } },
        { id: 'Navy Blue (#1B2A4A)',      color: '#1B2A4A', label: { en: 'Navy Blue',     ar: 'أزرق داكن'    } },
        { id: 'Purple (#6A4C93)',         color: '#6A4C93', label: { en: 'Purple',        ar: 'بنفسجي'        } },
        { id: 'Pink (#F4C2C2)',           color: '#F4C2C2', label: { en: 'Pink',          ar: 'وردي'          } },
        { id: 'Brown (#6F4E37)',          color: '#6F4E37', label: { en: 'Brown',         ar: 'بني'           } },
        { id: 'Cream (#F8F5F0)',          color: '#F8F5F0', label: { en: 'Cream',         ar: 'كريمي'         } },
        { id: 'Silver (#C0C0C0)',         color: '#C0C0C0', label: { en: 'Silver',        ar: 'فضي'           } },
      ],
      label: {
        en: 'Exact brand / product color (hex / Pantone)',
        ar: 'لون العلامة / المنتج الدقيق (Hex / Pantone)',
      },
      help: {
        en: 'Define the exact color so light/background cannot shift it (e.g. brand red → orange).',
        ar: 'حدّد اللون الدقيق حتى لا تغيّره الإضاءة/الخلفية (مثل أحمر العلامة ← برتقالي).',
      },
      placeholder: {
        en: 'e.g. Pantone 485 C Red, #C8102E…',
        ar: 'مثال: Pantone 485 C أحمر، #C8102E…',
      },
      required: true,
    },
    {
      id: 'label_handling',
      type: 'single',
      label: { en: 'Label & logo handling', ar: 'معالجة الملصق والشعار' },
      help: {
        en: 'AI mangles small text and logos. Decide how to protect label legibility and brand marks.',
        ar: 'الذكاء الاصطناعي يشوّه النصوص الصغيرة والشعارات. حدّد كيفية حماية وضوح الملصق وعلامات العلامة التجارية.',
      },
      required: true,
      default: 'composite_real_label',
      options: [
        {
          id: 'composite_real_label',
          label: {
            en: 'composite the real label / logo in post — safest for text',
            ar: 'دمج الملصق / الشعار الحقيقي في المعالجة — الأأمن للنص',
          },
        },
        {
          id: 'keep_from_reference',
          label: {
            en: 'preserve label exactly from the reference image',
            ar: 'الحفاظ على الملصق تمامًا من الصورة المرجعية',
          },
        },
        {
          id: 'logo_only',
          label: {
            en: 'keep logo legible, allow minor label blur',
            ar: 'إبقاء الشعار واضحًا مع السماح بضبابية طفيفة للملصق',
          },
        },
        {
          id: 'label_turned_away',
          label: {
            en: 'turn fine print away from camera to avoid garbled text',
            ar: 'توجيه النص الدقيق بعيدًا عن الكاميرا لتفادي تشوّه النص',
          },
        },
      ],
    },
    {
      id: 'non_negotiable_details',
      type: 'multi',
      label: {
        en: 'Non-negotiable product details',
        ar: 'تفاصيل المنتج غير القابلة للتغيير',
      },
      help: {
        en: 'Details that must be preserved exactly — these flicker or re-invent most in motion.',
        ar: 'التفاصيل التي يجب الحفاظ عليها تمامًا — وهي الأكثر وميضًا أو إعادة اختراعًا أثناء الحركة.',
      },
      required: true,
      options: [
        { id: 'logo', label: { en: 'logo', ar: 'الشعار' } },
        { id: 'label_text', label: { en: 'label typography', ar: 'خط الملصق' } },
        { id: 'brand_colors', label: { en: 'exact brand colors', ar: 'ألوان العلامة الدقيقة' } },
        { id: 'packaging_shape', label: { en: 'packaging shape', ar: 'شكل العبوة' } },
        { id: 'material_finish', label: { en: 'material finish (matte / gloss)', ar: 'تشطيب المادة (مطفي / لامع)' } },
        { id: 'cap_lid', label: { en: 'cap / lid', ar: 'الغطاء' } },
        { id: 'liquid_color', label: { en: 'liquid / content color', ar: 'لون السائل / المحتوى' } },
        { id: 'proportions', label: { en: 'proportions / size ratio', ar: 'النِّسب / حجم العبوة' } },
      ],
    },

    // ── 2. Product state & freshness cues ──────────────────────────────────
    {
      id: 'state_cues',
      type: 'multi',
      label: { en: 'State / freshness cues', ar: 'مؤشرات الحالة / الانتعاش' },
      help: {
        en: 'Cues that signal temperature and freshness: condensation = cold, steam = hot, bubbles = carbonated, gloss = fresh.',
        ar: 'مؤشرات تدل على الحرارة والانتعاش: تكاثف = بارد، بخار = ساخن، فقاعات = غازي، لمعان = طازج.',
      },
      maxSelect: 4,
      required: false,
      options: [
        { id: 'condensation', label: { en: 'condensation droplets', ar: 'قطرات تكاثف' } },
        { id: 'ice', label: { en: 'ice cubes', ar: 'مكعبات ثلج' } },
        { id: 'bubbles', label: { en: 'rising bubbles / fizz', ar: 'فقاعات صاعدة / فوران' } },
        { id: 'steam', label: { en: 'steam / vapor', ar: 'بخار' } },
        { id: 'foam_crema', label: { en: 'foam / crema', ar: 'رغوة / كريما' } },
        { id: 'gloss_sheen', label: { en: 'glossy sheen', ar: 'لمعان' } },
        { id: 'melt', label: { en: 'melt / drip', ar: 'ذوبان / تنقيط' } },
        { id: 'frost', label: { en: 'frost / chill mist', ar: 'صقيع / ضباب بارد' } },
      ],
    },
    {
      id: 'garnish_props',
      type: 'multi',
      label: { en: 'Garnish & supporting props', ar: 'الزينة والإكسسوارات الداعمة' },
      help: {
        en: 'Ingredients and props that frame the hero without stealing focus.',
        ar: 'مكوّنات وإكسسوارات تؤطّر البطل دون أن تسرق التركيز.',
      },
      required: false,
      options: [
        { id: 'citrus', label: { en: 'citrus slices', ar: 'شرائح حمضيات' } },
        { id: 'mint', label: { en: 'mint leaves', ar: 'أوراق نعناع' } },
        { id: 'berries', label: { en: 'berries / fruit', ar: 'توت / فاكهة' } },
        { id: 'coffee_beans', label: { en: 'coffee beans', ar: 'حبوب قهوة' } },
        { id: 'splash', label: { en: 'liquid splash', ar: 'رشّة سائل' } },
        { id: 'ingredients_falling', label: { en: 'ingredients falling into frame', ar: 'مكوّنات تتساقط في الإطار' } },
        { id: 'wrapper', label: { en: 'wrapper / packaging element', ar: 'غلاف / عنصر تغليف' } },
        { id: 'none', label: { en: 'none — clean hero', ar: 'بدون — بطل نظيف' } },
      ],
    },

    // ── 3. Hero action (the money shot) ────────────────────────────────────
    {
      id: 'hero_action',
      type: 'single',
      label: { en: 'Hero action', ar: 'الحركة الأساسية' },
      help: {
        en: 'The single defining moment of the shot — match it to the product and its construction.',
        ar: 'اللحظة الحاسمة الوحيدة في اللقطة — طابقها مع المنتج وبنيته.',
      },
      required: true,
      default: 'slow_rotation',
      options: [
        { id: 'pour', label: { en: 'pour into a glass', ar: 'صبّ في كوب' } },
        { id: 'splash', label: { en: 'splash / liquid impact', ar: 'رشّة / ارتطام سائل' } },
        { id: 'can_opening', label: { en: 'can / bottle opening', ar: 'فتح العلبة / الزجاجة' } },
        { id: 'bubbles_rising', label: { en: 'bubbles rising', ar: 'فقاعات تصعد' } },
        { id: 'steam_curl', label: { en: 'steam curling up', ar: 'تصاعد البخار' } },
        { id: 'unwrap', label: { en: 'unwrap / reveal', ar: 'فك التغليف / الكشف' } },
        { id: 'slow_rotation', label: { en: 'slow product rotation', ar: 'دوران بطيء للمنتج' } },
        { id: 'ingredients_drop', label: { en: 'ingredients / ice dropping in', ar: 'سقوط المكوّنات / الثلج' } },
        { id: 'condensation_form', label: { en: 'condensation forming', ar: 'تشكّل التكاثف' } },
        { id: 'camera_move_static', label: { en: 'camera move over static product', ar: 'حركة كاميرا حول منتج ثابت' } },
      ],
    },

    // ── 4. Scenario & set styling ──────────────────────────────────────────
    {
      id: 'context',
      type: 'single',
      label: { en: 'Context / occasion', ar: 'السياق / المناسبة' },
      help: {
        en: 'Context drives everything downstream; avoid mismatched semiotics (cozy winter vs summer refreshment).',
        ar: 'السياق يقود كل ما يليه؛ تجنّب التضارب الدلالي (شتاء دافئ مقابل انتعاش صيفي).',
      },
      required: true,
      default: 'refreshment',
      options: [
        { id: 'refreshment', label: { en: 'summer refreshment', ar: 'انتعاش صيفي' } },
        { id: 'cozy', label: { en: 'cozy / warm moment', ar: 'لحظة دافئة ومريحة' } },
        { id: 'energetic', label: { en: 'energetic / sporty', ar: 'نشيط / رياضي' } },
        { id: 'premium_luxury', label: { en: 'premium / luxury', ar: 'فاخر / راقٍ' } },
        { id: 'indulgent', label: { en: 'indulgent / treat', ar: 'دلال / متعة' } },
        { id: 'minimal_studio', label: { en: 'minimal studio product shot', ar: 'لقطة منتج استوديو بسيطة' } },
        { id: 'snack_break', label: { en: 'snack break / on-the-go', ar: 'وجبة خفيفة / على الطريق' } },
        { id: 'foodie', label: { en: 'foodie / close-up styling', ar: 'تصوير طعام / فود فوتوغرافي' } },
      ],
    },
    {
      id: 'surface',
      type: 'single',
      label: { en: 'Surface', ar: 'السطح' },
      required: true,
      default: 'marble',
      options: [
        { id: 'marble', label: { en: 'marble', ar: 'رخام' } },
        { id: 'wood', label: { en: 'wood', ar: 'خشب' } },
        { id: 'concrete', label: { en: 'concrete / stone', ar: 'إسمنت / حجر' } },
        { id: 'reflective', label: { en: 'reflective / glossy surface', ar: 'سطح عاكس / لامع' } },
        { id: 'water', label: { en: 'water surface', ar: 'سطح ماء' } },
        { id: 'ice_bed', label: { en: 'bed of ice', ar: 'فراش ثلج' } },
        { id: 'fabric', label: { en: 'fabric / linen', ar: 'قماش / كتان' } },
        { id: 'floating', label: { en: 'floating / no surface', ar: 'طافٍ / بلا سطح' } },
      ],
    },
    {
      id: 'location',
      type: 'single',
      label: { en: 'Location', ar: 'الموقع' },
      required: true,
      default: 'studio',
      options: [
        { id: 'studio', label: { en: 'studio', ar: 'استوديو' } },
        { id: 'kitchen', label: { en: 'kitchen', ar: 'مطبخ' } },
        { id: 'cafe', label: { en: 'café', ar: 'مقهى' } },
        { id: 'bar', label: { en: 'bar counter', ar: 'بار' } },
        { id: 'outdoor_nature', label: { en: 'outdoor / nature', ar: 'خارجي / طبيعة' } },
        { id: 'beach', label: { en: 'beach / poolside', ar: 'شاطئ / جانب مسبح' } },
        { id: 'retail_shelf', label: { en: 'retail shelf', ar: 'رف متجر' } },
        { id: 'abstract_set', label: { en: 'abstract color set', ar: 'خلفية لونية تجريدية' } },
      ],
    },
    {
      id: 'time_of_day',
      type: 'single',
      label: { en: 'Time of day', ar: 'وقت اليوم' },
      required: false,
      default: 'midday',
      options: [
        { id: 'golden_hour', label: { en: 'golden hour', ar: 'الساعة الذهبية' } },
        { id: 'blue_hour', label: { en: 'blue hour', ar: 'الساعة الزرقاء' } },
        { id: 'midday', label: { en: 'midday', ar: 'منتصف النهار' } },
        { id: 'night', label: { en: 'night', ar: 'ليل' } },
      ],
    },

    // ── 5. Background & environment ────────────────────────────────────────
    {
      id: 'background_type',
      type: 'single',
      label: { en: 'Background type', ar: 'نوع الخلفية' },
      required: true,
      default: 'neutral_seamless',
      options: [
        { id: 'neutral_seamless', label: { en: 'neutral seamless backdrop', ar: 'خلفية محايدة متصلة' } },
        { id: 'complementary_color', label: { en: 'complementary-color backdrop', ar: 'خلفية بلون مكمّل' } },
        { id: 'tonal_mono', label: { en: 'tonal monochrome backdrop', ar: 'خلفية أحادية اللون المتدرّج' } },
        { id: 'environmental', label: { en: 'environmental lifestyle setting', ar: 'إعداد بيئي بأسلوب الحياة' } },
        { id: 'gradient', label: { en: 'soft gradient / glow', ar: 'تدرّج ناعم / توهّج' } },
        {
          id: 'textured',
          label: {
            en: 'textured surface (marble / concrete / foliage)',
            ar: 'سطح ذو ملمس (رخام / إسمنت / أوراق)',
          },
        },
      ],
    },
    {
      id: 'background_relationship',
      type: 'single',
      label: {
        en: 'Background color relationship to product',
        ar: 'علاقة لون الخلفية بالمنتج',
      },
      help: {
        en: 'Keep the product legible — avoid it vanishing into the backdrop.',
        ar: 'حافظ على وضوح المنتج — تجنّب اندماجه في الخلفية.',
      },
      required: true,
      default: 'complementary',
      options: [
        { id: 'complementary', label: { en: 'complementary', ar: 'مكمّلة' } },
        { id: 'tonal', label: { en: 'tonal', ar: 'متدرّجة' } },
        { id: 'neutral', label: { en: 'neutral', ar: 'محايدة' } },
      ],
    },
    {
      id: 'shallow_dof',
      type: 'toggle',
      label: {
        en: 'Use shallow depth of field to separate the product from the background',
        ar: 'استخدام عمق ميدان ضحل لفصل المنتج عن الخلفية',
      },
      required: false,
      default: true,
    },

    // ── 6. Lighting logic ──────────────────────────────────────────────────
    {
      id: 'lighting_logic',
      type: 'single',
      label: { en: 'Lighting logic', ar: 'منطق الإضاءة' },
      help: {
        en: 'Always specify quality + direction + temperature; tune to the material (backlight for liquids/glass, rim for cans).',
        ar: 'حدّد دائمًا الجودة + الاتجاه + درجة الحرارة؛ واضبطها حسب المادة (إضاءة خلفية للسوائل/الزجاج، حافة للعلب).',
      },
      required: true,
      default: 'soft_diffused',
      options: [
        { id: 'soft_diffused', label: { en: 'soft diffused light', ar: 'ضوء ناعم منتشر' } },
        { id: 'backlight_liquid', label: { en: 'backlight for liquids / glass', ar: 'إضاءة خلفية للسوائل / الزجاج' } },
        { id: 'golden_hour', label: { en: 'warm golden-hour light', ar: 'ضوء الساعة الذهبية الدافئ' } },
        { id: 'high_key', label: { en: 'high-key clean light', ar: 'إضاءة عالية المفتاح نظيفة' } },
        { id: 'low_key', label: { en: 'low-key dramatic light', ar: 'إضاءة منخفضة المفتاح درامية' } },
        { id: 'hard_directional', label: { en: 'hard directional light', ar: 'ضوء اتجاهي حاد' } },
        { id: 'rim_light', label: { en: 'rim light (for cans / packaging edges)', ar: 'إضاءة حافة (لحواف العلب / العبوات)' } },
      ],
    },
    {
      id: 'material_quality',
      type: 'single',
      label: { en: 'Material quality to reveal', ar: 'خاصية المادة المراد إبرازها' },
      required: true,
      default: 'gloss',
      options: [
        { id: 'gloss', label: { en: 'gloss / highlights', ar: 'اللمعان / الإبرازات' } },
        { id: 'transparency', label: { en: 'transparency (liquid / glass)', ar: 'الشفافية (سائل / زجاج)' } },
        { id: 'condensation_detail', label: { en: 'condensation detail', ar: 'تفاصيل التكاثف' } },
        { id: 'texture', label: { en: 'surface texture', ar: 'ملمس السطح' } },
        { id: 'metallic', label: { en: 'metallic reflection', ar: 'انعكاس معدني' } },
      ],
    },

    // ── 7. Motion & physics ────────────────────────────────────────────────
    {
      id: 'motion_type',
      type: 'single',
      label: { en: 'Motion type', ar: 'نوع الحركة' },
      help: {
        en: 'Match motion to the product: liquids want flow/splash; rigid packaging wants clean rotation or static.',
        ar: 'طابق الحركة مع المنتج: السوائل تحتاج تدفّقًا/رشًا؛ العبوات الصلبة تفضّل دورانًا نظيفًا أو ثباتًا.',
      },
      required: true,
      default: 'subtle_motion',
      options: [
        { id: 'static_hero', label: { en: 'static hero shot', ar: 'لقطة بطل ثابتة' } },
        {
          id: 'subtle_motion',
          label: {
            en: 'subtle motion (drip, steam, slight drift)',
            ar: 'حركة خفيفة (تنقيط، بخار، انجراف خفيف)',
          },
        },
        { id: 'liquid_sim', label: { en: 'liquid simulation (pour / splash)', ar: 'محاكاة سائل (صبّ / رشّ)' } },
        { id: 'product_spin', label: { en: 'product spin / 360', ar: 'دوران المنتج / 360' } },
        { id: 'particle_fx', label: { en: 'particle effects (droplets, bubbles)', ar: 'تأثيرات جسيمات (قطرات، فقاعات)' } },
        {
          id: 'camera_move_static',
          label: { en: 'camera move over static product', ar: 'حركة كاميرا حول منتج ثابت' },
        },
      ],
    },
    {
      id: 'speed_ramp',
      type: 'single',
      label: { en: 'Speed / frame rate', ar: 'السرعة / معدل الإطارات' },
      help: {
        en: 'Slow-motion sells beverage detail — splashes, bubbles, and pours read best at high frame rate.',
        ar: 'الحركة البطيئة تُبرز تفاصيل المشروبات — الرشّات والفقاعات والصبّ تظهر أفضل بمعدل إطارات عالٍ.',
      },
      required: false,
      default: 'slow_motion',
      options: [
        { id: 'slow_motion', label: { en: 'slow motion', ar: 'حركة بطيئة' } },
        { id: 'real_time', label: { en: 'real time', ar: 'زمن حقيقي' } },
        { id: 'speed_ramp', label: { en: 'speed ramp (slow → fast)', ar: 'تدرّج سرعة (بطيء ← سريع)' } },
      ],
    },
    {
      id: 'clip_duration',
      type: 'single',
      label: { en: 'Clip duration', ar: 'مدة المقطع' },
      help: {
        en: 'Keep clips short to limit packaging/label drift.',
        ar: 'أبقِ المقاطع قصيرة للحد من انحراف العبوة/الملصق.',
      },
      required: true,
      default: 'medium',
      options: [
        { id: 'very_short', label: { en: 'very short (2–4 s)', ar: 'قصير جدًا (2–4 ث)' } },
        { id: 'short', label: { en: 'short (4–8 s)', ar: 'قصير (4–8 ث)' } },
        { id: 'medium', label: { en: 'medium (8–10 s)', ar: 'متوسط (8–10 ث)' } },
        { id: 'long', label: { en: 'long (11–15 s)', ar: 'طويل (11–15 ث)' } },
      ],
    },

    // ── 8. Brand coherence ─────────────────────────────────────────────────
    {
      id: 'aspect_ratio',
      type: 'single',
      label: { en: 'Aspect ratio', ar: 'نسبة الأبعاد' },
      help: {
        en: 'Decide upfront and generate native per platform.',
        ar: 'قرّرها مسبقًا وولّد بالنسبة الأصلية لكل منصة.',
      },
      required: true,
      default: '9_16',
      options: [
        { id: '9_16', label: { en: '9:16 (vertical)', ar: '9:16 (عمودي)' } },
        { id: '1_1', label: { en: '1:1 (square)', ar: '1:1 (مربع)' } },
        { id: '4_5', label: { en: '4:5 (portrait)', ar: '4:5 (بورتريه)' } },
        { id: '16_9', label: { en: '16:9 (landscape)', ar: '16:9 (أفقي)' } },
      ],
    },
    {
      id: 'brand_lut',
      type: 'single',
      label: { en: "What's your desired color grading style?", ar: 'ما أسلوب تدرّج الألوان المطلوب؟' },
      help: {
        en: 'A single recurring grade is what makes a campaign read as one brand.',
        ar: 'التدرّج الموحّد المتكرّر هو ما يجعل الحملة تُقرأ كعلامة واحدة.',
      },
      required: false,
      options: [
        { id: 'warm_golden', label: { en: 'Warm & Golden (lifestyle, indulgent)', ar: 'دافئ وذهبي (أسلوب حياة، دلال)' } },
        { id: 'cool_fresh', label: { en: 'Cool & Fresh (refreshing, crisp)', ar: 'بارد ومنعش (انتعاش، نقاء)' } },
        { id: 'moody_high_contrast', label: { en: 'Moody & High Contrast (premium, dramatic)', ar: 'عميق وعالي التباين (فاخر، درامي)' } },
        { id: 'bright_vibrant', label: { en: 'Bright & Vibrant (commercial, energetic)', ar: 'مشرق وزاهي (تجاري، نشيط)' } },
        { id: 'muted_film_like', label: { en: 'Muted & Film-like (artisanal, organic)', ar: 'خافت وشبيه بالفيلم (حرفي، عضوي)' } },
        { id: 'clean_neutral', label: { en: 'Clean & Neutral (no strong grade)', ar: 'نظيف ومحايد (بدون تدرّج قوي)' } },
        { id: 'existing_lut', label: { en: 'We have an existing LUT (upload)', ar: 'لدينا LUT موجود (رفع)' } },
      ],
    },
    {
      id: 'mood_style',
      type: 'multi',
      label: { en: 'Mood / Style Descriptors', ar: 'واصفات المزاج / الأسلوب' },
      help: {
        en: 'Pick up to 3 that match your vision.',
        ar: 'اختر ما يصل إلى 3 تتوافق مع رؤيتك.',
      },
      maxSelect: 3,
      required: false,
      options: [
        { id: 'appetizing', label: { en: 'Appetizing', ar: 'مشهٍّ' } },
        { id: 'cinematic', label: { en: 'Cinematic', ar: 'سينمائي' } },
        { id: 'fresh_crisp', label: { en: 'Fresh & Crisp', ar: 'منعش ونقي' } },
        { id: 'premium', label: { en: 'Premium', ar: 'فاخر' } },
        { id: 'minimalist', label: { en: 'Minimalist', ar: 'بسيط' } },
        { id: 'bold_graphic', label: { en: 'Bold & Graphic', ar: 'جريء وغرافيكي' } },
        { id: 'playful', label: { en: 'Playful / Fun', ar: 'مرح / ممتع' } },
        { id: 'nostalgic_retro', label: { en: 'Nostalgic / Retro', ar: 'نوستالجي / ريترو' } },
        { id: 'energetic', label: { en: 'Energetic', ar: 'نشيط' } },
        { id: 'luxurious', label: { en: 'Luxurious', ar: 'فاخر وراقٍ' } },
      ],
    },

    // ── 9. Camera ──────────────────────────────────────────────────────────
    {
      id: 'camera_shot_size',
      type: 'single',
      label: { en: 'Shot size', ar: 'حجم اللقطة' },
      required: true,
      default: 'close',
      options: [
        { id: 'macro', label: { en: 'macro / extreme close', ar: 'ماكرو / قريبة جدًا' } },
        { id: 'close', label: { en: 'close', ar: 'قريبة' } },
        { id: 'medium', label: { en: 'medium', ar: 'متوسطة' } },
        { id: 'wide', label: { en: 'wide / context', ar: 'واسعة / سياق' } },
      ],
    },
    {
      id: 'camera_angle',
      type: 'single',
      label: { en: 'Camera angle', ar: 'زاوية الكاميرا' },
      required: true,
      default: 'eye',
      options: [
        { id: 'eye', label: { en: 'eye-level', ar: 'مستوى النظر' } },
        { id: 'low', label: { en: 'low hero angle', ar: 'زاوية بطولية منخفضة' } },
        { id: 'high', label: { en: 'high', ar: 'مرتفعة' } },
        { id: 'top_down', label: { en: 'top-down / flat-lay', ar: 'من الأعلى / فلات لاي' } },
      ],
    },
    {
      id: 'lens_feel',
      type: 'single',
      label: { en: 'Lens feel', ar: 'إحساس العدسة' },
      required: false,
      default: 'macro',
      options: [
        {
          id: 'macro',
          label: { en: 'macro', ar: 'ماكرو' },
          description: {
            en: 'extreme close detail of texture, droplets, and surface — strong subject isolation',
            ar: 'تفاصيل قريبة جدًا للملمس والقطرات والسطح — عزل قوي للعنصر',
          },
        },
        {
          id: '50mm',
          label: { en: '50mm', ar: '50 مم' },
          description: {
            en: 'natural perspective close to the human eye, minimal distortion',
            ar: 'منظور طبيعي قريب من رؤية العين البشرية، تشوّه ضئيل',
          },
        },
        {
          id: '85mm',
          label: { en: '85mm', ar: '85 مم' },
          description: {
            en: 'tighter, flattering compression with strong background separation',
            ar: 'ضغط أقرب وأكثر إبرازًا مع فصل قوي عن الخلفية',
          },
        },
      ],
    },
    {
      id: 'camera_movement',
      type: 'single',
      label: { en: 'Camera movement', ar: 'حركة الكاميرا' },
      required: false,
      default: 'push_in',
      options: [
        { id: 'static', label: { en: 'static camera', ar: 'كاميرا ثابتة' } },
        { id: 'orbit', label: { en: 'orbiting camera', ar: 'كاميرا دوّارة' } },
        { id: 'push_in', label: { en: 'push-in', ar: 'اقتراب' } },
        { id: 'pan', label: { en: 'pan', ar: 'تحريك أفقي' } },
        { id: 'dolly', label: { en: 'dolly / tracking', ar: 'دوللي / تتبّع' } },
      ],
    },

    // ── 10. Engine choice ──────────────────────────────────────────────────
    {
      id: 'engine',
      type: 'single',
      label: { en: 'Generation engine', ar: 'محرّك التوليد' },
      help: {
        en: 'Image-to-video wins for packaging/label fidelity; text-to-video for free composition.',
        ar: 'من صورة إلى فيديو أفضل لدقة العبوة/الملصق؛ من نص إلى فيديو للتكوين الحر.',
      },
      required: false,
      default: 'i2v',
      options: [
        { id: 'i2v', label: { en: 'image-to-video', ar: 'من صورة إلى فيديو' } },
        { id: 't2v', label: { en: 'text-to-video', ar: 'من نص إلى فيديو' } },
      ],
    },
  ],
  templates: {
    en: `Act as {{role}}.

Create a beverage product campaign video.

PRODUCT (fixed): {{product_type}} in {{packaging_material}}; conditioned via {{product_conditioning}}; exact brand color: {{product_color}}; label/logo handling: {{label_handling}}; preserve without alteration: {{non_negotiable_details}}.
STATE: show {{state_cues}}; garnish/props: {{garnish_props}}.
HERO ACTION: {{hero_action}}.
SCENARIO: {{context}} context, on a {{surface}} surface, {{location}} setting, {{time_of_day}}.
BACKGROUND: {{background_type}}, with a {{background_relationship}} color relationship to the product. {{shallow_dof}}
LIGHTING: {{lighting_logic}} — reveal the product's {{material_quality}}; specify quality, direction, and color temperature.
MOTION: {{motion_type}} at {{speed_ramp}}; keep the clip {{clip_duration}} to limit drift.
CAMERA: {{camera_shot_size}} shot, {{camera_angle}} angle, {{lens_feel}} lens feel, {{camera_movement}}.
STYLE (fixed): color grade/LUT — {{brand_lut}}; mood — {{mood_style}}; aspect ratio {{aspect_ratio}}.
ENGINE: {{engine}}.

Constraints: keep packaging, label, logo, brand color, color grade, and aspect ratio constant across the campaign. Prioritize label legibility and material fidelity, avoid detail flicker and garbled text, and match motion and physics to the product.`,
    ar: `تصرّف بصفتك {{role}}.

أنشئ فيديو حملة لمنتج مشروبات بالذكاء الاصطناعي.

المنتج (ثابت): {{product_type}} في {{packaging_material}}؛ مُكيَّف عبر {{product_conditioning}}؛ لون العلامة الدقيق: {{product_color}}؛ معالجة الملصق/الشعار: {{label_handling}}؛ مع الحفاظ على هذه التفاصيل دون تغيير: {{non_negotiable_details}}.
الحالة: أظهر {{state_cues}}؛ الزينة/الإكسسوارات: {{garnish_props}}.
الحركة الأساسية: {{hero_action}}.
السيناريو: سياق {{context}}، على سطح {{surface}}، في {{location}}، خلال {{time_of_day}}.
الخلفية: {{background_type}}، بعلاقة لونية {{background_relationship}} مع المنتج. {{shallow_dof}}
الإضاءة: {{lighting_logic}} — مختارة لإبراز {{material_quality}} في المنتج؛ مع تحديد الجودة والاتجاه ودرجة الحرارة.
الحركة: {{motion_type}} بسرعة {{speed_ramp}}؛ مع إبقاء المقطع {{clip_duration}} للحد من الانحراف.
الكاميرا: لقطة {{camera_shot_size}}، زاوية {{camera_angle}}، إحساس عدسة {{lens_feel}}، {{camera_movement}}.
الأسلوب (ثابت): تدرّج الألوان — {{brand_lut}}؛ المزاج — {{mood_style}}؛ نسبة الأبعاد {{aspect_ratio}}.
المحرّك: {{engine}}.

القيود: حافظ على ثبات العبوة والملصق والشعار ولون العلامة وتدرّج الألوان ونسبة الأبعاد عبر الحملة. أعطِ الأولوية لوضوح الملصق ودقة المادة، وتجنّب وميض التفاصيل وتشوّه النص، وطابق الحركة والفيزياء مع المنتج.`,
  },
};

export default beverageVideoProduction;

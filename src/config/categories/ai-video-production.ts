import type { Category } from '@/lib/types';

const aiVideoProduction: Category = {
  id: 'ai-video-production',
  label: {
    en: 'AI Video Production',
    ar: 'إنتاج فيديو بالذكاء الاصطناعي',
  },
  description: {
    en: 'Generate a production-ready prompt for an AI fashion campaign video — lock model identity and garment fidelity while varying scenario, light, and motion.',
    ar: 'أنشئ برومبتًا جاهزًا للإنتاج لفيديو حملة أزياء بالذكاء الاصطناعي — يثبّت هوية العارضة ودقة الفستان مع تغيير السيناريو والإضاءة والحركة.',
  },
  icon: '🎬',
  questions: [
    // ── 0. Role ────────────────────────────────────────────────────────────
    {
      id: 'role',
      type: 'multi',
      label: { en: 'Role(s) to act as', ar: 'الدور/الأدوار المطلوب تقمّصها' },
      required: true,
      joinWith: { en: ' and ', ar: ' و ' },
      default: ['fashion_stylist'],
      options: [
        {
          id: 'fashion_stylist',
          label: { en: 'a fashion stylist', ar: 'مصمّمًا للأزياء' },
        },
        {
          id: 'fashion_creative_director',
          label: { en: 'a fashion creative director', ar: 'مديرًا إبداعيًا للأزياء' },
        },
        {
          id: 'ai_prompt_engineer',
          label: { en: 'an AI video prompt engineer', ar: 'مهندسًا لبرومبتات الفيديو بالذكاء الاصطناعي' },
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

    // ── 1. Visual consistency (model identity) ─────────────────────────────
    {
      id: 'identity_method',
      type: 'single',
      label: { en: 'Model identity method', ar: 'طريقة تثبيت هوية العارضة' },
      help: {
        en: 'Lock one reusable identity before scaled generation to avoid face/skin/proportion drift.',
        ar: 'ثبّت هوية واحدة قابلة لإعادة الاستخدام قبل التوليد الموسّع لتجنّب انحراف الوجه والبشرة والتناسب.',
      },
      required: true,
      default: 'trained_character',
      options: [
        {
          id: 'trained_character',
          label: {
            en: 'trained character model (5–20 photos) — most stable',
            ar: 'نموذج شخصية مُدرَّب (5–20 صورة) — الأكثر ثباتًا',
          },
        },
        {
          id: 'reference_image',
          label: {
            en: 'single reference image + per-generation conditioning',
            ar: 'صورة مرجعية واحدة + تكييف لكل توليد',
          },
        },
        {
          id: 'seed_scaffold',
          label: {
            en: 'fixed seed + identical prompt scaffold',
            ar: 'بذرة ثابتة + قالب برومبت موحّد',
          },
        },
        {
          id: 'real_model',
          label: {
            en: 'real model (AI for restyle/background only)',
            ar: 'عارضة حقيقية (الذكاء الاصطناعي لإعادة التصميم/الخلفية فقط)',
          },
        },
      ],
    },
    {
      id: 'model_roster',
      type: 'single',
      label: { en: 'Roster size', ar: 'عدد العارضات' },
      required: true,
      default: 'single',
      options: [
        {
          id: 'single',
          label: { en: 'single recurring female model', ar: 'عارضة واحدة بحجاب شرعي' },
        },
        {
          id: 'small_roster',
          label: { en: 'small fixed roster', ar: 'مجموعة صغيرة ثابتة كلهن بحجاب شرعي' },
        },
        {
          id: 'single_men',
          label: { en: 'single recurring male model', ar: 'عارض شاب واحد' },
        },
      ],
    },
    {
      id: 'face_visibility',
      type: 'single',
      label: { en: 'Model face status', ar: 'حالة ظهور وجه العارضة' },
      help: {
        en: 'Decide how much of the face shows on screen — affects identity drift risk and modesty requirements.',
        ar: 'حدّد مقدار ظهور الوجه على الشاشة — يؤثر على خطر انحراف الهوية ومتطلبات الحشمة.',
      },
      required: true,
      default: 'fully_visible',
      options: [
        {
          id: 'fully_visible',
          label: { en: 'face fully visible', ar: 'الوجه ظاهر بالكامل' },
        },
        {
          id: 'not_shown_back_to_camera',
          label: { en: 'face not shown — back to camera', ar: 'الوجه غير ظاهر — الظهر للكاميرا' },
        },
        {
          id: 'not_shown_cropped',
          label: { en: 'face not shown — framed out of shot', ar: 'الوجه غير ظاهر — خارج حدود اللقطة' },
        },
        {
          id: 'partially_obscured',
          label: { en: 'partially obscured (hair, hand, angle)', ar: 'محجوب جزئيًا (شعر، يد، زاوية)' },
        },
        {
          id: 'blurred',
          label: { en: 'blurred / anonymized in post', ar: 'مموَّه / مجهول الهوية في المعالجة' },
        },
      ],
    },

    // ── 2. Dress fidelity ──────────────────────────────────────────────────
    {
      id: 'dress_conditioning',
      type: 'single',
      label: { en: 'Garment reference method', ar: 'طريقة مرجعية الفستان' },
      help: {
        en: 'Feed the garment as image conditioning — not a text description — to prevent re-invented details.',
        ar: 'قدّم الفستان كتكييف صوري وليس وصفًا نصيًا لمنع إعادة اختراع التفاصيل.',
      },
      required: true,
      default: 'product_shot_i2v',
      options: [
        {
          id: 'product_shot_i2v',
          label: {
            en: 'image-to-video from a real garment photo — highest fidelity',
            ar: 'من صورة إلى فيديو من صورة فستان حقيقية — أعلى دقة',
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
            en: 'text description only — never for hero details',
            ar: 'وصف نصي فقط — لا يُستخدم للتفاصيل الأساسية',
          },
        },
        {
          id: 'hybrid_composite',
          label: {
            en: 'hybrid — composite the real garment in post',
            ar: 'هجين — دمج الفستان الحقيقي في مرحلة المعالجة',
          },
        },
      ],
    },
    {
      id: 'dress_color',
      type: 'text',
      options: [
        { id: 'from attached image',      color: '#1C1C1C', label: { en: 'IMG',         ar: 'من الصورة'          } },
        { id: 'Black (#1C1C1C)',          color: '#1C1C1C', label: { en: 'B',         ar: 'أسود'          } },
        { id: 'White (#FAFAFA)',          color: '#FAFAFA', label: { en: 'W',         ar: 'أبيض'          } },
        { id: 'Ivory (#F8F5F0)',          color: '#F8F5F0', label: { en: 'Ivory',         ar: 'عاجي'          } },
        { id: 'Nude (#E8D5B7)',           color: '#E8D5B7', label: { en: 'Beige',  ar: 'بيج'   } },
        { id: 'Camel (#C19A6B)',          color: '#C19A6B', label: { en: 'Camel',         ar: 'كاميل'         } },
        { id: 'Lilac (#B794C2)',          color: '#B794C2', label: { en: 'Lilac',         ar: 'ليلكي'         } },
        { id: 'Teal (#2A9D8F)',           color: '#2A9D8F', label: { en: 'Teal',          ar: 'أزرق مخضر'    } },
        { id: 'Gold (#C5A028)',           color: '#C5A028', label: { en: 'Gold',          ar: 'ذهبي'          } },
        { id: 'Champagne (#F7E7CE)',      color: '#F7E7CE', label: { en: 'Champagne',     ar: 'شمبانيا'       } },
        { id: 'Silver (#C0C0C0)',         color: '#C0C0C0', label: { en: 'Silver',        ar: 'فضي'           } },
        { id: 'Dusty Rose (#C9A0A0)',     color: '#C9A0A0', label: { en: 'Dusty Rose',    ar: 'وردي مُعتَّق' } },
        { id: 'Blush Pink (#F4C2C2)',     color: '#F4C2C2', label: { en: 'Blush Pink',    ar: 'وردي فاتح'    } },
        { id: 'Coral (#E8735A)',          color: '#E8735A', label: { en: 'Coral',         ar: 'مرجاني'        } },
        { id: 'Red (#C0392B)',            color: '#C0392B', label: { en: 'Red',           ar: 'أحمر'          } },
        { id: 'Burgundy (#800020)',       color: '#800020', label: { en: 'Burgundy',      ar: 'عنابي'         } },
        { id: 'Royal Blue (#2E52A3)',     color: '#2E52A3', label: { en: 'Royal Blue',    ar: 'أزرق ملكي'    } },
        { id: 'Navy Blue (#1B2A4A)',      color: '#1B2A4A', label: { en: 'Navy Blue',     ar: 'أزرق داكن'    } },
        { id: 'Mustard (#E1A100)',        color: '#E1A100', label: { en: 'Mustard',       ar: 'خردلي'         } },
        { id: 'Sage Green (#87A878)',     color: '#87A878', label: { en: 'Sage',    ar: 'أخضر رمادي'   } },
        { id: 'Emerald Green (#2D9B6F)',  color: '#2D9B6F', label: { en: 'Emerald', ar: 'أخضر زمردي'   } },
      ],
      label: {
        en: 'Exact garment color (hex / Pantone)',
        ar: 'لون الفستان الدقيق (Hex / Pantone)',
      },
      help: {
        en: 'Define the exact color so light/background cannot shift it (e.g. emerald → teal).',
        ar: 'حدّد اللون الدقيق حتى لا تغيّره الإضاءة/الخلفية (مثل الزمردي ← الفيروزي).',
      },
      placeholder: {
        en: 'e.g. Pantone 17-0145 Greenery, #4CAF50…',
        ar: 'مثال: Pantone 17-0145 أخضر، #4CAF50…',
      },
      required: true,
    },
    {
      id: 'reference_image_display',
      type: 'single',
      label: {
        en: 'How should the reference photo appear in the video?',
        ar: 'كيف تريد ظهور الصورة المرجعية في الفيديو؟',
      },
      help: {
        en: 'Decide whether the uploaded garment/model photo itself is shown on-screen, and where.',
        ar: 'حدّد ما إذا كانت الصورة المرفوعة للفستان/العارضة تظهر بنفسها على الشاشة، وأين.',
      },
      required: false,
      default: 'not_shown',
      options: [
        { id: 'not_shown', label: { en: "don't show the image", ar: 'لا تُظهر الصورة' } },
        { id: 'show_beginning', label: { en: 'show it at the beginning of the video', ar: 'أظهرها في بداية الفيديو' } },
        { id: 'show_end', label: { en: 'show it at the end of the video', ar: 'أظهرها في نهاية الفيديو' } },
      ],
    },
    {
      id: 'image_wind_effect',
      type: 'toggle',
      label: {
        en: 'When shown, apply a light wind effect to the image',
        ar: 'عند ظهور الصورة، طبّق تأثير ريح خفيف عليها',
      },
      required: false,
      default: false,
    },
    {
      id: 'non_negotiable_details',
      type: 'multi',
      label: {
        en: 'Non-negotiable garment details',
        ar: 'تفاصيل الفستان غير القابلة للتغيير',
      },
      help: {
        en: 'Details that must be preserved exactly — these flicker most in motion.',
        ar: 'التفاصيل التي يجب الحفاظ عليها تمامًا — وهي الأكثر وميضًا أثناء الحركة.',
      },
      required: true,
      options: [
        { id: 'embroidery', label: { en: 'embroidery', ar: 'التطريز' } },
        { id: 'beading', label: { en: 'beading', ar: 'الخرز' } },
        { id: 'color_accuracy', label: { en: 'exact color', ar: 'دقة اللون' } },
        { id: 'neckline', label: { en: 'neckline shape', ar: 'شكل خط الرقبة' } },
        { id: 'hemline', label: { en: 'hemline', ar: 'خط الذيل' } },
        { id: 'fabric_texture', label: { en: 'fabric texture', ar: 'ملمس القماش' } },
        { id: 'drape', label: { en: 'drape', ar: 'انسدال القماش' } },
      ],
    },

    // ── 3. Scenario planning ───────────────────────────────────────────────
    {
      id: 'occasion',
      type: 'single',
      label: { en: 'Occasion', ar: 'المناسبة' },
      help: {
        en: 'Occasion drives everything downstream; avoid mismatched semiotics.',
        ar: 'المناسبة تقود كل ما يليها؛ تجنّب التضارب الدلالي.',
      },
      required: true,
      default: 'formal',
      options: [
        { id: 'casual', label: { en: 'casual', ar: 'غير رسمية' } },
        { id: 'cocktail', label: { en: 'cocktail', ar: 'كوكتيل' } },
        { id: 'formal', label: { en: 'formal', ar: 'رسمية' } },
        { id: 'bridal', label: { en: 'bridal', ar: 'زفاف' } },
        { id: 'editorial', label: { en: 'editorial / avant-garde', ar: 'تحريرية / طليعية' } },
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
        { id: 'home', label: { en: 'home interior', ar: 'داخل المنزل' } },
        { id: 'venue', label: { en: 'event venue', ar: 'قاعة مناسبات' } },
        { id: 'retail', label: { en: 'retail space', ar: 'مساحة تجارية' } },
        { id: 'urban', label: { en: 'urban street', ar: 'شارع حضري' } },
        { id: 'nature', label: { en: 'natural landscape', ar: 'مشهد طبيعي' } },
        { id: 'beach', label: { en: 'beach', ar: 'شاطئ' } },
        { id: 'garden', label: { en: 'garden', ar: 'حديقة' } },
        { id: 'rooftop', label: { en: 'rooftop', ar: 'سطح مبنى' } },
        { id: 'staircase', label: { en: 'grand staircase', ar: 'سلّم فاخر' } },
        { id: 'art_gallery', label: { en: 'art gallery', ar: 'صالة عرض فنية' } },
        { id: 'industrial_loft', label: { en: 'industrial loft', ar: 'لوفت صناعي' } },
        { id: 'poolside', label: { en: 'poolside', ar: 'جانب المسبح' } },
        { id: 'desert', label: { en: 'desert', ar: 'صحراء' } },
        { id: 'cafe_restaurant', label: { en: 'café / restaurant', ar: 'مقهى / مطعم' } },
        { id: 'parking_garage', label: { en: 'parking garage', ar: 'مرآب سيارات' } },
        { id: 'old_town_alley', label: { en: 'old town alley', ar: 'حارة في البلدة القديمة' } },
      ],
    },
    {
      id: 'time_of_day',
      type: 'single',
      label: { en: 'Time of day', ar: 'وقت اليوم' },
      required: true,
      default: 'golden_hour',
      options: [
        { id: 'golden_hour', label: { en: 'golden hour', ar: 'الساعة الذهبية' } },
        { id: 'blue_hour', label: { en: 'blue hour', ar: 'الساعة الزرقاء' } },
        { id: 'midday', label: { en: 'midday', ar: 'منتصف النهار' } },
        { id: 'night', label: { en: 'night', ar: 'ليل' } },
      ],
    },
    {
      id: 'season',
      type: 'single',
      label: { en: 'Season', ar: 'الفصل' },
      required: false,
      default: 'summer',
      options: [
        { id: 'spring', label: { en: 'spring', ar: 'ربيع' } },
        { id: 'summer', label: { en: 'summer', ar: 'صيف' } },
        { id: 'autumn', label: { en: 'autumn', ar: 'خريف' } },
        { id: 'winter', label: { en: 'winter', ar: 'شتاء' } },
      ],
    },

    // ── 4. Background & environment ────────────────────────────────────────
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
        en: 'Background color relationship to garment',
        ar: 'علاقة لون الخلفية بالفستان',
      },
      help: {
        en: 'Keep the silhouette legible — avoid the dress vanishing into the backdrop.',
        ar: 'حافظ على وضوح الظل الخارجي — تجنّب اندماج الفستان في الخلفية.',
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
        en: 'Use shallow depth of field to separate the subject from the background',
        ar: 'استخدام عمق ميدان ضحل لفصل العارضة عن الخلفية',
      },
      required: false,
      default: true,
    },

    // ── 5. Lighting logic ──────────────────────────────────────────────────
    {
      id: 'lighting_logic',
      type: 'single',
      label: { en: 'Lighting logic', ar: 'منطق الإضاءة' },
      help: {
        en: 'Always specify quality + direction + temperature.',
        ar: 'حدّد دائمًا الجودة + الاتجاه + درجة الحرارة.',
      },
      required: true,
      default: 'soft_diffused',
      options: [
        { id: 'soft_diffused', label: { en: 'soft diffused light', ar: 'ضوء ناعم منتشر' } },
        { id: 'golden_hour', label: { en: 'warm golden-hour light', ar: 'ضوء الساعة الذهبية الدافئ' } },
        { id: 'high_key', label: { en: 'high-key clean light', ar: 'إضاءة عالية المفتاح نظيفة' } },
        { id: 'low_key', label: { en: 'low-key dramatic light', ar: 'إضاءة منخفضة المفتاح درامية' } },
        { id: 'hard_directional', label: { en: 'hard directional light', ar: 'ضوء اتجاهي حاد' } },
        { id: 'backlight_rim', label: { en: 'backlight / rim light', ar: 'إضاءة خلفية / حافة' } },
      ],
    },
    {
      id: 'fabric_quality',
      type: 'single',
      label: { en: 'Fabric quality to reveal', ar: 'خاصية القماش المراد إبرازها' },
      required: true,
      default: 'drape',
      options: [
        { id: 'sheen', label: { en: 'sheen', ar: 'اللمعان' } },
        { id: 'drape', label: { en: 'drape', ar: 'الانسدال' } },
        { id: 'transparency', label: { en: 'transparency', ar: 'الشفافية' } },
        { id: 'texture', label: { en: 'texture', ar: 'الملمس' } },
      ],
    },

    // ── 6. Motion & poses ──────────────────────────────────────────────────
    {
      id: 'motion_type',
      type: 'single',
      label: { en: 'Motion type', ar: 'نوع الحركة' },
      help: {
        en: 'Match motion to construction: flowing fabrics want motion; beaded/structured want static.',
        ar: 'طابق الحركة مع البنية: الأقمشة المنسدلة تحتاج حركة؛ المزخرفة/المهيكلة تفضّل الثبات.',
      },
      required: true,
      default: 'subtle_motion',
      options: [
        { id: 'static_pose', label: { en: 'static editorial pose', ar: 'وضعية تحريرية ثابتة' } },
        {
          id: 'subtle_motion',
          label: {
            en: 'subtle motion (breath, hair, slight sway)',
            ar: 'حركة خفيفة (تنفّس، شعر، تمايل خفيف)',
          },
        },
        { id: 'walk_runway', label: { en: 'runway walk', ar: 'مشي على المنصة' } },
        { id: 'twirl_spin', label: { en: 'twirl / spin', ar: 'دوران' } },
        { id: 'fabric_wind', label: { en: 'fabric moving in wind', ar: 'قماش يتحرك في مهب الريح' } },
        {
          id: 'camera_move_static',
          label: { en: 'camera move over static subject', ar: 'حركة كاميرا حول عنصر ثابت' },
        },
      ],
    },
    {
      id: 'model_movement',
      type: 'single',
      label: { en: 'Model movement', ar: 'حركة العارضة' },
      help: {
        en: 'Direction and body action of the model within the shot.',
        ar: 'اتجاه وحركة جسد العارضة داخل اللقطة.',
      },
      required: false,
      default: 'walking_toward_camera',
      options: [
        {
          id: 'walking_toward_camera',
          label: { en: 'walking toward the camera', ar: 'تمشي نحو الكاميرا' },
        },
        {
          id: 'walking_away_camera',
          label: { en: 'walking away from the camera', ar: 'تمشي بعيدًا عن الكاميرا' },
        },
        {
          id: 'walking_side_profile',
          label: { en: 'walking past, side profile', ar: 'تمشي من الجانب' },
        },
        {
          id: 'turning_in_place',
          label: { en: 'turning in place to reveal the garment', ar: 'تستدير في مكانها لإظهار الفستان' },
        },
        {
          id: 'looking_over_shoulder',
          label: { en: 'looking back over the shoulder', ar: 'تنظر للخلف فوق الكتف' },
        },
        {
          id: 'adjusting_garment',
          label: { en: 'adjusting the garment with hands', ar: 'تعدّل الفستان بيديها' },
        },
        {
          id: 'hand_through_hair',
          label: { en: 'running a hand through hair', ar: 'تمرّر يدها في شعرها' },
        },
        {
          id: 'sitting_to_standing',
          label: { en: 'rising from a seated position', ar: 'تنهض من وضعية الجلوس' },
        },
        {
          id: 'leaning_against_surface',
          label: { en: 'leaning against a surface', ar: 'تستند إلى سطح قريب' },
        },
      ],
    },
    {
      id: 'clip_duration',
      type: 'single',
      label: { en: 'Clip duration', ar: 'مدة المقطع' },
      help: {
        en: 'Keep clips short to limit identity/detail drift.',
        ar: 'أبقِ المقاطع قصيرة للحد من انحراف الهوية/التفاصيل.',
      },
      required: true,
      default: 'short',
      options: [
        { id: 'short', label: { en: 'short (2–4 s)', ar: 'قصير (2–4 ث)' } },
        { id: 'medium', label: { en: 'medium (5–8 s)', ar: 'متوسط (5–8 ث)' } },
        { id: 'long', label: { en: 'long (9-15 s)', ar: 'طويل (9–15 ث)' } },
      ],
    },

    // ── 7. Brand coherence ─────────────────────────────────────────────────
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
      label: { en: 'What\'s your desired color grading style?', ar: 'ما أسلوب تدرّج الألوان المطلوب؟' },
      help: {
        en: 'A single recurring grade is what makes a campaign read as one brand.',
        ar: 'التدرّج الموحّد المتكرّر هو ما يجعل الحملة تُقرأ كعلامة واحدة.',
      },
      required: false,
      options: [
        {
          id: 'warm_golden',
          label: { en: 'Warm & Golden (lifestyle, luxury)', ar: 'دافئ وذهبي (أسلوب حياة، فخامة)' },
        },
        {
          id: 'cool_desaturated',
          label: { en: 'Cool & Desaturated (editorial, minimal)', ar: 'بارد ومنخفض التشبع (تحريري، بسيط)' },
        },
        {
          id: 'moody_high_contrast',
          label: { en: 'Moody & High Contrast (cinematic, dramatic)', ar: 'عميق وعالي التباين (سينمائي، درامي)' },
        },
        {
          id: 'bright_vibrant',
          label: { en: 'Bright & Vibrant (commercial, energetic)', ar: 'مشرق وزاهي (تجاري، نشيط)' },
        },
        {
          id: 'muted_film_like',
          label: { en: 'Muted & Film-like (vintage, organic)', ar: 'خافت وشبيه بالفيلم (كلاسيكي، عضوي)' },
        },
        {
          id: 'clean_neutral',
          label: { en: 'Clean & Neutral (no strong grade)', ar: 'نظيف ومحايد (بدون تدرّج قوي)' },
        },
        {
          id: 'existing_lut',
          label: { en: 'We have an existing LUT (upload)', ar: 'لدينا LUT موجود (رفع)' },
        },
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
        { id: 'editorial', label: { en: 'Editorial', ar: 'تحريري' } },
        { id: 'cinematic', label: { en: 'Cinematic', ar: 'سينمائي' } },
        { id: 'soft_dreamy', label: { en: 'Soft & Dreamy', ar: 'ناعم وحالم' } },
        { id: 'raw_authentic', label: { en: 'Raw & Authentic', ar: 'خام وأصيل' } },
        { id: 'minimalist', label: { en: 'Minimalist', ar: 'بسيط' } },
        { id: 'bold_graphic', label: { en: 'Bold & Graphic', ar: 'جريء وغرافيكي' } },
        { id: 'nostalgic_retro', label: { en: 'Nostalgic / Retro', ar: 'نوستالجي / ريترو' } },
        { id: 'dark_dramatic', label: { en: 'Dark & Dramatic', ar: 'داكن ودرامي' } },
        { id: 'fresh_airy', label: { en: 'Fresh & Airy', ar: 'منعش وهوائي' } },
        { id: 'luxurious', label: { en: 'Luxurious', ar: 'فاخر' } },
      ],
    },

    // ── 8. Camera ──────────────────────────────────────────────────────────
    {
      id: 'camera_shot_size',
      type: 'single',
      label: { en: 'Shot size', ar: 'حجم اللقطة' },
      required: true,
      default: 'full',
      options: [
        { id: 'full', label: { en: 'full', ar: 'كاملة' } },
        { id: 'medium', label: { en: 'medium', ar: 'متوسطة' } },
        { id: 'close', label: { en: 'close', ar: 'قريبة' } },
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
        { id: 'low', label: { en: 'low', ar: 'منخفضة' } },
        { id: 'high', label: { en: 'high', ar: 'مرتفعة' } },
      ],
    },
    {
      id: 'lens_feel',
      type: 'single',
      label: { en: '', ar: 'إحساس العدسة' },
      required: false,
      default: '50mm',
      options: [
        {
          id: '35mm',
          label: { en: '35mm', ar: '35 مم' },
          description: {
            en: 'wider field of view, slight environmental context, subtle edge distortion',
            ar: 'مجال رؤية أوسع، سياق بيئي خفيف، تشوّه طفيف عند الحواف',
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
      default: 'static',
      options: [
        { id: 'static', label: { en: 'static camera', ar: 'كاميرا ثابتة' } },
        { id: 'orbit', label: { en: 'orbiting camera', ar: 'كاميرا دوّارة' } },
        { id: 'push_in', label: { en: 'push-in', ar: 'اقتراب' } },
        { id: 'pan', label: { en: 'pan', ar: 'تحريك أفقي' } },
      ],
    },

    // ── 9. Engine choice ───────────────────────────────────────────────────
    {
      id: 'engine',
      type: 'single',
      label: { en: 'Generation engine', ar: 'محرّك التوليد' },
      help: {
        en: 'Image-to-video wins for identity/fabric fidelity; text-to-video for free composition.',
        ar: 'من صورة إلى فيديو أفضل لدقة الهوية/القماش؛ من نص إلى فيديو للتكوين الحر.',
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

Create a fashion campaign video.

IDENTITY (fixed): {{identity_method}} — roster: {{model_roster}}; face: {{face_visibility}}.
GARMENT (fixed): conditioned via {{dress_conditioning}}; exact color: {{dress_color}}; preserve without alteration: {{non_negotiable_details}}.
REFERENCE IMAGE: {{reference_image_display}}; {{image_wind_effect}}.
SCENARIO: {{occasion}} occasion, {{location}} setting, {{time_of_day}}, {{season}} season.
BACKGROUND: {{background_type}}, with a {{background_relationship}} color relationship to the garment. {{shallow_dof}}
LIGHTING: {{lighting_logic}} — reveal the fabric's {{fabric_quality}}; specify quality, direction, and color temperature.
MOTION: {{motion_type}}; model movement: {{model_movement}}; keep the clip {{clip_duration}} to limit drift.
CAMERA: {{camera_shot_size}} shot, {{camera_angle}} angle, {{lens_feel}} lens feel, {{camera_movement}}.
STYLE (fixed): color grade/LUT — {{brand_lut}}; mood — {{mood_style}}; aspect ratio {{aspect_ratio}}.
ENGINE: {{engine}}.

Constraints: keep identity, garment details, color grade, and aspect ratio constant across the campaign. Prioritize fabric fidelity, avoid detail flicker, and match motion to garment construction.`,
    ar: `تصرّف بصفتك {{role}}.

أنشئ فيديو حملة أزياء للتوليد بالذكاء الاصطناعي.

الهوية (ثابتة): {{identity_method}} — عدد العارضات: {{model_roster}}؛ الوجه: {{face_visibility}}.
الفستان (ثابت): مُكيَّف عبر {{dress_conditioning}}؛ اللون الدقيق: {{dress_color}}؛ مع الحفاظ على هذه التفاصيل دون تغيير: {{non_negotiable_details}}.
الصورة المرجعية: {{reference_image_display}}؛ {{image_wind_effect}}.
السيناريو: مناسبة {{occasion}}، في {{location}}، خلال {{time_of_day}}، في فصل {{season}}.
الخلفية: {{background_type}}، بعلاقة لونية {{background_relationship}} مع الفستان. {{shallow_dof}}
الإضاءة: {{lighting_logic}} — مختارة لإبراز {{fabric_quality}} في القماش؛ مع تحديد الجودة والاتجاه ودرجة الحرارة.
الحركة: {{motion_type}}؛ حركة العارضة: {{model_movement}}؛ مع إبقاء المقطع {{clip_duration}} للحد من الانحراف.
الكاميرا: لقطة {{camera_shot_size}}، زاوية {{camera_angle}}، إحساس عدسة {{lens_feel}}، {{camera_movement}}.
الأسلوب (ثابت): تدرّج الألوان — {{brand_lut}}؛ المزاج — {{mood_style}}؛ نسبة الأبعاد {{aspect_ratio}}.
المحرّك: {{engine}}.

القيود: حافظ على ثبات الهوية وتفاصيل الفستان وتدرّج الألوان ونسبة الأبعاد عبر الحملة. أعطِ الأولوية لدقة القماش، وتجنّب وميض التفاصيل، وطابق الحركة مع بنية الفستان.`,
  },
};

export default aiVideoProduction;

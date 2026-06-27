import type { Category } from '@/lib/types';

const foodVideoProduction: Category = {
  id: 'food-video-production',
  label: {
    en: 'AI Food Video Production',
    ar: 'إنتاج فيديو طعام بالذكاء الاصطناعي',
  },
  description: {
    en: 'Generate a production-ready prompt for an AI video of a food product — dishes, raw ingredients, baked goods, sauces — preserve color vibrancy, texture, and appetite appeal while varying the hero action, state cues, light, and motion.',
    ar: 'أنشئ برومبتًا جاهزًا للإنتاج لفيديو منتج غذائي بالذكاء الاصطناعي — أطباق، مكوّنات طازجة، مخبوزات، صلصات — يحافظ على حيوية الألوان والملمس والجاذبية الشهية مع تغيير الحركة الأساسية ومؤشرات الحالة والإضاءة والحركة.',
  },
  icon: '🍽️',
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
          label: { en: 'a food & beverage stylist', ar: 'مصمم اطعمة ومشروبات' },
        },
        {
          id: 'commercial_director',
          label: { en: 'a commercial product director', ar: 'مدير منتجات تجارية' },
        },
        {
          id: 'ai_prompt_engineer',
          label: { en: 'an AI video prompt engineer', ar: 'مهندس فيديوهات الذكاء الاصطناعي' },
        },
        {
          id: 'cgi_3d_artist',
          label: { en: 'a CGI / 3D food artist', ar: 'فنان متخصص في تصميم الطعام ثلاثي الأبعاد / CGI' },
        },
        {
          id: 'cinematographer',
          label: { en: 'a cinematographer', ar: 'مصور السينمائي' },
        },
        {
          id: 'art_director',
          label: { en: 'an art director', ar: 'مدير فني' },
        },
        {
          id: 'colorist',
          label: { en: 'a colorist', ar: 'خبير في تصحيح الألوان' },
        },
        {
          id: 'creative_producer',
          label: { en: 'a creative producer', ar: 'منتج إبداعي' },
        },
      ],
    },

    // ── 1. Product identity ────────────────────────────────────────────────
    {
      id: 'product_conditioning',
      type: 'single',
      label: { en: 'Reference method', ar: 'طريقة المرجعية' },
      help: {
        en: 'Feed the dish or ingredient as image conditioning — not a text description — to lock color, texture, and plating exact.',
        ar: 'قدّم الطبق أو المكوّن كتكييف صوري وليس وصفًا نصيًا لتثبيت اللون والملمس والتقديم بدقة.',
      },
      required: true,
      default: 'packshot_i2v',
      options: [
        {
          id: 'packshot_i2v',
          label: {
            en: 'image-to-video from a real food photo — highest fidelity',
            ar: 'تحويل من صورة طعام حقيقي إلى فيديو — أعلى دقة',
          },
        },
        {
          id: 'reference_element',
          label: {
            en: 'reference-element conditioning from a food shot',
            ar: 'تكييف العنصر المرجعي من صورة الطعام',
          },
        },
        {
          id: 'text_only',
          label: {
            en: 'text description only',
            ar: 'وصف نصي فقط',
          },
        },
        {
          id: 'hybrid_composite',
          label: {
            en: 'hybrid — composite branded elements in post',
            ar: 'هجين — عناصر مركبة تجمل علامات تجارية في مرحلة ما بعد الانتاج',
          },
        },
      ],
    },
    {
      id: 'product_type',
      type: 'single',
      label: { en: 'Food type', ar: 'نوع الطعام' },
      help: {
        en: 'Food type drives the state cues, physics, and lighting choices downstream.',
        ar: 'نوع الطعام يقود مؤشرات الحالة والفيزياء وخيارات الإضاءة لاحقًا.',
      },
      required: true,
      default: 'cooked_dish',
      options: [
        { id: 'cooked_dish', label: { en: 'cooked / plated dish', ar: 'طبق مطبوخ / مُقدَّم' } },
        { id: 'sandwich_wrap', label: { en: 'sandwich / wrap / sub / roll', ar: 'ساندويتش / راب / صب / رول' } },
        { id: 'burger_slider', label: { en: 'burger / slider / smash burger', ar: 'برغر / سلايدر / برغر مهروس' } },
        { id: 'fresh_produce', label: { en: 'fresh produce (vegetables, fruits, herbs)', ar: 'منتجات طازجة (خضروات، فواكه، أعشاب)' } },
        { id: 'raw_meat_seafood', label: { en: 'raw meat / seafood / protein', ar: 'لحم نيء / مأكولات بحرية / بروتين' } },
        { id: 'bread_dough', label: { en: 'bread / bun / dough (as ingredient hero)', ar: 'الخبز / الكعكة / عجين (كمكوّن رئيسي)' } },
        { id: 'baked_goods', label: { en: 'baked goods (pastry, pizza)', ar: 'المخبوزات (معجنات، بيتزا)' } },
        { id: 'pasta_grains', label: { en: 'pasta / grains / rice', ar: 'معكرونة / حبوب / أرز' } },
        { id: 'sauce_condiment', label: { en: 'sauce / dip / spread / condiment', ar: 'صلصة / تغميس / دهن / توابل' } },
        { id: 'spices_seasoning', label: { en: 'spices / seasoning / dry ingredients', ar: 'بهارات / توابل / مكوّنات جافة' } },
        { id: 'candy_chocolate', label: { en: 'candy / chocolate / dessert', ar: 'حلوى / شوكولاتة / حلويات' } },
        { id: 'dairy_dessert', label: { en: 'dairy / frozen dessert', ar: 'ألبان / حلويات مجمّدة' } },
        { id: 'packaged_snack', label: { en: 'packaged snack / branded food', ar: 'وجبة خفيفة معبّأة / طعام بعلامة تجارية' } },
        { id: 'other', label: { en: 'other food product', ar: 'منتج غذائي آخر' } },
      ],
    },
    {
      id: 'packaging_material',
      type: 'single',
      label: { en: 'Vessel / container', ar: 'الوعاء / الحاوية' },
      help: {
        en: 'The vessel defines light behaviour — matte ceramics absorb, glossy plates reflect, cast iron holds heat highlights.',
        ar: 'الوعاء يحدّد سلوك الضوء — السيراميك المطفي يمتص، الأطباق اللامعة تعكس، الحديد الزهر يحتفظ بإبرازات الحرارة.',
      },
      required: true,
      default: 'ceramic_plate',
      options: [
        { id: 'ceramic_plate', label: { en: 'ceramic plate', ar: 'طبق سيراميك' } },
        { id: 'ceramic_bowl', label: { en: 'bowl / deep dish', ar: 'وعاء / طبق عميق' } },
        { id: 'wooden_board', label: { en: 'wooden serving board', ar: 'لوح تقديم خشبي' } },
        { id: 'chopping_board', label: { en: 'chopping board / rustic wood', ar: 'لوح تقطيع / خشب ريفي' } },
        { id: 'cast_iron_pan', label: { en: 'cast iron pan / skillet', ar: 'مقلاة حديد زهر / سكيليت' } },
        { id: 'paper_carton', label: { en: 'paper carton / box (branded)', ar: 'عبوة كرتونية / صندوق ورقي (بعلامة تجارية)' } },
        { id: 'foil_wrapper', label: { en: 'foil wrapper', ar: 'غلاف من رقائق الالمنيوم' } },
        { id: 'pouch', label: { en: 'pouch / sachet', ar: 'كيس / ظرف' } },
        { id: 'jar', label: { en: 'jar / tub', ar: 'مرطمان / علبة' } },
        { id: 'unwrapped', label: { en: 'no vessel / bare ingredient', ar: 'بدون وعاء / المكوّن فقط' } },
      ],
    },
    {
      id: 'product_color',
      type: 'text',
      options: [
        { id: 'from attached image',      color: '#1C1C1C', label: { en: 'IMG',      ar: 'من الصورة'  } },
        { id: 'auto-extract dominant colors from the uploaded food image', color: '#8FA8BF', label: { en: 'Extract', ar: 'استخراج'     } },
        { id: 'Black (#1C1C1C)',          color: '#1C1C1C', label: { en: 'B',        ar: 'أسود'       } },
        { id: 'White (#FAFAFA)',          color: '#FAFAFA', label: { en: 'W',        ar: 'أبيض'       } },
        { id: 'Red (#C0392B)',            color: '#C0392B', label: { en: 'Red',      ar: 'أحمر'       } },
        { id: 'Orange (#E8735A)',         color: '#E8735A', label: { en: 'Orange',   ar: 'برتقالي'    } },
        { id: 'Amber (#C5A028)',          color: '#C5A028', label: { en: 'Amber',    ar: 'كهرماني'    } },
        { id: 'Gold (#C5A028)',           color: '#C5A028', label: { en: 'Gold',     ar: 'ذهبي'       } },
        { id: 'Yellow (#E1A100)',         color: '#E1A100', label: { en: 'Yellow',   ar: 'أصفر'       } },
        { id: 'Lime (#87A878)',           color: '#87A878', label: { en: 'Lime',     ar: 'ليموني'     } },
        { id: 'Green (#2D9B6F)',          color: '#2D9B6F', label: { en: 'Green',    ar: 'أخضر'       } },
        { id: 'Teal (#2A9D8F)',           color: '#2A9D8F', label: { en: 'Teal',     ar: 'أزرق مخضر' } },
        { id: 'Brown (#6F4E37)',          color: '#6F4E37', label: { en: 'Brown',    ar: 'بني'        } },
        { id: 'Cream (#F8F5F0)',          color: '#F8F5F0', label: { en: 'Cream',    ar: 'كريمي'      } },
        { id: 'Purple (#6A4C93)',         color: '#6A4C93', label: { en: 'Purple',   ar: 'بنفسجي'     } },
        { id: 'Pink (#F4C2C2)',           color: '#F4C2C2', label: { en: 'Pink',     ar: 'وردي'       } },
      ],
      label: {
        en: 'Dominant / hero color of the food',
        ar: 'اللون السائد / الرئيسي للطعام',
      },
      help: {
        en: 'Anchor the dominant food color so lighting and background cannot shift it (e.g. vivid red tomato → dull orange).',
        ar: 'ثبّت اللون السائد للطعام حتى لا تغيّره الإضاءة أو الخلفية (مثل أحمر الطماطم الزاهي ← برتقالي باهت).',
      },
      placeholder: {
        en: 'e.g. vibrant red, #C8102E, golden-brown crust…',
        ar: 'مثال: أحمر زاهي، #C8102E، قشرة بنية ذهبية…',
      },
      required: true,
    },
    {
      id: 'label_handling',
      type: 'single',
      label: { en: 'Brand / label handling', ar: 'معالجة العلامة / الملصق' },
      help: {
        en: 'Only relevant if the food has branded packaging. AI mangles small text — protect it or keep it out of frame.',
        ar: 'مهم فقط إذا كان الطعام له تغليف بعلامة تجارية. الذكاء الاصطناعي يشوّه النصوص الصغيرة — احمها أو أبعدها عن الإطار.',
      },
      required: false,
      default: 'no_label',
      options: [
        {
          id: 'no_label',
          label: {
            en: 'no label — unpackaged / plated food',
            ar: 'بلا ملصق — طعام غير معبّأ / مُقدَّم في طبق',
          },
        },
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
        en: 'Non-negotiable food details',
        ar: 'تفاصيل الطعام غير القابلة للتغيير',
      },
      help: {
        en: 'Details AI flickers or re-invents most in motion — lock them explicitly.',
        ar: 'التفاصيل التي يومض فيها الذكاء الاصطناعي أو يعيد اختراعها أثناء الحركة — ثبّتها صراحةً.',
      },
      required: true,
      options: [
        { id: 'food_color_vibrancy', label: { en: 'food color vibrancy (no graying / dulling)', ar: 'حيوية ألوان الطعام (بلا تلاشٍ أو باهتية)' } },
        { id: 'surface_texture', label: { en: 'surface texture (crust, seeds, sear marks)', ar: 'ملمس السطح (قشرة، بذور، علامات الشواء)' } },
        { id: 'layer_visibility', label: { en: 'layer structure / filling visibility (sandwiches, burgers)', ar: 'هيكل الطبقات / وضوح الحشوة (ساندويتش، برغر)' } },
        { id: 'liquid_color', label: { en: 'liquid / sauce / content color', ar: 'لون السائل / الصلصة / المحتوى' } },
        { id: 'proportions', label: { en: 'proportions / size ratio', ar: 'النِّسب / حجم الطبق' } },
        { id: 'plating_arrangement', label: { en: 'plating arrangement / ingredient placement', ar: 'ترتيب التقديم / موضع المكوّنات' } },
        { id: 'packaging_shape', label: { en: 'packaging / vessel shape', ar: 'شكل العبوة / الوعاء' } },
        { id: 'material_finish', label: { en: 'material finish (matte / gloss)', ar: 'تشطيب المادة (مطفي / لامع)' } },
        { id: 'brand_colors', label: { en: 'exact brand colors (if branded)', ar: 'ألوان العلامة الدقيقة (إذا كانت مُعلَّمة)' } },
        { id: 'logo', label: { en: 'logo (if branded packaging)', ar: 'الشعار (إذا كانت العبوة بعلامة تجارية)' } },
      ],
    },

    // ── 2. Food state & appetite cues ──────────────────────────────────────
    {
      id: 'state_cues',
      type: 'multi',
      label: { en: 'State / appetite cues', ar: 'مؤشرات الحالة / الشهية' },
      help: {
        en: 'Cues that signal freshness and appetite appeal: sizzle = just cooked, crispy = texture contrast, gloss = glazed or fresh.',
        ar: 'مؤشرات تدل على الطازجية والجاذبية الشهية: أزيز = طازج من الطهي، مقرمش = تباين ملمسي، لمعان = مزجّج أو طازج.',
      },
      maxSelect: 5,
      required: false,
      options: [
        { id: 'sizzle', label: { en: 'sizzle / cooking in pan', ar: 'صوت أزيز / طهي في المقلاة' } },
        { id: 'steam', label: { en: 'steam / vapor', ar: 'بخار' } },
        { id: 'caramelization', label: { en: 'caramelization / browning', ar: 'كراميل / احمرار' } },
        { id: 'cheese_melt', label: { en: 'melting / stretching cheese', ar: 'جبن يذوب / يتمدّد' } },
        { id: 'sauce_ooze', label: { en: 'sauce / filling oozing out', ar: 'صلصة / حشوة تتسرّب للخارج' } },
        { id: 'toasted_bread', label: { en: 'toasted / grilled bread surface', ar: 'سطح خبز محمّص / مشوي' } },
        { id: 'crispy_crust', label: { en: 'crispy crust / crunch', ar: 'قشرة مقرمشة' } },
        { id: 'gloss_sheen', label: { en: 'glossy sheen / glaze', ar: 'لمعان / طلاء لامع' } },
        { id: 'melt', label: { en: 'melt / drip (chocolate, ice cream)', ar: 'ذوبان / تنقيط (شوكولاتة، آيس كريم)' } },
        { id: 'foam_crema', label: { en: 'foam / crema', ar: 'رغوة / كريما' } },
        { id: 'crumbs_texture', label: { en: 'crumbs / surface texture', ar: 'فتات / ملمس السطح' } },
        { id: 'fresh_cut', label: { en: 'fresh-cut surface (bright, vibrant)', ar: 'سطح مقطوع طازج (مشرق، زاهي)' } },
        { id: 'frost', label: { en: 'frost / chill (frozen desserts)', ar: 'صقيع / برودة (حلويات مجمّدة)' } },
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
        { id: 'fresh_herbs', label: { en: 'fresh herbs (parsley, basil, cilantro)', ar: 'أعشاب طازجة (بقدونس، ريحان، كزبرة)' } },
        { id: 'mint', label: { en: 'mint leaves', ar: 'أوراق نعناع' } },
        { id: 'lettuce_tomato', label: { en: 'lettuce / tomato / fresh vegetables', ar: 'خس / طماطم / خضروات طازجة' } },
        { id: 'pickles', label: { en: 'pickles / jalapeños / capers', ar: 'مخللات / هالابينيو / كبر' } },
        { id: 'avocado', label: { en: 'avocado / guacamole', ar: 'أفوكادو / جواكامولي' } },
        { id: 'onion_rings', label: { en: 'onion / onion rings', ar: 'بصل / حلقات بصل' } },
        { id: 'citrus', label: { en: 'citrus slices / zest', ar: 'شرائح حمضيات / قشر الحمضيات' } },
        { id: 'berries', label: { en: 'berries / fruit', ar: 'توت / فاكهة' } },
        { id: 'spice_sprinkle', label: { en: 'spice sprinkle / seasoning dust', ar: 'رشّ بهارات / غبار توابل' } },
        { id: 'oil_drizzle', label: { en: 'olive oil / sauce drizzle', ar: 'رشّ زيت زيتون / صلصة' } },
        { id: 'cheese_shaving', label: { en: 'cheese shavings / crumbles', ar: 'رقائق جبن / قطع جبن' } },
        { id: 'nuts_seeds', label: { en: 'nuts / seeds / grains', ar: 'مكسرات / بذور / حبوب' } },
        { id: 'ingredients_falling', label: { en: 'ingredients falling into frame', ar: 'مكوّنات تتساقط في الإطار' } },
        { id: 'none', label: { en: 'none — clean hero', ar: 'بدون — بطل نظيف' } },
      ],
    },

    // ── 3. Hero action (the money shot) ────────────────────────────────────
    {
      id: 'hero_action',
      type: 'single',
      label: { en: 'Hero action', ar: 'الحركة الأساسية' },
      help: {
        en: 'The single defining moment of the shot — match it to the food and its texture.',
        ar: 'اللحظة الحاسمة الوحيدة في اللقطة — طابقها مع الطعام وملمسه.',
      },
      required: true,
      default: 'camera_move_static',
      options: [
        { id: 'cross_section_cut', label: { en: 'cross-section cut revealing layers (sandwich / burger)', ar: 'مقطع عرضي يكشف الطبقات (ساندويتش / برغر)' } },
        { id: 'stack_build', label: { en: 'stacking / building layers', ar: 'تكديس / بناء الطبقات' } },
        { id: 'sauce_squeeze', label: { en: 'sauce squeeze / spread onto bread', ar: 'عصر صلصة / دهنها على الخبز' } },
        { id: 'sauce_drizzle', label: { en: 'sauce / oil drizzle over food', ar: 'رش الصلصة / زيت على الطعام' } },
        { id: 'slice_cut', label: { en: 'slicing / cutting to reveal interior', ar: 'تقطيع / قطع للكشف عن الداخل' } },
        { id: 'cheese_pull', label: { en: 'cheese pull / stretch', ar: 'سحب الجبن / تمدّده' } },
        { id: 'plate_serve', label: { en: 'plating / serving moment', ar: 'لحظة التقديم / الوضع في الطبق' } },
        { id: 'sprinkle_season', label: { en: 'sprinkling / seasoning from above', ar: 'رشّ البهارات / التتبيل من الأعلى' } },
        { id: 'toss_mix', label: { en: 'tossing / mixing ingredients', ar: 'تقليب / خلط المكوّنات' } },
        { id: 'sizzle_pan', label: { en: 'sizzling in pan / hot surface', ar: 'سطح ساخن يفور في المقلاة' } },
        { id: 'steam_curl', label: { en: 'steam curling up from dish', ar: 'تصاعد البخار من الطبق' } },
        { id: 'ingredients_drop', label: { en: 'ingredients dropping in', ar: 'تساقط المكوّنات' } },
        { id: 'unwrap', label: { en: 'unwrap / reveal (packaged food)', ar: 'فك التغليف / الكشف (عن الطعام المغلف)' } },
        { id: 'slow_rotation', label: { en: 'slow dish rotation', ar: 'دوران بطيء للطبق' } },
        { id: 'camera_move_static', label: { en: 'camera glide over static food', ar: 'انزلاق الكاميرا حول الطعام الثابت' } },
      ],
    },

    // ── 4. Scenario & set styling ──────────────────────────────────────────
    {
      id: 'context',
      type: 'single',
      label: { en: 'Context / occasion', ar: 'السياق / المناسبة' },
      help: {
        en: 'Context drives everything downstream; avoid mismatched semiotics (rustic home cooking vs fine dining plating).',
        ar: 'السياق يقود كل ما يليه؛ تجنّب التضارب الدلالي (طبخ منزلي ريفي مقابل تقديم مطعم راقٍ).',
      },
      required: true,
      default: 'foodie',
      options: [
        { id: 'foodie', label: { en: 'foodie / close-up food styling', ar: 'فن الطهي / تنسيق الطعام عن قرب' } },
        { id: 'street_food', label: { en: 'street food / casual bite', ar: 'طعام شارع / وجبة خفيفة' } },
        { id: 'home_cooking', label: { en: 'home cooking / kitchen moment', ar: 'طبخ منزلي / لحظة مطبخية' } },
        { id: 'feast_sharing', label: { en: 'feast / sharing table', ar: 'وليمة / مائدة مشتركة' } },
        { id: 'cozy', label: { en: 'cozy / comfort food', ar: 'دافئ / طعام مريح' } },
        { id: 'premium_luxury', label: { en: 'premium / fine dining', ar: 'مطاعم فاخرة / راقية' } },
        { id: 'indulgent', label: { en: 'indulgent / treat', ar: 'متعة / مكافئة' } },
        { id: 'snack_break', label: { en: 'snack break / on-the-go', ar: 'استراحة لتناول وجبة خفيفة / على الطريق' } },
        { id: 'minimal_studio', label: { en: 'minimal studio product shot', ar: 'لقطة منتج استوديو بسيطة' } },
      ],
    },
    {
      id: 'surface',
      type: 'single',
      label: { en: 'Surface', ar: 'السطح' },
      required: true,
      default: 'wood',
      options: [
        { id: 'marble', label: { en: 'marble', ar: 'رخام' } },
        { id: 'wood', label: { en: 'wood', ar: 'خشب' } },
        { id: 'chopping_board', label: { en: 'chopping board / rustic wood', ar: 'لوح تقطيع / خشب ريفي' } },
        { id: 'concrete', label: { en: 'concrete / stone', ar: 'إسمنت / حجر' } },
        { id: 'reflective', label: { en: 'reflective / glossy surface', ar: 'سطح عاكس / لامع' } },
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
        { id: 'restaurant_table', label: { en: 'restaurant table / dining setting', ar: 'طاولة مطعم / بيئة طعام' } },
        { id: 'cafe', label: { en: 'café', ar: 'مقهى' } },
        { id: 'outdoor_nature', label: { en: 'outdoor / nature', ar: 'خارجي / طبيعة' } },
        { id: 'retail_shelf', label: { en: 'retail shelf (packaged food)', ar: 'رف متجر (طعام معبّأ)' } },
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
      default: 'environmental',
      options: [
        { id: 'neutral_seamless', label: { en: 'neutral seamless backdrop', ar: 'خلفية محايدة متصلة' } },
        { id: 'complementary_color', label: { en: 'complementary-color backdrop', ar: 'خلفية بلون مكمّل' } },
        { id: 'tonal_mono', label: { en: 'tonal monochrome backdrop', ar: 'خلفية أحادية اللون متدرجة الألوان' } },
        { id: 'environmental', label: { en: 'environmental kitchen / dining setting', ar: 'مطبخ / غرفة طعام صديقة للبيئة' } },
        { id: 'gradient', label: { en: 'soft gradient / glow', ar: 'تدرّج ناعم / توهّج' } },
        {
          id: 'textured',
          label: {
            en: 'textured surface (marble / wood / linen)',
            ar: 'سطح ذو ملمس (رخام / خشب / كتان)',
          },
        },
      ],
    },
    {
      id: 'background_relationship',
      type: 'single',
      label: {
        en: 'Background color relationship to food',
        ar: 'علاقة لون الخلفية بالطعام',
      },
      help: {
        en: 'Keep the food legible — avoid it vanishing into the backdrop.',
        ar: 'حافظ على وضوح الطعام — تجنّب اندماجه في الخلفية.',
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
        en: 'Use shallow depth of field to separate the food from the background',
        ar: 'استخدام عمق ميدان ضحل لفصل الطعام عن الخلفية',
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
        en: 'Always specify quality + direction + temperature; tune to the food (top-soft for plated dishes, hard directional for sear/texture, warm for baked goods).',
        ar: 'حدّد دائمًا الجودة + الاتجاه + درجة الحرارة؛ واضبطها حسب الطعام (ناعمة علوية للأطباق، اتجاهية حادة للشواء/الملمس، دافئة للمخبوزات).',
      },
      required: true,
      default: 'soft_diffused',
      options: [
        { id: 'soft_diffused', label: { en: 'soft diffused light (flattering for most food)', ar: 'ضوء ناعم منتشر (مناسب لمعظم الأطعمة)' } },
        { id: 'top_soft', label: { en: 'top-soft light (ideal for plated dishes)', ar: 'ضوء ناعم علوي (مثالي للأطباق المغلفة)' } },
        { id: 'golden_hour', label: { en: 'warm golden-hour light', ar: 'ضوء الساعة الذهبية الدافئ' } },
        { id: 'hard_directional', label: { en: 'hard directional (reveals texture / sear marks)', ar: 'اتجاهي حاد (يبرز الملمس / علامات الشواء)' } },
        { id: 'high_key', label: { en: 'high-key clean light (fresh / studio)', ar: 'إضاءة عالية المفتاح نظيفة (طازجة / استوديو)' } },
        { id: 'low_key', label: { en: 'low-key dramatic light (premium / moody)', ar: 'إضاءة منخفضة المفتاح درامية (فاخرة / عميقة)' } },
        { id: 'backlight_liquid', label: { en: 'backlight (sauces / transparent liquids)', ar: 'إضاءة خلفية (صلصات / سوائل شفافة)' } },
      ],
    },
    {
      id: 'material_quality',
      type: 'single',
      label: { en: 'Quality to reveal', ar: 'الخاصية المراد إبرازها' },
      required: true,
      default: 'texture',
      options: [
        { id: 'texture', label: { en: 'surface texture (crust, crumb, skin)', ar: 'ملمس السطح (قشرة، فتات، جلد)' } },
        { id: 'sear_char', label: { en: 'sear marks / char / caramelization', ar: 'علامات الشواء / الحرق / الكرملة' } },
        { id: 'gloss', label: { en: 'gloss / glaze / highlights', ar: 'لمعان / بريق / إبرازات' } },
        { id: 'transparency', label: { en: 'transparency (sauce / liquid / gelatin)', ar: 'الشفافية (صلصة / سائل / جيلاتين)' } },
        { id: 'steam_detail', label: { en: 'steam detail / heat shimmer', ar: 'تفاصيل البخار / وميض الحرارة' } },
      ],
    },

    // ── 7. Motion & physics ────────────────────────────────────────────────
    {
      id: 'motion_type',
      type: 'single',
      label: { en: 'Motion type', ar: 'نوع الحركة' },
      help: {
        en: 'Match motion to the food: sauces want pour/drizzle; solids want cut/reveal or subtle steam; dry ingredients want particle sprinkle.',
        ar: 'طابق الحركة مع الطعام: الصلصات تحتاج صبًا/سكبًا؛ المواد الصلبة تحتاج قطعًا/كشفًا أو بخارًا خفيفًا؛ المكوّنات الجافة تحتاج رشًا بجسيمات.',
      },
      required: true,
      default: 'subtle_motion',
      options: [
        { id: 'static_hero', label: { en: 'static hero shot', ar: 'لقطة ثابتة للبطل' } },
        {
          id: 'subtle_motion',
          label: {
            en: 'subtle motion (steam, sizzle, drip, slight drift)',
            ar: 'حركة خفيفة (بخار، أزيز، تنقيط، انجراف خفيف)',
          },
        },
        { id: 'liquid_sim', label: { en: 'sauce / liquid simulation (pour / drizzle)', ar: 'محاكاة صلصة / سائل (صبّ / سكب)' } },
        { id: 'ingredient_reveal', label: { en: 'ingredient reveal (slice, pull, break apart)', ar: 'كشف المكوّن (تقطيع، سحب، تفكيك)' } },
        { id: 'product_spin', label: { en: 'dish spin / 360', ar: 'دوران الطبق / 360' } },
        { id: 'particle_fx', label: { en: 'particle effects (spice dust, crumbs, sugar)', ar: 'تأثيرات جسيمات (غبار بهارات، فتات، سكر)' } },
        {
          id: 'camera_move_static',
          label: { en: 'camera glide over static food', ar: 'انزلاق الكاميرا حول الطعام الثابت' },
        },
      ],
    },
    {
      id: 'speed_ramp',
      type: 'single',
      label: { en: 'Speed / frame rate', ar: 'السرعة / معدل الإطارات' },
      help: {
        en: 'Slow-motion reveals food texture and motion detail — sauce pours and cheese pulls read best at high frame rate.',
        ar: 'الحركة البطيئة تُبرز ملمس الطعام وتفاصيل الحركة — صبّ الصلصة وسحب الجبن تظهر أفضل بمعدل إطارات عالٍ.',
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
        en: 'Keep clips short to limit texture and color drift.',
        ar: 'أبقِ المقاطع قصيرة للحد من انحراف الملمس والألوان.',
      },
      required: true,
      default: 'short',
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
        { id: 'appetizing', label: { en: 'Appetizing', ar: 'فاتح للشهية' } },
        { id: 'cinematic', label: { en: 'Cinematic', ar: 'سينمائي' } },
        { id: 'fresh_crisp', label: { en: 'Fresh & Crisp', ar: 'منعش ونقي' } },
        { id: 'premium', label: { en: 'Premium', ar: 'فاخر' } },
        { id: 'minimalist', label: { en: 'Minimalist', ar: 'بسيط' } },
        { id: 'bold_graphic', label: { en: 'Bold & Graphic', ar: 'جريء وغرافيكي' } },
        { id: 'playful', label: { en: 'Playful / Fun', ar: 'مرح / ممتع' } },
        { id: 'nostalgic_retro', label: { en: 'Nostalgic / Retro', ar: 'نوستالجي / ريترو' } },
        { id: 'luxurious', label: { en: 'Luxurious', ar: 'فاخر وراقٍ' } },
        { id: 'rustic', label: { en: 'Rustic / Homemade', ar: 'ريفي / منزلي' } },
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
      default: 'high',
      options: [
        { id: 'top_down', label: { en: 'top-down / flat-lay', ar: 'من الأعلى إلى الأسفل / صورة مسطحة' } },
        { id: 'high', label: { en: 'high (45°)', ar: 'مرتفعة (45°)' } },
        { id: 'eye', label: { en: 'eye-level', ar: 'مستوى النظر' } },
        { id: 'low', label: { en: 'low hero angle', ar: 'زاوية بطولية منخفضة' } },
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
            en: 'extreme close detail of texture, crumbs, and surface — strong subject isolation',
            ar: 'تفاصيل قريبة جدًا للملمس والفتات والسطح — عزل قوي للعنصر',
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
        en: 'Image-to-video wins for texture and plating fidelity; text-to-video for free composition.',
        ar: 'من صورة إلى فيديو أفضل لدقة الملمس والتقديم؛ من نص إلى فيديو للتكوين الحر.',
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

Create a food product campaign video.

FOOD (fixed): {{product_type}} served in / on {{packaging_material}}; conditioned via {{product_conditioning}}; dominant color: {{product_color}}; brand / label handling: {{label_handling}}; preserve without alteration: {{non_negotiable_details}}.
STATE: show {{state_cues}}; garnish/props: {{garnish_props}}.
HERO ACTION: {{hero_action}}.
SCENARIO: {{context}} context, on a {{surface}} surface, {{location}} setting, {{time_of_day}}.
BACKGROUND: {{background_type}}, with a {{background_relationship}} color relationship to the food. {{shallow_dof}}
LIGHTING: {{lighting_logic}} — reveal the food's {{material_quality}}; specify quality, direction, and color temperature.
MOTION: {{motion_type}} at {{speed_ramp}}; keep the clip {{clip_duration}}.
CAMERA: {{camera_shot_size}} shot, {{camera_angle}} angle, {{lens_feel}} lens feel, {{camera_movement}}.
STYLE (fixed): color grade/LUT — {{brand_lut}}; mood — {{mood_style}}; aspect ratio {{aspect_ratio}}.
ENGINE: {{engine}}.

Constraints: preserve food color vibrancy, texture, and form constant across the campaign. Prioritize appetite appeal and material fidelity, avoid gray-shift or texture loss, and match motion and physics to the food type.`,
    ar: `تصرّف بصفتك {{role}}.

أنشئ فيديو حملة لمنتج غذائي بالذكاء الاصطناعي.

الطعام (ثابت): {{product_type}} مُقدَّم في / على {{packaging_material}}؛ مُكيَّف عبر {{product_conditioning}}؛ اللون السائد: {{product_color}}؛ معالجة العلامة / الملصق: {{label_handling}}؛ مع الحفاظ على هذه التفاصيل دون تغيير: {{non_negotiable_details}}.
الحالة: أظهر {{state_cues}}؛ الزينة/الإكسسوارات: {{garnish_props}}.
الحركة الأساسية: {{hero_action}}.
السيناريو: سياق {{context}}، على سطح {{surface}}، في {{location}}، خلال {{time_of_day}}.
الخلفية: {{background_type}}، بعلاقة لونية {{background_relationship}} مع الطعام. {{shallow_dof}}
الإضاءة: {{lighting_logic}} — مختارة لإبراز {{material_quality}} في الطعام؛ مع تحديد الجودة والاتجاه ودرجة الحرارة.
الحركة: {{motion_type}} بسرعة {{speed_ramp}}؛ مع إبقاء المقطع {{clip_duration}}.
الكاميرا: لقطة {{camera_shot_size}}، زاوية {{camera_angle}}، إحساس عدسة {{lens_feel}}، {{camera_movement}}.
الأسلوب (ثابت): تدرّج الألوان — {{brand_lut}}؛ المزاج — {{mood_style}}؛ نسبة الأبعاد {{aspect_ratio}}.
المحرّك: {{engine}}.

القيود: حافظ على ثبات حيوية ألوان الطعام وملمسه وشكله عبر الحملة. أعطِ الأولوية للجاذبية الشهية ودقة المادة، وتجنّب تلاشي الألوان أو فقدان الملمس، وطابق الحركة والفيزياء مع نوع الطعام.`,
  },
};

export default foodVideoProduction;

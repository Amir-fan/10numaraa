// Define translations
const translations = {
    tr: {
        // Newly added keys
        contact_city: "Mersin, Türkiye",
        work_hours_short: "Pzt - Cts: 08:00 - 19:00",
        fanari_btn: "Fanari Labs - Tıkla ve İletişime Geç",
        fanari_title: "Fanari Labs",
        fanari_desc: "Modern Web Teknolojileri ve Tasarım Ajansı",
        dev_by: "Web Tasarım & Yazılım:",
        page_title_home: "10 Numara Ambalaj - Plastik Poşet Baskı",
        page_title_catalog: "10 Numara Ambalaj - Katalog",
        page_title_products: "Ürün Galerisi - 10 Numara Ambalaj",
        page_title_contact: "İletişim | 10 Numara Ambalaj",
        
        // Navigation
        home: "Ana Sayfa",
        catalog: "Katalog",
        products: "Ürünler",
        about: "Hakkımızda",
        contact: "İletişim",
        
        // Common
        call_now: "Hemen Ara",
        phone_orders: "Siparişler sadece telefon üzerinden alınır",
        all: "Tümü",
        unprinted_bags: "Baskısız Poşetler",
        printed_bags: "Baskılı Poşetler",
        color_standard: "Standart",
        color_black: "Siyah",
        color_brown: "Kahverengi",
        color_gold: "Altın",
        color_white_silver: "Beyaz Gümüş",
        color_see_through: "Şeffaf",
        
        // New Keys
        address: "Adres",
        benefit_1: "Özel Baskılı Üretim",
        benefit_2: "Yüksek Baskı Kalitesi",
        benefit_3: "Sürdürülebilir Üretim",
        benefit_4: "Hızlı Teslimat",
        cat_custom: "Özel Tasarım Ambalajlar",
        cat_market: "Baskılı Poşetler",
        cat_nuts: "Kuruyemiş Ambalajları",
        cat_seed: "Tohum Ambalajları",
        cat_spice: "Baharat Ambalajları",
        contact_desc: "Siparişleriniz, ürünlerimiz veya iş birliği fırsatları için bizimle iletişime geçmekten mutluluk duyarız.",
        contact_soon: "En kısa sürede sizinle iletişime geçeceğiz.",
        contact_us_btn: "İletişime Geç",
        custom_design_desc: "Tamamen sizin markanıza özel, rafta dikkat çeken yenilikçi ambalaj tasarımları.",
        custom_production: "Özel Tasarım Üretim",
        custom_production_desc: "İşletmenizin kimliğini yansıtan özel baskılı ambalaj çözümleri sunuyoruz.",
        durable_structure: "Dayanıklı Yapı",
        email: "E-posta",
        explore_advantages: "Avantajları Keşfet",
        explore_products: "Ürünleri Keşfet &rarr;",
        fast_support: "Hızlı Destek",
        fast_support_desc: "İhtiyaç duyduğunuz an, üretimden teslimata kadar yanınızdayız.",
        feature_1_desc: "İhtiyacınıza uygun boyut, renk ve tasarım seçenekleriyle.",
        feature_2_desc: "Canlı renkler, net detaylar ve dayanıklı baskı teknolojisi.",
        feature_3_desc: "Çevreye duyarlı malzemelerle doğaya saygılı üretim.",
        feature_4_desc: "Zamanında üretim ve güvenilir lojistik ile hızlı teslimat.",
        feature_footer_desc: "Modern üretim altyapımız ile her gün daha iyisini üretiyoruz.",
        featured_products_eyebrow: "SEÇKİN ÜRÜNLER",
        flexo_print: "Esnek Baskı",
        footer_desc: "Yüksek kaliteli baskılı esnek ambalaj çözümleri ile markanızı bir adım öne taşıyoruz.",
        get_directions: "Yol Tarifi Al",
        get_in_touch_eye: "İLETİŞİME GEÇİN",
        hero_headline: "Ambalajınız,<br>ürününüzden<br>önce konuşur.",
        high_res_print: "Yüksek Çözünürlüklü Baskı",
        message_desc: "Tüm soru ve görüşleriniz için bize mesaj gönderebilirsiniz.",
        message_us: "Bizimle Mesajlaşın",
        multi_material: "Çoklu Materyal",
        nuts_pack: "Kuruyemiş Ambalajları",
        nuts_pack_desc: "Tazeliği koruyan, şeffaf pencereli kilitli doypack ambalajlar.",
        open_in_google: "Google Haritalar'da Aç",
        pack_quality: "Ambalaj Kalitesi",
        phone_whatsapp: "Telefon / WhatsApp",
        printed_packaging_solutions: "BASKILI AMBALAJ ÇÖZÜMLERİ",
        produce_together: "Birlikte Üretelim &rarr;",
        product_categories: "ÜRÜN KATEGORİLERİ",
        products_desc: "İşletmenizin ihtiyaçlarına uygun, özelleştirilebilir esnek ambalaj çözümlerimizi inceleyin.",
        quality_control: "Kalite Kontrol",
        quality_print: "Kaliteli Baskı,",
        quality_standard: "Kalite Standartları",
        quality_standard_desc: "Uluslararası standartlarda, gıda güvenliğine uygun, dayanıklı üretim.",
        ready_eyebrow: "HAZIR MISINIZ?",
        reliable_service: "Güvenilir Hizmet",
        reliable_service_desc: "Müşteri memnuniyeti odaklı, şeffaf ve güvenilir iş ortaklığı.",
        review_catalog: "Kataloğu İncele &rarr;",
        see_all_products: "Tüm Ürünleri Gör &rarr;",
        seed_pack: "Tohum Ambalajları",
        seed_pack_desc: "Tohumları neme ve ışığa karşı koruyan, özel bariyerli ambalajlar.",
        send_message: "Mesaj Gönder",
        spice_pack: "Baharat Ambalajları",
        spice_pack_desc: "Aroma kaybını önleyen, yüksek bariyer özellikli özel tasarım paketler.",
        standart_assurance: "Standart Güvence",
        strong_brand: "Güçlü Marka.",
        timely_delivery: "Zamanında Teslimat",
        timely_delivery_desc: "Siparişlerinizi söz verdiğimiz tarihte, eksiksiz olarak teslim ediyoruz.",
        why_us: "Neden 10 Numara Ambalaj?",
        why_us_desc: "Yılların tecrübesiyle, markanıza değer katan ambalaj çözümleri üretiyoruz.",
        why_us_headline: "Kalite tesadüf değildir.<br>Tecrübenin eseridir.",
        working_hours: "Çalışma Saatleri",
        
        // Home Page
        hero_title: "10 Numara Ambalaj",
        hero_subtitle: "Kaliteli ve Güvenilir Ambalaj Çözümleri",
        welcome: "Ambalajda Kaliteyi Yeniden Tanımlayın!",
        welcome_message: "Özel baskılı ambalaj çözümleriyle markanızı öne çıkarıyoruz. Kalite ve güvenle üretiyoruz.",
        explore_now: "Hemen Keşfet",
        
        // Products Page
        product_gallery: "Ürün Galerisi",
        quality_solutions: "Kaliteli ve dayanıklı plastik poşet çözümlerimiz",
        our_products: "Ürünlerimiz",
        product_details: "Ürün Detayları",
        market_bag: "Özel Tasarım Poşet",
        market_bag_desc: "Markanıza özel tasarlanmış poşetler",
        custom_bag: "Özel Tasarım Poşet",
        custom_bag_desc: "Markanıza özel tasarlanmış poşetler",
        corporate_bag: "Özel Tasarım Poşet",
        corporate_bag_desc: "Markanıza özel tasarlanmış poşetler",
        promo_bag: "Özel Tasarım Poşet",
        promo_bag_desc: "Markanıza özel tasarlanmış poşetler",
        printed_bag: "Streç",
        printed_bag_desc: "Yüksek kaliteli streç poşetler",
        industrial_bag: "Streç",
        industrial_bag_desc: "Endüstriyel kullanım için dayanıklı streç poşetler",
        video_bag: "Video Ürün",
        video_bag_desc: "Üretim sürecimizi görmek için izleyin",
        gift_bag: "Ambalaj",
        gift_bag_desc: "Özel günler için ambalaj poşetleri",
        
        // Contact Page
        contact_title: "İletişim",
        contact_subtitle: "Bizimle iletişime geçin",
        contact_address: "Adres: İstanbul, Türkiye",
        get_in_touch: "İletişime Geçin",
        send_us_message: "Bize Mesaj Gönderin",
        your_name: "Adınız",
        your_email: "E-posta Adresiniz",
        your_message: "Mesajınız",
        your_phone: "Telefon Numaranız",
        send: "Gönder",
        work_hours: "Pazartesi - Cumartesi: 08:00 - 19:00",
        
        // Footer
        about_us: "Hakkımızda",
        about_us_desc: "10 Numara Ambalaj olarak, yüksek kaliteli plastik poşet çözümleriyle işletmenizi bir adım öne taşıyoruz.",
        quick_links: "Hızlı Linkler",
        social_media: "Sosyal Medya",
        rights_reserved: "© 2026 10 Numara Ambalaj. Tüm hakları saklıdır.",
        developed_by: "Fanari Labs",
        
        // Contact Info
        phone: "+90 (501) 366 80 33",
        email_us: "on.numara.plastik@gmail.com"
    },
    en: {
        // Newly added keys
        contact_city: "Mersin, Turkey",
        work_hours_short: "Mon - Sat: 08:00 - 19:00",
        fanari_btn: "Fanari Labs - Click to Contact",
        fanari_title: "Fanari Labs",
        fanari_desc: "Modern Web Technologies and Design Agency",
        dev_by: "Web Design & Development:",
        page_title_home: "10 Number Packaging - Plastic Bag Printing",
        page_title_catalog: "10 Number Packaging - Catalog",
        page_title_products: "Product Gallery - 10 Number Packaging",
        page_title_contact: "Contact | 10 Number Packaging",
        
        // Navigation
        home: "Home",
        catalog: "Catalog",
        products: "Products",
        about: "About Us",
        contact: "Contact",
        
        // Common
        call_now: "Call Now",
        phone_orders: "Orders are only taken by phone",
        all: "All",
        unprinted_bags: "Unprinted Bags",
        printed_bags: "Printed Bags",
        color_standard: "Standard",
        color_black: "Black",
        color_brown: "Brown",
        color_gold: "Gold",
        color_white_silver: "White Silver",
        color_see_through: "Transparent",
        
        // New Keys
        address: "Address",
        benefit_1: "Custom Printed Production",
        benefit_2: "High Print Quality",
        benefit_3: "Sustainable Production",
        benefit_4: "Fast Delivery",
        cat_custom: "Custom Design Packaging",
        cat_market: "Printed Bags",
        cat_nuts: "Nuts Packaging",
        cat_seed: "Seed Packaging",
        cat_spice: "Spice Packaging",
        contact_desc: "We would be happy to contact you for your orders, products or collaboration opportunities.",
        contact_soon: "We will contact you as soon as possible.",
        contact_us_btn: "Contact Us",
        custom_design_desc: "Innovative packaging designs completely specific to your brand that stand out on the shelf.",
        custom_production: "Custom Design Production",
        custom_production_desc: "We offer custom printed packaging solutions reflecting your business identity.",
        durable_structure: "Durable Structure",
        email: "Email",
        explore_advantages: "Explore Advantages",
        explore_products: "Explore Products &rarr;",
        fast_support: "Fast Support",
        fast_support_desc: "From production to delivery, we are with you whenever you need.",
        feature_1_desc: "With size, color and design options suited to your needs.",
        feature_2_desc: "Vibrant colors, clear details and durable printing technology.",
        feature_3_desc: "Nature-respecting production with eco-friendly materials.",
        feature_4_desc: "On-time production and fast delivery with reliable logistics.",
        feature_footer_desc: "We produce better every day with our modern production infrastructure.",
        featured_products_eyebrow: "FEATURED PRODUCTS",
        flexo_print: "Flexible Print",
        footer_desc: "We take your brand one step further with high quality printed flexible packaging solutions.",
        get_directions: "Get Directions",
        get_in_touch_eye: "GET IN TOUCH",
        hero_headline: "Your packaging,<br>speaks before<br>your product.",
        high_res_print: "High Resolution Print",
        message_desc: "You can send us a message for all your questions and comments.",
        message_us: "Message Us",
        multi_material: "Multi Material",
        nuts_pack: "Nuts Packaging",
        nuts_pack_desc: "Ziplock doypack packaging with transparent windows preserving freshness.",
        open_in_google: "Open in Google Maps",
        pack_quality: "Packaging Quality",
        phone_whatsapp: "Phone / WhatsApp",
        printed_packaging_solutions: "PRINTED PACKAGING SOLUTIONS",
        produce_together: "Let's Produce Together &rarr;",
        product_categories: "PRODUCT CATEGORIES",
        products_desc: "Check out our customizable flexible packaging solutions suited to your business needs.",
        quality_control: "Quality Control",
        quality_print: "Quality Print,",
        quality_standard: "Quality Standards",
        quality_standard_desc: "Durable production at international standards, suitable for food safety.",
        ready_eyebrow: "ARE YOU READY?",
        reliable_service: "Reliable Service",
        reliable_service_desc: "Customer satisfaction oriented, transparent and reliable business partnership.",
        review_catalog: "Review Catalog &rarr;",
        see_all_products: "See All Products &rarr;",
        seed_pack: "Seed Packaging",
        seed_pack_desc: "Special barrier packaging protecting seeds against moisture and light.",
        send_message: "Send Message",
        spice_pack: "Spice Packaging",
        spice_pack_desc: "Specially designed packages with high barrier properties preventing aroma loss.",
        standart_assurance: "Standard Assurance",
        strong_brand: "Strong Brand.",
        timely_delivery: "Timely Delivery",
        timely_delivery_desc: "We deliver your orders completely on the promised date.",
        why_us: "Why 10 Numara Packaging?",
        why_us_desc: "With years of experience, we produce packaging solutions that add value to your brand.",
        why_us_headline: "Quality is not a coincidence.<br>It is the product of experience.",
        working_hours: "Working Hours",
        
        // Home Page
        hero_title: "10 Number Packaging",
        hero_subtitle: "Quality and Reliable Packaging Solutions",
        welcome: "Redefine Quality in Packaging!",
        welcome_message: "We highlight your brand with custom printed packaging solutions. Manufactured with quality and trust.",
        explore_now: "Explore Now",
        
        // Products Page
        product_gallery: "Product Gallery",
        quality_solutions: "Quality and durable plastic bag solutions",
        our_products: "Our Products",
        product_details: "Product Details",
        market_bag: "Custom Design Bag",
        market_bag_desc: "Bags specially designed for your brand",
        custom_bag: "Custom Design Bag",
        custom_bag_desc: "Bags specially designed for your brand",
        corporate_bag: "Custom Design Bag",
        corporate_bag_desc: "Bags specially designed for your brand",
        promo_bag: "Custom Design Bag",
        promo_bag_desc: "Bags specially designed for your brand",
        printed_bag: "Stretch",
        printed_bag_desc: "High quality stretch bags",
        industrial_bag: "Stretch",
        industrial_bag_desc: "Durable stretch bags for industrial use",
        video_bag: "Video Product",
        video_bag_desc: "Watch to see our production process",
        gift_bag: "Gift Bag",
        gift_bag_desc: "Gift bags for special occasions",
        
        // Contact Page
        contact_title: "Contact",
        contact_subtitle: "Get in touch with us",
        contact_address: "Address: Istanbul, Turkey",
        get_in_touch: "Get in Touch",
        send_us_message: "Send Us a Message",
        your_name: "Your Name",
        your_email: "Your Email",
        your_message: "Your Message",
        your_phone: "Your Phone Number",
        send: "Send",
        work_hours: "Monday - Saturday: 08:00 - 19:00",
        
        // Footer
        about_us: "About Us",
        about_us_desc: "As 10 Numara Ambalaj, we take your business one step further with high-quality plastic bag solutions.",
        quick_links: "Quick Links",
        social_media: "Social Media",
        rights_reserved: "© 2026 10 Numara Ambalaj. All Rights Reserved.",
        developed_by: "Fanari Labs",
        
        // Contact Info
        phone: "+90 (501) 366 80 33",
        email_us: "on.numara.plastik@gmail.com"
    },
    ar: {
        // Newly added keys
        contact_city: "مرسين، تركيا",
        work_hours_short: "الاثنين - السبت: 08:00 - 19:00",
        fanari_btn: "Fanari Labs - انقر للتواصل",
        fanari_title: "Fanari Labs",
        fanari_desc: "وكالة تقنيات الويب الحديثة والتصميم",
        dev_by: "تصميم وتطوير الويب:",
        page_title_home: "10 رقم التغليف - طباعة الأكياس البلاستيكية",
        page_title_catalog: "10 رقم التغليف - الكتالوج",
        page_title_products: "معرض المنتجات - 10 رقم التغليف",
        page_title_contact: "اتصل بنا | 10 رقم التغليف",
        
        // Navigation
        home: "الرئيسية",
        catalog: "الكتالوج",
        products: "المنتجات",
        about: "من نحن",
        contact: "اتصل بنا",
        
        // Common
        call_now: "اتصل الآن",
        phone_orders: "يتم أخذ الطلبات عبر الهاتف فقط",
        all: "الكل",
        unprinted_bags: "اكياس غير مطبوعة",
        printed_bags: "اكياس مطبوعة",
        color_standard: "عادي",
        color_black: "أسود",
        color_brown: "بني",
        color_gold: "ذهبي",
        color_white_silver: "أبيض فضي",
        color_see_through: "شفاف",
        
        // New Keys
        address: "العنوان",
        benefit_1: "إنتاج مطبوع مخصص",
        benefit_2: "جودة طباعة عالية",
        benefit_3: "إنتاج مستدام",
        benefit_4: "توصيل سريع",
        cat_custom: "تغليف بتصميم مخصص",
        cat_market: "أكياس مطبوعة",
        cat_nuts: "تغليف المكسرات",
        cat_seed: "تغليف البذور",
        cat_spice: "تغليف البهارات",
        contact_desc: "يسعدنا التواصل معك بخصوص طلباتك أو منتجاتك أو فرص التعاون.",
        contact_soon: "سنتصل بك في أقرب وقت ممكن.",
        contact_us_btn: "اتصل بنا",
        custom_design_desc: "تصميمات تغليف مبتكرة ومخصصة بالكامل لعلامتك التجارية وتبرز على الرف.",
        custom_production: "إنتاج بتصميم مخصص",
        custom_production_desc: "نقدم حلول تغليف مطبوعة مخصصة تعكس هوية عملك.",
        durable_structure: "هيكل متين",
        email: "البريد الإلكتروني",
        explore_advantages: "استكشف المزايا",
        explore_products: "استكشف المنتجات &rarr;",
        fast_support: "دعم سريع",
        fast_support_desc: "من الإنتاج إلى التسليم، نحن معك وقتما تشاء.",
        feature_1_desc: "بخيارات الحجم واللون والتصميم التي تناسب احتياجاتك.",
        feature_2_desc: "ألوان نابضة بالحياة وتفاصيل واضحة وتقنية طباعة متينة.",
        feature_3_desc: "إنتاج صديق للبيئة بمواد تراعي الطبيعة.",
        feature_4_desc: "إنتاج في الوقت المحدد وتوصيل سريع مع لوجستيات موثوقة.",
        feature_footer_desc: "ننتج بشكل أفضل كل يوم مع بنيتنا التحتية الإنتاجية الحديثة.",
        featured_products_eyebrow: "منتجات مميزة",
        flexo_print: "طباعة مرنة",
        footer_desc: "نأخذ علامتك التجارية خطوة إلى الأمام مع حلول تغليف مرنة مطبوعة عالية الجودة.",
        get_directions: "احصل على الاتجاهات",
        get_in_touch_eye: "تواصل معنا",
        hero_headline: "تغليفك،<br>يتحدث قبل<br>منتجك.",
        high_res_print: "طباعة عالية الدقة",
        message_desc: "يمكنك إرسال رسالة لنا بخصوص جميع أسئلتك وتعليقاتك.",
        message_us: "راسلنا",
        multi_material: "مواد متعددة",
        nuts_pack: "تغليف المكسرات",
        nuts_pack_desc: "أكياس دوي باك بسحاب ونافذة شفافة تحفظ النضارة.",
        open_in_google: "افتح في خرائط جوجل",
        pack_quality: "جودة التغليف",
        phone_whatsapp: "الهاتف / واتساب",
        printed_packaging_solutions: "حلول التغليف المطبوعة",
        produce_together: "لننتج معاً &rarr;",
        product_categories: "فئات المنتجات",
        products_desc: "تحقق من حلول التغليف المرنة القابلة للتخصيص والتي تناسب احتياجات عملك.",
        quality_control: "مراقبة الجودة",
        quality_print: "طباعة عالية الجودة،",
        quality_standard: "معايير الجودة",
        quality_standard_desc: "إنتاج متين بمعايير دولية، مناسب لسلامة الغذاء.",
        ready_eyebrow: "هل أنت مستعد؟",
        reliable_service: "خدمة موثوقة",
        reliable_service_desc: "شراكة عمل شفافة وموثوقة تركز على رضا العملاء.",
        review_catalog: "مراجعة الكتالوج &rarr;",
        see_all_products: "عرض جميع المنتجات &rarr;",
        seed_pack: "تغليف البذور",
        seed_pack_desc: "تغليف حاجز خاص يحمي البذور من الرطوبة والضوء.",
        send_message: "إرسال رسالة",
        spice_pack: "تغليف البهارات",
        spice_pack_desc: "عبوات مصممة خصيصًا بخصائص حاجز عالية تمنع فقدان النكهة.",
        standart_assurance: "ضمان قياسي",
        strong_brand: "علامة تجارية قوية.",
        timely_delivery: "تسليم في الوقت المناسب",
        timely_delivery_desc: "نسلم طلباتك بالكامل في الموعد الموعود.",
        why_us: "لماذا 10 رقم التغليف؟",
        why_us_desc: "بفضل سنوات الخبرة، ننتج حلول تغليف تضيف قيمة لعلامتك التجارية.",
        why_us_headline: "الجودة ليست صدفة.<br>إنها نتاج الخبرة.",
        working_hours: "ساعات العمل",
        
        // Home Page
        hero_title: "10 رقم التغليف",
        hero_subtitle: "حلول تغليف عالية الجودة وموثوقة",
        welcome: "إعادة تعريف الجودة في التغليف!",
        welcome_message: "نسلط الضوء على علامتك التجارية من خلال حلول التغليف المطبوعة المخصصة. نصنع بجودة وثقة.",
        explore_now: "اكتشف الآن",
        
        // Products Page
        product_gallery: "معرض المنتجات",
        quality_solutions: "حلول أكياس بلاستيكية عالية الجودة ومتينة",
        our_products: "منتجاتنا",
        product_details: "تفاصيل المنتج",
        market_bag: "كيس تصميم مخصص",
        market_bag_desc: "أكياس مصممة خصيصاً لعلامتك التجارية",
        custom_bag: "كيس تصميم مخصص",
        custom_bag_desc: "أكياس مصممة خصيصاً لعلامتك التجارية",
        corporate_bag: "كيس تصميم مخصص",
        corporate_bag_desc: "أكياس مصممة خصيصاً لعلامتك التجارية",
        promo_bag: "كيس تصميم مخصص",
        promo_bag_desc: "أكياس مصممة خصيصاً لعلامتك التجارية",
        printed_bag: "ستريتش",
        printed_bag_desc: "أكياس ستريتش عالية الجودة",
        industrial_bag: "ستريتش",
        industrial_bag_desc: "أكياس ستريتش متينة للاستخدام الصناعي",
        video_bag: "منتج فيديو",
        video_bag_desc: "شاهد عملية الإنتاج لدينا",
        gift_bag: "امبلاج",
        gift_bag_desc: "أكياس امبلاج للمناسبات الخاصة",
        
        // Contact Page
        contact_title: "اتصل بنا",
        contact_subtitle: "تواصل معنا",
        contact_address: "العنوان: إسطنبول، تركيا",
        get_in_touch: "تواصل معنا",
        send_us_message: "أرسل لنا رسالة",
        your_name: "اسمك",
        your_email: "بريدك الإلكتروني",
        your_message: "رسالتك",
        your_phone: "رقم الهاتف",
        send: "إرسال",
        work_hours: "الاثنين - السبت: 08:00 - 19:00",
        
        // Footer
        about_us: "من نحن",
        about_us_desc: "نحن في 10 Numara Ambalaj، نأخذ عملك خطوة إلى الأمام مع حلول أكياس بلاستيكية عالية الجودة.",
        quick_links: "روابط سريعة",
        social_media: "وسائل التواصل الاجتماعي",
        rights_reserved: "© 2026 10 Numara Ambalaj. جميع الحقوق محفوظة.",
        developed_by: "Fanari Labs",
        
        // Contact Info
        phone: "+90 (501) 366 80 33",
        email_us: "on.numara.plastik@gmail.com"
    }
};

// Make translations globally available
window.translations = translations;

// Make setLanguage available globally
window.setLanguage = function(lang) {
    console.log('Setting language to:', lang); // Debug log
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Set RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    // Translate all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length); // Debug log
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Translating element:', key); // Debug log
        
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
            console.log('Translated to:', translations[lang][key]); // Debug log
        } else {
            console.log('Translation not found for key:', key); // Debug log
        }
    });

    // Translate all input placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update custom language selector UI
    const currentLangSpans = document.querySelectorAll('.current-lang');
    currentLangSpans.forEach(span => {
        span.textContent = lang.toUpperCase();
    });
}

// Custom Dropdown logic
window.toggleLangMenu = function(btn, event) {
    if (event) event.stopPropagation();
    
    // Close other menus first
    const allMenus = document.querySelectorAll('.lang-menu');
    allMenus.forEach(menu => {
        if (menu !== btn.nextElementSibling) {
            menu.classList.remove('active');
        }
    });

    const menu = btn.nextElementSibling;
    menu.classList.toggle('active');
};

window.selectLanguage = function(lang) {
    window.setLanguage(lang);
    window.closeLangMenu();
};

window.closeLangMenu = function() {
    const menus = document.querySelectorAll('.lang-menu');
    menus.forEach(menu => menu.classList.remove('active'));
};

document.addEventListener('click', () => {
    if (window.closeLangMenu) window.closeLangMenu();
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); // Debug log
    const savedLang = localStorage.getItem('preferredLanguage') || 'tr';
    window.setLanguage(savedLang);
}); 
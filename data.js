// ============================
// AGRICULTURE DICTIONARY DATA
// ============================

const AGRICULTURE_DICTIONARY = [
    {
        term: "Crop Rotation",
        category: "crops",
        definition: "The practice of growing different types of crops in the same area across sequential seasons to improve soil health and optimize nutrients.",
        translations: {
            en: "Crop Rotation",
            hi: "फसल चक्र",
            bn: "শস্য আবর্তন",
            ta: "பயிர் சுழற்சி",
            te: "పంట మార్పిడి",
            mr: "पीक फेरपालट",
            gu: "પાકની ફેરબદલી",
            kn: "ಬೆಳೆ ಸರದಿ",
            ml: "വിള പരിക്രമണം",
            pa: "ਫਸਲ ਚੱਕਰ"
        }
    },
    {
        term: "Photosynthesis",
        category: "crops",
        definition: "The process by which green plants transform light energy into chemical energy, converting carbon dioxide and water into glucose.",
        translations: {
            en: "Photosynthesis",
            hi: "प्रकाश संश्लेषण",
            bn: "সালোকসংশ্লেষণ",
            ta: "ஒளிச்சேர்க்கை",
            te: "కిరణజన్య సంయోగక్రియ",
            mr: "प्रकाशसंश्लेषण",
            gu: "પ્રકાશસંશ્લેષણ",
            kn: "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ",
            ml: "പ്രകാശസംശ്ലേഷണം",
            pa: "ਪ੍ਰਕਾਸ਼ ਸੰਸਲੇਸ਼ਣ"
        }
    },
    {
        term: "Germination",
        category: "crops",
        definition: "The process by which a plant grows from a seed, beginning when the seed absorbs water and the embryo starts to grow.",
        translations: {
            en: "Germination",
            hi: "अंकुरण",
            bn: "অঙ্কুরোদগম",
            ta: "முளைப்பு",
            te: "మొలకెత్తడం",
            mr: "अंकुरण",
            gu: "અંકુરણ",
            kn: "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ",
            ml: "മുളയ്ക്കൽ",
            pa: "ਪੁੰਗਰਨਾ"
        }
    },
    {
        term: "Organic Farming",
        category: "soil",
        definition: "An agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal.",
        translations: {
            en: "Organic Farming",
            hi: "जैविक खेती",
            bn: "জৈব চাষ",
            ta: "இயற்கை விவசாயம்",
            te: "సేంద్రియ వ్యవసాయం",
            mr: "सेंद्रिय शेती",
            gu: "જૈવિક ખેતી",
            kn: "ಸಾವಯವ ಕೃಷಿ",
            ml: "ജൈവകൃഷി",
            pa: "ਜੈਵਿਕ ਖੇਤੀ"
        }
    },
    {
        term: "Drip Irrigation",
        category: "irrigation",
        definition: "A type of micro-irrigation system that has the potential to save water and nutrients by allowing water to drip slowly to the roots of plants.",
        translations: {
            en: "Drip Irrigation",
            hi: "टपक सिंचाई",
            bn: "বিন্দু সেচ",
            ta: "சொட்டு நீர் பாசனம்",
            te: "బిందు సేద్యం",
            mr: "ठिबक सिंचन",
            gu: "ટપક સિંચાઈ",
            kn: "ಹನಿ ನೀರಾವರಿ",
            ml: "തുള്ളിനന",
            pa: "ਤੁਪਕਾ ਸਿੰਚਾਈ"
        }
    },
    {
        term: "Fertilizer",
        category: "soil",
        definition: "Any material of natural or synthetic origin that is applied to soil or to plant tissues to supply one or more plant nutrients essential to the growth of plants.",
        translations: {
            en: "Fertilizer",
            hi: "उर्वरक",
            bn: "সার",
            ta: "உரம்",
            te: "ఎరువు",
            mr: "खत",
            gu: "ખાતર",
            kn: "ಗೊಬ್ಬರ",
            ml: "വളം",
            pa: "ਖਾਦ"
        }
    },
    {
        term: "Pesticide",
        category: "pests",
        definition: "Substances that are meant to control pests, including weeds, insects, and diseases.",
        translations: {
            en: "Pesticide",
            hi: "कीटनाशक",
            bn: "কীটনাশক",
            ta: "பூச்சிக்கொல்லி",
            te: "క్రిమిసంహారక మందు",
            mr: "कीटकनाशक",
            gu: "જંતુનાશક",
            kn: "ಕೀಟನಾಶಕ",
            ml: "കീടനാശിനി",
            pa: "ਕੀਟਨਾਸ਼ਕ"
        }
    },
    {
        term: "Sustainable Agriculture",
        category: "crops",
        definition: "Farming in sustainable ways meeting society's present food and textile needs, without compromising the ability for current or future generations to meet their needs.",
        translations: {
            en: "Sustainable Agriculture",
            hi: "सतत कृषि",
            bn: "টেকসই কৃষি",
            ta: "நிலையான விவசாயம்",
            te: "స్థిరమైన వ్యవసాయం",
            mr: "शाश्वत शेती",
            gu: "ટકાઉ ખેતી",
            kn: "ಸುಸ್ಥಿರ ಕೃಷಿ",
            ml: "സുസ്ഥിര കൃഷി",
            pa: "ਟਿਕਾਊ ਖੇਤੀ"
        }
    }
];

const CATEGORIES = [
    {
        id: "crops",
        emoji: "🌾",
        name: "Crops & Cultivation",
        description: "Terminology related to crop science, planting techniques, and harvest management",
        count: AGRICULTURE_DICTIONARY.filter(t => t.category === "crops").length
    },
    {
        id: "soil",
        emoji: "🪨",
        name: "Soil Science",
        description: "Terms about soil composition, fertility, nutrients, and land management",
        count: AGRICULTURE_DICTIONARY.filter(t => t.category === "soil").length
    },
    {
        id: "irrigation",
        emoji: "💧",
        name: "Irrigation & Water",
        description: "Water management, irrigation systems, and conservation techniques",
        count: AGRICULTURE_DICTIONARY.filter(t => t.category === "irrigation").length
    },
    {
        id: "livestock",
        emoji: "🐄",
        name: "Livestock & Dairy",
        description: "Animal husbandry, veterinary care, dairy farming, and feed management",
        count: AGRICULTURE_DICTIONARY.filter(t => t.category === "livestock").length
    },
    {
        id: "machinery",
        emoji: "🚜",
        name: "Farm Machinery",
        description: "Agricultural equipment, tools, and mechanization technologies",
        count: AGRICULTURE_DICTIONARY.filter(t => t.category === "machinery").length
    },
    {
        id: "pests",
        emoji: "🐛",
        name: "Pest Management",
        description: "Pest control, disease prevention, biological control, and crop protection",
        count: AGRICULTURE_DICTIONARY.filter(t => t.category === "pests").length
    }
];

// Language metadata
const LANGUAGES = {
    en: { name: "English", flag: "🇬🇧" },
    hi: { name: "Hindi", flag: "🇮🇳" },
    bn: { name: "Bengali", flag: "🇮🇳" },
    ta: { name: "Tamil", flag: "🇮🇳" },
    te: { name: "Telugu", flag: "🇮🇳" },
    mr: { name: "Marathi", flag: "🇮🇳" },
    gu: { name: "Gujarati", flag: "🇮🇳" },
    kn: { name: "Kannada", flag: "🇮🇳" },
    ml: { name: "Malayalam", flag: "🇮🇳" },
    pa: { name: "Punjabi", flag: "🇮🇳" },
    or: { name: "Odia", flag: "🇮🇳" },
    as: { name: "Assamese", flag: "🇮🇳" },
    ur: { name: "Urdu", flag: "🇵🇰" }
};

// UI Translations for the entire website
const UI_TRANSLATIONS = {
    en: {
        nav_home: "Home",
        nav_translator: "Translator",
        nav_dictionary: "Dictionary",
        nav_categories: "Categories",
        nav_about: "About",
        hero_title: "IndicTrans2 Agriculture <span class='logo-accent'>Translator</span>",
        hero_subtitle: "Translate agriculture topics and terminology with AI-powered domain-specific accuracy across 22+ Indian languages.",
        hero_btn_start: "Get Started",
        hero_btn_explore: "Explore Dictionary",
        translator_title: "IndicTrans2 Agriculture <span class='logo-accent'>Translator</span>",
        translator_subtitle: "Translate agriculture topics and terminology with AI-powered domain-specific accuracy",
        label_from: "FROM",
        label_to: "TO",
        btn_translate: "Translate with IndicTrans2",
        placeholder_source: "Enter agriculture text to translate...",
        placeholder_target: "Translation will appear here...",
        dict_title: "Agriculture <span class='logo-accent'>Dictionary</span>",
        dict_subtitle: "Browse our comprehensive agricultural terminology database with IndicTrans2 translations",
        dict_search_placeholder: "Search agriculture terms... (e.g., photosynthesis, irrigation)",
        footer_copyright: "© 2026 AgriTranslate. Built with IndicTrans2."
    },
    hi: {
        nav_home: "होम",
        nav_translator: "अनुवादक",
        nav_dictionary: "शब्दकोश",
        nav_categories: "श्रेणियां",
        nav_about: "हमारे बारे में",
        hero_title: "IndicTrans2 कृषि <span class='logo-accent'>अनुवादक</span>",
        hero_subtitle: "22+ भारतीय भाषाओं में एआई-संचालित डोमेन-विशिष्ट सटीकता के साथ कृषि विषयों और शब्दावली का अनुवाद करें।",
        hero_btn_start: "शुरू करें",
        hero_btn_explore: "शब्दकोश देखें",
        translator_title: "IndicTrans2 कृषि <span class='logo-accent'>अनुवादक</span>",
        translator_subtitle: "एआई-संचालित डोमेन-विशिष्ट सटीकता के साथ कृषि विषयों और शब्दावली का अनुवाद करें",
        label_from: "से",
        label_to: "तक",
        btn_translate: "IndicTrans2 के साथ अनुवाद करें",
        placeholder_source: "अनुवाद करने के लिए कृषि पाठ दर्ज करें...",
        placeholder_target: "अनुवाद यहाँ दिखाई देगा...",
        dict_title: "कृषि <span class='logo-accent'>शब्दकोश</span>",
        dict_subtitle: "IndicTrans2 अनुवादों के साथ हमारे व्यापक कृषि शब्दावली डेटाबेस को ब्राउज़ करें",
        dict_search_placeholder: "कृषि शब्द खोजें... (जैसे, प्रकाश संश्लेषण, सिंचाई)",
        footer_copyright: "© 2026 AgriTranslate. IndicTrans2 के साथ निर्मित।"
    },
    te: {
        nav_home: "హోమ్",
        nav_translator: "అనువాదకుడు",
        nav_dictionary: "నిఘంటువు",
        nav_categories: "వర్గాలు",
        nav_about: "మా గురించి",
        hero_title: "IndicTrans2 వ్యవసాయ <span class='logo-accent'>అనువాదకుడు</span>",
        hero_subtitle: "22+ భారతీయ భాషలలో AI- ఆధారిత డొమైన్-నిర్దిష్ట ఖచ్చితత్వంతో వ్యవసాయ విషయాలు మరియు పరిభాషను అనువదించండి.",
        hero_btn_start: "ప్రారంభించండి",
        hero_btn_explore: "నిఘంటువును అన్వేషించండి",
        translator_title: "IndicTrans2 వ్యవసాయ <span class='logo-accent'>అనువాదకుడు</span>",
        translator_subtitle: "AI- ఆధారిత డొమైన్-నిర్దిష్ట ఖచ్చితత్వంతో వ్యవసాయ విషయాలు మరియు పరిభాషను అనువదించండి",
        label_from: "నుండి",
        label_to: "కు",
        btn_translate: "IndicTrans2 తో అనువదించండి",
        placeholder_source: "అనువదించడానికి వ్యవసాయ వచనాన్ని నమోదు చేయండి...",
        placeholder_target: "అనువాదం ఇక్కడ కనిపిస్తుంది...",
        dict_title: "వ్యవసాయ <span class='logo-accent'>నిఘంటువు</span>",
        dict_subtitle: "IndicTrans2 అనువాదాలతో మా సమగ్ర వ్యవసాయ పరిభాష డేటాబేస్‌ను బ్రౌజ్ చేయండి",
        dict_search_placeholder: "వ్యవసాయ పదాల కోసం వెతకండి... (ఉదా., కిరణజన్య సంయోగక్రియ, నీటి పారుదల)",
        footer_copyright: "© 2026 AgriTranslate. IndicTrans2 తో నిర్మించబడింది."
    }
};

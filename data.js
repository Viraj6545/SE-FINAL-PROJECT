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

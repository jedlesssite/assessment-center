const numericalQuestions = [
    // --- المستوى الأول: السهل (1-10) ---
    {
        id: 1,
        q: "بناءً على الرسم، أي ربع حقق أعلى مبيعات إجمالية؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <rect width="400" height="200" fill="#ffffff" rx="4"/>
                <rect x="60" y="100" width="40" height="70" fill="#3b82f6" rx="2" />
                <text x="80" y="90" font-size="12" font-weight="900" text-anchor="middle">120k</text>
                <rect x="140" y="50" width="40" height="120" fill="#10b981" rx="2" />
                <text x="160" y="40" font-size="12" font-weight="900" text-anchor="middle" fill="#059669">210k</text>
                <rect x="220" y="80" width="40" height="90" fill="#3b82f6" rx="2" />
                <text x="240" y="70" font-size="12" font-weight="900" text-anchor="middle">150k</text>
                <rect x="300" y="70" width="40" height="100" fill="#3b82f6" rx="2" />
                <text x="320" y="60" font-size="12" font-weight="900" text-anchor="middle">180k</text>
                <text x="80" y="185" font-size="10" fill="#94a3b8">Q1</text><text x="160" y="185" font-size="10" fill="#94a3b8">Q2</text>
                <text x="240" y="185" font-size="10" fill="#94a3b8">Q3</text><text x="320" y="185" font-size="10" fill="#94a3b8">Q4</text>
            </svg>`,
        options: [{text: "Q1"}, {text: "Q2"}, {text: "Q3"}, {text: "Q4"}],
        correctIndex: 1,
        explanation: "بالمقارنة البصرية والرقمية، الربع الثاني (Q2) هو الأعلى بقيمة 210 ألف."
    },
    {
        id: 2,
        q: "ما هي قيمة ميزانية التشغيل إذا كانت تمثل 20% من الميزانية الكلية (500,000$ )؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="20" y="20" width="360" height="80" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-dasharray="4"/>
                <text x="200" y="55" text-anchor="middle" font-size="15" font-weight="900">الميزانية الكلية: 500,000 $</text>
                <text x="200" y="85" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">نسبة التشغيل: 20%</text>
            </svg>`,
        options: [{text: "50,000$"}, {text: "100,000$"}, {text: "150,000$"}, {text: "200,000$"}],
        correctIndex: 1,
        explanation: "الحساب: 500,000 × 0.20 = 100,000 دولار."
    },
    {
        id: 3,
        q: "كم يبلغ إجمالي عدد الموظفين في الشركة بناءً على الأقسام الثلاثة؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <circle cx="100" cy="80" r="35" fill="#3b82f6" opacity="0.1"/> <text x="100" y="85" text-anchor="middle" font-weight="900">45</text>
                <text x="100" y="135" text-anchor="middle" font-size="10">تقني</text>
                <circle cx="200" cy="80" r="35" fill="#3b82f6" opacity="0.1"/> <text x="200" y="85" text-anchor="middle" font-weight="900">30</text>
                <text x="200" y="135" text-anchor="middle" font-size="10">مبيعات</text>
                <circle cx="300" cy="80" r="35" fill="#3b82f6" opacity="0.1"/> <text x="300" y="85" text-anchor="middle" font-weight="900">25</text>
                <text x="300" y="135" text-anchor="middle" font-size="10">إدارة</text>
            </svg>`,
        options: [{text: "80"}, {text: "90"}, {text: "100"}, {text: "110"}],
        correctIndex: 2,
        explanation: "نقوم بجمع الموظفين في كافة الأقسام: 45 + 30 + 25 = 100 موظف."
    },
    {
        id: 4,
        q: "ما هو معدل سعر الوحدة الواحدة في شهر يناير؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="50" y="30" width="300" height="70" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
                <text x="200" y="55" text-anchor="middle" font-size="12">القيمة الإجمالية: 4000$</text>
                <text x="200" y="85" text-anchor="middle" font-size="14" font-weight="900" fill="#10b981">الكمية المباعة: 50 وحدة</text>
            </svg>`,
        options: [{text: "60$"}, {text: "70$"}, {text: "80$"}, {text: "90$"}],
        correctIndex: 2,
        explanation: "سعر الوحدة = القيمة الكلية ÷ الكمية. الحساب: 4000 ÷ 50 = 80 دولار."
    },
    {
        id: 5,
        q: "بناءً على المنحنى، كم كان عدد المشتركين في شهر مارس؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <polyline points="50,150 150,100 250,50 350,80" fill="none" stroke="#3b82f6" stroke-width="3"/>
                <circle cx="50" cy="150" r="4"/><text x="50" y="170" font-size="9">يناير: 100</text>
                <circle cx="150" cy="100" r="4"/><text x="150" y="120" font-size="9">فبراير: 250</text>
                <circle cx="250" cy="50" r="6" fill="#10b981"/><text x="250" y="40" font-size="11" font-weight="900">مارس: 400</text>
            </svg>`,
        options: [{text: "250"}, {text: "300"}, {text: "400"}, {text: "500"}],
        correctIndex: 2,
        explanation: "بالنظر للنقطة الخضراء في الرسم، نجد أن قيمة شهر مارس هي 400 مشترك."
    },
    {
        id: 6,
        q: "إذا كانت نسبة الإناث في الشركة هي 40%، فما هي نسبة الذكور؟",
        visual: `
            <svg viewBox="0 0 400 100">
                <rect x="50" y="40" width="300" height="30" rx="15" fill="#f1f5f9"/>
                <rect x="50" y="40" width="120" height="30" rx="15" fill="#ec4899"/>
                <text x="110" y="60" text-anchor="middle" font-size="10" fill="white" font-weight="bold">إناث 40%</text>
                <text x="250" y="60" text-anchor="middle" font-size="10" fill="#64748b" font-weight="bold">ذكور ؟</text>
            </svg>`,
        options: [{text: "40%"}, {text: "50%"}, {text: "60%"}, {text: "70%"}],
        correctIndex: 2,
        explanation: "بما أن الإجمالي 100%، فإن نسبة الذكور = 100% - 40% = 60%."
    },
    {
        id: 7,
        q: "ما هو الفرق بين مبيعات الفرع (أ) والفرع (ب)؟",
        visual: `
            <svg viewBox="0 0 400 180">
                <!-- خلفية توضيحية -->
                <rect x="10" y="10" width="380" height="160" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
                
                <!-- الفرع أ -->
                <rect x="40" y="40" width="320" height="45" rx="4" fill="#3b82f6"/>
                <text x="200" y="70" font-size="16" font-weight="900" text-anchor="middle" fill="#ffffff">الفرع أ: 850 وحدة</text>
                
                <!-- الفرع ب -->
                <rect x="40" y="95" width="320" height="45" rx="4" fill="#94a3b8"/>
                <text x="200" y="125" font-size="16" font-weight="900" text-anchor="middle" fill="#ffffff">الفرع ب: 600 وحدة</text>

                <!-- خط توضيحي للفرق -->
                <text x="200" y="160" font-size="11" font-weight="bold" text-anchor="middle" fill="#2563eb">تحليل البيانات: مقارنة مبيعات الفروع</text>
            </svg>`,
        options: [{text: "150"}, {text: "200"}, {text: "250"}, {text: "300"}],
        correctIndex: 2,
        explanation: "لحساب الفرق، نطرح قيمة الفرع ب من الفرع أ: 850 - 600 = 250 وحدة."
    },
    {
        id: 8,
        q: "كم ثانية في 3 دقائق ونصف؟",
        visual: `
            <svg viewBox="0 0 400 100">
                <circle cx="200" cy="50" r="40" fill="none" stroke="#e2e8f0" stroke-width="5"/>
                <text x="200" y="55" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b">3.5 min</text>
            </svg>`,
        options: [{text: "180"}, {text: "200"}, {text: "210"}, {text: "240"}],
        correctIndex: 2,
        explanation: "الدقيقة 60 ثانية. (3 × 60) + 30 = 180 + 30 = 210 ثانية."
    },
    {
        id: 9,
        q: "إذا كانت تكلفة الشحن هي 5$ لكل 1 كجم، كم تكلفة شحن طرد يزن 12 كجم؟",
        visual: `
            <svg viewBox="0 0 400 100">
                <rect x="100" y="20" width="200" height="60" rx="4" fill="#fff" stroke="#3b82f6" stroke-width="2"/>
                <text x="200" y="55" text-anchor="middle" font-weight="900">Weight: 12 KG</text>
            </svg>`,
        options: [{text: "50$"}, {text: "60$"}, {text: "70$"}, {text: "120$"}],
        correctIndex: 1,
        explanation: "الحساب: الوزن × السعر. أي 12 × 5 = 60 دولار."
    },
    {
        id: 10,
        q: "أي سنة كانت فيها المصروفات أقل ما يمكن؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="50" y="60" width="50" height="60" fill="#3b82f6"/><text x="75" y="50" text-anchor="middle">90k</text><text x="75" y="140" font-size="10">2020</text>
                <rect x="150" y="90" width="50" height="30" fill="#ef4444"/><text x="175" y="80" text-anchor="middle">45k</text><text x="175" y="140" font-size="10">2021</text>
                <rect x="250" y="40" width="50" height="80" fill="#3b82f6"/><text x="275" y="30" text-anchor="middle">120k</text><text x="275" y="140" font-size="10">2022</text>
            </svg>`,
        options: [{text: "2020"}, {text: "2021"}, {text: "2022"}, {text: "متساوون"}],
        correctIndex: 1,
        explanation: "عام 2021 هو الأقل مصروفات بقيمة 45 ألف (العمود الأحمر)."
    },
    // --- المستوى الثاني: التحليل المتوسط (11-20) ---
    {
        id: 11,
        q: "بناءً على نمو الأرباح، ما هي نسبة الزيادة في أرباح الشركة بين عامي 2022 و 2023؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <rect x="10" y="10" width="380" height="180" rx="8" fill="#ffffff" stroke="#f1f5f9" stroke-width="2"/>
                <rect x="70" y="100" width="80" height="70" rx="4" fill="#94a3b8"/>
                <text x="110" y="90" font-size="14" font-weight="900" text-anchor="middle" fill="#475569">100,000$</text>
                <text x="110" y="185" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">عام 2022</text>
                
                <rect x="250" y="50" width="80" height="120" rx="4" fill="#3b82f6"/>
                <text x="290" y="40" font-size="14" font-weight="900" text-anchor="middle" fill="#1e40af">125,000$</text>
                <text x="290" y="185" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">عام 2023</text>
            </svg>`,
        options: [{text: "15%"}, {text: "20%"}, {text: "25%"}, {text: "30%"}],
        correctIndex: 2,
        explanation: "نسبة الزيادة = (الفرق بين القيمتين ÷ القيمة الأصلية) × 100. الحساب: (25,000 ÷ 100,000) = 0.25 أي 25%."
    },
    {
        id: 12,
        q: "إذا كان حجم السوق الكلي 500 مليون دولار، فما هي قيمة حصة 'الشركة أ' بالدولار؟",
        visual: `
            <svg viewBox="0 0 400 180">
                <rect x="20" y="20" width="360" height="140" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-dasharray="4"/>
                <text x="200" y="60" font-size="16" font-weight="900" text-anchor="middle" fill="#1e3a8a">إجمالي السوق: 500 مليون$</text>
                <circle cx="150" cy="110" r="30" fill="#3b82f6"/>
                <text x="260" y="115" font-size="18" font-weight="900" text-anchor="middle" fill="#2563eb">حصة الشركة أ: 40%</text>
            </svg>`,
        options: [{text: "150 مليون"}, {text: "200 مليون"}, {text: "250 مليون"}, {text: "300 مليون"}],
        correctIndex: 1,
        explanation: "الحساب: نضرب إجمالي السوق في نسبة الشركة. 500 × 0.40 = 200 مليون دولار."
    },
    {
        id: 13,
        q: "إذا كانت الشركة تدفع عمولة 2% على كل عملية تحويل، كم ستكون العمولة لمبلغ 40,000$؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="50" y="20" width="300" height="80" rx="4" fill="#fff" stroke="#e2e8f0"/>
                <text x="200" y="50" text-anchor="middle" font-weight="bold" fill="#64748b">قيمة الحوالة: 40,000$</text>
                <text x="200" y="85" text-anchor="middle" font-size="18" font-weight="900" fill="#ef4444">نسبة العمولة: 2%</text>
            </svg>`,
        options: [{text: "400$"}, {text: "800$"}, {text: "1200$"}, {text: "2000$"}],
        correctIndex: 1,
        explanation: "الحساب: 40,000 × (2 ÷ 100) = 800 دولار عمولة."
    },
    {
        id: 14,
        q: "ما هو متوسط مبيعات الفروع الثلاثة بناءً على البيانات الموضحة؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <text x="80" y="40" text-anchor="middle" font-size="12">فرع أ</text>
                <rect x="50" y="50" width="60" height="60" fill="#3b82f6" rx="4"/>
                <text x="80" y="85" text-anchor="middle" fill="white" font-weight="bold">200</text>
                
                <text x="200" y="40" text-anchor="middle" font-size="12">فرع ب</text>
                <rect x="170" y="50" width="60" height="90" fill="#3b82f6" rx="4"/>
                <text x="200" y="100" text-anchor="middle" fill="white" font-weight="bold">300</text>
                
                <text x="320" y="40" text-anchor="middle" font-size="12">فرع ج</text>
                <rect x="290" y="50" width="60" height="120" fill="#3b82f6" rx="4"/>
                <text x="320" y="115" text-anchor="middle" fill="white" font-weight="bold">400</text>
            </svg>`,
        options: [{text: "250"}, {text: "300"}, {text: "350"}, {text: "900"}],
        correctIndex: 1,
        explanation: "المتوسط = مجموع القيم ÷ عددها. الحساب: (200+300+400) = 900. ثم 900 ÷ 3 = 300 وحدة."
    },
    {
        id: 15,
        q: "ما هو متوسط عدد الزيارات اليومية للموقع بناءً على الأيام الثلاثة الموضحة؟",
        visual: `
            <svg viewBox="0 0 400 180">
                <!-- خلفية مجمعة -->
                <rect x="10" y="30" width="380" height="120" rx="15" fill="#eff6ff" opacity="0.5"/>
                
                <!-- بيانات الأيام موسطة تماماً -->
                <g transform="translate(80, 80)">
                    <circle r="35" fill="#3b82f6"/>
                    <text y="5" font-size="14" font-weight="900" text-anchor="middle" fill="#ffffff">100</text>
                    <text y="55" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a">يوم 1</text>
                </g>
                
                <g transform="translate(200, 80)">
                    <circle r="35" fill="#3b82f6"/>
                    <text y="5" font-size="14" font-weight="900" text-anchor="middle" fill="#ffffff">200</text>
                    <text y="55" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a">يوم 2</text>
                </g>
                
                <g transform="translate(320, 80)">
                    <circle r="35" fill="#3b82f6"/>
                    <text y="5" font-size="14" font-weight="900" text-anchor="middle" fill="#ffffff">300</text>
                    <text y="55" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a">يوم 3</text>
                </g>
            </svg>`,
        options: [{text: "150"}, {text: "200"}, {text: "250"}, {text: "300"}],
        correctIndex: 1,
        explanation: "لحساب المتوسط: (100 + 200 + 300) = 600. ثم نقسم المجموع على عدد الأيام (3): 600 ÷ 3 = 200 زيارة."
    },
    {
        id: 16,
        q: "سعر منتج 250$ وبعد الخصم أصبح 200$. ما هي نسبة الخصم التي حصلت عليها؟",
        visual: `
            <svg viewBox="0 0 400 100">
                <text x="100" y="55" text-anchor="middle" font-size="14" fill="#94a3b8" style="text-decoration: line-through;">250$</text>
                <path d="M 160 50 L 220 50" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="280" y="55" text-anchor="middle" font-size="20" font-weight="900" fill="#10b981">200$</text>
            </svg>`,
        options: [{text: "15%"}, {text: "20%"}, {text: "25%"}, {text: "50%"}],
        correctIndex: 1,
        explanation: "مقدار الخصم هو 50$. النسبة = (50 ÷ 250) × 100 = 20%."
    },
    {
        id: 17,
        q: "في فريق مكون من 50 موظفاً، نسبة التقنيين إلى الإداريين هي 4 : 1. كم عدد التقنيين؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="50" y="40" width="300" height="40" rx="20" fill="#f1f5f9"/>
                <rect x="50" y="40" width="240" height="40" rx="20" fill="#3b82f6"/>
                <text x="170" y="65" text-anchor="middle" fill="white" font-weight="bold">تقني (4 حصص)</text>
                <text x="320" y="65" text-anchor="middle" fill="#64748b" font-weight="bold">إداري (1)</text>
            </svg>`,
        options: [{text: "10"}, {text: "30"}, {text: "40"}, {text: "45"}],
        correctIndex: 2,
        explanation: "مجموع الحصص = 4 + 1 = 5. قيمة الحصة الواحدة = 50 ÷ 5 = 10. عدد التقنيين = 4 حصص × 10 = 40 تقنياً."
    },
    {
        id: 18,
        q: "إذا كانت ميزانية الإيجار (5000$) تمثل 50% من إجمالي مصروفات المكتب، كم إجمالي المصروفات؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <circle cx="200" cy="80" r="60" fill="none" stroke="#e2e8f0" stroke-width="15"/>
                <path d="M 200 20 A 60 60 0 0 1 200 140" fill="none" stroke="#ef4444" stroke-width="15"/>
                <text x="200" y="85" text-anchor="middle" font-weight="900" font-size="14">الإيجار = 5000$</text>
                <text x="200" y="105" text-anchor="middle" font-size="10" fill="#ef4444">يمثل 50%</text>
            </svg>`,
        options: [{text: "7,500$"}, {text: "10,000$"}, {text: "12,500$"}, {text: "15,000$"}],
        correctIndex: 1,
        explanation: "بما أن 5000 هي النصف (50%)، فإن الإجمالي هو الضعف. 5000 × 2 = 10,000 دولار."
    },
    {
        id: 19,
        q: "بناءً على التوجه الحالي، إذا زاد عدد العملاء بانتظام بمقدار 10 كل شهر، كم سيكون عددهم في شهر أبريل؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <text x="100" y="50" text-anchor="middle">يناير: 10</text>
                <text x="200" y="50" text-anchor="middle">فبراير: 20</text>
                <text x="300" y="50" text-anchor="middle">مارس: 30</text>
                <rect x="150" y="80" width="100" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6"/>
                <text x="200" y="105" text-anchor="middle" font-weight="900">أبريل: ؟</text>
            </svg>`,
        options: [{text: "35"}, {text: "40"}, {text: "45"}, {text: "50"}],
        correctIndex: 1,
        explanation: "الزيادة ثابتة (+10). شهر مارس كان 30، إذاً أبريل سيكون 30 + 10 = 40 عميلاً."
    },
      {
        id: 20,
        q: "أكمل جدول البيانات المفقود: إذا كان الربح = الإيرادات - المصروفات، فما هي قيمة الربح؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <!-- إطار البطاقة -->
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
                
                <!-- صف الإيرادات -->
                <text x="200" y="70" font-size="16" font-weight="900" text-anchor="middle" fill="#1e293b">الإيرادات: 50,000$</text>
                
                <!-- صف المصروفات -->
                <text x="200" y="110" font-size="16" font-weight="900" text-anchor="middle" fill="#64748b">المصروفات: 32,500$</text>
                
                <!-- خط فاصل -->
                <line x1="60" y1="130" x2="340" y2="130" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4"/>
                
                <!-- النتيجة المطلوبة -->
                <text x="200" y="165" font-size="18" font-weight="900" text-anchor="middle" fill="#10b981">صافي الربح: ؟؟؟</text>
            </svg>`,
        options: [{text: "15,500$"}, {text: "17,500$"}, {text: "20,000$"}, {text: "22,500$"}],
        correctIndex: 1,
        explanation: "الربح هو حاصل طرح المصروفات من الإيرادات: 50,000 - 32,500 = 17,500 دولار."
    },
      // --- المستوى الثالث: التحليل المتقدم (21-30) ---
    {
        id: 21,
        q: "إذا كانت تكلفة المادة الخام تمثل 40% من سعر المنتج النهائي البالغ 200$، فكم تبلغ قيمة المواد الخام؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="50" y="40" width="300" height="70" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5"/>
                <text x="200" y="70" font-size="16" font-weight="900" text-anchor="middle" fill="#1e293b">سعر المنتج: 200$</text>
                <text x="200" y="100" font-size="14" font-weight="700" text-anchor="middle" fill="#2563eb">نسبة المواد الخام: 40%</text>
            </svg>`,
        options: [{text: "80$"}, {text: "120$"}, {text: "40$"}, {text: "100$"}],
        correctIndex: 0, // الإجابة في الخيار الأول
        explanation: "الحساب: نضرب السعر في النسبة. 200 × 0.40 = 80 دولار."
    },
    {
        id: 22,
        q: "بناءً على الجدول، ما هو متوسط مبيعات الأقسام الأربعة؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <rect x="40" y="40" width="320" height="130" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
                <text x="200" y="70" text-anchor="middle" font-weight="bold">أ: 100 | ب: 150</text>
                <text x="200" y="100" text-anchor="middle" font-weight="bold">ج: 250 | د: 300</text>
                <line x1="60" y1="120" x2="340" y2="120" stroke="#cbd5e1" stroke-dasharray="2"/>
                <text x="200" y="150" text-anchor="middle" font-size="11" fill="#64748b">عدد الأقسام: 4</text>
            </svg>`,
        options: [{text: "150"}, {text: "180"}, {text: "250"}, {text: "200"}],
        correctIndex: 3, // الإجابة في الخيار الرابع
        explanation: "المتوسط = المجموع ÷ العدد. (100+150+250+300) = 800. ثم 800 ÷ 4 = 200."
    },
    {
        id: 23,
        q: "إذا زادت أرباح الشركة بنسبة 10% كل سنة، وكانت أرباح السنة الحالية 500,000$، كم ستكون بعد سنتين؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="50" y="20" width="300" height="80" rx="10" fill="#ecfdf5" stroke="#10b981"/>
                <text x="200" y="55" text-anchor="middle" font-weight="900">الحالي: 500,000$</text>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="#059669">معدل النمو المركب: 10% سنوياً</text>
            </svg>`,
        options: [{text: "550,000$"}, {text: "605,000$"}, {text: "600,000$"}, {text: "510,000$"}],
        correctIndex: 1, // الإجابة في الخيار الثاني
        explanation: "السنة الأولى: 500,000 + 10% = 550,000. السنة الثانية: 550,000 + 10% (من القيمة الجديدة) = 605,000 دولار."
    },
    {
        id: 24,
        q: "ما هي حصة 'الشركة ب' من إجمالي المبيعات البالغ 400,000 وحدة؟",
        visual: `
            <svg viewBox="0 0 400 180">
                <rect x="50" y="40" width="300" height="40" fill="#f1f5f9" rx="20"/>
                <rect x="50" y="40" width="120" height="40" fill="#3b82f6" rx="20"/>
                <text x="110" y="65" text-anchor="middle" fill="white" font-weight="bold">الشركة ب: 30%</text>
                <text x="250" y="65" text-anchor="middle" fill="#64748b">أخرى: 70%</text>
                <text x="200" y="120" text-anchor="middle" font-weight="900">إجمالي المبيعات: 400,000</text>
            </svg>`,
        options: [{text: "80,000"}, {text: "100,000"}, {text: "120,000"}, {text: "150,000"}],
        correctIndex: 2, // الإجابة في الخيار الثالث
        explanation: "الحساب: 400,000 × 0.30 = 120,000 وحدة."
    },
    {
        id: 25,
        q: "إذا انخفضت تكلفة الإنتاج من 50$ إلى 40$، ما هي نسبة التوفير المحققة؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <circle cx="100" cy="60" r="35" fill="#f1f5f9"/> <text x="100" y="65" text-anchor="middle" font-weight="bold">50$</text>
                <path d="M 150 60 L 250 60" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)"/>
                <circle cx="300" cy="60" r="35" fill="#ecfdf5" stroke="#10b981"/> <text x="300" y="65" text-anchor="middle" font-weight="bold" fill="#059669">40$</text>
            </svg>`,
        options: [{text: "20%"}, {text: "10%"}, {text: "25%"}, {text: "15%"}],
        correctIndex: 0, // الإجابة في الخيار الأول
        explanation: "نسبة التوفير = (النقص ÷ السعر الأصلي) × 100. الحساب: (10 ÷ 50) = 0.20 أي 20%."
    },
    {
        id: 26,
        q: "بناءً على بيانات الموظفين، كم موظفاً في قسم 'الإدارة' إذا كان الإجمالي 200؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="50" y="30" width="300" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
                <text x="200" y="60" text-anchor="middle" font-weight="bold">التقني: 60%</text>
                <text x="200" y="90" text-anchor="middle" font-weight="bold">المبيعات: 25%</text>
                <text x="200" y="115" text-anchor="middle" font-weight="900" fill="#ef4444">الإدارة: ؟%</text>
            </svg>`,
        options: [{text: "15 موظف"}, {text: "20 موظف"}, {text: "25 موظف"}, {text: "30 موظف"}],
        correctIndex: 3, // الإجابة في الخيار الرابع
        explanation: "أولاً نحسب نسبة الإدارة: 100% - (60% + 25%) = 15%. ثم نحسب عددهم: 200 × 0.15 = 30 موظفاً."
    },
    {
        id: 27,
        q: "إذا كانت سرعة معالجة الطلبات هي 4 طلبات في الدقيقة، كم نحتاج من الوقت لمعالجة 100 طلب؟",
        visual: `
            <svg viewBox="0 0 400 100">
                <rect x="100" y="20" width="200" height="60" rx="30" fill="#eff6ff" stroke="#3b82f6"/>
                <text x="200" y="55" text-anchor="middle" font-weight="bold">المعدل: 4 طلبات / دقيقة</text>
            </svg>`,
        options: [{text: "20 دقيقة"}, {text: "25 دقيقة"}, {text: "30 دقيقة"}, {text: "40 دقيقة"}],
        correctIndex: 1, // الإجابة في الخيار الثاني
        explanation: "الزمن = العدد الكلي ÷ المعدل. الحساب: 100 ÷ 4 = 25 دقيقة."
    },
    {
        id: 28,
        q: "أي ربع سجل أكبر فجوة مبيعات بين العام الحالي والسابق؟",
        visual: `
            <svg viewBox="0 0 400 180">
                <!-- Q1 -->
                <rect x="60" y="80" width="20" height="70" fill="#94a3b8"/> <rect x="80" y="60" width="20" height="90" fill="#3b82f6"/>
                <text x="80" y="170" text-anchor="middle" font-size="10">Q1 (Gap: 20)</text>
                <!-- Q2 -->
                <rect x="160" y="100" width="20" height="50" fill="#94a3b8"/> <rect x="180" y="40" width="20" height="110" fill="#3b82f6"/>
                <text x="180" y="170" text-anchor="middle" font-size="10" font-weight="900" fill="#ef4444">Q2 (Gap: 60)</text>
                <!-- Q3 -->
                <rect x="260" y="70" width="20" height="80" fill="#94a3b8"/> <rect x="280" y="60" width="20" height="90" fill="#3b82f6"/>
                <text x="280" y="170" text-anchor="middle" font-size="10">Q3 (Gap: 10)</text>
            </svg>`,
        options: [{text: "Q1"}, {text: "Q3"}, {text: "Q2"}, {text: "جميعها متساوية"}],
        correctIndex: 2, // الإجابة في الخيار الثالث
        explanation: "بالنظر للرسم، الفارق بين العمودين في الربع الثاني (Q2) هو الأكبر (60 وحدة)."
    },
    {
        id: 29,
        q: "إذا كانت ضريبة القيمة المضافة 15%، كم سيكون السعر الإجمالي لمنتج سعره الأصلي 400$؟",
        visual: `
            <svg viewBox="0 0 400 100">
                <rect x="20" y="20" width="360" height="60" fill="#f8fafc" rx="4"/>
                <text x="200" y="55" text-anchor="middle" font-weight="900" font-size="18">Price: 400$ + 15% VAT</text>
            </svg>`,
        options: [{text: "460$"}, {text: "415$"}, {text: "445$"}, {text: "500$"}],
        correctIndex: 0, // الإجابة في الخيار الأول
        explanation: "قيمة الضريبة: 400 × 0.15 = 60$. الإجمالي: 400 + 60 = 460 دولار."
    },
    {
        id: 30,
        q: "خزان سعته 600 لتر، يفرغ بمعدل 50 لتراً في الساعة. بعد كم ساعة سيفرغ تماماً؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="150" y="20" width="100" height="100" fill="none" stroke="#1e293b" stroke-width="2"/>
                <path d="M 150 120 L 250 120 L 250 60 L 150 60 Z" fill="#3b82f6" opacity="0.4"/>
                <text x="200" y="140" text-anchor="middle" font-size="10">600L | -50L/hr</text>
            </svg>`,
        options: [{text: "10 ساعات"}, {text: "6 ساعات"}, {text: "8 ساعات"}, {text: "12 ساعة"}],
        correctIndex: 3, // الإجابة في الخيار الرابع
        explanation: "الزمن = السعة ÷ معدل التفريغ. الحساب: 600 ÷ 50 = 12 ساعة."
    },
     // --- المستوى الرابع: مستوى الخبراء (31-40) ---
    {
        id: 31,
        q: "إذا كانت تكلفة المنتج 120$ ويتم بيعه بربح 25%، ثم تم عمل خصم 10% على سعر البيع النهائي، فما هو صافي الربح بالدولار؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="20" y="20" width="360" height="110" rx="8" fill="#f8fafc" stroke="#3b82f6"/>
                <text x="200" y="55" text-anchor="middle" font-weight="900" fill="#1e293b">التكلفة الأساسية: 120$</text>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="#2563eb">هامش الربح الأولي: 25%</text>
                <text x="200" y="110" text-anchor="middle" font-size="12" fill="#ef4444">خصم لاحق للمستهلك: 10%</text>
            </svg>`,
        options: [{text: "12$"}, {text: "15$"}, {text: "30$"}, {text: "135$"}],
        correctIndex: 1, // 120 + 25% = 150. ثم 150 - 10% = 135. الربح: 135-120 = 15.
        explanation: "1. سعر البيع قبل الخصم: 120 × 1.25 = 150$. 2. سعر البيع بعد الخصم: 150 × 0.90 = 135$. 3. صافي الربح: 135 - 120 = 15$."
    },
    {
        id: 32,
        q: "بناءً على الرسم، أي قسم لديه أعلى معدل إنتاجية لكل موظف (الإنتاج ÷ عدد الموظفين)؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <!-- قسم أ -->
                <rect x="50" y="50" width="120" height="60" rx="4" fill="#3b82f6" opacity="0.1" stroke="#3b82f6"/>
                <text x="110" y="75" text-anchor="middle" font-size="10" font-weight="bold">قسم أ: 1000 وحدة</text>
                <text x="110" y="95" text-anchor="middle" font-size="10">10 موظفين</text>
                <!-- قسم ب -->
                <rect x="230" y="50" width="120" height="60" rx="4" fill="#10b981" opacity="0.1" stroke="#10b981"/>
                <text x="290" y="75" text-anchor="middle" font-size="10" font-weight="bold">قسم ب: 1200 وحدة</text>
                <text x="290" y="95" text-anchor="middle" font-size="10">8 موظفين</text>
                <line x1="200" y1="40" x2="200" y2="160" stroke="#e2e8f0" stroke-dasharray="4"/>
            </svg>`,
        options: [{text: "القسم أ (100 وحدة/فرد)"}, {text: "القسم ب (150 وحدة/فرد)"}, {text: "متساويان"}, {text: "لا يمكن التحديد"}],
        correctIndex: 1,
        explanation: "إنتاجية قسم أ: 1000 ÷ 10 = 100 وحدة. إنتاجية قسم ب: 1200 ÷ 8 = 150 وحدة. إذاً القسم ب أعلى إنتاجية."
    },
    {
        id: 33,
        q: "بعد زيادة الراتب بنسبة 20%، أصبح راتب الموظف 6000$. كم كان راتبه الأصلي قبل الزيادة؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <path d="M 50 80 L 350 80" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round"/>
                <path d="M 50 80 L 300 80" stroke="#10b981" stroke-width="8" stroke-linecap="round"/>
                <text x="200" y="50" text-anchor="middle" font-weight="900" font-size="16">الراتب الحالي: 6000$</text>
                <text x="200" y="110" text-anchor="middle" font-size="11" fill="#059669">تمت إضافة زيادة بنسبة 20%</text>
            </svg>`,
        options: [{text: "4800$"}, {text: "5000$"}, {text: "5200$"}, {text: "5800$"}],
        correctIndex: 1,
        explanation: "القيمة الأصلية = القيمة الحالية ÷ (1 + نسبة الزيادة). الحساب: 6000 ÷ 1.20 = 5000 دولار."
    },
    {
        id: 34,
        q: "إذا كانت الشركة تستهلك 40% من مخزونها في الأسبوع، وبدأ الأسبوع بـ 2000 وحدة، كم سيتبقى بعد 'أسبوعين' (بافتراض نفس نسبة الاستهلاك من المتبقي)؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="150" y="20" width="100" height="100" fill="none" stroke="#1e293b" stroke-width="2"/>
                <rect x="150" y="90" width="100" height="30" fill="#f59e0b"/>
                <text x="200" y="140" text-anchor="middle" font-weight="bold">مخزون البداية: 2000</text>
            </svg>`,
        options: [{text: "1200 وحدة"}, {text: "800 وحدة"}, {text: "720 وحدة"}, {text: "400 وحدة"}],
        correctIndex: 2, // 2000 - 40% = 1200. ثم 1200 - 40% = 720.
        explanation: "بعد الأسبوع الأول: 2000 - 800 (40%) = 1200. بعد الأسبوع الثاني: 1200 - 480 (40% من الـ 1200) = 720 وحدة."
    },
    {
        id: 35,
        q: "ما هو المبلغ الإجمالي الذي سيتم دفعه لقرض بقيمة 10,000$ بفائدة سنوية مركبة 10% لمدة سنتين؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="30" y="20" width="340" height="80" rx="4" fill="#fff" stroke="#3b82f6" stroke-width="2"/>
                <text x="200" y="55" text-anchor="middle" font-weight="900">Principal: 10,000$</text>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="#2563eb">Rate: 10% compounded annually (2 Years)</text>
            </svg>`,
        options: [{text: "11,000$"}, {text: "12,000$"}, {text: "12,100$"}, {text: "11,500$"}],
        correctIndex: 2,
        explanation: "السنة الأولى: 10,000 + 1000 (فائدة) = 11,000. السنة الثانية: 11,000 + 1100 (فائدة 10% من الجديد) = 12,100 دولار."
    },
    {
        id: 36,
        q: "أي ربع حقق فيه 'المنتج أ' تفوقاً على 'المنتج ب' بأكبر فارق مبيعات؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <!-- Q1: A=100, B=80 (Diff 20) -->
                <rect x="60" y="100" width="15" height="70" fill="#3b82f6"/> <rect x="75" y="120" width="15" height="50" fill="#94a3b8"/>
                <text x="75" y="185" font-size="9" text-anchor="middle">Q1</text>
                <!-- Q2: A=200, B=120 (Diff 80) -->
                <rect x="180" y="40" width="15" height="130" fill="#3b82f6"/> <rect x="195" y="90" width="15" height="80" fill="#94a3b8"/>
                <text x="195" y="185" font-size="10" font-weight="900" text-anchor="middle" fill="#1e40af">Q2 (Top)</text>
                <!-- Q3: A=150, B=140 (Diff 10) -->
                <rect x="300" y="70" width="15" height="100" fill="#3b82f6"/> <rect x="315" y="80" width="15" height="90" fill="#94a3b8"/>
                <text x="315" y="185" font-size="9" text-anchor="middle">Q3</text>
            </svg>`,
        options: [{text: "Q1"}, {text: "Q3"}, {text: "Q2"}, {text: "الفارق ثابت"}],
        correctIndex: 2,
        explanation: "في الربع الثاني (Q2)، كان الفارق هو 80 وحدة (200 مقابل 120)، وهو الفارق الأكبر في الرسم البياني."
    },
    {
        id: 37,
        q: "تحتاج ماكينة إلى 3 لترات من الوقود لتعمل لمدة 45 دقيقة. كم لتراً تحتاج لتعمل لمدة 3 ساعات؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="20" y="20" width="360" height="80" rx="40" fill="#f1f5f9"/>
                <text x="100" y="65" text-anchor="middle" font-weight="bold">3L = 45 min</text>
                <circle cx="200" cy="60" r="10" fill="#3b82f6"/>
                <text x="300" y="65" text-anchor="middle" font-weight="900" fill="#2563eb">? L = 180 min</text>
            </svg>`,
        options: [{text: "9 لتر"}, {text: "10 لتر"}, {text: "12 لتر"}, {text: "15 لتر"}],
        correctIndex: 2,
        explanation: "3 ساعات = 180 دقيقة. نسبة الوقت هي 180 ÷ 45 = 4 مرات زيادة. إذاً نحتاج 3 لترات × 4 = 12 لتر وقود."
    },
    {
        id: 38,
        q: "إذا كانت نسبة المصروفات الإدارية إلى التشغيلية هي 2 : 5، وكانت المصروفات التشغيلية 25,000$، كم إجمالي المصروفات؟",
        visual: `
            <svg viewBox="0 0 400 150">
                <rect x="50" y="40" width="300" height="40" fill="#f1f5f9" rx="4"/>
                <rect x="50" y="40" width="215" height="40" fill="#3b82f6" rx="4"/>
                <text x="150" y="65" text-anchor="middle" fill="white" font-weight="bold">تشغيلي: 25,000$ (5 حصص)</text>
                <text x="200" y="110" text-anchor="middle" font-size="12">إداري: 2 حصة</text>
            </svg>`,
        options: [{text: "30,000$"}, {text: "35,000$"}, {text: "40,000$"}, {text: "45,000$"}],
        correctIndex: 1, // الحصة الواحدة 5000. الإداري 10000. المجموع 35000.
        explanation: "الحصة الواحدة = 25,000 ÷ 5 = 5,000$. المصروفات الإدارية (حصتان) = 10,000$. الإجمالي: 25,000 + 10,000 = 35,000$."
    },
    {
        id: 39,
        q: "بناءً على منحنى الكفاءة، في أي مرحلة (ساعة) وصل الإنتاج إلى ذروته (Peak) قبل أن يبدأ في التراجع؟",
        visual: `
            <svg viewBox="0 0 400 200">
                <path d="M 50 150 Q 150 20 250 150 T 350 180" fill="none" stroke="#3b82f6" stroke-width="4"/>
                <circle cx="150" cy="55" r="6" fill="#ef4444"/>
                <text x="150" y="40" text-anchor="middle" font-weight="900" fill="#ef4444">Peak: 500 Units</text>
                <line x1="50" y1="170" x2="350" y2="170" stroke="#1e293b"/>
                <text x="50" y="190" font-size="10">Hr 1</text> <text x="150" y="190" font-size="10" font-weight="bold">Hr 3</text>
                <text x="250" y="190" font-size="10">Hr 5</text>
            </svg>`,
        options: [{text: "الساعة الأولى"}, {text: "الساعة الثالثة"}, {text: "الساعة الخامسة"}, {text: "الساعة السابعة"}],
        correctIndex: 1,
        explanation: "بمتابعة المنحنى، نجد أن النقطة الحمراء (القمة 500 وحدة) تقابل الساعة الثالثة (Hr 3) على المحور الأفقي."
    },
    {
        id: 40,
        q: "سيارة تستهلك 8 لترات بنزين لكل 100 كم. إذا كان سعر اللتر 2$، كم تبلغ تكلفة الوقود لرحلة مسافتها 450 كم؟",
        visual: `
            <svg viewBox="0 0 400 120">
                <rect x="50" y="20" width="300" height="80" rx="8" fill="#eff6ff" stroke="#2563eb"/>
                <text x="200" y="55" text-anchor="middle" font-weight="bold">Distance: 450 KM</text>
                <text x="200" y="85" text-anchor="middle" font-weight="900" fill="#1e40af">Rate: 8L/100km | Cost: 2$/L</text>
            </svg>`,
        options: [{text: "36$"}, {text: "45$"}, {text: "72$"}, {text: "80$"}],
        correctIndex: 2, // 4.5 * 8 = 36 لتر. 36 * 2 = 72.
        explanation: "1. كمية اللترات: 450 ÷ 100 = 4.5. ثم 4.5 × 8 = 36 لتر. 2. التكلفة: 36 لتر × 2$ = 72 دولار."
    }
];

// ============================================================
// VN Du Lịch – Dữ liệu chi tiết khu vui chơi / tour của từng điểm đến
// Mỗi điểm có 4 mục: vuiChoi (vui chơi), anUong (ăn uống nhỏ lẻ),
// suKien (sự kiện / lễ hội), vanHoa (văn hóa – tập quán – bản sắc)
// ============================================================

const SITE_ZONE = {
  hanoi: {
    vi: {
      vuiChoi: [
        "Dạo phố đi bộ Hồ Gươm cuối tuần, ngắm Tháp Rùa và cầu Thê Húc",
        "Khám phá Hoàng thành Thăng Long – di sản hơn 1.000 năm tuổi",
        "Thăm Văn Miếu – Quốc Tử Giám, trải nghiệm không gian khoa bảng xưa",
        "Đi chợ Đồng Xuân và len lỏi 36 phố phường cổ",
        "Dã ngoại công viên Hồ Tây, khu vui chơi – hồ bơi ngoài trời",
        "Xem múa rối nước Thăng Long – nét đặc sắc của vùng đồng bằng Bắc Bộ"
      ],
      anUong: [
        "Phở Bát Đàn – tô phở Hà Nội chuẩn vị từ năm 1920",
        "Bún chả Hàng Mành – thịt nướng than hoa chấm nước mắm chua ngọt",
        "Cà phê trứng Giảng – thức uống huyền thoại của Hà Nội",
        "Chả cá Lã Vọng – món ăn có lịch sử hơn 100 năm",
        "Cốm Làng Vòng – đặc sản mùa thu, ăn kèm chuối trứng cuốc",
        "Bánh tôm Hồ Tây, bánh cuốn Thanh Trì, nem rán phố cổ"
      ],
      suKien: [
        "Tết Nguyên đán – người Hà Nội chơi hoa đào, gói bánh chưng, xin chữ ông đồ",
        "Giỗ Tổ Hùng Vương (mùng 10 tháng 3 âm lịch) – dâng hương tưởng nhớ tổ tiên",
        "Lễ hội đền Gióng – lễ hội lớn nhất vùng đồng bằng Bắc Bộ",
        "Lễ hội chùa Hương – hội xuân kéo dài từ tháng Giêng đến tháng 3",
        "Hội Gò Đống Đa kỷ niệm chiến thắng Ngọc Hồi – Đống Đa",
        "Chợ hoa Tết và không khí phố cổ những ngày giáp Tết"
      ],
      vanHoa: [
        "Người Hà Nội nổi tiếng thanh lịch, tinh tế trong giao tiếp và cách sống",
        "Văn hóa trà, thú chơi hoa, chơi cây cảnh và nuôi chim cảnh",
        "Ca trù, hát chầu văn và nhã nhạc trong không gian phố cổ",
        "Nghệ thuật ẩm thực đề cao sự thanh tao: phở, bún, chả, cốm",
        "Tập quán đi lễ chùa đầu năm, xin chữ đầu xuân, thăm quan họ dịp lễ Tết",
        "Nếp sống phố phường gắn với 36 phố nghề truyền thống"
      ]
    },
    en: {
      vuiChoi: [
        "Weekend walking street around Hoan Kiem Lake with Turtle Tower and The Huc Bridge",
        "Explore the Imperial Citadel of Thang Long, a UNESCO site over 1,000 years old",
        "Visit the Temple of Literature – Vietnam's first national university",
        "Wander Dong Xuan Market and the maze of 36 ancient guild streets",
        "Picnic by West Lake, outdoor pool and amusement spots",
        "Watch Thang Long water puppetry – a signature art of the north"
      ],
      anUong: [
        "Pho Bat Dan – the iconic Hanoi pho recipe dating from 1920",
        "Bun cha Hang Manh – charcoal-grilled pork with sweet-sour fish sauce",
        "Giảng egg coffee – a legendary Hanoi drink",
        "Cha ca La Vong – a fish dish with over 100 years of history",
        "Green rice (com) from Lang Vong village – an autumn specialty",
        "West Lake shrimp fritters, Thanh Tri steamed rolls, old-quarter fried spring rolls"
      ],
      suKien: [
        "Tet (Lunar New Year) – peach blossoms, banh chung, calligraphy requests",
        "Hung Kings' Festival (10th day of 3rd lunar month)",
        "Giong Festival – one of the largest festivals of the Red River Delta",
        "Huong Pagoda Festival – spring pilgrimage from January to March",
        "Dong Da hill celebration of the Ngoc Hoi – Dong Da victory",
        "Tet flower markets and the festive old quarter atmosphere"
      ],
      vanHoa: [
        "Hanoians are known for their elegance and refined manners",
        "Tea culture, flower and bonsai appreciation, songbird keeping",
        "Ca tru, ceremonial singing and court music in old-town spaces",
        "Cuisine values subtlety: pho, bun, cha, com",
        "Customs of first-of-year temple visits, calligraphy and family gatherings",
        "Lifestyle shaped by the 36 traditional guild streets"
      ]
    },
    jp: {
      vuiChoi: [
        "週末のホアンキエム湖歩行者天国、亀の塔とテフック橋",
        "タンロン遺跡（世界遺産・千年の歴史）を探訪",
        "文廟（ベトナム最初の大学）を見学",
        "ドンスアン市場と36通りある旧市街を散策",
        "西湖の公園でピクニック、屋外プールや遊園地",
        "水上人形劇で北部の伝統芸術を鑑賞"
      ],
      anUong: [
        "バッタン・フォー（1920年創業の老舗）",
        "ブンチャー・ハンマイン（炭火焼き豚肉と甘酸っぱいヌクマム）",
        "ジャン・コーヒー（卵コーヒー）―ハノイの伝説的ドリンク",
        "チャーカー・ラヴォン（100年以上の歴史を持つ魚料理）",
        "ロンヴォン村の緑米（コム）―秋の味覚",
        "西湖の海老揚げ、タインチー蒸し春巻きなど"
      ],
      suKien: [
        "テト（旧正月）―桃の花、バインチュン、書道",
        "フン王祭り（旧暦3月10日）",
        "ジョン祭り―紅河デルタ最大級の祭り",
        "フオン寺院祭り―1月から3月までの春の巡礼",
        "ドンダーの丘でゴックホイの戦勝を祝う祭り",
        "旧市街のテト花市と祝祭の雰囲気"
      ],
      vanHoa: [
        "ハノイの人々は洗練された礼儀作法で知られる",
        "茶道文化、花・盆栽・小鳥を愛でる風習",
        "カ・チュー、チャウヴァンなどの伝統芸能",
        "食文化は繊細さを重視：フォー、ブン、チャー、コム",
        "新年に寺参りや書道、家族の集まりを大切にする風習",
        "36職人通りの伝統的な街の暮らし"
      ]
    }
  },

  halong: {
    vi: {
      vuiChoi: [
        "Du thuyền ngủ đêm trên vịnh, ngắm hoàng hôn giữa nghìn đảo đá",
        "Chèo kayak len lỏi hang động, đảo đá kỳ vĩ",
        "Khám phá hang Sửng Sốt, hang Đầu Gỗ với nhũ đá lung linh",
        "Leo đảo Ti Tốp ngắm toàn cảnh vịnh từ trên cao",
        "Thăm làng chài Cửa Vạn – làng chài nổi cổ nhất vịnh",
        "Vui chơi tại khu du lịch Tuần Châu, cáp treo Nữ Hoàng ngắm vịnh"
      ],
      anUong: [
        "Chả mực Hạ Long – đặc sản nổi tiếng ăn kèm bánh cuốn",
        "Hải sản tươi: tu hài, sá sùng, ngán, ghẹ, mực một nắng",
        "Bánh cuốn chả mực cho bữa sáng chuẩn vị",
        "Sam biển, cà súng, bề bề hấp bia",
        "Chợ Hạ Long mua hải sản tươi sống về chế biến",
        "Bánh gật gù, sữa chua thạch đen mát lạnh"
      ],
      suKien: [
        "Carnaval Hạ Long – lễ hội đường phố lớn vào mùa hè",
        "Lễ hội đền Cửa Ông – lễ hội tâm linh lớn của vùng biển Đông Bắc",
        "Lễ hội Yên Tử – hành hương về đất Phật của tỉnh Quảng Ninh",
        "Hội đua thuyền, chọi gà, thi đấu vật dân gian vùng biển",
        "Chợ phiên vùng cao, hội xuống đồng của cư dân ven vịnh",
        "Lễ hội cầu ngư – cầu mùa, cầu may của ngư dân"
      ],
      vanHoa: [
        "Văn hóa ngư dân vùng vịnh: sống trên làng chài, gắn bó với biển",
        "Tín ngưỡng thờ Mẫu và tục thờ thần biển của cư dân Đông Bắc",
        "Hát then, hát nhạc của đồng bào dân tộc vùng Quảng Ninh",
        "Nghề đánh bắt và nuôi trồng hải sản truyền thống",
        "Tập quán cúng tàu, lễ ra khơi đầu năm của ngư dân",
        "Ẩm thực biển đậm đà: mực, sá sùng, ngán được xem là báu vật biển"
      ]
    },
    en: {
      vuiChoi: [
        "Overnight cruise on the bay, sunset among thousands of karst islands",
        "Kayak through caves and limestone islets",
        "Explore Sung Sot and Dau Go caves with sparkling stalactites",
        "Climb Ti Top Island for a panoramic view of the bay",
        "Visit Cua Van – the oldest floating fishing village on the bay",
        "Tuan Chau entertainment complex and Nữ Hoàng cable car over the bay"
      ],
      anUong: [
        "Ha Long squid cake – famous specialty served with steamed rolls",
        "Fresh seafood: tu hai clams, sea worms (sa sung), ngán clams, crabs, one-sun dried squid",
        "Squid-cake steamed rolls for an authentic breakfast",
        "Sea snails, crabs and mantis shrimp with cold beer",
        "Ha Long market for live seafood",
        "Local desserts: banh gat gu, yogurt with black jelly"
      ],
      suKien: [
        "Ha Long Carnival – a huge street festival in summer",
        "Cua Ong Temple Festival – major spiritual festival of the northeastern sea region",
        "Yen Tu Festival – pilgrimage to the Buddhist holy land of Quang Ninh",
        "Boat races, cockfighting, traditional wrestling of the coastal region",
        "Highland markets and harvest customs of bay residents",
        "Cau Ngu (praying for fish) festival – blessing for the fishing season"
      ],
      vanHoa: [
        "Fishing culture: life on floating villages, bound to the sea",
        "Mother Goddess worship and sea-deity customs of the northeast",
        "Hat then and folk singing of Quang Ninh ethnic groups",
        "Traditional fishing and aquaculture crafts",
        "Customs of first-of-year boat ceremonies and sailing prayers",
        "Bold sea cuisine: squid, sa sung, ngán regarded as treasures of the sea"
      ]
    },
    jp: {
      vuiChoi: [
        "クルーズ船に泊まり、数千の石灰岩の島々の夕日を鑑賞",
        "カヤックで洞窟や奇岩の間を探検",
        "スンソット洞窟、ダウゴー洞窟の鍾乳洞探検",
        "ティートップ島に登って湾を一望",
        "湾で最も古い浮き漁村クアヴァンを訪問",
        "トゥアンチャウの娯楽施設、ヌーホアン・ロープウェイ"
      ],
      anUong: [
        "ハロン湾のイカ蒲焼き（チャームック）",
        "生きた海鮮：トゥハイ貝、サスン、ガン貝、カニ、干しイカ",
        "イカ蒲焼き入り蒸し春巻きの朝食",
        "巻貝・シャコと冷たいビール",
        "ハロン市場で生きた海鮮を調達",
        "バインガットグー、黒ゼリー入りヨーグルト"
      ],
      suKien: [
        "ハロン・カーニバル―夏の大通り祭り",
        "クアオン寺院祭り―北東部海域最大の信仰行事",
        "イエントゥ祭り―クアンニンの仏教聖地への巡礼",
        "ボートレース、闘鶏、海岸地帯の伝統相撲",
        "高地市場と湾の住民の収穫行事",
        "漁の豊漁を祈るカウグー祭り"
      ],
      vanHoa: [
        "漁村文化：浮き集落での暮らし、海との一体感",
        "マウ信仰と海神信仰の風習",
        "クアンニンの少数民族の歌（ハット・テン）",
        "伝統的な漁業と養殖の技術",
        "年始の船の儀式や出航祈願の風習",
        "海の恵みを活かした濃厚な海鮮料理"
      ]
    }
  },

  hoian: {
    vi: {
      vuiChoi: [
        "Dạo phố cổ đèn lồng, check-in Chùa Cầu hơn 400 năm tuổi",
        "Đi chợ đêm Hội An – mua sắm và ẩm thực đường phố",
        "Trải nghiệm làm đồ gốm tại làng gốm Thanh Hà",
        "Tham quan làng rau Trà Quế – làng rau hữu cơ hơn 500 năm",
        "Đi thuyền thúng qua rừng dừa Bảy Mẫu",
        "Tắm biển An Bàng, lặn ngắm san hô Cù Lao Chàm"
      ],
      anUong: [
        "Cao lầu Hội An – sợi mì vàng đặc trưng chỉ có tại phố Hội",
        "Mì Quảng, hoành thánh, bánh bao – bánh vạc (trắng xứ Hội)",
        "Cơm gà Hội An, bánh đập, bánh ít lá gai",
        "Chè Hội An: chè bắp, chè đậu xanh, chè thốt nốt",
        "Hải sản tươi ven sông Hoài, cơm hến, gỏi cá",
        "Trà gừng, nước mót và các thức uống dân gian địa phương"
      ],
      suKien: [
        "Đêm phố cổ (14 và mùng 1 âm lịch) – tắt điện thắp đèn lồng",
        "Lễ hội đèn lồng thả hoa đăng trên sông Hoài",
        "Tết Nguyên tiêu với không khí hội xuân rực rỡ",
        "Lễ hội nghề cá Cửa Đại, lễ cầu ngư của ngư dân vùng biển",
        "Hội thi gói bánh, thi nấu ăn ẩm thực đường phố",
        "Chương trình văn nghệ, bài chòi dân gian về đêm"
      ],
      vanHoa: [
        "Di sản thế giới UNESCO với sự giao thoa văn hóa Việt – Hoa – Nhật",
        "Các hội quán người Hoa: Phúc Kiến, Triều Châu, Quảng Đông, Hải Nam",
        "Nghề thủ công truyền thống: gốm Thanh Hà, mộc Kim Bồng, đèn lồng",
        "Bài chòi – nghệ thuật dân gian được UNESCO vinh danh",
        "Tập quán thả đèn hoa đăng, cúng mùng 1, ngày rằm tại mỗi nhà",
        "Nếp sống chậm rãi, mến khách của người dân phố Hội"
      ]
    },
    en: {
      vuiChoi: [
        "Stroll the lantern-lit old town and the 400+ year old Japanese Covered Bridge",
        "Visit the Hoi An night market for shopping and street food",
        "Try pottery at Thanh Ha pottery village",
        "Visit Tra Que organic herb village, 500+ years old",
        "Basket-boat ride through Bay Mau coconut forest",
        "Swim at An Bang beach, snorkel coral reefs at Cu Lao Cham"
      ],
      anUong: [
        "Cao lau Hoi An – the yellow noodles found only in Hoi An",
        "Mi Quang, wonton, white rose dumplings (hoanh thanh, banh bao – banh vac)",
        "Hoi An chicken rice, banh dap, banh it la gai",
        "Hoi An sweet soups: corn che, mung bean che, palm fruit che",
        "Fresh seafood by the Hoai River, clam rice, fish salad",
        "Ginger tea and local folk drinks"
      ],
      suKien: [
        "Full-moon old town nights (14th and 1st lunar days) – lanterns instead of electricity",
        "Lantern festival with flower lanterns released on the Hoai River",
        "Tet Nguyen Tieu (Lantern Festival) with vibrant spring atmosphere",
        "Cua Dai fishing festival and fishermen's Cau Ngu rites",
        "Banh-making contests and street-food cooking competitions",
        "Evening folk performances including Bai Choi singing"
      ],
      vanHoa: [
        "UNESCO World Heritage with Vietnamese – Chinese – Japanese cultural fusion",
        "Chinese assembly halls: Phuc Kien, Trieu Chau, Quang Dong, Hai Nam",
        "Traditional crafts: Thanh Ha pottery, Kim Bong carpentry, lantern making",
        "Bai Choi – folk art honoured by UNESCO",
        "Customs of releasing flower lanterns, first-day and full-moon offerings",
        "A slow, hospitable lifestyle of the people of Hoi An"
      ]
    },
    jp: {
      vuiChoi: [
        "ランタン輝く旧市街と400年以上の歴史を持つ来遠橋を散策",
        "ホイアン夜市で買い物と屋台グルメ",
        "タインハー陶器村で陶芸体験",
        "500年以上の歴史を持つチャーケー有機ハーブ村を見学",
        "バインムー椰子林で竹舟（バスケットボート）体験",
        "アンバン海水浴、クーラオチャムでシュノーケリング"
      ],
      anUong: [
        "カオラウ―ホイアンだけの黄色い麺",
        "ミークアン、ワンタン、バイン・バオ／バイン・ヴァック（ホワイトローズ）",
        "ホイアンチキンライス、バインダップ、バインイット・ラーガイ",
        "ホイアンのチェ：トウモロコシ、緑豆、パームフルーツ",
        "ホアイ川沿いの新鮮な海鮮、蛤ご飯、魚の和え物",
        "生姜茶や地元の伝統的飲み物"
      ],
      suKien: [
        "満月の旧市街夜（旧暦14日と1日）―電気を消してランタンを灯す",
        "ホアイ川に花灯籠を流すランタン祭り",
        "テト・グエン・ティエウ（元宵節）の春の祭典",
        "クアダイ漁村祭りと漁師の豊漁祈願",
        "バイン作りコンテスト、屋台料理コンテスト",
        "夜の伝統芸能とバイチョイ（民歌）の披露"
      ],
      vanHoa: [
        "世界遺産―ベトナム・中国・日本の文化が交差する街",
        "中国人会館：福建、潮州、広東、海南",
        "伝統工芸：タインハー陶器、キムボン木工、ランタン作り",
        "バイチョイ―ユネスコ無形文化遺産の民俗芸能",
        "花灯籠を流す風習、月替わりの供え物",
        "ゆったりとしたもてなしの心を持つホイアンの人々"
      ]
    }
  },

  sapa: {
    vi: {
      vuiChoi: [
        "Chinh phục đỉnh Fansipan – nóc nhà Đông Dương (3.143m)",
        "Săn mây, ngắm ruộng bậc thang thung lũng Mường Hoa",
        "Đi bộ (trekking) qua bản Cát Cát, Tả Van, Lao Chải",
        "Thăm thác Bạc, cổng trời, đèo Ô Quy Hồ",
        "Dạo vườn hoa Hàm Rồng, săn ảnh bản làng trong sương",
        "Đi chợ phiên Bắc Hà – chợ vùng cao đầy màu sắc (chủ nhật)"
      ],
      anUong: [
        "Thắng cố – món ăn đặc trưng của người H'Mông vùng cao",
        "Cá hồi, cá tầm nuôi trên suối Sa Pa",
        "Phở Sa Pa, măng rừng, rau mầm đá xào tỏi",
        "Rượu táo mèo, rượu ngô men lá truyền thống",
        "Bánh cuốn, xôi nếp nương, lạp xưởng hun khói",
        "Cơm lam nướng, gà đen bản địa"
      ],
      suKien: [
        "Mùa lúa chín (tháng 9 – 10) – thời khắc vàng của ruộng bậc thang",
        "Lễ hội Gầu Tào – nghi lễ quan trọng nhất của người H'Mông",
        "Chợ tình Sa Pa – nét văn hóa giao duyên độc đáo vùng cao",
        "Lễ hội rừng, lễ cúng thần rừng của các bản dân tộc",
        "Hội xuống chợ, thi thêu thổ cẩm, thi dệt lanh",
        "Tết của người Mông, người Dao Đỏ vào tháng 12 dương lịch"
      ],
      vanHoa: [
        "Sa Pa là quê hương của người H'Mông, Dao Đỏ, Giáy, Tày, Xa Phó",
        "Văn hóa ruộng bậc thang và nghề trồng lúa nương truyền thống",
        "Nhà sàn, trang phục thổ cẩm rực rỡ với hoa văn tinh xảo",
        "Nghề dệt lanh, nhuộm chàm của người H'Mông",
        "Chợ phiên không chỉ mua bán mà là nơi gặp gỡ, hát giao duyên",
        "Tín ngưỡng thờ thần rừng, thần núi, tổ tiên của đồng bào"
      ]
    },
    en: {
      vuiChoi: [
        "Conquer Fansipan – the roof of Indochina (3,143m)",
        "Cloud hunting and views of Muong Hoa valley terraces",
        "Trekking through Cat Cat, Ta Van and Lao Chai villages",
        "Visit Silver Waterfall, Cloud Gate and O Quy Ho pass",
        "Stroll Ham Rong flower gardens, capture misty villages",
        "Bac Ha Sunday market – the most colourful highland market"
      ],
      anUong: [
        "Thang co – signature dish of the H'Mong highlanders",
        "Salmon and sturgeon farmed in Sapa streams",
        "Sapa pho, forest bamboo shoots, fried rock-leaf greens",
        "Crab-apple wine (tao meo), traditional corn wine",
        "Steamed rolls, sticky rice, smoked sausages",
        "Grilled bamboo rice, local black chicken"
      ],
      suKien: [
        "Golden rice season (September – October) on the terraces",
        "Gau Tao festival – the most important rite of the H'Mong",
        "Sapa love market – unique highland courtship culture",
        "Forest festivals and forest-god rites of ethnic villages",
        "Market days with embroidery and flax-weaving contests",
        "H'Mong and Red Dao New Year in December"
      ],
      vanHoa: [
        "Home of the H'Mong, Red Dao, Giay, Tay and Xa Pho peoples",
        "Terraced-rice culture and traditional upland farming",
        "Stilt houses and dazzling brocade costumes with fine patterns",
        "Flax weaving and indigo dyeing of the H'Mong",
        "Highland markets are places of meeting and love singing",
        "Beliefs in forest gods, mountain gods and ancestors"
      ]
    },
    jp: {
      vuiChoi: [
        "インドシナの屋根・ファンシーパン（3,143m）登頂",
        "雲海鑑賞とムオンホア渓谷の棚田の絶景",
        "カットカット、ターヴァン、ラオチャイ村をトレッキング",
        "銀の滝、雲の門、オークイホー峠を訪問",
        "ハムロン花園を散策、霧に包まれた山村の撮影",
        "日曜市バックハー市場―最も色鮮やかな高地市場"
      ],
      anUong: [
        "タンコ―モン族の代表的な郷土料理",
        "サパの清流で育てたサーモンとチョウザメ",
        "サパのフォー、山のタケノコ、岩レタスの炒め物",
        "林檎酒（タオメオ）、伝統のトウモロコシ酒",
        "蒸し春巻き、餅米、燻製ソーセージ",
        "竹筒ご飯の焼き物、地鶏の黒鶏"
      ],
      suKien: [
        "黄金の棚田シーズン（9月～10月）",
        "ガウタオ祭り―モン族最重要の儀式",
        "サパの恋愛市場―高地特有の求婚文化",
        "森の祭り、各村の森の神への祈り",
        "市場の日には刺繍や麻織りのコンテスト",
        "12月のモン族・レッドヤオ族の新年"
      ],
      vanHoa: [
        "モン族、ヤオ族、ザイ族、タイ族、サフォー族の故郷",
        "棚田文化と伝統的な山間農業",
        "高床式住居と精巧な刺繍の民族衣装",
        "モン族の亜麻織りと藍染め",
        "高地市場は出会いと求愛の歌の場",
        "森の神、山の神、祖先を敬う信仰"
      ]
    }
  },

  phuquoc: {
    vi: {
      vuiChoi: [
        "Tắm biển Bãi Sao, Bãi Dài – cát trắng, nước trong xanh",
        "Đi cáp treo Hòn Thơm – cáp treo biển dài nhất thế giới",
        "Lặn ngắm san hô, câu mực đêm tại làng chài",
        "Tham quan làng chài Hàm Ninh, chợ đêm Dương Đông",
        "Vườn tiêu Phú Quốc, nhà máy nước mắm truyền thống",
        "Thăm nhà tù Phú Quốc – di tích lịch sử, khu du lịch Nam Đảo"
      ],
      anUong: [
        "Gỏi cá trích – đặc sản trứ danh của đảo ngọc",
        "Hải sản nướng: mực, ghẹ, tôm hùm, ốc nhảy tại chợ đêm",
        "Nước mắm Phú Quốc – di sản ẩm thực hơn 200 năm",
        "Bánh canh ghẹ, cháo hàu, nhum biển (cầu gai)",
        "Rượu sim rừng, sim rừng ngâm",
        "Bún quậy Kiến Xây – món ăn dân dã của ngư dân"
      ],
      suKien: [
        "Lễ hội Nghinh Ông – tín ngưỡng thờ cá voi của ngư dân",
        "Hội đua ghe Ngo của đồng bào Khmer vùng biển",
        "Lễ hội đình thần, cúng thần biển đầu năm",
        "Chợ hoa, Tết Nguyên đán sôi động của đảo",
        "Đêm hội hải sản, lễ hội ẩm thực ven biển",
        "Giỗ tổ nghề nước mắm – tri ân nghề truyền thống của đảo"
      ],
      vanHoa: [
        "Văn hóa ngư dân biển đảo: gắn đời với biển, thờ cá Ông",
        "Nghề làm nước mắm truyền thống – bản sắc của Phú Quốc",
        "Cộng đồng người Khmer, Hoa, Việt chung sống hòa hợp",
        "Nghề trồng tiêu, trồng sim – nông nghiệp đặc trưng đảo ngọc",
        "Tập quán làng chài: cúng tàu, lễ xuất hành đầu năm",
        "Nếp sống đảo: chậm rãi, gần gũi thiên nhiên biển trời"
      ]
    },
    en: {
      vuiChoi: [
        "Swim at Sao Beach and Long Beach – white sand, clear water",
        "Hon Thom cable car – the world's longest over-sea cable car",
        "Snorkelling and night squid fishing at fishing villages",
        "Visit Ham Ninh fishing village and Duong Dong night market",
        "Phu Quoc pepper farms and traditional fish-sauce factories",
        "Phu Quoc prison historical site and the south-island resort area"
      ],
      anUong: [
        "Herring salad (goi ca trich) – the island's famous dish",
        "Grilled seafood: squid, crab, lobster, snails at the night market",
        "Phu Quoc fish sauce – a 200+ year culinary heritage",
        "Crab noodle soup (banh canh ghe), oyster porridge, sea urchin",
        "Wild sim (myrtle) wine and soaked sim fruit",
        "Kien Xay-style squid noodle – the fishermen's rustic dish"
      ],
      suKien: [
        "Nghinh Ong festival – whale worship of the fishermen",
        "Ghe Ngo boat races of the Khmer community",
        "Village temple festivals and first-of-year sea-deity rites",
        "Tet flower markets and lively island New Year",
        "Seafood nights and coastal food festivals",
        "Fish-sauce craft anniversary – honouring the island's trade"
      ],
      vanHoa: [
        "Island fishermen's culture: life bound to the sea, whale worship",
        "Traditional fish-sauce making – the identity of Phu Quoc",
        "Khmer, Chinese and Vietnamese communities living in harmony",
        "Pepper and sim farming – the island's signature agriculture",
        "Fishing-village customs: boat rites, first-of-year sailing blessings",
        "A slow island lifestyle close to sea and sky"
      ]
    },
    jp: {
      vuiChoi: [
        "サオビーチ、ロンビーチで海水浴―白砂と澄んだ海",
        "ホントム・ロープウェイ―世界最長の海上ロープウェイ",
        "シュノーケリング、夜のイカ釣り体験",
        "ハムニン漁村とズオンドン夜市",
        "フーコック胡椒園と伝統的な魚醤工場",
        "フーコック監獄跡と南端のリゾートエリア"
      ],
      anUong: [
        "ニシンの和え物（ゴイ・カー・チッチ）―島の名物料理",
        "屋台の海鮮焼き：イカ、カニ、ロブスター、巻貝",
        "フーコック魚醤―200年以上の食文化",
        "カニ入り麺、牡蠣粥、ウニ",
        "ワイルドシム（ギンバイカ）酒",
        "漁師の素朴な麺料理ブンクアイ"
      ],
      suKien: [
        "ギンオン祭り―漁師たちの鯨信仰",
        "クメール民族のゴエンゴー（長舟）レース",
        "村の寺院祭り、年始の海神への祈り",
        "テト花市と活気あふれる島の正月",
        "海鮮ナイト、海岸のグルメ祭り",
        "魚醤の祖を祀る伝統行事"
      ],
      vanHoa: [
        "島の漁師文化：海と共に生き、鯨を敬う",
        "伝統魚醤造り―フーコックの誇り",
        "クメール・華人・ベトナム人が共存する島",
        "胡椒とギンバイカ栽培―島を代表する農業",
        "漁村の風習：船の儀式、年始の出航祈願",
        "海と空に寄り添うゆったりとした島の暮らし"
      ]
    }
  }
};

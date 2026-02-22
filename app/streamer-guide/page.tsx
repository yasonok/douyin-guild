'use client';

import { useState } from 'react';

export default function StreamerGuide() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const chapters = [
    {
      title: '第一章：直播基礎入門',
      icon: '📱',
      sections: [
        { title: '1.1 探索你的直播類型', content: `抖音平台提供了多元化的直播內容形式，找到最符合你個人特質和技能的類型，是成功的第一步。

【聊天互動型主播】
- 內容形式：純聊天、問答環節、情感諮詢、生活分享等
- 適合人群：性格開朗，善於溝通，表達能力強、樂於分享日常或觀點的主播
- 成功關鍵：話題的豐富性與趣味性，以及與觀眾的即時互動和情緒價值提供

【才藝表演型主播】
- 內容形式：唱歌、跳舞、魔術表演、樂器演奏、繪畫、手作等
- 適合人群：擁有特定藝術或娛樂技能，渴望展示才華並獲得認可的主播

【遊戲直播型主播】
- 內容形式：手遊、PC 遊戲的實時解說，教學、娛樂性玩耍等
- 適合人群：熱愛遊戲、操作技巧高超或解說風格幽默風趣的玩家

【電商帶貨型主播】
- 內容形式：商品展示，功能介紹、穿搭示範、限時優惠發布等
- 適合人群：具備銷售能力、對產品有深入了解，善於說服和推薦的主播

【教學課程型主播】
- 內容形式：語言教學、烹飪課程、健身指導、美妝教程、專業知識分享等
- 適合人群：在某一領域擁有專業知識或技能，樂於分享教學內容的主播` },
        { title: '1.2 開播權限解讀', content: `在開啟你的直播生涯之前，了解並符合抖音的開播資格要求至關重要。

【年齡限制】
- 所有主播必須年滿 18 歲
- 部分更為敏感或涉及商業的功能可能要求主播年滿 20 歲

【帳號認證】
- 需要完成手機號碼驗證和實名/年齡認證

【粉絲數量要求】
- 一般直播：通常沒有粉絲數量限制，0 粉絲即可開始
- 電商帶貨直播：需要帳號粉絲數達到至少 1000+` },
        { title: '1.3 掌握最佳直播時間', content: `選擇對的直播時間，能極大提升你的直播間流量和互動效果。

【平日 (週一至週五)】
- 黃金時段：20:00 - 24:00
- 次黃金時段：午餐時間 (12:00 - 14:00) 和下班通勤時間 (17:00 - 19:00)

【週末 (週六、週日)】
- 白天活躍：13:00 - 15:00
- 夜晚高峰：20:00 - 01:00

【宵夜場 (深夜時段)】
- 活躍期：00:00 - 03:00

💡 流量密碼：對於新主播而言，選擇凌晨 1-3 點開播是一個非常聰明的策略！在這個時間段，大量頭部主播和成熟直播間往往已經下播，競爭壓力大大減小。` }
      ]
    },
    {
      title: '第二章：直播設備與環境準備',
      icon: '🎬',
      sections: [
        { title: '2.1 直播硬體選擇', content: `一套合適的直播硬體設備，能夠顯著提升你的直播畫面品質、聲音清晰度。

【手機直播】
- 優勢：入門門檻低，操作簡便，移動性強
- 選擇建議：建議使用近年推出的旗艦級手機（如 iPhone 13/14/15 系列）

【電腦直播（PC/Mac）】
- 優勢：功能最全面，支援多攝像頭，多畫面切換
- 選擇建議：
  * 處理器 (CPU)：Intel i5/i7/i9 或 AMD Ryzen 5/7/9 系列
  * 記憶體 (RAM)：至少 16GB
  * 顯示卡 (GPU)：NVIDIA GeForce RTX 系列

【攝像頭】
- 外接網路攝像頭 (Webcam)：Logitech C920 系列

【麥克風】
- USB 麥克風：Blue Yeti、HyperX QuadCast、Rode NT-USB Mini
- 動圈麥克風 (XLR)：Shure SM7B

【補光燈】
- 環形補光燈 (Ring Light)：性價比高，效果顯著
- 柔光箱/LED 面板燈：專業攝影棚效果` },
        { title: '2.2 直播軟體與工具', content: `硬體設備是骨架，直播軟體則是實現各種功能的肌肉。

【抖音直播伴侶】
- 手機版：操作簡單直觀，與抖音平台完美整合
- 電腦版：支援多個視訊源、豐富的場景切換

【第三方推流軟體】
- OBS Studio：完全免費且開源，功能極其強大
- Streamlabs OBS：介面更美觀、更易用

【美顏濾鏡與特效】
- 內建美顏：磨皮、瘦臉、大眼等
- 第三方美顏：Snap Camera 等` },
        { title: '2.3 直播間佈置與背景設計', content: `直播間的視覺呈現是吸引觀眾停留的關鍵。

【主題風格設定】
- 定義風格：清新文藝？科技未來？溫馨居家？
- 視覺統一：從顏色搭配、道具選擇到光線氛圍

【空間整潔與光線考量】
- 整潔是基礎：雜亂的背景會分散觀眾注意力
- 光線充足：確保直播間有足夠的照明
- 避免逆光：主播會變成剪影

【色彩心理學】
- 暖色系 (紅、橙、黃)：溫馨、熱情、活力
- 冷色系 (藍、綠、紫)：沉穩、專業` },
        { title: '2.4 網路環境優化', content: `網路穩定性是直播的生命線。

【寬頻選擇】
- 建議選擇至少 100Mbps 以上的家用光纖寬頻
- 上傳速度至少達到 10-20 Mbps

【有線連接優於無線】
- 直播時務必使用乙太網線連接，而非 Wi-Fi

【備用網路方案】
- 手機熱點：準備一部流量充足的 5G 手機` }
      ]
    },
    {
      title: '第三章：內容策劃與腳本撰寫',
      icon: '📝',
      sections: [
        { title: '3.1 直播主題設定與差異化', content: `在浩瀚的直播海洋中，如何讓觀眾選擇你、記住你？答案在於「差異化」和「獨特賣點」。

【垂直領域深耕】
- 定義：垂直領域指的是一個細分且具體的專業範疇
- 為何深耕：
  * 建立專業權威
  * 吸引精準受眾
  * 降低競爭壓力

【個人特色與風格】
- 人設不僅僅是外表，更是你直播時展現出來的個性、態度、說話方式

【熱點話題與時事結合】
- 何謂熱點：社交媒體上的熱搜、抖音挑戰、流行話題

【直播間定位與目標受眾分析】
- 直播間定位：明確你的直播間是做什麼的？為誰服務？` },
        { title: '3.2 直播腳本構成與重要性', content: `直播腳本是直播的「導航圖」和「行動綱領」。

【開場環節：黃金30秒抓住觀眾】
- 熱情問候與自我介紹
- 破冰互動
- 明確直播主題

【內容主體：循序漸進的內容節奏】
- 內容分段
- 知識點/產品展示
- 案例分享

【互動環節設計】
- Q&A環節
- 投票/問卷
- 連麥/粉絲上麥

【結尾環節】
- 感謝語
- 總結回顧
- 預告下次直播` },
        { title: '3.3 內容素材收集與整理', content: `建立一個系統化的「直播彈藥庫」，能讓你隨時有話可說。

【話題庫建立】
- 多源資訊獲取：行業資訊、熱點追蹤、粉絲反饋

【流行梗與金句】
- 了解流行文化：網路流行語、熱門表情包

【用戶故事與案例分享】
- 收集素材：鼓勵粉絲分享他們的故事

【知識點與數據支撐】
- 深度研究：在你直播的垂直領域深入研究` },
        { title: '3.4 引導觀眾參與與互動', content: `直播的精髓在於「互動」。

【主動提問與鼓勵留言】
- 拋出開放性問題

【投票與抽獎】
- 發起投票
- 設計抽獎環節

【粉絲上麥/連麥互動】
- 粉絲提問
- 故事分享` }
      ]
    },
    {
      title: '第四章：直播技巧與互動藝術',
      icon: '🎤',
      sections: [
        { title: '4.1 鏡頭感與表達力', content: `良好的鏡頭感和富有感染力的表達，能讓你的形象在觀眾心中留下深刻印象。

【眼神交流】
- 直視鏡頭，假想你的觀眾就在鏡頭的另一端

【肢體語言】
- 適度且自然的手勢能幫助你強調重點
- 面部表情：微笑是最好的通行證

【語氣語速與聲線運用】
- 語氣變化：聲音是傳達情感的重要工具

【表情管理】
- 真情流露：直播不是演戲，而是真實的自我展現` },
        { title: '4.2 控場能力與危機處理', content: `良好的控場能力和危機處理技巧，能讓直播間維持和諧氛圍。

【應對黑粉與槓精】
- 保持冷靜
- 以柔克剛：用幽默或溫和的語氣回應

【冷場破冰技巧】
- 主動提問
- 講故事
- 福利預告

【突發狀況處理】
- 設備故障、網路斷線等
- 告知觀眾，啟動備用方案` },
        { title: '4.3 有效互動策略', content: `互動不僅僅是回覆評論，更是一種藝術。

【歡迎新進觀眾】
- 主動點名歡迎

【點名與感謝】
- 真誠感謝：對於每一份禮物都應表達感謝

【福利發放與活動引導】
- 福利設計：限時優惠券、獨家周邊` },
        { title: '4.4 禮物互動與感謝', content: `禮物是抖音直播中重要的變現方式。

【感謝禮物】
- 即時感謝：收到禮物時，應第一時間感謝

【禮物排行互動】
- 關注榜單
- 激勵機制

【引導刷禮的策略】
- 情感連接
- 價值體現` },
        { title: '4.5 流量承接與轉化', content: `將「看客」變成「鐵粉」的關鍵一步。

【引導關注】
- 明確指引

【加入粉絲團/燈牌】
- 宣傳粉絲團價值

【導向私域流量】
- 定義：微信社群、個人微信號、知識星球等
- 導流方式：口頭引導、福利誘惑` }
      ]
    },
    {
      title: '第五章：抖音平台流量機制與運營',
      icon: '📈',
      sections: [
        { title: '5.1 抖音推薦演算法解析', content: `理解抖音的底層流量分發邏輯至關重要。

【內容質量】
- 原創性：抖音鼓勵原創內容
- 高清度：建議 1080P 或更高
- 垂直度：保持內容的垂直性

【互動數據】
- 點讚、評論、分享、關注

【觀看時長與完播率】
- 觀眾停留時間越長，說明內容越有吸引力

【直播間數據】
- 人均停留時長
- 峰值在線人數
- 互動率` },
        { title: '5.2 短影片引流策略', content: `短影片是抖音生態中最重要的流量入口。

【直播預熱短影片】
- 目的：在直播開始前告知粉絲直播時間、主題和亮點
- 發布時機：直播前 2-4 小時

【直播精華剪輯】
- 目的：將精彩片段剪輯成短影片進行二次傳播

【短影片掛載直播間連結】
- 功能：短影片下方會出現「進入直播間」按鈕` },
        { title: '5.3 直播間數據分析與優化', content: `數據是直播優化的指南針。

【核心數據指標】
- 觀看人數、人氣峰值、評論量、分享量

【直播間漏斗模型】
- 曝光、點擊、停留、互動、轉化

【數據異常分析】
- 橫向對比：與歷史平均數據對比` },
        { title: '5.4 付費推廣工具運用', content: `適當的付費推廣能快速放大直播影響力。

【DOU+ (抖加)】
- 功能：對短影片或直播間進行流量投放
- 投放目標：提升播放量、提升直播間人氣、增加粉絲

【千川】
- 功能：專為電商商家和帶貨主播設計

【官方活動與挑戰賽】
- 參與平台活動可獲得流量扶持` }
      ]
    },
    {
      title: '第六章：變現策略與收益提升',
      icon: '💰',
      sections: [
        { title: '6.1 虛擬禮物收益最大化', content: `虛擬禮物是抖音直播最直接的變現方式。

【禮物種類詳解】
- 基礎禮物：小心心、棒棒糖、鮮花
- 中級禮物：啤酒、咖啡、音浪、飛吻
- 高級禮物：跑車、遊艇、嘉年華、宇宙之心

【感謝語與互動藝術】
- 真誠點名
- 個性化回應

【引導粉絲送禮】
- 情感連結
- 設定小目標` },
        { title: '6.2 電商帶貨深度解析', content: `電商帶貨是抖音最主流且潛力巨大的變現方式。

【選品策略】
- 市場需求：選擇符合當前市場熱點的商品
- 自身相關性：與直播內容高度相關
- 品質優先

【組品與定價】
- 組合銷售
- 階梯定價
- 秒殺/限時特價

【商品介紹與演示技巧】
- 賣點提煉
- 場景化演示` },
        { title: '6.3 知識付費與課程銷售', content: `如果你在某個領域擁有專業知識，知識付費是高效的變現方式。

【課程設計與內容提煉】
- 痛點切入
- 價值定位
- 課程大綱

【直播間引導報名】
- 限時優惠
- 學員分享` },
        { title: '6.4 廣告代言與品牌合作', content: `當你的直播間具備一定影響力後，品牌合作將成為重要的收益來源。

【如何提升品牌吸引力】
- 建立專業形象
- 數據表現
- 正向口碑

【合作洽談與條件設定】
- 了解品牌需求
- 談判合作費用` },
        { title: '6.5 粉絲團與會員體系', content: `建立粉絲團和會員體系，打造忠實的「私域」。

【付費社群/粉絲群】
- 專屬內容
- 互動福利

【會員專屬福利】
- 專屬直播
- 優先權益

【線下活動與粉絲見面會】
- 增強情感連結` }
      ]
    },
    {
      title: '第七章：個人品牌打造與長期發展',
      icon: '🌟',
      sections: [
        { title: '7.1 人設定位與形象塑造', content: `人設是你的品牌核心。

【找到你的核心人設】
- 專業型：強化專業性
- 幽默型：放大幽默感
- 親和型：展現溫暖
- 知性型：塑造優雅

【視覺形象統一】
- 頭像：清晰、具辨識度
- 暱稱：簡潔易記
- 直播間風格：保持一致

【差異化競爭】
- 找到市場空白
- 獨家內容` },
        { title: '7.2 社群運營與粉絲維護', content: `粉絲是主播最寶貴的財富。

【粉絲群日常維護】
- 選對平台
- 發布公告
- 定期互動

【私信回覆與情感維繫】
- 重視每一條私信
- 個性化回覆

【粉絲生日祝福與特殊節日】
- 建立粉絲檔案
- 製造驚喜` },
        { title: '7.3 跨平台發展與內容複製', content: `將內容從抖音拓展到其他平台。

【內容的二次剪輯與發布】
- 抖音、快手、小紅書，B站

【各平台內容差異化運營】
- 抖音：短影片引流、直播變現
- 小紅書：種草、生活方式
- B站：知識沉澱

【粉絲導流與互通】
- 建立橋樑
- 福利誘惑` },
        { title: '7.4 職業規劃與心態調整', content: `長期發展需要明確的職業規劃和健康的心態。

【抗壓能力與情緒管理】
- 面對質疑與批評
- 保持積極心態

【持續學習與自我提升】
- 行業趨勢
- 專業知識
- 直播技能

【健康的生活作息】
- 規律直播時間
- 均衡飲食
- 充足睡眠` }
      ]
    },
    {
      title: '第八章：常見問題與法律風險',
      icon: '⚖️',
      sections: [
        { title: '8.1 直播內容規範與禁忌', content: `一旦觸犯，輕則限流、警告，重則永久封禁帳號。

【敏感話題】
- 政治敏感：嚴禁談論違反國家法律法規的內容
- 色情低俗：著裝暴露、言辭挑逗
- 血腥暴力：嚴禁展示任何血腥、暴力、殘忍的內容
- 宣揚賭博、毒品

【違規行為】
- 虛假宣傳/誇大其詞
- 誘導消費/刷單
- 違規抽獎/變相賭博
- 引導站外交易

【平台懲罰機制】
- 警告/下架
- 限流/降權
- 封禁帳號` },
        { title: '8.2 著作權與肖像權問題', content: `保護自己，尊重他人。

【背景音樂與影片的版權】
- 抖音官方音樂庫
- 無版權音樂/付費音樂

【他人肖像權與隱私權】
- 未經同意不得拍攝
- 公共場所注意

【原創內容的版權保護】
- 版權意識
- 維權方式` },
        { title: '8.3 青少年保護與防沉迷', content: `主播應積極響應平台政策。

【直播內容對青少年的影響】
- 價值觀引導
- 避免不良導向
- 適齡內容

【引導理性消費】
- 警示未成年人打賞
- 理性消費倡導

【配合平台青少年保護措施】
- 青少年模式
- 做青少年的榜樣` },
        { title: '8.4 平台規則更新與應對', content: `與時俱進，永保活力。

【密切關注抖音官方公告】
- 官方渠道
- 行業資訊

【學習新功能與新政策】
- 功能學習
- 政策解讀

【適應變化，調整直播策略】
- 靈活調整
- 創新應對` }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 100%)', color: 'white', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '800', marginBottom: '10px' }}>🎵 TikTok 主播開播攻略</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>從新手到達人的完整培訓課程 · 超萬字精華版</p>
        
        {/* Chapter Navigation */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px', justifyContent: 'center' }}>
          {chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setActiveChapter(index)}
              style={{
                padding: '10px 16px',
                background: activeChapter === index ? 'linear-gradient(135deg, #ff2d55 0%, #ff9500 100%)' : 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '20px',
                color: 'white',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{chapter.icon}</span>
              <span>{chapter.title.split('：')[0]}</span>
            </button>
          ))}
        </div>

        {/* Chapter Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <span style={{ fontSize: '36px' }}>{chapters[activeChapter].icon}</span>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>{chapters[activeChapter].title}</h2>
        </div>

        {/* Sections */}
        {chapters[activeChapter].sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '16px',
            overflow: 'hidden'
          }}>
            <button
              onClick={() => toggleSection(sectionIndex)}
              style={{
                width: '100%',
                padding: '20px 25px',
                background: expandedSections.includes(sectionIndex) ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>{section.title}</span>
              <span style={{ 
                transform: expandedSections.includes(sectionIndex) ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                fontSize: '12px',
                opacity: 0.6
              }}>▼</span>
            </button>
            
            {expandedSections.includes(sectionIndex) && (
              <div style={{ 
                padding: '0 25px 25px 25px', 
                borderTop: '1px solid rgba(255,255,255,0.1)',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.85)'
              }}>
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('【') && line.endsWith('】')) {
                    return <h4 key={i} style={{ color: '#ffd700', fontSize: '15px', marginTop: '20px', marginBottom: '10px' }}>{line}</h4>;
                  }
                  if (line.startsWith('- ') || line.startsWith('* ')) {
                    return <li key={i} style={{ marginLeft: '15px', marginBottom: '6px', color: 'rgba(255,255,255,0.75)' }}>{line.replace(/^[-*] /, '')}</li>;
                  }
                  if (line.startsWith('💡')) {
                    return <div key={i} style={{ background: 'rgba(255,215,0,0.1)', padding: '12px', borderRadius: '8px', marginTop: '15px', color: '#ffd700' }}>{line}</div>;
                  }
                  if (line.trim() === '') return <br key={i} />;
                  return <p key={i} style={{ marginBottom: '8px' }}>{line}</p>;
                })}
              </div>
            )}
          </div>
        ))}

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <button 
            onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
            disabled={activeChapter === 0}
            style={{
              padding: '12px 24px',
              background: activeChapter === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '10px',
              color: activeChapter === 0 ? 'rgba(255,255,255,0.3)' : 'white',
              fontSize: '14px',
              cursor: activeChapter === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            ← 上一章
          </button>
          <button 
            onClick={() => setActiveChapter(Math.min(chapters.length - 1, activeChapter + 1))}
            disabled={activeChapter === chapters.length - 1}
            style={{
              padding: '12px 24px',
              background: activeChapter === chapters.length - 1 ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #ff2d55 0%, #ff9500 100%)',
              border: 'none',
              borderRadius: '10px',
              color: activeChapter === chapters.length - 1 ? 'rgba(255,255,255,0.3)' : 'white',
              fontSize: '14px',
              cursor: activeChapter === chapters.length - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            下一章 →
          </button>
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', marginTop: '30px', fontSize: '12px' }}>
          © 2026 抖音工會 | 主播培訓攻略
        </p>
      </div>
    </div>
  );
}

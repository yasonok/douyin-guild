'use client';

import { useState } from 'react';

export default function StreamerGuide() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: '第一章：直播基礎入門',
      icon: '📱',
      content: `### 1.1 探索你的直播類型：選擇最適合你的舞台

抖音平台提供了多元化的直播內容形式，找到最符合你個人特質和技能的類型，是成功的第一步。

**聊天互動型主播**
- 內容形式：純聊天、問答環節、情感諮詢、生活分享等
- 適合人群：性格開朗、善於溝通、表達能力強、樂於分享日常或觀點的主播
- 成功關鍵：話題的豐性，以及與觀富性與趣味眾的即時互動和情緒價值提供

**才藝表演型主播**
- 內容形式：唱歌、跳舞、魔術表演、樂器演奏、繪畫、手作等
- 適合人群：擁有特定藝術或娛樂技能，渴望展示才華並獲得認可的主播

**遊戲直播型主播**
- 內容形式：手遊、PC 遊戲的實時解說，教學、娛樂性玩耍等
- 適合人群：熱愛遊戲、操作技巧高超或解說風格幽默風趣的玩家

**電商帶貨型主播**
- 內容形式：商品展示、功能介紹、穿搭示範、限時優惠發布等
- 適合人群：具備銷售能力、對產品有深入了解，善於說服和推薦的主播

**教學課程型主播**
- 內容形式：語言教學、烹飪課程、健身指導、美妝教程、專業知識分享等
- 適合人群：在某一領域擁有專業知識或技能，樂於分享教學內容的主播

---

### 1.2 開播權限解讀：你需要滿足的基礎條件

**年齡限制**：所有主播必須年滿 18 歲。部分更為敏感或涉及商業的功能可能要求主播年滿 20 歲。

**帳號認證**：你的抖音帳號需要完成手機號碼驗證和實名/年齡認證。

**粉絲數量要求**：
- 一般直播：通常沒有粉絲數量限制，0 粉絲即可開始
- 電商帶貨直播：需要帳號粉絲數達到至少 1000+

---

### 1.3 掌握最佳直播時間：讓你的內容被更多人看見

**平日 (週一至週五)**
- 黃金時段：20:00 - 24:00
- 次黃金時段：午餐時間 (12:00 - 14:00) 和下班通勤時間 (17:00 - 19:00)

**週末 (週六、週日)**
- 白天活躍：13:00 - 15:00
- 夜晚高峰：20:00 - 01:00

**宵夜場 (深夜時段)**
- 活躍期：00:00 - 03:00
- 💡 流量密碼：對於新主播而言，選擇凌晨 1-3 點開播是一個非常聰明的策略！`
    },
    {
      title: '第二章：直播設備與環境準備',
      icon: '🎬',
      content: `### 2.1 直播硬體選擇：打造專業級視聽體驗

**手機直播**
- 優勢：入門門檻低，操作簡便，移動性強
- 選擇建議：建議使用近年推出的旗艦級手機（如 iPhone 13/14/15 系列）
- 考量因素：鏡頭穩定性、處理器性能、電池續航、散熱能力

**電腦直播（PC/Mac）**
- 優勢：功能最全面，支援多攝像頭、多畫面切換、專業直播軟體
- 選擇建議：
  - 處理器 (CPU)：Intel i5/i7/i9 或 AMD Ryzen 5/7/9 系列
  - 記憶體 (RAM)：至少 16GB
  - 顯示卡 (GPU)：NVIDIA GeForce RTX 系列或 AMD Radeon RX 系列

---

### 2.2 攝像頭：呈現清晰的你

**內建攝像頭**
- 優勢：方便、無需額外購買
- 缺點：畫質受限，通常在低光環境下表現不佳

**外接網路攝像頭 (Webcam)**
- 選擇建議：Logitech C920 系列、StreamCam 系列、Razer Kiyo 系列
- 優點：畫質通常優於內建鏡頭，可自由調整角度

**專業相機/微單眼/單眼 (DSLR/Mirrorless)**
- 優點：提供電影級的畫質、優秀的景深效果、出色的低光表現
- 連接方式：通常需要透過視訊採集卡將相機輸出畫面轉換為電腦可識別的 USB 訊號

---

### 2.3 麥克風：傳遞高質量的聲音

**USB 麥克風**
- 優勢：直接透過 USB 連接電腦，安裝簡便
- 選擇建議：Blue Yeti、HyperX QuadCast、Rode NT-USB Mini

**動圈麥克風 (XLR 接口)**
- 優勢：通常音色非常專業，指向性強，能有效隔絕環境噪音
- 選擇建議：Shure SM7B (專業級)、Shure MV7 (USB/XLR雙接口)

**配件**
- 防噴罩 (Pops Filter) 減少破音
- 防震架 (Shock Mount) 減少桌面震動傳導

---

### 2.4 補光燈與燈光佈局

**環形補光燈 (Ring Light)**
- 優勢：光線柔和均勻，能有效消除面部陰影，並在眼神中產生「天使光環」

**柔光箱/LED 面板燈**
- 佈局建議：
  - 主光 (Key Light)：放在主播正前方或略偏 45 度角
  - 補光 (Fill Light)：放在主播另一側，亮度約為主光的一半
  - 背景光/輪廓光 (Back Light)：放在主播身後，勾勒出主播輪廓

---

### 2.5 網路環境優化

**寬頻選擇**
- 建議選擇至少 100Mbps 以上的家用光纖寬頻
- 上傳速度至少達到 10-20 Mbps

**有線連接優於無線**
- 直播時務必使用乙太網線連接到路由器，而非 Wi-Fi

**備用網路方案**
- 準備一部流量充足的 5G 手機，在主網路突然斷線時可迅速切換`
    },
    {
      title: '第三章：內容策劃與腳本撰寫',
      icon: '📝',
      content: `### 3.1 直播主題設定與差異化：找到你的獨特賣點

**垂直領域深耕**
- 垂直領域指的是一個細分且具體的專業範疇
- 為何深耕：
  - 建立專業權威
  - 吸引精準受眾
  - 降低競爭壓力

**個人特色與風格**
- 人設不僅僅是外表，更是你直播時展現出來的個性、態度、說話方式、價值觀的總和
- 發掘真實自我、放大優勢、保持一致性

---

### 3.2 直播腳本構成與重要性

**開場環節：黃金30秒抓住觀眾**
- 熱情問候與自我介紹
- 破冰互動
- 明確直播主題
- 預告精彩內容
- 引導互動

**內容主體：循序漸進的內容節奏**
- 內容分段
- 知識點/產品展示
- 案例分享/實際演示
- 層次遞進

**互動環節設計**
- Q&A環節
- 投票/問卷
- 連麥/粉絲上麥
- 小遊戲/挑戰

**結尾環節**
- 感謝語
- 總結回顧
- 預告下次直播
- 引導關注/加入粉絲團

---

### 3.3 引導觀眾參與與互動

**主動提問與鼓勵留言**
- 拋出開放性問題
- 鼓勵表達
- 設置話題標籤

**投票與抽獎**
- 發起投票
- 設計抽獎環節
- 將抽獎安排在直播中段或高潮前

**粉絲上麥/連麥互動**
- 粉絲提問
- 故事分享
- 才藝PK
- 嘉賓訪談`
    },
    {
      title: '第四章：直播技巧與互動藝術',
      icon: '🎤',
      content: `### 4.1 鏡頭感與表達力

**眼神交流**
- 直視鏡頭，假想你的觀眾就在鏡頭的另一端
- 避免只看彈幕或自己的手機畫面
- 想像與「一人」對話

**肢體語言**
- 適度且自然的手勢能幫助你強調重點
- 面部表情：微笑是最好的通行證
- 保持輕鬆、開放的身體姿勢

**語氣語速與聲線運用**
- 語氣變化：聲音是傳達情感的重要工具
- 語速把控：適中語速，避免過快或過慢
- 保持活力：直播過程中應保持清晰、洪亮的聲音

---

### 4.2 控場能力與危機處理

**應對黑粉與槓精**
- 保持冷靜
- 惡意攻擊/人身攻擊：直接屏蔽、禁言
- 以柔克剛：用幽默或溫和的語氣回應
- 設立「直播間公約」

**冷場破冰技巧**
- 主動提問
- 講故事
- 播放背景音樂
- 福利預告

**突發狀況處理**
- 設備故障、網路斷線等
- 沉著冷靜，迅速判斷
- 告知觀眾，啟動備用方案

---

### 4.3 有效互動策略

**歡迎新進觀眾**
- 主動點名歡迎
- 簡要介紹當前直播內容
- 重複核心資訊

**點名與感謝**
- 個性化回應提升歸屬感
- 感謝禮物：真誠是最好的回報

**福利發放與活動引導**
- 抽獎、大額紅包、折扣券
- 明確告知福利發放的時間點`
    },
    {
      title: '第五章：抖音平台流量機制與運營',
      icon: '📈',
      content: `### 5.1 抖音推薦演算法解析

**內容質量**
- 原創性、高清度、垂直度

**互動數據**
- 點讚、評論、分享、關注

**觀看時長與完播率**
- 決定內容壽命的關鍵

**直播間數據**
- 停留時長、互動率、轉化率

---

### 5.2 短影片引流策略

**直播預熱短影片**
- 提前告知，製造期待
- 預告直播主題和福利

**直播精華剪輯**
- 將高光時刻二次傳播

**短影片掛載直播間連結**
- 無縫引導觀眾

---

### 5.3 直播間數據分析

**核心數據指標**
- 觀看人數、人氣峰值、評論量、分享量、禮物收入

**數據異常分析**
- 找到問題與機會

---

### 5.4 付費推廣工具運用

**DOU+ (抖加)**
- 快速提升短影片和直播間流量

**千川**
- 精準投放的電商帶貨利器

**官方活動與挑戰賽**
- 獲得平台扶持`
    },
    {
      title: '第六章：變現策略與收益提升',
      icon: '💰',
      content: `### 6.1 虛擬禮物收益最大化

**禮物種類**
- 小心心、棒棒糖、跑車、嘉年華等
- 了解其價值與象徵意義

**感謝語與互動藝術**
- 讓禮物更具溫度

**引導粉絲送禮的巧妙話術**
- 時機與方式的掌握

---

### 6.2 電商帶貨深度解析

**選品策略**
- 市場需求、供應鏈、利潤空間

**組品與定價**
- 促銷組合與心理定價法

**商品介紹與演示技巧**
- 賣點突出，痛點擊中

**限時優惠與福利刺激**
- 製造緊迫感

---

### 6.3 知識付費與課程銷售

**課程設計與內容提煉**
- 試聽與預告
- 直播間引導報名與轉化

---

### 6.4 廣告代言與品牌合作

**如何提升品牌吸引力**
- 合作洽談與條件設定
- 廣告植入與內容融合：自然不突兀

---

### 6.5 粉絲團與會員體系

**付費社群/粉絲群**
- 提供專屬價值

**會員專屬內容與福利**
- 提升黏性

**線下活動與粉絲見面會**`
    },
    {
      title: '第七章：個人品牌打造與長期發展',
      icon: '🌟',
      content: `### 7.1 人設定位與形象塑造

**找到你的核心人設**
- 專業、幽默、親和、知性

**視覺形象統一**
- 頭像、暱稱、直播間風格

**語言風格與行為模式**
- 保持一致性

**差異化競爭**
- 在同質化中脫穎而出

---

### 7.2 社群運營與粉絲維護

**粉絲群日常維護與活躍度提升**
- 私信回覆與情感維繫
- 粉絲生日祝福與特殊節日互動
- 聽取粉絲建議，共同完善內容

---

### 7.3 跨平台發展與內容複製

**內容的二次剪輯與發布**
- 抖音、快手、小紅書、B站

**各平台內容差異化運營策略**
- 粉絲導流與互通

---

### 7.4 職業規劃與心態調整

**抗壓能力與情緒管理**
- 直播的「內功」

**持續學習與自我提升**
- 不被市場淘汰

**保持對直播的熱情與初心**

**健康的生活作息**
- 可持續發展`
    },
    {
      title: '第八章：常見問題與法律風險',
      icon: '⚖️',
      content: `### 8.1 直播內容規範與禁忌

**敏感話題**
- 政治、色情、暴力等

**違規行為**
- 虛假宣傳、誘導消費、賭博等

**平台懲罰機制**
- 警告、限流、封禁

**自我審查與風險規避**

---

### 8.2 著作權與肖像權問題

**背景音樂與影片的版權**
- 避免侵權

**他人肖像權與隱私權**
- 直播中的注意事項

**原創內容的版權保護**

---

### 8.3 青少年保護與防沉迷

**直播內容對青少年的影響**
- 引導理性消費，避免過度打賞
- 配合平台青少年保護措施

---

### 8.4 平台規則更新與應對

**密切關注抖音官方公告**

**學習新功能與新政策**

**適應變化，調整直播策略**`
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 100%)', color: 'white', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '800', marginBottom: '10px' }}>🎵 TikTok 主播開播攻略</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>從新手到達人的完整培訓課程</p>
        
        {/* Chapter Navigation */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px', justifyContent: 'center' }}>
          {chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setActiveChapter(index)}
              style={{
                padding: '12px 20px',
                background: activeChapter === index ? 'linear-gradient(135deg, #ff2d55 0%, #ff9500 100%)' : 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '25px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{chapter.icon}</span>
              <span>{chapter.title.split('：')[0]}章</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          borderRadius: '20px', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '40px',
          lineHeight: '1.8'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <span style={{ fontSize: '40px' }}>{chapters[activeChapter].icon}</span>
            <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>{chapters[activeChapter].title}</h2>
          </div>
          
          <div style={{ whiteSpace: 'pre-wrap', color: 'rgba(255,255,255,0.85)' }}>
            {chapters[activeChapter].content.split('\n').map((line, i) => {
              if (line.startsWith('### ')) {
                return <h3 key={i} style={{ color: '#ff6b6b', fontSize: '18px', marginTop: '25px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h4 key={i} style={{ color: '#ffd700', fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>{line.replace(/\*\*/g, '')}</h4>;
              }
              if (line.startsWith('- ') || line.startsWith('* ')) {
                return <li key={i} style={{ marginLeft: '20px', marginBottom: '8px', color: 'rgba(255,255,255,0.8)' }}>{line.replace(/^[-*] /, '')}</li>;
              }
              if (line.startsWith('---')) {
                return <hr key={i} style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0' }} />;
              }
              if (line.trim() === '') {
                return <br key={i} />;
              }
              return <p key={i} style={{ marginBottom: '10px' }}>{line}</p>;
            })}
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', marginTop: '30px', fontSize: '12px' }}>
          © 2026 抖音工會 | 主播培訓攻略
        </p>
      </div>
    </div>
  );
}

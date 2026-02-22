'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    line: '',
    douyin: '',
    followers: '',
    experience: '',
    category: '',
    intro: '',
    expectations: ''
  });

  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('報名成功！我們會盡快與您聯繫。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contractSections = [
    {
      title: '第一章 總則',
      icon: '📜',
      items: [
        { label: '合約目的', content: '甲方為抖音平台之授權工會，乙方自願加入甲方成為簽約主播。雙方本於平等自願、誠實信用原則，就乙方在抖音平台進行直播活動之相關事宜達成合約。本合約旨在建立長期穩定的合作關係，共同發展直播事業。' },
        { label: '合作期間', content: '本合約有效期限為12個月，自簽約日起算。期滿前30日內，任一方得以書面通知他方終止合約。若期滿前雙方未提出終止，且乙方未違反本合約，則合約自動延展12個月。期滿前15日內，乙方得提出書面續約申請，經甲方審核通過後另行簽訂新合約。' },
        { label: '合作範圍', content: '乙方同意在合約期間內，以甲方工會成員身份專屬在抖音平台進行直播活動。未經甲方書面同意，乙方不得直接或間接為其他工會、MCN機構進行任何直播或商業活動。直播內容包括但不限於：聊天陪伴、音樂表演、遊戲競技、美妝時尚、美食烹飪、知識教學、生活日常等合法合規之內容。' },
        { label: '定義說明', content: '「直播收益」指乙方於直播期間獲得之虛擬禮物、抖幣、平台獎勵等所有收益。「有效直播」指單次直播時長不少於30分鐘之直播。' }
      ]
    },
    {
      title: '第二章 收益分配',
      icon: '💰',
      items: [
        { label: '禮物收益分潤（常規主播）', content: '乙方於直播間獲得之禮物收益，按以下比例分配：乙方（主播）獲得50%，甲方（工會）獲得50%。上述比例已扣除平台費用，甲乙雙方各自承擔相關稅負。' },
        { label: '禮物收益分潤（優質主播）', content: '若乙方符合以下條件之一者，可升級為優質主播：(1) 單月直播時長≥120小時；(2) 單月直播收益≥NT$50,000；(3) 平均在線人數≥500人。優質主播分潤比例：乙方獲得60%，甲方獲得40%。' },
        { label: '禮物收益分潤（明星主播）', content: '若乙方符合以下條件之一者，可升級為明星主播：(1) 單月直播時長≥150小時；(2) 單月直播收益≥NT$150,000；(3) 平均在線人數≥1,000人；(4) 粉絲數≥50,000人。明星主播分潤比例：乙方獲得70%，甲方獲得30%。' },
        { label: '新人獎勵金', content: '乙方入會首月內完成以下條件，可獲得一次性獎勵金：(1) 直播時長≥50小時，獎勵NT$2,000元；(2) 直播時長≥80小時，獎勵NT$3,500元；(3) 直播時長≥120小時，獎勵NT$5,000元。' },
        { label: '業績獎勵', content: '月度禮物收益達標之額外獎勵：(1) 月收益≥NT$10,000，額外獎勵5%；(2) 月收益≥NT$30,000，額外獎勵10%；(3) 月收益≥NT$50,000，額外獎勵15%；(4) 月收益≥NT$100,000，額外獎勵20%。' },
        { label: '穩定性獎勵（全勤獎金）', content: '乙方全月符合以下條件者，季末發放全勤獎金NT$3,000：(1) 每月直播時長≥60小時；(2) 每月有效直播日≥20天；(3) 每月無違規記錄。' },
        { label: '推薦獎勵', content: '乙方成功推薦新規主播入會並完成簽約，該新規主播入會首月收益中，乙方可獲得該新規主播收益之5%作為推薦獎勵（為期12個月）。' },
        { label: '收益結算與發放', content: '收益以抖音平台每月結算週期為準，甲方須於收到平台款項後7個工作日內完成乙方收益之核算並通知乙方。乙方收益於每月15日統一撥款至乙方指定帳戶。' },
        { label: '稅款扣繳', content: '乙方之收益依法須扣繳個人所得稅。甲方將於每次發放收益時，按規定代扣代繳相關稅款，並於年度終了後提供扣繳憑單予乙方。' }
      ]
    },
    {
      title: '第三章 直播要求',
      icon: '⏰',
      items: [
        { label: '直播時長要求', content: '乙方每月直播時長不得少於60小時，其中有效直播時長不得少於40小時。單次直播時長不得少於30分鐘，否則不計入有效時長。' },
        { label: '直播日數要求', content: '乙方每月有效直播日不得少於20天。有效直播日定義：單日直播時長≥2小時之直播日。建議每週直播不少於5天。' },
        { label: '直播時段要求', content: '乙方須配合甲方安排之黃金時段直播。黃金時段定義：平日19:00-24:00、假日18:00-02:00。乙方每週至少須有3天在黃金時段直播。' },
        { label: '直播品質要求', content: '乙方直播須符合以下品質標準：(1) 直播畫面清晰、穩定，解析度至少720P；(2) 直播聲音清晰；(3) 直播內容積極正向；(4) 須與粉絲積極互動。' },
        { label: '請假規範', content: '乙方因個人因素無法直播，須提前3日向甲方提出書面請假申請。每月請假不得超過5天，且須於當月補齊相應直播時長。' }
      ]
    },
    {
      title: '第四章 甲方權利義務',
      icon: '🏢',
      items: [
        { label: '甲方權利', content: '(1) 甲方有權對乙方之直播內容進行指導、建議及監督；(2) 甲方有權使用乙方之直播片段、肖像進行推廣宣傳（須事先告知乙方）；(3) 甲方有權制定並修改直播規範；(4) 若乙方違反本合約或平台規範，甲方有權進行警告、扣罰收益、停播處分，嚴重者得終止合約。' },
        { label: '培訓義務', content: '甲方須提供乙方以下培訓課程：(1) 入職培訓：直播入門基礎、平台規則講解（入會後7日內完成）；(2) 技能培訓：直播技巧、互動方法、粉絲維護（每月至少1次）；(3) 進階培訓：內容策劃、變現策略（每季至少1次）。' },
        { label: '運營支援義務', content: '甲方須提供乙方以下運營支援：(1) 一對一運營指導：每月至少2次與乙方進行溝通；(2) 粉絲運營支援：協助乙方分析粉絲數據；(3) 數據分析：每月提供乙方直播數據分析報告。' },
        { label: '資源爭取義務', content: '甲方須積極爭取以下平台資源予乙方：(1) 官方推薦位曝光機會；(2) 熱門活動參與資格；(3) 平台流量扶持資源；(4) 品牌合作、商業活動機會。' },
        { label: '收益支付義務', content: '甲方須按時足額支付乙方收益，不得無故拖延或扣減。如甲方無正當理由延遲支付，每逾期一日應按當期款的0.1%支付違約金。' }
      ]
    },
    {
      title: '第五章 乙方權利義務',
      icon: '🎤',
      items: [
        { label: '乙方權利', content: '乙方享有以下權利：(1) 獲得本合約約定之收益分配；(2) 參加甲方提供之培訓課程與活動；(3) 獲得甲方之運營支援與指導；(4) 在合約期滿後自由選擇是否續約或加入其他工會；(5) 對甲方之決定有異議時，提出申訴之權利。' },
        { label: '基本義務', content: '乙方須履行以下基本義務：(1) 遵守抖音平台服務條款、社區公約及相關規範；(2) 遵守本合約之各項條款及甲方制定之直播規範；(3) 按時完成直播時長及日數要求；(4) 配合甲方安排之培訓、活動及推廣計劃；(5) 妥善維護個人帳號，不得將帳號轉讓、借貸或授權第三人使用。' },
        { label: '內容合規義務', content: '乙方直播內容須合法合規，不得涉及：政治敏感議題、違法犯罪行為、色情低俗內容、暴力血腥內容、虛假宣傳、侵犯他人智慧財產權、赌博、毒品等違禁物、未取得資格之金融投資建議等。' },
        { label: '禁止競業行為', content: '乙方在合約期間內，不得從事以下競業行為：(1) 未經甲方同意，私自加入其他抖音工會；(2) 未經甲方同意，擅自與第三方簽訂商業合作協議；(3) 為其他平台進行直播；(4) 挖角甲方旗下其他主播；(5) 將甲方提供之資源、培訓內容透露給競爭對手。' },
        { label: '誠信義務', content: '乙方須遵守以下誠信義務：(1) 須如實說明收益分配情況，不得對粉絲有欺騙行為；(2) 不得虛構直播數據；(3) 不得透過不當手段獲取流量或收益；(4) 須妥善保管帳號密碼。' }
      ]
    },
    {
      title: '第六章 違約責任',
      icon: '⚖️',
      items: [
        { label: '乙方違約情形', content: '乙方有下列情形之一者，視為違約：(1) 未經甲方同意，私自加入其他抖音工會；(2) 連續2個月未達到最低直播時長要求；(3) 違反抖音平台規範，導致帳號被封禁；(4) 發布違法違規內容，損害甲方聲譽；(5) 未經甲方同意，擅自與第三方簽訂商業合作協議；(6) 虛假宣傳、欺騙粉絲；(7) 洩露粉絲隱私資料或甲方商業秘密；(8) 將帳號轉讓、借貸給第三人使用。' },
        { label: '乙方違約處理', content: '乙方發生違約行為，甲方有權視情節輕重進行以下處理：(1) 書面警告並要求限期改正（限期通常為7日）；(2) 扣除當月收益之10%至50%作為違約金；(3) 暫停直播權利7天至30天；(4) 降低分潤比例等級（為期3-6個月）；(5) 終止本合約並追究法律責任；(6) 要求乙方賠償甲方因此所受之損失。' },
        { label: '違約終止後果', content: '乙方因違約被終止合約後，須遵守以下限制：(1) 6個月內不得加入其他抖音工會；(2) 須歸還甲方提供之所有資源（如有）；(3) 須繼續履行保密義務；(4) 甲方有權沒收乙方尚未領取之收益作為違約金。' },
        { label: '甲方違約處理', content: '甲方發生違約行為，乙方有權：(1) 要求甲方限期改正；(2) 解除合約並離開工會（無需支付違約金）；(3) 請求損害賠償。若甲方未按時支付乙方收益，每逾期一日應按當期款的0.1%支付違約金。若甲方無正當理由終止合約，須賠償乙方相當於3個月平均收益之金額。' },
        { label: '不可抗力', content: '因天災、戰爭、罷工、政府行為、疫情、平台政策變更等不可抗力事由，導致合約無法履行時，受影響之一方應於事由發生後3日內通知對方，並盡力降低損失。不可抗力事由持續超過30日時，任一方得以書面通知終止合約。' }
      ]
    },
    {
      title: '第七章 合約變更與終止',
      icon: '🔄',
      items: [
        { label: '合約變更', content: '本合約之任何修改須經雙方書面同意。甲方有權依據市場變化及平台政策調整以下條款，但須提前30日通知乙方：(1) 收益比例；(2) 直播時長要求；(3) 獎勵制度。若乙方不同意調整，得於通知後15日內提出終止合約。' },
        { label: '協議終止', content: '雙方得於以下情況協議終止合約：(1) 合約期滿，雙方同意不再續約；(2) 合約期間，雙方達成共識，同意提前結束合作；(3) 乙方帳號被平台永久封禁（合約自動終止）。' },
        { label: '乙方單方終止', content: '乙方欲提前終止合約，須符合以下條件：(1) 提前30日以書面通知甲方；(2) 須完成當月之直播時長要求；(3) 須配合進行工作交接。乙方提前終止合約，須遵守6個月競業限制。若乙方未經同意擅自終止合約，須賠償甲方相當於2個月平均收益之金額。' },
        { label: '甲方單方終止', content: '甲方欲提前終止合約，須符合以下條件：(1) 乙方發生違約行為，經甲方書面警告後未於期限內改正；(2) 乙方嚴重違反平台規範或法律；(3) 乙方長期（3個月以上）未達到直播要求，且無合理原因。甲方終止合約，須於終止日前7日通知乙方，並結清乙方所有未兌現之收益。' },
        { label: '終止後事項', content: '合約終止後，雙方須遵守以下事項：(1) 乙方須立即停止使用甲方工會之所有資源、名銜；(2) 雙方仍須履行各自之保密義務；(3) 甲方須於15日內結清乙方所有未兌現之收益；(4) 乙方須配合甲方進行帳號變更等相關作業。' },
        { label: '競業限制', content: '乙方於合約期間及合約終止後6個月內，不得從事以下行為：(1) 加入甲方之競爭對手工會；(2) 挖角甲方旗下主播；(3) 使用在甲方任職期間所知悉之商業秘密。違反競業限制，乙方須賠償甲方相當於6個月平均收益之金額。' }
      ]
    },
    {
      title: '第八章 爭議解決與其他',
      icon: '📝',
      items: [
        { label: '管轄法律', content: '本合約以中華民國（台灣）法律為準據法。' },
        { label: '爭議解決', content: '因本合約所生之爭議，雙方應本誠信原則先行協商解決。協商期限為爭議發生後15日內。協商不成時，雙方同意以台灣台北地方法院為第一審管轄法院。' },
        { label: '合約完整性', content: '本合約（含附件）構成雙方就本事項之完整合意，取代雙方之前就同一事項所為之任何口頭或書面協議。' },
        { label: '通知送達', content: '除另有約定外，雙方之通知須以書面為之。通知之送達日期為：(1) 親自送達日；(2) 掛號郵寄日；(3) 電子郵件發送日。' },
        { label: '合約份數', content: '本合約一式二份，雙方各執一份，具有同等效力。' },
        { label: '生效日期', content: '本合約自乙方完成報名並經甲方審核通過之日起生效。' }
      ]
    },
    {
      title: '第九章 附件與聲明',
      icon: '📎',
      items: [
        { label: '附件清單', content: '本合約附件為合約之一部分，包含但不限於：(1) 乙方身份證正反面影本；(2) 乙方銀行帳戶影本；(3) 抖音帳號截圖證明；(4) 直播規範細則；(5) 保密協議；(6) 報名表。' },
        { label: '乙方聲明', content: '乙方聲明已詳細閱讀並充分了解本合約之所有條款，願意遵守並執行。乙方確認甲方已就本合約之重要條款（包括但不限於：收益分配、直播要求、違約責任、競業限制）向乙方進行說明，乙方表示理解並同意。乙方確認報名表填寫之資料均為真實，如有虛假，願自負法律責任。' }
      ]
    }
  ];

  return (
    <div style={{ background: '#1c1c1e', color: 'white', minHeight: '100vh', fontFamily: "'PingFang TC', 'Helvetica Neue', sans-serif" }}>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 20px', background: 'radial-gradient(ellipse at top, rgba(255,45,85,0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(88,86,214,0.3) 0%, transparent 50%), #1c1c1e' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎵</div>
        <h1 style={{ fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: '900', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>抖音工會招募中</h1>
        <p style={{ fontSize: 'clamp(18px, 4vw, 28px)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', marginBottom: '20px' }}>加入頂級工會，開啟你的直播事業巔峰<br/>專業團隊支援 | 豐厚分潤 | 完整培訓</p>
        <p style={{ 
          fontSize: '28px', 
          fontWeight: '900', 
          marginBottom: '40px',
          background: 'linear-gradient(90deg, #ff2d55, #ff9500, #ffcc00, #ff2d55)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientMove 3s ease infinite',
          textShadow: 'none',
          filter: 'drop-shadow(0 0 20px rgba(255,149,0,0.6))'
        }}>
          ✨ 信總裁哥得永生，老爹帶你飛 ✨
        </p>
        <style>{`@keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`}</style>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          <a href="#join" style={{ display: 'inline-block', padding: '18px 36px', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', color: 'white', textDecoration: 'none', borderRadius: '50px', fontSize: '16px', fontWeight: '700', minWidth: '160px', textAlign: 'center' }}>立即報名加入</a>
          <a href="/streamer-guide" style={{ display: 'inline-block', padding: '18px 36px', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', borderRadius: '50px', fontSize: '16px', fontWeight: '700', minWidth: '160px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.3)' }}>🎵 主播攻略</a>
        </div>
      </section>

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', padding: '60px 20px', background: 'rgba(255,255,255,0.03)' }}>
        {[{ number: '500+', label: '簽約主播' }, { number: '1億+', label: '月總觀看' }, { number: '98%', label: '主播滿意度' }, { number: '24/7', label: '客服支援' }].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontWeight: '900', color: '#ff2d55' }}>{stat.number}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* About */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', background: 'rgba(255,255,255,0.02)' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: '800', marginBottom: '60px' }}>關於我們<div style={{ width: '60px', height: '4px', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', margin: '20px auto 0', borderRadius: '2px' }}></div></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[{ icon: '🏆', title: '頂級資源', desc: '與抖音官方深度合作，享有最新功能優先體驗、官方流量扶持、專屬活動資格等頂級資源。' }, { icon: '🎯', title: '專業培訓', desc: '從新人入門到進階變現，提供完整課程體系。包括內容策劃、粉絲運營、直播技巧、變現策略。' }, { icon: '🚀', title: '流量賦能', desc: '專業運營團隊一對一指導，量身打造內容策略。幫助你快速突破流量瓶頸，實現粉絲爆發式增長。' }].map((card, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{card.icon}</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#ff2d55' }}>{card.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: '800', marginBottom: '60px' }}>主播福利<div style={{ width: '60px', height: '4px', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', margin: '20px auto 0', borderRadius: '2px' }}></div></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[{ title: '高分潤比例', desc: '業界最高分潤50-70%，主播等級越高分潤越多', icon: '💰' }, { title: '開播獎勵', desc: '新人主播首月開播達標，最高5000元', icon: '🎁' }, { title: '流量扶持', desc: '官方推薦位機會、粉絲推廣資源', icon: '📈' }, { title: '專業培訓', desc: '一對一運營指導、直播技巧課程', icon: '🎓' }, { title: '收益保障', desc: '每月15日統一發放、快速提現', icon: '✅' }, { title: '官方合作', desc: '品牌代言機會、商業活動邀約', icon: '🤝' }].map((benefit, i) => (
            <div key={i} style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)', padding: '35px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>{benefit.icon}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{benefit.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contract */}
      <section id="contract" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', background: 'rgba(255,255,255,0.02)' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: '800', marginBottom: '20px' }}>合約內容<div style={{ width: '60px', height: '4px', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', margin: '20px auto 0', borderRadius: '2px' }}></div></h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '50px' }}>報名前請詳閱合約條款。點擊章節標題展開查看詳情</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {contractSections.map((section, sectionIndex) => (
            <div key={sectionIndex} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <button onClick={() => setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex)} style={{ width: '100%', padding: '20px 25px', background: 'transparent', border: 'none', color: 'white', fontSize: '18px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ fontSize: '24px' }}>{section.icon}</span>{section.title}</span>
                <span style={{ transform: expandedSection === sectionIndex ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▼</span>
              </button>
              {expandedSection === sectionIndex && (
                <div style={{ padding: '0 25px 25px 25px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ marginTop: '20px' }}>
                      <h4 style={{ color: '#ff2d55', fontSize: '15px', marginBottom: '8px', fontWeight: '600' }}>{item.label}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.7', textAlign: 'justify' }}>{item.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Join Form */}
      <section id="join" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', background: 'linear-gradient(180deg, #1c1c1e 0%, #0a0a0c 100%)' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: '800', marginBottom: '60px' }}>立即報名<div style={{ width: '60px', height: '4px', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', margin: '20px auto 0', borderRadius: '2px' }}></div></h2>
        <div style={{ maxWidth: '700px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <form onSubmit={handleSubmit}>
            {[{ label: '姓名 *', name: 'name', type: 'text', placeholder: '請輸入您的姓名', required: true }, { label: '聯絡電話 *', name: 'phone', type: 'tel', placeholder: '請輸入您的電話號碼', required: true }, { label: 'LINE ID', name: 'line', type: 'text', placeholder: '請輸入您的 LINE ID' }, { label: '抖音帳號 *', name: 'douyin', type: 'text', placeholder: '請輸入您的抖音帳號', required: true }].map((field, i) => (
              <div key={i} style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>{field.label}</label>
                <input type={field.type} name={field.name} required={field.required} placeholder={field.placeholder} onChange={handleChange} style={{ width: '100%', padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '16px', outline: 'none' }} />
              </div>
            ))}
            {[{ label: '目前粉絲數', name: 'followers', options: ['', '0 - 1,000', '1,000 - 5,000', '5,000 - 10,000', '10,000 - 50,000', '50,000 以上'] }, { label: '直播經驗', name: 'experience', options: ['', '無經驗', '1年以下', '1-3年', '3年以上'] }, { label: '主要直播類型', name: 'category', options: ['', '美妝時尚', '遊戲電競', '音樂演唱', '聊天陪伴', '美食烹飪', '生活日常', '知識教學', '其他'] }].map((select, i) => (
              <div key={i} style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>{select.label}</label>
                <select name={select.name} onChange={handleChange} style={{ width: '100%', padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '16px', cursor: 'pointer' }}>
                  {select.options.map((opt, j) => (<option key={j} value={opt} style={{ background: '#1c1c1e' }}>{opt}</option>))}
                </select>
              </div>
            ))}
            {[{ label: '自我介紹 / 優勢說明', name: 'intro', placeholder: '請簡單介紹自己，讓我們更好地了解你...' }, { label: '期望收獲', name: 'expectations', placeholder: '你希望從工會獲得什麼？' }].map((textarea, i) => (
              <div key={i} style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>{textarea.label}</label>
                <textarea name={textarea.name} placeholder={textarea.placeholder} onChange={handleChange} style={{ width: '100%', padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '16px', minHeight: '120px', resize: 'vertical', outline: 'none' }} />
              </div>
            ))}
            <button type="submit" style={{ width: '100%', padding: '20px', background: 'linear-gradient(135deg, #ff2d55 0%, #ff9500 50%, #ffcc00 100%)', border: 'none', borderRadius: '14px', color: 'white', fontSize: '18px', fontWeight: '700', cursor: 'pointer', marginTop: '20px' }}>提交報名</button>
          </form>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 20px', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
        <p>© 2026 抖音工會 | All Rights Reserved</p>
      </footer>
    </div>
  );
}

import React from "react";
import "./clock1.scss";

const Clock1 = () => {
  // Güncel tarihi ve saati al
  const now = new Date();

  // Yıl, Ay, Gün, Saat, Dakika ve Saniyeyi al
  const year = now.getFullYear();
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const monthName = months[now.getMonth()]; // getMonth() ayın sıfır tabanlı indeksini döner

  const day = String(now.getDate()).padStart(2, "0");
  // Günlerin isimlerini içeren bir dizi oluştur
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dayName = days[now.getDay()];

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const period = hours < 12 ? "Sabah" : "Akşam";

  // 12 saat formatına çevir ve AM/PM ekle
  const formattedHours = hours % 12 || 12;
  const ampm = hours < 12 ? "MORNING" : "EVENING";

  return (
    <div className="container">
      <div className="cover">
      <div className="time">
        {`${hours} : ${minutes}`}
        </div>
      <div className="history">
        <div className="month">
            {`${monthName} ${day}, ${year}`}
            </div>
        <div className="day">
            {`${dayName} ${ampm}`}
            </div>
      </div>
      </div>
    </div>
  );
};

export default Clock1;

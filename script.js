
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app-content").innerHTML = "<p>اختر فئة للبدء...</p>";
  document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  document.getElementById("lang-toggle").addEventListener("click", () => {
    alert("تم تبديل اللغة (وظيفة تجريبية فقط الآن).");
  });
});

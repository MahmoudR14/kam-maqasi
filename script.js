
document.addEventListener("DOMContentLoaded", () => {
  const appContent = document.getElementById("app-content");
  const modeToggle = document.getElementById("mode-toggle");
  const langToggle = document.getElementById("lang-toggle");
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const progressSteps = document.querySelectorAll(".progress-step");

  initApp();

  modeToggle.addEventListener("click", toggleDarkMode);
  langToggle.addEventListener("click", toggleLanguage);
  loginBtn.addEventListener("click", showLoginForm);
  registerBtn.addEventListener("click", showRegisterForm);

  function initApp() {
    appContent.innerHTML = `
      <h2>مرحبًا بك في كام مقاسي</h2>
      <p>اختر الفئة المناسبة لتبدأ عملية القياس:</p>
      <div class="categories">
        <button class="category-btn" data-category="men">رجالي</button>
        <button class="category-btn" data-category="women">نسائي</button>
        <button class="category-btn" data-category="kids">أطفال</button>
      </div>
    `;
    
    document.querySelectorAll(".category-btn").forEach(btn => {
      btn.addEventListener("click", selectCategory);
    });
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    modeToggle.textContent = isDark ? "☀️" : "🌓";
    localStorage.setItem("darkMode", isDark);
  }

  function toggleLanguage() {
    const currentLang = langToggle.textContent;
    const newLang = currentLang === "EN" ? "AR" : "EN";
    langToggle.textContent = newLang;
    alert(`سيتم تبديل اللغة إلى ${newLang} (هذه الميزة قيد التطوير)`);
  }

  function showLoginForm() {
    appContent.innerHTML = `
      <h2>تسجيل الدخول</h2>
      <form id="login-form">
        <div class="form-group">
          <label for="email">البريد الإلكتروني</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">كلمة المرور</label>
          <input type="password" id="password" required>
        </div>
        <button type="submit">تسجيل الدخول</button>
      </form>
    `;
  }

  function showRegisterForm() {
    appContent.innerHTML = `
      <h2>إنشاء حساب جديد</h2>
      <form id="register-form">
        <div class="form-group">
          <label for="name">الاسم الكامل</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="new-email">البريد الإلكتروني</label>
          <input type="email" id="new-email" required>
        </div>
        <div class="form-group">
          <label for="new-password">كلمة المرور</label>
          <input type="password" id="new-password" required>
        </div>
        <button type="submit">إنشاء الحساب</button>
      </form>
    `;
  }

  function selectCategory(e) {
    const category = e.target.dataset.category;
    updateProgress(2);
    
    appContent.innerHTML = `
      <h2>اختر النوع المناسب</h2>
      <div class="types">
        <button class="type-btn" data-type="shirt">قميص</button>
        <button class="type-btn" data-type="pants">بنطال</button>
        <button class="type-btn" data-type="dress">فستان</button>
      </div>
      <button class="back-btn">رجوع</button>
    `;
    
    document.querySelector(".back-btn").addEventListener("click", initApp);
    document.querySelectorAll(".type-btn").forEach(btn => {
      btn.addEventListener("click", selectType);
    });
  }
});

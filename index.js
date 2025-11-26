// استدعاء مكتبة Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// إعدادات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "ضع-القيمة-من-Firebase",
  authDomain: "ضع-القيمة-من-Firebase",
  projectId: "ضع-القيمة-من-Firebase",
  storageBucket: "ضع-القيمة-من-Firebase",
  messagingSenderId: "ضع-القيمة-من-Firebase",
  appId: "ضع-القيمة-من-Firebase"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// تهيئة خدمة المصادقة
const auth = getAuth(app);

// مثال: تسجيل دخول مستخدم
async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("تم تسجيل الدخول:", userCredential.user);
  } catch (error) {
    console.error("خطأ في تسجيل الدخول:", error.message);
  }
}

// مثال: تسجيل خروج مستخدم
async function logout() {
  try {
    await signOut(auth);
    console.log("تم تسجيل الخروج بنجاح");
  } catch (error) {
    console.error("خطأ في تسجيل الخروج:", error.message);
  }
}

// للتجربة
login("test@example.com", "password123");
// logout();

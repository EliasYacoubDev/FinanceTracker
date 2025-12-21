import LoginForm from "../components/forms/LoginForm";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      onLogin();
    }
  }, [isAuthenticated, onLogin]);
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h1>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
}

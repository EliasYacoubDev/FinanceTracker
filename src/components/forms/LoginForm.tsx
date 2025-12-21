import { useState } from "react";
import { useAuthStore } from "../../store/authStore";

export default function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Validate empty fields
    if (!email || !password) {
      setError("Please enter both fields");
      return;
    }
    //Validate email format
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login();
      onLogin();
    }, 1000);
  };

  return (
    <div>
      {/*Error Message */}
      {error && (
        <p className="mb-4 text-red-600 font-medium text-sm">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/*Email*/}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        {/*Password*/}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        {/*Login Forn */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700  transition-all p-2 mt-2"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

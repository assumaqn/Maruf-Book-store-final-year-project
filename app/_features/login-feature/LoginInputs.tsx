import Link from "next/link";

export function LoginInputs() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center px-4 ">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-semibold text-gray-900">
            Maruf
          </h1>
          <p className="text-[10px]  text-gray-500 uppercase ml-10">
            Book Store
          </p>
        </div>

        <div className="bg-transparent">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Please enter your credentials to access the System
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Email address
              </label>
              <input
                type="email"
                autoFocus
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-sm focus:border-black"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-sm focus:border-black"
              />
            </div>

            <div className="text-right">
              <Link href="#" className="text-xs text-gray-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0f2a2a] text-white py-3 text-sm tracking-widest uppercase hover:opacity-90 transition cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

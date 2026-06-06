export default function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault()
    onLogin()
  }

  return (
    <main className="bg-gray-100 flex items-center justify-center py-20">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-block bg-blue-600 text-white rounded px-3 py-1 text-sm font-semibold tracking-wide mb-3">
            Orbital Health
          </div>
          <h1 className="text-xl font-bold text-gray-900">Sign in to your account</h1>
        </div>

        <form onSubmit={handleSubmit} aria-label="Sign in" className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="block text-xs font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              autoComplete="username"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  )
}

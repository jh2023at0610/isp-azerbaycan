export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Səhifə tapılmadı</p>
        <a 
          href="/" 
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
        >
          Ana səhifəyə qayıt
        </a>
      </div>
    </div>
  );
}


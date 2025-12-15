export function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold text-teal-600 mb-8">CuraSync</div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading CuraSync...</p>
      </div>
    </div>
  );
}

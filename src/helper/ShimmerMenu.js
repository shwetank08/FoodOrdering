const ShimmerMenu = () => {
    const shimmerItems = new Array(6).fill(0); // Number of shimmer cards
  
    return (
      <>
        {/* Shimmer Banner/Header */}
        <div className="flex justify-center pt-6 px-4">
          <div className="w-full max-w-3xl p-4">
            <div className="flex flex-col space-y-3">
              <div className="shimmer h-6 w-1/3 rounded"></div>
              <div className="space-y-2 text-sm border rounded-lg shadow-xl p-4">
                <div className="shimmer h-4 w-1/2 rounded"></div>
                <div className="shimmer h-4 w-2/3 rounded"></div>
                <div className="shimmer h-4 w-1/3 rounded"></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Shimmer Menu Items */}
        {shimmerItems.map((_, index) => (
          <div key={index} className="flex justify-center pt-6 px-4">
            <div className="flex w-full max-w-3xl border shadow-lg rounded-lg p-4 gap-4">
              {/* Left Side */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 shimmer rounded-full"></div>
                </div>
                <div className="shimmer h-5 w-1/2 rounded"></div>
                <div className="shimmer h-4 w-1/4 rounded"></div>
                <div className="shimmer h-4 w-1/3 rounded"></div>
                <div className="shimmer h-16 w-full rounded"></div>
              </div>
  
              {/* Right Side */}
              <div className="flex flex-col justify-between items-center min-w-[100px]">
                <div className="rounded-lg shimmer w-[120px] h-[90px]"></div>
                <div className="mt-2 shimmer w-24 h-6 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default ShimmerMenu;
  
"use client";
import React, { useState, useEffect } from "react";

// ========================================================
// SINGLE FILE FRONTEND COMPONENT EXPORT
// ========================================================
export default function Page() {
  const [cloths, setCloths] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Tracking individual box item configuration states using the item's _id
  const [activeImages, setActiveImages] = useState<{ [key: string]: string }>(
    {},
  );
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>(
    {},
  );
  const [selectedColors, setSelectedColors] = useState<{
    [key: string]: string;
  }>({});

  // 1. Fetch live collection data from your local API on mount
  useEffect(() => {
    const fetchClothesData = async () => {
      try {
        setLoading(true);
        // Hardcoded target URL as specified
        const response = await fetch("http://localhost:5000/clothings");

        if (!response.ok) {
          throw new Error(
            `Server responded with action status: ${response.status}`,
          );
        }

        const result = await response.json();
        setCloths(result);

        // Set up the starting active image tracking maps for each card
        const initialImages: { [key: string]: string } = {};
        result.forEach((item: any) => {
          if (item.clothImgURL && item.clothImgURL.length > 0) {
            initialImages[item.clothImgURL] = item.clothImgURL;
            console.log(item.clothImgURL)
          } else if (item.clothImgURL) {
            initialImages[item._id] = item.clothImgURL;
          }
        });
        setActiveImages(initialImages);
      } catch (err: any) {
        console.error("Error pulling database items:", err);
        setError(err.message || "Failed to fetch items from backend service.");
      } finally {
        setLoading(false);
      }
    };

    fetchClothesData();
  }, []);

  // 2. Loading UI state handler
  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center font-sans">
        <div className="text-zinc-500 font-medium text-sm animate-pulse">
          Connecting to database pipeline...
        </div>
      </div>
    );
  }

  // 3. Connection Error fallback state handler
  if (error) {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center font-sans p-4">
        <div className="bg-white max-w-sm w-full p-6 rounded-xl border border-red-200 text-center shadow-md">
          <span className="text-red-500 block font-bold text-lg mb-2">
            Network Error
          </span>
          <p className="text-zinc-600 text-xs mb-4">{error}</p>
          <p className="text-zinc-400 text-[11px]">
            Make sure your server is running on a port and CORS is enabled.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 p-6 sm:p-12 font-sans">
      <h1 className="text-2xl font-black text-zinc-900 tracking-tight text-center mb-8">
        Live Inventory Shopping Grid
      </h1>

      {/* Grid wrapper handling multiple mapping results from backend */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {cloths.map((product: any) => {
          const currentImage = activeImages[product._id];
          const currentSize = selectedSizes[product._id] || "";
          const currentColor = selectedColors[product._id] || "";

          return (
            <div
              key={product._id}
              className="bg-white w-full max-w-sm rounded-2xl shadow-md overflow-hidden border border-zinc-200/80 flex flex-col justify-between"
            >
              {/* Product Visual Container Box */}
              <div className="relative aspect-[4/5] bg-zinc-100 w-full group">
                {/* {currentImage && (
                  <img
                    src={currentImage}
                    onClick={() => console.log(currentImage)}
                    alt={product.title || product.style}
                    className="w-full h-full object-cover object-center"
                  />
                )} */}

                {/* Style Collection Label Category Tag */}
                <span className="absolute top-3 left-3 bg-zinc-900/90 text-white font-medium text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md backdrop-blur-sm">
                  {product.style || "Clothing Item"}
                </span>

                {/* Sub-image Overlay Track Selector */}
                {product.clothImgURL && product.clothImgURL.length > 0 && (
                  <div className="absolute bottom-3 right-3 flex gap-1 bg-black/20 p-1 rounded-md backdrop-blur-md">
                    {/* {product.images.map((img: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setActiveImages((prev) => ({
                            ...prev,
                            [product._id]: img.url,
                          }))
                        }
                        className={`w-8 h-10 rounded border overflow-hidden transition-all ${
                          currentImage === img.url
                            ? "border-white scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={product.clothImgURL || img.url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))} */}
                    <img
                          src={product.clothImgURL}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                  </div>
                )}
              </div>

              {/* Data Content Summary Segment Block */}
              <div className="p-4 flex flex-col gap-3.5 flex-1 justify-between">
                {/* Meta details wrapper title row */}
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="text-base font-bold text-zinc-900 tracking-tight leading-snug line-clamp-1">
                      {product.title || product.style || "Unnamed Variant"}
                    </h2>
                    <span className="text-base font-black text-zinc-900 whitespace-nowrap">
                      #
                      {Number(product.price || product.amount || 0).toFixed(2)}
                    </span>
                  </div>

                  {product.ratings && (
                    <div className="flex items-center gap-1 mt-0.5 text-[11px] font-semibold text-zinc-500">
                      <span className="text-amber-500">★</span>
                      <span>{product.ratings.average}</span>
                      <span className="text-zinc-400 font-normal">
                        ({product.ratings.count})
                      </span>
                    </div>
                  )}

                  {product.description && (
                    <p className="text-zinc-500 text-[11px] leading-relaxed line-clamp-2 mt-1.5">
                      {product.description}
                    </p>
                  )}
                </div>

                <hr className="border-zinc-100" />

                {/* Conditional Color Configuration Map Arrays */}
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider block mb-1.5">
                      Color:{" "}
                      <span className="text-zinc-800 normal-case font-medium">
                        {currentColor || "Select color"}
                      </span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.colors.map((color: string) => (
                        <button
                          key={color}
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [product._id]: color,
                            }))
                          }
                          className={`text-[11px] px-2.5 py-1 font-medium rounded border transition-all ${
                            currentColor === color
                              ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                              : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <button className="px-1 rounded-md cursor-pointer py-1 bg-gray-300">Buy</button>
                {/* Conditional Sizing Box Elements Map Arrays */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider block mb-1.5">
                      Size:{" "}
                      <span className="text-zinc-800 normal-case font-medium">
                        {currentSize || "Select size"}
                      </span>
                    </span>
                    <div className="grid grid-cols-4 gap-1">
                      {product.sizes.map((size: string) => (
                        <button
                          key={size}
                          onClick={() =>
                            setSelectedSizes((prev) => ({
                              ...prev,
                              [product._id]: size,
                            }))
                          }
                          className={`text-[11px] py-1.5 font-semibold text-center border rounded transition-all ${
                            currentSize === size
                              ? "bg-zinc-950 text-white border-zinc-950"
                              : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dynamic State Stock Track Indicators */}
                <div className="text-[11px] font-bold mt-0.5">
                  {product.stock === 0 ? (
                    <span className="text-red-500">✕ Sold Out</span>
                  ) : product.stock <= 5 ? (
                    <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                      Low Stock ({product.stock})
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

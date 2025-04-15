"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, categoryNames, type MenuCategory } from "@/constants/menu";
import Image from "next/image";

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>("coffee");

  const categories: MenuCategory[] = [
    "coffee",
    "non-coffee",
    "ice-cream",
    "snack",
  ];

  return (
    <div className="py-10 px-4 bg-yellow-300 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">ASSA Coffee</h1>
          <p className="text-gray-800">아싸 커피 메뉴</p>
        </div>

        {/* 메뉴 카테고리 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              {/* 카테고리 헤더 */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-white"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-yellow-300 px-8 py-1 border-2 border-white text-center">
                    <h2 className="text-2xl font-bold text-gray-900 uppercase">
                      {categoryNames[category]}
                    </h2>
                    <p className="text-xs text-gray-700">HOT / ICE</p>
                  </div>
                </div>
              </div>

              {/* 메뉴 리스트 */}
              <div className="space-y-3">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <div className="flex items-baseline">
                          <h3 className="text-lg font-bold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="ml-2 text-sm text-gray-600 hidden md:block">
                            {item.description.substring(0, 15)}
                            {item.description.length > 15 ? "..." : ""}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-gray-900">
                          {(item.price / 1000).toFixed(1)}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* 메뉴판 하단 정보 */}
        <div className="mt-10 bg-yellow-200 p-4 rounded-lg text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span>다양한 옵션 오리지널 시즈니 0.5</span>
            <span>|</span>
            <span>디카페인 시즈니 1.0</span>
            <span>|</span>
            <span>우유가 0.7</span>
            <span>|</span>
            <span>설탕가 0.7</span>
            <span>|</span>
            <span>휘핑가 0.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

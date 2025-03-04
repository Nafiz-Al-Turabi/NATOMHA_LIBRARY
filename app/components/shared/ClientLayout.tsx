"use client";

import React, { useState } from "react";
import { BiChevronDown, BiFoodMenu, BiSearch } from "react-icons/bi";
import Link from "next/link";
import { TbLogout2 } from "react-icons/tb";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", path: "/" },
        { name: "Installation", path: "/installation" },
        { name: "Usage", path: "/usage" },
      ],
    },
    {
      title: "Components",
      items: [
        { name: "Button", path: "/button" },
        { name: "Card", path: "/cards" },
        { name: "Input", path: "/input" },
        { name: "Modal", path: "/modal" },
        { name: "Table", path: "/table" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Examples", path: "/examples" },
        { name: "API Reference", path: "/api-reference" },
        { name: "Changelog", path: "/changelog" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-[#1d202a]">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg cursor-pointer"
            >
              {sidebarOpen ? <TbLogout2 size={20} /> : <BiFoodMenu size={20} />}
            </button>
            <span className="text-xl font-bold uppercase">NAT UI Library</span>
          </div>
          <div className="hidden md:flex relative w-96">
            <BiSearch className="absolute left-3 top-1/3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 border border-transparent rounded-lg focus:outline-none focus:border  focus:border-[#1d202a]"
            />
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-[#1d202a] transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="h-full overflow-y-auto p-4">
          {navigation.map((section, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-[#83858b] mb-2">
                  {section.title}
                </h2>
                <BiChevronDown size={20} className="text-[#83858b]" />
              </div>
              <ul>
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.path}
                      className="block w-full text-left px-3 py-1.5 text-sm text-[#83858b] hover:text-[#c44221]  border-l border-[#292f3a] hover:border-[#c44221]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } min-h-screen transition-all duration-200 ease-in-out`}
      >
        <div className=" p-4">{children}</div>
      </main>
    </div>
  );
};

export default ClientLayout;

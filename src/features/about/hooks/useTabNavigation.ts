import { useState } from "react";

export function useTabNavigation(initialTab: string = "background") {
  const [activeTab, setActiveTab] = useState(initialTab);

  const changeTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    changeTab,
  };
} 
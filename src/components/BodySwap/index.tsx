"use client";

import { useEffect, useState } from "react";
import { LICss, PadWrap, ULCss, WrapPage } from "./styles";
import Borrow from "./Borrow";
import Repay from "./Repay";
import History from "./History";
import useQueryTwitterOAuth from "@/hooks/useQueryAuth";

const TABS = [
  {
    id: 0,
    title: "Borrow",
    component: <Borrow />,
  },
  {
    id: 1,
    title: "Repay",
    component: <Repay />,
  },
  {
    id: 2,
    title: "History",
    component: <History />,
  },
];

const BodySwap = () => {
  const [tabId, setTabId] = useState(0);
  const [isMount, setIsMounted] = useState(false);

  useQueryTwitterOAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMount) return null;

  return (
    <WrapPage>
      <div className="pb-8 pt-[140px]">
        <PadWrap>
          <ULCss>
            {TABS.map((tab) => (
              <LICss
                key={tab.id}
                $isActive={tab.id === tabId}
                onClick={() => setTabId(tab.id)}
              >
                {tab.title}
              </LICss>
            ))}
          </ULCss>

          {TABS[tabId].component}
        </PadWrap>
      </div>
    </WrapPage>
  );
};

export default BodySwap;

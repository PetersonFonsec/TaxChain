"use client";

import { DashboardResponse } from "@/app/model/DasboardResponse";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import FooterSection from "../../components/sections/footer/footer";
import Loading from "../../components/loading/loading";
import style from "./dashboard.module.css";

import DashboardSingle from "@/app/components/sections/dashboards/single/dashboard-single";
import DashboardGeral from "@/app/components/sections/dashboards/general/dashboard-general";

enum tabs {
  single = "SINGLE",
  general = "General",
}

export default function Dashboard() {
  const params = useParams<{ slug: string }>();
  const [isLoading, toggleLoading] = useState(false);

  const [resume, setResume] = useState<DashboardResponse>(null as any);
  const [currentTab, changeTab] = useState(tabs.general);

  useEffect(() => {
    getInfos(params.slug);
  }, [params.slug]);

  async function getInfos(slug: string) {
    const form = new FormData();
    form.append("slug", slug);
    toggleLoading(true);

    fetch(`/api/dashboard`, {
      method: "POST",
      body: form,
    })
      .then(async (e) => {
        toggleLoading(false);
        const result = await e.json();
        setResume(result);
      })
      .catch((e: Response) => {
        toggleLoading(false);
        if (e.status === 404) return window.location.assign("/");
      });
  }

  return (
    <>
      <main className={style.dashboard}>
        <header className={style.header}>
          <h1 className="title">Resumo suas operações</h1>

          <ul className={style.tab}>
            <li
              onClick={() => changeTab(tabs.single)}
              className={currentTab === tabs.single ? "active text" : "text"}
            >
              Visão por moeda
            </li>
            <li
              onClick={() => changeTab(tabs.general)}
              className={currentTab === tabs.general ? "active text" : "text"}
            >
              Geral
            </li>
          </ul>
        </header>

        {currentTab === tabs.single ? <DashboardSingle resume={resume}/> : <DashboardGeral />}
        {/* {currentTab === tabs.single ? <DashboardSingle resume={resume}/> : <DashboardGeral resume={resume}/>} */}

        {isLoading ? <Loading /> : ""}
      </main>
      <FooterSection />
    </>
  );
}

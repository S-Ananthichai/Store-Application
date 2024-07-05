import React from "react";
import MyNavbar from "./compomant/Navbar";
import MyCard from "./compomant/Card";

export default function Home() {
  return (
    <main className="bg-slate-300 h-[100vh]">
      <MyNavbar />
      <div className="mt-6 ml-28">
        <h1 className="text-black font-bold">All Cloths</h1>
        {/* <div className="mt-4 grid-flow-col">
          <MyCard />
        </div> */}
      </div>
      <MyCard/>

    </main>
  );
}

/* eslint-disable import/first */
import React, { lazy, Suspense } from 'react'
const StylePanel = lazy(() => import('./Layouts/style/StylePanel'));
import AdminNav from "./Layouts/Header/components/AdminNav";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Content from "./Layouts/Content/Content";
import Footer from "./Layouts/Footer/Footer";

const Dashboard = () => {

    return (
        <>
          <Suspense fallback={<div>Loading...</div>}><StylePanel/></Suspense>
          <div className="wrapper ">
            <Sidebar />
            <div className="main-panel">
              <AdminNav />
              <Content />
              <Footer />
            </div>
          </div>
        </>
    );
}

export default Dashboard;
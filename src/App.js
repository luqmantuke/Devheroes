import React from 'react'
import { BannerApp,WhyChooseUs,Testimonial,WhatWeDo,Footer,TimetableTemplate } from './components/componentIndex'

import { BrowserRouter as Router, Route, useNavigate, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: < >  <BannerApp />
      <WhyChooseUs />
      {/* <Testimonial /> */}
      <WhatWeDo />
      <Footer /></>,
    
    },
    {
      path: "/timetable-template",
      element: <TimetableTemplate />,
    
    },


  ])
  return (
    
   <RouterProvider router={router} />
  );
};

export default App;
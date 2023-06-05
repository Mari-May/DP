import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './App.css';
import City from "./pages/City";

import Crimea from "./pages/Crimea";
import Chersones from "./pages/Chersones"; 
import Voron from "./pages/Voron";
import Bird from "./pages/Bird";
import Levad from "./pages/Levad";

import Vinn from "./pages/Vinn";
import Aktv from "./pages/Aktv";
import VPlanet from "./pages/VPlanet";
import VZoo from "./pages/VZoo";

import Volyn from "./pages/Volyn";
import LU from "./pages/LU";
import OldLu from "./pages/OldLu";
import Radz from "./pages/Radz";
import PBR from "./pages/PBR";

import Dnipro from "./pages/Dnipro";
import Mon from "./pages/Mon";
import Blue from "./pages/Blue";
import DnSkam from "./pages/DnSkam";
import Vodop from "./pages/Vodop";

import Donetsk from "./pages/Donetsk";
import Mog from "./pages/Mog";
import StUSp from "./pages/StUSp";
import SkelBIl from "./pages/SkelBIl";

import Zhytom from "./pages/Zhytom";
import PlBer from "./pages/PlBer";
import DrKar from "./pages/DrKar";
import FiloZhy from "./pages/FiloZhy";
import IslLov from "./pages/IslLov";

import Carpat from "./pages/Carpat";
import IBlue from "./pages/IBlue";
import Kase from "./pages/Kase";
import Eko from "./pages/Eko";

import Zaporozhye from "./pages/Zaporozhye";
import Chort from "./pages/Chort";
import Lpap from "./pages/Lpap";
import Pop from "./pages/Pop";
import ElKar from "./pages/ElKar";

import Fr from "./pages/Fr";
import SkDowb from "./pages/SkDowb";
import Viad from "./pages/Viad";
import GirlsTears from "./pages/GirlsTears";
import Bl from "./pages/Bl";

import Kyiv from "./pages/Kyiv";
import AndCh from "./pages/AndCh";
import Most from "./pages/Most";
import GoldG from "./pages/GoldG";
import StNik from "./pages/StNik";

import Kiro from "./pages/Kiro";
import Monast from "./pages/Monast";
import Kaskad from "./pages/Kaskad";
import LastD from "./pages/LastD";
import Borov from "./pages/Borov";

import Lug from "./pages/Lug";
import BluV from "./pages/BluV";
import PlPot from "./pages/PlPot";
import Laz from "./pages/Laz";

import Lviv from "./pages/Lviv"
import Ital from "./pages/Ital";
import StAndr from "./pages/StAndr";
import Jog from "./pages/Jog";
import Lvivar from "./pages/Lvivar";

import Mik from "./pages/Mik";
import ShvM from "./pages/ShvM";
import Rodon from "./pages/Rodon";
import KubK from "./pages/KubK";
import BZ from "./pages/BZ";

import Od from "./pages/Od";
import Akk from "./pages/Akk";
import Plug from "./pages/Plug";
import Shabo from "./pages/Shabo";
import KLim from "./pages/KLim";

import Pol from "./pages/Pol";
import PolM from "./pages/PolM";
import PodV from "./pages/PodV";
import Opi from "./pages/Opi";

import Riv from "./pages/Riv";
import Cherv from "./pages/Cherv";
import LoveT from "./pages/LoveT";
import Bst from "./pages/Bst";
import Fosf from "./pages/Fosf";

import Summ from "./pages/Summ";
import SumSh from "./pages/SumSh";
import MovMon from "./pages/MovMon";
import Ked from "./pages/Ked";

import Tern from "./pages/Tern";
import Skalz from "./pages/Skalz";
import MonBach from "./pages/MonBach";
import Vish from "./pages/Vish";
import Monastr from "./pages/Monastr";

import Khar from "./pages/Khar";
import Darv from "./pages/Darv";
import DivM from "./pages/DivM";
import Fent from "./pages/Fent";
import ParkG from "./pages/ParkG";

import Khers from "./pages/Khers";
import Naber from "./pages/Naber";
import Tub from "./pages/Tub";
import Olesch from "./pages/Olesch";
import AskNov from "./pages/AskNov";

import Khmel from "./pages/Khmel";
import KamP from "./pages/KamP";
import KfON from "./pages/KfON";
import Ostr from "./pages/Ostr";
import Bak from "./pages/Bak";

import Cher from "./pages/Cher";
import Sof from "./pages/Sof";
import Damb from "./pages/Damb";
import Jos from "./pages/Jos";


import Cherniv from "./pages/Cherniv";
import Uni from "./pages/Uni";
import MikKaf from "./pages/MikKaf";
import Buk from "./pages/Buk";
import TKob from "./pages/TKob";

import Chernig from "./pages/Chernig";
import Zuker from "./pages/Zuker";
import GrRu from "./pages/GrRu";
import Pech from "./pages/Pech";
import PalRoz from "./pages/PalRoz";







































const Layout = () => {
  return(
    <>
  
    <Outlet/>

    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Register",
    element: <Register></Register>,
  },
  {
    path: "/City",
    element: <City></City>,
  },
  {
    path: "/obl=01", //obl=01
    element: <Crimea></Crimea>,
  },
  {
    path: "/sehen=01", //obl=01
    element: <Chersones></Chersones>,
  },

  {
    path: "/sehen=02", //obl=01
    element: <Voron></Voron>,
  },

  {
    path: "/sehen=03", //obl=01
    element: <Bird></Bird>,
  },
  {
    path: "/sehen=04", //obl=01
    element: <Levad></Levad>,
  },
  


  {
    path: "/obl=02", //obl=01
    element: <Vinn></Vinn>,
  },
  {
    path: "/sehen=05", //obl=01
    element: <Aktv></Aktv>,
  },
  {
    path: "/sehen=06", //obl=01
    element: <VPlanet></VPlanet>,
  },
  {
    path: "/sehen=07", //obl=01
    element: <VZoo></VZoo>,
  },




  {
    path: "/obl=03", //obl=01
    element: <Volyn></Volyn>,
  },
  {
    path: "/sehen=08", //obl=01
    element: <LU></LU>,
  },
  {
    path: "/sehen=09", //obl=01
    element: <OldLu></OldLu>,
  },
  {
    path: "/sehen=10", //obl=01
    element: <Radz></Radz>,
  },
  {
    path: "/sehen=11", //obl=01
    element: <PBR></PBR>
  },



  {
    path: "/obl=04", //obl=01
    element: <Dnipro></Dnipro>,
  },
  {
    path: "/sehen=12", //obl=01
    element: <Mon></Mon>
  },
  {
    path: "/sehen=13", //obl=01
    element: <Blue></Blue>
  },
  {
    path: "/sehen=14", //obl=01
    element: <DnSkam></DnSkam>
  },
  {
    path: "/sehen=15", //obl=01
    element: <Vodop></Vodop>
  },



  {
    path: "/obl=05", //obl=01
    element: <Donetsk></Donetsk>,
  },
  {
    path: "/sehen=16", //obl=01
    element: <Mog></Mog>
  },
  {
    path: "/sehen=17", //obl=01
    element: <StUSp></StUSp>
  },
  {
    path: "/sehen=18", //obl=01
    element: <SkelBIl></SkelBIl>
  },



  {
    path: "/obl=06", //obl=01
    element: <Zhytom></Zhytom>,
  },
  {
    path: "/sehen=19", //obl=01
    element: <PlBer></PlBer>
  },
  {
    path: "/sehen=20", //obl=01
    element: <DrKar></DrKar>
  },
  {
    path: "/sehen=21", //obl=01
    element: <FiloZhy></FiloZhy>
  },
  {
    path: "/sehen=22", //obl=01
    element: <IslLov></IslLov>
  },
  



  {
    path: "/obl=07", //obl=01
    element: <Carpat></Carpat>,
  },
  {
    path: "/sehen=23", //obl=01
    element: <IBlue></IBlue>
  },
  {
    path: "/sehen=24", //obl=01
    element: <Kase></Kase>
  },
  {
    path: "/sehen=25", //obl=01
    element: <Eko></Eko>
  },



  {
    path: "/obl=08", //obl=01
    element: <Zaporozhye></Zaporozhye>,
  },
  {
    path: "/sehen=26", //obl=01
    element: <Chort></Chort>
  },
  {
    path: "/sehen=27", //obl=01
    element: <Lpap></Lpap>
  },
  {
    path: "/sehen=28", //obl=01
    element: <Pop></Pop>
  },
  {
    path: "/sehen=29", //obl=01
    element: <ElKar></ElKar>
  },



  {
    path: "/obl=09", //obl=01
    element: <Fr></Fr>,
  },
  {
    path: "/sehen=30", //obl=01
    element: <SkDowb></SkDowb>
  },
  {
    path: "/sehen=31", //obl=01
    element: <Viad></Viad>
  },
  {
    path: "/sehen=32", //obl=01
    element: <GirlsTears></GirlsTears>
  },
  {
    path: "/sehen=33", //obl=01
    element: <Bl></Bl>
  },





  {
    path: "/obl=10", //obl=01
    element: <Kyiv></Kyiv>,
  },
  {
    path: "/sehen=34", //obl=01
    element: <AndCh></AndCh>
  },
  {
    path: "/sehen=35", //obl=01
    element: <Most></Most>
  },
  {
    path: "/sehen=36", //obl=01
    element: <GoldG></GoldG>
  },
  {
    path: "/sehen=37", //obl=01
    element: <StNik></StNik>
  },



  {
    path: "/obl=11", //obl=01
    element: <Kiro></Kiro>,
  },
  {
    path: "/sehen=38", //obl=01
    element: <Monast></Monast>
  },
  {
    path: "/sehen=39", //obl=01
    element: <Kaskad></Kaskad>
  },
  {
    path: "/sehen=40", //obl=01
    element: <LastD></LastD>
  },
  {
    path: "/sehen=41", //obl=01
    element: <Borov></Borov>
  },




  {
    path: "/obl=12", //obl=01
    element: <Lug></Lug>,
  },
  {
    path: "/sehen=42", //obl=01
    element: <BluV></BluV>
  },
  {
    path: "/sehen=43", //obl=01
    element: <PlPot></PlPot>
  },
  {
    path: "/sehen=44", //obl=01
    element: <Laz></Laz>
  },





  {
    path: "/obl=13", //obl=01
    element: <Lviv></Lviv>,
  },
  {
    path: "/sehen=45", //obl=01
    element: <Ital></Ital>
  },
  {
    path: "/sehen=46", //obl=01
    element: <StAndr></StAndr>
  },
  {
    path: "/sehen=47", //obl=01
    element: <Jog></Jog>
  },
  {
    path: "/sehen=48", //obl=01
    element: <Lvivar></Lvivar>
  },


  {
    path: "/obl=14", //obl=01
    element: <Mik></Mik>,
  },
  {
    path: "/sehen=49", //obl=01
    element: <ShvM></ShvM>
  },
  {
    path: "/sehen=50", //obl=01
    element: <Rodon></Rodon>
  },
  {
    path: "/sehen=51", //obl=01
    element: <KubK></KubK>
  },
  {
    path: "/sehen=52", //obl=01
    element: <BZ></BZ>
  },


  {
    path: "/obl=15", //obl=01
    element: <Od></Od>,
  },
  {
    path: "/sehen=53", //obl=01
    element: <Akk></Akk>
  },
  {
    path: "/sehen=54", //obl=01
    element: <Plug></Plug>
  },
  {
    path: "/sehen=55", //obl=01
    element: <Shabo></Shabo>
  },
  {
    path: "/sehen=56", //obl=01
    element: <KLim></KLim>
  },






  {
    path: "/obl=16", //obl=01
    element: <Pol></Pol>,
  },
  {
    path: "/sehen=57", //obl=01
    element: <PolM></PolM>
  },
  {
    path: "/sehen=58", //obl=01
    element: <PodV></PodV>
  },
  {
    path: "/sehen=59", //obl=01
    element: <Opi></Opi>
  },


  {
    path: "/obl=17", //obl=01
    element: <Riv></Riv>,
  },
  {
    path: "/sehen=60", //obl=01
    element: <Cherv></Cherv>
  },
  {
    path: "/sehen=61", //obl=01
    element: <LoveT></LoveT>
  },
  {
    path: "/sehen=62", //obl=01
    element: <Bst></Bst>
  },
  {
    path: "/sehen=63", //obl=01
    element: <Fosf></Fosf>
  },


  {
    path: "/obl=18", //obl=01
    element: <Summ></Summ>,
  },
  {
    path: "/sehen=64", //obl=01
    element: <SumSh></SumSh>
  },
  {
    path: "/sehen=65", //obl=01
    element: <MovMon></MovMon>
  },
  {
    path: "/sehen=66", //obl=01
    element: <Ked></Ked>
  },


  {
    path: "/obl=19", //obl=01
    element: <Tern></Tern>,
  },
  {
    path: "/sehen=67", //obl=01
    element: <Skalz></Skalz>
  },
  {
    path: "/sehen=68", //obl=01
    element: <MonBach></MonBach>
  },
  {
    path: "/sehen=69", //obl=01
    element: <Vish></Vish>
  },
  {
    path: "/sehen=70", //obl=01
    element: <Monastr></Monastr>
  },


  {
    path: "/obl=20", //obl=01
    element: <Khar></Khar>,
  },
  {
    path: "/sehen=71", //obl=01
    element: <Darv></Darv>
  },
  {
    path: "/sehen=72", //obl=01
    element: <DivM></DivM>
  },
  {
    path: "/sehen=73", //obl=01
    element: <Fent></Fent>
  },
  {
    path: "/sehen=74", //obl=01
    element: <ParkG></ParkG>
  },


  {
    path: "/obl=21", //obl=01
    element: <Khers></Khers>,
  },
  {
    path: "/sehen=75", //obl=01
    element: <Naber></Naber>
  },
  {
    path: "/sehen=76", //obl=01
    element: <Tub></Tub>
  },
  {
    path: "/sehen=77", //obl=01
    element: <Olesch></Olesch>
  },
  {
    path: "/sehen=78", //obl=01
    element: <AskNov></AskNov>
  },


  {
    path: "/obl=22", //obl=01
    element: <Khmel></Khmel>,
  },
  {
    path: "/sehen=79", //obl=01
    element: <KamP></KamP>
  },
  {
    path: "/sehen=80", //obl=01
    element: <KfON></KfON>
  },
  {
    path: "/sehen=81", //obl=01
    element: <Ostr></Ostr>
  },
  {
    path: "/sehen=82", //obl=01
    element: <Bak></Bak>
  },
 

  {
    path: "/obl=23", //obl=01
    element: <Cher></Cher>,
  },
  {
    path: "/sehen=83", //obl=01
    element: <Sof></Sof>
  },
  {
    path: "/sehen=84", //obl=01
    element: <Damb></Damb>
  },
  {
    path: "/sehen=85", //obl=01
    element: <Jos></Jos>
  },



  {
    path: "/obl=24", //obl=01
    element: <Cherniv></Cherniv>,
  },
  {
    path: "/sehen=86", //obl=01
    element: <Uni></Uni>
  },
  {
    path: "/sehen=87", //obl=01
    element: <MikKaf></MikKaf>
  },
  {
    path: "/sehen=88", //obl=01
    element: <Buk></Buk>
  },
  {
    path: "/sehen=89", //obl=01
    element: <TKob></TKob>
  },

  {
    path: "/obl=25", //obl=01
    element: <Chernig></Chernig>,
  },
  {
    path: "/sehen=90", //obl=01
    element: <Zuker></Zuker>
  },
  {
    path: "/sehen=91", //obl=01
    element: <GrRu></GrRu>
  },
  {
    path: "/sehen=92", //obl=01
    element: <Pech></Pech>
  },
  {
    path: "/sehen=93", //obl=01
    element: <PalRoz></PalRoz>
  },




]);



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

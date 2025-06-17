import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPageAdmin from "../components/pages/GeneralPage/GeneralPageAdmin";
import GeneralPageSeller from "../components/pages/GeneralPage/GeneralPageSeller";
import EditCardsPage from "../components/pages/editCards/EditCardsPage";

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/admin' element={<GeneralPageAdmin/>}/>
				<Route path='/seller' element={<GeneralPageSeller/>}/>
				<Route path='/editcard' element={<EditCardsPage/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;

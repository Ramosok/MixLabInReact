import {Route,Routes} from "react-router-dom";
import {ROUTE_NAMES} from "./routeNames";
import HomePage from "../pages/HomePage";
import CounterComponent from "../pages/CounterComponent";
import CounterCounters from "../pages/CounterCounters";


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePage/>}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterComponent/>}/>
            <Route path={ROUTE_NAMES.COUNTERS} element={<CounterCounters/>}/>
        </Routes>
    );
};

export default RoutesComponent;

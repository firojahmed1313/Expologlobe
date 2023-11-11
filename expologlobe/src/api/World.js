import asia from "./AsiaApi";
import africa from "./AfrikaApi";
import MiddleEastApi from "./MiddleEastApi";
import OceaniaApi from "./OceaniaApi";
import EuropeApi from "./EuropeApi";
import Northamerica from "./Northamerica";
import Latinamerica from "./Latinamerica";
const World =
        {
            asia :asia,
            africa :africa,
            middleeast :MiddleEastApi,
            oceania :OceaniaApi,
            europe :EuropeApi,
            northamerica :Northamerica,
            latinamerica :Latinamerica,
        }


export default World;
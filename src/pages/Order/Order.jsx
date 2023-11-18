import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";

import orderCoverImg from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();
    
    const offeredItems = menu.filter(item => item.category === 'offered');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const saladItems = menu.filter(item => item.category === 'salad');
    const soupItems = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>

            <Cover
                image={orderCoverImg}
                title={"Our Shop"}
                description={"Would you like to try a dish?"}
            ></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <h2>Salad: {tabIndex}</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Pizza: {tabIndex}</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Soup: {tabIndex}</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Dessert: {tabIndex}</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Drinks: {tabIndex}</h2>
                </TabPanel>

            </Tabs>


        </div>
    );
};

export default Order;
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import orderCoverImg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import TabItems from "../TabItems/TabItems";

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();
    
    const saladItems = menu.filter(item => item.category === 'salad');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const soupItems = menu.filter(item => item.category === 'soup');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const drinksItems = menu.filter(item => item.category === 'drinks');


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
                    <TabItems items={saladItems}></TabItems>
                </TabPanel>

                <TabPanel>
                    <TabItems items={pizzaItems}></TabItems>
                </TabPanel>

                <TabPanel>
                    <TabItems items={soupItems}></TabItems>
                </TabPanel>

                <TabPanel>
                    <TabItems items={dessertItems}></TabItems>
                </TabPanel>

                <TabPanel>
                    <TabItems items={drinksItems}></TabItems>
                </TabPanel>

            </Tabs>


        </div>
    );
};

export default Order;
import React from 'react'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
export const SidebarData = [
    {
        title:"Sales",
        icon: <PointOfSaleIcon />,
        link:"/Sales"
    },

    {
        title:"Userinfo",
        icon: <ManageAccountsOutlinedIcon />,
        link:"/Userinfo"
    },

    {
        title:"Products",
        icon: <Inventory2OutlinedIcon />,
        link:"/Product"
    },

    {
        title:"Manage",
        icon: <AnalyticsOutlinedIcon />,
        link:"/Manage"
    }

] 

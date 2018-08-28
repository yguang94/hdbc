import Vue from 'vue'
import Router from 'vue-router'
import BasicTrade from '@/components/pc/BasicTrade'
import Home from '@/components/pc/Home'
import Login from '@/components/pc/Login'
import Reset from '@/components/pc/Reset'
import Register from '@/components/pc/Register'
import News from '@/components/pc/News'
import News_content from '@/components/pc/News_content'
import Support from '@/components/pc/Support'
import Technical from '@/components/pc/Technical'
import Technical_content from '@/components/pc/Technical_content'
import Contact_us from '@/components/pc/Contact_us'
import Pairs_specification from '@/components/pc/Pairs_specification'
import Terms_of_use from '@/components/pc/Terms_of_use'
import Listing_form from '@/components/pc/Listing_form'
import Privacy_policy from '@/components/pc/Privacy_policy'

import Profile from '@/components/pc/Profile'
import Balance from '@/components/pc/Profile_content/Balance'
import DepositHistory from '@/components/pc/Profile_content/DepositHistory'
import WithdrawalHistory from '@/components/pc/Profile_content/WithdrawalHistory'
import OpenOrders from '@/components/pc/Profile_content/OpenOrders'
import OrderHistory from '@/components/pc/Profile_content/OrderHistory'
import AccountSettings from '@/components/pc/Profile_content/AccountSettings'
import ChangePassword from '@/components/pc/Profile_content/ChangePassword'
import Authentication from '@/components/pc/Profile_content/Authentication'
import Report from '@/components/pc/Profile_content/Report'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Reset',
            name: 'Reset',
            component: Reset
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/BasicTrade',
            name: 'BasicTrade',
            component: BasicTrade
        },
        {
            path: '/News',
            name: 'News',
            component: News
        },
        {
            path: '/News/News_content',
            name: '/News/News_content',
            component: News_content
        },
        {
            path: '/Support',
            name: 'Support',
            component: Support
        },
        {
            path: '/Technical',
            name: 'Technical',
            component: Technical
        },
        {
            path: '/Technical/Technical_content',
            name: 'Technical/Technical_content',
            component: Technical_content
        },
        {
            path: '/Contact_us',
            name: 'Contact_us',
            component: Contact_us
        },
        {
            path: '/Pairs_specification',
            name: 'Pairs_specification',
            component: Pairs_specification
        },
        {
            path: '/Terms_of_use',
            name: 'Terms_of_use',
            component: Terms_of_use
        },
        {
            path: '/Listing_form',
            name: 'Listing_form',
            component: Listing_form
        },
        {
            path: '/Privacy_policy',
            name: 'Privacy_policy',
            component: Privacy_policy
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile,
            children: [
                {
                    path: '/Profile/Balance',
                    name: 'Balance',
                    component: Balance
                },
                {
                    path: '/Profile/DepositHistory',
                    name: 'DepositHistory',
                    component: DepositHistory
                },
                {
                    path: '/Profile/WithdrawalHistory',
                    name: 'WithdrawalHistory',
                    component: WithdrawalHistory
                },
                {
                    path: '/Profile/OpenOrders',
                    name: 'OpenOrders',
                    component: OpenOrders
                },
                {
                    path: '/Profile/OrderHistory',
                    name: 'OrderHistory',
                    component: OrderHistory
                },
                {
                    path: '/Profile/AccountSettings',
                    name: 'AccountSettings',
                    component: AccountSettings
                },
                {
                    path: '/Profile/AccountSettings/ChangePassword',
                    name: 'ChangePassword',
                    component: ChangePassword
                },
                {
                    path: '/Profile/AccountSettings/Authentication',
                    name: 'Authentication',
                    component: Authentication
                },
                {
                    path: '/Profile/Report',
                    name: 'Report',
                    component: Report
                }
            ]
        }
    ]
})

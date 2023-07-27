import arcade from '../assets/arcade.png';
import advanced from '../assets/advanced.png';
import pro from '../assets/pro.png';

export const navBar = [
  {
    id: 1,
    title: 'YOUR INFO',
  },
  {
    id: 2,
    title: 'SELECT PLAN',
  },
  {
    id: 3,
    title: 'ADD-ONS',
  },
  {
    id: 4,
    title: 'SUMMARY',
  },
];

export const inputForm = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'e.g. Stephen King',
    type: 'text',
    error: 'This field is required',
  },
  {
    label: 'Email Address',
    name: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    type: 'email',
    error: 'This field is required',
  },
  {
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'e.g. +1 234 567 890',
    type: 'phone',
    error: 'This field is required',
  },
];

export const selectPlan = [
  {
    montly: [
      {
        img: arcade,
        title: 'Arcade',
        price: 9,
        description: '',
      },
      {
        img: advanced,
        title: 'Advanced',
        price: 12,
        description: '',
      },
      {
        img: pro,
        title: 'Pro',
        price: 15,
        description: '',
      },
    ],
    yearly: [
      {
        img: arcade,
        title: 'Arcade',
        price: 90,
        description: '2 months free',
      },
      {
        img: advanced,
        title: 'Advanced',
        price: 120,
        description: '2 months free',
      },
      {
        img: pro,
        title: 'Pro',
        price: 150,
        description: '2 months free',
      },
    ],
  },
];

export const pickAddOns = [
  {
    montly: [
      {
        id: 'onlineServicesMontly',
        title: 'Online service',
        description: 'Access to multiplayer games',
        price: 1,
      },
      {
        id: 'largerStorageMontly',
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        price: 2,
      },
      {
        id: 'customizableProfileMontly',
        title: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: 2,
      },
    ],
    yearly: [
      {
        id: 'onlineServicesYearly',
        title: 'Online service',
        description: 'Access to multiplayer games',
        price: 10,
      },
      {
        id: 'largerStorageYearly',
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        price: 20,
      },
      {
        id: 'customizableProfileYearly',
        title: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: 20,
      },
    ],
  },
];

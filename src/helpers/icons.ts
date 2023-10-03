type iconList = {
  [key: string]: string
}
const icons: iconList = {
  'arrow-left': <string> '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 6.42999L3.5 12.5L9.57 18.57" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12.5H3.66998" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'block': <string> '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.02 0.880002C14.54 0.400001 13.58 0 12.9 0H7.10001C6.42001 0 5.46001 0.400001 4.98001 0.880002L0.880002 4.98001C0.400001 5.46001 0 6.42001 0 7.10001V12.9C0 13.58 0.400001 14.54 0.880002 15.02L2.41 16.55L16.55 2.41L15.02 0.880002Z" fill="currentColor"/><path d="M19.12 4.97999L17.61 3.46999L3.46997 17.61L4.97997 19.12C5.45997 19.6 6.41998 20 7.09998 20H12.9C13.58 20 14.54 19.6 15.02 19.12L19.12 15.02C19.6 14.54 20 13.58 20 12.9V7.09999C20 6.41999 19.6 5.45999 19.12 4.97999Z" fill="currentColor"/><path d="M0.489961 18.47C0.199961 18.76 0.199961 19.24 0.489961 19.53C0.639962 19.68 0.829962 19.75 1.01996 19.75C1.20996 19.75 1.39996 19.68 1.54996 19.53L3.46997 17.61L2.40996 16.55L0.489961 18.47Z" fill="white"/><path d="M19.53 1.54998C19.82 1.25998 19.82 0.779977 19.53 0.489977C19.24 0.199976 18.76 0.199976 18.47 0.489977L16.55 2.40998L17.61 3.46998L19.53 1.54998Z" fill="currentColor"/></svg>',
  'clock': <string> '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6667 7.99999C14.6667 11.68 11.68 14.6667 8.00004 14.6667C4.32004 14.6667 1.33337 11.68 1.33337 7.99999C1.33337 4.31999 4.32004 1.33333 8.00004 1.33333C11.68 1.33333 14.6667 4.31999 14.6667 7.99999Z" stroke="#686868" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.4733 10.12L8.40663 8.88667C8.04663 8.67333 7.7533 8.16 7.7533 7.74V5.00667" stroke="#686868" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'close': <string> '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 9" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 9L9 1" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'down': <string> '<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.95998 1.5L5.69998 4.76C5.31498 5.145 4.68498 5.145 4.29998 4.76L1.03998 1.5" stroke="#686868" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'ellipse': <string> '<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="white"/></svg>',
  'eye-slash': <string> '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.725 7.65C17.4834 7.26667 17.225 6.90833 16.9584 6.575C16.65 6.18333 16.0667 6.15 15.7167 6.5L13.2167 9C13.4 9.55 13.4334 10.1833 13.2667 10.8417C12.975 12.0167 12.025 12.9667 10.85 13.2583C10.1917 13.425 9.55837 13.3917 9.00837 13.2083C9.00837 13.2083 7.81671 14.4 6.95837 15.2583C6.54171 15.675 6.67504 16.4083 7.23337 16.625C8.12504 16.9667 9.05004 17.1417 10 17.1417C11.4834 17.1417 12.925 16.7083 14.2417 15.9C15.5834 15.0667 16.7917 13.8417 17.7667 12.2833C18.5584 11.025 18.5167 8.90833 17.725 7.65Z" fill="#686868"/><path d="M11.6834 8.31667L8.3167 11.6833C7.8917 11.25 7.6167 10.65 7.6167 10C7.6167 8.69167 8.68337 7.61667 10 7.61667C10.65 7.61667 11.25 7.89167 11.6834 8.31667Z" fill="#686868"/><path d="M15.2084 4.79167L12.3834 7.61667C11.7751 7 10.9334 6.63333 10.0001 6.63333C8.13341 6.63333 6.63341 8.14167 6.63341 10C6.63341 10.9333 7.00841 11.775 7.61675 12.3833L4.80008 15.2083H4.79175C3.86675 14.4583 3.01675 13.5 2.29175 12.3667C1.45841 11.0583 1.45841 8.93333 2.29175 7.625C3.25841 6.10833 4.44175 4.91667 5.75841 4.1C7.07508 3.3 8.51675 2.85833 10.0001 2.85833C11.8584 2.85833 13.6584 3.54167 15.2084 4.79167Z" fill="#686868"/><path d="M12.3834 10C12.3834 11.3083 11.3167 12.3833 10.0001 12.3833C9.95007 12.3833 9.9084 12.3833 9.8584 12.3667L12.3667 9.85833C12.3834 9.90833 12.3834 9.95 12.3834 10Z" fill="#686868"/><path d="M18.1417 1.85833C17.8917 1.60833 17.4834 1.60833 17.2334 1.85833L1.8584 17.2417C1.6084 17.4917 1.6084 17.9 1.8584 18.15C1.9834 18.2667 2.14173 18.3333 2.3084 18.3333C2.47507 18.3333 2.6334 18.2667 2.7584 18.1417L18.1417 2.75833C18.4001 2.50833 18.4001 2.10833 18.1417 1.85833Z" fill="#686868"/></svg>',
  'eye': <string> '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7084 7.625C15.7834 4.6 12.9667 2.85833 10.0001 2.85833C8.51675 2.85833 7.07508 3.29167 5.75841 4.1C4.44175 4.91667 3.25841 6.10833 2.29175 7.625C1.45841 8.93333 1.45841 11.0583 2.29175 12.3667C4.21675 15.4 7.03341 17.1333 10.0001 17.1333C11.4834 17.1333 12.9251 16.7 14.2417 15.8917C15.5584 15.075 16.7417 13.8833 17.7084 12.3667C18.5417 11.0667 18.5417 8.93333 17.7084 7.625ZM10.0001 13.3667C8.13341 13.3667 6.63341 11.8583 6.63341 10C6.63341 8.14167 8.13341 6.63333 10.0001 6.63333C11.8667 6.63333 13.3667 8.14167 13.3667 10C13.3667 11.8583 11.8667 13.3667 10.0001 13.3667Z" fill="#686868"/><path d="M10 7.61667C8.69167 7.61667 7.625 8.68333 7.625 10C7.625 11.3083 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3083 12.3833 10C12.3833 8.69167 11.3083 7.61667 10 7.61667Z" fill="#686868"/></svg>',
  'favorite-chart': <string> '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.12 14.94L19.44 15.59C19.6 15.91 20.01 16.21 20.35 16.27L20.78 16.34C22.09 16.56 22.39 17.52 21.46 18.46L21.06 18.86C20.79 19.13 20.65 19.65 20.73 20.03L20.78 20.27C21.14 21.85 20.3 22.46 18.93 21.63L18.64 21.45C18.29 21.24 17.71 21.24 17.36 21.45L17.07 21.63C15.69 22.46 14.86 21.85 15.22 20.27L15.27 20.03C15.35 19.66 15.21 19.13 14.94 18.86L14.54 18.46C13.61 17.51 13.91 16.56 15.22 16.34L15.65 16.27C16 16.21 16.4 15.91 16.56 15.59L16.88 14.94C17.5 13.69 18.5 13.69 19.12 14.94Z" fill="#FF9900"/><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H13.09C13.44 22 13.69 21.64 13.65 21.29C13.61 20.91 13.63 20.46 13.75 19.94C13.77 19.87 13.75 19.79 13.69 19.73L13.47 19.51C12.62 18.65 12.31 17.61 12.61 16.66C12.92 15.72 13.78 15.06 14.97 14.86L15.27 14.81L15.54 14.27C16.09 13.15 16.99 12.5 18 12.5C19.01 12.5 19.91 13.15 20.46 14.27L20.61 14.58C20.68 14.73 20.82 14.83 20.98 14.86C21.07 14.88 21.16 14.9 21.25 14.92C21.6 15.01 22 14.73 22 14.36V7.81C22 4.17 19.83 2 16.19 2ZM16.26 8.96L13.95 11.94C13.66 12.31 13.25 12.55 12.78 12.6C12.32 12.66 11.85 12.53 11.49 12.24L9.66 10.82C9.59 10.76 9.51 10.76 9.47 10.77C9.43 10.77 9.36 10.79 9.3 10.87L6.92 13.96C6.77 14.15 6.55 14.25 6.32 14.25C6.16 14.25 6 14.2 5.86 14.09C5.53 13.84 5.47 13.37 5.72 13.04L8.1 9.95C8.39 9.58 8.8 9.34 9.27 9.28C9.74 9.22 10.2 9.35 10.57 9.64L12.4 11.08C12.47 11.14 12.54 11.13 12.59 11.13C12.63 11.13 12.7 11.11 12.76 11.03L15.07 8.05C15.32 7.72 15.79 7.66 16.12 7.92C16.46 8.17 16.51 8.64 16.26 8.96Z" fill="#F40000"/></svg>',
  'heart': <string> '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.18 0.616665C15.0683 0.616665 13.1783 1.64333 12 3.21833C10.8216 1.64333 8.93165 0.616665 6.81998 0.616665C3.23831 0.616665 0.333313 3.53333 0.333313 7.13833C0.333313 8.52667 0.55498 9.81 0.93998 11C2.78331 16.8333 8.46498 20.3217 11.2766 21.2783C11.6733 21.4183 12.3266 21.4183 12.7233 21.2783C15.535 20.3217 21.2166 16.8333 23.06 11C23.445 9.81 23.6666 8.52667 23.6666 7.13833C23.6666 3.53333 20.7616 0.616665 17.18 0.616665Z" fill="currentColor"/></svg>',
  'heart-search': <string> '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 12C22.31 10.98 22.5 9.88 22.5 8.69C22.5 5.6 20.01 3.09998 16.94 3.09998C15.12 3.09998 13.51 3.98003 12.5 5.34003C11.49 3.98003 9.87 3.09998 8.06 3.09998C4.99 3.09998 2.5 5.6 2.5 8.69C2.5 15.69 8.98 19.82 11.88 20.82C12.05 20.88 12.27 20.91 12.5 20.91" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.24 21C20.0073 21 21.44 19.5673 21.44 17.8C21.44 16.0327 20.0073 14.6 18.24 14.6C16.4727 14.6 15.04 16.0327 15.04 17.8C15.04 19.5673 16.4727 21 18.24 21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.04 21.6L21.04 20.6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'heart-search-bold': <string> '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.24 20.51L21.38 19.65C21.83 18.97 22.09 18.16 22.09 17.29C22.09 14.92 20.17 12.99 17.79 12.99C15.41 12.99 13.5 14.92 13.5 17.3C13.5 19.68 15.42 21.6 17.8 21.6C18.67 21.6 19.48 21.34 20.16 20.89L21.02 21.75C21.19 21.92 21.41 22.01 21.64 22.01C21.87 22.01 22.09 21.92 22.26 21.75C22.59 21.4 22.59 20.85 22.24 20.51Z" fill="#686868"/><path d="M22.5 8.73C22.5 9.92 22.31 11.02 21.98 12.04C21.92 12.25 21.67 12.31 21.49 12.18C20.4 11.37 19.07 10.94 17.7 10.94C14.23 10.94 11.4 13.77 11.4 17.24C11.4 18.32 11.68 19.38 12.21 20.32C12.37 20.6 12.18 20.96 11.88 20.85C9.47 20.03 4.6 17.04 3.02 12.04C2.69 11.02 2.5 9.92 2.5 8.73C2.5 5.64 4.99 3.14 8.06 3.14C9.87 3.14 11.49 4.02 12.5 5.37C13.51 4.02 15.13 3.14 16.94 3.14C20.01 3.14 22.5 5.64 22.5 8.73Z" fill="#686868"/></svg>',
  'home': <string> '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.04 6.82L14.28 2.79C12.71 1.69 10.3 1.75 8.79001 2.92L3.78001 6.83C2.78001 7.61 1.99001 9.21 1.99001 10.47V17.37C1.99001 19.92 4.06001 22 6.61001 22H17.39C19.94 22 22.01 19.93 22.01 17.38V10.6C22.01 9.25 21.14 7.59 20.04 6.82ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill="currentColor"/></svg>',
  'home-outline': <string> '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.318 3.74134L4.467 7.52653C3.657 8.1574 3 9.50024 3 10.5186V17.1968C3 19.2877 4.701 21 6.789 21H17.211C19.299 21 21 19.2877 21 17.2058V10.6448C21 9.55431 20.271 8.1574 19.38 7.53554L13.818 3.63319C12.558 2.74998 10.533 2.79504 9.318 3.74134Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17.99V14.99" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'line': <string> '<svg width="1" height="14" viewBox="0 0 1 14" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="14" stroke="black" stroke-opacity="0.1"/></svg>',
  'magic': <string> '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.79 4.14L17.72 7.93C17.71 8.45 18.04 9.14 18.46 9.45L20.94 11.33C22.53 12.53 22.27 14 20.37 14.6L17.14 15.61C16.6 15.78 16.03 16.37 15.89 16.92L15.12 19.86C14.51 22.18 12.99 22.41 11.73 20.37L9.97003 17.52C9.65003 17 8.89003 16.61 8.29003 16.64L4.95003 16.81C2.56003 16.93 1.88003 15.55 3.44003 13.73L5.42003 11.43C5.79003 11 5.96003 10.2 5.79003 9.66L4.77003 6.42C4.18003 4.52 5.24003 3.47 7.13003 4.09L10.08 5.06C10.58 5.22 11.33 5.11 11.75 4.8L14.83 2.58C16.5 1.39 17.83 2.09 17.79 4.14Z" fill="currentColor"/><path d="M21.9399 20.47L18.9099 17.44C18.6199 17.15 18.1399 17.15 17.8499 17.44C17.5599 17.73 17.5599 18.21 17.8499 18.5L20.8799 21.53C21.0299 21.68 21.2199 21.75 21.4099 21.75C21.5999 21.75 21.7899 21.68 21.9399 21.53C22.2299 21.24 22.2299 20.76 21.9399 20.47Z" fill="currentColor"/></svg>',
  'magic-star': <string> '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4083 3.45002L14.35 6.60833C14.3417 7.04166 14.6167 7.61668 14.9667 7.87501L17.0334 9.44166C18.3584 10.4417 18.1417 11.6667 16.5583 12.1667L13.8667 13.0083C13.4167 13.15 12.9417 13.6417 12.825 14.1L12.1833 16.55C11.675 18.4833 10.4083 18.675 9.35833 16.975L7.89166 14.6C7.62499 14.1667 6.99167 13.8417 6.49167 13.8667L3.70836 14.0083C1.71669 14.1083 1.15002 12.9583 2.45002 11.4417L4.1 9.525C4.40834 9.16666 4.55 8.50001 4.40833 8.05001L3.56671 5.35833C3.07504 3.775 3.95836 2.90001 5.53336 3.41667L7.99171 4.22501C8.40837 4.35834 9.03336 4.26667 9.38336 4.00833L11.95 2.15833C13.3334 1.15833 14.4417 1.74168 14.4083 3.45002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.2583 18.3333L15.7333 15.8083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'menu': <string> '<svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="1" x2="29" y2="1" stroke="black" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="9" x2="29" y2="9" stroke="black" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="17" x2="29" y2="17" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>',
  'plus': <string> '<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="16" rx="8" fill="#FF453A"/><path d="M17.2969 7.29688H14.7031V4.70312C14.7031 4.3148 14.3883 4 14 4C13.6117 4 13.2969 4.3148 13.2969 4.70312V7.29688H10.7031C10.3148 7.29688 10 7.61167 10 8C10 8.38833 10.3148 8.70312 10.7031 8.70312H13.2969V11.2969C13.2969 11.6852 13.6117 12 14 12C14.3883 12 14.7031 11.6852 14.7031 11.2969V8.70312H17.2969C17.6852 8.70312 18 8.38833 18 8C18 7.61167 17.6852 7.29688 17.2969 7.29688Z" fill="white"/></svg>',
  'profile': <string> '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12C22.5 6.49 18.01 2 12.5 2C6.99 2 2.5 6.49 2.5 12C2.5 14.9 3.75 17.51 5.73 19.34C5.73 19.35 5.73 19.35 5.72 19.36C5.82 19.46 5.94 19.54 6.04 19.63C6.1 19.68 6.15 19.73 6.21 19.77C6.39 19.92 6.59 20.06 6.78 20.2C6.85 20.25 6.91 20.29 6.98 20.34C7.17 20.47 7.37 20.59 7.58 20.7C7.65 20.74 7.73 20.79 7.8 20.83C8 20.94 8.21 21.04 8.43 21.13C8.51 21.17 8.59 21.21 8.67 21.24C8.89 21.33 9.11 21.41 9.33 21.48C9.41 21.51 9.49 21.54 9.57 21.56C9.81 21.63 10.05 21.69 10.29 21.75C10.36 21.77 10.43 21.79 10.51 21.8C10.79 21.86 11.07 21.9 11.36 21.93C11.4 21.93 11.44 21.94 11.48 21.95C11.82 21.98 12.16 22 12.5 22C12.84 22 13.18 21.98 13.51 21.95C13.55 21.95 13.59 21.94 13.63 21.93C13.92 21.9 14.2 21.86 14.48 21.8C14.55 21.79 14.62 21.76 14.7 21.75C14.94 21.69 15.19 21.64 15.42 21.56C15.5 21.53 15.58 21.5 15.66 21.48C15.88 21.4 16.11 21.33 16.32 21.24C16.4 21.21 16.48 21.17 16.56 21.13C16.77 21.04 16.98 20.94 17.19 20.83C17.27 20.79 17.34 20.74 17.41 20.7C17.61 20.58 17.81 20.47 18.01 20.34C18.08 20.3 18.14 20.25 18.21 20.2C18.41 20.06 18.6 19.92 18.78 19.77C18.84 19.72 18.89 19.67 18.95 19.63C19.06 19.54 19.17 19.45 19.27 19.36C19.27 19.35 19.27 19.35 19.26 19.34C21.25 17.51 22.5 14.9 22.5 12ZM17.44 16.97C14.73 15.15 10.29 15.15 7.56 16.97C7.12 17.26 6.76 17.6 6.46 17.97C4.94 16.43 4 14.32 4 12C4 7.31 7.81 3.5 12.5 3.5C17.19 3.5 21 7.31 21 12C21 14.32 20.06 16.43 18.54 17.97C18.25 17.6 17.88 17.26 17.44 16.97Z" fill="currentColor"/><path d="M12.5 6.92999C10.43 6.92999 8.75 8.60999 8.75 10.68C8.75 12.71 10.34 14.36 12.45 14.42C12.48 14.42 12.52 14.42 12.54 14.42C12.56 14.42 12.59 14.42 12.61 14.42C12.62 14.42 12.63 14.42 12.63 14.42C14.65 14.35 16.24 12.71 16.25 10.68C16.25 8.60999 14.57 6.92999 12.5 6.92999Z" fill="currentColor"/></svg>',
  'radar': <string> '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.50008 3.33332C6.89175 2.29166 8.62508 1.66666 10.5001 1.66666C15.1001 1.66666 18.8334 5.39999 18.8334 9.99999C18.8334 14.6 15.1001 18.3333 10.5001 18.3333C5.90008 18.3333 2.16675 14.6 2.16675 9.99999C2.16675 8.49166 2.56674 7.07498 3.27507 5.84998L10.5001 9.99999" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.19166 7.46666C5.74999 8.20833 5.5 9.075 5.5 10C5.5 12.7583 7.74167 15 10.5 15C13.2583 15 15.5 12.7583 15.5 10C15.5 7.24167 13.2583 5 10.5 5C9.74167 5 9.01668 5.16667 8.37501 5.47501" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'save': <string> '<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 0.916664H5.00333C2.52999 0.916664 0.499993 2.94666 0.499993 5.42V21.8583C0.499993 23.9583 2.00499 24.845 3.84833 23.83L9.54166 20.6683C10.1483 20.33 11.1283 20.33 11.7233 20.6683L17.4167 23.83C19.26 24.8567 20.765 23.97 20.765 21.8583V5.42C20.7533 2.94666 18.735 0.916664 16.25 0.916664Z" fill="currentColor"/></svg>',
  'search': <string> '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21L19 19" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'share': <string> '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3531 10.0374L13.7241 0.976995C13.1015 0.323313 11.9999 0.763946 11.9999 1.66665V6.91667C11.9999 7.46896 11.5524 7.91128 11.0014 7.94777C9.08685 8.07452 6.17455 8.68515 3.83325 11.4167C1.03325 14.6833 0.333333 18.4167 1.49992 21.9167C1.49992 21.9167 5.23336 14.9833 11.17 15.3957C11.6522 15.4292 11.9999 15.8513 11.9999 16.3346V21.1667C11.9999 22.0694 13.1015 22.51 13.7241 21.8563L22.3531 12.796C23.0887 12.0236 23.0887 10.8098 22.3531 10.0374Z" fill="white"/></svg>',
  'star': <string> '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.11991 0.938286L5.43991 1.58829C5.59991 1.90829 6.00991 2.20829 6.34991 2.26829L6.77991 2.33829C8.08991 2.55829 8.38991 3.51829 7.45991 4.45829L7.05991 4.85829C6.78991 5.12829 6.64991 5.64829 6.72991 6.02829L6.77991 6.26829C7.13991 7.84829 6.29991 8.45829 4.92991 7.62829L4.63991 7.44829C4.28991 7.23829 3.70991 7.23829 3.35991 7.44829L3.06991 7.62829C1.68991 8.45829 0.859912 7.84829 1.21991 6.26829L1.26991 6.02829C1.34991 5.65829 1.20991 5.12829 0.939911 4.85829L0.539912 4.45829C-0.390088 3.50829 -0.0900878 2.55829 1.21991 2.33829L1.64991 2.26829C1.99991 2.20829 2.39991 1.90829 2.55991 1.58829L2.87991 0.938286C3.49991 -0.311714 4.49991 -0.311714 5.11991 0.938286Z" fill="currentColor"/></svg>',
  'video-play': <string> '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.02002 7.11H21.98" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.02002 2.11V6.97" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.98 2.11V6.52" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.25 14.45V13.25C10.25 11.71 11.34 11.08 12.67 11.85L13.71 12.45L14.75 13.05C16.08 13.82 16.08 15.08 14.75 15.85L13.71 16.45L12.67 17.05C11.34 17.82 10.25 17.19 10.25 15.65V14.45V14.45Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'video-play-bold': <string> '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.23 2H9.77002V6.36H15.23V2Z" fill="#686868"/><path d="M16.73 2V6.36H22.37C21.86 3.61 19.83 2.01 16.73 2Z" fill="#686868"/><path d="M2.5 7.86V16.19C2.5 19.83 4.67 22 8.31 22H16.69C20.33 22 22.5 19.83 22.5 16.19V7.86H2.5ZM14.94 16.18L12.86 17.38C12.42 17.63 11.99 17.76 11.59 17.76C11.29 17.76 11.02 17.69 10.77 17.55C10.19 17.22 9.87 16.54 9.87 15.66V13.26C9.87 12.38 10.19 11.7 10.77 11.37C11.35 11.03 12.09 11.09 12.86 11.54L14.94 12.74C15.71 13.18 16.13 13.8 16.13 14.47C16.13 15.14 15.7 15.73 14.94 16.18Z" fill="#686868"/><path d="M8.26988 2C5.16988 2.01 3.13988 3.61 2.62988 6.36H8.26988V2Z" fill="#686868"/></svg>',
  'play': <string> '<svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#FFFFFF"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/></svg>',
};
export default icons;

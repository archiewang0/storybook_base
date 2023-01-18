// import './style.scss';
// 可以在preview引入樣式 , 將會成為canvas加入樣式



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  // 設定sidebar的排序
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },

  // backgrounds: {
  //   values: [
  //     { name: 'red', value: '#f00' },
  //     { name: 'green', value: '#0f0' },
  //   ],
  // },
}


//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
// };
import Button from "../components/Button/Button";

export default {
    title: "Button",
    component: Button,
    // argTypes: {
    //     // backgroundColor: { control: 'color' },
    //     // backgrounds: {
    //     //     control: 'color',
    //     //     defaultValue: 'yellow',
    //     // },


    //     // 這段code待確認
    //     // labelData:{
    //     //     options: ['Normal', 'Bold', 'Italic'],
    //     //     // mapping: {
    //     //     //   Bold: <b>Bold</b>,
    //     //     //   Italic: <i>Italic</i>,
    //     //     // },
    //     //     defaultValue: 'Bold',

    //     // },  

    // },

    argTypes: {
        // Assigns the argTypes to the Colors category
        // onClickHandler: {action: 'onCccccc'},
        bgColor: {
          // control: 'color',
          // table: {
          //   category: 'Colors',
          // },
          options: ['red', 'blue'],
          control: { type: 'radio' },
        },
        primary: {
          table: {
            category: 'Colors',
          },
        },
        // Assigns the argType to the Text category
        content: {
          table: {
            category: 'Text',
          },
        },
        // Assigns the argType to the Events category
        onClick: {
          table: {
            category: 'Events',
          },
        },
        // Assigns the argType to the Sizes category
        fontSize: {
          table: {
            category: 'Sizes',
            subcategory: 'fontSize',
          },
        },
        fontWeight:{
            table: {
                category: 'Sizes',
                subcategory: 'fontWeight',
            }
        }
      },
    
    parameters: {
    //     backgrounds: {
    //         values: [
    //             { name: 'red', value: '#f00' },
    //             { name: 'green', value: '#0f0' },
    //             { name: 'blue', value: '#00f' },
    //         ],
    //     },
            // actions: { argTypesRegex: '^on.*' } 
            actions: {
              handles: ['mouseover', 'click'],
            },
    },
}

const Template = (args ,allArgs) => {
    // Template 第一參數 為component 的parameter
    // 第二參數 則是 所有全域、argTypes、Parameters 的參數設定 
    // console.log('args :' ,args)
    // console.log('xxx :' ,allArgs)
    return <div style={{padding: '10px', border: '3px solid black' , backgroundColor: args.backgrounds}}>
        <Button {...args}/>
        {args.labelData !== 'Normal' ? <div>我是normal</div> : <div>我不是normal</div> }
        <p>{args.P_ElementText}</p>
    </div>
}

export const redBtn = Template.bind({})

redBtn.args ={
    bgColor:"green",
    fontSize:20,
    padding:10,
    content:"sfdfsfds",
    P_ElementText: '在Template給新增 args 的key值, 再針對key值給予參數',
    // onClickHandler: ()=>{alert('test')}
}

// export const Large = Template.bind({})

// Large.args ={
//     bgColor: "red",
//     fontSize: 12,
//     padding: 5,
//     content: "1111111",
//     border: "10px solid black",
//     P_ElementText: '在Template給新增 args 的key值, 再針對key值給予參數!!!'
// }

export const Large = {
  args: {
    bgColor: "red",
    fontSize: 20,
    padding: 5,
    content: "1111111",
    border: "10px solid black",
    P_ElementText: '在Template給新增 args 的key值, 再針對key值給予參數!!!',
    value_Date: "2023/02/25"
  },
}
// Parameters 會在tool bar增加相關的樣式調整
Large.parameters= {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
        docs: {
            source: {
            //   code: 'Your code snippet goes here.',
              language: "jsx",
              type: "code",
            },
        },
}
// export const redBtn = ()=>{
//     return <Button
//             bgColor="green"
//             fontSize={20}
//             padding={10}
//             content="sfdfsfds"
//             >
//             i'm red button
//         </Button>
// }
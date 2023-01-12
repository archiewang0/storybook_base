import Stack from "../components/Stack";

export default {
    title: "Stack",
    component: Stack,
    argTypes : {
        // 這裡可以控制 children 的arg
        numberOfChildren: {type: "number" , defaultValue: 4},
        size: {type: "number" , defaultValue: 50},
        bgColor: {type: "string" , defaultValue: 'none'},
        borderColor: {type: "string" , defaultValue: 'none'},
    }
}

const Template = ({ size , bgColor, borderColor ,numberOfChildren ,...args}) => <Stack {...args}> 
    {console.log('check args: ', { numberOfChildren ,...args})}
    {
        [...Array(numberOfChildren).keys()].map(n=>(
            <div style={{
                backgroundColor: bgColor, 
                width: size, 
                height: size,
                border: borderColor !== "none" ? `1px solid ${borderColor}` : 'none',

                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontFamily: 'Microsoft JhengHei'}}>
                {n}
            </div>
        ))
    }
</Stack>

export const StackStyle1 = Template.bind({})

StackStyle1.args ={
    spacing: 20,
    wrap: true,
    direction:'column',
}

// export const Large = Template.bind({})

// Large.args ={
//     bgColor: "red",
//     fontSize: 12,
//     padding: 5,
//     content: "1111111",
//     border: "10px solid black"
// }

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
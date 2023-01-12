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

        // 設event紀錄寫入 action
        clickEvent: {
            action: "handleClick",
        }
    }
}

const Template = ({ size , bgColor, borderColor ,numberOfChildren ,...args}) => <Stack {...args}> 
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
    // args 更新參數 此事件物件不會寫入actions裡面
    // clickEvent: ()=>{ alert('fdsfsdf')}
}

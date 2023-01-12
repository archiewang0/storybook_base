import Button from "../components/Button";

export default {
    title: "Button",
    component: Button,
}

const Template = args => <Button {...args}/>

export const redBtn = Template.bind({})

redBtn.args ={
    bgColor:"green",
    fontSize:20,
    padding:10,
    content:"sfdfsfds",
    // clickHandler: ()=>{alert('test')}
}

export const Large = Template.bind({})

Large.args ={
    bgColor: "red",
    fontSize: 12,
    padding: 5,
    content: "1111111",
    border: "10px solid black"
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
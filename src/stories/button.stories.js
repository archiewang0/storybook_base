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
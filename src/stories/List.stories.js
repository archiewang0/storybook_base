
import React from 'react';

import List from '../components/List/List';
import ListItem from '../components/ListItem/ListItem';
import TypesetMDX from './typeset.mdx';
import customMDX from "./customMDX.mdx"

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs';

const object = {
    '1': 1,
    '2': 2,
    '3': 3,
}

export default {
    component: List,
    title: 'archieStory/List',
    argTypes: {
        border: {
            // control: {
            //     type: 'select',
            //     options: ['5px solid red' , '3px solid black' , '6px solid green' ]
            // },
            control: false,
            // table: {
            //     disable: true,
            // },
        },

        // child_fontSize: {
        //     type: 'number',
        //     default: 20,

        //     description: '可以控制 subcomponent 的參數'
        // },
        // child_border: {
        //     type: 'string',
        //     default: '5px solid red',
        //     description: '可以控制 subcomponent 的參數'
        // },

        // numberOfItem :{
        //     type: 'number',
        //     default: 2,
        //     description: '可以控制 subcomponent 的參數'
        // }

        propertyA: {
            options: ['Item One', 'Item Two', 'Item Three'],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined
        },
        propertyB: {
            options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
        },
        testArgTypes:{
            options: Object.keys(object),
            mapping: object,
            control: {
                type: 'select',
                labels: {
                    ...object
                }
            }
        },
        label: {
            control: 'text',
            if: { arg: 'image', truthy: false },
        },
        image: {
            control: { type: 'select', options: ['foo.jpg', 'bar.jpg'] },
            if: { arg: 'label', truthy: false },
        },

        advanced: { control: 'boolean' },
        // below are only included when advanced is true
        margin: { control: 'number', if: { arg: 'advanced' } },
        padding: { control: 'number', if: { arg: 'advanced' } },
        cornerRadius: { control: 'number', if: { arg: 'advanced' } },
    },

    subcomponents: { ListItem },
    // parameters: {
    //     docs: {
    //         page: CustomMDXDocumentation
    //     }
    // }

    parameters: {
        actions: {
            handles: ['mouseover', 'click'],
          },
        docs: {
            // page: TypesetMDX,
            // page: customMDX,

            // description: { 
            //     component: 'Component Description',
            //   } 
        //   page: () => (
        //     <>

        //       <Subtitle >我是subtitle</Subtitle>
        //       <Title >新增內容</Title>
        //       <Description >自訂描述</Description>

        //       <Primary />
        //       <ArgsTable story={PRIMARY_STORY} />

        //       <Stories title={'我是stories!!!!!!!!!!!!!!!!!1'}></Stories>

        //     </>
        //   ),
        },
    }
};

//👇 Some function to demonstrate the behavior
const someFunction = (valuePropertyA, valuePropertyB) => {
    // Makes some computations and returns something
    let result = 0
    if (valuePropertyA === 'Item One' ) { result = result+1 }
    if (valuePropertyB === "Another Item One") { result = result+2 }
    return result
};

const Template2 = ({ propertyA, propertyB, ...rest }) => {
//👇 Assigns the function result to a variable
const someFunctionResult = someFunction(propertyA, propertyB);

return someFunctionResult > 1 ? (<List {...rest} >
    
        <ListItem style={someFunctionResult===0? {backgroundColor: 'red'} :null}> 
            {
                someFunctionResult > 1 ? <div> {someFunctionResult}    </div> :
                <div >沒有</div>
            }
            
        </ListItem>
    </List>) : 
    null
};

export const ExampleStory = Template2.bind({});
ExampleStory.args= {
    propertyA: 'Item One',
    propertyB: 'Another Item One',
};



const Template = args => {
    const {numberOfItem ,child_border , child_fontSize } = args
    return <List {...args} >
        {
            [...Array(numberOfItem).keys()].map((e)=>{
                return <ListItem fontSize={`${child_fontSize}px`} border={child_border} >
                    {e}
                </ListItem>
            })
        }
    
    </List>
};
export const hasItem = Template.bind({});
hasItem.args ={
    fontSize: '20px',
    border: '5px solid black',
    numberOfItem: 2,

    child_border: '5px solid red',
    child_fontSize: 30
}

export const noItem = Template.bind({});
noItem.args ={
    fontSize: '20px',
    border: '5px solid black',
    numberOfItem: 2,
}
noItem.parameters = { controls: { include: ['fontSize', 'border'] } };




import React from 'react';

import List from '../components/List/List';
import ListItem from '../components/ListItem/ListItem';
import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs';


export default {
    component: List,
    title: 'archieStory/List',
    argTypes: {
        border: {
            control: {
                type: 'select',
                options: ['5px solid red' , '3px solid black' , '6px solid green' ]
            }
        },

        child_fontSize: {
            type: 'number',
            default: 20,

            description: '可以控制 subcomponent 的參數'
        },
        child_border: {
            type: 'string',
            default: '5px solid red',
            description: '可以控制 subcomponent 的參數'
        },

        numberOfItem :{
            type: 'number',
            default: 2,
            description: '可以控制 subcomponent 的參數'
        }
    },
    subcomponents: { ListItem },
    // parameters: {
    //     docs: {
    //         page: CustomMDXDocumentation
    //     }
    // }

    parameters: {
        docs: {
            page: CustomMDXDocumentation
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



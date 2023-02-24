import React from 'react';
import { Text } from 'react-native';


type EmptyComponentProps = {
    title?: string
}

export default function EmptyComponent(props: EmptyComponentProps) {
    const { title = "No Data Found" } = props

    return (
        
        <Text style={{color: 'red'}}>{title}</Text>
    )
}
import React from 'react';


export default class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IListProps) {
        super(props);

        this.state = {
            chirps: []
        }
    }  
}


interface IAdminProps {

}

interface IAdminState {
    chirps:{ id: string; user: string; text: string }[];
}
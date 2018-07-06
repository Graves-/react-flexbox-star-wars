import React, { Component } from 'react';
import { Card, Button, Modal, Icon } from 'antd';
import FilmTree from './FilmTree';

export default class CharacterItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        }
    }
    render() {
        return (
            <div>
                <Card 
                title={this.props.info.name} 
                style={ESTILOS.item} 
                extra={<Button type="primary" shape="circle" icon="info-circle" size="default" onClick={this.handleInfo}/>}
                actions={[`${this.props.info.height} m.`, `${this.props.info.mass} kg.`]}
                >
                    <Icon type="star" /> {`Birth year: ${this.props.info.birth_year}`}
                </Card>

                <Modal
                visible={this.state.modalVisible}
                title={<h2><Icon type="bars" /> {this.props.info.name}</h2> }
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                    <p><strong><Icon type="double-right" /> Gender:</strong> {this.props.info.gender}.</p>
                    <p><strong><Icon type="double-right" /> Hair color:</strong> {this.props.info.hair_color}.</p>
                    <p><strong><Icon type="double-right" /> Skin color:</strong> {this.props.info.skin_color}.</p>
                    <p><strong><Icon type="double-right" /> Eye color:</strong> {this.props.info.eye_color}.</p>
                    <div>{<FilmTree films={this.props.info.films} />}</div>
                </Modal>
            </div>
        );
    }

    handleOk = () => {
        this.setState({modalVisible: false});
    }

    handleCancel = () => {
        this.setState({modalVisible: false});
    }

    handleInfo = () => {
        this.setState({modalVisible: true});
    }
}

const ESTILOS = {
    item: {
        margin: 15,
        width: 300
    }
}

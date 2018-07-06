import React, { Component } from 'react';
import { Tree, Icon } from 'antd';
import axios from 'axios';
const TreeNode = Tree.TreeNode;

export default class FilmTree extends Component {
    constructor(props){
        super(props);
        this.state = {
            charFilms: []
        }
    }
    componentDidMount(){
        const promiseArray = this.props.films.map(val => {
            return axios.get(val);
        });
        let filmDataArray = [];
        Promise.all(promiseArray).then(res => {
            res.forEach(item => {
                filmDataArray.push(item.data);
            });
            this.setState({charFilms: filmDataArray});
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        console.log(this.props.films);
        return (
            <div>
                <Tree onSelect={this.onSelect} selectable={false}>
                    <TreeNode title={<h3><Icon type="video-camera" /> Films</h3>} key="0-0">
                        {this.state.charFilms.map((item, i) => {
                            return(
                                <TreeNode title={item.title} key={i}>
                                    <TreeNode title={<p><Icon type="user" />{`Director: ${item.director}`}</p>} />
                                    <TreeNode title={<p><Icon type="user" />{`Producer: ${item.producer}`}</p>} />
                                    <TreeNode title={<p><Icon type="calendar" />{`Release date: ${item.release_date}`}</p>} />
                                </TreeNode>
                            );
                        })}
                    </TreeNode>
                </Tree>
            </div>
        );
    }
}

import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {styles} from 'constants/Base';

export default class CreateTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            motivation: '',
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        let title = this.state.title.slice();
        let description = this.state.description.slice();
        let motivation = this.state.motivation.slice();
        if (title) {
            this.props.onAdd(title, description, motivation);
            this.setState({
                title: '',
                description: '',
                motivation: ''
            });
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.titleText}
                    placeholder='Task Title'
                    value={this.state.title}
                    onChangeText={(title) => this.setState({title})}
                />
                <TextInput
                    placeholder='Task Descirption'
                    multiline={true}
                    value={this.state.description}
                    onChangeText={(description) => this.setState({description})}
                />
                <TextInput
                    placeholder='Task Motivation'
                    multiline={true}
                    value={this.state.motivation}
                    onChangeText={(motivation) => this.setState({motivation})}
                />
                <Button
                    onPress={this.onAdd}
                    title='Add'
                />
            </View>
        )
    }
}
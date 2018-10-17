import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from 'constants/Base';

export default class CreateTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        let title = this.state.title.slice();
        let description = this.state.description.slice();
        if (title) {
            this.props.onAdd(title, description);
            this.setState({
                title: '',
                description: ''
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
                <Button
                    onPress={this.onAdd}
                    title='Add'
                />
            </View>
        )
    }
}
import { Text, Layout, Card, Spinner } from '@ui-kitten/components';
import React, { Component, } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore,
    navigation: any,
    route: any
}

@inject('homeStore')
@observer
export default class Film extends Component<Props> {

    async componentDidMount() {
        const { params } = this.props.route;
        const { getFilmById } = this.props.homeStore;
        await getFilmById(params.id);
    }

    render() {
        const { film } = this.props.homeStore;

        return (<Layout style={styles.layout}>
            <ScrollView>
                {!film.episode_id && <Card><Text>Carregando...<Spinner/></Text></Card>}

                {film.episode_id &&
                    <Card status='success'>
                        <Image source={{ uri: film.photo }}
                            style={styles.photo}/>
                        <Text style={styles.title}>{film.title}</Text>
                        <Text>{film.opening_crawl}</Text>
                        <Text>Director: {film.director}</Text>
                        <Text>Producer: {film.producer}</Text>
                        <Text>Release Date: {film.release_date}</Text>
                    </Card>
                }

                {film.characters && <Card><Text>Personagens</Text></Card>}

                {film && film.characters && film.characters.map((character, k)=> (
                    <Card key={k} status='success'>
                        <Image source={{ uri: character.photo }}
                            style={styles.photo}/>
                        <Text>{character.name}</Text>
                        <Text>Gender: {character.gender}</Text>
                        <Text>Mass: {character.mass}</Text>
                    </Card>
                ))}
                </ScrollView>
        </Layout>);
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20
    },
    photo: {
        width: 200,
        height: 200
    }
});
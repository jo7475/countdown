import { Avatar, Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import { theme } from '../theme/theme';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar, StyleSheet } from 'react-native';
export default function Profile() {
    console.log('object');
    StatusBar.setBarStyle('light-content', true);
    return (
        <Box flex={1}>
            <LinearGradient
                colors={['#742BD9', '#A72EE2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Box w="100%" h={200} style={styles.headerContainer}>
                    <Text style={styles.headerText}>My Profile</Text>
                </Box>
            </LinearGradient>
            <Box style={styles.bodyContainer}>
                <Avatar
                    size={100}
                    source={{
                        uri: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
                    }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        paddingTop: 10,
                        color: theme.colors.purple[800],
                    }}>
                    Jane doe
                </Text>
                <Text style={{ color: 'gray', paddingBottom: 40 }}>jane@gmail.com</Text>
                <Button
                    style={{
                        backgroundColor: '#F6F0FE',
                        width: '100%',
                        color: '#A72EE2',
                        borderRadius: 50,
                    }}>
                    <Text style={{ color: '#A72EE2', fontSize: 15, padding: 10 }}>
                        Edit Profile
                    </Text>
                </Button>
                <Button
                    style={{
                        backgroundColor: '#FEECEE',
                        width: '100%',
                        borderRadius: 50,
                        marginTop: 10,
                    }}>
                    <Text style={{ color: '#DA2830', fontSize: 15, padding: 10 }}>
                        Log Out
                    </Text>
                </Button>
                <VStack w="100%" h={100} style={{ borderWidth: 0.1, marginTop: 100 }}>
                    <HStack>
                        <Avatar style={{ padding: 20 }} />
                        <VStack>
                            <Text>Invitation on event</Text>
                            <Text style={{ color: 'gray' }}>From John Doe</Text>
                        </VStack>
                    </HStack>
                    <HStack
                        style={{
                            width: '100%',
                            justifyContent: 'space-around',
                            paddingVertical: 40,
                        }}>
                        <Button
                            style={{
                                width: '45%',
                                borderRadius: 50,
                            }}>

                            Decline
                        </Button>
                        <Button style={{ width: '45%', borderRadius: 50 }}>Accept</Button>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    bodyContainer: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: theme.colors.white[900],
        height: 900,
        position: 'relative',
        marginTop: -60,
        alignItems: 'center',
        padding: 10,
    },
    headerContainer: {
        justifyContent: 'center',
        display: 'flex',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
        padding: 10,
    },
});

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FoodieaApp() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (searchText.toLowerCase() === 'bulgogi') {
            navigation.navigate('BulgogiSearch');
        }
    };


    return (
        <View style={styles.container}>
            {/* 헤더 */}
            <View style={styles.header}>
                {/* 로고 이미지 */}
                <Image
                    source={require('/Users/bangsujong/Desktop/AppDev_React/AppProject/assets/Image/main_logo.png')}
                    style={styles.logoImage}
                />
                {/* 로고 텍스트 */}
                <Text style={styles.logoText}>FOODIEA</Text>

                {/* 검색바 (아이콘 포함) */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="요리를 검색해 주세요"
                        value={searchText}                   // TextInput의 value를 searchText 상태와 연결
                        onChangeText={setSearchText}          // 입력값 변경 시 searchText 상태 업데이트
                        onSubmitEditing={handleSearch}        // Enter 키를 눌렀을 때 handleSearch 호출
                    />
                    <Icon name="search" size={20} color="#ff5a5f" style={styles.searchIcon} />
                </View>
            </View>

            {/* 콘텐츠 */}
            <ScrollView>
                <Text style={styles.sectionTitle}>실시간 인기</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {recipeData.map((item, index) => (
                        <View key={index} style={styles.card}>
                            <Image source={item.image} style={styles.recipeImage} />
                            <Text style={styles.recipeTitle}>{item.title}</Text>
                            <Text style={styles.recipeInfo}>{item.author}</Text>
                        </View>
                    ))}
                </ScrollView>

                <Text style={styles.sectionTitle}>최신 요리 후기</Text>
                <View style={styles.reviewSection}>
                    <Image source={{ uri: 'https://placekitten.com/80/80' }} style={styles.reviewImage} />
                    <View style={styles.reviewText}>
                        <Text style={styles.reviewTitle}>동원장어구이</Text>
                        <Text style={styles.reviewContent}>맛있는 레시피 감사합니다. 저는 버터로 구웠더니 풍미가 좋았어요.</Text>
                    </View>
                </View>
            </ScrollView>

            {/* 하단 네비게이션 */}
            <View style={styles.navBar}>
                <TouchableOpacity>
                    <Icon name="home-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="bookmark-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="camera-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyID')}>
                    <Icon name="person-outline" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const recipeData = [
    {
        title: '소불고기 황금 양념 레시피',
        author: '소담다담',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '오징어 볶음',
        author: 'hancy02',
        image: require('../../assets/Image/friedSquid.jpg'),
    },
    // 추가적인 레시피 데이터...
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logoImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff5a5f',
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '90%',
        height: 40,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 0,
    },
    searchIcon: {
        marginLeft: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    horizontalScroll: {
        paddingHorizontal: 10,
    },
    card: {
        width: 150,
        marginHorizontal: 10,
    },
    recipeImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    recipeTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
    recipeInfo: {
        color: '#888',
    },
    reviewSection: {
        flexDirection: 'row',
        padding: 20,
    },
    reviewImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    reviewText: {
        marginLeft: 10,
        flex: 1,
    },
    reviewTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewContent: {
        color: '#555',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function IndependentAboutScreen() {
    // const dispatch = useDispatch();

    // const signInWithKakao = async () => {
    //     try {
    //         const token = await login();
    //         console.log('Access Token:', token.accessToken);

    //         const profile = await getProfile();
    //         console.log('User Profile:', profile);

    //         dispatch(
    //             setUser({
    //                 id: profile.id,
    //                 nickname: profile.nickname,
    //                 thumbnailImageUrl: profile.thumbnailImageUrl,
    //             })
    //         );

    //         navigation.navigate('Tabs', { screen: 'All' });
    //     } catch (err) {
    //         console.error('Login failed', err);
    //     }
    // };
    return (
        <View className='flex flex-1 justify-center px-8 tracking-tighter'>
            <View>
                <Text className='text-3xl font-bold leading-normal'>
                    놀거리 코스추천 건강관리{"\n"}
                    개인 맞춤형 플렛폼
                </Text>
                <View className='flex flex-row items-center mt-6'>
                    <Image className="size-14" src="https://avatars.githubusercontent.com/u/185643401?s=400&u=32e56c3ff11a77a00b1f2aa5ab2c2f88c4535d7c&v=4" />
                    <Text className='text-4xl font-bold ml-2'>TOOKTOOK <Text className='text-green-500'>.</Text></Text>
                </View>
            </View>
            <View className="mt-56">
                <Text className="text-center text-gray-500 mb-4">SNS 계정으로 간편 가입하기</Text>
                <View className="flex-row justify-center gap-5 mt-2">
                    {/* <TouchableOpacity className="size-16 bg-yellow-400 rounded-full items-center justify-center" onPress={signInWithKakao}> */}
                    <TouchableOpacity className="size-16 bg-yellow-400 rounded-full items-center justify-center">
                        <Text>K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="size-16 bg-green-500 rounded-full items-center justify-center">
                        <Text>N</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="size-16 bg-black rounded-full items-center justify-center">
                        <Text className="text-white">A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="size-16 bg-blue-500 rounded-full items-center justify-center">
                        <Text className="text-white">G</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

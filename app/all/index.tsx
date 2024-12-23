import { useRouter } from "expo-router";
import { View, Text, Button, ScrollView } from "react-native";

export default function All() {
    return (
        <View className="flex-1 bg-gray-100 px-4 pb-12 mt-8">
            <ScrollView className='mt-5 py-10'>
                <Text className='text-3xl font-bold'>문경민</Text>
                <View className='bg-slate-200 w-full h-48 mt-6 rounded-2xl'>
                </View>
                <View className='bg-white mt-5 rounded-2xl p-6'>
                    <Text className="text-2xl font-bold tracking-tighter">최근</Text>
                    <View className='flex flex-row items-center mt-6'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🧭</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>러닝코스 개선하기</Text>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🚀</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>목표 재설정</Text>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🚐</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>여행코스 개선하기</Text>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🍂</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>여행코스 개선하기</Text>
                    </View>
                </View>
                <View className='bg-white mt-5 rounded-2xl p-6'>
                    <Text className="text-2xl font-bold tracking-tighter">모든 서비스</Text>
                    <View className="flex flex-row items-center mt-6 w-full">
                        <Text className="bg-gray-200 rounded-xl p-2 text-2xl">🧭</Text>
                        <View className="flex flex-row justify-between items-center flex-1 ml-4">
                            <Text className="text-xl font-semibold tracking-tighter">러닝코스 개선하기</Text>
                            <Text className="text-base text-gray-600">새로운 코스 발견!</Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center mt-6 w-full">
                        <Text className="bg-gray-200 rounded-xl p-2 text-2xl">🚀</Text>
                        <View className="flex flex-row justify-between items-center flex-1 ml-4">
                            <Text className="text-xl font-semibold tracking-tighter">목표 재설정</Text>
                            <Text className="text-base text-gray-600">이벤트 진행중</Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center mt-6 w-full">
                        <Text className="bg-gray-200 rounded-xl p-2 text-2xl">🚐</Text>
                        <View className="flex flex-row justify-between items-center flex-1 ml-4">
                            <Text className="text-xl font-semibold tracking-tighter">여행코스 개선하기</Text>
                            <Text className="text-base text-gray-600">기능출시</Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center mt-6 w-full">
                        <Text className="bg-gray-200 rounded-xl p-2 text-2xl">🍂</Text>
                        <View className="flex flex-row justify-between items-center flex-1 ml-4">
                            <Text className="text-xl font-semibold tracking-tighter">어디론가 떠나기</Text>
                            <Text className="text-base text-gray-600">미지의 영역</Text>
                        </View>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🧭</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>러닝코스 개선하기</Text>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🚀</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>목표 재설정</Text>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🚐</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>여행코스 개선하기</Text>
                    </View>
                    <View className='flex flex-row items-center mt-5'>
                        <Text className='bg-gray-200 rounded-xl p-2 text-2xl'>🍂</Text>
                        <Text className='text-xl font-semibold tracking-tighter ml-4'>여행코스 개선하기</Text>
                    </View>
                </View>
                <View className="mt-12 px-6">
                    <View className='mb-8'>
                        <Text className="text-gray-500 mb-6">제휴문의</Text>
                        <View className="flex flex-wrap flex-row justify-between">
                            <View className="w-1/2 mb-5">
                                <Text className="text-xl font-semibold">문의사항</Text>
                            </View>
                            <View className="w-1/2 mb-5">
                                <Text className="text-xl font-semibold">버그픽스 문의</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text className="text-gray-500 mb-6">문의 및 알림</Text>
                        <View className="flex flex-wrap flex-row justify-between">
                            <View className="w-1/2 mb-5">
                                <Text className="text-xl font-semibold">고객센터</Text>
                            </View>
                            <View className="w-1/2 mb-5">
                                <Text className="text-xl font-semibold">자주 묻는 질문</Text>
                            </View>
                            <View className="w-1/2 mb-5">
                                <Text className="text-xl font-semibold">공지사항</Text>
                            </View>
                            <View className="w-1/2 mb-5">
                                <Text className="text-xl font-semibold">약관 및 정책</Text>
                            </View>
                        </View>
                    </View>
                    <Text className='text-red-500 text-center my-12'>
                        로그아웃
                    </Text>
                    <View>
                        <Text className="text-center text-gray-400 text-sm">
                            Copyright Devscarycat in Hello, All Rights Reserved.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}


// import { useRouter } from "expo-router";
// import { View, Text, Button } from "react-native";

// export default function SettingsScreen() {
//     const router = useRouter();
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <Text style={{ fontSize: 24, fontWeight: "bold" }} >Settings Screen</Text>
//             <Button title="Go to Detail" onPress={() => router.push("/settings/details")} />
//         </View>
//     );
// }

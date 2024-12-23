import { View, Text, Button, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Root() {
    const router = useRouter();
    const isRunning = true;
    return (
        <>
            <ScrollView className="flex-1 bg-gray-100 px-4 mt-8">
                <View className='mt-5 flex flex-row justify-between items-center py-10'>
                    <View>
                        {/* 여기에 스픽 불꽃 날짜 달력 추가 참조 ㅇㅇ 그리고 만약에 불꽃이 이어지면 날짜 옆에 불꽃 이모지 생성 */}
                        <Text className='text-3xl font-bold'>Today,<Text className='text-slate-500'> 12월 14일</Text></Text>
                    </View>
                    {/* 이것도 프로필로 연결이 아니라 스위치 버튼으로 하자 ㅇㅇ */}
                    <TouchableOpacity onPress={() => console.log('프로필로 이동')}>
                        <View className='size-12'>
                            <Image className='w-full h-full rounded-full border border-gray-300' src='https://avatars.githubusercontent.com/u/80581099?v=4' /></View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Stack', { screen: 'Questionnaire' })}>
                        <View className='size-12'><Image className='w-full h-full rounded-full border border-gray-300' src='https://avatars.githubusercontent.com/u/80581099?v=4' /></View>
                    </TouchableOpacity> */}
                </View>
                {isRunning ?
                    (<View className="flex flex-1 justify-center">
                        <View className="bg-stone-900 flex flex-row relative justify-center items-center py-5 rounded-2xl shadow-sm gap-7">
                            <View className="size-20 rounded-full bg-stone-700 justify-center items-center">
                                <Text className="text-white text-5xl">🔥</Text>
                            </View>
                            <View>
                                <View className="flex flex-row justify-between items-center">
                                    <Text className="text-white tracking-tight text-lg font-semibold">
                                        오늘의 추천 러닝코스!
                                    </Text>
                                </View>
                                <Text
                                    className="text-stone-400 text-sm max-w-52"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    여의도 한강공원 &gt; 개울가 &gt; 뚝섬
                                </Text>
                                <Text className="text-stone-300 text-base mt-2 font-semibold">6.1km - 45분</Text>
                            </View>
                            <Text className="text-xs absolute top-4 text-white right-5">i</Text>
                        </View>
                        <View className="mt-5 bg-white p-6 rounded-2xl">
                            <View className="flex flex-row justify-between items-center">
                                <Text className="text-2xl font-bold tracking-tighter">🚩 추천 러닝코스</Text>
                            </View>
                            <View className='flex flex-row mt-6 items-center'>
                                <View className='bg-blue-200 size-20 rounded-lg'></View>
                                <View className='ml-4'>
                                    <Text className='text-lg font-semibold'>간단한 조깅 코스 - 초급</Text>
                                    <Text className='text-gray-600'>가벼운 시작을 알리는 코스입니다.</Text>
                                    <Text className='mt-2 text-amber-600 font-semibold'>19분 - 85kcal</Text>
                                </View>
                            </View>
                            <View className='flex flex-row mt-6 items-center'>
                                <View className='bg-blue-200 size-20 rounded-lg'></View>
                                <View className='ml-4'>
                                    <Text className='text-lg font-semibold'>간단한 조깅 코스 - 중급</Text>
                                    <Text className='text-gray-600'>가벼운 시작을 알리는 코스입니다.</Text>
                                    <Text className='mt-2 text-amber-600 font-semibold'>19분 - 85kcal</Text>
                                </View>
                            </View><View className='flex flex-row mt-6 items-center'>
                                <View className='bg-blue-200 size-20 rounded-lg'></View>
                                <View className='ml-4'>
                                    <Text className='text-lg font-semibold'>간단한 조깅 코스 - 전문가</Text>
                                    <Text className='text-gray-600'>가벼운 시작을 알리는 코스입니다.</Text>
                                    <Text className='mt-2 text-amber-600 font-semibold'>19분 - 85kcal</Text>
                                </View>
                            </View>
                            <View className='mt-8'>
                                <Text className='text-center text-gray-700'>더보기 +</Text>
                            </View>
                        </View>

                        <View className="mt-5 bg-white p-6 rounded-2xl">
                            <View className="flex flex-row justify-between items-center">
                                <Text className="text-2xl font-bold tracking-tighter">⛅️ 지금까지 여정</Text>
                            </View>

                            <View className="flex flex-wrap flex-row justify-between mt-4">
                                {Array(6)
                                    .fill(null)
                                    .map((_, index) => (
                                        <View
                                            key={index}
                                            className={`bg-lime-100 rounded-2xl w-[47%] aspect-square mb-6 p-4`}
                                        >
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-5xl shadow-sm">{index % 2 === 0 ? '⛰️' : '🏃'}</Text>
                                                <Text className="bg-stone-800 text-xs flex items-center text-white rounded-full size-4 text-center">
                                                    i
                                                </Text>
                                            </View>
                                            <View className="mt-2">
                                                <Text className="text-2xl font-bold">{index % 2 === 0 ? '56곳' : '340km'}</Text>
                                                <Text className="text-gray-700 text-sm">{index % 2 === 0 ? '방문한 장소' : '걸어온 발걸음'}</Text>
                                            </View>
                                        </View>
                                    ))}
                            </View>
                        </View>
                    </View>)
                    : (<View>

                    </View>)}

            </ScrollView>
        </>

    );
}
